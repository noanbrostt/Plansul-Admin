import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import {
  ComposedChart,
  Bar,
  Line,
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
  { name: "Jan", receita: 400, despesa: 240, lucro: 160, meta: 350 },
  { name: "Fev", receita: 300, despesa: 456, lucro: -156, meta: 350 },
  { name: "Mar", receita: 200, despesa: 139, lucro: 61, meta: 350 },
  { name: "Abr", receita: 278, despesa: 390, lucro: -112, meta: 350 },
  { name: "Mai", receita: 189, despesa: 480, lucro: -291, meta: 350 },
  { name: "Jun", receita: 239, despesa: 380, lucro: -141, meta: 350 },
  { name: "Jul", receita: 349, despesa: 430, lucro: -81, meta: 350 },
  { name: "Ago", receita: 400, despesa: 240, lucro: 160, meta: 350 },
  { name: "Set", receita: 520, despesa: 139, lucro: 381, meta: 350 },
  { name: "Out", receita: 478, despesa: 390, lucro: 88, meta: 350 },
  { name: "Nov", receita: 589, despesa: 480, lucro: 109, meta: 350 },
  { name: "Dez", receita: 639, despesa: 380, lucro: 259, meta: 350 },
];

export default function CompostosPage() {
  const [state, setState] = useState({
    data: initialData,
    refAreaLeft: "",
    refAreaRight: "",
    hoverKey: null,
  });
  const [hoverKey, setHoverKey] = useState(null);
  const { data, refAreaLeft, refAreaRight } = state;

  return (
    <div className="bg-base-100 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold h-10">
          Gráficos Compostos
          <FavoriteButton
            tela={{
              nome: "Gráficos Compostos",
              url: "devs/graficos/compostos",
            }}
          />
        </h1>
        <div className="breadcrumbs text-sm text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Gráficos</li>
            <li>Compostos</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Gráfico Composto Básico */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Gráfico Composto Básico{" "}
            <small className="text-base-content/70 mb-4">
              (Combinação de barras, linha e área em um único gráfico.)
            </small>
          </h2>
          <div className="w-full h-64 select-none">
            <ResponsiveContainer>
              <ComposedChart data={data}>
                <defs>
                  <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="receita" fill="var(--color-primary)" />
                <Bar dataKey="despesa" fill="var(--color-error)" />
                <Line
                  type="monotone"
                  dataKey="meta"
                  stroke="var(--color-warning)"
                  strokeWidth={2}
                  dot={false}
                />
                <Area
                  type="monotone"
                  dataKey="lucro"
                  fill="url(#colorLucro)"
                  stroke="#10b981"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="font-medium text-base-content/80 mt-4">Código:</p>
          <div>
            <CodeBlock
              code={`import { ComposedChart, Bar, Line, Area, ResponsiveContainer } from "recharts";
import { XAxis, YAxis, Tooltip, Legend } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

<ResponsiveContainer>
  <ComposedChart data={initialData}>
    <defs>
      <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="receita" fill="var(--color-primary)" />
    <Bar dataKey="despesa" fill="var(--color-error)" />
    <Line
      type="monotone"
      dataKey="meta"
      stroke="var(--color-warning)"
      strokeWidth={2}
      dot={false}
    />
    <Area
      type="monotone"
      dataKey="lucro"
      fill="url(#colorLucro)"
      stroke="#10b981"
    />
  </ComposedChart>
</ResponsiveContainer>`}
            />
          </div>
        </div>

        {/* Gráfico Composto Interativo */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Gráfico Composto + Opacidade de Legenda + Zoom
          </h2>
          <div className="flex justify-between items-center mb-4">
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
              <ComposedChart
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
                  <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopOpacity={0.8} />
                    <stop offset="95%" stopOpacity={0.1} />
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
                <Bar
                  dataKey="receita"
                  fill="var(--color-primary)"
                  opacity={hoverKey && hoverKey !== "receita" ? 0.2 : 1}
                />
                <Bar
                  dataKey="despesa"
                  fill="var(--color-error)"
                  opacity={hoverKey && hoverKey !== "despesa" ? 0.2 : 1}
                />
                <Line
                  type="monotone"
                  dataKey="meta"
                  stroke="var(--color-warning)"
                  strokeWidth={2}
                  dot={false}
                  strokeOpacity={hoverKey && hoverKey !== "meta" ? 0.2 : 1}
                />
                <Area
                  type="monotone"
                  dataKey="lucro"
                  fill="url(#colorLucro)"
                  fillOpacity={hoverKey && hoverKey !== "lucro" ? 0.1 : 0.5}
                  strokeOpacity={hoverKey && hoverKey !== "lucro" ? 0.3 : 1}
                />
                {refAreaLeft && refAreaRight && (
                  <ReferenceArea
                    x1={refAreaLeft}
                    x2={refAreaRight}
                    fill="var(--color-base-content)"
                    fillOpacity={0.2}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="font-medium text-base-content/80 mt-4">Código:</p>
          <div>
            <CodeBlock
              code={`import { useState } from "react";
import {
  ComposedChart,
  Bar,
  Line,
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
 
const { data, refAreaLeft, refAreaRight } = state;      
const [hoverKey, setHoverKey] = useState(null);

<button
  className="btn btn-sm btn-primary my-2 ml-9"
  onClick={() => handleZoomOut({ initialData, setState })}
>
  Zoom Out
</button>
<div
  className="w-full h-64 select-none"
  style={{ userSelect: "none" }}
  tabIndex={0}
>
  <ResponsiveContainer>
    <ComposedChart
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
        <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
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
      <Bar
        dataKey="receita"
        fill="var(--color-primary)"
        opacity={hoverKey && hoverKey !== "receita" ? 0.2 : 1}
      />
      <Bar
        dataKey="despesa"
        fill="var(--color-error)"
        opacity={hoverKey && hoverKey !== "despesa" ? 0.2 : 1}
      />
      <Line
        type="monotone"
        dataKey="meta"
        stroke="var(--color-warning)"
        strokeWidth={2}
        dot={false}
        strokeOpacity={hoverKey && hoverKey !== "meta" ? 0.2 : 1}
      />
      <Area
        type="monotone"
        dataKey="lucro"
        fill="url(#colorLucro)"
        stroke="#10b981"
        fillOpacity={hoverKey && hoverKey !== "lucro" ? 0.1 : 0.5}
        strokeOpacity={hoverKey && hoverKey !== "lucro" ? 0.3 : 1}
      />
      {refAreaLeft && refAreaRight && (
        <ReferenceArea
          x1={refAreaLeft}
          x2={refAreaRight}
          fill="var(--color-base-content)"
          fillOpacity={0.2}
        />
      )}
    </ComposedChart>
  </ResponsiveContainer>
</div>`}
            />
          </div>
        </div>

        {/* Gráfico Composto com Brush */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Gráfico Composto + Opacidade de Legenda + Brush
          </h2>
          <div
            className="w-full h-64 select-none"
            style={{ userSelect: "none" }}
            tabIndex={0}
          >
            <ResponsiveContainer>
              <ComposedChart data={initialData}>
                <defs>
                  <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
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
                <Bar
                  dataKey="receita"
                  fill="var(--color-primary)"
                  opacity={hoverKey && hoverKey !== "receita" ? 0.2 : 1}
                />
                <Bar
                  dataKey="despesa"
                  fill="var(--color-error)"
                  opacity={hoverKey && hoverKey !== "despesa" ? 0.2 : 1}
                />
                <Line
                  type="monotone"
                  dataKey="meta"
                  stroke="var(--color-warning)"
                  strokeWidth={2}
                  dot={false}
                  strokeOpacity={hoverKey && hoverKey !== "meta" ? 0.2 : 1}
                />
                <Area
                  type="monotone"
                  dataKey="lucro"
                  fill="url(#colorLucro)"
                  stroke="#10b981"
                  fillOpacity={hoverKey && hoverKey !== "lucro" ? 0.1 : 0.5}
                  strokeOpacity={hoverKey && hoverKey !== "lucro" ? 0.3 : 1}
                />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="font-medium text-base-content/80 mt-4">Código:</p>
          <div>
            <CodeBlock
              code={`import {
  ComposedChart,
  Bar,
  Line,
  Area,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Brush
} from "recharts";
import { XAxis, YAxis, Tooltip } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

const [hoverKey, setHoverKey] = useState(null);

<ComposedChart data={initialData}>
  <defs>
    <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
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
  <Bar
    dataKey="receita"
    fill="var(--color-primary)"
    opacity={hoverKey && hoverKey !== "receita" ? 0.2 : 1}
  />
  <Bar
    dataKey="despesa"
    fill="var(--color-error)"
    opacity={hoverKey && hoverKey !== "despesa" ? 0.2 : 1}
  />
  <Line
    type="monotone"
    dataKey="meta"
    stroke="var(--color-warning)"
    strokeWidth={2}
    dot={false}
    strokeOpacity={hoverKey && hoverKey !== "meta" ? 0.2 : 1}
  />
  <Area
    type="monotone"
    dataKey="lucro"
    fill="url(#colorLucro)"
    stroke="#10b981"
    fillOpacity={hoverKey && hoverKey !== "lucro" ? 0.1 : 0.5}
    strokeOpacity={hoverKey && hoverKey !== "lucro" ? 0.3 : 1}
  />
  <Brush dataKey="name" height={30} stroke="#8884d8" />
</ComposedChart>`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
