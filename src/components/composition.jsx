import React from "react";
import PropTypes from "prop-types";

//Composition Examples.

export default class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

// // Container Component Screen One
// export default class ScreenOne extends React.Component {
//   render () {
//     return (
//      <div>
//      	  <Heading message={'Custom Heading for Screen One'}/>
//       </div>
//     )
//   }
// }

Heading.propTypes = {
  message: PropTypes.string
};

Heading.defaultProps = {
  message: "Heading One"
};

//In React using Composition and Props gives you all the flexibility that you would need. React does not say Composition is better than Inheritance. Composition just fits better within the React’s component structure.
