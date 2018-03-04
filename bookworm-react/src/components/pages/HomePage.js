import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import insertCss from "insert-css";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
   <Card>
     <CardHeader>
       <h3>Book worm</h3>
       <p></p>
     </CardHeader>
    <CardBody>
        {isAuthenticated ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <div>
            <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
          </div>
        )}
     </CardBody>
     <CardFooter>
				<p>&copy; 2018 Copyright BookWorm</p>
			</CardFooter>
   </Card>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

var styleElement = insertCss("h3 { background-color: #8eb59b; }");
export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
