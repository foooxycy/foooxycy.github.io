"use strict";(self["webpackChunkmovie"]=self["webpackChunkmovie"]||[]).push([[973],{3973:function(t,s,l){l.r(s),l.d(s,{default:function(){return Rt}});var a=l(3396);const e=(0,a._)("p",{class:"blank"},null,-1),i={class:"row"},o={class:"col-xs-9"},n={class:"col-xs-3"},c={class:"row"},r={class:"col-xs-9"},u={class:"col-xs-3"};function d(t,s,l,d,p,h){const v=(0,a.up)("coarousel"),m=(0,a.up)("movieList"),_=(0,a.up)("hot"),g=(0,a.up)("review"),w=(0,a.up)("expectation");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e,(0,a.Wm)(v,{carousel:p.carousel,interval:p.interval},null,8,["carousel","interval"]),(0,a._)("div",i,[(0,a._)("div",o,[(0,a.Wm)(m)]),(0,a._)("div",n,[(0,a.Wm)(_)])]),(0,a._)("div",c,[(0,a._)("div",r,[(0,a.Wm)(g)]),(0,a._)("div",u,[(0,a.Wm)(w)])])],64)}var p=l(7139);const h=["href"],v=["src"],m={class:"page"},_=["onClick"];function g(t,s,l,e,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:"container",onMouseout:s[2]||(s[2]=(...t)=>o.autoRun&&o.autoRun(...t)),onMouseover:s[3]||(s[3]=(...t)=>o.autostop&&o.autostop(...t))},[(0,a._)("ul",{class:"img",style:(0,p.j5)({width:100*l.carousel.length+"%",marginLeft:100*-i.listIndex+"%"})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.carousel,((t,s)=>((0,a.wg)(),(0,a.iD)("li",{key:s,class:(0,p.C_)({active:s==i.listIndex})},[(0,a._)("a",{href:t.targetId},[(0,a._)("img",{src:this.url+t.advImg},null,8,v),(0,a.Uk)(" "+(0,p.zw)(t.targetId),1)],8,h)],2)))),128))],4),(0,a._)("ul",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.carousel,((t,s)=>((0,a.wg)(),(0,a.iD)("li",{key:s,class:(0,p.C_)({active:s==i.listIndex}),onClick:t=>i.listIndex=s},null,10,_)))),128))]),(0,a._)("a",{href:"javascript:void(0)",class:"prev",onClick:s[0]||(s[0]=(...t)=>o.prePage&&o.prePage(...t))},"<"),(0,a._)("a",{href:"javascript:void(0)",class:"next",onClick:s[1]||(s[1]=(...t)=>o.nextPage&&o.nextPage(...t))},">")],32)}var w={props:{carousel:{type:Array,required:!0},interval:{type:Number,default:2e3}},data(){return{listIndex:0,timer:null,url:"http://124.93.196.45:10001"}},computed:{},methods:{autoRun(){this.timer||(this.timer=setInterval((()=>{this.listIndex=(this.listIndex+1)%this.carousel.length}),this.interval))},autostop(){clearInterval(this.timer),this.timer=null},prePage(){this.listIndex--,0==this.listIndex&&(this.listIndex=this.carousel.length-1)},nextPage(){this.listIndex=(this.listIndex+1)%this.carousel.length}},mounted(){this.autoRun()},deforeUnmount(){this.autostop()},updated(){}},x=l(89);const f=(0,x.Z)(w,[["render",g],["__scopeId","data-v-7952aee8"]]);var k=f;const y=t=>((0,a.dD)("data-v-638a21be"),t=t(),(0,a.Cn)(),t),D={class:"row latest"},I={class:"col-xs-12"},L={class:"lead"},b=y((()=>(0,a._)("i",{class:"glyphicon glyphicon-list"},null,-1))),z=y((()=>(0,a._)("strong",null,"影片列表",-1))),C={class:"pull-right"},W=y((()=>(0,a._)("strong",null,"更多",-1))),Y=y((()=>(0,a._)("span",{class:"glyphicon glyphicon-chevron-right"},null,-1))),N={class:"tab-content col-xs-12"},H={class:"row"},K={class:"thumbnail"},P=["src"],Z={class:"caption"},R={class:"pull-left"},j={class:"text-warning pull-right"};function U(t,s,l,e,i,o){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",I,[(0,a._)("div",L,[b,z,(0,a._)("h5",C,[(0,a.Wm)(n,{to:"/movieList"},{default:(0,a.w5)((()=>[W,Y])),_:1})])])]),(0,a._)("div",N,[(0,a._)("div",H,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.movieList.slice(1,9),(t=>((0,a.wg)(),(0,a.iD)("div",{class:"col-lg-3 col-md-3 col-xs-4",key:t},[(0,a.Wm)(n,{to:{name:"details",params:{id:t.id}}},{default:(0,a.w5)((()=>[(0,a._)("div",K,[(0,a._)("img",{src:this.url+t.cover,alt:""},null,8,P),(0,a._)("div",Z,[(0,a._)("h4",null,[(0,a._)("span",R,(0,p.zw)(t.name),1),(0,a._)("span",j,(0,p.zw)(t.score)+"分 ",1)])])])])),_:2},1032,["to"])])))),128))])])])}var M={data(){return{movieList:[],url:"http://124.93.196.45:10001"}},created(){this.axios({method:"get",url:"/prod-api/api/movie/film/list"}).then((t=>{200==t.status&&200==t.data.code&&(this.movieList=t.data.rows)})).catch((t=>{console.log(t)}))}};const q=(0,x.Z)(M,[["render",U],["__scopeId","data-v-638a21be"]]);var A=q;const B=t=>((0,a.dD)("data-v-0e3129b2"),t=t(),(0,a.Cn)(),t),E={class:"row latest"},F=B((()=>(0,a._)("div",{class:"col-xs-12"},[(0,a._)("p",{class:"lead"},[(0,a._)("i",{class:"glyphicon glyphicon-fire"}),(0,a._)("strong",null,"热门推荐")])],-1))),G={class:"tab-content col-xs-12"},J={class:"row"},O={class:"ranking"},Q={class:"text-danger pull-right"};function S(t,s,l,e,i,o){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",E,[F,(0,a._)("div",G,[(0,a._)("div",J,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.hotList1.slice(0,10),((t,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"",key:s},[(0,a.Wm)(n,{to:{name:"details",params:{id:t.id}}},{default:(0,a.w5)((()=>[(0,a._)("h4",null,[(0,a._)("span",O,[(0,a._)("em",null,(0,p.zw)(s+1),1)]),(0,a._)("span",null,(0,p.zw)(t.name),1),(0,a._)("span",Q,(0,p.zw)(t.favoriteNum),1)])])),_:2},1032,["to"])])))),128))])])])}var T={data(){return{hotList:[],url:"http://124.93.196.45:10001"}},mounted(){},computed:{hotList1:function(){return this.hotList.sort(((t,s)=>s.favoriteNum-t.favoriteNum))}},created(){this.axios({method:"get",url:"/prod-api/api/movie/film/list",params:{recommend:"Y"}}).then((t=>{200==t.status&&200==t.data.code&&(this.hotList=t.data.rows)})).catch((t=>{console.log(t)}))}};const V=(0,x.Z)(T,[["render",S],["__scopeId","data-v-0e3129b2"]]);var X=V;const $=t=>((0,a.dD)("data-v-181a64dc"),t=t(),(0,a.Cn)(),t),tt={class:"row latest"},st={class:"col-xs-12"},lt={class:"lead"},at=$((()=>(0,a._)("i",{class:"glyphicon glyphicon-pencil"},null,-1))),et=$((()=>(0,a._)("strong",null,"相关影评",-1))),it={class:"pull-right"},ot=$((()=>(0,a._)("strong",null,"更多",-1))),nt=$((()=>(0,a._)("span",{class:"glyphicon glyphicon-chevron-right"},null,-1))),ct={class:"tab-content col-xs-12"},rt={class:"row"},ut={class:"thumbnail"},dt={class:"img"},pt=["src"],ht={class:"caption"},vt={class:"text-muted"},mt=$((()=>(0,a._)("span",{class:"text-muted text-left"}," 猫眼电影 ",-1))),_t={class:"text-muted pull-right"},gt=$((()=>(0,a._)("i",{class:"glyphicon glyphicon-eye-open"},null,-1))),wt={class:""};function xt(t,s,l,e,i,o){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",tt,[(0,a._)("div",st,[(0,a._)("div",lt,[at,et,(0,a._)("h5",it,[(0,a.Wm)(n,{to:"/news"},{default:(0,a.w5)((()=>[ot,nt])),_:1})])])]),(0,a._)("div",ct,[(0,a._)("div",rt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.reviewList.slice(30,34),(t=>((0,a.wg)(),(0,a.iD)("div",{class:"col-xs-6",key:t},[(0,a.Wm)(n,{to:{name:"newsdetail",params:{id:t.id}}},{default:(0,a.w5)((()=>[(0,a._)("div",ut,[(0,a._)("div",dt,[(0,a._)("img",{src:this.url+t.cover,alt:""},null,8,pt)]),(0,a._)("div",ht,[(0,a._)("h4",null,[(0,a.Uk)((0,p.zw)(t.name)+" ",1),(0,a._)("p",null,(0,p.zw)(t.title),1)]),(0,a._)("div",vt,[mt,(0,a._)("p",_t,[gt,(0,a._)("span",wt,(0,p.zw)(t.readNum),1)])])])])])),_:2},1032,["to"])])))),128))])])])}var ft={data(){return{reviewList:[],url:"http://124.93.196.45:10001"}},created(){this.axios({method:"get",url:"/prod-api/api/movie/press/press/list"}).then((t=>{200==t.status&&200==t.data.code&&(this.reviewList=t.data.rows,console.log(this.reviewList))})).catch((t=>{console.log(t)}))}};const kt=(0,x.Z)(ft,[["render",xt],["__scopeId","data-v-181a64dc"]]);var yt=kt;const Dt=t=>((0,a.dD)("data-v-c4f506a4"),t=t(),(0,a.Cn)(),t),It={class:"row latest"},Lt=Dt((()=>(0,a._)("div",{class:"col-xs-12"},[(0,a._)("p",{class:"lead"},[(0,a._)("i",{class:"glyphicon glyphicon-signal"}),(0,a._)("strong",null,"期待影片")])],-1))),bt={class:"tab-content col-xs-12"},zt={class:"row"},Ct={class:"ranking"},Wt={class:"text-danger pull-right"};function Yt(t,s,l,e,i,o){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",It,[Lt,(0,a._)("div",bt,[(0,a._)("div",zt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.likeList1.slice(0,10),((t,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"",key:s},[(0,a.Wm)(n,{to:{name:"details",params:{id:t.id}}},{default:(0,a.w5)((()=>[(0,a._)("h4",null,[(0,a._)("span",Ct,[(0,a._)("em",null,(0,p.zw)(s+1),1)]),(0,a._)("span",null,(0,p.zw)(t.name),1),(0,a._)("span",Wt,(0,p.zw)(t.likeNum),1)])])),_:2},1032,["to"])])))),128))])])])}var Nt={data(){return{likeList:[],url:"http://124.93.196.45:10001"}},mounted(){},computed:{likeList1:function(){return this.likeList.sort(((t,s)=>s.likeNum-t.likeNum))}},created(){this.axios({method:"get",url:"/prod-api/api/movie/film/list",params:{recommend:"Y"}}).then((t=>{200==t.status&&200==t.data.code&&(this.likeList=t.data.rows)})).catch((t=>{console.log(t)}))}};const Ht=(0,x.Z)(Nt,[["render",Yt],["__scopeId","data-v-c4f506a4"]]);var Kt=Ht,Pt={components:{coarousel:k,movieList:A,hot:X,review:yt,expectation:Kt},data(){return{carousel:[],interval:2e3}},created(){this.axios({method:"get",url:"/prod-api/api/movie/rotation/list"}).then((t=>{200==t.status&&(this.carousel=t.data.rows)})).catch((t=>{console.log(t)})),this.axios({method:"get",url:"/prod-api/api/movie/film/list"}).then((t=>{200==t.status&&200==t.data.code&&(this.movieList=t.data.rows)})).catch((t=>{console.log(t)}))}};const Zt=(0,x.Z)(Pt,[["render",d]]);var Rt=Zt}}]);
//# sourceMappingURL=973.a43b5647.js.map