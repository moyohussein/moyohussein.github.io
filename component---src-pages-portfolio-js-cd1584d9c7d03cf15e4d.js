(self.webpackChunkhussein_portfolio=self.webpackChunkhussein_portfolio||[]).push([[25],{9942:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),"ArrowLeft");t.Z=a},3629:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.Z=a},263:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.Z=a},9181:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.Z=void 0;var i=o(n(7294)),a=(0,r(n(8786)).default)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},9543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return he}});var r=n(7294),o=n(4850),i=n(3751),a=n(920),l=n(9355),c=n(8129),s=n(4998),u=n(8266),d=n(9942),f=n(3629),m=n(3332),p=n(9181),h=n(908),v=n(3070),g=function(e,t,n){var r=t-e;return((n-e)%r+r)%r+e},E=n(9030),b=n(263),y=n(4767),x=n(453),Z={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}},k=function(e){var t=e.handleClose,n=e.images1,o=e.images2,i=e.images3,a=e.images4,l=e.images5,c=e.images6,s=e.title,k=[n.src,o.src,i.src],C=[a.src,l.src,c.src],w=(0,r.useState)([0,0]),R=w[0],S=R[0],z=R[1],I=w[1],T=g(0,C.length,S),P=g(0,k.length,S),A=function(e){I([S+e,e])},M=function(e,t){var n=t.offset,r=t.velocity,o=function(e,t){return Math.abs(e)*t}(n.x,r.x);return o<-1e4?A(1):o>1e4?A(-1):null};return r.createElement(r.Fragment,null,r.createElement(h.M,{initial:!1,custom:z,style:{boxShadow:"var(--form-shadow)"}},r.createElement(u.Z,{display:{xs:"none",sm:"block"}},r.createElement(u.Z,{display:"flex",position:"absolute",top:0,p:1.8,width:"100%",justifyContent:"center",alignContent:"center",bgcolor:"var(--cards)",zIndex:3,fontSize:18},r.createElement(E.p2,null),r.createElement(x.Z,{variant:"caption",style:{lineHeight:2,fontFamily:"Alata",textTransform:"uppercase",fontSize:"inherit",color:"var(--color)"}},s),r.createElement(m.Z,{style:{position:"absolute",right:0,top:0,padding:20,marginRight:10,marginTop:1,borderRadius:"50%",color:"var(--color)"},onClick:t},r.createElement(p.Z,{fontSize:"small"})))),r.createElement(u.Z,{display:{xs:"block",sm:"none"}},r.createElement(u.Z,{display:"flex",position:"absolute",top:0,p:1,fontSize:12,width:"100%",justifyContent:"center",alignContent:"center",bgcolor:"var(--cards)",zIndex:3},r.createElement(E.p2,null),r.createElement(x.Z,{variant:"caption",style:{lineHeight:1.45,fontFamily:"Alata",textTransform:"uppercase",fontSize:"inherit",color:"var(--color)"}},s),r.createElement(m.Z,{style:{position:"absolute",right:-10,top:0,alignSelf:"center",color:"var(--color)"},onClick:t},r.createElement(b.Z,{fontSize:"small"})))),r.createElement("div",{style:{width:"100%",height:"auto",position:"relative",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}},r.createElement(u.Z,{display:{xs:"block",sm:"none"},pt:5},r.createElement(v.E.img,{style:{maxWidth:"100%",maxHeight:"100%",height:"60vh",objectFit:"contain",borderRadius:10},key:S,src:C[T],custom:z,variants:Z,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:M}),r.createElement(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",zIndex:1,bottom:10,width:50,left:0,right:0,margin:"auto",p:.2,bgcolor:"rgba(0, 0, 0, 0.35)",borderRadius:10},C.map((function(e,t){return r.createElement(y.Z,{key:e+t,style:{fontSize:12,margin:1,padding:1,borderRadius:T===t?"50%":0,color:T===t?"rgba(255, 255, 255, 0.98)":"rgba(255, 255, 255, 0.25)"}})})))),r.createElement(u.Z,{display:{xs:"none",sm:"block"},pt:10},r.createElement(v.E.img,{style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:10},key:S,src:k[P],custom:z,variants:Z,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:M}),r.createElement(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",textAlign:"center",width:50,left:0,right:0,margin:"auto",zIndex:1,bottom:10,p:.2,bgcolor:"rgba(0, 0, 0, 0.35)",borderRadius:10},k.map((function(e,t){return r.createElement(y.Z,{key:e+t,style:{fontSize:12,margin:1,padding:1,borderRadius:P===t?"50%":0,color:P===t?"rgba(255, 255, 255, 0.98)":"rgba(255, 255, 255, 0.25)"}})})))),r.createElement(m.Z,{style:{position:"absolute",top:"45%",zIndex:1,left:"2.5%",padding:20,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.45)"},onClick:function(){return A(-1)}},r.createElement(d.Z,{fontSize:"medium",style:{color:"white"}})),r.createElement(m.Z,{style:{position:"absolute",top:"45%",right:"2.5%",zIndex:1,padding:20,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.45)"},onClick:function(){return A(1)}},r.createElement(f.Z,{fontSize:"medium",style:{color:"white"}})))))},C=n(4818),w=n(2122),R=n(1253),S=n(3935),z=n(1510),I=n(5505),T=n(703),P=n(7811),A=n(8231),M=n(4621),F=n(4427),O=n(1652),D=n(8590),N=n(1291),L=n(7544),W=n(9869),H=n(6610),j=n(5991),B=n(7329);function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function G(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function J(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=[t,n].concat((0,B.Z)(r)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&K(e,o)}))}function q(e,t){var n=-1;return e.some((function(e,r){return!!t(e)&&(n=r,!0)})),n}function U(e,t){var n,r=[],o=[],i=e.container;if(!t.disableScrollLock){if(function(e){var t=(0,T.Z)(e);return t.body===e?(0,P.Z)(t).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var a=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(G(i)+a,"px"),n=(0,T.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(n,(function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(G(e)+a,"px")}))}var l=i.parentElement,c="HTML"===l.nodeName&&"scroll"===window.getComputedStyle(l)["overflow-y"]?l:i;r.push({value:c.style.overflow,key:"overflow",el:c}),c.style.overflow="hidden"}return function(){n&&[].forEach.call(n,(function(e,t){o[t]?e.style.paddingRight=o[t]:e.style.removeProperty("padding-right")})),r.forEach((function(e){var t=e.value,n=e.el,r=e.key;t?n.style.setProperty(r,t):n.style.removeProperty(r)}))}}var V=function(){function e(){(0,H.Z)(this,e),this.modals=[],this.containers=[]}return(0,j.Z)(e,[{key:"add",value:function(e,t){var n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&K(e.modalRef,!1);var r=function(e){var t=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);J(t,e.mountNode,e.modalRef,r,!0);var o=q(this.containers,(function(e){return e.container===t}));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:r}),n)}},{key:"mount",value:function(e,t){var n=q(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),r=this.containers[n];r.restore||(r.restore=U(r,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var n=q(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),r=this.containers[n];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&K(e.modalRef,!0),J(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var o=r.modals[r.modals.length-1];o.modalRef&&K(o.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var Q=function(e){var t=e.children,n=e.disableAutoFocus,o=void 0!==n&&n,i=e.disableEnforceFocus,a=void 0!==i&&i,l=e.disableRestoreFocus,c=void 0!==l&&l,s=e.getDoc,u=e.isEnabled,d=e.open,f=r.useRef(),m=r.useRef(null),p=r.useRef(null),h=r.useRef(),v=r.useRef(null),g=r.useCallback((function(e){v.current=S.findDOMNode(e)}),[]),E=(0,N.Z)(t.ref,g),b=r.useRef();return r.useEffect((function(){b.current=d}),[d]),!b.current&&d&&"undefined"!=typeof window&&(h.current=s().activeElement),r.useEffect((function(){if(d){var e=(0,T.Z)(v.current);o||!v.current||v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex",-1),v.current.focus());var t=function(){null!==v.current&&(e.hasFocus()&&!a&&u()&&!f.current?v.current&&!v.current.contains(e.activeElement)&&v.current.focus():f.current=!1)},n=function(t){!a&&u()&&9===t.keyCode&&e.activeElement===v.current&&(f.current=!0,t.shiftKey?p.current.focus():m.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var r=setInterval((function(){t()}),50);return function(){clearInterval(r),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),c||(h.current&&h.current.focus&&h.current.focus(),h.current=null)}}}),[o,a,c,u,d]),r.createElement(r.Fragment,null,r.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),r.cloneElement(t,{ref:E}),r.createElement("div",{tabIndex:0,ref:p,"data-test":"sentinelEnd"}))},Y={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},_=r.forwardRef((function(e,t){var n=e.invisible,o=void 0!==n&&n,i=e.open,a=(0,R.Z)(e,["invisible","open"]);return i?r.createElement("div",(0,w.Z)({"aria-hidden":!0,ref:t},a,{style:(0,w.Z)({},Y.root,o?Y.invisible:{},a.style)})):null}));var X=new V,$=r.forwardRef((function(e,t){var n=(0,F.Z)(),o=(0,O.Z)({name:"MuiModal",props:(0,w.Z)({},e),theme:n}),i=o.BackdropComponent,a=void 0===i?_:i,l=o.BackdropProps,c=o.children,s=o.closeAfterTransition,u=void 0!==s&&s,d=o.container,f=o.disableAutoFocus,m=void 0!==f&&f,p=o.disableBackdropClick,h=void 0!==p&&p,v=o.disableEnforceFocus,g=void 0!==v&&v,E=o.disableEscapeKeyDown,b=void 0!==E&&E,y=o.disablePortal,x=void 0!==y&&y,Z=o.disableRestoreFocus,k=void 0!==Z&&Z,C=o.disableScrollLock,z=void 0!==C&&C,I=o.hideBackdrop,P=void 0!==I&&I,M=o.keepMounted,H=void 0!==M&&M,j=o.manager,B=void 0===j?X:j,G=o.onBackdropClick,J=o.onClose,q=o.onEscapeKeyDown,U=o.onRendered,V=o.open,Y=(0,R.Z)(o,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=r.useState(!0),ee=$[0],te=$[1],ne=r.useRef({}),re=r.useRef(null),oe=r.useRef(null),ie=(0,N.Z)(oe,t),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(o),le=function(){return(0,T.Z)(re.current)},ce=function(){return ne.current.modalRef=oe.current,ne.current.mountNode=re.current,ne.current},se=function(){B.mount(ce(),{disableScrollLock:z}),oe.current.scrollTop=0},ue=(0,L.Z)((function(){var e=function(e){return e="function"==typeof e?e():e,S.findDOMNode(e)}(d)||le().body;B.add(ce(),e),oe.current&&se()})),de=r.useCallback((function(){return B.isTopModal(ce())}),[B]),fe=(0,L.Z)((function(e){re.current=e,e&&(U&&U(),V&&de()?se():K(oe.current,!0))})),me=r.useCallback((function(){B.remove(ce())}),[B]);if(r.useEffect((function(){return function(){me()}}),[me]),r.useEffect((function(){V?ue():ae&&u||me()}),[V,me,ae,u,ue]),!H&&!V&&(!ae||ee))return null;var pe=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:W.Z}),he={};return void 0===c.props.tabIndex&&(he.tabIndex=c.props.tabIndex||"-1"),ae&&(he.onEnter=(0,A.Z)((function(){te(!1)}),c.props.onEnter),he.onExited=(0,A.Z)((function(){te(!0),u&&me()}),c.props.onExited)),r.createElement(D.Z,{ref:fe,container:d,disablePortal:x},r.createElement("div",(0,w.Z)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&de()&&(q&&q(e),b||(e.stopPropagation(),J&&J(e,"escapeKeyDown")))},role:"presentation"},Y,{style:(0,w.Z)({},pe.root,!V&&ee?pe.hidden:{},Y.style)}),P?null:r.createElement(a,(0,w.Z)({open:V,onClick:function(e){e.target===e.currentTarget&&(G&&G(e),!h&&J&&J(e,"backdropClick"))}},l)),r.createElement(Q,{disableEnforceFocus:g,disableAutoFocus:m,disableRestoreFocus:k,getDoc:le,isEnabled:de,open:V},r.cloneElement(c,he))))})),ee=n(3337),te=n(8063);function ne(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function re(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function oe(e){return[e.horizontal,e.vertical].map((function(e){return"number"==typeof e?"".concat(e,"px"):e})).join(" ")}function ie(e){return"function"==typeof e?e():e}var ae=r.forwardRef((function(e,t){var n=e.action,o=e.anchorEl,i=e.anchorOrigin,a=void 0===i?{vertical:"top",horizontal:"left"}:i,l=e.anchorPosition,c=e.anchorReference,s=void 0===c?"anchorEl":c,u=e.children,d=e.classes,f=e.className,m=e.container,p=e.elevation,h=void 0===p?8:p,v=e.getContentAnchorEl,g=e.marginThreshold,E=void 0===g?16:g,b=e.onEnter,y=e.onEntered,x=e.onEntering,Z=e.onExit,k=e.onExited,C=e.onExiting,M=e.open,F=e.PaperProps,O=void 0===F?{}:F,D=e.transformOrigin,N=void 0===D?{vertical:"top",horizontal:"left"}:D,L=e.TransitionComponent,W=void 0===L?ee.Z:L,H=e.transitionDuration,j=void 0===H?"auto":H,B=e.TransitionProps,K=void 0===B?{}:B,G=(0,R.Z)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),J=r.useRef(),q=r.useCallback((function(e){if("anchorPosition"===s)return l;var t=ie(o),n=(t&&1===t.nodeType?t:(0,T.Z)(J.current).body).getBoundingClientRect(),r=0===e?a.vertical:"center";return{top:n.top+ne(n,r),left:n.left+re(n,a.horizontal)}}),[o,a.horizontal,a.vertical,l,s]),U=r.useCallback((function(e){var t=0;if(v&&"anchorEl"===s){var n=v(e);if(n&&e.contains(n)){var r=function(e,t){for(var n=t,r=0;n&&n!==e;)r+=(n=n.parentElement).scrollTop;return r}(e,n);t=n.offsetTop+n.clientHeight/2-r||0}0}return t}),[a.vertical,s,v]),V=r.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:ne(e,N.vertical)+t,horizontal:re(e,N.horizontal)}}),[N.horizontal,N.vertical]),Q=r.useCallback((function(e){var t=U(e),n={width:e.offsetWidth,height:e.offsetHeight},r=V(n,t);if("none"===s)return{top:null,left:null,transformOrigin:oe(r)};var i=q(t),a=i.top-r.vertical,l=i.left-r.horizontal,c=a+n.height,u=l+n.width,d=(0,P.Z)(ie(o)),f=d.innerHeight-E,m=d.innerWidth-E;if(a<E){var p=a-E;a-=p,r.vertical+=p}else if(c>f){var h=c-f;a-=h,r.vertical+=h}if(l<E){var v=l-E;l-=v,r.horizontal+=v}else if(u>m){var g=u-m;l-=g,r.horizontal+=g}return{top:"".concat(Math.round(a),"px"),left:"".concat(Math.round(l),"px"),transformOrigin:oe(r)}}),[o,s,q,U,V,E]),Y=r.useCallback((function(){var e=J.current;if(e){var t=Q(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}}),[Q]),_=r.useCallback((function(e){J.current=S.findDOMNode(e)}),[]);r.useEffect((function(){M&&Y()})),r.useImperativeHandle(n,(function(){return M?{updatePosition:function(){Y()}}:null}),[M,Y]),r.useEffect((function(){if(M){var e=(0,z.Z)((function(){Y()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[M,Y]);var X=j;"auto"!==j||W.muiSupportAuto||(X=void 0);var ae=m||(o?(0,T.Z)(ie(o)).body:void 0);return r.createElement($,(0,w.Z)({container:ae,open:M,ref:t,BackdropProps:{invisible:!0},className:(0,I.Z)(d.root,f)},G),r.createElement(W,(0,w.Z)({appear:!0,in:M,onEnter:b,onEntered:y,onExit:Z,onExited:k,onExiting:C,timeout:X},K,{onEntering:(0,A.Z)((function(e,t){x&&x(e,t),Y()}),K.onEntering)}),r.createElement(te.Z,(0,w.Z)({elevation:h,ref:_},O,{className:(0,I.Z)(d.paper,O.className)}),u)))})),le=(0,M.Z)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(ae),ce=n(1295),se=n(4641),ue=n(9463),de=n(5444),fe=[{label:"Html5",icon:r.createElement(se.tTQ,null)},{label:"Css3",icon:r.createElement(se.BA4,null)},{label:"Vanilla JS",icon:r.createElement(se.Wl9,null)},{label:"Git",icon:r.createElement(se.JPj,null)},{label:"Github",icon:r.createElement(se.RVq,null)},{label:"Material UI",icon:r.createElement(ue.EOq,null)},{label:"React JS",icon:r.createElement(se.GR$,null)},{label:"Sass",icon:r.createElement(se.x9X,null)},{label:"Gatsby JS",icon:r.createElement(ue.s6Z,null)},{label:"Bootstrap",icon:r.createElement(se.e6L,null)},{label:"WordPress",icon:r.createElement(se.osD,null)},{label:"Next JS",icon:r.createElement(ue._T8,null)},{label:"GraphQL",icon:r.createElement(ue.dMV,null)}],me=(0,M.Z)((function(e){var t;return{root:{backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center"},paper:(t={width:"50vw",height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",overflowY:"hidden",backgroundColor:"transparent"},t[e.breakpoints.only("sm")]={width:"78vw"},t[e.breakpoints.down("xs")]={width:350,maxHeight:"100vh"},t)}}))(le),pe=(0,a.Z)((function(e){var t;return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:0,width:"100%",margin:"20px 0 50px 0",overflow:"hidden"},list:{position:"relative",margin:20},box:(t={maxWidth:"70%"},t[e.breakpoints.down("sm")]={maxWidth:"100%"},t),link:{color:"var(--hr)",textDecoration:"none","&:hover":{animation:"$blinker 700ms linear infinite",textDecoration:"none"}},"@keyframes blinker":{"0%":{opacity:1},"50%":{opacity:0},"100%":{opacity:1}}}})),he=function(){var e=pe(),t=(0,l.Z)(),n=(0,c.Z)(t.breakpoints.down("xs")),a=(0,r.useState)(null),d=a[0],f=a[1],m=(0,r.useState)(null),p=m[0],h=m[1],v=function(){f(null),h(null)},g=fe.sort((function(){return Math.random()-.5})).map((function(e){return r.createElement(s.Z,{label:e.label,size:n?"small":"medium",icon:n?null:e.icon,style:{padding:5,margin:7,backgroundColor:"var(--hr)",color:"var(--color)",fontFamily:"Alata"}})})),b=(0,de.useStaticQuery)("2424332675").allProjectJson.edges.map((function(t){var n=t.node,o=n.id,i=n.title,a=n.info,l=n.webUrl,c=n.repo,s=n.images[0].childImageSharp.fluid,m=n.images[1].childImageSharp.fluid,g=n.images[2].childImageSharp.fluid,b=n.images[3].childImageSharp.fluid,y=n.images[4].childImageSharp.fluid,x=n.images[5].childImageSharp.fluid;return r.createElement("li",{key:o,className:e.list},r.createElement(E.Ss,{key:o,title:i,info:a,repo:c,images1:s,images2:m,onHandleClick:function(e){return t=o,f(e.currentTarget),void h(t);var t}}),r.createElement(me,{open:p===o,anchorEl:d,TransitionComponent:ee.Z,transitionDuration:"auto",onClose:v,transformOrigin:{vertical:250,horizontal:"center"},anchorReference:"none"},r.createElement(k,{handleClose:v,images1:s,images2:m,images3:g,images4:b,images5:y,images6:x,title:i}),r.createElement(C.Z,{mdUp:!0},r.createElement(E.hG,{info:a})),r.createElement(u.Z,{p:2.5,width:"100%",display:"flex",justifyContent:"center"},r.createElement(ce.P,{webUrl:l}))))}));return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"Portfolio"}),r.createElement(u.Z,{display:"flex",justifyContent:"center",className:e.box,flexWrap:"wrap",m:"0 auto"},g),r.createElement("ul",{className:e.root},b),r.createElement(u.Z,{m:"0 auto",p:1,textAlign:"center"},r.createElement(x.Z,null,"Let's Talk"),r.createElement(x.Z,null,"Wanna get in touch or talk about a project"),r.createElement(x.Z,null,"Feel free to email me via ",r.createElement(o.Z,{className:e.link,href:"mailto:abdulqoharhussein@gmail.com"},"abdulqoharhussein@gmail.com"))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-cd1584d9c7d03cf15e4d.js.map