"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736,877],{4394:function(n,e,t){t.d(e,{DC:function(){return u},Hg:function(){return p},IQ:function(){return s},Jh:function(){return l},s_:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"0be17033588433ae451a609394607ef8",language:"en-US"};var s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{query:e,page:1}},n.prev=1,n.next=4,i.Z.get("/search/movie",t);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=n.sent,console.log(t),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},6736:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a=t(3433),c=t(5861),i=t(9439),s=t(7757),o=t.n(s),u=t(7689),p=t(1686),l=t(2791),f=t(4394),d=t(168),h=t(6444).ZP.ul(r||(r=(0,d.Z)(["\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  background-color: #fef6f2;\n  max-width: 100vw;\n  flex-wrap: wrap;\n  margin-top: 0;\n\n  li {\n    padding: 10px;\n\n    p {\n      margin-bottom: 0;\n      text-align: center;\n      font-weight: 500;\n    }\n  }\n"]))),v=t(660),g=t(6877),x=t(184),m="idle",w="pending",b="resolved",Z="rejected",y=function(){var n=(0,u.UO)().id,e=(0,l.useState)([]),t=(0,i.Z)(e,2),r=t[0],s=t[1],d=(0,l.useState)(m),y=(0,i.Z)(d,2),k=y[0],j=y[1];return(0,l.useEffect)((function(){function e(){return e=(0,c.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(w),n.next=4,(0,f.IQ)(e);case 4:(t=n.sent).length>0?(s((0,a.Z)(t)),j(b)):(j(m),p.Notify.info("No cast info")),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),j(Z);case 12:case"end":return n.stop()}}),n,null,[[0,8]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(n)}),[n]),(0,x.jsxs)(x.Fragment,{children:[k===w&&(0,x.jsx)(v.$,{}),k===b&&(0,x.jsx)(h,{children:r&&r.map((function(n){var e=n.name,t=n.character,r=n.profile_path,a=n.cast_id;return(0,x.jsxs)("li",{children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:e}),(0,x.jsx)("p",{children:e}),(0,x.jsx)("p",{children:t})]},a)}))}),k===Z&&(0,x.jsx)(g.default,{})]})}},660:function(n,e,t){t.d(e,{$:function(){return o}});var r,a=t(5243),c=t(168),i=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  top: 60px;\n  left: 0;\n  padding: 10px;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=t(184),o=function(){return(0,s.jsx)(i,{children:(0,s.jsx)(a.Z1,{height:"70",width:"70",color:"#f18a63;",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating"})})}},6877:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r,a=t(168),c=t(6444).ZP.section(r||(r=(0,a.Z)(["\n  width: 70vw;\n  //margin: auto;\n  background-color: #feb4b4;\n  border: 1px solid #ec0404;\n  height: 70vh;\n  border-radius: 8px;\n  position: absolute;\n  top: 10vh;\n  left: 15vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  p {\n    font-size: 20px;\n    color: #ec0404;\n    margin: auto;\n    display: inline-block;\n  }\n"]))),i=t(184),s=function(){return(0,i.jsx)(c,{children:(0,i.jsx)("p",{children:"This page doesn`t exist"})})}}}]);
//# sourceMappingURL=736.06d45681.chunk.js.map