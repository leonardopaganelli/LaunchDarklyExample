import React from "react";
import { Progress } from "reactstrap";

import Widget from "../../../../components/Widget/Widget";

class TrafficValues extends React.Component {
  render() {
    return (
      <Widget title={<h6> TRAFFIC VALUES </h6>} close settings>
      <div className="stats-row">
        <div className="stat-item">
          <h6 className="name">Overall Values</h6>
          <p className="value">17 567 318</p>
        </div>
        <div className="stat-item">
          <h6 className="name">Montly</h6>
          <p className="value">55 120</p>
        </div>
        <div className="stat-item">
          <h6 className="name">24h</h6>
          <p className="value">9 695</p>
        </div>
      </div>
      <Progress
        color="danger"
        value="60"
        className="bg-subtle-blue progress-xs"
      />
      <p>
        <small>
          <span className="circle bg-default text-white mr-2">
            <i className="fa fa-chevron-down" />
          </span>
        </small>
        <span className="fw-semi-bold">&nbsp;8% lower</span>
        &nbsp;than last month
      </p>
    </Widget>
    );
  }
}

export default TrafficValues;
