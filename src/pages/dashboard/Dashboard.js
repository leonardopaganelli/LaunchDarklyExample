import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import { useFlags } from "launchdarkly-react-client-sdk";

import Widget from "../../components/Widget";
import Map from "./components/am4chartMap/am4chartMap";
import MapStatistics from "./components/mapStatistics/MapStatistics";

import DashboardCardWidgets from "./components/dashboardCardWidgets/DashboardCardWidgets";

import splitBy from "../../utils/splitBy/splitBy";

import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const flags = useFlags();

  const widgetCardsToShow = (cardList, featureFlags) => {
    const widgetsToShow = cardList.filter(({ flag }) => featureFlags[flag]);
    const widgetsSplitted = splitBy(3, widgetsToShow);

    return widgetsSplitted.map((currentRow, index) => (
      <Row key={index}>
        {currentRow.map(({ component: CustomComponent, flag }) => (
          <Col lg={6} xl={4} xs={12} key={flag}>
            <CustomComponent />
          </Col>
        ))}
      </Row>
    ));
  };

  return (
    <div className={s.root}>
      <h1 className="page-title">
        Dashboard &nbsp;
        <small>
          <small>The Lucky One</small>
        </small>
      </h1>

      <Row>
        {flags.dashboardShowMap && (
          <Col lg={flags.dashboardShowMapStatisticsCard ? 7 : 12}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col>
        )}
        {flags.dashboardShowMap && flags.dashboardShowMapStatisticsCard && (
          <Col lg={1} />
        )}

        {flags.dashboardShowMapStatisticsCard && (
          <Col lg={flags.dashboardShowMap ? 4 : 12}>
            <MapStatistics />
          </Col>
        )}
      </Row>
      {widgetCardsToShow(DashboardCardWidgets, flags)}
    </div>
  );
};

export default Dashboard;
