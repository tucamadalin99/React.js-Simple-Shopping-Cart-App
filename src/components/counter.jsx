import React, { Component } from "react";
class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() { // Set to arrow function to inherit this
  //   console.log("Increment Clicked");
  // }

  componentDidUpdate(prevProps, prevState) {
    //used to decide wheter to make an ajax/axios call based on the update 
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax/Axios call and get new data from the server
    }
  }

  componentWillUnmount() {
    //Called before a component is removed from the DOM
    console.log('Couner-Unmount')
  }

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  doHandleIncrement = (e) => {
    console.log(e);
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <h4>Item #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //Random self task
  // Build a decrement button that will decrement the badge.
}

export default Counter;
