// src/components/CustomRecharts.jsx
import {
  XAxis as ReXAxis,
  YAxis as ReYAxis,
  Tooltip as ReTooltip,
  Brush as ReBrush,
} from "recharts";

// Funções de zoom
export function handleZoom({ refAreaLeft, refAreaRight, initialData, setState }) {
  if (refAreaLeft === refAreaRight || !refAreaRight) {
    setState((prev) => ({ ...prev, refAreaLeft: "", refAreaRight: "" }));
    return;
  }

  const start = initialData.findIndex((d) => d.name === refAreaLeft);
  const end = initialData.findIndex((d) => d.name === refAreaRight) + 1;
  const zoomedData = initialData.slice(
    Math.min(start, end - 1),
    Math.max(start, end)
  );
  
  setState((prev) => ({
    ...prev,
    data: zoomedData,
    refAreaLeft: "",
    refAreaRight: "",
  }));
}

export function handleZoomOut({ initialData, setState }) {
  setState((prev) => ({
    ...prev,
    data: initialData,
    refAreaLeft: "",
    refAreaRight: "",
  }));
}

// Componentes customizados
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
      height={20}
      travellerWidth={10}
      stroke="var(--color-primary)"
      {...props}
    />
  );
}