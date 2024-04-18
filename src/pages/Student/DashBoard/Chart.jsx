import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';
import Title from './Title';

// Generate Sales Data
function createData(semeter, grade) {
  return { semeter, grade: grade ?? null };
}

const data = [
  createData('Học kỳ 221', 3.3),
  { semeter: 'Học kỳ 222', grade: 3.5 },
  { semeter: 'Học kỳ 231', grade: 3.8 },
  { semeter: 'Học kỳ 232', grade: 3.6 },
  
];

const Chart = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Điểm trung bình học kỳ</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'semeter',
              tickNumber: 2,
              tickLabelStyle: theme.typography.body2,
              tisks: ['Học kỳ 221','Học kỳ 222','Học kỳ 231','Học kỳ 232'],
            },
          ]}
          yAxis={[
            {
              label: 'Điểm trung bình',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2,
              max: 4,
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: 'grade',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default Chart;
