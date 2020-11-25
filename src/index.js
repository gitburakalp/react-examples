import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Heading from "./components/composition";
import InheritanceExample from "./components/inheritence";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(InheritanceExample);
  }

  render() {
    return (
      <div>
        <Heading message={"Composition Example"} />
      </div>
    );
  }
}

//Composition Examples.

ReactDOM.render(<App />, document.getElementById("root"));

//In React using Composition and Props gives you all the flexibility that you would need. React does not say Composition is better than Inheritance. Composition just fits better within the React’s component structure.
