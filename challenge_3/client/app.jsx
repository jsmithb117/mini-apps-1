class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      form1: false,
      form2: false,
      form3: false,
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
    this.setState({ form3: ~this.state.form3 });
  };

  submitForm1(event) {
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    };
    fetch(`${this.state.url}/f1`, options)
      .then((data) => {
        if (!data.ok) {
          throw new Error(response.status);
        }
        console.log('F1 data: ', data);
      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      })
  };
  submitForm2(event) {
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    };
    fetch(`${this.state.url}/f2`, options)
      .then((data) => {
        if (!data.ok) {
          throw new Error(response.status);
        }
        console.log('F2 data: ', data);

      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      })
  };

  submitForm3(event) {
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    };
    fetch(`${this.state.url}/f3`, options)
      .then((data) => {
        if (!data.ok) {
          throw new Error(response.status);
        }
        console.log('F3 data: ', data);

      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      })
  };



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
          <Form3 setForm3={this.setForm3.bind(this)} setCheckout={this.setCheckout.bind(this)} submitForm3={this.submitForm3.bind(this)} />
        </div>
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
          Submit
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

  handleShipToStateChange(event) {
    this.setState({ shipToState: event.target.value });
  }

  handleShipToZipChange(event) {
    this.setState({ shipToZip: event.target.value });
  }

  handleSubmit() {
    this.props.submitForm2(this.state);
    this.props.setForm2();
    this.props.setForm3();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Shipping Address:
        <label>Line1:
          <input type="text" value={this.state.shipToLine1} onChange={this.handleLine1Change.bind(this)} />
        </label>
        <br />
        <label>Line2:
          <input type="text" value={this.state.shipToLine2} onChange={this.handleShipToLine2Change.bind(this)} />
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
          Submit
        </button>
      </form>
    )
  }
}
class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: '',
      cvv: '',
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
    this.props.setCheckout();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Shipping Address:
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
ReactDOM.render(<App />, document.getElementById('app'));

////Components:
  //App
    //has booleans for conditional rendering of:
      //button
      //F1
      //F2
      //F3
    //has set handlers for each that flips boolean state when called.
    //has onsubmit for F1, F2, and F3
      //does a POST for each
    //Checkout - Renders a button that sets 'form1' to true
      //Form1 - if form1 is true, renders F1
        //state Form1 holds:
          //name
          //email
          //password
        //has onChange for each state
        //has onSubmit (as prop from App), submits all three states simultaneously
          //after submit, clears state
      //Form2
        //state From2 holds:
          // shipToLine1
          // shipToLine2
          // shipToCity
          // shipToState
          // shipToZip
        //has onChange for each state
        //has onSubmit (as prop from App), submits all 5 states simultaneously
      //Form3
        //state Form3 holds:
          // credit
          // CVV
          // billingZip
        //has onChange for each state
        //has onSubmit (as prop from App), submits all 3 states simultaneously
