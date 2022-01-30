import React from 'react';
import { connect } from 'react-redux';
import ResultCard from './ResultCard.jsx'

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults,
});

const ResultsContainer = (props) => {

  if (!props.searchResults.length) {
    return (
      <div id="splash">
        <h1>Fun with frollic</h1>
      </div>
    )
  }

  const resultCards = props.searchResults.map((resultObj, index) => {
    return <ResultCard
      key={index}
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
    <section id="results-container">
      <h3>Results: </h3>
      {resultCards}
    </section>
  );
}

export default connect(mapStateToProps, null)(ResultsContainer);