// Imports
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, withRouter } from "react-router-dom";
import profilePic from "../../../public/images/profilepic.jpg";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import Button from "../../ui/button";
import { grey, grey2 } from "../../ui/common/colors";

// App Imports
import userRoutes from "../../setup/routes/user";
import { logout } from "./api/actions";

const UserAccount = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>My Account - Crate</title>
      </Helmet>
    </div>
  );
};

export default withRouter(connect(null, {})(UserAccount));
