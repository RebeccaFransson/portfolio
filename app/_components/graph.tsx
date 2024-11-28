import { ResponsiveLine, type Datum, type DatumValue } from "@nivo/line";
import { type CartesianMarkerProps } from "@nivo/core";

export const Graph = ({
  inputData,
  retirementAge,
  changesInSavnings,
}: {
  inputData?: Datum[];
  retirementAge?: number;
  changesInSavnings: (number | undefined)[];
}) => {
  const data = [
    {
      id: "Your fire journey",
      data: inputData ?? [],
    },
  ];

  const markers: CartesianMarkerProps<DatumValue>[] = [
    {
      axis: "x",
      legend: "change in expenses",
      legendOrientation: "vertical",
      lineStyle: {
        stroke: "rgb(253 186 116)",
        strokeWidth: 2,
      },
      textStyle: { fontSize: "10px", color: "#aaa" },
      value: 43,
    },
  ];
  if (changesInSavnings)
    changesInSavnings.forEach((age) => {
      if (age)
        markers.push({
          axis: "x",
          legend: "change in savnings",
          legendOrientation: "vertical",
          lineStyle: {
            stroke: "rgb(122 229 130)",
            strokeWidth: 2,
          },
          textStyle: { fontSize: "10px", color: "#aaa" },
          value: age,
        });
    });
  if (retirementAge)
    markers.push({
      axis: "x",
      legend: "Retirement",
      legendOrientation: "vertical",
      lineStyle: {
        stroke: "rgb(0 187 249)",
        strokeWidth: 2,
      },
      value: retirementAge,
    });

  return (
    <div className="h-[300px] w-full">
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 45, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "age",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "money",
          legendOffset: -50,
          legendPosition: "middle",
          truncateTickAt: 0,
          format: (value: number) => {
            if (value >= 1000000 || value <= -1000000)
              return value / 1000000 + "m";
            if (value >= 1000 || value <= -1000) return value / 1000 + "k";
            return value;
          },
        }}
        markers={markers}
        curve="catmullRom"
        enableGridX={false}
        enableGridY={false}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
      />
    </div>
  );
};
