//Imports
import React, { Component } from "react";
import { Helmet } from "react-helmet";

//UI Imports
import { Grid, GridCell } from "../../ui/grid";
import Icon from "../../ui/icon";
import UserMenu from "./common/UserMenu";

class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
      availableDate: null,
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Order History - Crate</title>
        </Helmet>
      </div>
    );
  }
}

export default OrderHistory;
