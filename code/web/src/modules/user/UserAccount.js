// Imports
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, withRouter } from "react-router-dom";

// UI Imports
import { H3 } from "../../ui/typography";

const UserAccount = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "35vh",
          width: "50vw",
        }}
      >
        {/* SEO */}
        <Helmet>
          <title>My Account - Crate</title>
        </Helmet>
        <div>
          <img src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <H3>The User</H3>
          <p>sampleemail@gmail.com</p>
          <p>1234 Sample St. Denver, CO 80231</p>
          <p>Please tell us about yourself!</p>
        </div>
        <div
          style={{ display: "flex", alignSelf: "flex-start", padding: "1.5em" }}
        >
          <img
            src="https://image.flaticon.com/icons/png/512/61/61456.png"
            height="15px"
            width="15px"
          />
        </div>
      </div>
    </section>
  );
};

export default withRouter(connect(null, {})(UserAccount));
