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
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        
        {this.state.isToggleOn && <p> {this.state.jokes} </p>}
      </div>
    );
  }
}

export default Toggle;




// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       jokes: "https://icanhazdadjoke.com/"
      
//     }
//     // console.log(props)
//   }
//   render() {
//     return (
//       <div>
//         <button>ON</button>
//         <h3>Joke: {this.state.jokes}</h3>
//       </div>
//     );
//   }
// };

// // change create Root back to render
// const root = ReactDOM.render(document.getElementById('root'));
// root.render(<Toggle />);