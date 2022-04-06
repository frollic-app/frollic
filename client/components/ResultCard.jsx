import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { flexbox } from '@mui/system';

const teal = '#22B3A6';
const gold = '#f0c25f';
const white = '#FFFCF5';
const gray = '#D0D7DD';
const black = '#2A343A';
const shadow = 'rgb(42, 52, 58, .10)';

const ResultCard = (props) => {
  
  return (
    <Card className="card" sx={{display: 'flex', mb: '5px'}}>
      <CardMedia className="businessImg" component="img" sx={{ width: 200 }} image={props.image}></CardMedia>

      <CardContent className="businessDetails">
        <Typography className="distance">{props.distance}</Typography>
        <Typography><a className="name" href={props.url}>{props.name}</a></Typography>
        <Typography><span className="price">{props.price}</span><span>&#8226;</span><span className="rating">Rating: {props.rating}</span></Typography>
        <Typography className="Address">{props.address}</Typography>
        <Typography className="phone">{props.phone}</Typography>
        {/* <Button className="add-comment" sx={{color: teal, p: '4px 0 0'}}>Show Comments</Button> */}
      </CardContent>

      <CardActions
        disableSpacing
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}
      >
        <Button
          variant="contained"
          sx={{backgroundColor: teal, color: white}}
          onClick={() => props.addFav(props.result)}>Favorite</Button>
        {/* <Button
          variant="contained"
          sx={{backgroundColor: gold, color: black}}
          onClick={props.addComment}>Comment</Button> */}
        <CopyToClipboard text={props.url}>
          <Button
            variant="contained"
            sx={{backgroundColor: gold, color: black}}
            onClick={(e) => {e.target.innerText = 'Copied!'; setTimeout(() => {e.target.innerText = 'Share'}, 1000) }}>Share</Button>
        </CopyToClipboard>
      </CardActions>
    </Card>
  );
}

export default ResultCard;