import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//Composition Examples.

export default class Heading extends React.Component {
  render () {
    return (
       <div>
         <h1>{this.props.message}</h1>
       </div>
    )
  }
}

// Container Component Screen One
export default class ScreenOne extends React.Component {
  render () {
    return (
     <div>
     	  <Heading message={'Custom Heading for Screen One'}/>
      </div>
    )
  }
}

// Container Component Screen Two
export default class ScreenTwo extends React.Component {
  render () {
    return (
     <div>
     	  <Heading message={'Custom Heading for Screen Two'}/>
      </div>
    )
  }
}

Heading.propTypes = {
  message: PropTypes.string
}
Heading.defaultProps = {
  message: 'Heading One'
}

ReactDOM.render(
  <ScreenTwo />,
  document.getElementById('root')
);
