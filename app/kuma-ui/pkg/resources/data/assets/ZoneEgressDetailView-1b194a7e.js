import{d as w,u as k,q as l,s as f,o as s,a as o,w as _,h as m,b as p,g as z,k as h,e as E}from"./index-9d631905.js";import{_ as b}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-c9b39057.js";import{j as y,f as $,k as x,g as B,_ as V}from"./RouteView.vue_vue_type_script_setup_true_lang-76145142.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-f639963c.js";import{_ as A}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-255e2244.js";import{E as C}from"./ErrorBlock-be40f398.js";import{_ as D}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-7f9cc3f9.js";import"./DefinitionListItem-ad3ab377.js";import"./EnvoyData-2d174244.js";import"./kongponents.es-bba90403.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-9125ad7e.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-ea244d88.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-9b865501.js";import"./TabsWidget-0e0dd5da.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-6bd93ee0.js";const O={class:"zone-details"},T={key:3,class:"kcard-border","data-testid":"detail-view-details"},X=w({__name:"ZoneEgressDetailView",setup(Z){const d=y(),e=k(),v=$(),{t:u}=x(),a=l(null),n=l(!0),r=l(null);f(()=>e.params.mesh,function(){e.name==="zone-egress-detail-view"&&i()}),f(()=>e.params.name,function(){e.name==="zone-egress-detail-view"&&i()}),g();function g(){v.dispatch("updatePageTitle",e.params.zoneEgress),i()}async function i(){n.value=!0,r.value=null;const c=e.params.zoneEgress;try{a.value=await d.getZoneEgressOverview({name:c})}catch(t){a.value=null,t instanceof Error?r.value=t:console.error(t)}finally{n.value=!1}}return(c,t)=>(s(),o(V,null,{default:_(()=>[m(N,{title:p(u)("zone-egresses.routes.item.title")},null,8,["title"]),z(),m(B,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:p(u)("zone-egresses.routes.item.breadcrumbs")}]},{default:_(()=>[h("div",O,[n.value?(s(),o(D,{key:0})):r.value!==null?(s(),o(C,{key:1,error:r.value},null,8,["error"])):a.value===null?(s(),o(A,{key:2})):(s(),E("div",T,[m(b,{"zone-egress-overview":a.value},null,8,["zone-egress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{X as default};
