import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang--K9x86v8.js";import{E as w}from"./ErrorBlock-cX4HzFOd.js";import{_ as E}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5yGSZzGo.js";import{d as R,a as t,o as n,b as r,w as o,e as s,m as V,f as k,p as y}from"./index-Mzgj6Y4G.js";import"./CodeBlock-N09d8dBE.js";import"./CopyButton-TPQGf4OQ.js";import"./index-FZCiQto1.js";import"./toYaml-sPaYOD3i.js";import"./TextWithCopyButton-1wEvk7ih.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-uxLaaMfP.js";const K=R({__name:"DataPlaneConfigView",setup(v){return($,F)=>{const d=t("RouteTitle"),c=t("DataSource"),_=t("KCard"),u=t("AppView"),f=t("RouteView");return n(),r(f,{name:"data-plane-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:g})=>[s(u,null,{title:o(()=>[V("h2",null,[s(d,{title:g("data-planes.routes.item.navigation.data-plane-config-view")},null,8,["title"])])]),default:o(()=>[k(),s(_,null,{default:o(()=>[s(c,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}`},{default:o(({data:i,error:l})=>[l?(n(),r(w,{key:0,error:l},null,8,["error"])):i===void 0?(n(),r(E,{key:1})):(n(),r(x,{key:2,resource:i.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{default:o(({copy:a,copying:h})=>[h?(n(),r(c,{key:0,src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/as/kubernetes?no-store`,onChange:p=>{a(m=>m(p))},onError:p=>{a((m,C)=>C(p))}},null,8,["src","onChange","onError"])):y("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{K as default};
