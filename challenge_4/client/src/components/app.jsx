import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thing: [],
    }
  }

  render() {
    return(
      <div>
        Connect Four
      </div>
    )
  }
}

export default App;