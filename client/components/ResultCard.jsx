import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ResultCard = (props) => {
  
  return (
    <article>
      <Card className="business">
        <CardMedia className="businessImg" component="img" sx={{ width: 200 }} image={props.image}></CardMedia>
        <CardContent className="businessDetails">
          <Typography className="distance">{props.distance}</Typography>
          <Typography><a className="name" href={props.url}>{props.name}</a></Typography>
          <Typography><span className="price">{props.price}</span><span>&#8226;</span><span className="rating">Rating: {props.rating}</span></Typography>
          <Typography className="Address">{props.address}</Typography>
          <Typography className="phone">{props.phone}</Typography>
          <Button className="add-comment">Show Comments</Button>
        </CardContent>
      </Card>
      <div className="buttonContainer">
        <Button className="addFav" onClick={() => props.addFav(props.result)}>Favorite</Button>
        <Button className="comment" onClick={props.addComment}>Comment</Button>
        <CopyToClipboard text={props.url}>
          <Button className="share" onClick={(e) => {e.target.innerText = 'Copied!'; setTimeout(() => {e.target.innerText = 'Share'}, 1000) }}>Share</Button>
        </CopyToClipboard>
      </div>
    </article>
  );
}

export default ResultCard;