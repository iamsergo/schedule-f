(this["webpackJsonpschedule-f"]=this["webpackJsonpschedule-f"]||[]).push([[0],{109:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(27),i=n.n(s),a=n(23),o=n.n(a),u=(n(103),n(20)),l=n(12),d=n(25),f="https://schedule-all-univers.herokuapp.com",j=198278031,h="schedule",b="main",p="search",O="settings",g={activePanel:b,history:[b],activeModal:null},x=Object(u.c)({name:"navigation",initialState:g,reducers:{setActivePanel:function(e,t){e.activePanel=t.payload},setActiveModal:function(e,t){e.activeModal=t.payload}}}),v=x.actions,m=v.setActivePanel,y=v.setActiveModal,w=x.reducer,k=n(15),S=n.n(k),C=n(22),L={getSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.univer,r=t.tail,c=[f,"schedule",n,r].join("/"),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),searchSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.univer,r=t.q,c=[f,"schedule/search",n,r].join("/"),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D={getUniverList:function(){var e=Object(C.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[f,"univers"].join("/"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},_=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[f,"users",t].join("/"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s,i,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.univerId,c=[f,"users",n,"univer"].join("/"),s={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({univerId:r})},e.next=5,fetch(c,s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[f,"users",t,"univer"].join("/"),r={method:"DELETE"},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E={schedule:L,config:D,user:{getUser:_,updateUserSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s,i,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.scheduleId,c=[f,"users",n,"schedule"].join("/"),s={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({scheduleId:r})},e.next=5,fetch(c,s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUserSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[f,"users",t,"schedule"].join("/"),r={method:"DELETE"},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUserUniver:T,deleteUserUniver:U}},H=Object(u.b)("schedule/request",function(){var e=Object(C.a)(S.a.mark((function e(t,n){var r,c,s,i,a,o,u,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.univer,s=t.tail,i=n.getState(),a=i.schedule.scheduleHistory,o=null===(r=i.user.user)||void 0===r?void 0:r.schedule,!(u=a.find((function(e){return e.id===s})))){e.next=9;break}return e.abrupt("return",{record:u,isUniq:!1});case 9:if(!o||o.href!==s){e.next=13;break}return e.abrupt("return",{record:{id:s,data:o},isUniq:!0});case 13:return e.next=15,E.schedule.getSchedule({univer:c,tail:s});case 15:return l=e.sent,e.abrupt("return",{record:{id:s,data:l},isUniq:!0});case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(u.b)("schedule/search/request",E.schedule.searchSchedule),N=Object(u.c)({name:"schedule",initialState:{isLoading:!1,error:null,schedule:null,lessonStats:null,scheduleHistory:[],scheduleHistoryHrefs:[],q:"",isSearchLoading:!1,searchError:null,searchedSchedules:[]},reducers:{scheduleHistoryBack:function(e){e.scheduleHistoryHrefs.pop();var t=e.scheduleHistoryHrefs[e.scheduleHistoryHrefs.length-1];if(t){var n=e.scheduleHistory.find((function(e){return e.id===t}));e.schedule=n.data}else e.schedule=null},clearScheduleHistory:function(e){e.scheduleHistoryHrefs=[],e.schedule=null},clearSearchedSchedules:function(e){e.searchedSchedules=[]},setLessonStats:function(e,t){e.lessonStats=t.payload}},extraReducers:function(e){e.addCase(H.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(H.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f :(",payload:t.meta.arg}})).addCase(H.fulfilled,(function(e,t){e.isLoading=!1,e.error=null;var n=t.payload,r=n.isUniq,c=n.record;r&&e.scheduleHistory.push(c),e.scheduleHistoryHrefs.push(c.id),e.schedule=c.data})).addCase(A.pending,(function(e){e.isSearchLoading=!0,e.searchError=null})).addCase(A.rejected,(function(e,t){e.isSearchLoading=!1,e.searchError={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f :(",payload:t.meta.arg}})).addCase(A.fulfilled,(function(e,t){e.isSearchLoading=!1,e.searchError=null,e.searchedSchedules=t.payload}))}}),W=N.actions,q=W.scheduleHistoryBack,I=W.clearScheduleHistory,P=W.clearSearchedSchedules,G=W.setLessonStats,R=N.reducer,M=n(13),K=function(e,t,n){return e.filter((function(e){var r=e.day===t,c=e.week===n||2===e.week;return r&&c}))},F=function(e){var t={};return e.forEach((function(e){e.fromWhoms.forEach((function(e){t[e.href]||(t[e.href]=e)}))})),Object.values(t)},V=function(e){var t=(new Date).getTime(),n=Object(M.a)(e.range,2),r=n[0],c=n[1];return r<=t&&t<=c},J=Object(u.b)("config/univers",E.config.getUniverList),B=Object(u.c)({name:"config",initialState:{isLoading:!1,error:null,univerList:[],currentUniver:null,passDays:0,countDays:0,toEndDays:0,toEndPercent:0,currentDay:0,currentWeek:0,config:{}},reducers:{setCurrentUniver:function(e,t){var n=t.payload;if(n){n=e.univerList.find((function(e){return e.id===n.id})),e.currentUniver=n,e.currentDay=function(){var e=(new Date).getDay();return e>0?e-1:e}(),e.currentWeek=function(e){var t=e.find((function(e){return V(e)}));return t?t.weekType:0}(n.weeks);var r=function(e,t){var n=864e5,r=(new Date).getTime(),c=new Date(e).getTime(),s=new Date(t).getTime(),i=Math.ceil((s-c)/n);return{passDays:Math.ceil((r-c)/n),countDays:i,toEndDays:Math.ceil((s-r)/n)}}(n.startDate,n.endDate),c=r.passDays,s=r.countDays,i=r.toEndDays;e.countDays=s,e.passDays=c,e.toEndDays=i,e.toEndPercent=c/s*100}else e.currentUniver=null},setConfig:function(e,t){e.config=t.payload}},extraReducers:function(e){e.addCase(J.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(J.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043e\u0432 :(",payload:t.meta.arg}})).addCase(J.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.univerList=t.payload}))}}),z=B.actions,Y=z.setCurrentUniver,Q=z.setConfig,X=B.reducer,Z=Object(u.b)("user/request",E.user.getUser),$=Object(u.b)("user/update/univer",E.user.updateUserUniver),ee=Object(u.b)("user/delete/univer",E.user.deleteUserUniver),te=Object(u.b)("user/update/schedule",E.user.updateUserSchedule),ne=Object(u.b)("user/delete/schedule",E.user.deleteUserSchedule),re=Object(u.c)({name:"user",initialState:{isLoading:!1,isLoaderShowing:!0,isUniverLoading:!1,isScheduleLoading:!1,error:null,user:null,userData:null},reducers:{setUserData:function(e,t){e.userData=t.payload},setIsLoaderShowing:function(e,t){e.isLoaderShowing=t.payload}},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(Z.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(Z.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.user=t.payload})).addCase($.pending,(function(e){e.isUniverLoading=!0,e.error=null})).addCase($.rejected,(function(e,t){e.isUniverLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase($.fulfilled,(function(e,t){e.isUniverLoading=!1,e.error=null,e.user=t.payload})).addCase(ee.pending,(function(e){e.isUniverLoading=!0,e.error=null})).addCase(ee.rejected,(function(e,t){e.isUniverLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(ee.fulfilled,(function(e,t){e.isUniverLoading=!1,e.error=null,e.user=t.payload})).addCase(te.pending,(function(e){e.isScheduleLoading=!0,e.error=null})).addCase(te.rejected,(function(e,t){e.isScheduleLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(te.fulfilled,(function(e,t){e.isScheduleLoading=!1,e.error=null,e.user=t.payload})).addCase(ne.pending,(function(e){e.isScheduleLoading=!0,e.error=null})).addCase(ne.rejected,(function(e,t){e.isScheduleLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(ne.fulfilled,(function(e,t){e.isScheduleLoading=!1,e.error=null,e.user=t.payload}))}}),ce=re.actions,se=ce.setUserData,ie=ce.setIsLoaderShowing,ae=re.reducer,oe=Object(d.b)({navigation:w,schedule:R,config:X,user:ae}),ue=Object(u.a)({reducer:oe}),le=ue,de=(n(109),n(28)),fe=n(32),je=n(5),he=n(130),be=n(131),pe=n(132),Oe=n(133),ge=n(134),xe=n(135),ve=n(136),me=n(137),ye=n(138),we=n(129),ke=(n(121),n(1)),Se=function(e){var t=e.current,n=e.lesson,r=e.onGoToSchedule,c=e.getStats;return Object(ke.jsxs)("div",{className:"lesson-row".concat(t?" lesson-row--current":""),children:[Object(ke.jsx)("div",{className:"lesson-row__time",children:n.time.map((function(e,t){return Object(ke.jsx)("div",{className:"lesson-row__time-item lesson-row__time-item--".concat(0===t?"start":"end"),children:e},e)}))}),Object(ke.jsxs)("div",{className:"lesson-row__body lesson-row__body--".concat(n.type),children:[n.typeTitle&&Object(ke.jsxs)("div",{className:"lesson-row__place",children:[Object(ke.jsx)("span",{className:"lesson-row__type-title--".concat(n.type),children:n.typeTitle}),n.place]}),Object(ke.jsxs)("div",{onClick:function(){return c&&c()},className:"lesson-row__subject",children:[n.subject," ",2!==n.group&&"(".concat(n.group+1,"\u0433\u0440.)")]}),Object(ke.jsx)("div",{className:"lesson-row__fromWhoms",children:n.fromWhoms.map((function(e){return Object(ke.jsx)("div",{className:"lesson-row__fromWhoms-item".concat(e.href?" link":""),onClick:function(){return e.href&&r(e.href)},children:e.title},e.href)}))})]}),Object(ke.jsx)("div",{className:"lesson-row__after"})]})},Ce=function(e){var t=e.today,n=e.lessons,r=e.onGoToSchedule,c=e.onGetStats;return Object(ke.jsx)(je.g,{className:"schedule__body",children:0===n.length?Object(ke.jsx)(je.A,{className:"schedule__empty-placeholder",icon:Object(ke.jsx)(we.a,{style:{color:"teal"}}),children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}):n.map((function(e,n){var s=e.time.map((function(e){return e.split(":").map((function(e){return+e}))})),i=t&&function(e){var t=(new Date).getTime(),n=Object(M.a)(e,2),r=n[0],c=n[1],s=Object(M.a)(r,2),i=s[0],a=s[1];if((new Date).setHours(i,a)-6e5>t)return!1;var o=Object(M.a)(c,2),u=o[0],l=o[1];return!((new Date).setHours(u,l)<t)}(s);return Object(ke.jsx)(Se,{lesson:e,onGoToSchedule:r,current:i,getStats:function(){return c&&c(e)}},n)}))})},Le=n.p+"static/media/start.56ca684e.gif",De=n.p+"static/media/pause.2c6daeb9.gif",_e=n.p+"static/media/end.f4254f8f.gif",Te=(n(123),!0),Ue=function(e){var t=e.isEnd,n=e.onHide,r=c.a.useState(Le),s=Object(M.a)(r,2),i=s[0],a=s[1],o=c.a.useState(!1),u=Object(M.a)(o,2),l=u[0],d=u[1];return c.a.useEffect((function(){t&&!Te&&l&&(a(_e),window.setTimeout(n,1550))}),[t,l]),c.a.useEffect((function(){Te=!1,window.setTimeout((function(){t||a(De),d(!0)}),1760)}),[]),Object(ke.jsx)("div",{className:"loader-wrapper",children:Object(ke.jsx)("div",{className:"loader-img-wrapper",children:Object(ke.jsx)("img",{src:i,alt:"oops..."})})})},Ee=function(e){var t,n=e.id,r=Object(l.b)(),s=Object(l.c)((function(e){return e.user})),i=s.isLoaderShowing,a=s.user,o=s.isLoading,u=s.error,d=Object(l.c)((function(e){return e.config})),f=d.currentUniver,j=d.currentWeek,b=d.currentDay,g=d.toEndDays,x=d.toEndPercent,v=d.isLoading,y=d.error,w=function(){r(m(p))},k=function(){r(m(O))},S=function(e){r(H({univer:a.univer.code,tail:e})),r(m(h))},C=c.a.useState(!1),L=Object(M.a)(C,2),D=L[0],_=L[1],T=c.a.useState(!1),U=Object(M.a)(T,2),E=U[0],A=U[1],N=c.a.useState(!1),W=Object(M.a)(N,2),q=W[0],I=W[1];if(o||v||i)t=Object(ke.jsx)(Ue,{isEnd:!o&&!v,onHide:function(){r(ie(!1))}});else if(u||y){var P=u&&u.message,G=y&&y.message;t=Object(ke.jsxs)(je.A,{stretched:!0,action:Object(ke.jsx)(je.e,{onClick:function(){u&&a&&r(Z(a.id)),y&&r(J())},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),children:[P,Object(ke.jsx)("br",{}),G]})}else if(a){var R,B,z;if(a.univer&&f&&(R=Object(ke.jsx)(ke.Fragment,{children:Object(ke.jsx)(je.k,{children:Object(ke.jsxs)(je.g,{children:[Object(ke.jsx)(je.p,{subtitle:"\u0414\u043e \u043a\u043e\u043d\u0446\u0430 \u0441\u0435\u043c\u0435\u0441\u0442\u0440\u0430 ".concat(g," \u0434\u043d. (").concat(new Date(f.endDate).toLocaleDateString(),")"),children:j?"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c":"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c"}),Object(ke.jsx)(je.B,{style:{margin:"0px 12px",background:"gray"},value:x}),Object(ke.jsx)("br",{}),Object(ke.jsx)(je.E,{}),Object(ke.jsx)(je.h,{after:Object(ke.jsx)(he.a,{}),onClick:w,children:"\u0418\u0441\u043a\u0430\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})})})),a.univer||(R=Object(ke.jsx)(je.A,{stretched:!0,icon:Object(ke.jsx)(be.a,{width:64,height:64}),action:Object(ke.jsx)(je.e,{onClick:k,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c"})),a.schedule){var Y=K(a.schedule.lessons,b,j),Q="".concat(["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][b],", ").concat((new Date).toLocaleDateString());B=Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)(je.k,{style:{paddingTop:0},children:Object(ke.jsxs)(je.g,{children:[Object(ke.jsx)(je.h,{disabled:!0,after:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(pe.a,{fill:"tomato",onClick:function(){r(ne(a.id))}})}),children:a.schedule.title}),Object(ke.jsx)(je.E,{}),Object(ke.jsx)(je.p,{subtitle:Q,children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(ke.jsx)("div",{style:{padding:"0px 8px"},children:Object(ke.jsx)(Ce,{today:!0,lessons:Y,onGoToSchedule:S})}),Object(ke.jsx)("br",{}),Object(ke.jsx)(je.E,{}),Object(ke.jsx)(je.i,{onClick:function(){return S(a.schedule.href)},children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),Object(ke.jsx)(je.k,{style:{paddingTop:0},children:Object(ke.jsxs)(je.g,{children:[Object(ke.jsx)(je.h,{onClick:function(){_(!D)},after:D?Object(ke.jsx)(ge.a,{}):Object(ke.jsx)(Oe.a,{}),children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438/\u0413\u0440\u0443\u043f\u043f\u044b"}),D&&F(a.schedule.lessons).map((function(e){return Object(ke.jsx)(je.i,{onClick:function(){return S(e.href)},children:e.title},e.href)}))]})})]})}a.univer&&!a.schedule&&(B=Object(ke.jsx)(je.k,{style:{paddingTop:0},children:Object(ke.jsx)(je.g,{children:Object(ke.jsx)(je.h,{after:Object(ke.jsx)(xe.a,{fill:"orange"}),onClick:w,children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})})})),f&&(z=Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)(je.E,{}),Object(ke.jsx)(je.k,{children:Object(ke.jsxs)(je.g,{children:[Object(ke.jsx)(je.h,{onClick:function(){A(!E)},after:E?Object(ke.jsx)(ge.a,{}):Object(ke.jsx)(Oe.a,{}),children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0435 \u043d\u0435\u0434\u0435\u043b\u0438"}),E&&Object(ke.jsx)(je.E,{}),E&&f.weeks.map((function(e,t){var n,r=new Date(e.range[0]).toLocaleDateString()+" - "+new Date(e.range[1]).toLocaleDateString(),c=(n=e.range[1],(new Date).getTime()>n);return Object(ke.jsx)(je.h,{disabled:!0,description:r,after:0===e.weekType?Object(ke.jsx)(ve.a,{fill:V(e)?"tomato":"teal"}):Object(ke.jsx)(me.a,{fill:V(e)?"tomato":"violet"}),children:Object(ke.jsx)("span",{style:{textDecoration:c?"line-through":"none",opacity:c?.5:1,color:V(e)?"tomato":""},children:0===e.weekType?"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c":"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c"})},t)}))]})}),Object(ke.jsx)(je.k,{style:{paddingTop:0},children:Object(ke.jsxs)(je.g,{children:[Object(ke.jsx)(je.h,{onClick:function(){I(!q)},after:q?Object(ke.jsx)(ge.a,{}):Object(ke.jsx)(Oe.a,{}),children:"\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043d\u044f\u0442\u0438\u0439"}),q&&Object(ke.jsx)(je.E,{}),q&&f.timeLessons.map((function(e,t){return Object(ke.jsx)(je.h,{disabled:!0,description:"".concat(t+1," \u043f\u0430\u0440\u0430"),children:e},t)}))]})})]})),t=Object(ke.jsxs)(ke.Fragment,{children:[R,B,z]})}return Object(ke.jsxs)(je.x,{id:n,children:[Object(ke.jsx)(je.y,{separator:!1,left:!(o||v||i)&&(null===a||void 0===a?void 0:a.univer)&&Object(ke.jsx)(ye.a,{onClick:k})}),t]})},He=n(139),Ae=n(140),Ne=n(141),We=n(142),qe=n(143),Ie=(n(124),[{id:0,title:"\u041f\u041d"},{id:1,title:"\u0412\u0422"},{id:2,title:"\u0421\u0420"},{id:3,title:"\u0427\u0422"},{id:4,title:"\u041f\u0422"},{id:5,title:"\u0421\u0411"}]),Pe=[{id:0,title:"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c"},{id:1,title:"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c"}],Ge=function(e){var t,n,r,s=e.id,i=e.setPopout,a=Object(l.b)(),o=Object(l.c)((function(e){return e.schedule})),u=o.isLoading,d=o.error,f=o.schedule,j=o.scheduleHistoryHrefs,h=Object(l.c)((function(e){return e.user})).user,p=Object(l.c)((function(e){return e.config})),O=p.currentUniver,g=p.currentDay,x=p.currentWeek,v=c.a.useState(g),w=Object(M.a)(v,2),k=w[0],S=w[1],C=c.a.useState(x),L=Object(M.a)(C,2),D=L[0],_=L[1],T=c.a.useState(!1),U=Object(M.a)(T,2),E=U[0],A=U[1],N=function(){A(!E)},W=function(){a(m(b)),a(I())},P=function(){A(!1),a(te({id:h.id,scheduleId:f.href}))},R=function(){A(!1),a(ne(h.id))},V=function(e){a(H({univer:h.univer.code,tail:e})),A(!1)},J=c.a.useRef(null);if(u)t=Object(ke.jsx)(je.G,{});else if(d)t=Object(ke.jsx)(je.A,{stretched:!0,action:Object(ke.jsx)(je.e,{onClick:function(){a(H(d.payload))},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),children:d.message});else if(f){var B=E?(n=f.lessons,r=h.schedule.lessons,n.filter((function(e){return!r.find((function(t){return function(e,t){var n=e.day===t.day,r=e.lesson===t.lesson,c=e.week===t.week||2===e.week||2===t.week,s=e.group===t.group||2===e.group||2===t.group;return n&&r&&c&&s}(e,t)}))}))):f.lessons;t=Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)("div",{className:"schedule__card",ref:J,children:Object(ke.jsx)(je.n,{style:{height:"100%"},slideIndex:k,onChange:function(e){return S(e)},children:Ie.map((function(e,t){var n=K(B,t,D);return Object(ke.jsx)(Ce,{today:k===g&&D===x,lessons:n,onGoToSchedule:V,onGetStats:function(e){var t=function(e){var t=e.lesson,n=e.lessons,r=e.currentUniver,c=t.subject,s=t.time,i=r.weeks,a={lec:{pass:0,total:0},pr:{pass:0,total:0},lab:{pass:0,total:0}},o=n.filter((function(e){return e.subject===c})),u=o.filter((function(e){return 0===e.week})),l=o.filter((function(e){return 1===e.week})),d=o.filter((function(e){return 2===e.week})),f=i.filter((function(e){return 0===e.weekType})).length,j=i.filter((function(e){return 1===e.weekType})).length;a.lec.total=f*u.filter((function(e){return 0===e.type})).length+j*l.filter((function(e){return 0===e.type})).length+(f+j)*d.filter((function(e){return 0===e.type})).length,a.pr.total=f*u.filter((function(e){return 1===e.type})).length+j*l.filter((function(e){return 1===e.type})).length+(f+j)*d.filter((function(e){return 1===e.type})).length,a.lab.total=f*u.filter((function(e){return 2===e.type})).length+j*l.filter((function(e){return 2===e.type})).length+(f+j)*d.filter((function(e){return 2===e.type})).length;var h=new Date,b=h.getTime(),p=i.findIndex((function(e){var t=Object(M.a)(e.range,2),n=t[0],r=t[1];return n<=b&&b<=r})),O=i.slice(0,p),g=O.filter((function(e){return 0===e.weekType})).length,x=O.filter((function(e){return 1===e.weekType})).length;a.lec.pass=g*u.filter((function(e){return 0===e.type})).length+x*l.filter((function(e){return 0===e.type})).length+(f+x)*d.filter((function(e){return 0===e.type})).length,a.pr.pass=g*u.filter((function(e){return 1===e.type})).length+x*l.filter((function(e){return 1===e.type})).length+(g+x)*d.filter((function(e){return 1===e.type})).length,a.lab.pass=g*u.filter((function(e){return 2===e.type})).length+x*l.filter((function(e){return 2===e.type})).length+(g+x)*d.filter((function(e){return 2===e.type})).length;var v=i[p];if(v){var m=h.getDay(),y=0===m?6:m-1;o.filter((function(e){if(e.week!==v.weekType&&2!==e.week)return!1;if(e.day<y)return!0;if(e.day===y){var t=h.getTime(),n=Object(M.a)(s,2),r=n[0],c=n[1],i=r.split(":").map((function(e){return+e})),a=Object(M.a)(i,2),o=a[0],u=a[1];if(new Date(t).setHours(o,u)>t)return!1;var l=c.split(":").map((function(e){return+e})),d=Object(M.a)(l,2),f=d[0],j=d[1];return!(t>new Date(t).setHours(f,j))}return!1})).forEach((function(e){var t=["lec","pr","lab"][e.type];a[t].pass++}))}var w=F(o);return{stats:a,fromWhoms:w}}({lesson:e,lessons:f.lessons,currentUniver:O}),n=t.stats,r=t.fromWhoms;a(G({title:e.subject,stats:n,fromWhoms:r})),a(y("stats"))}},t)}))})}),Object(ke.jsxs)(je.g,{style:{marginTop:8},children:[Object(ke.jsx)(je.H,{children:Pe.map((function(e){return Object(ke.jsx)(je.I,{selected:e.id===D,onClick:function(){return _(e.id)},style:{color:x===e.id?"tomato":""},children:e.title},e.id)}))}),Object(ke.jsx)(je.H,{children:Ie.map((function(e){return Object(ke.jsx)(je.I,{selected:e.id===k,onClick:function(){return S(e.id)},style:{color:g===e.id?"tomato":""},children:e.title},e.id)}))}),Object(ke.jsxs)(je.F,{disabled:!0,before:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(Ne.a,{onClick:function(){1===j.length?W():(a(q()),A(!1))},width:20,style:{marginRight:12,color:"teal"}})}),after:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(We.a,{onClick:function(){var e=h.schedule&&h.schedule.href===f.href?Object(ke.jsx)(je.b,{autoclose:!0,style:{color:"tomato"},onClick:R,before:Object(ke.jsx)(pe.a,{fill:"tomato"}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}):Object(ke.jsx)(je.b,{autoclose:!0,onClick:P,before:Object(ke.jsx)(He.a,{}),subtitle:h.schedule?"\u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e":"",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),t=Object(ke.jsxs)(je.a,{onClose:function(){return i(null)},iosCloseItem:Object(ke.jsx)(je.b,{autoclose:!0,mode:"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),children:[!1,h.schedule&&!(h.schedule.href===f.href)&&Object(ke.jsx)(je.b,{autoclose:!0,style:{color:"teal"},before:Object(ke.jsx)(Ae.a,{fill:E?"tomato":"orange",style:{transform:"rotateY(".concat(E?0:180,"deg)")}}),subtitle:E?"\u0412\u0441\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f":"\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0432\u043d\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f",onClick:N,children:E?"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0435\u0437 \u0440\u0430\u0437\u043d\u0438\u0446\u044b":"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0439"}),e]});i(t)},width:20,style:{color:"violet"}})}),children:[Object(ke.jsx)(je.r,{href:"".concat(h.univer.baseUrl).concat(f.href),children:f.title}),E&&Object(ke.jsx)(Ae.a,{className:"schedule__icon--diff"}),(null===h||void 0===h?void 0:h.schedule)&&h.schedule.href===f.href&&Object(ke.jsx)(He.a,{className:"schedule__icon--fav"})]})]})]})}return Object(ke.jsxs)(je.x,{id:s,children:[Object(ke.jsx)(je.y,{separator:!1,left:Object(ke.jsx)(qe.a,{onClick:W})}),Object(ke.jsx)(je.k,{className:"schedule__wrapper",children:t})]})},Re=function(e){var t=e.id,n=Object(l.b)(),r=Object(l.c)((function(e){return e.schedule})),s=r.isSearchLoading,i=r.searchedSchedules,a=Object(l.c)((function(e){return e.user})).user,o=c.a.useState(""),u=Object(M.a)(o,2),d=u[0],f=u[1],j=c.a.useRef(null);c.a.useEffect((function(){return window.setTimeout((function(){j.current&&j.current.focus()}),100),function(){n(P())}}),[]);var p=c.a.useState(d),O=Object(M.a)(p,2),g=O[0],x=O[1];c.a.useEffect((function(){var e=window.setTimeout((function(){x(d)}),300);return function(){window.clearTimeout(e)}}),[d]),c.a.useEffect((function(){g&&n(A({univer:a.univer.code,q:g}))}),[g]);var v;return v=s?Object(ke.jsx)(je.G,{}):0===i.length?Object(ke.jsx)(je.A,{icon:Object(ke.jsx)(we.a,{style:{color:"teal"}}),children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):Object(ke.jsxs)(ke.Fragment,{children:[i.map((function(e,t){return Object(ke.jsx)(je.i,{onClick:function(){return function(e){n(H({univer:a.univer.code,tail:e.href})),n(m(h))}(e)},children:e.title},t)})),Object(ke.jsx)("div",{style:{textAlign:"center"},children:"\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0438\u043b\u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043d\u0443\u0436\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(ke.jsxs)(je.x,{id:t,children:[Object(ke.jsx)(je.y,{separator:!1,left:Object(ke.jsx)(je.z,{onClick:function(){n(m(b))}}),children:"\u041f\u043e\u0438\u0441\u043a"}),Object(ke.jsx)(je.l,{style:{paddingTop:24},vertical:"top",filled:!0,children:Object(ke.jsx)(je.D,{getRef:j,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f",after:null,value:d,onChange:function(e){var t=e.target.value;f(t),t||n(P())}})}),Object(ke.jsx)(je.k,{style:{marginTop:70},children:v})]})},Me=function(e){var t,n,r=e.id,s=Object(l.b)(),i=Object(l.c)((function(e){return e.config})).univerList,a=Object(l.c)((function(e){return e.user})).user,o=null!==(t=null===a||void 0===a||null===(n=a.univer)||void 0===n?void 0:n.id)&&void 0!==t?t:"",u=c.a.useState(""+o),d=Object(M.a)(u,2),f=d[0],j=d[1];return Object(ke.jsxs)(je.x,{id:r,children:[Object(ke.jsx)(je.y,{separator:!1,left:Object(ke.jsx)(je.z,{onClick:function(){s(m(b))}}),children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(ke.jsxs)(je.o,{header:Object(ke.jsx)(je.p,{mode:"secondary",children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"}),children:[Object(ke.jsx)(je.m,{top:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",bottom:"\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430, \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u0441\u044f!",children:Object(ke.jsx)(je.w,{placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",value:f,onChange:function(e){j(e.target.value)},children:i.map((function(e){return Object(ke.jsx)("option",{value:e.id,children:e.subtitle},e.code)}))})}),Object(ke.jsx)(je.k,{style:{paddingTop:0},children:Object(ke.jsx)(je.e,{disabled:""+o===f,style:{width:"100%"},size:"l",onClick:function(){""+o!==f&&s(""===f?ee(a.id):$({id:a.id,univerId:+f}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})},Ke=n(144),Fe=n(145),Ve=n(146),Je=n(147),Be=(n(125),function(e){var t=e.closeModal,n=Object(je.K)();return Object(ke.jsxs)("div",{children:[Object(ke.jsx)(je.h,{before:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(Ke.a,{style:{marginRight:8,padding:0},fill:"orange"})}),description:"\u041c\u0438\u043d\u0438-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f > \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onClick:function(){t(),o.a.send("VKWebAppAddToFavorites").then(console.log).catch(console.log)},children:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c"}),Object(ke.jsx)(je.h,{before:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(Fe.a,{style:{marginRight:8,padding:0},fill:"var(--accent)"})}),description:"\u0428\u0430\u043f\u043a\u0430 \u0433\u0440\u0443\u043f\u043f\u044b",onClick:function(){t(),o.a.send("VKWebAppJoinGroup",{group_id:j}).then(console.log).catch(console.log)},children:"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"}),"android"===n&&Object(ke.jsx)(je.h,{before:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(Ve.a,{style:{marginRight:8,padding:0},fill:"tan"})}),description:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0441 \u0434\u043e\u043c. \u044d\u043a\u0440\u0430\u043d\u0430",onClick:function(){t(),o.a.send("VKWebAppAddToHomeScreen").then(console.log).catch(console.log)},children:"\u041d\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u044d\u043a\u0440\u0430\u043d"}),Object(ke.jsx)(je.h,{before:Object(ke.jsx)(je.q,{children:Object(ke.jsx)(Je.a,{style:{marginRight:8},fill:"teal"})}),description:"\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",onClick:function(){t(),o.a.send("VKWebAppShare",{link:"https://vk.com/app7908078"}).then(console.log).catch(console.log)},children:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c"})]})}),ze=n(128),Ye=(n(126),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navigation})).activeModal,n=Object(l.c)((function(e){return e.schedule})).lessonStats,r=Object(l.c)((function(e){return e.user})).user,c=Object(l.c)((function(e){return e.config})).currentUniver,s=function(){e(y(null))};return Object(ke.jsxs)(je.v,{activeModal:t,onClose:s,children:[Object(ke.jsx)(je.s,{id:"actions",header:"\u041d\u0435 \u0442\u0435\u0440\u044f\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",subheader:"\u0422.\u043a. \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u043d\u0430\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0438\u0441\u043a \u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f. \u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u0442\u044c \u0435\u0433\u043e, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u043b\u044e\u0431\u044b\u043c \u0443\u0434\u043e\u043c\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c:",icon:Object(ke.jsx)(je.d,{size:72}),children:Object(ke.jsx)(Be,{closeModal:s})}),Object(ke.jsxs)(je.t,{id:"stats",children:[Object(ke.jsx)(je.u,{right:Object(ke.jsx)(ze.a,{onClick:s,style:{marginRight:8}}),children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),n&&Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)(je.k,{children:Object(ke.jsx)(je.g,{children:Object(ke.jsx)(je.k,{children:n.title})})}),Object(ke.jsx)(je.k,{style:{paddingTop:"0px 12px"},children:c&&Object(ke.jsxs)(je.f,{level:"2",weight:"regular",style:{opacity:.5},children:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443, \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e! \u0422.\u043a. \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430, \u043f\u0435\u0440\u0432\u044b\u043c \u0434\u043d\u0435\u043c \u043f\u0440\u0438\u043d\u044f\u0442 ",new Date(c.startDateStartOfWeek).toLocaleDateString(),", \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c ",new Date(c.endDate).toLocaleDateString(),"."]})}),Object(ke.jsx)(je.k,{style:{padding:"0px 12px"},children:Object.entries(n.stats).map((function(e){var t=Object(M.a)(e,2),n=t[0],r=t[1],c=r.pass,s=r.total;if(0===s)return null;var i={lec:"\u041b\u0435\u043a\u0446\u0438\u044f",pr:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",lab:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f"}[n];return Object(ke.jsxs)("div",{className:"stats__item",children:[Object(ke.jsxs)(je.p,{children:[i,Object(ke.jsxs)("span",{className:"stats__secondary",children:[c,"/",s]})]}),Object(ke.jsx)(je.B,{className:"stats__progress--".concat(n),style:{margin:"0px 12px 8px 12px"},value:c/s*100})]},n)}))}),Object(ke.jsxs)(je.k,{children:[Object(ke.jsx)(je.p,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 / \u0433\u0440\u0443\u043f\u043f\u044b"}),n.fromWhoms.map((function(t){return Object(ke.jsx)(je.i,{onClick:function(){return n=t.href,e(H({univer:r.univer.code,tail:n})),void s();var n},children:t.title},t.href)}))]})]})]})]})}),Qe=!0,Xe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navigation})),n=t.activePanel,r=t.history,s=Object(l.c)((function(e){return e.user})),i=s.isLoaderShowing,a=s.user,u=s.isLoading,d=s.error,f=s.isUniverLoading,g=s.isScheduleLoading,x=Object(l.c)((function(e){return e.config})),v=x.config,m=x.isLoading,w=x.error,k=Object(je.K)();c.a.useEffect((function(){document.body.setAttribute("scheme","space_gray");var t=window.location.search.slice(1).split("&").reduce((function(e,t){var n=t.split("="),r=Object(M.a)(n,2),c=r[0],s=r[1];return Object(fe.a)(Object(fe.a)({},e),{},Object(de.a)({},c.slice(3),"1"===s))}),{});e(Q(t))}),[]);var L=c.a.useState(null),D=Object(M.a)(L,2),_=D[0],T=D[1],U=function(e){T(e)};return c.a.useEffect((function(){a||function(){var t=Object(C.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(se(n={id:0})),e(J()),e(Z(n.id));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),c.a.useEffect((function(){a&&(a.univer?e(Y(a.univer)):e(Y(null)))}),[a]),c.a.useEffect((function(){T(f||g?Object(ke.jsx)(je.C,{}):null)}),[f,g]),c.a.useEffect((function(){m||u||Qe||d||w||i||function(){var t=Object(C.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("android"!==k){t.next=6;break}return t.next=3,o.a.send("VKWebAppAddToHomeScreenInfo");case 3:if(!(n=t.sent).is_feature_supported||!n.is_added_to_home_screen){t.next=6;break}return t.abrupt("return");case 6:if(!v.is_favorite){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,o.a.send("VKWebAppGetGroupInfo",{group_id:j});case 10:if(!t.sent.is_member){t.next=13;break}return t.abrupt("return");case 13:e(y("actions"));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Qe=!1}),[m,u,i]),Object(ke.jsx)(je.j,{isWebView:!0,children:Object(ke.jsx)(je.c,{children:Object(ke.jsxs)(je.J,{popout:_,modal:Object(ke.jsx)(Ye,{}),activePanel:n,history:r,children:[Object(ke.jsx)(Ee,{id:b}),Object(ke.jsx)(Me,{id:O,setPopout:U}),Object(ke.jsx)(Re,{id:p}),Object(ke.jsx)(Ge,{id:h,setPopout:U})]})})})};o.a.send("VKWebAppInit"),o.a.subscribe((function(e){"VKWebAppUpdateConfig"===e.detail.type&&document.body.setAttribute("scheme",e.detail.data.scheme)})),i.a.render(Object(ke.jsx)(l.a,{store:le,children:Object(ke.jsx)(Xe,{})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.103026cc.chunk.js.map