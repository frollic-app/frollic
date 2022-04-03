import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Button, Checkbox, InputLabel, FormGroup, FormLabel, MenuItem, Paper,
  Select, Grid, TextField, Typography } from '@mui/material';

const mapDispatchToProps = (dispatch) => ({
  getResults: (location, radius, categories) => {
    dispatch(actions.getResults(location, radius, categories));
  }
});

const Sidebar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const location = document.querySelector('input[name="location"]').value;
    const radius = document.querySelector('input[name="radius"]').value;
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    let categories = '';
    checkboxes.forEach((el) => categories += ',' + el.name);
    categories = categories.slice(1);
    props.getResults(location, radius, categories);
  }

  return (
    <Paper id="aside">
      <FormGroup>
        <FormGroup className="location-and-radius">
          <FormGroup className="form-element">
            <InputLabel htmlFor="location" className="side-header">
              Your Address or Zipcode
            </InputLabel>
            {/* <br/> */}
            <TextField
              type="text"
              name="location"
              placeholder="eg. 123 Main Street, New York, NY, 10036 or 90210"
            ></TextField>
            {/* <br/> */}
          </FormGroup>
          
          <FormGroup className="form-element">
            <InputLabel
              htmlFor="radius"
              className="side-header"
            >Search Radius</InputLabel>
            {/* <br/> */}
            <Select name="radius" defaultValue=".5">
              <MenuItem value=".5">less than 1 mile</ MenuItem>
              <MenuItem value="1" >1 mile</           MenuItem>
              <MenuItem value="5" >5 miles</          MenuItem>
              <MenuItem value="10">10 miles</         MenuItem>
              <MenuItem value="25">25 miles</         MenuItem>
            </Select>
            {/* <br/> */}
          </FormGroup>
        </FormGroup>

        <FormGroup className="filters">
          <InputLabel className="side-header">
            What type of locations are you looking for?
          </InputLabel>

          <Grid className="checkboxes">
            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="galleries" />
              <InputLabel htmlFor="Galleries">Art Galleries</InputLabel>
              {/* <br/> */}
            </FormLabel>

            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="bars" />
              <InputLabel htmlFor="Bar">Bar</InputLabel>
              {/* <br/> */}
            </FormLabel>
          
            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="coffee" />
              <InputLabel htmlFor="Coffee &amp; Tea">Coffee &amp; Tea</InputLabel>
              {/* <br/> */}
            </FormLabel>
          
            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="desserts" />
              <InputLabel htmlFor="Desserts">Desserts</InputLabel>
              {/* <br/> */}
            </FormLabel>
          
            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="restaurants" />
              <InputLabel htmlFor="Restaurants">Restaurants</InputLabel>
              {/* <br/> */}
            </FormLabel>

            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="movietheaters" />
              <InputLabel htmlFor="Cinema">Cinema</InputLabel>
              {/* <br/> */}
            </FormLabel>

            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="musicvenues" />
              <InputLabel htmlFor="Music Venues">Music Venues</InputLabel>
              {/* <br/> */}
            </FormLabel>

            <FormLabel className="checkbox" sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox type="checkbox" name="shopping" />
              <InputLabel htmlFor="Shopping">Shopping</InputLabel>
              {/* <br/> */}
            </FormLabel>
          </Grid>
        </FormGroup>
        <Button id="search" onClick={handleClick}>Search</Button>

      </FormGroup>
    </Paper>
  )
};

export default connect(null, mapDispatchToProps)(Sidebar);