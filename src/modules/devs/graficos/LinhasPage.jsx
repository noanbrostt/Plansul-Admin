import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { XAxis, YAxis, Tooltip, Brush } from "@/components/CustomRecharts";

const initialData = [
  { name: "Jan", uv: 400, pv: 240, amt: 240 },
  { name: "Fev", uv: 300, pv: 456, amt: 240 },
  { name: "Mar", uv: 200, pv: 139, amt: 221 },
  { name: "Abr", uv: 278, pv: 390, amt: 200 },
  { name: "Mai", uv: 189, pv: 480, amt: 218 },
  { name: "Jun", uv: 239, pv: 380, amt: 250 },
  { name: "Jul", uv: 349, pv: 430, amt: 210 },
  { name: "Ago", uv: 400, pv: 240, amt: 240 },
  { name: "Set", uv: 300, pv: 139, amt: 221 },
  { name: "Out", uv: 278, pv: 390, amt: 200 },
  { name: "Nov", uv: 189, pv: 480, amt: 218 },
  { name: "Dez", uv: 239, pv: 380, amt: 250 },
];

export default function LinhasPage() {
  const [state, setState] = useState({
    data: initialData,
    refAreaLeft: "",
    refAreaRight: "",
    hoverKey: null,
  });
  const [hoverKey, setHoverKey] = useState(null);

  const zoom = () => {
    const { refAreaLeft, refAreaRight } = state;
    if (refAreaLeft === refAreaRight || !refAreaRight) {
      setState((s) => ({ ...s, refAreaLeft: "", refAreaRight: "" }));
      return;
    }

    const start = initialData.findIndex((d) => d.name === refAreaLeft);
    const end = initialData.findIndex((d) => d.name === refAreaRight) + 1;
    const zoomedData = initialData.slice(
      Math.min(start, end - 1),
      Math.max(start, end)
    );
    setState((s) => ({
      ...s,
      data: zoomedData,
      refAreaLeft: "",
      refAreaRight: "",
    }));
  };

  const zoomOut = () => {
    setState((s) => ({
      ...s,
      data: initialData,
      refAreaLeft: "",
      refAreaRight: "",
    }));
  };

  console.log("const initialData = " + JSON.stringify(initialData));
  console.log("const zoom = " + zoom);
  console.log("const zoomOut = " + zoomOut);

  const { data, refAreaLeft, refAreaRight } = state;

  return (
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold h-10">
          Gráficos de Linhas{" "}
          <FavoriteButton
            tela={{ nome: "Gráficos de Linha", url: "devs/graficos/linha" }}
          />
        </h1>
        <div className="breadcrumbs text-sm text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Gráficos</li>
            <li>De Linha</li>
          </ul>
        </div>
      </div>

      {/* Básica */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Gráfico Básico
        </h2>
        <div className="w-full h-64 select-none">
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="var(--color-primary)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
// Componentes equivalentes aos originais do "recharts", mas estilizados
import { XAxis, YAxis, Tooltip, Brush } from "@/components/CustomRecharts";

const initialData =.. // Ta lá no console

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="var(--color-primary)"
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
</div>`}
            </pre>
          </div>
        </div>
      </div>

      {/* 2. Múltiplas Séries + LegendOpacity */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Múltiplas linhas + Opacidade de Legenda + Zoom
        </h2>
        <div className="flex justify-between items-center">
          <button
            className="btn btn-sm btn-primary my-2 ml-9"
            onClick={zoomOut}
          >
            Zoom Out
          </button>
          <div className="badge badge-info badge-outline">
            Arraste no gráfico para dar zoom
          </div>
        </div>
        <div
          className="w-full h-64 select-none"
          style={{ userSelect: "none" }}
          tabIndex={0}
        >
          <ResponsiveContainer>
            <LineChart
              data={data}
              onMouseDown={(e) =>
                setState((s) => ({ ...s, refAreaLeft: e.activeLabel }))
              }
              onMouseMove={(e) =>
                state.refAreaLeft &&
                setState((s) => ({ ...s, refAreaRight: e.activeLabel }))
              }
              onMouseUp={zoom}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <Line
                dataKey="uv"
                stroke="var(--color-primary)"
                strokeOpacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
                isAnimationActive={false}
              />
              <Line
                dataKey="pv"
                stroke="var(--color-accent)"
                strokeDasharray="5 5"
                strokeOpacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
                isAnimationActive={false}
              />
              {refAreaLeft && refAreaRight && (
                <ReferenceArea
                  x1={refAreaLeft}
                  x2={refAreaRight}
                  fill="var(--color-base-content)"
                  strokeOpacity={0.3}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
// Componentes equivalentes aos originais do "recharts", mas estilizados
import { XAxis, YAxis, Tooltip, Brush } from "@/components/CustomRecharts";

const initialData =.. // Ta lá no console
const zoom =.. // Ta lá no console
const zoomOut =.. // Ta lá no console
const [state, setState] = useState({
  data: initialData,
  refAreaLeft: "",
  refAreaRight: "",
  hoverKey: null,
});
const { data, refAreaLeft, refAreaRight } = state;
            
const [hoverKey, setHoverKey] = useState(null);

<button className="btn btn-sm btn-primary my-2 ml-9" onClick={zoomOut}>
  Zoom Out
</button>
<div
  className="w-full h-64 select-none"
  style={{ userSelect: "none" }}
  tabIndex={0}
>
  <ResponsiveContainer>
    <LineChart
      data={data}
      onMouseDown={(e) =>
        setState((s) => ({ ...s, refAreaLeft: e.activeLabel }))
      }
      onMouseMove={(e) =>
        state.refAreaLeft &&
        setState((s) => ({ ...s, refAreaRight: e.activeLabel }))
      }
      onMouseUp={zoom}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
        onMouseLeave={() => setHoverKey(null)}
      />
      <Line
        dataKey="uv"
        stroke="var(--color-primary)"
        strokeOpacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
        isAnimationActive={false}
      />
      <Line
        dataKey="pv"
        stroke="var(--color-accent)"
        strokeDasharray="5 5"
        strokeOpacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
        isAnimationActive={false}
      />
      {refAreaLeft && refAreaRight && (
        <ReferenceArea
          x1={refAreaLeft}
          x2={refAreaRight}
          fill="var(--color-base-content)"
          strokeOpacity={0.3}
        />
      )}
    </LineChart>
  </ResponsiveContainer>
</div>`}
            </pre>
          </div>
        </div>
      </div>

      {/* Com Brush */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Múltiplas linhas + Opacidade de Legenda + Brush
        </h2>
        <div
          className="w-full h-64 select-none"
          style={{ userSelect: "none" }}
          tabIndex={0}
        >
          <ResponsiveContainer>
            <LineChart data={initialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <Line
                dataKey="amt"
                stroke="var(--color-error)"
                strokeWidth={2}
                strokeOpacity={hoverKey && hoverKey !== "amt" ? 0.2 : 1}
              />
              <Line
                dataKey="uv"
                stroke="var(--color-warning)"
                strokeWidth={2}
                strokeOpacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
              />
              <Line
                dataKey="pv"
                stroke="var(--color-success)"
                strokeWidth={2}
                strokeOpacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
              />
              <Brush dataKey="name" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">{`import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
// Componentes equivalentes aos originais do "recharts", mas estilizados
import { XAxis, YAxis, Tooltip, Brush } from "@/components/CustomRecharts";

const initialData =.. // Ta lá no console
const [hoverKey, setHoverKey] = useState(null);

<div
  className="w-full h-64 select-none"
  style={{ userSelect: "none" }}
  tabIndex={0}
>
  <ResponsiveContainer>
    <LineChart data={initialData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
        onMouseLeave={() => setHoverKey(null)}
      />
      <Line
        dataKey="amt"
        stroke="var(--color-error)"
        strokeWidth={2}
        strokeOpacity={hoverKey && hoverKey !== "amt" ? 0.2 : 1}
      />
      <Line
        dataKey="uv"
        stroke="var(--color-warning)"
        strokeWidth={2}
        strokeOpacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
      />
      <Line
        dataKey="pv"
        stroke="var(--color-success)"
        strokeWidth={2}
        strokeOpacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
      />
      <Brush dataKey="name" />
    </LineChart>
  </ResponsiveContainer>
</div>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
