import{r as o,j as i}from"./index-CaMTW5gI.js";import{F as be}from"./FavoriteButton-DTS6fCm_.js";import{C as Y}from"./CodeBlock-BOCfT8g5.js";import{c as U,g as L,b as ve,s as Ae,d as Pe,S as je,f as $,e as me,u as Q,h as Re,r as fe,i as Oe,G as Se,L as _,j as ne,m as V,p as J,k as Ce,l as q,n as Ee,A as Te,o as Le,q as re,t as Ie,D as we,v as Ne,w as De,C as Me,T as ke,x as Ke,a as $e,R as Z,y as le,z as ie}from"./CategoricalChart-D1GlBywU.js";import{s as _e,P as Be}from"./PolarChart-CFFVW7vD.js";import{c as ee}from"./clsx-B-dksMZM.js";import{C as D,u as ze,a as Ge,b as Fe,S as We}from"./tooltipContext-uaGDuW15.js";import{L as oe}from"./Legend-Ci-H3GY5.js";import"./index-CnyDuYXe.js";function se(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function ce(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?se(Object(t),!0).forEach(function(n){Ve(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ve(e,a,t){return(a=qe(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function qe(e){var a=Ue(e,"string");return typeof a=="symbol"?a:a+""}function Ue(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var ae=(e,a)=>a,Xe=[],te=(e,a,t)=>(t==null?void 0:t.length)===0?Xe:t,pe=U([Pe,ae,te],(e,a,t)=>{var{chartData:n}=e,r;if((a==null?void 0:a.data)!=null&&a.data.length>0?r=a.data:r=n,(!r||!r.length)&&t!=null&&(r=t.map(l=>ce(ce({},a.presentationProps),l.props))),r!=null)return r}),Ye=U([pe,ae,te],(e,a,t)=>{if(e!=null)return e.map((n,r)=>{var l,c=L(n,a.nameKey,a.name),u;return t!=null&&(l=t[r])!==null&&l!==void 0&&(l=l.props)!==null&&l!==void 0&&l.fill?u=t[r].props.fill:typeof n=="object"&&n!=null&&"fill"in n?u=n.fill:u=a.fill,{value:ve(c,a.dataKey),color:u,payload:n,type:a.legendType}})}),Ze=U([_e,ae],(e,a)=>{if(e.some(t=>t.type==="pie"&&a.dataKey===t.dataKey&&a.data===t.data))return a}),He=U([pe,Ze,te,Ae],(e,a,t,n)=>{if(!(a==null||e==null))return va({offset:n,pieSettings:a,displayedData:e,cells:t})}),Je=["onMouseEnter","onClick","onMouseLeave"];function Qe(e,a){if(e==null)return{};var t,n,r=ea(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function ea(e,a){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(a.indexOf(n)!==-1)continue;t[n]=e[n]}return t}function de(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?de(Object(t),!0).forEach(function(n){X(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function X(e,a,t){return(a=aa(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function aa(e){var a=ta(e,"string");return typeof a=="symbol"?a:a+""}function ta(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},I.apply(null,arguments)}function na(e){var a=o.useMemo(()=>$(e,!1),[e]),t=o.useMemo(()=>me(e.children,D),[e.children]),n=o.useMemo(()=>({name:e.name,nameKey:e.nameKey,tooltipType:e.tooltipType,data:e.data,dataKey:e.dataKey,cx:e.cx,cy:e.cy,startAngle:e.startAngle,endAngle:e.endAngle,minAngle:e.minAngle,paddingAngle:e.paddingAngle,innerRadius:e.innerRadius,outerRadius:e.outerRadius,cornerRadius:e.cornerRadius,legendType:e.legendType,fill:e.fill,presentationProps:a}),[e.cornerRadius,e.cx,e.cy,e.data,e.dataKey,e.endAngle,e.innerRadius,e.minAngle,e.name,e.nameKey,e.outerRadius,e.paddingAngle,e.startAngle,e.tooltipType,e.legendType,e.fill,a]),r=Q(l=>Ye(l,n,t));return o.createElement(Re,{legendPayload:r})}function ra(e){var{dataKey:a,nameKey:t,sectors:n,stroke:r,strokeWidth:l,fill:c,name:u,hide:y,tooltipType:h}=e;return{dataDefinedOnItem:n==null?void 0:n.map(f=>f.tooltipPayload),positions:n==null?void 0:n.map(f=>f.tooltipPosition),settings:{stroke:r,strokeWidth:l,fill:c,dataKey:a,nameKey:t,name:ve(u,a),hide:y,type:h,color:c,unit:""}}}var la=(e,a)=>e>a?"start":e<a?"end":"middle",ia=(e,a,t)=>typeof a=="function"?a(e):q(a,t,t*.8),oa=(e,a,t)=>{var{top:n,left:r,width:l,height:c}=a,u=Ce(l,c),y=r+q(e.cx,l,l/2),h=n+q(e.cy,c,c/2),f=q(e.innerRadius,u,0),g=ia(t,e.outerRadius,u),s=e.maxRadius||Math.sqrt(l*l+c*c)/2;return{cx:y,cy:h,innerRadius:f,outerRadius:g,maxRadius:s}},sa=(e,a)=>{var t=V(a-e),n=Math.min(Math.abs(a-e),360);return t*n},ca=(e,a)=>{if(o.isValidElement(e))return o.cloneElement(e,a);if(typeof e=="function")return e(a);var t=ee("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return o.createElement(Me,I({},a,{type:"linear",className:t}))},da=(e,a,t)=>{if(o.isValidElement(e))return o.cloneElement(e,a);var n=t;if(typeof e=="function"&&(n=e(a),o.isValidElement(n)))return n;var r=ee("recharts-pie-label-text",typeof e!="boolean"&&typeof e!="function"?e.className:"");return o.createElement(ke,I({},a,{alignmentBaseline:"middle",className:r}),n)};function ua(e){var{sectors:a,props:t,showLabels:n}=e,{label:r,labelLine:l,dataKey:c}=t;if(!n||!r||!a)return null;var u=$(t,!1),y=$(r,!1),h=$(l,!1),f=typeof r=="object"&&"offsetRadius"in r&&r.offsetRadius||20,g=a.map((s,v)=>{var d=(s.startAngle+s.endAngle)/2,p=J(s.cx,s.cy,s.outerRadius+f,d),b=m(m(m(m({},u),s),{},{stroke:"none"},y),{},{index:v,textAnchor:la(p.x,s.cx)},p),R=m(m(m(m({},u),s),{},{fill:"none",stroke:s.fill},h),{},{index:v,points:[J(s.cx,s.cy,s.outerRadius,d),p],key:"line"});return o.createElement(_,{key:"label-".concat(s.startAngle,"-").concat(s.endAngle,"-").concat(s.midAngle,"-").concat(v)},l&&ca(l,R),da(r,b,L(s,c)))});return o.createElement(_,{className:"recharts-pie-labels"},g)}function he(e){var{sectors:a,activeShape:t,inactiveShape:n,allOtherPieProps:r,showLabels:l}=e,c=Q(Ie),{onMouseEnter:u,onClick:y,onMouseLeave:h}=r,f=Qe(r,Je),g=ze(u,r.dataKey),s=Ge(h),v=Fe(y,r.dataKey);return a==null?null:o.createElement(o.Fragment,null,a.map((d,p)=>{if((d==null?void 0:d.startAngle)===0&&(d==null?void 0:d.endAngle)===0&&a.length!==1)return null;var b=t&&String(p)===c,R=c?n:null,O=b?t:R,P=m(m({},d),{},{stroke:d.stroke,tabIndex:-1,[Ne]:p,[we]:r.dataKey});return o.createElement(_,I({tabIndex:-1,className:"recharts-pie-sector"},De(f,d,p),{onMouseEnter:g(d,p),onMouseLeave:s(d,p),onClick:v(d,p),key:"sector-".concat(d==null?void 0:d.startAngle,"-").concat(d==null?void 0:d.endAngle,"-").concat(d.midAngle,"-").concat(p)}),o.createElement(We,I({option:O,isActive:b,shapeType:"sector"},P)))}),o.createElement(ua,{sectors:a,props:r,showLabels:l}))}function va(e){var a,{pieSettings:t,displayedData:n,cells:r,offset:l}=e,{cornerRadius:c,startAngle:u,endAngle:y,dataKey:h,nameKey:f,tooltipType:g}=t,s=Math.abs(t.minAngle),v=sa(u,y),d=Math.abs(v),p=n.length<=1?0:(a=t.paddingAngle)!==null&&a!==void 0?a:0,b=n.filter(x=>L(x,h,0)!==0).length,R=(d>=360?b:b-1)*p,O=d-b*s-R,P=n.reduce((x,A)=>{var j=L(A,h,0);return x+(ne(j)?j:0)},0),S;if(P>0){var k;S=n.map((x,A)=>{var j=L(x,h,0),w=L(x,f,A),C=oa(t,l,x),B=(ne(j)?j:0)/P,E,K=m(m({},x),r&&r[A]&&r[A].props);A?E=k.endAngle+V(v)*p*(j!==0?1:0):E=u;var z=E+V(v)*((j!==0?s:0)+B*O),G=(E+z)/2,F=(C.innerRadius+C.outerRadius)/2,W=[{name:w,value:j,payload:K,dataKey:h,type:g}],xe=J(C.cx,C.cy,F,G);return k=m(m(m(m({},t.presentationProps),{},{percent:B,cornerRadius:c,name:w,tooltipPayload:W,midAngle:G,middleRadius:F,tooltipPosition:xe},K),C),{},{value:L(x,h),startAngle:E,endAngle:z,payload:K,paddingAngle:V(v)*p}),k})}return S}function ma(e){var{props:a,previousSectorsRef:t}=e,{sectors:n,isAnimationActive:r,animationBegin:l,animationDuration:c,animationEasing:u,activeShape:y,inactiveShape:h,onAnimationStart:f,onAnimationEnd:g}=a,s=Ee(a,"recharts-pie-"),v=t.current,[d,p]=o.useState(!0),b=o.useCallback(()=>{typeof g=="function"&&g(),p(!1)},[g]),R=o.useCallback(()=>{typeof f=="function"&&f(),p(!0)},[f]);return o.createElement(Te,{begin:l,duration:c,isActive:r,easing:u,from:{t:0},to:{t:1},onAnimationStart:R,onAnimationEnd:b,key:s},O=>{var{t:P}=O,S=[],k=n&&n[0],x=k.startAngle;return n.forEach((A,j)=>{var w=v&&v[j],C=j>0?Le(A,"paddingAngle",0):0;if(w){var B=re(w.endAngle-w.startAngle,A.endAngle-A.startAngle),E=m(m({},A),{},{startAngle:x+C,endAngle:x+B(P)+C});S.push(E),x=E.endAngle}else{var{endAngle:K,startAngle:z}=A,G=re(0,K-z),F=G(P),W=m(m({},A),{},{startAngle:x+C,endAngle:x+F+C});S.push(W),x=W.endAngle}}),t.current=S,o.createElement(_,null,o.createElement(he,{sectors:S,activeShape:y,inactiveShape:h,allOtherPieProps:a,showLabels:!d}))})}function fa(e){var{sectors:a,isAnimationActive:t,activeShape:n,inactiveShape:r}=e,l=o.useRef(null),c=l.current;return t&&a&&a.length&&(!c||c!==a)?o.createElement(ma,{props:e,previousSectorsRef:l}):o.createElement(he,{sectors:a,activeShape:n,inactiveShape:r,allOtherPieProps:e,showLabels:!0})}function pa(e){var{hide:a,className:t,rootTabIndex:n}=e,r=ee("recharts-pie",t);return a?null:o.createElement(_,{tabIndex:n,className:r},o.createElement(fa,e))}var ge={animationBegin:400,animationDuration:1500,animationEasing:"ease",cx:"50%",cy:"50%",dataKey:"value",endAngle:360,fill:"#808080",hide:!1,innerRadius:0,isAnimationActive:!Se.isSsr,labelLine:!0,legendType:"rect",minAngle:0,nameKey:"name",outerRadius:"80%",paddingAngle:0,rootTabIndex:0,startAngle:0,stroke:"#fff"};function ha(e){var a=fe(e,ge),t=o.useMemo(()=>me(e.children,D),[e.children]),n=$(a,!1),r=o.useMemo(()=>({name:a.name,nameKey:a.nameKey,tooltipType:a.tooltipType,data:a.data,dataKey:a.dataKey,cx:a.cx,cy:a.cy,startAngle:a.startAngle,endAngle:a.endAngle,minAngle:a.minAngle,paddingAngle:a.paddingAngle,innerRadius:a.innerRadius,outerRadius:a.outerRadius,cornerRadius:a.cornerRadius,legendType:a.legendType,fill:a.fill,presentationProps:n}),[a.cornerRadius,a.cx,a.cy,a.data,a.dataKey,a.endAngle,a.innerRadius,a.minAngle,a.name,a.nameKey,a.outerRadius,a.paddingAngle,a.startAngle,a.tooltipType,a.legendType,a.fill,n]),l=Q(c=>He(c,r,t));return o.createElement(o.Fragment,null,o.createElement(Oe,{fn:ra,args:m(m({},a),{},{sectors:l})}),o.createElement(pa,I({},a,{sectors:l})))}class M extends o.PureComponent{constructor(){super(...arguments),X(this,"id",Ke("recharts-pie-"))}render(){return o.createElement(o.Fragment,null,o.createElement(je,{data:this.props.data,dataKey:this.props.dataKey,hide:this.props.hide,angleAxisId:0,radiusAxisId:0,stackId:void 0,barSize:void 0,type:"pie"}),o.createElement(na,this.props),o.createElement(ha,this.props),this.props.children)}}X(M,"displayName","Pie");X(M,"defaultProps",ge);var ga=["item"],ya={layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},H=o.forwardRef((e,a)=>{var t=fe(e,ya);return o.createElement(Be,{chartName:"PieChart",defaultTooltipEventType:"item",validateTooltipEventTypes:ga,tooltipPayloadSearcher:$e,categoricalChartProps:t,ref:a})});const N=[{name:"Grupo A",value:400},{name:"Grupo B",value:300},{name:"Grupo C",value:300},{name:"Grupo D",value:200}],ue=[{name:"A1",value:100},{name:"A2",value:300},{name:"B1",value:100},{name:"B2",value:80},{name:"B3",value:40},{name:"B4",value:30},{name:"B5",value:50},{name:"C1",value:100},{name:"C2",value:200},{name:"D1",value:150},{name:"D2",value:50}],T=["var(--color-primary)","var(--color-secondary)","var(--color-accent)","var(--color-neutral)","var(--color-info)","var(--color-success)","var(--color-warning)","var(--color-error)"],ye=({cx:e,cy:a,midAngle:t,innerRadius:n,outerRadius:r,startAngle:l,endAngle:c,fill:u,payload:y,percent:h,value:f})=>{const g=Math.PI/180,s=Math.sin(-g*(t??1)),v=Math.cos(-g*(t??1)),d=(e??0)+((r??0)+10)*v,p=(a??0)+((r??0)+10)*s,b=(e??0)+((r??0)+30)*v,R=(a??0)+((r??0)+30)*s,O=b+(v>=0?1:-1)*22,P=R,S=v>=0?"start":"end";return i.jsxs("g",{children:[i.jsx("text",{x:e,y:a,dy:8,textAnchor:"middle",fill:"var(--color-base-content)",children:y.name}),i.jsx(ie,{cx:e,cy:a,innerRadius:n,outerRadius:r,startAngle:l,endAngle:c,fill:u}),i.jsx(ie,{cx:e,cy:a,startAngle:l,endAngle:c,innerRadius:(r??0)+6,outerRadius:(r??0)+10,fill:u}),i.jsx("path",{d:`M${d},${p}L${b},${R}L${O},${P}`,stroke:u,fill:"none"}),i.jsx("circle",{cx:O,cy:P,r:2,fill:u,stroke:"none"}),i.jsx("text",{x:O+(v>=0?1:-1)*12,y:P,textAnchor:S,fill:"var(--color-base-content)",children:`PV ${f}`}),i.jsx("text",{x:O+(v>=0?1:-1)*12,y:P,dy:18,textAnchor:S,fill:"var(--color-base-content)",children:`(Rate ${((h??1)*100).toFixed(2)}%)`})]})};console.log("const renderActiveShape = "+ye);function Ea(){const[e,a]=o.useState(null),t=(r,l)=>{a(l)},n=()=>{a(null)};return i.jsxs("div",{className:"bg-base-100 space-y-6",children:[i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsxs("h1",{className:"flex text-3xl font-bold h-10",children:["Gráficos de Pizza"," ",i.jsx(be,{tela:{nome:"Gráficos de Pizza",url:"devs/graficos/pizza"}})]}),i.jsx("div",{className:"breadcrumbs text-sm text-gray-500",children:i.jsxs("ul",{children:[i.jsx("li",{children:"Devs"}),i.jsx("li",{children:"Gráficos"}),i.jsx("li",{className:"text-primary font-medium",children:"De Pizza"})]})})]}),i.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[i.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Pizza Básica + Label Personalizado"}),i.jsx("div",{className:"w-full h-64 select-none",children:i.jsx(Z,{children:i.jsxs(H,{children:[i.jsx(M,{data:N,cx:"50%",cy:"50%",outerRadius:80,dataKey:"value",labelLine:!1,label:({percent:r,cx:l,cy:c,midAngle:u,innerRadius:y,outerRadius:h})=>{const f=Math.PI/180,g=y+(h-y)*.5,s=l+g*Math.cos(-u*f),v=c+g*Math.sin(-u*f);return i.jsx("text",{x:s,y:v,fill:"white",textAnchor:"middle",dominantBaseline:"central",style:{fontSize:12},children:`${(r*100).toFixed(0)}%`})},children:N.map((r,l)=>i.jsx(D,{fill:T[l%T.length],stroke:"var(--color-base-200)"},`cell-${l}`))}),i.jsx(le,{})]})})}),i.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),i.jsx("div",{children:i.jsx(Y,{code:`import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 300 },
  { name: "Grupo D", value: 200 },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-neutral)",
];

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <PieChart>
      <Pie
        data={data01}
        cx="50%"
        cy="50%"
        outerRadius={80}
        dataKey="value"
        labelLine={false}
        label={({
          name,
          percent,
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
        }) => {
          const RADIAN = Math.PI / 180;
          const radius =
            innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontSize: 12 }}
            >
              {\`\${(percent * 100).toFixed(0)}%\`}
            </text>
          );
        }}
      >
        {data01.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[index % COLORS.length]}
            stroke="var(--color-base-200)"
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>`})})]}),i.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[i.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Donut Interativo Avançado"}),i.jsx("div",{className:"w-full h-78 select-none bg-base-200 rounded-lg p-4",children:i.jsx(Z,{children:i.jsxs(H,{children:[i.jsx(M,{activeShape:ye,data:N,cx:"50%",cy:"50%",innerRadius:60,outerRadius:80,dataKey:"value",children:N.map((r,l)=>i.jsx(D,{fill:T[l%T.length],stroke:"var(--color-base-200)",strokeWidth:2},`cell-${l}`))}),i.jsx(oe,{})]})})}),i.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),i.jsx("div",{children:i.jsx(Y,{code:`import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Sector } from "recharts";

const data01 = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 300 },
  { name: "Grupo D", value: 200 },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-neutral)",
];

const renderActiveShape =... // Ta lá no console.log

<div className="w-full h-78 select-none bg-base-200 rounded-lg p-4">
  <ResponsiveContainer>
    <PieChart>
      <Pie
        activeShape={renderActiveShape}
        data={data01}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
      >
        {data01.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[index % COLORS.length]}
            stroke="var(--color-base-200)"
            strokeWidth={2}
          />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>`})})]}),i.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[i.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Pizza Dupla"}),i.jsx("div",{className:"w-full h-64 select-none",children:i.jsx(Z,{children:i.jsxs(H,{children:[i.jsx(M,{data:N,dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,children:N.map((r,l)=>i.jsx(D,{fill:T[l%T.length],stroke:"var(--color-base-200)"},`cell-${l}`))}),i.jsx(M,{data:ue,dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,label:({name:r,percent:l})=>`${r}: ${(l*100).toFixed(0)}%`,onMouseEnter:t,onMouseLeave:n,children:ue.map((r,l)=>i.jsx(D,{fill:T[(l+4)%T.length],opacity:e===l?1:.7,stroke:"var(--color-base-200)"},`cell-${l}`))}),i.jsx(le,{}),i.jsx(oe,{})]})})}),i.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Código:"}),i.jsx("div",{children:i.jsx(Y,{code:`import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const [activeIndex, setActiveIndex] = useState(null);

const onPieEnter = (_, index) => {
  setActiveIndex(index);
};

const onPieLeave = () => {
  setActiveIndex(null);
};

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <PieChart>
      <Pie
        data={data01}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={60}
      >
        {data01.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[index % COLORS.length]}
            stroke="var(--color-base-200)"
          />
        ))}
      </Pie>
      <Pie
        data={data02}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieLeave}
      >
        {data02.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[(index + 4) % COLORS.length]}
            opacity={activeIndex === index ? 1 : 0.7}
            stroke="var(--color-base-200)"
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>`})})]})]})}export{Ea as default};
