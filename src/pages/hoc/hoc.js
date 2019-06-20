import React, { Component } from 'react';

function logProps(WrappedComponent) {
  class LogProps extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
  forwardRef.displayName = 'hello'
  return React.forwardRef(forwardRef);
}

class FancyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(this);
  }
  render() {
    console.log(this);
    return <div>button</div>;
  }
}

export default logProps(FancyButton);