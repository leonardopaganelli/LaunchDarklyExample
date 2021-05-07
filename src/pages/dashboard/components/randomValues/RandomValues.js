import React from "react";
import { Progress } from "reactstrap";

import Widget from "../../../../components/Widget/Widget";

class RandomValues extends React.Component {
  render() {
    return (
      <Widget title={<h6> RANDOM VALUES </h6>} close settings>
        <div className="stats-row">
          <div className="stat-item">
            <h6 className="name fs-sm">Overcome T.</h6>
            <p className="value">104.85%</p>
          </div>
          <div className="stat-item">
            <h6 className="name fs-sm">Takeoff Angle</h6>
            <p className="value">14.29&deg;</p>
          </div>
          <div className="stat-item">
            <h6 className="name fs-sm">World Pop.</h6>
            <p className="value">7,211M</p>
          </div>
        </div>
        <Progress
          color="bg-primary"
          value="60"
          className="bg-subtle-blue progress-xs"
        />
        <p>
          <small>
            <span className="circle bg-default text-white mr-2">
              <i className="fa fa-plus" />
            </span>
          </small>
          <span className="fw-semi-bold">&nbsp;8 734 higher</span>
          &nbsp;than last month
        </p>
      </Widget>
    );
  }
}

export default RandomValues;
