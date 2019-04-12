import React from "react";
import { indigo400 } from "material-ui/styles/colors";
import { Card, CardText, CardMedia, CardTitle } from "material-ui/Card";
export default class PlaceCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-4">
        <Card>
          <CardMedia>
            <img
              height="300"
              src={process.env.PUBLIC_URL + this.props.info.imageUrl}
            />
          </CardMedia>
          <CardTitle title={this.props.info.title}>
            <div className="des-card">
              <CardText>{this.props.info.description}</CardText>
            </div>
          </CardTitle>
        </Card>
      </div>
    );
  }
}
