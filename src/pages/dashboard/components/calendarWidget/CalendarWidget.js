import React from "react";
import Calendar from "../calendar/Calendar";

import Widget from "../../../../components/Widget/Widget";

class CalendarWidget extends React.Component {
  render() {
    return (
      <Widget
        title={<h6>Calendar</h6>}
        settings
        close
        bodyClass={"pt-2 px-0 py-0"}
      >
        <Calendar />
        <div className="list-group fs-mini">
          <button className="list-group-item text-ellipsis">
            <span className="badge badge-pill badge-primary float-right">
              6:45
            </span>
            Weed out the flower bed
          </button>
          <button className="list-group-item text-ellipsis">
            <span className="badge badge-pill badge-success float-right">
              9:41
            </span>
            Stop world water pollution
          </button>
        </div>
      </Widget>
    );
  }
}

export default CalendarWidget;
