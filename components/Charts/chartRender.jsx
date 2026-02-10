// components/Charts/ChartRenderer.jsx
import SectionChartCard from "./sectionChartCard";
import ChargingTypeDonutChart from "./chargingDunetChart";
import BarChartCard from "./barChart";
import ChartCard from "./chartCard";

export default function ChartRenderer({ type, title, data, series }) {
  switch (type) {
    case "area":
      return (
        <SectionChartCard title={title} data={data} series={series} />
      );

    case "bar":
      return (
        <ChartCard title={title}>
          <BarChartCard data={data} xKey="name"/>
        </ChartCard>
      );

    case "donut":
      // هذا عنده Card داخلي، ما نلفه
      return <ChargingTypeDonutChart title = {title} data={data} />;

    default:
      return null;
  }
}


