import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import {
  BarChart,
  Bar,
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

export default function BarrasPage() {
  const [state, setState] = useState({
    data: initialData,
    refAreaLeft: "",
    refAreaRight: "",
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

  const { data, refAreaLeft, refAreaRight } = state;

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
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
            <li>De Barra</li>
          </ul>
        </div>
      </div>

      {/* Básica */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">Gráfico Básico</h2>
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
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <BarChart data={data}>
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
            </pre>
          </div>
        </div>
      </div>

      {/* 2. Múltiplas Séries + LegendOpacity */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">
          Barras Empilhadas + Opacidade de Legenda + Zoom
        </h2>
        <button className="btn btn-sm my-2" onClick={zoomOut}>
          Zoom Out
        </button>
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
                  fill="var(--color-neutral)"
                  fillOpacity={0.2}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

const [state, setState] = useState({
  data: initialData,
  refAreaLeft: "",
  refAreaRight: "",
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

const { data, refAreaLeft, refAreaRight } = state;

<button className="btn btn-sm my-2" onClick={zoomOut}>
  Zoom Out
</button>
<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <BarChart
      data={data}
      onMouseDown={(e) => setState(s => ({...s, refAreaLeft: e.activeLabel}))}
      onMouseMove={(e) => state.refAreaLeft && setState(s => ({...s, refAreaRight: e.activeLabel}))}
      onMouseUp={zoom}
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
          fill="var(--color-neutral)"
          fillOpacity={0.2}
        />
      )}
    </BarChart>
  </ResponsiveContainer>
</div>`}
            </pre>
          </div>
        </div>
      </div>

      {/* Com Brush */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">
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
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">{`import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Brush
} from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

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
</div>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
