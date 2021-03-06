class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
      purchase: false,
      url: "http://localhost:3000",
      form1Data: {},
      form2Data: {},
      form3Data: {}
    }
  };

  setCheckout() {
    this.setState({ checkout: !this.state.checkout });
  };
  setForm1() {
    this.setState({ form1: !this.state.form1 });
  };
  setForm2() {
    this.setState({ form2: !this.state.form2 });
  };
  setForm3() {
    this.setState({ form3: !this.state.form3 });
  };
  setPurchase() {
    this.setState({ purchase: !this.state.purchase })
  };

  submitForm1(event) {
    this.setState({ form1Data: event }, () => {
      let options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({event})
      };
      fetch(`${this.state.url}/f1`, options)
        .then((data) => {
          if (!data.ok) {
            throw new Error(data.status);
          }
        })
        .catch((err) => {
          if (err) {
            console.error('Error in submitForm1: ', err);
          }
        })
    });
  };
  submitForm2(event) {
    this.setState({ form2Data: event }, () => {
      let options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ form1Data: this.state.form1Data, form2Data: event })
      };
      fetch(`${this.state.url}/f2`, options)
        .then((data) => {
          if (!data.ok) {
            throw new Error(data.status);
          }
        })
        .catch((err) => {
          if (err) {
            console.error('Error in submitForm2: ', err);
          }
        })
    })
  };

  submitForm3(event) {
    this.setState({ form3Data: event }, () => {
      let options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ form1Data: this.state.form1Data, form3Data: event })
      };
      fetch(`${this.state.url}/f3`, options)
        .then((data) => {
          if (!data.ok) {
            throw new Error(data.status);
          }
        })
        .catch((err) => {
          if (err) {
            console.error('Error in submitForm3: ', err);
          }
        })
    })
  };

  purchaseHandler() {
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.form1Data)
    };
    fetch(`${this.state.url}/purchase`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        this.setCheckout();
        this.setPurchase();
      })
      .catch((err) => {
        if (err) {
          console.error('Error in purchaseHandler: ', err);
        }
      })
  }


  render() {
    if (this.state.checkout) {
      return (
        <div className="main">
          <Checkout setCheckout={this.setCheckout.bind(this)} setForm1={this.setForm1.bind(this)} />
        </div>
      )
    } else if (this.state.form1) {
      return (
        <div className="main">
          <Form1 setForm1={this.setForm1.bind(this)} setForm2={this.setForm2.bind(this)} submitForm1={this.submitForm1.bind(this)} />
        </div>
      )
    }
    else if (this.state.form2) {
      return (
        <div className="main">
          <Form2 setForm2={this.setForm2.bind(this)} setForm3={this.setForm3.bind(this)} submitForm2={this.submitForm2.bind(this)} />
        </div>
      )
    } else if (this.state.form3) {
      return (
        <div className="main">
          <Form3 setForm3={this.setForm3.bind(this)} setPurchase={this.setPurchase.bind(this)} submitForm3={this.submitForm3.bind(this)} />
        </div>
      )
    } else if (this.state.purchase) {
      return (
        <Purchase form1Data={this.state.form1Data} form2Data={this.state.form2Data} form3Data={this.state.form3Data} setPurchase={this.setPurchase.bind(this)} setForm3={this.setForm3.bind(this)} purchaseHandler={this.purchaseHandler.bind(this)} />
      )
    }
  };
};

let Checkout = (props) => {
  var checkoutHandler = () => {
    props.setCheckout();
    props.setForm1();
  }

  return (
    <button onClick={checkoutHandler}>
      Checkout
    </button>
  );
};

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    this.props.submitForm1(this.state);
    this.props.setForm1();
    this.props.setForm2();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Enter full name, email address, and password: (Step 1 of 4)
        <br />
        <label>Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        </label>
        <br />
        <label>Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
        </label>
        <br />
        <label>Password:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        </label>
        <br />
        <button>
          Next
        </button>
      </form>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipToLine1: '',
      shipToLine2: '',
      shipToCity: '',
      shipToState: '',
      shipToZip: 0
    }
  }

  handleLine1Change(event) {
    this.setState({ shipToLine1: event.target.value });
  }

  handleShipToLine2Change(event) {
    this.setState({ shipToLine2: event.target.value });
  };

  handleShipToCityChange(event) {
    this.setState({ shipToCity: event.target.value });
  };

  handleShipToStateChange(event) {
    this.setState({ shipToState: event.target.value });
  };

  handleShipToZipChange(event) {
    this.setState({ shipToZip: event.target.value });
  };

  handleSubmit() {
    this.props.submitForm2(this.state);
    this.props.setForm2();
    this.props.setForm3();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Enter Shipping address, City, State, and Zip code: (Step 2 of 4)
        <br />
        <label>Line1:
          <input type="text" value={this.state.shipToLine1} onChange={this.handleLine1Change.bind(this)} />
        </label>
        <br />
        <label>Line2:
          <input type="text" value={this.state.shipToLine2} onChange={this.handleShipToLine2Change.bind(this)} />
        </label>
        <br />
        <label>City:
          <input type="text" value={this.state.shipToCity} onChange={this.handleShipToCityChange.bind(this)} />
        </label>
        <br />
        <label>State:
          <input type="text" value={this.state.shipToState} onChange={this.handleShipToStateChange.bind(this)} />
        </label>
        <br />
        <label>Zip:
          <input type="text" value={this.state.shipToZip} onChange={this.handleShipToZipChange.bind(this)} />
        </label>
        <br />
        <button>
          Next
        </button>
      </form>
    )
  }
}
class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: 0,
      cvv: 0,
      billingZip: 0
    }
  }

  handleCreditChange(event) {
    this.setState({ credit: event.target.value });
  }

  handleCvvChange(event) {
    this.setState({ cvv: event.target.value });
  };

  handleBillingZipChange(event) {
    this.setState({ billingZip: event.target.value });
  }


  handleSubmit() {
    this.props.submitForm3(this.state);
    this.props.setForm3();
    this.props.setPurchase();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Enter Credit Card Number, CVV, and Billing Zip Code: (Step 3 of 4)
        <br />
        <br />
        <label>Credit Card:
              <input type="text" value={this.state.credit} onChange={this.handleCreditChange.bind(this)} />
        </label>
        <br />
        <label>CVV:
              <input type="text" value={this.state.cvv} onChange={this.handleCvvChange.bind(this)} />
        </label>
        <br />
        <label>Billing Zip Code:
              <input type="text" value={this.state.billingZip} onChange={this.handleBillingZipChange.bind(this)} />
        </label>
        <br />
        <button>
          Submit
        </button>
      </form>
    )
  }
};

var Purchase = (props) => {
  return (
    <div>
        Review purchase information.  If correct, press the Purchase button: (Step 4 of 4)
        <br />
      <div>
        Name: {props.form1Data.name}
      </div>
      <div>
        Email: {props.form1Data.email}
      </div>
      <div>
        Password: {props.form1Data.password}
      </div>
      <div>
        Ship to:
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;Address Line 1: {props.form2Data.shipToLine1}
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;Address Line 2: {props.form2Data.shipToLine2}
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;City: {props.form2Data.shipToCity}
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;State: {props.form2Data.shipToState}
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;Zip: {props.form2Data.shipToZip}
        </div>
      </div>
      <div>
        Credit card number: {props.form3Data.credit}
      </div>
      <div>
        CVV: {props.form3Data.cvv}
      </div>
      <div>
        Billing zip code: {props.form3Data.billingZip}
      </div>
      <br />
      <button onClick={props.purchaseHandler}> Purchase </button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));