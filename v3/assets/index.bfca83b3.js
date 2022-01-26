import{c as N,e as A,p as E,l as z,a as L}from"./use-translate.7145ee20.js";import{m as x,t as R,w as K}from"./with-install.756837d9.js";import{f as F,F as O}from"./index.4051611e.js";import{u as q}from"./use-id.28dc46a0.js";import{u as $}from"./use-expose.897feea8.js";import{z as w,D as r,e as a,A as G,r as H,o as J,a as M,w as i,B as o,d as D,t as Q,F as W}from"./vue-libs.84e059bd.js";import{T as j}from"./function-call.3d6aa441.js";import"./constant.80c6de18.js";import"./index.f609f533.js";import"./use-route.841a0e09.js";import"./index.bea91046.js";import"./mount-component.f2698375.js";import"./index.bba74b3b.js";import"./interceptor.fa55923e.js";import"./use-touch.a752672a.js";import"./use-lazy-render.0b8d6da1.js";import"./on-popup-reopen.b9a88023.js";import"./index.bd0de4f7.js";import"./index.8397aee6.js";const[X,b,Y]=N("search"),Z=A({},F,{label:String,shape:x("square"),leftIcon:x("search"),clearable:R,actionText:String,background:String,showAction:Boolean});var ee=w({name:X,props:Z,emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(c,{emit:l,slots:n,attrs:h}){const v=q(),d=r(),k=()=>{n.action||(l("update:modelValue",""),l("cancel"))},m=e=>{const B=13;e.keyCode===B&&(z(e),l("search",c.modelValue))},f=()=>c.id||`${v}-input`,g=()=>{if(n.label||c.label)return a("label",{class:b("label"),for:f()},[n.label?n.label():c.label])},V=()=>{if(c.showAction){const e=c.actionText||Y("cancel");return a("div",{class:b("action"),role:"button",tabindex:0,onClick:k},[n.action?n.action():e])}},C=()=>{var e;return(e=d.value)==null?void 0:e.blur()},t=()=>{var e;return(e=d.value)==null?void 0:e.focus()},s=e=>l("blur",e),u=e=>l("focus",e),I=e=>l("clear",e),S=e=>l("click-input",e),T=e=>l("click-left-icon",e),U=e=>l("click-right-icon",e),y=Object.keys(F),_=()=>{const e=A({},h,E(c,y),{id:f()}),B=P=>l("update:modelValue",P);return a(O,G({ref:d,type:"search",class:b("field"),border:!1,onBlur:s,onFocus:u,onClear:I,onKeypress:m,"onClick-input":S,"onClick-left-icon":T,"onClick-right-icon":U,"onUpdate:modelValue":B},e),E(n,["left-icon","right-icon"]))};return $({focus:t,blur:C}),()=>{var e;return a("div",{class:b({"show-action":c.showAction}),style:{background:c.background}},[(e=n.left)==null?void 0:e.call(n),a("div",{class:b("content",c.shape)},[g(),_()]),V()])}}});const p=K(ee),le={action:"/"},Ve=w({setup(c){const l=L({"zh-CN":{label:"\u5730\u5740",disabled:"\u7981\u7528\u641C\u7D22\u6846",inputAlign:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",background:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE",listenToEvents:"\u4E8B\u4EF6\u76D1\u542C"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),n=r(""),h=r(""),v=r(""),d=r(""),k=r(""),m=r(""),f=C=>j(C),g=()=>j(l("cancel")),V=()=>j(m.value);return(C,t)=>{const s=H("demo-block");return J(),M(W,null,[a(s,{title:o(l)("basicUsage")},{default:i(()=>[a(o(p),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),placeholder:o(l)("placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),a(s,{title:o(l)("listenToEvents")},{default:i(()=>[D("form",le,[a(o(p),{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=u=>k.value=u),placeholder:o(l)("placeholder"),"show-action":"",onSearch:f,onCancel:g},null,8,["modelValue","placeholder"])])]),_:1},8,["title"]),a(s,{title:o(l)("inputAlign")},{default:i(()=>[a(o(p),{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=u=>d.value=u),placeholder:o(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),a(s,{title:o(l)("disabled")},{default:i(()=>[a(o(p),{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=u=>v.value=u),placeholder:o(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),a(s,{title:o(l)("background")},{default:i(()=>[a(o(p),{modelValue:h.value,"onUpdate:modelValue":t[4]||(t[4]=u=>h.value=u),placeholder:o(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),a(s,{title:o(l)("customButton")},{default:i(()=>[a(o(p),{modelValue:m.value,"onUpdate:modelValue":t[5]||(t[5]=u=>m.value=u),"show-action":"",label:o(l)("label"),placeholder:o(l)("placeholder"),onSearch:f},{action:i(()=>[D("div",{onClick:V},Q(o(l)("search")),1)]),_:1},8,["modelValue","label","placeholder"])]),_:1},8,["title"])],64)}}});export{Ve as default};
