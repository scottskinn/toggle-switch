import React from 'react';
import axios from "axios";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.jokes = "https://icanhazdadjoke.com/"
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  async componentDidMount() {
    const url = "https://icanhazdadjoke.com/"
    let result = null;
    try {
      result = await axios.get(url, {
        headers: {
          Accept: "application/json"
        }
      })
    } catch(e) {
      console.log(e);
    }
    this.setState({jokes: result.data.joke});
  }

  render() {
    return (
      <main className='main'>
        <h1>Dad Jokes</h1>
          <button onClick={this.handleClick} className="button">
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        
          {this.state.isToggleOn && <p className='jokes'> {this.state.jokes} </p>}
          {this.state.isToggleOn !== true && <p className='jokes'> Turn me back on for a joke! </p>}
      </main>
    );
  }
}

export default Toggle;

