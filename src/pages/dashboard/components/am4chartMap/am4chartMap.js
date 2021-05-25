import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import usaCities from "./usaCities";
import brCities from "./brCities";
import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/usaHigh";
import am4geodata_brHigh from "@amcharts/amcharts4-geodata/brazilHigh";

import AnimateNumber from "react-animated-number";
import s from "./am4chartMap.module.scss";

const Am4chartMap = ({ user }) => {
  const [map, setMap] = useState();

  const usaConfig = (map) => {
    map.geodata = am4geodata_usaHigh;
    map.projection = new am4maps.projections.AlbersUsa();
    map.homeZoomLevel = 1.2;

    let citySeries = map.series.push(new am4maps.MapImageSeries());
    citySeries.data = usaCities;
    citySeries.dataFields.value = "size";
    let city = citySeries.mapImages.template;
    city.nonScaling = true;
    city.propertyFields.latitude = "latitude";
    city.propertyFields.longitude = "longitude";
    let circle = city.createChild(am4core.Circle);
    circle.fill = am4core.color("#C7D0FF");
    circle.strokeWidth = 0;
    let circleHoverState = circle.states.create("hover");
    circleHoverState.properties.strokeWidth = 1;
    circle.tooltipText = "{tooltip}";
    circle.propertyFields.radius = "size";

    return map;
  };

  const brConfig = (map) => {
    map.geodata = am4geodata_brHigh;

    let citySeries = map.series.push(new am4maps.MapImageSeries());
    citySeries.data = brCities;
    citySeries.dataFields.value = "size";
    let city = citySeries.mapImages.template;
    city.nonScaling = true;
    city.propertyFields.latitude = "latitude";
    city.propertyFields.longitude = "longitude";
    let circle = city.createChild(am4core.Circle);
    circle.fill = am4core.color("#C7D0FF");
    circle.strokeWidth = 0;
    let circleHoverState = circle.states.create("hover");
    circleHoverState.properties.strokeWidth = 1;
    circle.tooltipText = "{tooltip}";
    circle.propertyFields.radius = "size";

    return map;
  };

  const applyCountry = (map, country) => {
    const countriesConfig = {
      BR: brConfig,
      USA: usaConfig,
    };
    countriesConfig[country](map);
  };

  const stylizeMap = (map) => {
    map.percentHeight = 90;
    map.dy = 10;
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.layout = "horizontal";
    map.zoomControl.align = "left";
    map.zoomControl.valign = "bottom";
    map.zoomControl.dy = -10;
    map.zoomControl.contentHeight = 20;
    map.zoomControl.minusButton.background.fill = am4core.color("#C7D0FF");
    map.zoomControl.minusButton.background.stroke = am4core.color("#6979C9");
    map.zoomControl.minusButton.label.fontWeight = 600;
    map.zoomControl.minusButton.label.fontSize = 22;
    map.zoomControl.minusButton.scale = 0.75;
    map.zoomControl.minusButton.label.scale = 0.75;
    map.zoomControl.plusButton.background.fill = am4core.color("#C7D0FF");
    map.zoomControl.plusButton.background.stroke = am4core.color("#6979C9");
    map.zoomControl.plusButton.label.fontWeight = 600;
    map.zoomControl.plusButton.label.fontSize = 22;
    map.zoomControl.plusButton.label.align = "center";
    map.zoomControl.plusButton.scale = 0.75;
    map.zoomControl.plusButton.label.scale = 0.75;
    map.zoomControl.plusButton.dx = 5;
    let plusButtonHoverState =
      map.zoomControl.plusButton.background.states.create("hover");
    plusButtonHoverState.properties.fill = am4core.color("#354D84");
    let minusButtonHoverState =
      map.zoomControl.minusButton.background.states.create("hover");
    minusButtonHoverState.properties.fill = am4core.color("#354D84");
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#474D84");
    polygonTemplate.stroke = am4core.color("#6979C9");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#354D84");

    return this;
  };

  const generateMap = ({ country }) => {
    const map = am4core.create("map", am4maps.MapChart);

    const sylizedMap = stylizeMap(map);
    const applyedMap = applyCountry(map, country);

    setMap(applyedMap);
  };

  useEffect(() => {
    if (!map) {
      generateMap(user);
    }

    return () => {
      if (map) {
        map.dispose();
        setMap();
      }
    };
  }, [generateMap, map, user]);

  return (
    <div className={s.mapChart}>
      <div className={s.stats}>
        <h6 className="mt-1">GEO-LOCATIONS</h6>
        <p className="h3 m-0">
          <span className="mr-xs fw-normal">
            <AnimateNumber
              value={1656843}
              initialValue={0}
              duration={1000}
              stepPrecision={0}
              formatValue={(n) =>
                n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
              }
            />
          </span>
          <i className="fa fa-map-marker" />
        </p>
      </div>
      <div className={s.map} id="map">
        <span>Alternative content for the map</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth: user }) => user;

export default connect(mapStateToProps)(Am4chartMap);
