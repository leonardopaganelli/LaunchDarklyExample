import React from "react";

import Widget from "../../../../components/Widget/Widget";
import { Table, Label, Input } from "reactstrap";

import Rickshaw from "../rickshaw/Rickshaw";

import s from "./MarketStats.module.scss";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <Widget
        title={
          <h6>
            {" "}
            Market <span className="fw-semi-bold">Stats</span>
          </h6>
        }
        close
      >
        <div className="widget-body">
          <h3>$720 Earned</h3>
          <p className="fs-mini text-muted mb mt-sm">
            Target <span className="fw-semi-bold">$820</span> day earnings is{" "}
            <span className="fw-semi-bold">96%</span> reached.
          </p>
        </div>
        <div className={`widget-table-overflow ${s.table}`}>
          <Table striped size="sm">
            <thead className="no-bd">
              <tr>
                <th>
                  <div className="checkbox abc-checkbox">
                    <Input
                      className="mt-0"
                      id="checkbox210"
                      type="checkbox"
                      onClick={() => this.checkTable(0)}
                      checked={this.state.checkedArr[0]}
                      readOnly
                    />{" "}
                    <Label for="checkbox210" />
                  </div>
                </th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="checkbox abc-checkbox">
                    <Input
                      className="mt-0"
                      id="checkbox212"
                      type="checkbox"
                      onClick={() => this.checkTable(1)}
                      checked={this.state.checkedArr[1]}
                      readOnly
                    />{" "}
                    <Label for="checkbox212" />
                  </div>
                </td>
                <td>HP Core i7</td>
                <td className="text-align-right fw-semi-bold">$346.1</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox abc-checkbox">
                    <Input
                      className="mt-0"
                      id="checkbox214"
                      onClick={() => this.checkTable(2)}
                      type="checkbox"
                      checked={this.state.checkedArr[2]}
                      readOnly
                    />{" "}
                    <Label for="checkbox214" />
                  </div>
                </td>
                <td>Air Pro</td>
                <td className="text-align-right fw-semi-bold">$533.1</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div
          className="widget-body mt-xlg chart-overflow-bottom"
          style={{ height: "100px" }}
        >
          <Rickshaw height={100} />
        </div>
      </Widget>
    );
  }
}

export default Messages;
