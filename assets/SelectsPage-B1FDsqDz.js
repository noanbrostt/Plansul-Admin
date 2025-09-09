import{r as u,j as e}from"./index-acpie0c_.js";import{S as s}from"./Select-CmNDdbZr.js";import{F as y}from"./FavoriteButton-B4vdGqJV.js";import{C as v}from"./CodeBlock-xQtPYNVU.js";import"./memoize-one.esm-BSNCZdzh.js";import"./index-CnyDuYXe.js";import"./clsx-B-dksMZM.js";function L(){const[d,p]=u.useState([]),[b,m]=u.useState({value:"azul",label:"Azul"}),[h,g]=u.useState([{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"}]),[o,n]=u.useState({padrao:null,primary:null,secondary:null,accent:null,info:null,success:null,warning:null,error:null,neutral:null,ghost:null}),[i,c]=u.useState({xs:null,sm:null,md:null,lg:null,xl:null}),[r,t]=u.useState({"w-64":null,"w-56":null,"w-48":null,"w-40":null,"w-32":null,"w-24":null,"w-16":null,"w-fit":null,"w-full":null,padrao:null}),[x,j]=u.useState(null),[w,S]=u.useState([]),f=[{value:"apple",label:"Maçã"},{value:"banana",label:"Banana"},{value:"orange",label:"Laranja"},{value:"strawberry",label:"Morango"},{value:"grape",label:"Uva"},{value:"pineapple",label:"Abacaxi"},{value:"watermelon",label:"Melancia"},{value:"kiwi",label:"Kiwi"},{value:"mango",label:"Manga"},{value:"pear",label:"Pêra"},{value:"peach",label:"Pêssego"},{value:"cherry",label:"Cereja"},{value:"blueberry",label:"Mirtilo"},{value:"raspberry",label:"Framboesa"},{value:"blackberry",label:"Amora"},{value:"lemon",label:"Limão"},{value:"lime",label:"Lima"},{value:"coconut",label:"Coco"},{value:"avocado",label:"Abacate"},{value:"papaya",label:"Mamão"}];return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold text-base-content",children:["Selects",e.jsx(y,{tela:{nome:"Selects",url:"devs/ui/selects"}})]}),e.jsx("div",{className:"text-sm breadcrumbs text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Elementos UI"}),e.jsx("li",{className:"text-primary font-medium",children:"Selects"})]})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Cores"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Padrão",value:o.padrao,onChange:l=>n(a=>({...a,padrao:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Primary",variant:"primary",value:o.primary,onChange:l=>n(a=>({...a,primary:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Secondary",variant:"secondary",value:o.secondary,onChange:l=>n(a=>({...a,secondary:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Accent",variant:"accent",value:o.accent,onChange:l=>n(a=>({...a,accent:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Info",variant:"info",value:o.info,onChange:l=>n(a=>({...a,info:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Success",variant:"success",value:o.success,onChange:l=>n(a=>({...a,success:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Warning",variant:"warning",value:o.warning,onChange:l=>n(a=>({...a,warning:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Error",variant:"error",value:o.error,onChange:l=>n(a=>({...a,error:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Neutral",variant:"neutral",value:o.neutral,onChange:l=>n(a=>({...a,neutral:l}))}),e.jsx(s,{options:[{value:"1",label:"Opção 1"},{value:"2",label:"Opção 2"}],placeholder:"Ghost",variant:"ghost",value:o.ghost,onChange:l=>n(a=>({...a,ghost:l}))})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Tamanhos"}),e.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-4",children:[e.jsx(s,{variant:"primary",size:"xl",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"Extra Large",value:i.xl,onChange:l=>c(a=>({...a,xl:l}))}),e.jsx(s,{variant:"primary",size:"lg",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"Large",value:i.lg,onChange:l=>c(a=>({...a,lg:l}))}),e.jsx(s,{variant:"primary",size:"md",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"Medium (Padrão)",value:i.md,onChange:l=>c(a=>({...a,md:l}))}),e.jsx(s,{variant:"primary",size:"sm",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"Small",value:i.sm,onChange:l=>c(a=>({...a,sm:l}))}),e.jsx(s,{variant:"primary",size:"xs",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"Extra small",value:i.xs,onChange:l=>c(a=>({...a,xs:l}))})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Larguras"}),e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(s,{variant:"primary",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"Padrão",value:r.padrao,onChange:l=>t(a=>({...a,padrao:l}))}),e.jsx(s,{variant:"primary",largura:"w-fit",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-fit",value:r["w-fit"],onChange:l=>t(a=>({...a,"w-fit":l}))}),e.jsx(s,{variant:"primary",largura:"w-16",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-16",value:r["w-16"],onChange:l=>t(a=>({...a,"w-16":l}))}),e.jsx(s,{variant:"primary",largura:"w-24",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-24",value:r["w-24"],onChange:l=>t(a=>({...a,"w-24":l}))}),e.jsx(s,{variant:"primary",largura:"w-32",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-32",value:r["w-32"],onChange:l=>t(a=>({...a,"w-32":l}))}),e.jsx(s,{variant:"primary",largura:"w-40",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-40",value:r["w-40"],onChange:l=>t(a=>({...a,"w-40":l}))}),e.jsx(s,{variant:"primary",largura:"w-48",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-48",value:r["w-48"],onChange:l=>t(a=>({...a,"w-48":l}))}),e.jsx(s,{variant:"primary",largura:"w-56",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-56",value:r["w-56"],onChange:l=>t(a=>({...a,"w-56":l}))}),e.jsx(s,{variant:"primary",largura:"w-64",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-64 (Padrão)",value:r["w-64"],onChange:l=>t(a=>({...a,"w-64":l}))}),e.jsx(s,{variant:"primary",largura:"w-full",options:[{value:"1",label:"Pequeno"},{value:"2",label:"Grande"}],placeholder:"w-full",value:r["w-full"],onChange:l=>t(a=>({...a,"w-full":l}))})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Multiseleção"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:e.jsx(s,{variant:"primary",multiple:!0,showSelectAll:!0,options:f,placeholder:"Selecione frutas",value:d,onChange:l=>p(l)})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Demonstração de Uso"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{options:[{value:"junior",label:"Júnior"},{value:"pleno",label:"Pleno"},{value:"senior",label:"Sênior"}],placeholder:"Selecione o nível",value:x,onChange:j,variant:"success"}),e.jsx("div",{children:e.jsx(v,{code:`import Select from "@/components/Select";

const [nivel, setNivel] = useState(null);

<Select
  options={[
    { value: "junior", label: "Júnior" },
    { value: "pleno", label: "Pleno" },
    { value: "senior", label: "Sênior" },
  ]}
  placeholder="Selecione o nível"
  value={nivel}
  onChange={setNivel}
  variant="success"
/>`})})]}),e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{multiple:!0,showSelectAll:!0,placeholder:"Selecione várias opções",variant:"primary",size:"lg",options:[{value:"m1",label:"Item 1"},{value:"m2",label:"Item 2"},{value:"m3",label:"Item 3"},{value:"m4",label:"Item 4"}],value:w,onChange:S}),e.jsx("div",{children:e.jsx(v,{code:`import Select from "@/components/Select";

const [demonMulti, setDemonMulti] = useState([]);

<Select
  multiple
  showSelectAll
  placeholder="Selecione várias opções"
  variant="primary"
  size="lg"
  options={[
    { value: "m1", label: "Item 1" },
    { value: "m2", label: "Item 2" },
    { value: "m3", label: "Item 3" },
    { value: "m4", label: "Item 4" },
  ]}
  value={demonMulti}
  onChange={setDemonMulti}
/>`})})]})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Demonstração com Valores Iniciais"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{placeholder:"Escolha uma cor",options:[{value:"vermelho",label:"Vermelho"},{value:"azul",label:"Azul"},{value:"verde",label:"Verde"}],value:b,onChange:l=>{m(l),console.log("Selecionado:",l)},variant:"info"}),e.jsx("div",{children:e.jsx(v,{code:`import Select from "@/components/Select";

const [selectedCor, setSelectedCor] = useState({
  value: "azul",
  label: "Azul",
});

<Select
  placeholder="Escolha uma cor"
  options={[
    { value: "vermelho", label: "Vermelho" },
    { value: "azul", label: "Azul" },
    { value: "verde", label: "Verde" },
  ]}
  value={selectedCor}
  onChange={(val) => {
    setSelectedCor(val);
    console.log("Selecionado:", val);
  }}
  variant="info"
/>`})})]}),e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{multiple:!0,showSelectAll:!0,placeholder:"Escolha os idiomas",largura:"w-74",options:[{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"},{value:"py",label:"Python"},{value:"rb",label:"Ruby"}],value:h,onChange:l=>{g(l),console.log("Selecionados:",l)},variant:"success"}),e.jsx("div",{children:e.jsx(v,{code:`import Select from "@/components/Select";

const [selectedLinguagens, setSelectedLinguagens] = useState([
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
]);

<Select
  multiple
  showSelectAll
  placeholder="Escolha os idiomas"
  largura="w-74"
  options={[
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "py", label: "Python" },
    { value: "rb", label: "Ruby" },
  ]}
  value={selectedLinguagens}
  onChange={(val) => {
    setSelectedLinguagens(val);
    console.log("Selecionados:", val);
  }}
  variant="success"
/>`})})]})]})]})]})}export{L as default};
