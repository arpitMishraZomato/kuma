import{D as I,cl as O,cm as B,e as F,M as Z,P as q,k as g,co as N,s as K,o as r,j as p,a as o,w as s,c as _,b as V,z as b,l as m,t as f,F as E,n as D,i as a}from"./index.c8163df9.js";import{g as H}from"./tableDataUtils.81ce466c.js";import{D as P,p as R}from"./patchQueryParam.45d18194.js";import{E as W}from"./EnvoyData.2e55bbd9.js";import{F as M}from"./FrameSkeleton.37abf819.js";import{_ as j}from"./LabelList.vue_vue_type_style_index_0_lang.17654be9.js";import{S as G,a as Q}from"./SubscriptionHeader.64a00821.js";import{T as U}from"./TabsWidget.33f56719.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.045a908b.js";import"./ErrorBlock.5027dcb1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.c066d224.js";import"./TagList.86529845.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.14084b4c.js";import"./_commonjsHelpers.f037b798.js";const X={name:"ZoneEgresses",components:{AccordionItem:O,AccordionList:B,DataOverview:P,EnvoyData:W,FrameSkeleton:M,LabelList:j,SubscriptionDetails:G,SubscriptionHeader:Q,TabsWidget:U,KButton:F,KCard:Z},props:{offset:{type:Number,required:!1,default:0}},data(){return{isLoading:!0,isEmpty:!1,error:null,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:q,next:null,subscriptionsReversed:[],pageOffset:this.offset}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.loadData(0)}},beforeMount(){this.loadData(this.offset)},methods:{tableAction(n){const i=n;this.getEntity(i)},async loadData(n){this.pageOffset=n,R("offset",n>0?n:null),this.isLoading=!0,this.isEmpty=!1;const i=this.$route.query.ns||null;try{const{data:t,next:u}=await H({getAllEntities:g.getAllZoneEgressOverviews.bind(g),getSingleEntity:g.getZoneEgressOverview.bind(g),size:this.pageSize,offset:n,query:i});this.next=u,t.length?(this.isEmpty=!1,this.rawData=t,this.getEntity({name:t[0].name}),this.tableData.data=t.map(e=>{const{zoneEgressInsight:l={}}=e;return{...e,...N(l)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(t){t instanceof Error?error.value=t:console.error(t),this.isEmpty=!0}finally{this.isLoading=!1}},getEntity(n){var e,l;const i=["type","name"],t=this.rawData.find(y=>y.name===n.name),u=(l=(e=t==null?void 0:t.zoneEgressInsight)==null?void 0:e.subscriptions)!=null?l:[];this.subscriptionsReversed=Array.from(u).reverse(),this.entity=K(t,i)}}},J={class:"zoneegresses"},Y=m("span",{class:"custom-control-icon"}," \u2190 ",-1),$={key:0};function ee(n,i,t,u,e,l){const y=a("KButton"),S=a("DataOverview"),z=a("LabelList"),k=a("SubscriptionHeader"),L=a("SubscriptionDetails"),w=a("AccordionItem"),A=a("AccordionList"),x=a("KCard"),h=a("EnvoyData"),T=a("TabsWidget"),C=a("FrameSkeleton");return r(),p("div",J,[o(C,null,{default:s(()=>{var v;return[o(S,{"selected-entity-name":(v=e.entity)==null?void 0:v.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,"page-offset":e.pageOffset,onTableAction:l.tableAction,onLoadData:i[0]||(i[0]=c=>l.loadData(c))},{additionalControls:s(()=>[n.$route.query.ns?(r(),_(y,{key:0,class:"back-button",appearance:"primary",to:{name:"zoneegresses"}},{default:s(()=>[Y,V(" View All ")]),_:1})):b("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","next","page-offset","onTableAction"]),e.isEmpty===!1?(r(),_(T,{key:0,"has-error":e.error!==null,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:s(()=>[m("div",null,[m("h3",null," Zone Egress: "+f(e.entity.name),1)])]),overview:s(()=>[o(z,null,{default:s(()=>[m("div",null,[m("ul",null,[(r(!0),p(E,null,D(e.entity,(c,d)=>(r(),p("li",{key:d},[c?(r(),p("h4",$,f(d),1)):b("",!0),m("p",null,f(c),1)]))),128))])])]),_:1})]),insights:s(()=>[o(x,{"border-variant":"noBorder"},{body:s(()=>[o(A,{"initially-open":0},{default:s(()=>[(r(!0),p(E,null,D(e.subscriptionsReversed,(c,d)=>(r(),_(w,{key:d},{"accordion-header":s(()=>[o(k,{details:c},null,8,["details"])]),"accordion-content":s(()=>[o(L,{details:c,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":s(()=>[o(h,{"data-path":"xds","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":s(()=>[o(h,{"data-path":"stats","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":s(()=>[o(h,{"data-path":"clusters","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading","tabs"])):b("",!0)]}),_:1})])}const ye=I(X,[["render",ee]]);export{ye as default};
