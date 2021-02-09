//Imports
import React, { Component } from "react";
import { Helmet } from "react-helmet";

//UI Imports
import { Grid, GridCell } from "../../ui/grid";
import Icon from "../../ui/icon";
import UserMenu from "./common/UserMenu";

//App Imports
import Loading from "../common/Loading";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
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
        <UserMenu />
        <Grid>
          <GridCell>
            <table className="striped">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Items</th>
                  <th>Items Kept</th>
                  <th>Available Date</th>
                  <th>Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5">
                    <Loading message="loading your orders..." />
                  </td>
                </tr>
              </tbody>
            </table>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default OrderHistory;
