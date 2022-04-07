import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { AppBar, Avatar, Button, Container, Toolbar } from '@mui/material';

const mapDispatchToProps = (dispatch) => ({
  toggleFavsPage: () => {
    dispatch(actions.toggleFavsPage());
  }
});

const Navbar = (props) => {
    return (
    <AppBar>
      <Toolbar id="nav">
        <Button href="/">
          <img id="logo" alt="frollic-logo" src="/assets/logo.png" />
        </Button>
          <Button onClick={props.toggleFavsPage}>
            <img id="profile-icon" src="https://img.icons8.com/small/32/000000/gender-neutral-user.png"/>
          </Button>
      </Toolbar>
    </AppBar>
    )
}
export default connect(null, mapDispatchToProps)(Navbar);