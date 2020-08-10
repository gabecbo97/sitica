import React from "react";
import "./Banner.scss";
import next from "../../images/next.png";
import previous from "../../images/previous.png";
import CardC from "../CardController/index";

export default function Banner() {
  return (
    <div className="row">
      <div className="col col-left">
        <div className="row text-uppercase">
          <h5>do you ever worry about</h5>
        </div>
        <div className="row">
          <h2>
            We are going to launch <br />
            things thah helps to improve...
          </h2>
        </div>
        <form className="cards card-sm">
          <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h4 text-body"></i>
            </div>

            <div className="col" style={{ borderColor: "transparent" }}>
              <input
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Your email address"
              />
              <button className="btn btn-lg " type="submit">
                Notify
              </button>
            </div>

            <div className="col-auto"></div>
          </div>
        </form>
      </div>

      <div className="col col-right">
        <div className="row">
          <CardC />
        </div>
        <div className="row buttons">
          <button className="btn-slide-previous">
            <img src={previous} alt="" />
          </button>
          <button className="btn-slide-next">
            {" "}
            <img src={next} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
