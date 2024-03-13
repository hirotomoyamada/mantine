(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3117],{8113:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(99882).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},74691:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(99882).Z)("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]])},23856:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(99882).Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]])},31650:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(99882).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},62655:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(99882).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},39439:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-prevent-modal-from-closing",function(){return n(54705)}])},54705:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u},meta:function(){return s}});var o=n(52322),r=n(34665),i=n(48752),a=n(21938);let s={title:"How to prevent Modal from closing?",description:"Learn how to prevent Modal from closing when user clicks outside of it or presses Escape key",slug:"how-to-prevent-modal-from-closing",category:"components",tags:["modal","drawer","close","click outside"],created_at:"December 1, 2023",last_updated_at:"December 1, 2023"},c=(0,a.A)(s);function l(t){let e={a:"a",code:"code",p:"p",...(0,r.a)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://mantine.dev/core/modal/",children:"Modal"})," and ",(0,o.jsx)(e.a,{href:"https://mantine.dev/core/drawer/",children:"Drawer"})," components\nopened state is controlled by ",(0,o.jsx)(e.code,{children:"opened"})," prop. You can use it to prevent modal from closing by setting\nit to ",(0,o.jsx)(e.code,{children:"true"}),". For example, it can be useful if you have an async operation inside the modal and want to\nprevent user from closing it before the operation is finished:"]}),"\n",(0,o.jsx)(n,{data:i.Z})]})}function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,{...t,children:(0,o.jsx)(l,{...t})})}},48752:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var o=n(52322),r=n(2784),i=n(81087),a=n(17115),s=n(3900);let c={type:"code",component:function(){let[t,{open:e,close:n}]=(0,s.q)(),[c,l]=(0,r.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.u,{opened:t,onClose:c?()=>{}:n,withCloseButton:!c,title:"Modal with async operation",children:(0,o.jsx)(a.z,{loading:c,onClick:()=>{l(!0),new Promise(t=>{setTimeout(t,5e3)}).then(()=>l(!1))},fullWidth:!0,children:"Perform heavy operation"})}),(0,o.jsx)(a.z,{onClick:e,children:"Open modal"})]})},code:"\nimport { useState } from 'react';\nimport { useDisclosure } from '@mantine/hooks';\nimport { Button, Modal } from '@mantine/core';\n\nfunction operation() {\n  return new Promise((resolve) => {\n    setTimeout(resolve, 5000);\n  });\n}\n\nfunction Demo() {\n  const [opened, { open, close }] = useDisclosure();\n  const [loading, setLoading] = useState(false);\n\n  const performOperation = () => {\n    setLoading(true);\n    operation().then(() => setLoading(false));\n  };\n\n  return (\n    <>\n      <Modal\n        opened={opened}\n        onClose={loading ? () => {} : close}\n        withCloseButton={!loading}\n        title=\"Modal with async operation\"\n      >\n        <Button loading={loading} onClick={performOperation} fullWidth>\n          Perform heavy operation\n        </Button>\n      </Modal>\n      <Button onClick={open}>Open modal</Button>\n    </>\n  );\n}\n",centered:!0}},5632:function(t,e,n){t.exports=n(65123)},34406:function(t){var e,n,o,r=t.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c=[],l=!1,u=-1;function d(){l&&o&&(l=!1,o.length?c=o.concat(c):u=-1,c.length&&p())}function p(){if(!l){var t=s(d);l=!0;for(var e=c.length;e;){for(o=c,c=[];++u<e;)o&&o[u].run();u=-1,e=c.length}o=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function f(){}r.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(t){return[]},r.binding=function(t){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw Error("process.chdir is not supported")},r.umask=function(){return 0}},17115:function(t,e,n){"use strict";n.d(e,{z:function(){return M}});var o=n(2784),r=n(58898),i=n(91482),a=n(11200),s=n(38483),c=n(32188),l=n(44153),u=n(33502),d=n(12491),p=n(48407),h=n(63409),f=n(82027),m={root:"m-77c9d27d",inner:"m-80f1301b",label:"m-811560b9",section:"m-a74036a",loader:"m-a25b86ee",group:"m-80d6d844"};let v={orientation:"horizontal"},g=(0,a.Z)((t,{borderWidth:e})=>({group:{"--button-border-width":(0,r.h)(e)}})),y=(0,f.d)((t,e)=>{let n=(0,s.w)("ButtonGroup",v,t),{className:r,style:i,classNames:a,styles:u,unstyled:d,orientation:p,vars:h,borderWidth:f,variant:y,mod:b,...k}=(0,s.w)("ButtonGroup",v,t),w=(0,c.y)({name:"ButtonGroup",props:n,classes:m,className:r,style:i,classNames:a,styles:u,unstyled:d,vars:h,varsResolver:g,rootSelector:"group"});return o.createElement(l.x,{...w("group"),ref:e,variant:y,mod:[{"data-orientation":p},b],role:"group",...k})});y.classes=m,y.displayName="@mantine/core/ButtonGroup";let b={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${(0,r.h)(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},k={},w=(0,a.Z)((t,{radius:e,color:n,gradient:o,variant:r,size:a,justify:s,autoContrast:c})=>{let l=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:o,variant:r||"filled",autoContrast:c});return{root:{"--button-justify":s,"--button-height":(0,i.ap)(a,"button-height"),"--button-padding-x":(0,i.ap)(a,"button-padding-x"),"--button-fz":a?.includes("compact")?(0,i.yv)(a.replace("compact-","")):(0,i.yv)(a),"--button-radius":void 0===e?void 0:(0,i.H5)(e),"--button-bg":n||r?l.background:void 0,"--button-hover":n||r?l.hover:void 0,"--button-color":l.color,"--button-bd":n||r?l.border:void 0,"--button-hover-color":n||r?l.hoverColor:void 0}}}),M=(0,u.b)((t,e)=>{let n=(0,s.w)("Button",k,t),{style:r,vars:i,className:a,color:u,disabled:f,children:v,leftSection:g,rightSection:y,fullWidth:M,variant:x,radius:E,loading:T,loaderProps:j,gradient:B,classNames:_,styles:C,unstyled:Z,"data-disabled":L,autoContrast:O,mod:P,...D}=n,N=(0,c.y)({name:"Button",props:n,classes:m,className:a,style:r,classNames:_,styles:C,unstyled:Z,vars:i,varsResolver:w}),z=!!g,I=!!y;return o.createElement(h.k,{ref:e,...N("root",{active:!f&&!T&&!L}),unstyled:Z,variant:x,disabled:f||T,mod:[{disabled:f||L,loading:T,block:M,"with-left-section":z,"with-right-section":I},P],...D},o.createElement(p.u,{mounted:!!T,transition:b,duration:150},t=>o.createElement(l.x,{component:"span",...N("loader",{style:t}),"aria-hidden":!0},o.createElement(d.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...j}))),o.createElement("span",{...N("inner")},g&&o.createElement(l.x,{component:"span",...N("section"),mod:{position:"left"}},g),o.createElement(l.x,{component:"span",mod:{loading:T},...N("label")},v),y&&o.createElement(l.x,{component:"span",...N("section"),mod:{position:"right"}},y)))});M.classes=m,M.displayName="@mantine/core/Button",M.Group=y}},function(t){t.O(0,[1466,749,9774,2888,179],function(){return t(t.s=39439)}),_N_E=t.O()}]);