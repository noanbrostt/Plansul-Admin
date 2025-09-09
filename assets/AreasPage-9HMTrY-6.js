import{r as n,j as e}from"./index-acpie0c_.js";import{F as C}from"./FavoriteButton-B4vdGqJV.js";import{C as p}from"./CodeBlock-xQtPYNVU.js";import{X as d,Y as f,T as m,h as b,a as g,B as K}from"./CustomRecharts-DxfUbWwI.js";import{a as O,R as v}from"./CategoricalChart-CNhoLFA9.js";import{C as R,a as j}from"./CartesianChart-B8lgGeCE.js";import{A as s}from"./Area-SxhKwR9o.js";import{L as A}from"./Legend-DmwwJElJ.js";import{R as L}from"./ReferenceArea-DTkFQc_a.js";import"./clsx-B-dksMZM.js";import"./YAxis-DYZSV1c_.js";import"./index-CnyDuYXe.js";import"./ActivePoints-DHjMXb63.js";var G=["axis"],y=n.forwardRef((a,t)=>n.createElement(R,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:G,tooltipPayloadSearcher:O,categoricalChartProps:a,ref:t}));const i=[{name:"Jan",uv:400,pv:240,amt:240},{name:"Fev",uv:300,pv:456,amt:240},{name:"Mar",uv:200,pv:139,amt:221},{name:"Abr",uv:278,pv:390,amt:200},{name:"Mai",uv:189,pv:480,amt:218},{name:"Jun",uv:239,pv:380,amt:250},{name:"Jul",uv:349,pv:430,amt:210},{name:"Ago",uv:400,pv:240,amt:240},{name:"Set",uv:300,pv:139,amt:221},{name:"Out",uv:278,pv:390,amt:200},{name:"Nov",uv:189,pv:480,amt:218},{name:"Dez",uv:239,pv:380,amt:250}];console.log("const initialData = "+JSON.stringify(i));function P(){const[a,t]=n.useState({data:i,refAreaLeft:"",refAreaRight:"",hoverKey:null}),[r,l]=n.useState(null),{data:x,refAreaLeft:u,refAreaRight:h}=a;return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold h-10",children:["Gráficos de Área",e.jsx(C,{tela:{nome:"Gráficos de Área",url:"devs/graficos/area"}})]}),e.jsx("div",{className:"breadcrumbs text-sm text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Gráficos"}),e.jsx("li",{className:"text-primary font-medium",children:"De Área"})]})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Gráfico Básico + Área em Degradê"}),e.jsx("div",{className:"w-full h-64 select-none",children:e.jsx(v,{children:e.jsxs(y,{data:x,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"var(--color-primary)",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"var(--color-primary)",stopOpacity:.1})]})}),e.jsx(d,{dataKey:"name"}),e.jsx(f,{}),e.jsx(m,{}),e.jsx(s,{type:"monotone",dataKey:"uv",stroke:"var(--color-primary)",fill:"url(#colorUv)"})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(p,{code:`import { AreaChart, Area, ResponsiveContainer } from "recharts";
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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Múltiplas áreas + Opacidade de Legenda + Zoom"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("button",{className:"btn btn-sm btn-primary my-2 ml-9",onClick:()=>b({initialData:i,setState:t}),children:"Zoom Out"}),e.jsx("div",{className:"badge badge-info badge-outline",children:"Arraste no gráfico para dar zoom"})]}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(v,{children:e.jsxs(y,{data:x,onMouseDown:o=>t(c=>({...c,refAreaLeft:o.activeLabel})),onMouseMove:o=>a.refAreaLeft&&t(c=>({...c,refAreaRight:o.activeLabel})),onMouseUp:()=>g({refAreaLeft:a.refAreaLeft,refAreaRight:a.refAreaRight,initialData:i,setState:t}),children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"colorPrimary",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"var(--color-primary)",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"var(--color-primary)",stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"colorAccent",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"var(--color-accent)",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"var(--color-accent)",stopOpacity:.1})]})]}),e.jsx(j,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"name"}),e.jsx(f,{}),e.jsx(m,{}),e.jsx(A,{onMouseEnter:({dataKey:o})=>l(o),onMouseLeave:()=>l(null)}),e.jsx(s,{dataKey:"uv",stroke:"var(--color-primary)",fill:"url(#colorPrimary)",fillOpacity:r&&r!=="uv"?.1:.5,strokeOpacity:r&&r!=="uv"?.3:1}),e.jsx(s,{dataKey:"pv",stroke:"var(--color-accent)",fill:"url(#colorAccent)",fillOpacity:r&&r!=="pv"?.1:.5,strokeOpacity:r&&r!=="pv"?.3:1}),u&&h&&e.jsx(L,{x1:u,x2:h,fill:"var(--color-base-content)",fillOpacity:.2})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(p,{code:`import { useState } from "react";
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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Múltiplas áreas + Opacidade de Legenda + Brush"}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(v,{children:e.jsxs(y,{data:i,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"colorError",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"var(--color-error)",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"var(--color-error)",stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"colorWarning",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"var(--color-warning)",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"var(--color-warning)",stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"colorSuccess",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"var(--color-success)",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"var(--color-success)",stopOpacity:.1})]})]}),e.jsx(j,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"name"}),e.jsx(f,{}),e.jsx(m,{}),e.jsx(A,{onMouseEnter:({dataKey:o})=>l(o),onMouseLeave:()=>l(null)}),e.jsx(s,{dataKey:"amt",stroke:"var(--color-error)",fill:"url(#colorError)",fillOpacity:r&&r!=="amt"?.1:.5}),e.jsx(s,{dataKey:"uv",stroke:"var(--color-warning)",fill:"url(#colorWarning)",fillOpacity:r&&r!=="uv"?.1:.5}),e.jsx(s,{dataKey:"pv",stroke:"var(--color-success)",fill:"url(#colorSuccess)",fillOpacity:r&&r!=="pv"?.1:.5}),e.jsx(K,{dataKey:"name"})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(p,{code:`import {
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
</div>`})})]})]})}export{P as default};
