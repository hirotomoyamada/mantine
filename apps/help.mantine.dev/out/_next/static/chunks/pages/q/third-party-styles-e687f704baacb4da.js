(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7566],{8113:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},74691:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("bug","IconBug",[["path",{d:"M9 9v-1a3 3 0 0 1 6 0v1",key:"svg-0"}],["path",{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",key:"svg-1"}],["path",{d:"M3 13l4 0",key:"svg-2"}],["path",{d:"M17 13l4 0",key:"svg-3"}],["path",{d:"M12 20l0 -6",key:"svg-4"}],["path",{d:"M4 19l3.35 -2",key:"svg-5"}],["path",{d:"M20 19l-3.35 -2",key:"svg-6"}],["path",{d:"M4 7l3.75 2.4",key:"svg-7"}],["path",{d:"M20 7l-3.75 2.4",key:"svg-8"}]])},23856:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]])},31650:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},62655:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55012:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/third-party-styles",function(){return t(93444)}])},93444:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},meta:function(){return o}});var r=t(52322),s=t(34665),i=t(21938);let o={title:"Can I use Mantine with Emotion/styled-components/tailwindcss?",description:"Learn about limitations of third-party styles",slug:"third-party-styles",category:"styles",tags:["unocss","pandacss","windicss","tailwindcss","emotion","styled-components","css-modules","scss","sass","less","postcss","css-in-js","jss"],created_at:"February 15, 2024",last_updated_at:"February 15, 2024"},l=(0,i.A)(o);function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"i-prefer-a-third-party-styles-solution-can-i-use-mantine-with-it",children:"I prefer a third-party styles solution, can I use Mantine with it?"}),"\n",(0,r.jsx)(n.p,{children:"All Mantine components are fully compatible with any third-party styling solution and native CSS.\nThere are two main strategies to apply styles with a third-party library:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"className"}),", ",(0,r.jsx)(n.code,{children:"classNames"}),", ",(0,r.jsx)(n.code,{children:"style"})," and ",(0,r.jsx)(n.code,{children:"styles"})," props"]}),"\n",(0,r.jsxs)(n.li,{children:["with static selectors, for example ",(0,r.jsx)(n.code,{children:".mantine-Text-root"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example of applying styles with a utility CSS library:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TextInput\n      classNames={{\n        root: 'mt-4',\n        input: 'bg-red-500 text-white',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example of applying styles with global CSS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* styles.css */\n\n/* Note that these styles are not scoped and\n   will be applied to all TextInput components */\n.mantine-TextInput-root {\n  margin-top: 0.8rem;\n}\n\n.mantine-TextInput-input {\n  background-color: var(--mantine-color-red-filled);\n  color: var(--mantine-color-white);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can combine both approaches to achieve desired results, for example,\n",(0,r.jsx)(n.code,{children:"@emotion/styled"})," and ",(0,r.jsx)(n.code,{children:"styled-components"})," packages will pass ",(0,r.jsx)(n.code,{children:"className"})," prop to\na given component, and you can use static selectors to style inner elements:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import styled from '@emotion/styled';\nimport { Slider } from '@mantine/core';\n\nconst StyledSlider = styled(Slider)`\n  & .mantine-Slider-bar {\n    background-color: var(--mantine-color-pink-5);\n  }\n\n  & .mantine-Slider-thumb {\n    border-color: var(--mantine-color-pink-5);\n    background-color: white;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n`;\n\nfunction Demo() {\n  return <StyledSlider defaultValue={40} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"is-there-any-specific-setup-for-tailwind-css",children:"Is there any specific setup for Tailwind CSS?"}),"\n",(0,r.jsxs)(n.p,{children:["Usually it is enough to ",(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/preflight#disabling-preflight",children:"disable preflight"}),"\nto prevent global styles from affecting Mantine components.\nIf preflight is required in your project, follow one of the guides in the ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/mantinedev/discussions/1672",children:"GitHub discussion"}),"."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(a,{...e})})}},5632:function(e,n,t){e.exports=t(65123)},34406:function(e){var n,t,r,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{t="function"==typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var a=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?a=r.concat(a):u=-1,a.length&&h())}function h(){if(!c){var e=l(d);c=!0;for(var n=a.length;n;){for(r=a,a=[];++u<n;)r&&r[u].run();u=-1,n=a.length}r=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function f(){}s.nextTick=function(e){var n=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];a.push(new p(e,n)),1!==a.length||c||l(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},function(e){e.O(0,[1466,9774,2888,179],function(){return e(e.s=55012)}),_N_E=e.O()}]);