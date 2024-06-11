import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  // This life-cycle method makes this component a ErrorBoundary.
  // as of react-18 there is no alternative to this means to build error
  // boundaries we need to build class based component (only for error boundaries)
  componentDidCatch(error) {
    console.log(error);
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError){
        return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
