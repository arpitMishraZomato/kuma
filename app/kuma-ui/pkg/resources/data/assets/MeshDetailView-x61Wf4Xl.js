import{_ as S}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang--K9x86v8.js";import{E as y}from"./ErrorBlock-cX4HzFOd.js";import{_ as E}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-5yGSZzGo.js";import{d as g,l as M,I as T,o as t,c as R,f as i,t as n,q as l,e,R as N,_ as $,W as b,a as c,b as m,w as o,p as A,m as q}from"./index-Mzgj6Y4G.js";import"./CodeBlock-N09d8dBE.js";import"./CopyButton-TPQGf4OQ.js";import"./index-FZCiQto1.js";import"./toYaml-sPaYOD3i.js";import"./TextWithCopyButton-1wEvk7ih.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-uxLaaMfP.js";const W={class:"date-status"},j=g({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(h){const{t:r,formatIsoDate:_}=M(),d=h,p=T(()=>_(d.creationTime)),s=T(()=>_(d.modificationTime));return(v,w)=>(t(),R("span",W,[i(n(l(r)("common.detail.created"))+": "+n(p.value)+" ",1),e(l(N)),i(" "+n(l(r)("common.detail.modified"))+": "+n(s.value),1)]))}}),z=$(j,[["__scopeId","data-v-fa366713"]]),F={key:2,class:"stack","data-testid":"detail-view-details"},G={class:"date-status-wrapper"},H=g({__name:"MeshDetailView",setup(h){const r=b();return(_,d)=>{const p=c("RouteTitle"),s=c("DataSource"),v=c("AppView"),w=c("RouteView");return t(),m(w,{name:"mesh-detail-view",params:{mesh:""}},{default:o(({route:u,t:x})=>[e(p,{title:x("meshes.routes.overview.title"),render:!1},null,8,["title"]),i(),e(v,null,{default:o(()=>[e(s,{src:`/meshes/${u.params.mesh}`},{default:o(({data:a,error:D})=>[e(s,{src:`/mesh-insights/${u.params.mesh}`},{default:o(({data:C})=>[D?(t(),m(y,{key:0,error:D},null,8,["error"])):a===void 0?(t(),m(E,{key:1})):(t(),R("div",F,[e(l(r),{mesh:a,"mesh-insight":C},null,8,["mesh","mesh-insight"]),i(),e(S,{resource:a.config},{default:o(({copy:k,copying:B})=>[B?(t(),m(s,{key:0,src:`/meshes/${u.params.mesh}/as/kubernetes?no-store`,onChange:f=>{k(V=>V(f))},onError:f=>{k((V,I)=>I(f))}},null,8,["src","onChange","onError"])):A("",!0)]),_:2},1032,["resource"]),i(),q("div",G,[e(z,{"creation-time":a.creationTime,"modification-time":a.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),ee=$(H,[["__scopeId","data-v-029c73c0"]]);export{ee as default};
