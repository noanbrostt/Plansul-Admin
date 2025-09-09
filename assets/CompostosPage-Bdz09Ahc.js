import{r as n,j as e}from"./index-CaMTW5gI.js";import{F as A}from"./FavoriteButton-DTS6fCm_.js";import{C as d}from"./CodeBlock-BOCfT8g5.js";import{X as m,Y as p,T as f,h as g,a as L,B as k}from"./CustomRecharts-Dmc2BfIb.js";import{a as O,R as y}from"./CategoricalChart-D1GlBywU.js";import{C as R,a as h}from"./CartesianChart-CSQzaQCr.js";import{L as x}from"./Legend-Ci-H3GY5.js";import{B as s}from"./barSelectors-CcfZBACu.js";import{L as u}from"./Line-BR5_B4zC.js";import{A as v}from"./Area-BjxQdO-H.js";import{R as N}from"./ReferenceArea-CQFRj5Zy.js";import"./clsx-B-dksMZM.js";import"./YAxis-DvBet5Oj.js";import"./index-CnyDuYXe.js";import"./ErrorBar-CeZ-qNID.js";import"./tooltipContext-uaGDuW15.js";import"./ActivePoints-WaJVs6W1.js";var w=["axis"],j=n.forwardRef((t,r)=>n.createElement(R,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:w,tooltipPayloadSearcher:O,categoricalChartProps:t,ref:r}));const l=[{name:"Jan",receita:400,despesa:240,lucro:160,meta:350},{name:"Fev",receita:300,despesa:456,lucro:-156,meta:350},{name:"Mar",receita:200,despesa:139,lucro:61,meta:350},{name:"Abr",receita:278,despesa:390,lucro:-112,meta:350},{name:"Mai",receita:189,despesa:480,lucro:-291,meta:350},{name:"Jun",receita:239,despesa:380,lucro:-141,meta:350},{name:"Jul",receita:349,despesa:430,lucro:-81,meta:350},{name:"Ago",receita:400,despesa:240,lucro:160,meta:350},{name:"Set",receita:520,despesa:139,lucro:381,meta:350},{name:"Out",receita:478,despesa:390,lucro:88,meta:350},{name:"Nov",receita:589,despesa:480,lucro:109,meta:350},{name:"Dez",receita:639,despesa:380,lucro:259,meta:350}];function U(){const[t,r]=n.useState({data:l,refAreaLeft:"",refAreaRight:"",hoverKey:null}),[o,i]=n.useState(null),{data:b,refAreaLeft:C,refAreaRight:K}=t;return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold h-10",children:["Gráficos Compostos",e.jsx(A,{tela:{nome:"Gráficos Compostos",url:"devs/graficos/compostos"}})]}),e.jsx("div",{className:"breadcrumbs text-sm text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Gráficos"}),e.jsx("li",{className:"text-primary font-medium",children:"Compostos"})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsxs("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:["Gráfico Composto Básico"," ",e.jsx("small",{className:"text-base-content/70 mb-4",children:"(Combinação de barras, linha e área em um único gráfico.)"})]}),e.jsx("div",{className:"w-full h-64 select-none",children:e.jsx(y,{children:e.jsxs(j,{data:b,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorLucro",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#10b981",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"#10b981",stopOpacity:.1})]})}),e.jsx(h,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(p,{}),e.jsx(f,{}),e.jsx(x,{}),e.jsx(s,{dataKey:"receita",fill:"var(--color-primary)"}),e.jsx(s,{dataKey:"despesa",fill:"var(--color-error)"}),e.jsx(u,{type:"monotone",dataKey:"meta",stroke:"var(--color-warning)",strokeWidth:2,dot:!1}),e.jsx(v,{type:"monotone",dataKey:"lucro",fill:"url(#colorLucro)",stroke:"#10b981"})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(d,{code:`import { ComposedChart, Bar, Line, Area, ResponsiveContainer } from "recharts";
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
</ResponsiveContainer>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Gráfico Composto + Opacidade de Legenda + Zoom"}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("button",{className:"btn btn-sm btn-primary my-2 ml-9",onClick:()=>g({initialData:l,setState:r}),children:"Zoom Out"}),e.jsx("div",{className:"badge badge-info badge-outline",children:"Arraste no gráfico para dar zoom"})]}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(y,{children:e.jsxs(j,{data:b,onMouseDown:a=>r(c=>({...c,refAreaLeft:a.activeLabel})),onMouseMove:a=>t.refAreaLeft&&r(c=>({...c,refAreaRight:a.activeLabel})),onMouseUp:()=>L({refAreaLeft:t.refAreaLeft,refAreaRight:t.refAreaRight,initialData:l,setState:r}),children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorLucro",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopOpacity:.1})]})}),e.jsx(h,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(p,{}),e.jsx(f,{}),e.jsx(x,{onMouseEnter:({dataKey:a})=>i(a),onMouseLeave:()=>i(null)}),e.jsx(s,{dataKey:"receita",fill:"var(--color-primary)",opacity:o&&o!=="receita"?.2:1}),e.jsx(s,{dataKey:"despesa",fill:"var(--color-error)",opacity:o&&o!=="despesa"?.2:1}),e.jsx(u,{type:"monotone",dataKey:"meta",stroke:"var(--color-warning)",strokeWidth:2,dot:!1,strokeOpacity:o&&o!=="meta"?.2:1}),e.jsx(v,{type:"monotone",dataKey:"lucro",fill:"url(#colorLucro)",fillOpacity:o&&o!=="lucro"?.1:.5,strokeOpacity:o&&o!=="lucro"?.3:1}),C&&K&&e.jsx(N,{x1:C,x2:K,fill:"var(--color-base-content)",fillOpacity:.2})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(d,{code:`import { useState } from "react";
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
</div>`})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Gráfico Composto + Opacidade de Legenda + Brush"}),e.jsx("div",{className:"w-full h-64 select-none",style:{userSelect:"none"},tabIndex:0,children:e.jsx(y,{children:e.jsxs(j,{data:l,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorLucro",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#10b981",stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:"#10b981",stopOpacity:.1})]})}),e.jsx(h,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(p,{}),e.jsx(f,{}),e.jsx(x,{onMouseEnter:({dataKey:a})=>i(a),onMouseLeave:()=>i(null)}),e.jsx(s,{dataKey:"receita",fill:"var(--color-primary)",opacity:o&&o!=="receita"?.2:1}),e.jsx(s,{dataKey:"despesa",fill:"var(--color-error)",opacity:o&&o!=="despesa"?.2:1}),e.jsx(u,{type:"monotone",dataKey:"meta",stroke:"var(--color-warning)",strokeWidth:2,dot:!1,strokeOpacity:o&&o!=="meta"?.2:1}),e.jsx(v,{type:"monotone",dataKey:"lucro",fill:"url(#colorLucro)",stroke:"#10b981",fillOpacity:o&&o!=="lucro"?.1:.5,strokeOpacity:o&&o!=="lucro"?.3:1}),e.jsx(k,{dataKey:"name",height:30,stroke:"#8884d8"})]})})}),e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),e.jsx("div",{children:e.jsx(d,{code:`import {
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
</ComposedChart>`})})]})]})]})}export{U as default};
