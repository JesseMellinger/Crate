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
import { updateUser as updateUser } from './api/actions'
import { login } from './api/actions'
import { renderIf, slug } from '../../setup/helpers'
import { routeImage } from "../../setup/routes"
import { upload, messageShow, messageHide } from '../common/api/actions'


// Component
class EditUserInfo extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: false,
      user: {
        profileUri: props.user.details.profileUri,
        name: props.user.details.name,
        email: props.user.details.email,
        shippingAddress: props.user.details.shippingAddress,
        availableDate: props.user.details.availableDate,
        bio: props.user.details.bio
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

    this.props.updateUser(this.state.user)
    this.props.history.push({pathname: userRoutes.account.path,
      state: { fromDashboard: true }})
    this.props.login(this.state.user)
  }

  onUpload = (event) => {
    this.props.messageShow('Uploading file, please wait...')
    this.setState({
      isLoading: true
    })

    let data = new FormData()
    data.append('file', event.target.files[0])
  
    // Upload image
    this.props.upload(data)
      .then(response => {
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

         let user = this.state.user
          user.profileUri = `${routeImage}/images/uploads/${ response.data.file }`

          this.setState({
            user
          })
        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')

      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
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
                      onChange={this.onUpload}
                      required={this.state.user.id === 0}
                    />
                  </div>
                 {/* Uploaded image */}
                 {renderIf(routeImage + this.state.user.profileUri !== '', () => (
      
                    <img src={this.state.user.profileUri} alt="Profile Image"
                         style={{ width: 200, marginTop: '1em' }}/>
                  ))}
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
                    placeholder="My email"
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
                    name="bio"
                    value={this.state.user.bio}
                    onChange={this.onChange}
                    style={{ marginTop: '1em' }}
                  />

                  {/* Shipping Address */}
                  <Textarea
                    fullWidth={true}
                    placeholder="Shipping Address"
                    required="required"
                    name="shippingAddress"
                    value={this.state.user.shippingAddress}
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


// Component Properties
EditUserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

// Component State
function profileState(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(profileState, {
  upload,
  updateUser,
  messageShow,
  messageHide,
  login
})(EditUserInfo))
