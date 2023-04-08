import React from "react";
import "./ChartBar.css";

const ChartBar = ({currentPrice, label, maxmumPrice }) => {
const fillHeight = (100 * currentPrice) / maxmumPrice

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:`${fillHeight}%`}}></div>
      </div>
      <p className="chart-bar_label">{label}</p>
    </div>
  );
};

export default ChartBar;
