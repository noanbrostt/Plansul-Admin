import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import {
  AreaChart,
  Area,
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

export default function AreasPage() {
  const [state, setState] = useState({
    data: initialData,
    refAreaLeft: "",
    refAreaRight: "",
    hoverKey: null,
  });
  const [hoverKey, setHoverKey] = useState(null);
  const { data, refAreaLeft, refAreaRight } = state;

  return (
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold h-10">
          Gráficos de Área
          <FavoriteButton
            tela={{ nome: "Gráficos de Área", url: "devs/graficos/area" }}
          />
        </h1>
        <div className="breadcrumbs text-sm text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Gráficos</li>
            <li>De Área</li>
          </ul>
        </div>
      </div>

      {/* Básica */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Gráfico Básico + Área em Degradê
        </h2>
        <div className="w-full h-64 select-none">
          <ResponsiveContainer>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-primary)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-primary)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="var(--color-primary)"
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <AreaChart data={initialData}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="var(--color-primary)"
        fill="url(#colorUv)"
      />
    </AreaChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>

      {/* 2. Múltiplas Séries + LegendOpacity */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Múltiplas áreas + Opacidade de Legenda + Zoom
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
            <AreaChart
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
              <defs>
                <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-primary)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-primary)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="colorAccent" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-accent)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-accent)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <Area
                dataKey="uv"
                stroke="var(--color-primary)"
                fill="url(#colorPrimary)"
                fillOpacity={hoverKey && hoverKey !== "uv" ? 0.1 : 0.5}
                strokeOpacity={hoverKey && hoverKey !== "uv" ? 0.3 : 1}
              />
              <Area
                dataKey="pv"
                stroke="var(--color-accent)"
                fill="url(#colorAccent)"
                fillOpacity={hoverKey && hoverKey !== "pv" ? 0.1 : 0.5}
                strokeOpacity={hoverKey && hoverKey !== "pv" ? 0.3 : 1}
              />
              {refAreaLeft && refAreaRight && (
                <ReferenceArea
                  x1={refAreaLeft}
                  x2={refAreaRight}
                  fill="var(--color-base-content)"
                  fillOpacity={0.2}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import { useState } from "react";
import {
  AreaChart,
  Area,
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

const initialData = [...]; // Ta lá no console

const [state, setState] = useState({
  data: initialData,
  refAreaLeft: "",
  refAreaRight: "",
  hoverKey: null,
});
const [hoverKey, setHoverKey] = useState(null);
const { data, refAreaLeft, refAreaRight } = state;

<button
  className="btn btn-sm btn-primary my-2 ml-9" 
  onClick={() => handleZoomOut({ initialData, setState })}
>
  Zoom Out
</button>
<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <AreaChart
      data={initialData}
      onMouseDown={(e) => setState(s => ({...s, refAreaLeft: e.activeLabel}))}
      onMouseMove={(e) => state.refAreaLeft && setState(s => ({...s, refAreaRight: e.activeLabel}))}
      onMouseUp={() => handleZoom({ 
        refAreaLeft: state.refAreaLeft, 
        refAreaRight: state.refAreaRight, 
        initialData, 
        setState 
      })}
    >
      <defs>
        <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="colorAccent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        onMouseEnter={({dataKey}) => setHoverKey(dataKey)}
        onMouseLeave={() => setHoverKey(null)}
      />
      <Area
        dataKey="uv"
        stroke="var(--color-primary)"
        fill="url(#colorPrimary)"
        fillOpacity={hoverKey && hoverKey !== "uv" ? 0.1 : 0.5}
        strokeOpacity={hoverKey && hoverKey !== "uv" ? 0.3 : 1}
      />
      <Area
        dataKey="pv"
        stroke="var(--color-accent)"
        fill="url(#colorAccent)"
        fillOpacity={hoverKey && hoverKey !== "pv" ? 0.1 : 0.5}
        strokeOpacity={hoverKey && hoverKey !== "pv" ? 0.3 : 1}
      />
      {refAreaLeft && refAreaRight && (
        <ReferenceArea
          x1={refAreaLeft}
          x2={refAreaRight}
          fill="var(--color-base-content)"
          fillOpacity={0.2}
        />
      )}
    </AreaChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>

      {/* Com Brush */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Múltiplas áreas + Opacidade de Legenda + Brush
        </h2>
        <div
          className="w-full h-64 select-none"
          style={{ userSelect: "none" }}
          tabIndex={0}
        >
          <ResponsiveContainer>
            <AreaChart data={initialData}>
              <defs>
                <linearGradient id="colorError" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-error)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-error)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="colorWarning" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-warning)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-warning)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-success)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-success)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={({ dataKey }) => setHoverKey(dataKey)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <Area
                dataKey="amt"
                stroke="var(--color-error)"
                fill="url(#colorError)"
                fillOpacity={hoverKey && hoverKey !== "amt" ? 0.1 : 0.5}
              />
              <Area
                dataKey="uv"
                stroke="var(--color-warning)"
                fill="url(#colorWarning)"
                fillOpacity={hoverKey && hoverKey !== "uv" ? 0.1 : 0.5}
              />
              <Area
                dataKey="pv"
                stroke="var(--color-success)"
                fill="url(#colorSuccess)"
                fillOpacity={hoverKey && hoverKey !== "pv" ? 0.1 : 0.5}
              />
              <Brush dataKey="name" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import {
  AreaChart,
  Area,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Brush
} from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

const [hoverKey, setHoverKey] = useState(null);

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <AreaChart data={initialData}>
      <defs>
        <linearGradient id="colorError" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-error)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-error)" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="colorWarning" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-warning)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-warning)" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend
        onMouseEnter={({dataKey}) => setHoverKey(dataKey)}
        onMouseLeave={() => setHoverKey(null)}
      />
      <Area
        dataKey="amt"
        stroke="var(--color-error)"
        fill="url(#colorError)"
        fillOpacity={hoverKey && hoverKey !== "amt" ? 0.1 : 0.5}
      />
      <Area
        dataKey="uv"
        stroke="var(--color-warning)"
        fill="url(#colorWarning)"
        fillOpacity={hoverKey && hoverKey !== "uv" ? 0.1 : 0.5}
      />
      <Area
        dataKey="pv"
        stroke="var(--color-success)"
        fill="url(#colorSuccess)"
        fillOpacity={hoverKey && hoverKey !== "pv" ? 0.1 : 0.5}
      />
      <Brush dataKey="name" />
    </AreaChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
