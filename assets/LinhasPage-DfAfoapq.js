import{r as y,j as e}from"./index-Bzp-nq-q.js";import{F as L}from"./FavoriteButton-BFJiOris.js";import{C as c}from"./CodeBlock-BZvdVR1n.js";import{X as m,Y as d,T as v,h as A,a as K,B as g}from"./CustomRecharts-DqDO5ts7.js";import{R as h}from"./CategoricalChart-B5q0bV2p.js";import{L as p}from"./LineChart-CdhH7qGt.js";import{L as s}from"./Line-nPm-eRI9.js";import{a as j}from"./CartesianChart-DE0iGQVZ.js";import{L as b}from"./Legend-C7OVhzPJ.js";import{R as k}from"./ReferenceArea-UvYLqhvE.js";import"./clsx-B-dksMZM.js";import"./YAxis-Cnfrek-G.js";import"./index-CnyDuYXe.js";import"./ActivePoints-b3oQaYN6.js";import"./ErrorBar-Dn2MurZf.js";const r=[{name:"Jan",uv:400,pv:240,amt:240},{name:"Fev",uv:300,pv:456,amt:240},{name:"Mar",uv:200,pv:139,amt:221},{name:"Abr",uv:278,pv:390,amt:200},{name:"Mai",uv:189,pv:480,amt:218},{name:"Jun",uv:239,pv:380,amt:250},{name:"Jul",uv:349,pv:430,amt:210},{name:"Ago",uv:400,pv:240,amt:240},{name:"Set",uv:300,pv:139,amt:221},{name:"Out",uv:278,pv:390,amt:200},{name:"Nov",uv:189,pv:480,amt:218},{name:"Dez",uv:239,pv:380,amt:250}];console.log("const initialData = "+JSON.stringify(r));function E(){const[o,n]=y.useState({data:r,refAreaLeft:"",refAreaRight:"",hoverKey:null}),[a,i]=y.useState(null),{data:u,refAreaLeft:f,refAreaRight:x}=o;return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold h-10",children:["Gráficos de Linhas"," ",e.jsx(L,{tela:{nome:"Gráficos de Linha",url:"devs/graficos/linha"}})]}),e.jsx("div",{className:"breadcrumbs text-sm text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Gráficos"}),e.jsx("li",{className:"text-primary font-medium",children:"De Linha"})]})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Gráfico Básico"}),e.jsx("div",{className:"w-full h-64 select-none",children:e.jsx(h,{children:e.jsxs(p,{data:u,children:[e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(v,{}),e.jsx(s,{type:"monotone",dataKey:"uv",stroke:"var(--color-primary)",dot:!1})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(c,{code:`import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { XAxis, YAxis, Tooltip, Brush } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Múltiplas linhas + Opacidade de Legenda + Zoom"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("button",{className:"btn btn-sm btn-primary my-2 ml-9",onClick:()=>A({initialData:r,setState:n}),children:"Zoom Out"}),e.jsx("div",{className:"badge badge-info badge-outline",children:"Arraste no gráfico para dar zoom"})]}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(h,{children:e.jsxs(p,{data:u,onMouseDown:t=>n(l=>({...l,refAreaLeft:t.activeLabel})),onMouseMove:t=>o.refAreaLeft&&n(l=>({...l,refAreaRight:t.activeLabel})),onMouseUp:()=>K({refAreaLeft:o.refAreaLeft,refAreaRight:o.refAreaRight,initialData:r,setState:n}),children:[e.jsx(j,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(v,{}),e.jsx(b,{onMouseEnter:({dataKey:t})=>i(t),onMouseLeave:()=>i(null)}),e.jsx(s,{dataKey:"uv",stroke:"var(--color-primary)",strokeOpacity:a&&a!=="uv"?.2:1,isAnimationActive:!1}),e.jsx(s,{dataKey:"pv",stroke:"var(--color-accent)",strokeDasharray:"5 5",strokeOpacity:a&&a!=="pv"?.2:1,isAnimationActive:!1}),f&&x&&e.jsx(k,{x1:f,x2:x,fill:"var(--color-base-content)",strokeOpacity:.3})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(c,{code:`import { useState } from "react";
import {
  LineChart,
  Line,
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
    <LineChart
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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Múltiplas linhas + Opacidade de Legenda + Brush"}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(h,{children:e.jsxs(p,{data:r,children:[e.jsx(j,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(v,{}),e.jsx(b,{onMouseEnter:({dataKey:t})=>i(t),onMouseLeave:()=>i(null)}),e.jsx(s,{dataKey:"amt",stroke:"var(--color-error)",strokeWidth:2,strokeOpacity:a&&a!=="amt"?.2:1}),e.jsx(s,{dataKey:"uv",stroke:"var(--color-warning)",strokeWidth:2,strokeOpacity:a&&a!=="uv"?.2:1}),e.jsx(s,{dataKey:"pv",stroke:"var(--color-success)",strokeWidth:2,strokeOpacity:a&&a!=="pv"?.2:1}),e.jsx(g,{dataKey:"name"})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(c,{code:`import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
// Componentes equivalentes aos originais do "recharts", mas estilizados
import { XAxis, YAxis, Tooltip, Brush } from "@/components/CustomRecharts";

const initialData = [...]; // Ta lá no console

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
</div>`})})]})]})}export{E as default};
