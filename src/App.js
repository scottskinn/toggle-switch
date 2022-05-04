import React, {
  Component
} from "react";
import ToggleSwitch from "./components/toggle-switch";
import "./App.css";
import axios from "axios";



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      jokes: ""
    }
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
    console.log(this.state.jokes);
    // setJoke(`${this.state.jokes}`);
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="Joke">
          {this.state.jokes}
          </div>

          <button onClick={this.state.jokes} className="Toggle" type="button">
            Jokes
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;