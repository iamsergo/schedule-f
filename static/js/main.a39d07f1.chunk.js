(this["webpackJsonpschedule-f"]=this["webpackJsonpschedule-f"]||[]).push([[0],{109:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(27),i=n.n(s),a=n(23),o=n.n(a),u=(n(103),n(20)),l=n(12),d=n(25),j="https://schedule-all-univers.herokuapp.com",f=198278031,h="schedule",b="main",p="search",O="settings",g={activePanel:b,history:[b],activeModal:null},x=Object(u.c)({name:"navigation",initialState:g,reducers:{setActivePanel:function(e,t){e.activePanel=t.payload},setActiveModal:function(e,t){e.activeModal=t.payload}}}),v=x.actions,y=v.setActivePanel,m=v.setActiveModal,w=x.reducer,k=n(15),S=n.n(k),C=n(22),L={getSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.univer,r=t.tail,c=new URLSearchParams("tail=".concat(r)).toString(),s=[j,"schedule",n].join("/")+"?"+c,e.next=5,fetch(s);case 5:return i=e.sent,e.next=8,i.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),searchSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.univer,r=t.q,c=[j,"schedule/search",n,r].join("/"),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D={getUniverList:function(){var e=Object(C.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[j,"univers"].join("/"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},_=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[j,"users",t].join("/"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s,i,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.univerId,c=[j,"users",n,"univer"].join("/"),s={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({univerId:r})},e.next=5,fetch(c,s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[j,"users",t,"univer"].join("/"),r={method:"DELETE"},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E={schedule:L,config:D,user:{getUser:_,updateUserSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s,i,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.scheduleId,c=[j,"users",n,"schedule"].join("/"),s={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({scheduleId:r})},e.next=5,fetch(c,s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUserSchedule:function(){var e=Object(C.a)(S.a.mark((function e(t){var n,r,c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[j,"users",t,"schedule"].join("/"),r={method:"DELETE"},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUserUniver:T,deleteUserUniver:U}},H=Object(u.b)("schedule/request",function(){var e=Object(C.a)(S.a.mark((function e(t,n){var r,c,s,i,a,o,u,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.univer,s=t.tail,i=n.getState(),a=i.schedule.scheduleHistory,o=null===(r=i.user.user)||void 0===r?void 0:r.schedule,!(u=a.find((function(e){return e.id===s})))){e.next=9;break}return e.abrupt("return",{record:u,isUniq:!1});case 9:if(!o||o.href!==s){e.next=13;break}return e.abrupt("return",{record:{id:s,data:o},isUniq:!0});case 13:return e.next=15,E.schedule.getSchedule({univer:c,tail:s});case 15:return l=e.sent,e.abrupt("return",{record:{id:s,data:l},isUniq:!0});case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(u.b)("schedule/search/request",E.schedule.searchSchedule),W=Object(u.c)({name:"schedule",initialState:{isLoading:!1,error:null,schedule:null,lessonStats:null,scheduleHistory:[],scheduleHistoryHrefs:[],q:"",isSearchLoading:!1,searchError:null,searchedSchedules:[]},reducers:{scheduleHistoryBack:function(e){e.scheduleHistoryHrefs.pop();var t=e.scheduleHistoryHrefs[e.scheduleHistoryHrefs.length-1];if(t){var n=e.scheduleHistory.find((function(e){return e.id===t}));e.schedule=n.data}else e.schedule=null},clearScheduleHistory:function(e){e.scheduleHistoryHrefs=[],e.schedule=null},clearSearchedSchedules:function(e){e.searchedSchedules=[]},setLessonStats:function(e,t){e.lessonStats=t.payload}},extraReducers:function(e){e.addCase(H.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(H.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f :(",payload:t.meta.arg}})).addCase(H.fulfilled,(function(e,t){e.isLoading=!1,e.error=null;var n=t.payload,r=n.isUniq,c=n.record;r&&e.scheduleHistory.push(c),e.scheduleHistoryHrefs.push(c.id),e.schedule=c.data})).addCase(A.pending,(function(e){e.isSearchLoading=!0,e.searchError=null})).addCase(A.rejected,(function(e,t){e.isSearchLoading=!1,e.searchError={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f :(",payload:t.meta.arg}})).addCase(A.fulfilled,(function(e,t){e.isSearchLoading=!1,e.searchError=null,e.searchedSchedules=t.payload}))}}),N=W.actions,q=N.scheduleHistoryBack,I=N.clearScheduleHistory,P=N.clearSearchedSchedules,G=N.setLessonStats,R=W.reducer,M=n(14),K=function(e,t,n){return e.filter((function(e){var r=e.day===t,c=e.week===n||2===e.week;return r&&c}))},F=function(e){var t={};return e.forEach((function(e){e.fromWhoms.forEach((function(e){t[e.href]||(t[e.href]=e)}))})),Object.values(t)},V=function(e){var t=(new Date).getTime(),n=Object(M.a)(e.range,2),r=n[0],c=n[1];return r<=t&&t<=c},J=Object(u.b)("config/univers",E.config.getUniverList),B=Object(u.c)({name:"config",initialState:{isLoading:!1,error:null,univerList:[],currentUniver:null,passDays:0,countDays:0,toEndDays:0,toEndPercent:0,currentDay:0,currentWeek:0,config:{}},reducers:{setCurrentUniver:function(e,t){var n=t.payload;if(n){n=e.univerList.find((function(e){return e.id===n.id})),e.currentUniver=n,e.currentDay=function(){var e=(new Date).getDay();return e>0?e-1:e}(),e.currentWeek=function(e){var t=e.find((function(e){return V(e)}));return t?t.weekType:0}(n.weeks);var r=function(e,t){var n=864e5,r=(new Date).getTime(),c=new Date(e).getTime(),s=new Date(t).getTime(),i=Math.ceil((s-c)/n);return{passDays:Math.ceil((r-c)/n),countDays:i,toEndDays:Math.ceil((s-r)/n)}}(n.startDate,n.endDate),c=r.passDays,s=r.countDays,i=r.toEndDays;e.countDays=s,e.passDays=c,e.toEndDays=i,e.toEndPercent=c/s*100}else e.currentUniver=null},setConfig:function(e,t){e.config=t.payload}},extraReducers:function(e){e.addCase(J.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(J.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043e\u0432 :(",payload:t.meta.arg}})).addCase(J.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.univerList=t.payload}))}}),z=B.actions,Y=z.setCurrentUniver,Q=z.setConfig,X=B.reducer,Z=Object(u.b)("user/request",E.user.getUser),$=Object(u.b)("user/update/univer",E.user.updateUserUniver),ee=Object(u.b)("user/delete/univer",E.user.deleteUserUniver),te=Object(u.b)("user/update/schedule",E.user.updateUserSchedule),ne=Object(u.b)("user/delete/schedule",E.user.deleteUserSchedule),re=Object(u.c)({name:"user",initialState:{isLoading:!1,isLoaderShowing:!0,isUniverLoading:!1,isScheduleLoading:!1,error:null,user:null,userData:null},reducers:{setUserData:function(e,t){e.userData=t.payload},setIsLoaderShowing:function(e,t){e.isLoaderShowing=t.payload}},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(Z.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(Z.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.user=t.payload})).addCase($.pending,(function(e){e.isUniverLoading=!0,e.error=null})).addCase($.rejected,(function(e,t){e.isUniverLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase($.fulfilled,(function(e,t){e.isUniverLoading=!1,e.error=null,e.user=t.payload})).addCase(ee.pending,(function(e){e.isUniverLoading=!0,e.error=null})).addCase(ee.rejected,(function(e,t){e.isUniverLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(ee.fulfilled,(function(e,t){e.isUniverLoading=!1,e.error=null,e.user=t.payload})).addCase(te.pending,(function(e){e.isScheduleLoading=!0,e.error=null})).addCase(te.rejected,(function(e,t){e.isScheduleLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(te.fulfilled,(function(e,t){e.isScheduleLoading=!1,e.error=null,e.user=t.payload})).addCase(ne.pending,(function(e){e.isScheduleLoading=!0,e.error=null})).addCase(ne.rejected,(function(e,t){e.isScheduleLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(ne.fulfilled,(function(e,t){e.isScheduleLoading=!1,e.error=null,e.user=t.payload}))}}),ce=re.actions,se=ce.setUserData,ie=(ce.setIsLoaderShowing,re.reducer),ae=Object(d.b)({navigation:w,schedule:R,config:X,user:ie}),oe=Object(u.a)({reducer:ae}),ue=oe,le=(n(109),n(28)),de=n(32),je=n(5),fe=n(129),he=n(130),be=n(131),pe=n(132),Oe=n(133),ge=n(134),xe=n(135),ve=n(136),ye=n(137),me=n(128),we=(n(121),n(1)),ke=function(e){var t=e.current,n=e.lesson,r=e.onGoToSchedule,c=e.getStats;return Object(we.jsxs)("div",{className:"lesson-row".concat(t?" lesson-row--current":""),children:[Object(we.jsx)("div",{className:"lesson-row__time",children:n.time.map((function(e,t){return Object(we.jsx)("div",{className:"lesson-row__time-item lesson-row__time-item--".concat(0===t?"start":"end"),children:e},e)}))}),Object(we.jsxs)("div",{className:"lesson-row__body lesson-row__body--".concat(n.type),children:[n.typeTitle&&Object(we.jsxs)("div",{className:"lesson-row__place",children:[Object(we.jsx)("span",{className:"lesson-row__type-title--".concat(n.type),children:n.typeTitle}),n.place]}),Object(we.jsxs)("div",{onClick:function(){return c&&c()},className:"lesson-row__subject",children:[n.subject," ",2!==n.group&&"(".concat(n.group+1,"\u0433\u0440.)")]}),Object(we.jsx)("div",{className:"lesson-row__fromWhoms",children:n.fromWhoms.map((function(e){return Object(we.jsx)("div",{className:"lesson-row__fromWhoms-item".concat(e.href?" link":""),onClick:function(){return e.href&&r(e.href)},children:e.title},e.href)}))})]}),Object(we.jsx)("div",{className:"lesson-row__after"})]})},Se=function(e){var t=e.today,n=e.lessons,r=e.onGoToSchedule,c=e.onGetStats;return Object(we.jsx)(je.g,{className:"schedule__body",children:0===n.length?Object(we.jsx)(je.A,{className:"schedule__empty-placeholder",icon:Object(we.jsx)(me.a,{style:{color:"teal"}}),children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}):n.map((function(e,n){var s=e.time.map((function(e){return e.split(":").map((function(e){return+e}))})),i=t&&function(e){var t=(new Date).getTime(),n=Object(M.a)(e,2),r=n[0],c=n[1],s=Object(M.a)(r,2),i=s[0],a=s[1];if((new Date).setHours(i,a)-6e5>t)return!1;var o=Object(M.a)(c,2),u=o[0],l=o[1];return!((new Date).setHours(u,l)<t)}(s);return Object(we.jsx)(ke,{lesson:e,onGoToSchedule:r,current:i,getStats:function(){return c&&c(e)}},n)}))})},Ce=function(e){var t,n=e.id,r=Object(l.b)(),s=Object(l.c)((function(e){return e.user})),i=(s.isLoaderShowing,s.user),a=s.isLoading,o=s.error,u=Object(l.c)((function(e){return e.config})),d=u.currentUniver,j=u.currentWeek,f=u.currentDay,b=u.toEndDays,g=u.toEndPercent,x=u.isLoading,v=u.error,m=function(){r(y(p))},w=function(){r(y(O))},k=function(e){r(H({univer:i.univer.code,tail:e})),r(y(h))},S=c.a.useState(!1),C=Object(M.a)(S,2),L=C[0],D=C[1],_=c.a.useState(!1),T=Object(M.a)(_,2),U=T[0],E=T[1],A=c.a.useState(!1),W=Object(M.a)(A,2),N=W[0],q=W[1];if(a||x)t=Object(we.jsx)(je.G,{style:{paddingTop:"20vh"}});else if(o||v){var I=o&&o.message,P=v&&v.message;t=Object(we.jsxs)(je.A,{stretched:!0,action:Object(we.jsx)(je.e,{onClick:function(){o&&i&&r(Z(i.id)),v&&r(J())},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),children:[I,Object(we.jsx)("br",{}),P]})}else if(i){var G,R,B;if(i.univer&&d&&(G=Object(we.jsx)(we.Fragment,{children:Object(we.jsx)(je.k,{children:Object(we.jsxs)(je.g,{children:[Object(we.jsx)(je.p,{subtitle:"\u0414\u043e \u043a\u043e\u043d\u0446\u0430 \u0441\u0435\u043c\u0435\u0441\u0442\u0440\u0430 ".concat(b," \u0434\u043d. (").concat(new Date(d.endDate).toLocaleDateString(),")"),children:j?"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c":"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c"}),Object(we.jsx)(je.B,{style:{margin:"0px 12px",background:"gray"},value:g}),Object(we.jsx)("br",{}),Object(we.jsx)(je.E,{}),Object(we.jsx)(je.h,{after:Object(we.jsx)(fe.a,{}),onClick:m,children:"\u0418\u0441\u043a\u0430\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})})})),i.univer||(G=Object(we.jsx)(je.A,{stretched:!0,icon:Object(we.jsx)(he.a,{width:64,height:64}),action:Object(we.jsx)(je.e,{onClick:w,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c"})),i.schedule){var z=K(i.schedule.lessons,f,j),Y="".concat(["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][f],", ").concat((new Date).toLocaleDateString());R=Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(je.k,{style:{paddingTop:0},children:Object(we.jsxs)(je.g,{children:[Object(we.jsx)(je.h,{disabled:!0,after:Object(we.jsx)(je.q,{children:Object(we.jsx)(be.a,{fill:"tomato",onClick:function(){r(ne(i.id))}})}),children:i.schedule.title}),Object(we.jsx)(je.E,{}),Object(we.jsx)(je.p,{subtitle:Y,children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(we.jsx)("div",{style:{padding:"0px 8px"},children:Object(we.jsx)(Se,{today:!0,lessons:z,onGoToSchedule:k})}),Object(we.jsx)("br",{}),Object(we.jsx)(je.E,{}),Object(we.jsx)(je.i,{onClick:function(){return k(i.schedule.href)},children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),Object(we.jsx)(je.k,{style:{paddingTop:0},children:Object(we.jsxs)(je.g,{children:[Object(we.jsx)(je.h,{onClick:function(){D(!L)},after:L?Object(we.jsx)(Oe.a,{}):Object(we.jsx)(pe.a,{}),children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438/\u0413\u0440\u0443\u043f\u043f\u044b"}),L&&F(i.schedule.lessons).map((function(e){return Object(we.jsx)(je.i,{onClick:function(){return k(e.href)},children:e.title},e.href)}))]})})]})}i.univer&&!i.schedule&&(R=Object(we.jsx)(je.k,{style:{paddingTop:0},children:Object(we.jsx)(je.g,{children:Object(we.jsx)(je.h,{after:Object(we.jsx)(ge.a,{fill:"orange"}),onClick:m,children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})})})),d&&(B=Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(je.E,{}),Object(we.jsx)(je.k,{children:Object(we.jsxs)(je.g,{children:[Object(we.jsx)(je.h,{onClick:function(){E(!U)},after:U?Object(we.jsx)(Oe.a,{}):Object(we.jsx)(pe.a,{}),children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0435 \u043d\u0435\u0434\u0435\u043b\u0438"}),U&&Object(we.jsx)(je.E,{}),U&&d.weeks.map((function(e,t){var n,r=new Date(e.range[0]).toLocaleDateString()+" - "+new Date(e.range[1]).toLocaleDateString(),c=(n=e.range[1],(new Date).getTime()>n);return Object(we.jsx)(je.h,{disabled:!0,description:r,after:0===e.weekType?Object(we.jsx)(xe.a,{fill:V(e)?"tomato":"teal"}):Object(we.jsx)(ve.a,{fill:V(e)?"tomato":"violet"}),children:Object(we.jsx)("span",{style:{textDecoration:c?"line-through":"none",opacity:c?.5:1,color:V(e)?"tomato":""},children:0===e.weekType?"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c":"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c"})},t)}))]})}),Object(we.jsx)(je.k,{style:{paddingTop:0},children:Object(we.jsxs)(je.g,{children:[Object(we.jsx)(je.h,{onClick:function(){q(!N)},after:N?Object(we.jsx)(Oe.a,{}):Object(we.jsx)(pe.a,{}),children:"\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043d\u044f\u0442\u0438\u0439"}),N&&Object(we.jsx)(je.E,{}),N&&d.timeLessons.map((function(e,t){return Object(we.jsx)(je.h,{disabled:!0,description:"".concat(t+1," \u043f\u0430\u0440\u0430"),children:e},t)}))]})})]})),t=Object(we.jsxs)(we.Fragment,{children:[G,R,B]})}return Object(we.jsxs)(je.x,{id:n,children:[Object(we.jsx)(je.y,{separator:!1,left:!(a||x)&&(null===i||void 0===i?void 0:i.univer)&&Object(we.jsx)(ye.a,{onClick:w})}),t]})},Le=n(138),De=n(139),_e=n(140),Te=n(141),Ue=n(142),Ee=(n(123),[{id:0,title:"\u041f\u041d"},{id:1,title:"\u0412\u0422"},{id:2,title:"\u0421\u0420"},{id:3,title:"\u0427\u0422"},{id:4,title:"\u041f\u0422"},{id:5,title:"\u0421\u0411"}]),He=[{id:0,title:"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c"},{id:1,title:"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c"}],Ae=function(e){var t,n,r,s=e.id,i=e.setPopout,a=Object(l.b)(),o=Object(l.c)((function(e){return e.schedule})),u=o.isLoading,d=o.error,j=o.schedule,f=o.scheduleHistoryHrefs,h=Object(l.c)((function(e){return e.user})).user,p=Object(l.c)((function(e){return e.config})),O=p.currentUniver,g=p.currentDay,x=p.currentWeek,v=c.a.useState(g),w=Object(M.a)(v,2),k=w[0],S=w[1],C=c.a.useState(x),L=Object(M.a)(C,2),D=L[0],_=L[1],T=c.a.useState(!1),U=Object(M.a)(T,2),E=U[0],A=U[1],W=function(){A(!E)},N=function(){a(y(b)),a(I())},P=function(){A(!1),a(te({id:h.id,scheduleId:j.href}))},R=function(){A(!1),a(ne(h.id))},V=function(e){a(H({univer:h.univer.code,tail:e})),A(!1)},J=c.a.useRef(null);if(u)t=Object(we.jsx)(je.G,{});else if(d)t=Object(we.jsx)(je.A,{stretched:!0,action:Object(we.jsx)(je.e,{onClick:function(){a(H(d.payload))},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),children:d.message});else if(j){var B=E?(n=j.lessons,r=h.schedule.lessons,n.filter((function(e){return!r.find((function(t){return function(e,t){var n=e.day===t.day,r=e.lesson===t.lesson,c=e.week===t.week||2===e.week||2===t.week,s=e.group===t.group||2===e.group||2===t.group;return n&&r&&c&&s}(e,t)}))}))):j.lessons;t=Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)("div",{className:"schedule__card",ref:J,children:Object(we.jsx)(je.n,{style:{height:"100%"},slideIndex:k,onChange:function(e){return S(e)},children:Ee.map((function(e,t){var n=K(B,t,D);return Object(we.jsx)(Se,{today:k===g&&D===x,lessons:n,onGoToSchedule:V,onGetStats:function(e){var t=function(e){var t=e.lesson,n=e.lessons,r=e.currentUniver,c=t.subject,s=t.time,i=r.weeks,a={lec:{pass:0,total:0},pr:{pass:0,total:0},lab:{pass:0,total:0}},o=n.filter((function(e){return e.subject===c})),u=o.filter((function(e){return 0===e.week})),l=o.filter((function(e){return 1===e.week})),d=o.filter((function(e){return 2===e.week})),j=i.filter((function(e){return 0===e.weekType})).length,f=i.filter((function(e){return 1===e.weekType})).length;a.lec.total=j*u.filter((function(e){return 0===e.type})).length+f*l.filter((function(e){return 0===e.type})).length+(j+f)*d.filter((function(e){return 0===e.type})).length,a.pr.total=j*u.filter((function(e){return 1===e.type})).length+f*l.filter((function(e){return 1===e.type})).length+(j+f)*d.filter((function(e){return 1===e.type})).length,a.lab.total=j*u.filter((function(e){return 2===e.type})).length+f*l.filter((function(e){return 2===e.type})).length+(j+f)*d.filter((function(e){return 2===e.type})).length;var h=new Date,b=h.getTime(),p=i.findIndex((function(e){var t=Object(M.a)(e.range,2),n=t[0],r=t[1];return n<=b&&b<=r})),O=i.slice(0,p),g=O.filter((function(e){return 0===e.weekType})).length,x=O.filter((function(e){return 1===e.weekType})).length;a.lec.pass=g*u.filter((function(e){return 0===e.type})).length+x*l.filter((function(e){return 0===e.type})).length+(j+x)*d.filter((function(e){return 0===e.type})).length,a.pr.pass=g*u.filter((function(e){return 1===e.type})).length+x*l.filter((function(e){return 1===e.type})).length+(g+x)*d.filter((function(e){return 1===e.type})).length,a.lab.pass=g*u.filter((function(e){return 2===e.type})).length+x*l.filter((function(e){return 2===e.type})).length+(g+x)*d.filter((function(e){return 2===e.type})).length;var v=i[p];if(v){var y=h.getDay(),m=0===y?6:y-1;o.filter((function(e){if(e.week!==v.weekType&&2!==e.week)return!1;if(e.day<m)return!0;if(e.day===m){var t=h.getTime(),n=Object(M.a)(s,2),r=n[0],c=n[1],i=r.split(":").map((function(e){return+e})),a=Object(M.a)(i,2),o=a[0],u=a[1];if(new Date(t).setHours(o,u)>t)return!1;var l=c.split(":").map((function(e){return+e})),d=Object(M.a)(l,2),j=d[0],f=d[1];return!(t>new Date(t).setHours(j,f))}return!1})).forEach((function(e){var t=["lec","pr","lab"][e.type];a[t].pass++}))}var w=F(o);return{stats:a,fromWhoms:w}}({lesson:e,lessons:j.lessons,currentUniver:O}),n=t.stats,r=t.fromWhoms;a(G({title:e.subject,stats:n,fromWhoms:r})),a(m("stats"))}},t)}))})}),Object(we.jsxs)(je.g,{style:{marginTop:8},children:[Object(we.jsx)(je.H,{children:He.map((function(e){return Object(we.jsx)(je.I,{selected:e.id===D,onClick:function(){return _(e.id)},style:{color:x===e.id?"tomato":""},children:e.title},e.id)}))}),Object(we.jsx)(je.H,{children:Ee.map((function(e){return Object(we.jsx)(je.I,{selected:e.id===k,onClick:function(){return S(e.id)},style:{color:g===e.id?"tomato":""},children:e.title},e.id)}))}),Object(we.jsxs)(je.F,{disabled:!0,before:Object(we.jsx)(je.q,{children:Object(we.jsx)(_e.a,{onClick:function(){1===f.length?N():(a(q()),A(!1))},width:20,style:{marginRight:12,color:"teal"}})}),after:Object(we.jsx)(je.q,{children:Object(we.jsx)(Te.a,{onClick:function(){var e=h.schedule&&h.schedule.href===j.href?Object(we.jsx)(je.b,{autoclose:!0,style:{color:"tomato"},onClick:R,before:Object(we.jsx)(be.a,{fill:"tomato"}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}):Object(we.jsx)(je.b,{autoclose:!0,onClick:P,before:Object(we.jsx)(Le.a,{}),subtitle:h.schedule?"\u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e":"",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),t=Object(we.jsxs)(je.a,{onClose:function(){return i(null)},iosCloseItem:Object(we.jsx)(je.b,{autoclose:!0,mode:"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),children:[!1,h.schedule&&!(h.schedule.href===j.href)&&Object(we.jsx)(je.b,{autoclose:!0,style:{color:"teal"},before:Object(we.jsx)(De.a,{fill:E?"tomato":"orange",style:{transform:"rotateY(".concat(E?0:180,"deg)")}}),subtitle:E?"\u0412\u0441\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f":"\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0432\u043d\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f",onClick:W,children:E?"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0435\u0437 \u0440\u0430\u0437\u043d\u0438\u0446\u044b":"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0439"}),e]});i(t)},width:20,style:{color:"violet"}})}),children:[Object(we.jsx)(je.r,{href:"".concat(h.univer.baseUrl).concat(j.href),children:j.title}),E&&Object(we.jsx)(De.a,{className:"schedule__icon--diff"}),(null===h||void 0===h?void 0:h.schedule)&&h.schedule.href===j.href&&Object(we.jsx)(Le.a,{className:"schedule__icon--fav"})]})]})]})}return Object(we.jsxs)(je.x,{id:s,children:[Object(we.jsx)(je.y,{separator:!1,left:Object(we.jsx)(Ue.a,{onClick:N})}),Object(we.jsx)(je.k,{className:"schedule__wrapper",children:t})]})},We=function(e){var t=e.id,n=Object(l.b)(),r=Object(l.c)((function(e){return e.schedule})),s=r.isSearchLoading,i=r.searchedSchedules,a=Object(l.c)((function(e){return e.user})).user,o=c.a.useState(""),u=Object(M.a)(o,2),d=u[0],j=u[1],f=c.a.useRef(null);c.a.useEffect((function(){return window.setTimeout((function(){f.current&&f.current.focus()}),100),function(){n(P())}}),[]);var p=c.a.useState(d),O=Object(M.a)(p,2),g=O[0],x=O[1];c.a.useEffect((function(){var e=window.setTimeout((function(){x(d)}),300);return function(){window.clearTimeout(e)}}),[d]),c.a.useEffect((function(){g&&n(A({univer:a.univer.code,q:g}))}),[g]);var v;return v=s?Object(we.jsx)(je.G,{}):0===i.length?Object(we.jsx)(je.A,{icon:Object(we.jsx)(me.a,{style:{color:"teal"}}),children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):Object(we.jsxs)(we.Fragment,{children:[i.map((function(e,t){return Object(we.jsx)(je.i,{onClick:function(){return function(e){n(H({univer:a.univer.code,tail:e.href})),n(y(h))}(e)},children:e.title},t)})),Object(we.jsx)("div",{style:{textAlign:"center"},children:"\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0438\u043b\u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043d\u0443\u0436\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(we.jsxs)(je.x,{id:t,children:[Object(we.jsx)(je.y,{separator:!1,left:Object(we.jsx)(je.z,{onClick:function(){n(y(b))}}),children:"\u041f\u043e\u0438\u0441\u043a"}),Object(we.jsx)(je.l,{style:{paddingTop:24},vertical:"top",filled:!0,children:Object(we.jsx)(je.D,{getRef:f,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f",after:null,value:d,onChange:function(e){var t=e.target.value;j(t),t||n(P())}})}),Object(we.jsx)(je.k,{style:{marginTop:70},children:v})]})},Ne=function(e){var t,n,r=e.id,s=Object(l.b)(),i=Object(l.c)((function(e){return e.config})).univerList,a=Object(l.c)((function(e){return e.user})).user,o=null!==(t=null===a||void 0===a||null===(n=a.univer)||void 0===n?void 0:n.id)&&void 0!==t?t:"",u=c.a.useState(""+o),d=Object(M.a)(u,2),j=d[0],f=d[1];return Object(we.jsxs)(je.x,{id:r,children:[Object(we.jsx)(je.y,{separator:!1,left:Object(we.jsx)(je.z,{onClick:function(){s(y(b))}}),children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(we.jsxs)(je.o,{header:Object(we.jsx)(je.p,{mode:"secondary",children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"}),children:[Object(we.jsx)(je.m,{top:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",bottom:"\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430, \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u0441\u044f!",children:Object(we.jsx)(je.w,{placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",value:j,onChange:function(e){f(e.target.value)},children:i.map((function(e){return Object(we.jsx)("option",{value:e.id,children:e.subtitle},e.code)}))})}),Object(we.jsx)(je.k,{style:{paddingTop:0},children:Object(we.jsx)(je.e,{disabled:""+o===j,style:{width:"100%"},size:"l",onClick:function(){""+o!==j&&s(""===j?ee(a.id):$({id:a.id,univerId:+j}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})},qe=n(143),Ie=n(144),Pe=n(145),Ge=n(146),Re=(n(124),function(e){var t=e.closeModal,n=Object(je.K)();return Object(we.jsxs)("div",{children:[Object(we.jsx)(je.h,{before:Object(we.jsx)(je.q,{children:Object(we.jsx)(qe.a,{style:{marginRight:8,padding:0},fill:"orange"})}),description:"\u041c\u0438\u043d\u0438-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f > \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onClick:function(){t(),o.a.send("VKWebAppAddToFavorites").then(console.log).catch(console.log)},children:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c"}),Object(we.jsx)(je.h,{before:Object(we.jsx)(je.q,{children:Object(we.jsx)(Ie.a,{style:{marginRight:8,padding:0},fill:"var(--accent)"})}),description:"\u0428\u0430\u043f\u043a\u0430 \u0433\u0440\u0443\u043f\u043f\u044b",onClick:function(){t(),o.a.send("VKWebAppJoinGroup",{group_id:f}).then(console.log).catch(console.log)},children:"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"}),"android"===n&&Object(we.jsx)(je.h,{before:Object(we.jsx)(je.q,{children:Object(we.jsx)(Pe.a,{style:{marginRight:8,padding:0},fill:"tan"})}),description:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0441 \u0434\u043e\u043c. \u044d\u043a\u0440\u0430\u043d\u0430",onClick:function(){t(),o.a.send("VKWebAppAddToHomeScreen").then(console.log).catch(console.log)},children:"\u041d\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u044d\u043a\u0440\u0430\u043d"}),Object(we.jsx)(je.h,{before:Object(we.jsx)(je.q,{children:Object(we.jsx)(Ge.a,{style:{marginRight:8},fill:"teal"})}),description:"\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",onClick:function(){t(),o.a.send("VKWebAppShare",{link:"https://vk.com/app7908078"}).then(console.log).catch(console.log)},children:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c"})]})}),Me=n(127),Ke=(n(125),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navigation})).activeModal,n=Object(l.c)((function(e){return e.schedule})).lessonStats,r=Object(l.c)((function(e){return e.user})).user,c=Object(l.c)((function(e){return e.config})).currentUniver,s=function(){e(m(null))};return Object(we.jsxs)(je.v,{activeModal:t,onClose:s,children:[Object(we.jsx)(je.s,{id:"actions",header:"\u041d\u0435 \u0442\u0435\u0440\u044f\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",subheader:"\u0422.\u043a. \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u043d\u0430\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0438\u0441\u043a \u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f. \u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u0442\u044c \u0435\u0433\u043e, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u043b\u044e\u0431\u044b\u043c \u0443\u0434\u043e\u043c\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c:",icon:Object(we.jsx)(je.d,{size:72}),children:Object(we.jsx)(Re,{closeModal:s})}),Object(we.jsxs)(je.t,{id:"stats",children:[Object(we.jsx)(je.u,{right:Object(we.jsx)(Me.a,{onClick:s,style:{marginRight:8}}),children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),n&&Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(je.k,{children:Object(we.jsx)(je.g,{children:Object(we.jsx)(je.k,{children:n.title})})}),Object(we.jsx)(je.k,{style:{paddingTop:"0px 12px"},children:c&&Object(we.jsxs)(je.f,{level:"2",weight:"regular",style:{opacity:.5},children:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e! \u0422.\u043a. \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430, \u043f\u0435\u0440\u0432\u044b\u043c \u0434\u043d\u0435\u043c \u043f\u0440\u0438\u043d\u044f\u0442 ",new Date(c.startDateStartOfWeek).toLocaleDateString(),", \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c ",new Date(c.endDate).toLocaleDateString(),"."]})}),Object(we.jsx)(je.k,{style:{padding:"0px 12px"},children:Object.entries(n.stats).map((function(e){var t=Object(M.a)(e,2),n=t[0],r=t[1],c=r.pass,s=r.total;if(0===s)return null;var i={lec:"\u041b\u0435\u043a\u0446\u0438\u044f",pr:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",lab:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f"}[n];return Object(we.jsxs)("div",{className:"stats__item",children:[Object(we.jsxs)(je.p,{children:[i,Object(we.jsxs)("span",{className:"stats__secondary",children:[c,"/",s]})]}),Object(we.jsx)(je.B,{className:"stats__progress--".concat(n),style:{margin:"0px 12px 8px 12px"},value:c/s*100})]},n)}))}),Object(we.jsxs)(je.k,{children:[Object(we.jsx)(je.p,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 / \u0433\u0440\u0443\u043f\u043f\u044b"}),n.fromWhoms.map((function(t){return Object(we.jsx)(je.i,{onClick:function(){return n=t.href,e(H({univer:r.univer.code,tail:n})),void s();var n},children:t.title},t.href)}))]})]})]})]})}),Fe=!0,Ve=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navigation})),n=t.activePanel,r=t.history,s=Object(l.c)((function(e){return e.user})),i=s.isLoaderShowing,a=s.user,u=s.isLoading,d=s.error,j=s.isUniverLoading,g=s.isScheduleLoading,x=Object(l.c)((function(e){return e.config})),v=x.config,y=x.isLoading,w=x.error,k=Object(je.K)();c.a.useEffect((function(){document.body.setAttribute("scheme","space_gray");var t=window.location.search.slice(1).split("&").reduce((function(e,t){var n=t.split("="),r=Object(M.a)(n,2),c=r[0],s=r[1];return Object(de.a)(Object(de.a)({},e),{},Object(le.a)({},c.slice(3),"1"===s))}),{});e(Q(t))}),[]);var L=c.a.useState(null),D=Object(M.a)(L,2),_=D[0],T=D[1],U=function(e){T(e)};return c.a.useEffect((function(){a||function(){var t=Object(C.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(se(n={id:0})),e(J()),e(Z(n.id));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),c.a.useEffect((function(){a&&(a.univer?e(Y(a.univer)):e(Y(null)))}),[a]),c.a.useEffect((function(){T(j||g?Object(we.jsx)(je.C,{}):null)}),[j,g]),c.a.useEffect((function(){y||u||Fe||d||w||i||function(){var t=Object(C.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("android"!==k){t.next=6;break}return t.next=3,o.a.send("VKWebAppAddToHomeScreenInfo");case 3:if(!(n=t.sent).is_feature_supported||!n.is_added_to_home_screen){t.next=6;break}return t.abrupt("return");case 6:if(!v.is_favorite){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,o.a.send("VKWebAppGetGroupInfo",{group_id:f});case 10:if(!t.sent.is_member){t.next=13;break}return t.abrupt("return");case 13:e(m("actions"));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Fe=!1}),[y,u,i]),Object(we.jsx)(je.j,{isWebView:!0,children:Object(we.jsx)(je.c,{children:Object(we.jsxs)(je.J,{popout:_,modal:Object(we.jsx)(Ke,{}),activePanel:n,history:r,children:[Object(we.jsx)(Ce,{id:b}),Object(we.jsx)(Ne,{id:O,setPopout:U}),Object(we.jsx)(We,{id:p}),Object(we.jsx)(Ae,{id:h,setPopout:U})]})})})};o.a.send("VKWebAppInit"),o.a.subscribe((function(e){"VKWebAppUpdateConfig"===e.detail.type&&document.body.setAttribute("scheme",e.detail.data.scheme)})),i.a.render(Object(we.jsx)(l.a,{store:ue,children:Object(we.jsx)(Ve,{})}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.a39d07f1.chunk.js.map