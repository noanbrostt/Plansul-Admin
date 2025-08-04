import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import {
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  handleZoom,
  handleZoomOut,
} from "@/components/CustomRecharts";

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
console.log("const initialData = " + JSON.stringify(initialData));

export default function BarrasPage() {
  const [state, setState] = useState({
    data: initialData,
    refAreaLeft: "",
    refAreaRight: "",
  });
  const [hoverKey, setHoverKey] = useState(null);
  const { data, refAreaLeft, refAreaRight } = state;

  return (
    <div className="bg-base-100 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold h-10">
          Gráficos de Barras{" "}
          <FavoriteButton
            tela={{ nome: "Gráficos de Barra", url: "devs/graficos/barra" }}
          />
        </h1>
        <div className="breadcrumbs text-sm text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Gráficos</li>
            <li className="text-primary font-medium">De Barra</li>
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
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="uv"
                fill="var(--color-primary)"
                label={{
                  position: "insideTop",
                  fill: "var(--color-primary-content)",
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <BarChart data={initialData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="uv"
        fill="var(--color-primary)"

        // Mostra o valor na própria barra
        label={{ position: 'insideTop', fill: 'var(--color-primary-content)' }}
      />
    </BarChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>

      {/* 2. Múltiplas Séries + LegendOpacity */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Barras Empilhadas + Opacidade de Legenda + Zoom
        </h2>
        <div className="flex justify-between items-center">
          <button
            className="btn btn-sm btn-primary my-2 ml-9"
            onClick={() => handleZoomOut({ initialData, setState })}
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
            <BarChart
              data={data}
              onMouseDown={(e) =>
                setState((s) => ({ ...s, refAreaLeft: e.activeLabel }))
              }
              onMouseMove={(e) =>
                state.refAreaLeft &&
                setState((s) => ({ ...s, refAreaRight: e.activeLabel }))
              }
              onMouseUp={() =>
                handleZoom({
                  refAreaLeft: state.refAreaLeft,
                  refAreaRight: state.refAreaRight,
                  initialData,
                  setState,
                })
              }
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <Bar
                dataKey="uv"
                fill="var(--color-primary)"
                opacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
                stackId="a"
              />
              <Bar
                dataKey="pv"
                fill="var(--color-accent)"
                opacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
                stackId="a"
              />
              {refAreaLeft && refAreaRight && (
                <ReferenceArea
                  x1={refAreaLeft}
                  x2={refAreaRight}
                  fill="var(--color-base-content)"
                  fillOpacity={0.2}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import { useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import {
  XAxis,
  YAxis,
  Tooltip,
  handleZoom,
  handleZoomOut,
} from "@/components/CustomRecharts";

const [state, setState] = useState({
  data: initialData,
  refAreaLeft: "",
  refAreaRight: "",
});
const [hoverKey, setHoverKey] = useState(null);
const { data, refAreaLeft, refAreaRight } = state;

const initialData = [...]; // Ta lá no console

<button 
  className="btn btn-sm btn-primary my-2 ml-9" 
  onClick={() => handleZoomOut({ initialData, setState })}
>
  Zoom Out
</button>
<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <BarChart
      data={initialData}
      onMouseDown={(e) => setState(s => ({...s, refAreaLeft: e.activeLabel}))}
      onMouseMove={(e) => state.refAreaLeft && setState(s => ({...s, refAreaRight: e.activeLabel}))}
      onMouseUp={() =>
        handleZoom({
          refAreaLeft: state.refAreaLeft,
          refAreaRight: state.refAreaRight,
          initialData,
          setState,
        })
      }
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        onMouseEnter={({dataKey}) => setHoverKey(dataKey)}
        onMouseLeave={() => setHoverKey(null)}
      />
      <Bar
        dataKey="uv"
        fill="var(--color-primary)"
        opacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
        stackId="a" // Essa linha que torna as barras empilhadas
      />
      <Bar
        dataKey="pv"
        fill="var(--color-accent)"
        opacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
        stackId="a" // Essa linha que torna as barras empilhadas
      />
      {refAreaLeft && refAreaRight && (
        <ReferenceArea
          x1={refAreaLeft}
          x2={refAreaRight}
          fill="var(--color-base-content)"
          fillOpacity={0.2}
        />
      )}
    </BarChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>

      {/* Com Brush */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Múltiplas barras + Opacidade de Legenda + Brush
        </h2>
        <div
          className="w-full h-64 select-none"
          style={{ userSelect: "none" }}
          tabIndex={0}
        >
          <ResponsiveContainer>
            <BarChart data={initialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <Bar
                dataKey="amt"
                fill="var(--color-error)"
                opacity={hoverKey && hoverKey !== "amt" ? 0.2 : 1}
              />
              <Bar
                dataKey="uv"
                fill="var(--color-warning)"
                opacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
              />
              <Bar
                dataKey="pv"
                fill="var(--color-success)"
                opacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
              />
              <Brush dataKey="name" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Brush
} from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <BarChart data={initialData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        onMouseEnter={({dataKey}) => setHoverKey(dataKey)}
        onMouseLeave={() => setHoverKey(null)}
      />
      <Bar
        dataKey="amt"
        fill="var(--color-error)"
        opacity={hoverKey && hoverKey !== "amt" ? 0.2 : 1}
      />
      <Bar
        dataKey="uv"
        fill="var(--color-warning)"
        opacity={hoverKey && hoverKey !== "uv" ? 0.2 : 1}
      />
      <Bar
        dataKey="pv"
        fill="var(--color-success)"
        opacity={hoverKey && hoverKey !== "pv" ? 0.2 : 1}
      />
      <Brush dataKey="name" />
    </BarChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
