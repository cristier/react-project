import "./Chart.css";
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
  const chartValues = props.charts.map(val => val.value);
  const totalMaximun = Math.max(...chartValues)

  return (
    <div className='chart'>
      {props.charts.map(elm => (
        <ChartBar
          key={elm.label}
          value={elm.value}
          maxValue={totalMaximun}
          label={elm.label}
        />
      ))}
    </div>
  );
};

export default Chart;
