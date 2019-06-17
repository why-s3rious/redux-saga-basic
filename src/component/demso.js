import React, { Component } from "react";

class demso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  componentWillReceiveProps() {
    this.setState({}, this.setState({ step: this.props.step }));
  }

  render() {
    return (
      <div className="demso">
        <h1> {this.props.step}</h1>

        <button
          className="btn btn-primary"
          onClick={() => this.props.HandleIncrease(1)}
          //
        >
          increase
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.HandleDecrease(1)}
        >
          decrease
        </button>
      </div>
    );
  }
}
export default demso;
