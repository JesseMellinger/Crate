// Imports
import React from 'react'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'
import { black, grey } from "../../../ui/common/colors"

// App Imports
import userRoutes from '../../../setup/routes/user'
import Menu from '../../common/header/Menu'
import MenuItem from '../../common/header/MenuItem'

// Component
const UserMenu = () => (
  <Grid style={{ backgroundColor: grey }}>
    <GridCell style={{ padding: '2em', textAlign: 'center' }}>
      <Menu>
        <MenuItem to={userRoutes.account.path} type="primary" style={{ color: black }}>My Account</MenuItem>

        <MenuItem to='/user/history' section="products" type="primary" style={{ color: black }}>Order History</MenuItem>
      </Menu>
    </GridCell>
  </Grid>
)

export default UserMenu