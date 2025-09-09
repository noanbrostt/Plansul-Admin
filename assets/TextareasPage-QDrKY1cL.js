import{r as t,j as e}from"./index-acpie0c_.js";import{T as s}from"./Textarea-C2PIFugQ.js";import{F as m}from"./FavoriteButton-B4vdGqJV.js";import{C as o}from"./CodeBlock-xQtPYNVU.js";import"./clsx-B-dksMZM.js";function p(){const[l,n]=t.useState("Texto inicial..."),[r,i]=t.useState("Msg curta");return e.jsxs("div",{className:"bg-base-100 space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"flex text-3xl font-bold text-base-content",children:["Textareas",e.jsx(m,{tela:{nome:"Textareas",url:"devs/ui/textareas"}})]}),e.jsx("div",{className:"text-sm breadcrumbs text-gray-500",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Devs"}),e.jsx("li",{children:"Elementos UI"}),e.jsx("li",{className:"text-primary font-medium",children:"Textareas"})]})})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Cores"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:["padrão","primary","secondary","accent","info","success","warning","error","neutral","ghost"].map(a=>e.jsx(s,{variant:a,placeholder:`${a.charAt(0).toUpperCase()+a.slice(1)}`,value:"",onChange:()=>{},showCounter:!1},a))})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Tamanhos"}),e.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-4",children:[e.jsx(s,{variant:"primary",size:"xl",placeholder:"Extra Large",value:"",onChange:()=>{},showCounter:!1}),e.jsx(s,{variant:"primary",size:"lg",placeholder:"Large",value:"",onChange:()=>{},showCounter:!1}),e.jsx(s,{variant:"primary",size:"md",placeholder:"Medium (Padrão)",value:"",onChange:()=>{},showCounter:!1}),e.jsx(s,{variant:"primary",size:"sm",placeholder:"Small",value:"",onChange:()=>{},showCounter:!1}),e.jsx(s,{variant:"primary",size:"xs",placeholder:"Extra Small",value:"",onChange:()=>{},showCounter:!1})]})]}),e.jsxs("div",{className:"rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold border-b pb-3 mb-4.5",children:"Demonstração de Uso"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{placeholder:"Digite sua nota",value:l,onChange:a=>{n(a),console.log("Nota:",a)},showCounter:!0}),e.jsx("div",{children:e.jsx(o,{code:`import Textarea from "@/components/Textarea";

const [note, setNote] = useState('Texto inicial...')

<Textarea
  placeholder="Digite sua nota"
  value={note}
  onChange={v => {
    setNote(v)
    console.log('Nota:', v)
  }}
  showCounter={true} // Já vem "true" como padrão
/>`})})]}),e.jsxs("div",{className:"space-y-4 justify-items-center",children:[e.jsx(s,{placeholder:"Sua mensagem",value:r,onChange:a=>{i(a),console.log("Comentário:",a)},variant:"primary",size:"lg",maxLength:"20",error:r.length>0&&r.length<10?"Mínimo 10 caracteres":void 0}),e.jsx("div",{children:e.jsx(o,{code:`import Textarea from "@/components/Textarea";

const [comment, setComment] = useState('Msg curta')

<Textarea
  placeholder="Sua mensagem"
  value={comment}
  onChange={v => {
    setComment(v)
    console.log('Comentário:', v)
  }}
  variant="primary"
  size="lg"
  maxLength="20"
  error={comment.length > 0 && comment.length < 10 
    ? 'Mínimo 10 caracteres' 
    : undefined}
/>`})})]})]})]})]})}export{p as default};
