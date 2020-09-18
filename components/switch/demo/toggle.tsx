import React from 'react'
import Switch from '../switch';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <button onClick={this.toggle}>
          Toggle disabled
        </button>
      </div>
    );
  }
}

export default App;