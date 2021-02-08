// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import H4 from '../../ui/typography/H4'
import { Input, Textarea } from '../../ui/input'
import { white } from "../../ui/common/colors"

// App Imports
import userRoutes from '../../setup/routes/user'
import UserMenu from './common/UserMenu'

// Component
class EditUserInfo extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: false,
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        address: '',
        description: ''
      }
    }
  }

  onChange = (event) => {
    let user = this.state.user
    user[event.target.name] = event.target.value

    this.setState({
      user
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })
  }

  render() {
    return (
      <div>
        <Helmet>
         <title>Edit My Account - Crate</title>
        </Helmet>

        {/* Top menu */}
        <UserMenu />
        {/* Page Content */}
        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell style={{ textAlign: 'left' }}>
            <Link to={userRoutes.account.path}>
              <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
            </Link>
          </GridCell>
        </Grid>

        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell>
            <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
              Edit My Account
            </H4>

            {/* Form */}
            <form onSubmit={this.onSubmit}>
                <div style={{ width: '25em', margin: '0 auto' }}>
                  {/* Upload File */}
                  <div style={{ marginTop: '1em' }}>
                    <input
                      type="file"
                      // onChange={this.onUpload}
                      required={this.state.user.id === 0}
                    />
                  </div>
                  {/* Uploaded image */}
    
                  {/* Name */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="My Name"
                    required="required"
                    name="name"
                    autoComplete="off"
                    value={this.state.user.name}
                    onChange={this.onChange}
                  />

                  {/* Email */}
                  <Input
                    type="text"
                    fullWidth={true}
                    placeholder="My Email"
                    required="required"
                    name="email"
                    autoComplete="off"
                    value={this.state.user.email}
                    onChange={this.onChange}
                  />

                  {/* Description */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Description"
                    required="required"
                    name="description"
                    value={this.state.user.description}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  />

                  {/* Shipping Address */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Shipping Address"
                    required="required"
                    name="address"
                    value={this.state.user.address}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  />
                </div>

                {/* Form submit */}
                <div style={{ marginTop: '2em', textAlign: 'center' }}>
                  <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{ color: white }}>check</Icon> Save
                  </Button>
                </div>
              </form>
          </GridCell>
        </Grid>          
      </div>
    )
  }
} 

  export default withRouter(connect(null, {

  })(EditUserInfo))
