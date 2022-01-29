import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
//  mockAction: () => {
//    dispatch(actions.mockAction());
//  }
};

const Sidebar = (props) => {
  return (
    <aside>
      <form>
        <div className="form-element">
        <label htmlFor="location">Your Address or Zipcode</label><br/>
        <input type="text" name="location" placeholder="eg. 123 Main Street, New York, NY, 10036 or 90210"></input><br/>
        </div>
        
        <div className="form-element">
        <label htmlFor="radius">Search Radius</label><br/>
        <select name="radius">
          <option>less than 1 mile</option>
          <option>1 mile</option>
          <option>5 miles</option>
          <option>10 miles</option>
          <option>25 miles</option>
        </select><br/>
        </div>

        <p>What type of locations are you looking for?</p>
        <div className="checkbox">
        <input type="checkbox" name="Bar"></input>
        <label htmlFor="Bar">Bar</label><br/>
        </div>
        
        <div className="checkbox">
        <input type="checkbox" name="Coffee &amp; Tea"></input>
        <label htmlFor="Coffee &amp; Tea">Coffee &amp; Tea</label><br/>
        </div>

        <div className="checkbox">
        <input type="checkbox" name="Desserts"></input>
        <label htmlFor="Desserts">Desserts</label><br/>
        </div>

        <div className="checkbox">
        <input type="checkbox" name="Restaurants"></input>
        <label htmlFor="Restaurants">Restaurants</label><br/>
        </div>

        <div className="checkbox">
        <input type="checkbox" name="Cinema"></input>
        <label htmlFor="Cinema">Cinema</label><br/>
        </div>

        <div className="checkbox">
        <input type="checkbox" name="Music Venues"></input>
        <label htmlFor="Music Venues">Music Venues</label><br/>
        </div>

        <button id="search">Search</button>

      </form>
    </aside>
  )
};

export default connect(null, null)(Sidebar);