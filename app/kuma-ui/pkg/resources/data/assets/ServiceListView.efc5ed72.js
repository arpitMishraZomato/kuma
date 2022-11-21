import{d as C,p as P,r as n,g as E,k as N,cB as z,o as S,c as T,w as x,a as L,z as M}from"./index.c8163df9.js";import{C as R}from"./ContentWrapper.464c5db1.js";import{p as V,D as O}from"./patchQueryParam.45d18194.js";import{S as U}from"./ServiceDetails.31d80412.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.045a908b.js";import"./ErrorBlock.5027dcb1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.c066d224.js";import"./TagList.86529845.js";import"./YamlView.67836ee1.js";import"./index.58caa11d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.14084b4c.js";import"./_commonjsHelpers.f037b798.js";const K=C({__name:"ServiceListView",props:{offset:{type:Number,required:!1,default:0}},setup(k){const d=k,w=[{label:"Service",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"serviceType"},{label:"Address",key:"address"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"dpProxiesStatus"}],f=50,_={title:"No Data",message:"There are no service insights present."},m=P(),c=n(!0),p=n(null),y=n(null),h=n(d.offset),t=n(null),o=n({headers:w,data:[]});E(()=>m.params.mesh,function(){m.name==="service-list-view"&&v(0)}),v(d.offset);async function v(e){h.value=e,V("offset",e>0?e:null),c.value=!0,p.value=null;const i=m.params.mesh,l=f;try{const{items:a=[],next:u}=await N.getAllServiceInsightsFromMesh({mesh:i},{size:l,offset:e});y.value=u,Array.isArray(a)&&a.length>0?(a.sort((s,r)=>s.name>r.name?1:s.name<r.name?-1:s.mesh.localeCompare(r.mesh)),b(a[0]),o.value.data=a.map(s=>g(s))):(t.value=null,o.value.data=[])}catch(a){t.value=null,a instanceof Error?p.value=a:console.error(a)}finally{c.value=!1}}function g(e){var r;const i={name:e.serviceType==="external"?"external-service-detail-view":"service-insight-detail-view",params:{mesh:e.mesh,service:e.name}},l={name:"mesh-detail-view",params:{mesh:e.mesh}};let a="\u2014";if(e.dataplanes){const{online:A=0,total:D=0}=e.dataplanes;a=`${A} / ${D}`}let u="\u2014";e.status&&(u=z[e.status].title);const s=(r=e.serviceType)!=null?r:"internal";return{...e,serviceType:s,nameRoute:i,meshRoute:l,dpProxiesStatus:a,status:u}}function b(e){t.value=e}return(e,i)=>(S(),T(R,null,{content:x(()=>{var l;return[L(O,{"selected-entity-name":(l=t.value)==null?void 0:l.name,"page-size":f,error:p.value,"is-loading":c.value,"empty-state":_,"table-data":o.value,"table-data-is-empty":o.value.data.length===0,next:y.value,"page-offset":h.value,onTableAction:b,onLoadData:v},null,8,["selected-entity-name","error","is-loading","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:x(()=>[t.value!==null?(S(),T(U,{key:0,name:t.value.name,mesh:t.value.mesh,"service-type":t.value.serviceType},null,8,["name","mesh","service-type"])):M("",!0)]),_:1}))}});export{K as default};
