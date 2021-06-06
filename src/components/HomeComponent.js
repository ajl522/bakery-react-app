import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";

function RenderCard({ item }) {
  return (
    <Stagger in>
      <Fade in key={item.id}>
        <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </Fade>
    </Stagger>
  );
}

function Home(props) {
  return (
    <div className="container">
      <h3>Home</h3>
      <div className="row">
        <div className="col-md m-1">
          <RenderCard item={props.cupcake} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.cookie} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.cake} />
        </div>
      </div>
    </div>
  );
}

export default Home;
