import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    const { age } = props;
    super(props);
    this.state = {
      age,
    };
  }
  incAge = () => {
    this.setState({ age: this.state.age + 1 });
  };
  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor} </p>
        <button onClick={this.incAge}>
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}
export default PersonCard;
