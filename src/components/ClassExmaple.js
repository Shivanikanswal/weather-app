import React from "react";
class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Name:{name}</h2>
      </div>
    );
  }
}

export default ClassExample;
