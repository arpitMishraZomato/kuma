import{_ as g}from"./CodeBlock.vue_vue_type_style_index_0_lang-be05b1a9.js";import{C as y}from"./CopyButton-a6d96483.js";import{d as x,l as h,N as b,a as _,o as C,b as T,w as n,e as u,q as i,f as B,t as M}from"./index-fa77c4eb.js";import{t as k}from"./toYaml-4e00099e.js";const F=x({__name:"ResourceCodeBlock",props:{id:{},resource:{},resourceFetcher:{},codeMaxHeight:{default:void 0},isSearchable:{type:Boolean,default:!1},query:{default:""},isFilterMode:{type:Boolean,default:!1},isRegExpMode:{type:Boolean,default:!1}},emits:["query-change","filter-mode-change","reg-exp-mode-change"],setup(d,{emit:m}){const{t:r}=h(),e=d,a=m,p=b(()=>c(e.resource));async function f(){const s=await e.resourceFetcher({format:"kubernetes"});return c(s)}function c(s){const{creationTime:o,modificationTime:l,...t}=s;return k(t)}return(s,o)=>{const l=_("KTooltip");return C(),T(g,{id:s.id,language:"yaml",code:p.value,"is-searchable":e.isSearchable,"code-max-height":e.codeMaxHeight,query:e.query,"is-filter-mode":e.isFilterMode,"is-reg-exp-mode":e.isRegExpMode,onQueryChange:o[0]||(o[0]=t=>a("query-change",t)),onFilterModeChange:o[1]||(o[1]=t=>a("filter-mode-change",t)),onRegExpModeChange:o[2]||(o[2]=t=>a("reg-exp-mode-change",t))},{"secondary-actions":n(()=>[u(l,{class:"kubernetes-copy-button-tooltip",label:i(r)("common.copyKubernetesText"),placement:"bottomEnd","max-width":"200","position-fixed":""},{default:n(()=>[u(y,{class:"kubernetes-copy-button","get-text":f,"copy-text":i(r)("common.copyKubernetesText"),"has-border":"","hide-title":""},{default:n(()=>[B(M(i(r)("common.copyKubernetesShortText")),1)]),_:1},8,["copy-text"])]),_:1},8,["label"])]),_:1},8,["id","code","is-searchable","code-max-height","query","is-filter-mode","is-reg-exp-mode"])}}});export{F as _};
