class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      form1: false,
      form2: false,
      form3: false
    }
  };

  setCheckout() {
    // debugger;
    this.setState({ checkout: !this.state.checkout });
  };
  setForm1() {
    // debugger;
    this.setState({ form1: !this.state.form1 });
  };
  setForm2() {
    // debugger;
    this.setState({ form2: !this.state.form2 });
  };
  setForm3() {
    // debugger;
    this.setState({ form3: ~this.state.form3 });
  };

  submitForm1(event) {
    // debugger;
    console.log('form1 submit event: ', event);
    //event = {
      // name: 'input',
      // email: 'input',
      // password: 'input'
    // }
  };
  submitForm2(event) {
    // debugger;
    console.log('form2 submit event: ', event);
  };
  submitForm3(event) {
    // debugger;
    console.log('form3 submit event: ', event);
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
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  };

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit() {
    // debugger;
    this.props.submitForm1(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        </label>
        <label>Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
        </label>
        <label>Password:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        </label>
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
    this.setState({shipToLine1: event.target.value});
  }

  handleShipToLine2Change(event) {
    this.setState({shipToLine2: event.target.value});
  };

  handleShipToStateChange(event) {
    this.setState({shipToState: event.target.value});
  }

  handleShipToZipChange(event) {
    this.setState({shipToZip: event.target.value});
  }

  handleSubmit() {
    props.submitForm1(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        Shipping Address:
        <label>Line1:
          <input type="text" value={this.state.shipToLine1} onChange={this.handleLine1Change.bind(this)} />
        </label>
        <label>Line2:
          <input type="text" value={this.state.shipToLine2} onChange={this.handleShipToLine2Change.bind(this)} />
        </label>
        <label>State:
          <input type="text" value={this.state.shipToState} onChange={this.handleShipToStateChange.bind(this)} />
        </label>
        <label>Zip:
          <input type="text" value={this.state.shipToZip} onChange={this.handleShipToZipChange.bind(this)} />
        </label>
        <button>
          Submit
        </button>
      </form>
    )
  }
}

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
