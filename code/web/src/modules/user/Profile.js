// Imports
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import Button from "../../ui/button";
import { grey, grey2 } from "../../ui/common/colors";

// App Imports
import userRoutes from "../../setup/routes/user";
import { logout } from "./api/actions";

//Things to consider:
// will we input a separate component for order history and edit profile pages?
//look into where subscription button within profile component routes to
//is this a component? route? how is the information being displayed?
// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>
    {/* Use grid cell to formate the same way as other portions of this components display */}
    <Grid>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        {/*user name display -- this will update on the edit  */}
        <H4 style={{ marginBottom: "0.5em" }}>{props.user.details.name}</H4>
        {/* user email display -- this will update on the e}
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        
        {/*location for links needed to navigate to user edit profile and user order history*/}
        {/*will need to add buttons for each order history and user edit profile*/}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        <Button
          theme="secondary"
          onClick={props.logout}
          style={{ marginLeft: "1em" }}
        >
          Logout
        </Button>
      </GridCell>
    </Grid>
  </div>
);

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

// Component State
function profileState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileState, { logout })(Profile);
