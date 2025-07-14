// src/components/CustomRecharts.js
import {
  XAxis as ReXAxis,
  YAxis as ReYAxis,
  Tooltip as ReTooltip,
  Brush as ReBrush,
} from "recharts";

export function YAxis(
  props,
  varFill = "var(--color-base-content)",
  varFontSize = 12
) {
  return <ReYAxis tick={{ fill: varFill, fontSize: varFontSize }} {...props} />;
}

export function XAxis(
  props,
  varFill = "var(--color-base-content)",
  varFontSize = 12
) {
  return <ReXAxis tick={{ fill: varFill, fontSize: varFontSize }} {...props} />;
}

export function Tooltip(props) {
  return (
    <ReTooltip
      labelStyle={{
        color: "var(--color-base-content)",
        marginBottom: "4px",
      }}
      contentStyle={{
        backgroundColor: "var(--color-base-100)",
        border: "none",
        borderRadius: "4px",
        padding: "8px",
        fontWeight: "bold",
      }}
      {...props}
    />
  );
}

export function Brush(props) {
  return (
    <ReBrush
      height={30}
      travellerWidth={10}
      stroke="var(--color-primary)"
      traveller={{
        stroke: "var(--color-secondary)",
        fill: "var(--color-secondary)",
      }}
      {...props}
    />
  );
}
