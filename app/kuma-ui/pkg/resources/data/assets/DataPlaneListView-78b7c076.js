import{D as g,K as y}from"./KFilterBar-5e93892b.js";import{d as h,r as s,o as n,g as l,w as a,h as o,m as V,l as k,E as w,k as C,q as v}from"./index-622cbb72.js";import"./dataplane-0a086c06.js";const b=h({__name:"DataPlaneListView",setup(q){return(z,x)=>{const c=s("RouteTitle"),m=s("KCard"),_=s("AppView"),p=s("DataSource"),d=s("RouteView");return n(),l(p,{src:"/me"},{default:a(({data:u})=>[u?(n(),l(d,{key:0,name:"data-planes-list-view",params:{page:1,size:50,query:"",s:"",mesh:""}},{default:a(({route:e,t:f})=>[o(p,{src:`/meshes/${e.params.mesh}/dataplanes?page=${e.params.page}&size=${e.params.size}&search=${e.params.s}`},{default:a(({data:t,error:r})=>[o(_,null,{title:a(()=>[V("h2",null,[o(c,{title:f("data-planes.routes.items.title"),render:!0},null,8,["title"])])]),default:a(()=>[k(),o(m,null,{body:a(()=>[r!==void 0?(n(),l(w,{key:0,error:r},null,8,["error"])):(n(),l(g,{key:1,"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":parseInt(e.params.page),"page-size":parseInt(e.params.size),total:t==null?void 0:t.total,items:t==null?void 0:t.items,error:r,onChange:e.update},{toolbar:a(()=>[o(y,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.params.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:i=>e.update({query:i.query,s:i.query.length>0?JSON.stringify(i.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),_:2},1032,["page-number","page-size","total","items","error","onChange"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1})):C("",!0)]),_:1})}}});const K=v(b,[["__scopeId","data-v-6732afd8"]]);export{K as default};
