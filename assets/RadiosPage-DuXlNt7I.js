import{j as e,r as a}from"./index-CaMTW5gI.js";import{F as R}from"./FavoriteButton-DTS6fCm_.js";import{C as b}from"./CodeBlock-BOCfT8g5.js";import"./clsx-B-dksMZM.js";const s=({fieldset:i,name:d,options:r,fieldsetCentered:c=!1,radioSize:t="md",className:u,orientation:m="vertical",onValueChange:o,value:v})=>{const x=l=>{o&&o(l.target.value)};return e.jsxs("fieldset",{className:`fieldset w-fit ${c?"justify-items-center text-center":""} ${u}`,children:[e.jsx("legend",{className:`fieldset-legend text-${t}`,children:i}),e.jsx("div",{className:`flex ${m==="horizontal"?"flex-wrap gap-4":"flex-col gap-2"}`,children:r.map(l=>e.jsxs("label",{className:`label gap-2 cursor-pointer ${l.disabled?"opacity-50 cursor-not-allowed":""}`,children:[e.jsx("input",{type:"radio",name:d,value:l.value,checked:v===l.value,disabled:l.disabled,onChange:x,className:`radio ${t?`radio-${t}`:""} ${l.variant?`radio-${l.variant}`:""}`}),e.jsx("span",{className:`text-${t}`,children:l.label})]},l.value))})]})};function A(){const[i,d]=a.useState(""),[r,c]=a.useState("s"),[t,u]=a.useState("cor1"),[m,o]=a.useState("xs1"),[v,x]=a.useState("sm1"),[l,p]=a.useState("md1"),[h,f]=a.useState("lg1"),[g,j]=a.useState("xl1"),[S,N]=a.useState("opt1"),[C,z]=a.useState("opt1"),[y,w]=a.useState("pending"),[O,V]=a.useState("free"),P=n=>{d(n),console.log("Nível selecionado: ",n)},T=n=>{c(n),console.log("Termo selecionado: ",n)};return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold text-base-content",children:["Radios",e.jsx(R,{tela:{nome:"Radios",url:"devs/ui/radios"}})]}),e.jsx("div",{className:"text-sm breadcrumbs text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Elementos UI"}),e.jsx("li",{className:"text-primary font-medium",children:"Radios"})]})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Cores"}),e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(s,{name:"cores",orientation:"horizontal",options:[{value:"cor1",label:"Padrão"},{value:"cor2",label:"Primary",variant:"primary"},{value:"cor3",label:"Secondary",variant:"secondary"},{value:"cor4",label:"Accent",variant:"accent"},{value:"cor5",label:"Info",variant:"info"},{value:"cor6",label:"Success",variant:"success"},{value:"cor7",label:"Warning",variant:"warning"},{value:"cor8",label:"Error",variant:"error"},{value:"cor9",label:"Neutral",variant:"neutral"}],value:t,onValueChange:u})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Tamanhos"}),e.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-12",children:[e.jsx(s,{fieldset:"Extra Large",name:"sizes-xl",radioSize:"xl",options:[{value:"xl1",label:"Opção 1"},{value:"xl2",label:"Opção 2"}],value:g,onValueChange:j}),e.jsx(s,{fieldset:"Large",name:"sizes-lg",radioSize:"lg",options:[{value:"lg1",label:"Opção 1"},{value:"lg2",label:"Opção 2"}],value:h,onValueChange:f}),e.jsx(s,{fieldset:"Medium (Padrão)",name:"sizes-md",options:[{value:"md1",label:"Opção 1"},{value:"md2",label:"Opção 2"}],value:l,onValueChange:p}),e.jsx(s,{fieldset:"Small",name:"sizes-sm",radioSize:"sm",options:[{value:"sm1",label:"Opção 1"},{value:"sm2",label:"Opção 2"}],value:v,onValueChange:x}),e.jsx(s,{fieldset:"Extra Small",name:"sizes-xs",radioSize:"xs",options:[{value:"xs1",label:"Opção 1"},{value:"xs2",label:"Opção 2"}],value:m,onValueChange:o})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Variações"}),e.jsxs("div",{className:"flex flex-wrap justify-center items-start gap-8",children:[e.jsx(s,{fieldset:"Centralizado",name:"centered",fieldsetCentered:!0,options:[{value:"opt1",label:"Opção centralizada 1"},{value:"opt2",label:"Opção centralizada 2"}],value:S,onValueChange:N}),e.jsx(s,{fieldset:"Apenas Fieldset",name:"fieldset-only",fieldsetCentered:!0,options:[{value:"opt1",label:""},{value:"opt2",label:""}],value:C,onValueChange:z})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Orientações"}),e.jsxs("div",{className:"flex flex-wrap justify-center items-start gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-base-content/80",children:"Horizontal:"}),e.jsx(s,{fieldset:"Status do Pedido",name:"order-status",orientation:"horizontal",options:[{value:"pending",label:"Pendente",variant:"warning"},{value:"processing",label:"Processando",variant:"info"},{value:"shipped",label:"Enviado",variant:"success"},{value:"delivered",label:"Entregue",variant:"primary"}],value:y,onValueChange:w})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-base-content/80 mt-4",children:"Vertical:"}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx(s,{fieldset:"Escolha seu plano",name:"plans",options:[{value:"free",label:"Plano Gratuito"},{value:"basic",label:"Plano Básico"},{value:"pro",label:"Plano Profissional"},{value:"enterprise",label:"Plano Enterprise",disabled:!0}],value:O,onValueChange:V})})]})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Demonstração de Uso"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{fieldset:"Aceita os Termos?",name:"termos",options:[{value:"s",label:"Sim"},{value:"n",label:"Não"}],fieldsetCentered:!0,className:"mb-12",value:r,onValueChange:T}),e.jsx("div",{children:e.jsx(b,{code:`import RadioGroup from "@/components/Radio";

const [selectedTermo, setSelectedTermo] = useState("s");

const handleTermoChange = (newValue) => {
    setSelectedTermo(newValue);
};

<RadioGroup
  fieldset="Aceita os Termos?"
  name="termos"
  options={[
    { value: "s", label: "Sim" },
    { value: "n", label: "Não" },
  ]}
  fieldsetCentered
  className="mb-12"
  value={selectedTermo}
  onValueChange={handleTermoChange}
/>`})})]}),e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{fieldset:"Qual seu nível?",name:"nivel",options:[{value:"nv1",label:"Júnior"},{value:"nv2",label:"Pleno"},{value:"nv3",label:"Sênior"}],value:i,onValueChange:P}),e.jsx("div",{children:e.jsx(b,{code:`import RadioGroup from "@/components/Radio";
                  
const [selectedNivel, setSelectedNivel] = useState('');

const handleNivelChange = (newValue) => {
    setSelectedNivel(newValue);
};

<RadioGroup
  fieldset="Qual seu nível?"
  name="nivel"
  options={[
    { value: "nv1", label: "Júnior" },
    { value: "nv2", label: "Pleno" },
    { value: "nv3", label: "Sênior" },
  ]}
  value={selectedNivel}
  onValueChange={handleNivelChange}
/>`})})]})]})]})]})}export{A as default};
