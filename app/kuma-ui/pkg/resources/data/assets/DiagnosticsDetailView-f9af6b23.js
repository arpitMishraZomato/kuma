import{_ as g}from"./CodeBlock.vue_vue_type_style_index_0_lang-be05b1a9.js";import{E as f}from"./ErrorBlock-4851a125.js";import{_ as h}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6411ade7.js";import{d as x,a as t,o as s,b as i,w as a,e as n,p as b,f as C}from"./index-fa77c4eb.js";import"./index-52545d1d.js";import"./TextWithCopyButton-5090a504.js";import"./CopyButton-a6d96483.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-53706c7b.js";const N=x({__name:"DiagnosticsDetailView",setup(y){return(R,k)=>{const l=t("RouteTitle"),p=t("KCard"),m=t("AppView"),u=t("DataSource"),_=t("RouteView");return s(),i(_,{name:"diagnostics",params:{codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:r})=>[n(u,{src:"/config"},{default:a(({data:c,error:d})=>[n(m,{breadcrumbs:[{to:{name:"diagnostics"},text:r("diagnostics.routes.item.breadcrumbs")}]},{title:a(()=>[b("h1",null,[n(l,{title:r("diagnostics.routes.item.title")},null,8,["title"])])]),default:a(()=>[C(),n(p,null,{body:a(()=>[d?(s(),i(f,{key:0,error:d},null,8,["error"])):c===void 0?(s(),i(h,{key:1})):(s(),i(g,{key:2,id:"code-block-diagnostics","data-testid":"code-block-diagnostics",language:"json",code:JSON.stringify(c,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1024)]),_:2},1032,["breadcrumbs"])]),_:2},1024)]),_:1})}}});export{N as default};
