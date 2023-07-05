import React, {useState, useEffect} from "react";
import {View, Text, Dimensions, useWindowDimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const App = () => {
  const {height,width} = useWindowDimensions();
  return <View style={{flex: 1}}>
    <LineChart
    data={{
      labels: [
            "2022-10-01T00:01:24",
            "2022-10-01T00:02:53",
            "2022-10-01T00:04:22",
            "2022-10-01T00:05:51",
            "2022-10-01T00:07:20",
            "2022-10-01T00:08:49",
            "2022-10-01T00:10:18",
            "2022-10-01T00:11:47",
            "2022-10-01T00:13:16",
            "2022-10-01T00:14:45",
            "2022-10-01T00:16:14",
            "2022-10-01T00:17:43",
            "2022-10-01T00:19:12",
            "2022-10-01T00:20:41",
            "2022-10-01T00:22:10",
            "2022-10-01T00:23:39",
            "2022-10-01T00:25:08",
            "2022-10-01T00:26:37",
            "2022-10-01T00:28:06",
            "2022-10-01T00:29:35",
            "2022-10-01T00:31:04",
            "2022-10-01T00:32:33",
            "2022-10-01T00:34:02",
            "2022-10-01T00:35:31",
            "2022-10-01T00:37:00",
            "2022-10-01T00:38:29",
            "2022-10-01T00:39:58",
            "2022-10-01T00:41:27",
            "2022-10-01T00:42:56",
            "2022-10-01T00:44:25",
            "2022-10-01T00:45:54",
            "2022-10-01T00:47:23",
            "2022-10-01T00:48:52",
            "2022-10-01T00:50:21",
            "2022-10-01T00:51:50",
            "2022-10-01T00:53:19",
            "2022-10-01T00:54:48",
            "2022-10-01T00:56:17",
            "2022-10-01T00:57:46",
            "2022-10-01T00:59:15"
        ],
      datasets: [
        {
          data: [
            -1.7,
            -1.5,
            -64.4,
            -55.7,
            -4.5,
            -10.5,
            -19.5,
            -1.6,
            -1.6,
            -1.6,
            -1.6,
            -5.3,
            -60.7,
            -27,
            -1.7,
            -36.9,
            -26.3,
            -4,
            -22.7,
            -1.7,
            -1.6,
            -1.6,
            -1.6,
            -1.6,
            -1.6,
            -1.6,
            -1.2,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1
        ]
        
        },{
          data: [
            -1.9,
            -1.6,
            -205.8,
            -212.1,
            -92.1,
            -170.8,
            -81,
            -1.9,
            -1.7,
            -1.6,
            -1.6,
            -65.6,
            -191.4,
            -184.3,
            -1.9,
            -176,
            -177.5,
            -58.6,
            -165.2,
            -2,
            -1.6,
            -1.7,
            -1.6,
            -1.6,
            -1.6,
            -1.7,
            -1.6,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1,
            -1.1
        ]
        }
      ]
    }}
    width={width} // from react-native
    height={height}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#25aff3",
      backgroundGradientFrom: "#25aff3",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    verticalLabelRotation={45}
    horizontalLabelRotation={30}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </View>;
};

export default App;