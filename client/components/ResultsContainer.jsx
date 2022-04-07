import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ResultCard from './ResultCard.jsx'
import * as actions from '../actions/actions';
import { Card, Paper, Typography } from '@mui/material';

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults,
  firstRender: state.search.firstRender,
});

const mapDispatchToProps = (dispatch) => ({
  addFav: (favorite) => {
    dispatch(actions.addFav(favorite));
  },
  addComment: (comment) => {
    dispatch(actions.addComment(comment));
  }
});

const ResultsContainer = (props) => {

  if (!props.searchResults.length && !props.firstRender) {
    return (
      <section id="splash">
        <Typography className='h2'>
          Sorry, no results found matching your query.
          Try expanding your search radius.
        </Typography>
      </section>
    )
  } else if (!props.searchResults.length) {
    return (
      <Card id="splash">
        <Typography className='h1' sx={{fontSize: '36px', fontWeight: '700'}}>
          fun with frollic
        </Typography>
      </Card>
    )
  }

  const resultCards = props.searchResults.map((resultObj, index) => {
    return <ResultCard
      addFav={props.addFav}
      addComment={props.addComment}
      key={index}
      result={resultObj}
      name={resultObj.name}
      image={resultObj.image}
      url={resultObj.url}
      address={resultObj.address}
      phone={resultObj.phone}
      rating={resultObj.rating}
      price={resultObj.price}
      distance={resultObj.distance}
    />
  });
  
  return (
    <Paper id="results-container">
      <Typography id="result-word">Results: </Typography>
      {resultCards}
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);