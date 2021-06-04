(this["webpackJsonpgit-repo"]=this["webpackJsonpgit-repo"]||[]).push([[0],{168:function(e,t,a){},173:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(0),s=a.n(o),i=a(25),u=a.n(i),l=(a(168),a(29)),d=(a(173),a(120)),b=a(121),p=b.a.div(n||(n=Object(d.a)(["\n    background-color: white;\n    width: 100%;\n    padding: 20px;\n    border-radius: 20px;\n    box-shadow: rgb(0 0 0 / 30%) 0px 1px 5px;\n    height: 500px;\n"]))),j=b.a.div(r||(r=Object(d.a)(["\nheight: 100vh;\n    background-color: rgb(243, 243, 243);\n    padding: 100px 200px;\n"]))),O=a(21),g=a.n(O),h=a(15),f=a(54),m=a(62),v=a(270),x=a(58),_=a(269),S=a(272),y="GET_REPOS_BY_USERNAME",E="GET_REPOS_BY_USERNAME_SUCCESS",w="GET_REPOS_BY_USERNAME_ERROR";!function(e){e.PUBLIC="public",e.PRIVATE="private"}(c||(c={}));var R="GET_CURRENT_USER_BY_USERNAME",N="GET_CURRENT_USER_BY_USERNAME_SUCCESS",T="GET_CURRENT_USER_BY_USERNAME_ERROR",k="GET_LIST_STARGAZERS",U="GET_LIST_STARGAZERS_SUCCESS",C="GET_LIST_STARGAZERS_ERROR",z=function(e){return{type:w,payload:e}},G=function(e){return{type:T,payload:e}},A=function(e){return{type:C,payload:e}},L=function(){var e=Object(l.c)((function(e){return e.reposState.stargazer.loading})),t=Object(l.c)((function(e){return e.reposState.stargazer.data})),a=Object(l.b)();return{onGetListStargazer:Object(o.useCallback)((function(e){a({type:k,payload:e})}),[]),loading:e,data:t}},B=a(7),I=function(e){var t=e.isShow,a=e.toggleShow,n=e.url,r=e.total_stargzer,c=L(),s=c.onGetListStargazer,i=c.data,u=c.loading,l=Object(o.useState)(1),d=Object(m.a)(l,2),b=d[0],p=d[1];Object(o.useEffect)((function(){t?s({url:"".concat(n,"?page=",1)}):p(1)}),[t]);var j=u?null:Object(B.jsx)("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:Object(B.jsx)(x.a,{disabled:u,loading:u,onClick:function(){p(b+1),s({url:"".concat(n,"?page=").concat(b+1)})},children:"loading more"})});return Object(B.jsx)(S.a,{visible:t,onCancel:function(){a()},footer:null,title:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{children:"Danh s\xe1ch stargazer "}),"\u0110\xe3 load : ".concat(i.length,"/ ").concat(r)]}),children:Object(B.jsx)(_.b,{style:{overflowY:"scroll",height:300,maxHeight:350,scrollbarWidth:"none"},className:"demo-loadmore-list",loading:u,itemLayout:"horizontal",loadMore:i.length<r?j:null,dataSource:i,renderItem:function(e){return Object(B.jsx)(_.b.Item,{children:Object(B.jsx)(_.b.Item.Meta,{title:e.login,description:null===e||void 0===e?void 0:e.description})})}})})},M=s.a.memo(I),P=function(e){var t=e.loading,a=e.data,n=e.loadMore,r=e.total_repos,c=Object(o.useState)({isShow:!1,url:"",total_stargazer:0}),s=Object(m.a)(c,2),i=s[0],u=s[1],l=t?null:Object(B.jsx)("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:Object(B.jsx)(x.a,{disabled:t,loading:t,onClick:function(){n()},children:"loading more"})});return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(_.b,{style:{overflowY:"scroll",height:300,maxHeight:350,scrollbarWidth:"none"},className:"demo-loadmore-list",loading:t,itemLayout:"horizontal",loadMore:a.length<r?l:null,dataSource:a,renderItem:function(e){return Object(B.jsxs)(_.b.Item,{actions:[Object(B.jsx)(x.a,{onClick:(t=e.stargazers_url,a=e.stargazers_count,function(){u((function(e){return Object(h.a)(Object(h.a)({},e),{},{url:t,total_stargazer:a,isShow:!e.isShow})}))}),type:"link",children:"Load stargazers"},"list-loadmore-more")],children:[Object(B.jsx)(_.b.Item.Meta,{title:e.name,description:null===e||void 0===e?void 0:e.description}),Object(B.jsx)("div",{children:"S\u1ed1 stargazers: ".concat(e.stargazers_count)})]});var t,a}}),Object(B.jsx)(M,{isShow:i.isShow,toggleShow:function(e){u(void 0!==typeof e?Object(h.a)(Object(h.a)({},i),{},{isShow:!!e}):Object(h.a)(Object(h.a)({},i),{},{isShow:i.isShow}))},url:i.url,total_stargzer:i.total_stargazer})]})},Y=s.a.memo(P),F=a(267),D=a(268),H=a(271),q=function(e){e.form;var t=e.loading,a=e.loaded_repos,n=e.total_repos;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(F.a,{gutter:24,children:[Object(B.jsx)(D.a,{span:21,children:Object(B.jsx)(v.a.Item,{rules:[{required:!0,message:"Enter github ussername"},{whitespace:!0,message:"Enter github ussername"}],name:"name",children:Object(B.jsx)(H.a,{placeholder:"Nh\u1eadp t\xean github user"})})}),Object(B.jsx)(D.a,{span:3,children:Object(B.jsx)(x.a,{htmlType:"submit",loading:t,children:"T\xecm ki\u1ebfm"})})]}),Object(B.jsx)(F.a,{children:Object(B.jsx)("p",{children:"Public repos: ".concat(n||0)})}),Object(B.jsx)(F.a,{children:Object(B.jsx)("p",{children:"\u0110\xe3 load: ".concat(a,"/").concat(n||0," repos")})})]})},V=s.a.memo(q),Z=function(){var e=Object(l.c)((function(e){return e.reposState.user.loading})),t=Object(l.c)((function(e){return e.reposState.user.data.public_repos})),a=Object(l.b)();return{onGetCurrentUserByUserName:Object(o.useCallback)((function(e){a({type:R,payload:e})}),[]),loading:e,total_public_repos:t}},J=function(){var e=Object(l.c)((function(e){return e.reposState.listRepo.loading})),t=Object(l.c)((function(e){return e.reposState.listRepo.data})),a=Object(l.c)((function(e){return e.reposState.listRepo.userName})),n=Object(l.b)();return{onGetRepoByUserName:Object(o.useCallback)((function(e){n({type:y,payload:e})}),[]),loading:e,data:t,userName:a}},W=function(){var e=Object(o.useState)({page_index:1}),t=Object(m.a)(e,2),a=t[0],n=t[1],r=v.a.useForm(),c=Object(m.a)(r,1)[0],s=J(),i=s.onGetRepoByUserName,u=s.loading,l=s.data,d=s.userName,b=Z(),j=b.onGetCurrentUserByUserName,O=b.total_public_repos,x=b.loading,_=function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((function(e){return Object(h.a)(Object(h.a)({},e),{},{page_index:e.page_index+1})}));case 2:i({userName:c.getFieldValue("name"),page_index:a.page_index+1});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsx)(p,{children:Object(B.jsxs)(v.a,{form:c,onFinish:function(e){var t,a,n,r,c,o;(null===(t=d.trim())||void 0===t?void 0:t.toLowerCase())!==(null===(a=e.name.trim())||void 0===a?void 0:a.toLowerCase())&&(j({userName:null===(n=e.name)||void 0===n||null===(r=n.trim())||void 0===r?void 0:r.toLowerCase()}),i({userName:null===(c=e.name)||void 0===c||null===(o=c.trim())||void 0===o?void 0:o.toLowerCase(),page_index:1}))},children:[Object(B.jsx)(V,{total_repos:O,loaded_repos:l.length,loading:x||u,form:c}),l.length?Object(B.jsx)(Y,{total_repos:O,data:l,loadMore:_,loading:u||x}):null]})})},X=s.a.memo(W),K="APP_STARTED";var Q=function(){var e=Object(l.b)();return Object(o.useEffect)((function(){e({type:K})}),[]),Object(B.jsx)(j,{children:Object(B.jsx)(X,{})})},$=a(56),ee=a(162),te=a(30),ae=a(154),ne=a.n(ae),re=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){ne.a.get(t,{}).then((function(t){e(t.data)})).catch((function(e){e.response?401===e.response.status||a(e.response.data):e.request?a(e.request):console.log("Error",e.message)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce="".concat({apiBaseUrl:"https://api.github.com"}.apiBaseUrl),oe="".concat(ce,"/users/"),se=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",re(oe+"".concat(t.userName,"/repos?page=").concat(t.page_index)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",re(oe+"".concat(t.userName)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",re(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=g.a.mark(de);function de(e){var t;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,se(e.payload);case 3:return t=a.sent,a.next=6,Object(te.b)({type:E,payload:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(te.b)(z(null===a.t0||void 0===a.t0?void 0:a.t0.message));case 12:case"end":return a.stop()}}),le,null,[[0,8]])}var be=a(160),pe=g.a.mark(je);function je(e){var t;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ie(e.payload);case 3:return t=a.sent,a.next=6,Object(te.b)({type:N,payload:t});case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(te.b)(G(null===a.t0||void 0===a.t0?void 0:a.t0.message));case 12:be.b.error("L\u1ed7i: ".concat(null===a.t0||void 0===a.t0?void 0:a.t0.message),3);case 13:case"end":return a.stop()}}),pe,null,[[0,8]])}var Oe=g.a.mark(ge);function ge(e){var t;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ue(e.payload.url);case 3:return t=a.sent,a.next=6,Object(te.b)({type:U,payload:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(te.b)(A(null===a.t0||void 0===a.t0?void 0:a.t0.message));case 12:case"end":return a.stop()}}),Oe,null,[[0,8]])}var he=g.a.mark(fe);function fe(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=te.a,e.next=3,Object(te.d)(y,de);case 3:return e.t1=e.sent,e.next=6,Object(te.d)(R,je);case 6:return e.t2=e.sent,e.next=9,Object(te.d)(k,ge);case 9:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.abrupt("return",(0,e.t0)(e.t4));case 12:case"end":return e.stop()}}),he)}var me=g.a.mark(ve);function ve(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.c)(K);case 2:return e.next=4,Object(te.a)([fe()]);case 4:case"end":return e.stop()}}),me)}var xe=a(57),_e={data:[],loading:!1,userName:""},Se={data:{},loading:!1},ye={data:[],loading:!1,url:""},Ee=Object($.b)({listRepo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload.userName!==e.userName?Object(h.a)(Object(h.a)({},e),{},{data:[],loading:!0,userName:t.payload.userName}):Object(h.a)(Object(h.a)({},e),{},{loading:!0,userName:t.payload.userName});case E:var a=Object(xe.a)(e.data);return Object(h.a)(Object(h.a)({},e),{},{data:[].concat(Object(xe.a)(a),Object(xe.a)(t.payload)),loading:!1});case w:return Object(h.a)(Object(h.a)({},e),{},{loading:!1,data:[]});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case N:return Object(h.a)(Object(h.a)({},e),{},{data:t.payload,loading:!1});case T:return Object(h.a)(Object(h.a)({},e),{},{loading:!1,data:[]});default:return e}},stargazer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload.url.split("?")[0]!==e.url.split("?")[0]?Object(h.a)(Object(h.a)({},e),{},{data:[],loading:!0,url:t.payload.url}):Object(h.a)(Object(h.a)({},e),{},{loading:!0,url:t.payload.url});case U:var a=Object(xe.a)(e.data);return Object(h.a)(Object(h.a)({},e),{},{data:[].concat(Object(xe.a)(a),Object(xe.a)(t.payload)),loading:!1});case C:return Object(h.a)(Object(h.a)({},e),{},{loading:!1,data:[]});default:return e}}}),we=Object($.b)({reposState:Ee}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.c,Ne=Object(ee.a)(),Te=Object($.d)(we,{},Re(Object($.a)(Ne)));Ne.run(ve);var ke=Te;u.a.render(Object(B.jsx)(l.a,{store:ke,children:Object(B.jsx)(Q,{})}),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.5ed5cdea.chunk.js.map