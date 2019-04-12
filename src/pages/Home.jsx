import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Title from "../components/Title";
import { indigo400 } from "material-ui/styles/colors";
import { Card, CardText, CardMedia, CardTitle } from "material-ui/Card";
import data from "../requests/places";
import Benefit from "../components/Benefit";
import PlaceCard from "../components/places/PlaceCard";
class Home extends React.Component {
  places() {
    /**
     *  es el nuevo arreglo que retorna el lop map
     */
    return data.places.map((place, key) => {
      // aqui retornamos la vista ya iterada
      return <PlaceCard info={place} index={key}/>;
    });
  }
  render() {
    return (
      <section>
        <div className="app-back">
          <div style={{ width: "80%", margin: "0 auto" }}>
            <div className="header-main">
              <Title />

              <RaisedButton
                label="Crear cuenta gratuita aqui"
                primary={true}
                className="btn-"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/map-location.png"}
                className="header-imagen"
              />
            </div>
          </div>
        </div>
        <Benefit />
        <div style={{ "background-color": indigo400, padding: "50px" }}>
          <h1 className="text-white text-center mt-1">Sitios Populares</h1>
          <div className="row">{this.places()}</div>
        </div>
      </section>
    );
  }
}

export default Home;
