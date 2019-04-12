import React from "react";
import { Card, CardText } from "material-ui/Card";
export default class Benefit extends React.Component {
  render() {
    return(
      <ul>
        <div className="row mr-5">
          <div className="col">
            <Card className="div-card">
              <CardText>
                <div className="row text-center">
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/images/in-love.png"}
                      height="100px"
                    />
                  </div>
                  <div className="col">
                    <span>
                      <b>Califica con emociones</b>
                    </span>
                    <p>Califica tus lugares con experiencias, no con numeros</p>
                  </div>
                </div>
              </CardText>
            </Card>
          </div>
          <div className="col">
            <Card className="div-card">
              <CardText className="">
                <div className="row text-center ">
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/images/wifi.png"}
                      height="100px"
                    />
                  </div>
                  <div className="col">
                    <span>
                      <b>Sin internet? Sin problemas</b>
                    </span>
                    <p>
                      Places funciona sin internet o en conexiones inestables
                    </p>
                  </div>
                </div>
                <div />
              </CardText>
            </Card>
          </div>
          <div className="col">
            <Card className="div-card">
              <CardText>
                <div className="row text-center">
                  <div className="col">
                    <img
                      src={process.env.PUBLIC_URL + "/images/heart.png"}
                      height="100px"
                    />
                  </div>
                  <div className="col">
                    <span>
                      <b>Tus lugares Favoritos</b>
                    </span>
                    <p>Define tus lugares favoritos</p>
                  </div>
                </div>
                <div />
              </CardText>
            </Card>
          </div>
        </div>
      </ul>
    );
  }
}
