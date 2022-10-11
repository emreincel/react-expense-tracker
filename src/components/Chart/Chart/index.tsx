import React from 'react';
import ChartBar from '../ChartBar';
import styles from './styles.module.css';

type TProps = {
  dataPoints: { label: string; value: number }[];
};

const Chart = ({ dataPoints }: TProps) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className={styles['chart']}>
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
