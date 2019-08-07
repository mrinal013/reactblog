import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>{this.props.title}</h1>
        </Link>
      </div>
    );
  }
}
export default Header;
