import{_}from"./index.a044d613.js";import{a5 as e,o as a,Q as s,R as n,X as t}from"./vendor-vue.e07d7f7e.js";const u={name:"ConnectStatus",props:{value:{type:Boolean,default:!1}},components:{},data(){return{}},computed:{},methods:{async getData(){},handleClick(){this.$emit("on-click")}},created(){}};function p(m,f,i,k,C,l){const r=e("SuccessFilled"),c=e("el-icon"),o=e("el-link"),d=e("WarningFilled");return i.value?(a(),s(o,{key:0,underline:!1,type:"success",onClick:l.handleClick},{default:n(()=>[t(c,null,{default:n(()=>[t(r)]),_:1})]),_:1},8,["onClick"])):(a(),s(o,{key:1,underline:!1,type:"danger",onClick:l.handleClick},{default:n(()=>[t(c,null,{default:n(()=>[t(d)]),_:1})]),_:1},8,["onClick"]))}const g=_(u,[["render",p]]);export{g as C};
