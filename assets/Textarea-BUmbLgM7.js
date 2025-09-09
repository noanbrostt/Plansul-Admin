import{r as m,j as t}from"./index-DDNo2eib.js";const T=m.forwardRef(({placeholder:p="",value:r="",onChange:x,variant:N,size:n="md",largura:f="w-64",maxLength:e,showCounter:c=!0,className:u="",error:a,success:s,info:l,fieldset:j=!1,asterisk:o=!1},h)=>{const[b,$]=m.useState(r.length);m.useEffect(()=>{$(r.length)},[r]);const y=E=>{const i=E.target.value;e!=null&&i.length>e||(x==null||x(i),$(i.length))};let d=t.jsxs("div",{className:`form-control ${f} ${u}`,children:[t.jsx("textarea",{ref:h,className:`
            textarea resize
            textarea-${n}
            textarea-${N}
            ${f}
            ${a?"textarea-error":s?"textarea-success":l?"textarea-info":""}
          `,placeholder:p,value:r,onChange:y,...e!=null?{maxLength:e}:{}}),(c||a||s||l)&&t.jsxs("div",{className:`text-sm text-base-content/60 mt-1 text-right flex ${c&&(a||s||l)?"justify-between":"justify-end"}`,children:[(a||s||l)&&t.jsx("span",{className:`label-text-alt ml-0.5 ${a?"text-error":s?"text-success":"text-info"}`,children:a||s||l}),c&&t.jsxs("span",{className:"mr-0.5",children:[b,e!=null?` / ${e}`:""]})]})]});return j&&(d=t.jsxs("fieldset",{className:"fieldset",children:[t.jsxs("legend",{className:`fieldset-legend ml-1 ${n&&"text-"+n}`,children:[j,o?t.jsx("span",{className:"text-error -ml-1",children:"*"}):null]}),d]})),d});T.displayName="Textarea";export{T};
