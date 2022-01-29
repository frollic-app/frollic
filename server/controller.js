const axios = require('axios');

const controller = {};

controller.getResults = (req, res, next) => {
  console.log('in the controller');
  axios({
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    // data: {},
    params: {
      'attributes' : 'wheelchair_accessible',
      'radius': req.body.radius,
      'location': req.body.location,
      'categories': req.body.category,
    },
    headers: {
      // 'Content-Type': 'application/json',
      // 'Connection' : 'keep-alive',
      'Authorization' : 'Bearer IakT1zxbuhim-hMdKiFuMdJK9DrIgeme1h1oHr_XvH1ouoE19GTOgYiLjAJx4nj0-TtSkFmrpI9hcoOSbQFVfZcMJRmyFh0sJoeAia8g_hGjJvUhOy7GO2Ijsov0YXYx',
    },
  })
  .then((response) => {
    res.locals = response.data.businesses.map((business) => {
      const result = {};
      result.name = business.name;
      result.image = business.image_url;
      result.url = business.url;
      result.address = `${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code}`;
      result.phone = business.phone;
      result.rating = business.rating;
      result.price = business.price;
      result.distance = Math.round(business.distance * .00062137 * 100) / 100;
      return result;
    });
  })
  .then(() => { next(); })
  .catch((err) => next({
      log: `Error in getResults controller: ${err}`,
      message: { err: 'See log for error details'},
  }));
}


module.exports = controller;