import{C as g}from"./CodeBlock-N09d8dBE.js";import{E as f}from"./ErrorBlock-cX4HzFOd.js";import{_ as h}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5yGSZzGo.js";import{d as C,a as t,o as n,b as s,w as a,e as r,m as x,f as b}from"./index-Mzgj6Y4G.js";import"./index-FZCiQto1.js";import"./TextWithCopyButton-1wEvk7ih.js";import"./CopyButton-TPQGf4OQ.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-uxLaaMfP.js";const N=C({__name:"DiagnosticsDetailView",setup(R){return(k,y)=>{const l=t("RouteTitle"),m=t("KCard"),p=t("AppView"),u=t("DataSource"),_=t("RouteView");return n(),s(_,{name:"diagnostics",params:{codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:i})=>[r(u,{src:"/config"},{default:a(({data:c,error:d})=>[r(p,{breadcrumbs:[{to:{name:"diagnostics"},text:i("diagnostics.routes.item.breadcrumbs")}]},{title:a(()=>[x("h1",null,[r(l,{title:i("diagnostics.routes.item.title")},null,8,["title"])])]),default:a(()=>[b(),r(m,null,{default:a(()=>[d?(n(),s(f,{key:0,error:d},null,8,["error"])):c===void 0?(n(),s(h,{key:1})):(n(),s(g,{key:2,"data-testid":"code-block-diagnostics",language:"json",code:JSON.stringify(c,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1024)]),_:2},1032,["breadcrumbs"])]),_:2},1024)]),_:1})}}});export{N as default};
