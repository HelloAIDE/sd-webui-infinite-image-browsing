import{ah as F,r as g,c5 as D,c6 as A,H as b,B as N,bX as z,bk as G,c7 as H}from"./index-1cbfa879.js";import{u as L,a as O,b as Q,e as j}from"./FileItem-7a698e9d.js";import{a as B,b as T,c as U}from"./MultiSelectKeep-4d1be43d.js";let W=0;const X=()=>++W,K=(o,i,{dataUpdateStrategy:l="replace"}={})=>{const n=F([""]),c=g(!1),t=g(),a=g(!1);let f=g(-1);const v=new Set,w=e=>{var s;l==="replace"?t.value=e:l==="merge"&&(b((Array.isArray(t.value)||typeof t.value>"u")&&Array.isArray(e),"数据更新策略为合并时仅可用于值为数组的情况"),t.value=[...(s=t==null?void 0:t.value)!==null&&s!==void 0?s:[],...e])},d=e=>A(void 0,void 0,void 0,function*(){if(a.value||c.value&&typeof e>"u")return!1;a.value=!0;const s=X();f.value=s;try{let r;if(typeof e=="number"){if(r=n[e],typeof r!="string")return!1}else r=n[n.length-1];const I=yield o(r);if(v.has(s))return v.delete(s),!1;w(i(I));const u=I.cursor;if((e===n.length-1||typeof e!="number")&&(c.value=!u.has_next,u.has_next)){const y=u.next_cursor||u.next;b(typeof y=="string"),n.push(y)}}finally{f.value===s&&(a.value=!1)}return!0}),h=()=>{v.add(f.value),a.value=!1},S=(e=!1)=>A(void 0,void 0,void 0,function*(){const{refetch:s,force:r}=typeof e=="object"?e:{refetch:e};r&&h(),b(!a.value),n.splice(0,n.length,""),a.value=!1,t.value=void 0,c.value=!1,s&&(yield d())}),m=()=>({next:()=>A(void 0,void 0,void 0,function*(){if(a.value)throw new Error("不允许同时迭代");return{done:!(yield d()),value:t.value}})});return D({abort:h,load:c,next:d,res:t,loading:a,cursorStack:n,reset:S,[Symbol.asyncIterator]:m,iter:{[Symbol.asyncIterator]:m}})},ee=o=>F(K(o,i=>i.files,{dataUpdateStrategy:"merge"})),te=o=>{const i=F(new Set),l=N(()=>(o.res??[]).filter(p=>!i.has(p.fullpath))),n=z(),{stackViewEl:c,multiSelectedIdxs:t,stack:a,scroller:f,props:v}=L({images:l}).toRefs(),{itemSize:w,gridItems:d,cellWidth:h,onScroll:S}=O({fetchNext:()=>o.next()}),{showMenuIdx:m}=Q(),{onFileDragStart:e,onFileDragEnd:s}=B(),{showGenInfo:r,imageGenInfo:I,q:u,onContextMenuClick:y,onFileItemClick:C}=T({openNext:G}),{previewIdx:_,previewing:E,onPreviewVisibleChange:M,previewImgMove:J,canPreview:P}=U(),R=async(p,x,q)=>{a.value=[{curr:"",files:l.value}],await y(p,x,q)};j("removeFiles",async({paths:p})=>{p.forEach(x=>i.add(x))});const k=()=>{H(l.value)};return{images:l,scroller:f,queue:n,iter:o,onContextMenuClickU:R,stackViewEl:c,previewIdx:_,previewing:E,onPreviewVisibleChange:M,previewImgMove:J,canPreview:P,itemSize:w,gridItems:d,showGenInfo:r,imageGenInfo:I,q:u,onContextMenuClick:y,onFileItemClick:C,showMenuIdx:m,multiSelectedIdxs:t,onFileDragStart:e,onFileDragEnd:s,cellWidth:h,onScroll:S,saveLoadedFileAsJson:k,saveAllFileAsJson:async()=>{for(;!o.load;)await o.next();k()},props:v}};export{ee as c,te as u};