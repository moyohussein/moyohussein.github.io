(self.webpackChunkhussein_portfolio=self.webpackChunkhussein_portfolio||[]).push([[25],{9942:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),"ArrowLeft");t.Z=a},3629:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.Z=a},9181:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},9543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me}});var r=n(7294),o=n(4850),i=n(3751),a=n(920),l=n(9355),c=n(8129),s=n(4998),u=n(8266),d=n(9942),f=n(3629),m=n(3332),p=n(9181),h=n(908),v=n(3070),g=n(9030),E=n(4767),b=n(453),y={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}},x=function(e){var t,n,o,i=e.handleClose,a=e.images1,s=e.images2,x=e.images3,k=e.images4,Z=e.images5,C=e.images6,w=e.title,R=(0,l.Z)(),S=(0,c.Z)(R.breakpoints.down("xs")),z=a.src,I=s.src,T=x.src,P=k.src,A=Z.src,M=C.src,O=S?[P,A,M]:[z,I,T],F=(0,r.useState)([0,0]),D=F[0],N=D[0],L=D[1],W=F[1],H=(t=0,n=O.length,((N-t)%(o=n-t)+o)%o+t),B=function(e){W([N+e,e])};return r.createElement(r.Fragment,null,r.createElement(h.M,{initial:!1,custom:L,style:{boxShadow:"var(--form-shadow)"}},r.createElement(u.Z,{display:"flex",position:"absolute",top:0,p:1.8,width:"100%",justifyContent:"center",alignContent:"center",bgcolor:"var(--cards)",zIndex:3},r.createElement(g.p2,null),r.createElement(b.Z,{variant:"caption",style:{lineHeight:2,fontFamily:"Alata",textTransform:"uppercase",fontSize:18,color:"var(--color)"}},w),r.createElement(m.Z,{style:{position:"absolute",right:0,top:0,padding:20,marginRight:10,marginTop:1,borderRadius:"50%",color:"var(--color)"},onClick:i},r.createElement(p.Z,{fontSize:"small"}))),r.createElement("div",{style:{width:"100%",height:"auto",position:"relative",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",paddingTop:67}},r.createElement(v.E.img,{style:{maxWidth:"100%",maxHeight:"100%",height:S&&"60vh",objectFit:"contain",borderRadius:10},key:N,src:O[H],custom:L,variants:y,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,r=t.velocity,o=function(e,t){return Math.abs(e)*t}(n.x,r.x);return o<-1e4?B(1):o>1e4?B(-1):null}}),r.createElement(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",zIndex:1,bottom:10,p:.2,bgcolor:"rgba(0, 0, 0, 0.35)",borderRadius:10},O.map((function(e,t){return r.createElement(E.Z,{key:e+t,style:{fontSize:12,margin:1,padding:1,borderRadius:H===t?"50%":0,color:H===t?"rgba(255, 255, 255, 0.98)":"rgba(255, 255, 255, 0.25)"}})}))),r.createElement(m.Z,{style:{position:"absolute",top:"45%",zIndex:1,left:"2.5%",padding:20,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.45)"},onClick:function(){return B(-1)}},r.createElement(d.Z,{fontSize:"medium",style:{color:"white"}})),r.createElement(m.Z,{style:{position:"absolute",top:"45%",right:"2.5%",zIndex:1,padding:20,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.45)"},onClick:function(){return B(1)}},r.createElement(f.Z,{fontSize:"medium",style:{color:"white"}})))))},k=n(4818),Z=n(2122),C=n(1253),w=n(3935),R=n(1510),S=n(5505),z=n(703),I=n(7811),T=n(8231),P=n(4621),A=n(4427),M=n(1652),O=n(8590),F=n(1291),D=n(7544),N=n(9869),L=n(6610),W=n(5991),H=n(7329);function B(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function j(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function K(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=[t,n].concat((0,H.Z)(r)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&B(e,o)}))}function G(e,t){var n=-1;return e.some((function(e,r){return!!t(e)&&(n=r,!0)})),n}function J(e,t){var n,r=[],o=[],i=e.container;if(!t.disableScrollLock){if(function(e){var t=(0,z.Z)(e);return t.body===e?(0,I.Z)(t).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var a=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(j(i)+a,"px"),n=(0,z.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(n,(function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(j(e)+a,"px")}))}var l=i.parentElement,c="HTML"===l.nodeName&&"scroll"===window.getComputedStyle(l)["overflow-y"]?l:i;r.push({value:c.style.overflow,key:"overflow",el:c}),c.style.overflow="hidden"}return function(){n&&[].forEach.call(n,(function(e,t){o[t]?e.style.paddingRight=o[t]:e.style.removeProperty("padding-right")})),r.forEach((function(e){var t=e.value,n=e.el,r=e.key;t?n.style.setProperty(r,t):n.style.removeProperty(r)}))}}var q=function(){function e(){(0,L.Z)(this,e),this.modals=[],this.containers=[]}return(0,W.Z)(e,[{key:"add",value:function(e,t){var n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&B(e.modalRef,!1);var r=function(e){var t=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);K(t,e.mountNode,e.modalRef,r,!0);var o=G(this.containers,(function(e){return e.container===t}));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:r}),n)}},{key:"mount",value:function(e,t){var n=G(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),r=this.containers[n];r.restore||(r.restore=J(r,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var n=G(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),r=this.containers[n];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&B(e.modalRef,!0),K(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var o=r.modals[r.modals.length-1];o.modalRef&&B(o.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var U=function(e){var t=e.children,n=e.disableAutoFocus,o=void 0!==n&&n,i=e.disableEnforceFocus,a=void 0!==i&&i,l=e.disableRestoreFocus,c=void 0!==l&&l,s=e.getDoc,u=e.isEnabled,d=e.open,f=r.useRef(),m=r.useRef(null),p=r.useRef(null),h=r.useRef(),v=r.useRef(null),g=r.useCallback((function(e){v.current=w.findDOMNode(e)}),[]),E=(0,F.Z)(t.ref,g),b=r.useRef();return r.useEffect((function(){b.current=d}),[d]),!b.current&&d&&"undefined"!=typeof window&&(h.current=s().activeElement),r.useEffect((function(){if(d){var e=(0,z.Z)(v.current);o||!v.current||v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex",-1),v.current.focus());var t=function(){null!==v.current&&(e.hasFocus()&&!a&&u()&&!f.current?v.current&&!v.current.contains(e.activeElement)&&v.current.focus():f.current=!1)},n=function(t){!a&&u()&&9===t.keyCode&&e.activeElement===v.current&&(f.current=!0,t.shiftKey?p.current.focus():m.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var r=setInterval((function(){t()}),50);return function(){clearInterval(r),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),c||(h.current&&h.current.focus&&h.current.focus(),h.current=null)}}}),[o,a,c,u,d]),r.createElement(r.Fragment,null,r.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),r.cloneElement(t,{ref:E}),r.createElement("div",{tabIndex:0,ref:p,"data-test":"sentinelEnd"}))},V={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},Q=r.forwardRef((function(e,t){var n=e.invisible,o=void 0!==n&&n,i=e.open,a=(0,C.Z)(e,["invisible","open"]);return i?r.createElement("div",(0,Z.Z)({"aria-hidden":!0,ref:t},a,{style:(0,Z.Z)({},V.root,o?V.invisible:{},a.style)})):null}));var _=new q,X=r.forwardRef((function(e,t){var n=(0,A.Z)(),o=(0,M.Z)({name:"MuiModal",props:(0,Z.Z)({},e),theme:n}),i=o.BackdropComponent,a=void 0===i?Q:i,l=o.BackdropProps,c=o.children,s=o.closeAfterTransition,u=void 0!==s&&s,d=o.container,f=o.disableAutoFocus,m=void 0!==f&&f,p=o.disableBackdropClick,h=void 0!==p&&p,v=o.disableEnforceFocus,g=void 0!==v&&v,E=o.disableEscapeKeyDown,b=void 0!==E&&E,y=o.disablePortal,x=void 0!==y&&y,k=o.disableRestoreFocus,R=void 0!==k&&k,S=o.disableScrollLock,I=void 0!==S&&S,P=o.hideBackdrop,L=void 0!==P&&P,W=o.keepMounted,H=void 0!==W&&W,j=o.manager,K=void 0===j?_:j,G=o.onBackdropClick,J=o.onClose,q=o.onEscapeKeyDown,V=o.onRendered,X=o.open,Y=(0,C.Z)(o,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=r.useState(!0),ee=$[0],te=$[1],ne=r.useRef({}),re=r.useRef(null),oe=r.useRef(null),ie=(0,F.Z)(oe,t),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(o),le=function(){return(0,z.Z)(re.current)},ce=function(){return ne.current.modalRef=oe.current,ne.current.mountNode=re.current,ne.current},se=function(){K.mount(ce(),{disableScrollLock:I}),oe.current.scrollTop=0},ue=(0,D.Z)((function(){var e=function(e){return e="function"==typeof e?e():e,w.findDOMNode(e)}(d)||le().body;K.add(ce(),e),oe.current&&se()})),de=r.useCallback((function(){return K.isTopModal(ce())}),[K]),fe=(0,D.Z)((function(e){re.current=e,e&&(V&&V(),X&&de()?se():B(oe.current,!0))})),me=r.useCallback((function(){K.remove(ce())}),[K]);if(r.useEffect((function(){return function(){me()}}),[me]),r.useEffect((function(){X?ue():ae&&u||me()}),[X,me,ae,u,ue]),!H&&!X&&(!ae||ee))return null;var pe=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:N.Z}),he={};return void 0===c.props.tabIndex&&(he.tabIndex=c.props.tabIndex||"-1"),ae&&(he.onEnter=(0,T.Z)((function(){te(!1)}),c.props.onEnter),he.onExited=(0,T.Z)((function(){te(!0),u&&me()}),c.props.onExited)),r.createElement(O.Z,{ref:fe,container:d,disablePortal:x},r.createElement("div",(0,Z.Z)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&de()&&(q&&q(e),b||(e.stopPropagation(),J&&J(e,"escapeKeyDown")))},role:"presentation"},Y,{style:(0,Z.Z)({},pe.root,!X&&ee?pe.hidden:{},Y.style)}),L?null:r.createElement(a,(0,Z.Z)({open:X,onClick:function(e){e.target===e.currentTarget&&(G&&G(e),!h&&J&&J(e,"backdropClick"))}},l)),r.createElement(U,{disableEnforceFocus:g,disableAutoFocus:m,disableRestoreFocus:R,getDoc:le,isEnabled:de,open:X},r.cloneElement(c,he))))})),Y=n(3337),$=n(8063);function ee(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function te(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function ne(e){return[e.horizontal,e.vertical].map((function(e){return"number"==typeof e?"".concat(e,"px"):e})).join(" ")}function re(e){return"function"==typeof e?e():e}var oe=r.forwardRef((function(e,t){var n=e.action,o=e.anchorEl,i=e.anchorOrigin,a=void 0===i?{vertical:"top",horizontal:"left"}:i,l=e.anchorPosition,c=e.anchorReference,s=void 0===c?"anchorEl":c,u=e.children,d=e.classes,f=e.className,m=e.container,p=e.elevation,h=void 0===p?8:p,v=e.getContentAnchorEl,g=e.marginThreshold,E=void 0===g?16:g,b=e.onEnter,y=e.onEntered,x=e.onEntering,k=e.onExit,P=e.onExited,A=e.onExiting,M=e.open,O=e.PaperProps,F=void 0===O?{}:O,D=e.transformOrigin,N=void 0===D?{vertical:"top",horizontal:"left"}:D,L=e.TransitionComponent,W=void 0===L?Y.Z:L,H=e.transitionDuration,B=void 0===H?"auto":H,j=e.TransitionProps,K=void 0===j?{}:j,G=(0,C.Z)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),J=r.useRef(),q=r.useCallback((function(e){if("anchorPosition"===s)return l;var t=re(o),n=(t&&1===t.nodeType?t:(0,z.Z)(J.current).body).getBoundingClientRect(),r=0===e?a.vertical:"center";return{top:n.top+ee(n,r),left:n.left+te(n,a.horizontal)}}),[o,a.horizontal,a.vertical,l,s]),U=r.useCallback((function(e){var t=0;if(v&&"anchorEl"===s){var n=v(e);if(n&&e.contains(n)){var r=function(e,t){for(var n=t,r=0;n&&n!==e;)r+=(n=n.parentElement).scrollTop;return r}(e,n);t=n.offsetTop+n.clientHeight/2-r||0}0}return t}),[a.vertical,s,v]),V=r.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:ee(e,N.vertical)+t,horizontal:te(e,N.horizontal)}}),[N.horizontal,N.vertical]),Q=r.useCallback((function(e){var t=U(e),n={width:e.offsetWidth,height:e.offsetHeight},r=V(n,t);if("none"===s)return{top:null,left:null,transformOrigin:ne(r)};var i=q(t),a=i.top-r.vertical,l=i.left-r.horizontal,c=a+n.height,u=l+n.width,d=(0,I.Z)(re(o)),f=d.innerHeight-E,m=d.innerWidth-E;if(a<E){var p=a-E;a-=p,r.vertical+=p}else if(c>f){var h=c-f;a-=h,r.vertical+=h}if(l<E){var v=l-E;l-=v,r.horizontal+=v}else if(u>m){var g=u-m;l-=g,r.horizontal+=g}return{top:"".concat(Math.round(a),"px"),left:"".concat(Math.round(l),"px"),transformOrigin:ne(r)}}),[o,s,q,U,V,E]),_=r.useCallback((function(){var e=J.current;if(e){var t=Q(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}}),[Q]),oe=r.useCallback((function(e){J.current=w.findDOMNode(e)}),[]);r.useEffect((function(){M&&_()})),r.useImperativeHandle(n,(function(){return M?{updatePosition:function(){_()}}:null}),[M,_]),r.useEffect((function(){if(M){var e=(0,R.Z)((function(){_()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[M,_]);var ie=B;"auto"!==B||W.muiSupportAuto||(ie=void 0);var ae=m||(o?(0,z.Z)(re(o)).body:void 0);return r.createElement(X,(0,Z.Z)({container:ae,open:M,ref:t,BackdropProps:{invisible:!0},className:(0,S.Z)(d.root,f)},G),r.createElement(W,(0,Z.Z)({appear:!0,in:M,onEnter:b,onEntered:y,onExit:k,onExited:P,onExiting:A,timeout:ie},K,{onEntering:(0,T.Z)((function(e,t){x&&x(e,t),_()}),K.onEntering)}),r.createElement($.Z,(0,Z.Z)({elevation:h,ref:oe},F,{className:(0,S.Z)(d.paper,F.className)}),u)))})),ie=(0,P.Z)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(oe),ae=n(1295),le=n(4641),ce=n(9463),se=n(5444),ue=[{label:"Html5",icon:r.createElement(le.tTQ,null)},{label:"Css3",icon:r.createElement(le.BA4,null)},{label:"Vanilla JS",icon:r.createElement(le.Wl9,null)},{label:"Git",icon:r.createElement(le.JPj,null)},{label:"Github",icon:r.createElement(le.RVq,null)},{label:"Material UI",icon:r.createElement(ce.EOq,null)},{label:"React JS",icon:r.createElement(le.GR$,null)},{label:"Sass",icon:r.createElement(le.x9X,null)},{label:"Gatsby JS",icon:r.createElement(ce.s6Z,null)},{label:"Bootstrap",icon:r.createElement(le.e6L,null)},{label:"WordPress",icon:r.createElement(le.osD,null)},{label:"Next JS",icon:r.createElement(ce._T8,null)},{label:"GraphQL",icon:r.createElement(ce.dMV,null)}],de=(0,P.Z)((function(e){var t;return{root:{backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center"},paper:(t={width:"50vw",height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",backgroundColor:"transparent"},t[e.breakpoints.down("sm")]={width:"90%",maxHeight:"100vh"},t)}}))(ie),fe=(0,a.Z)({root:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:0,width:"100%",margin:"20px 0 50px 0",overflow:"hidden"},list:{position:"relative",margin:20},link:{color:"var(--hr)",textDecoration:"none","&:hover":{animation:"$blinker 700ms linear infinite",textDecoration:"none"}},"@keyframes blinker":{"0%":{opacity:1},"50%":{opacity:0},"100%":{opacity:1}}}),me=function(){var e=fe(),t=(0,l.Z)(),n=(0,c.Z)(t.breakpoints.down("xs")),a=(0,r.useState)(null),d=a[0],f=a[1],m=(0,r.useState)(null),p=m[0],h=m[1],v=function(){f(null),h(null)},E=ue.sort((function(){return Math.random()-.5})).map((function(e){return r.createElement(s.Z,{label:e.label,size:n?"small":"medium",icon:n?null:e.icon,style:{padding:5,margin:7,backgroundColor:"var(--hr)",color:"var(--color)",fontFamily:"Alata"}})})),y=(0,se.useStaticQuery)("2424332675").allProjectJson.edges.map((function(t){var n=t.node,o=n.id,i=n.title,a=n.info,l=n.webUrl,c=n.repo,s=n.images[0].childImageSharp.fluid,m=n.images[1].childImageSharp.fluid,E=n.images[2].childImageSharp.fluid,b=n.images[3].childImageSharp.fluid,y=n.images[4].childImageSharp.fluid,Z=n.images[5].childImageSharp.fluid;return r.createElement("li",{key:o,className:e.list},r.createElement(g.Ss,{key:o,title:i,info:a,repo:c,images1:s,images2:m,onHandleClick:function(e){return t=o,f(e.currentTarget),void h(t);var t}}),r.createElement(de,{open:p===o,anchorEl:d,TransitionComponent:Y.Z,transitionDuration:"auto",onClose:v,transformOrigin:{vertical:250,horizontal:"center"},anchorReference:"none"},r.createElement(x,{handleClose:v,images1:s,images2:m,images3:E,images4:b,images5:y,images6:Z,title:i}),r.createElement(k.Z,{mdUp:!0},r.createElement(g.hG,{info:a})),r.createElement(u.Z,{p:2.5,width:"100%",display:"flex",justifyContent:"center"},r.createElement(ae.P,{webUrl:l}))))}));return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"Portfolio"}),r.createElement(u.Z,{display:"flex",justifyContent:"center",maxWidth:n?"85%":"70%",flexWrap:"wrap",m:"0 auto"},E),r.createElement("ul",{className:e.root},y),r.createElement(u.Z,{m:"0 auto",p:1,textAlign:"center"},r.createElement(b.Z,null,"Let's Talk"),r.createElement(b.Z,null,"Wanna get in touch or talk about a project"),r.createElement(b.Z,null,"Feel free to email me via ",r.createElement(o.Z,{className:e.link,href:"mailto:abdulqoharhussein@gmail.com"},"abdulqoharhussein@gmail.com"))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-39e6968615791fa3a577.js.map