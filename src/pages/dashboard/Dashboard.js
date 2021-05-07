import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget";

import Map from "./components/am4chartMap/am4chartMap";

import MapStatistics from "./components/mapStatistics/MapStatistics";
import UserBaseGrowth from "./components/userBaseGrowth/UserBaseGrowth";
import TrafficValues from "./components/trafficValues/TrafficValues";
import RandomValues from "./components/randomValues/RandomValues";
import Messages from "./components/messages/Messages";
import MarketStats from "./components/marketStats/MarketStats";
import CalendarWidget from "./components/calendarWidget/CalendarWidget";

import s from "./Dashboard.module.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      showMapStatistics: false,
      showUserBaseGrowth: false,
      showTrafficValue: false,
      showRandomValues: false,
      showMessages: false,
      showMarketStats: false,
      showCalendar: false,
      dashboardWidgetsToShow: [],
      allDashboardWidgets: [
        {
          component: UserBaseGrowth,
          flag: "showUserBaseGrowth",
        },
        {
          component: TrafficValues,
          flag: "showTrafficValue",
        },
        {
          component: RandomValues,
          flag: "showRandomValues",
        },
        {
          component: Messages,
          flag: "showMessages",
        },
        {
          component: MarketStats,
          flag: "showMarketStats",
        },
        {
          component: CalendarWidget,
          flag: "showCalendar",
        },
      ],
    };
  }

  splitBy = (size, list) => {
    return list.reduce((acc, curr, i, self) => {
      if (!(i % size)) {
        return [...acc, self.slice(i, i + size)];
      }
      return acc;
    }, []);
  };

  toggleWidgets = (list) => {
    return list.filter(({ flag }) => this.state[flag]);
  };

  async componentDidMount() {
    //TODO: integrate with flags
    await this.setState({
      showMap: true,
      showMapStatistics: true,
      showUserBaseGrowth: true,
      showCalendar: true
    });

    const widgetsToShow = this.state.allDashboardWidgets.filter(
      ({ flag }) => this.state[flag]
    );

    this.setState({
      dashboardWidgetsToShow: this.splitBy(3, widgetsToShow),
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          Dashboard {this.state.showMap} &nbsp;
          <small>
            <small>The Lucky One</small>
          </small>
        </h1>

        <Row>
          {this.state.showMap && (
            <Col lg={this.state.showMapStatistics ? 7 : 12}>
              <Widget className="bg-transparent">
                <Map />
              </Widget>
            </Col>
          )}
          {this.state.showMap && this.state.showMapStatistics && <Col lg={1} />}

          {this.state.showMapStatistics && (
            <Col lg={this.state.showMap ? 4 : 12}>
              <MapStatistics />
            </Col>
          )}
        </Row>
        {this.state.dashboardWidgetsToShow.map((rows, index) => (
          <Row key={index}>
            {rows.map(({ component: CustomComponent, flag }) => (
              <Col lg={6} xl={4} xs={12} key={flag}>
                <CustomComponent />
              </Col>
            ))}
          </Row>
        ))}
      </div>
    );
  }
}

export default Dashboard;
