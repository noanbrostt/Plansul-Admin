import{r as y,j as e}from"./index-acpie0c_.js";import{F as A}from"./FavoriteButton-B4vdGqJV.js";import{C as c}from"./CodeBlock-xQtPYNVU.js";import{X as m,Y as d,T as v,h as K,a as g,B}from"./CustomRecharts-DxfUbWwI.js";import{R as p}from"./CategoricalChart-CNhoLFA9.js";import{B as f}from"./BarChart-d7qhqhlz.js";import{B as r}from"./barSelectors-B3BlofPO.js";import{a as b}from"./CartesianChart-B8lgGeCE.js";import{L as j}from"./Legend-DmwwJElJ.js";import{R as C}from"./ReferenceArea-DTkFQc_a.js";import"./clsx-B-dksMZM.js";import"./YAxis-DYZSV1c_.js";import"./index-CnyDuYXe.js";import"./ErrorBar-DNhFrvUl.js";import"./tooltipContext-DHbjUw-t.js";const s=[{name:"Jan",uv:400,pv:240,amt:240},{name:"Fev",uv:300,pv:456,amt:240},{name:"Mar",uv:200,pv:139,amt:221},{name:"Abr",uv:278,pv:390,amt:200},{name:"Mai",uv:189,pv:480,amt:218},{name:"Jun",uv:239,pv:380,amt:250},{name:"Jul",uv:349,pv:430,amt:210},{name:"Ago",uv:400,pv:240,amt:240},{name:"Set",uv:300,pv:139,amt:221},{name:"Out",uv:278,pv:390,amt:200},{name:"Nov",uv:189,pv:480,amt:218},{name:"Dez",uv:239,pv:380,amt:250}];console.log("const initialData = "+JSON.stringify(s));function H(){const[o,i]=y.useState({data:s,refAreaLeft:"",refAreaRight:""}),[a,n]=y.useState(null),{data:h,refAreaLeft:u,refAreaRight:x}=o;return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold h-10",children:["Gráficos de Barras"," ",e.jsx(A,{tela:{nome:"Gráficos de Barra",url:"devs/graficos/barra"}})]}),e.jsx("div",{className:"breadcrumbs text-sm text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Gráficos"}),e.jsx("li",{className:"text-primary font-medium",children:"De Barra"})]})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Gráfico Básico"}),e.jsx("div",{className:"w-full h-64 select-none",children:e.jsx(p,{children:e.jsxs(f,{data:h,children:[e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(v,{}),e.jsx(r,{dataKey:"uv",fill:"var(--color-primary)",label:{position:"insideTop",fill:"var(--color-primary-content)"}})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(c,{code:`import { BarChart, Bar, ResponsiveContainer } from "recharts";
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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Barras Empilhadas + Opacidade de Legenda + Zoom"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("button",{className:"btn btn-sm btn-primary my-2 ml-9",onClick:()=>K({initialData:s,setState:i}),children:"Zoom Out"}),e.jsx("div",{className:"badge badge-info badge-outline",children:"Arraste no gráfico para dar zoom"})]}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(p,{children:e.jsxs(f,{data:h,onMouseDown:t=>i(l=>({...l,refAreaLeft:t.activeLabel})),onMouseMove:t=>o.refAreaLeft&&i(l=>({...l,refAreaRight:t.activeLabel})),onMouseUp:()=>g({refAreaLeft:o.refAreaLeft,refAreaRight:o.refAreaRight,initialData:s,setState:i}),children:[e.jsx(b,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(v,{}),e.jsx(j,{onMouseEnter:({dataKey:t})=>n(t),onMouseLeave:()=>n(null)}),e.jsx(r,{dataKey:"uv",fill:"var(--color-primary)",opacity:a&&a!=="uv"?.2:1,stackId:"a"}),e.jsx(r,{dataKey:"pv",fill:"var(--color-accent)",opacity:a&&a!=="pv"?.2:1,stackId:"a"}),u&&x&&e.jsx(C,{x1:u,x2:x,fill:"var(--color-base-content)",fillOpacity:.2})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(c,{code:`import { useState } from "react";
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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Múltiplas barras + Opacidade de Legenda + Brush"}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(p,{children:e.jsxs(f,{data:s,children:[e.jsx(b,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(v,{}),e.jsx(j,{onMouseEnter:({dataKey:t})=>n(t),onMouseLeave:()=>n(null)}),e.jsx(r,{dataKey:"amt",fill:"var(--color-error)",opacity:a&&a!=="amt"?.2:1}),e.jsx(r,{dataKey:"uv",fill:"var(--color-warning)",opacity:a&&a!=="uv"?.2:1}),e.jsx(r,{dataKey:"pv",fill:"var(--color-success)",opacity:a&&a!=="pv"?.2:1}),e.jsx(B,{dataKey:"name"})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(c,{code:`import {
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
</div>`})})]})]})}export{H as default};
