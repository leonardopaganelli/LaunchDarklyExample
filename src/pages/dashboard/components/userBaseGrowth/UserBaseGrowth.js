import React from "react";
import { Progress } from "reactstrap";

import Widget from "../../../../components/Widget";

class UserBaseGrowth extends React.Component {
  render() {
    return (
      <Widget title={<h6> USERBASE GROWTH </h6>} close settings>
        <div className="stats-row">
          <div className="stat-item">
            <h6 className="name">Overall Growth</h6>
            <p className="value">76.38%</p>
          </div>
          <div className="stat-item">
            <h6 className="name">Montly</h6>
            <p className="value">10.38%</p>
          </div>
          <div className="stat-item">
            <h6 className="name">24h</h6>
            <p className="value">3.38%</p>
          </div>
        </div>
        <Progress
          color="success"
          value="60"
          className="bg-subtle-blue progress-xs"
        />
        <p>
          <small>
            <span className="circle bg-default text-white mr-2">
              <i className="fa fa-chevron-up" />
            </span>
          </small>
          <span className="fw-semi-bold">&nbsp;17% higher</span>
          &nbsp;than last month
        </p>
      </Widget>
    );
  }
}

export default UserBaseGrowth;
