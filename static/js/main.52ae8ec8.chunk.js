(this["webpackJsonpschedule-f"]=this["webpackJsonpschedule-f"]||[]).push([[0],{111:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(27),i=n.n(s),a=n(23),o=n.n(a),u=(n(105),n(18)),l=n(12),d=n(25),j="https://schedule-all-univers.herokuapp.com",f="schedule",h="main",b="search",p="settings",O={activePanel:h,history:[h],activeModal:null,prevActivePanel:h},g=Object(u.c)({name:"navigation",initialState:O,reducers:{setActivePanel:function(e,t){e.prevActivePanel=e.activePanel,e.activePanel=t.payload},setActiveModal:function(e,t){e.activeModal=t.payload}}}),x=g.actions,v=x.setActivePanel,y=x.setActiveModal,m=g.reducer,w=n(15),k=n.n(w),S=n(22),C={getSchedule:function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c,s,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.univer,r=t.tail,c=new URLSearchParams("tail=".concat(r)).toString(),s=[j,"schedule",n].join("/")+"?"+c,e.next=5,fetch(s);case 5:return i=e.sent,e.next=8,i.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),searchSchedule:function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.univer,r=t.q,c=[j,"schedule/search",n,r].join("/"),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D={getUniverList:function(){var e=Object(S.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[j,"univers"].join("/"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},L=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[j,"users",t].join("/"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c,s,i,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.univerId,c=[j,"users",n,"univer"].join("/"),s={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({univerId:r})},e.next=5,fetch(c,s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[j,"users",t,"univer"].join("/"),r={method:"DELETE"},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_={schedule:C,config:D,user:{getUser:L,updateUserSchedule:function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c,s,i,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.scheduleId,c=[j,"users",n,"schedule"].join("/"),s={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({scheduleId:r})},e.next=5,fetch(c,s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteUserSchedule:function(){var e=Object(S.a)(k.a.mark((function e(t){var n,r,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[j,"users",t,"schedule"].join("/"),r={method:"DELETE"},e.next=4,fetch(n,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUserUniver:T,deleteUserUniver:U},qoute:{getQoute:function(){var e=Object(S.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[j,"qoute",(new Date).getTime()].join("/"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},E=Object(u.b)("schedule/request",function(){var e=Object(S.a)(k.a.mark((function e(t,n){var r,c,s,i,a,o,u,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.univer,s=t.tail,i=n.getState(),a=i.schedule.scheduleHistory,o=null===(r=i.user.user)||void 0===r?void 0:r.schedule,!(u=a.find((function(e){return e.id===s})))){e.next=9;break}return e.abrupt("return",{record:u,isUniq:!1});case 9:if(!o||o.href!==s){e.next=13;break}return e.abrupt("return",{record:{id:s,data:o},isUniq:!0});case 13:return e.next=15,_.schedule.getSchedule({univer:c,tail:s});case 15:return l=e.sent,e.abrupt("return",{record:{id:s,data:l},isUniq:!0});case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(u.b)("schedule/search/request",_.schedule.searchSchedule),q=Object(u.c)({name:"schedule",initialState:{isLoading:!1,error:null,schedule:null,lessonStats:null,scheduleHistory:[],scheduleHistoryHrefs:[],q:"",isSearchLoading:!1,searchError:null,searchedSchedules:[]},reducers:{scheduleHistoryBack:function(e){e.scheduleHistoryHrefs.pop();var t=e.scheduleHistoryHrefs[e.scheduleHistoryHrefs.length-1];if(t){var n=e.scheduleHistory.find((function(e){return e.id===t}));e.schedule=n.data}else e.schedule=null},clearScheduleHistory:function(e){e.scheduleHistoryHrefs=[],e.schedule=null},clearSearchedSchedules:function(e){e.searchedSchedules=[]},setLessonStats:function(e,t){e.lessonStats=t.payload},setQ:function(e,t){e.q=t.payload}},extraReducers:function(e){e.addCase(E.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(E.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f :(",payload:t.meta.arg}})).addCase(E.fulfilled,(function(e,t){e.isLoading=!1,e.error=null;var n=t.payload,r=n.isUniq,c=n.record;r&&e.scheduleHistory.push(c),e.scheduleHistoryHrefs.push(c.id),e.schedule=c.data})).addCase(H.pending,(function(e){e.isSearchLoading=!0,e.searchError=null})).addCase(H.rejected,(function(e,t){e.isSearchLoading=!1,e.searchError={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f :(",payload:t.meta.arg}})).addCase(H.fulfilled,(function(e,t){e.isSearchLoading=!1,e.searchError=null,e.searchedSchedules=t.payload}))}}),W=q.actions,N=W.scheduleHistoryBack,A=W.clearScheduleHistory,P=W.clearSearchedSchedules,I=W.setLessonStats,R=W.setQ,F=q.reducer,G=n(14),M=function(e,t,n){return e.filter((function(e){var r=e.day===t,c=e.week===n||2===e.week;return r&&c}))},V=function(e){var t={};return e.forEach((function(e){e.fromWhoms.forEach((function(e){t[e.href]||(t[e.href]=e)}))})),Object.values(t)},K=function(e){var t=(new Date).getTime(),n=Object(G.a)(e.range,2),r=n[0],c=n[1];return r<=t&&t<=c},z=Object(u.b)("config/univers",_.config.getUniverList),J=Object(u.c)({name:"config",initialState:{isLoading:!1,error:null,univerList:[],currentUniver:null,passDays:0,countDays:0,toEndDays:0,toEndPercent:0,currentDay:0,currentWeek:0,config:{}},reducers:{setCurrentUniver:function(e,t){var n=t.payload;if(n){n=e.univerList.find((function(e){return e.id===n.id})),e.currentUniver=n,e.currentDay=function(){var e=(new Date).getDay();return e>0?e-1:e}(),e.currentWeek=function(e){var t=e.find((function(e){return K(e)}));if(!t)return 0;var n=t.weekType;return 0===(new Date).getDay()?0===n?1:0:n}(n.weeks);var r=function(e,t){var n=864e5,r=(new Date).getTime(),c=new Date(e).getTime(),s=new Date(t).getTime(),i=Math.ceil((s-c)/n),a=Math.ceil((r-c)/n);return{passDays:a<0?0:a,countDays:i,toEndDays:Math.ceil((s-r)/n)}}(n.startDate,n.endDate),c=r.passDays,s=r.countDays,i=r.toEndDays;e.countDays=s,e.passDays=c,e.toEndDays=i,e.toEndPercent=c/s*100}else e.currentUniver=null},setConfig:function(e,t){e.config=t.payload}},extraReducers:function(e){e.addCase(z.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(z.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043e\u0432 :(",payload:t.meta.arg}})).addCase(z.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.univerList=t.payload}))}}),B=J.actions,Q=B.setCurrentUniver,Y=B.setConfig,X=J.reducer,Z=Object(u.b)("user/request",_.user.getUser),$=Object(u.b)("user/update/univer",_.user.updateUserUniver),ee=Object(u.b)("user/delete/univer",_.user.deleteUserUniver),te=Object(u.b)("user/update/schedule",_.user.updateUserSchedule),ne=Object(u.b)("user/delete/schedule",_.user.deleteUserSchedule),re=Object(u.c)({name:"user",initialState:{isLoading:!1,isLoaderShowing:!0,isUniverLoading:!1,isScheduleLoading:!1,error:null,user:null,userData:null},reducers:{setUserData:function(e,t){e.userData=t.payload},setIsLoaderShowing:function(e,t){e.isLoaderShowing=t.payload}},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.isLoading=!0,e.error=null})).addCase(Z.rejected,(function(e,t){e.isLoading=!1,e.error={message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(Z.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.user=t.payload})).addCase($.pending,(function(e){e.isUniverLoading=!0,e.error=null})).addCase($.rejected,(function(e,t){e.isUniverLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase($.fulfilled,(function(e,t){e.isUniverLoading=!1,e.error=null,e.user=t.payload})).addCase(ee.pending,(function(e){e.isUniverLoading=!0,e.error=null})).addCase(ee.rejected,(function(e,t){e.isUniverLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(ee.fulfilled,(function(e,t){e.isUniverLoading=!1,e.error=null,e.user=t.payload})).addCase(te.pending,(function(e){e.isScheduleLoading=!0,e.error=null})).addCase(te.rejected,(function(e,t){e.isScheduleLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(te.fulfilled,(function(e,t){e.isScheduleLoading=!1,e.error=null,e.user=t.payload})).addCase(ne.pending,(function(e){e.isScheduleLoading=!0,e.error=null})).addCase(ne.rejected,(function(e,t){e.isScheduleLoading=!1,e.error={message:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 :(",payload:t.meta.arg}})).addCase(ne.fulfilled,(function(e,t){e.isScheduleLoading=!1,e.error=null,e.user=t.payload}))}}),ce=re.actions,se=ce.setUserData,ie=(ce.setIsLoaderShowing,re.reducer),ae=n(36),oe=Object(u.b)("qoute/request",_.qoute.getQoute),ue=Object(u.c)({name:"qoute",initialState:{isLoading:!1,error:null,qoute:null},reducers:{},extraReducers:function(e){e.addCase(oe.pending,(function(e){e.isLoading=!0})).addCase(oe.fulfilled,(function(e,t){e.isLoading=!1,e.qoute=t.payload}))}});Object(ae.a)(ue.actions);var le=ue.reducer,de=Object(d.b)({navigation:m,schedule:F,config:X,user:ie,qoute:le}),je=Object(u.a)({reducer:de}),fe=je,he=(n(111),n(28)),be=n(32),pe=n(4),Oe=n(141),ge=n(142),xe=n(1),ve=function(e){var t=e.qoute;return Object(xe.jsx)(pe.j,{children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.g,{disabled:!0,description:"\u0426\u0438\u0442\u0430\u0442\u0430 \u0434\u043d\u044f",children:t.author}),Object(xe.jsx)(pe.j,{style:{paddingTop:4},children:t.text})]})})},ye=n(129),me=n(130),we=n(131),ke=n(132),Se=n(133),Ce=n(134),De=(n(124),function(){var e=Object(pe.J)(),t=c.a.useState(!1),n=Object(G.a)(t,2),r=n[0],s=n[1];return Object(xe.jsx)(pe.j,{style:{paddingTop:0},children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.g,{onClick:function(){s(!r)},after:r?Object(xe.jsx)(me.a,{}):Object(xe.jsx)(ye.a,{}),description:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435:",children:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"}),r&&Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(pe.g,{before:Object(xe.jsx)(we.a,{style:{marginRight:8,padding:0},fill:"orange"}),description:"\u041c\u0438\u043d\u0438-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f > \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onClick:function(){o.a.send("VKWebAppAddToFavorites").then(console.log).catch(console.log)},children:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c"}),Object(xe.jsx)(pe.g,{before:Object(xe.jsx)(ke.a,{style:{marginRight:8,padding:0},fill:"var(--accent)"}),description:"\u0428\u0430\u043f\u043a\u0430 \u0433\u0440\u0443\u043f\u043f\u044b",onClick:function(){o.a.send("VKWebAppJoinGroup",{group_id:198278031}).then(console.log).catch(console.log)},children:"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"}),"android"===e&&Object(xe.jsx)(pe.g,{before:Object(xe.jsx)(Se.a,{style:{marginRight:8,padding:0},fill:"tan"}),description:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0441 \u0434\u043e\u043c. \u044d\u043a\u0440\u0430\u043d\u0430",onClick:function(){o.a.send("VKWebAppAddToHomeScreen").then(console.log).catch(console.log)},children:"\u041d\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439 \u044d\u043a\u0440\u0430\u043d"}),Object(xe.jsx)(pe.g,{before:Object(xe.jsx)(Ce.a,{style:{marginRight:8},fill:"teal"}),description:"\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",onClick:function(){o.a.send("VKWebAppShare",{link:"https://vk.com/app7908078"}).then(console.log).catch(console.log)},children:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c"})]})]})})}),Le=n(135),Te=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.config})),n=t.currentUniver,r=t.currentWeek,c=t.toEndDays,s=t.toEndPercent;return Object(xe.jsx)(pe.j,{children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.p,{subtitle:"\u0414\u043e \u043a\u043e\u043d\u0446\u0430 \u0441\u0435\u043c\u0435\u0441\u0442\u0440\u0430 ".concat(c," \u0434\u043d. (").concat(new Date(n.endDate).toLocaleDateString(),")"),children:0===r?"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c(\u0447\u0435\u0442\u043d\u0430\u044f)":"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c(\u043d\u0435\u0447\u0435\u0442\u043d\u0430\u044f)"}),Object(xe.jsx)(pe.A,{style:{margin:"0px 12px",background:"gray"},value:s}),Object(xe.jsx)("br",{}),Object(xe.jsx)(pe.D,{}),Object(xe.jsx)(pe.g,{after:Object(xe.jsx)(Le.a,{}),onClick:function(){e(v(b))},children:"\u0418\u0441\u043a\u0430\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})})},Ue=n(137),_e=n(138),Ee=n(136),He=(n(125),function(e){var t=e.current,n=e.lesson,r=e.onGoToSchedule,c=e.getStats;return Object(xe.jsxs)("div",{className:"lesson-row".concat(t?" lesson-row--current":""),children:[Object(xe.jsx)("div",{className:"lesson-row__time",children:n.time.map((function(e,t){return Object(xe.jsx)("div",{className:"lesson-row__time-item lesson-row__time-item--".concat(0===t?"start":"end"),children:e},e)}))}),Object(xe.jsxs)("div",{className:"lesson-row__body lesson-row__body--".concat(n.type),children:[n.typeTitle&&Object(xe.jsxs)("div",{className:"lesson-row__place",children:[Object(xe.jsx)("span",{className:"lesson-row__type-title--".concat(n.type),children:n.typeTitle}),n.place]}),Object(xe.jsxs)("div",{onClick:function(){return c&&c()},className:"lesson-row__subject",children:[n.subject," ",3!==n.group&&"(".concat(n.group+1,"\u0433\u0440.)")]}),Object(xe.jsx)("div",{className:"lesson-row__fromWhoms",children:n.fromWhoms.map((function(e){return Object(xe.jsx)("div",{className:"lesson-row__fromWhoms-item".concat(e.href?" link":""),onClick:function(){return e.href&&r(e.href)},children:e.title},e.href)}))})]}),Object(xe.jsx)("div",{className:"lesson-row__after"})]})}),qe=function(e){var t=e.today,n=e.lessons,r=e.onGoToSchedule,c=e.onGetStats;return Object(xe.jsx)(pe.f,{className:"schedule__body",children:0===n.length?Object(xe.jsx)(pe.z,{className:"schedule__empty-placeholder",icon:Object(xe.jsx)(Ee.a,{style:{color:"teal"}}),children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}):n.map((function(e,n){var s=e.time.map((function(e){return e.split(":").map((function(e){return+e}))})),i=t&&function(e){var t=(new Date).getTime(),n=Object(G.a)(e,2),r=n[0],c=n[1],s=Object(G.a)(r,2),i=s[0],a=s[1];if((new Date).setHours(i,a)-6e5>t)return!1;var o=Object(G.a)(c,2),u=o[0],l=o[1];return!((new Date).setHours(u,l)<t)}(s);return Object(xe.jsx)(He,{lesson:e,onGoToSchedule:r,current:i,getStats:function(){return c&&c(e)}},n)}))})},We=function(e){var t=e.user,n=Object(l.b)(),r=Object(l.c)((function(e){return e.config})),s=r.currentWeek,i=r.currentDay,a=function(e){n(E({univer:t.univer.code,tail:e})),n(v(f))},o=c.a.useState(!1),u=Object(G.a)(o,2),d=u[0],j=u[1];if(!t.schedule)return Object(xe.jsx)(pe.j,{style:{paddingTop:0},children:Object(xe.jsx)(pe.f,{children:Object(xe.jsx)(pe.g,{after:Object(xe.jsx)(Ue.a,{fill:"orange"}),onClick:function(){n(v(b))},children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})})});var h,p=M(t.schedule.lessons,i,s),O="".concat((h=i,["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][h]),", ").concat((new Date).toLocaleDateString());return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(pe.j,{style:{paddingTop:0},children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.g,{disabled:!0,after:Object(xe.jsx)(pe.q,{children:Object(xe.jsx)(_e.a,{fill:"tomato",onClick:function(){n(ne(t.id))}})}),children:t.schedule.title}),Object(xe.jsx)(pe.D,{}),Object(xe.jsx)(pe.p,{subtitle:O,children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(xe.jsx)("div",{style:{padding:"0px 8px"},children:Object(xe.jsx)(qe,{today:!0,lessons:p,onGoToSchedule:a})}),Object(xe.jsx)("br",{}),Object(xe.jsx)(pe.D,{}),Object(xe.jsx)(pe.h,{onClick:function(){return a(t.schedule.href)},children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),Object(xe.jsx)(pe.j,{style:{paddingTop:0},children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.g,{onClick:function(){j(!d)},after:d?Object(xe.jsx)(me.a,{}):Object(xe.jsx)(ye.a,{}),children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438/\u0413\u0440\u0443\u043f\u043f\u044b"}),d&&V(t.schedule.lessons).map((function(e){return Object(xe.jsx)(pe.h,{onClick:function(){return a(e.href)},children:e.title},e.href)}))]})})]})},Ne=n(139),Ae=n(140),Pe=function(e){var t=e.univer,n=c.a.useState(!1),r=Object(G.a)(n,2),s=r[0],i=r[1],a=c.a.useState(!1),o=Object(G.a)(a,2),u=o[0],l=o[1];return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(pe.D,{}),Object(xe.jsx)(pe.j,{children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.g,{onClick:function(){i(!s)},after:s?Object(xe.jsx)(me.a,{}):Object(xe.jsx)(ye.a,{}),children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0435 \u043d\u0435\u0434\u0435\u043b\u0438"}),s&&Object(xe.jsx)(pe.D,{}),s&&t.weeks.map((function(e,t){var n,r=new Date(e.range[0]).toLocaleDateString()+" - "+new Date(e.range[1]).toLocaleDateString(),c=(n=e.range[1],(new Date).getTime()>n);return Object(xe.jsx)(pe.g,{disabled:!0,description:r,after:0===e.weekType?Object(xe.jsx)(Ne.a,{fill:K(e)?"tomato":"teal"}):Object(xe.jsx)(Ae.a,{fill:K(e)?"tomato":"violet"}),children:Object(xe.jsx)("span",{style:{textDecoration:c?"line-through":"none",opacity:c?.5:1,color:K(e)?"tomato":""},children:0===e.weekType?"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c(\u0447\u0435\u0442\u043d\u0430\u044f)":"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c(\u043d\u0435\u0447\u0435\u0442\u043d\u0430\u044f)"})},t)}))]})}),Object(xe.jsx)(pe.j,{style:{paddingTop:0},children:Object(xe.jsxs)(pe.f,{children:[Object(xe.jsx)(pe.g,{onClick:function(){l(!u)},after:u?Object(xe.jsx)(me.a,{}):Object(xe.jsx)(ye.a,{}),children:"\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043d\u044f\u0442\u0438\u0439"}),u&&Object(xe.jsx)(pe.D,{}),u&&t.timeLessons.map((function(e,t){return Object(xe.jsx)(pe.g,{disabled:!0,description:"".concat(t+1," \u043f\u0430\u0440\u0430"),children:e},t)}))]})})]})},Ie=function(e){var t,n=e.id,r=Object(l.b)(),c=Object(l.c)((function(e){return e.user})),s=c.user,i=c.isLoading,a=c.error,o=Object(l.c)((function(e){return e.config})),u=o.currentUniver,d=o.isLoading,j=o.error,f=Object(l.c)((function(e){return e.qoute})).qoute,h=function(){r(v(p))};if(i||d)t=Object(xe.jsx)(pe.F,{style:{paddingTop:"20vh"}});else if(a||j){var b=a&&a.message,O=j&&j.message;t=Object(xe.jsxs)(pe.z,{stretched:!0,action:Object(xe.jsx)(pe.d,{onClick:function(){a&&s&&r(Z(s.id)),j&&r(z())},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),children:[b,Object(xe.jsx)("br",{}),O]})}else s&&(t=Object(xe.jsxs)(xe.Fragment,{children:[s.univer?Object(xe.jsxs)(xe.Fragment,{children:[f&&Object(xe.jsx)(ve,{qoute:f}),Object(xe.jsx)(De,{}),Object(xe.jsx)(pe.D,{}),u&&Object(xe.jsx)(Te,{}),Object(xe.jsx)(We,{user:s})]}):Object(xe.jsx)(pe.z,{stretched:!0,icon:Object(xe.jsx)(Oe.a,{width:64,height:64}),action:Object(xe.jsx)(pe.d,{onClick:h,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c"}),u&&Object(xe.jsx)(Pe,{univer:u})]}));return Object(xe.jsxs)(pe.w,{id:n,children:[Object(xe.jsx)(pe.x,{separator:!1,left:!(i||d)&&(null===s||void 0===s?void 0:s.univer)&&Object(xe.jsx)(ge.a,{onClick:h})}),t]})},Re=n(143),Fe=n(144),Ge=n(145),Me=n(146),Ve=n(147),Ke=(n(126),[{id:0,title:"\u041f\u041d"},{id:1,title:"\u0412\u0422"},{id:2,title:"\u0421\u0420"},{id:3,title:"\u0427\u0422"},{id:4,title:"\u041f\u0422"},{id:5,title:"\u0421\u0411"}]),ze=[{id:0,title:"\u0427\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c \u2227"},{id:1,title:"\u0417\u043d\u0430\u043c\u0435\u043d\u0430\u0442\u0435\u043b\u044c \u2228"}],Je=function(e){var t,n,r,s=e.id,i=e.setPopout,a=Object(l.b)(),o=Object(l.c)((function(e){return e.schedule})),u=o.isLoading,d=o.error,j=o.schedule,f=o.scheduleHistoryHrefs,p=Object(l.c)((function(e){return e.user})).user,O=Object(l.c)((function(e){return e.config})),g=O.currentUniver,x=O.currentDay,m=O.currentWeek,w=Object(l.c)((function(e){return e.navigation})).prevActivePanel,k=c.a.useState(x),S=Object(G.a)(k,2),C=S[0],D=S[1],L=c.a.useState(m),T=Object(G.a)(L,2),U=T[0],_=T[1],H=c.a.useState(!1),q=Object(G.a)(H,2),W=q[0],F=q[1],K=function(){F(!W)},z=function(){a(v(h)),a(A()),a(R("")),a(P())},J=function(){F(!1),a(te({id:p.id,scheduleId:j.href}))},B=function(){F(!1),a(ne(p.id))},Q=function(e){a(E({univer:p.univer.code,tail:e})),F(!1)},Y=c.a.useRef(null);if(u)t=Object(xe.jsx)(pe.F,{});else if(d)t=Object(xe.jsx)(pe.z,{stretched:!0,action:Object(xe.jsx)(pe.d,{onClick:function(){a(E(d.payload))},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),children:d.message});else if(j){var X=W?(n=j.lessons,r=p.schedule.lessons,n.filter((function(e){return!r.find((function(t){return function(e,t){var n=e.day===t.day,r=e.lesson===t.lesson,c=e.week===t.week||2===e.week||2===t.week,s=e.group===t.group||3===e.group||3===t.group;return n&&r&&c&&s}(e,t)}))}))):j.lessons;t=Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)("div",{className:"schedule__card",ref:Y,children:Object(xe.jsx)(pe.n,{style:{height:"100%"},slideIndex:C,onChange:function(e){return D(e)},children:Ke.map((function(e,t){var n=M(X,t,U);return Object(xe.jsx)(qe,{today:C===x&&U===m,lessons:n,onGoToSchedule:Q,onGetStats:function(e){var t=function(e){var t=e.lesson,n=e.lessons,r=e.currentUniver,c=t.subject,s=(t.time,r.weeks),i=r.startDate,a={lec:{pass:0,total:0},pr:{pass:0,total:0},lab:{pass:0,total:0}},o=n.filter((function(e){return e.subject===c})),u=o.filter((function(e){return 0===e.week})),l=o.filter((function(e){return 1===e.week})),d=o.filter((function(e){return 2===e.week})),j=s.filter((function(e){return 0===e.weekType})).length,f=s.filter((function(e){return 1===e.weekType})).length;a.lec.total=j*u.filter((function(e){return 0===e.type})).length+f*l.filter((function(e){return 0===e.type})).length+(j+f)*d.filter((function(e){return 0===e.type})).length,a.pr.total=j*u.filter((function(e){return 1===e.type})).length+f*l.filter((function(e){return 1===e.type})).length+(j+f)*d.filter((function(e){return 1===e.type})).length,a.lab.total=j*u.filter((function(e){return 2===e.type})).length+f*l.filter((function(e){return 2===e.type})).length+(j+f)*d.filter((function(e){return 2===e.type})).length;var h=new Date,b=h.getTime(),p=new Date(i).getTime();if(b<p)return{fromWhoms:V(o),stats:{lec:{pass:0,total:a.lec.total},pr:{pass:0,total:a.pr.total},lab:{pass:0,total:a.lab.total}}};var O=s.findIndex((function(e){var t=Object(G.a)(e.range,2),n=t[0],r=t[1];return n<=b&&b<=r})),g=s.slice(0,O),x=g.filter((function(e){return 0===e.weekType})).length,v=g.filter((function(e){return 1===e.weekType})).length;a.lec.pass=x*u.filter((function(e){return 0===e.type})).length+v*l.filter((function(e){return 0===e.type})).length+(x+v)*d.filter((function(e){return 0===e.type})).length,a.pr.pass=x*u.filter((function(e){return 1===e.type})).length+v*l.filter((function(e){return 1===e.type})).length+(x+v)*d.filter((function(e){return 1===e.type})).length,a.lab.pass=x*u.filter((function(e){return 2===e.type})).length+v*l.filter((function(e){return 2===e.type})).length+(x+v)*d.filter((function(e){return 2===e.type})).length;var y=s[O];if(y){var m=h.getDay(),w=0===m?6:m-1,k=h.getTime();o.filter((function(e){if(e.week!==y.weekType&&2!==e.week)return!1;if(e.day<w)return!0;if(e.day===w){var t=Object(G.a)(e.time,2),n=t[0],r=t[1],c=n.split(":").map((function(e){return+e})),s=Object(G.a)(c,2),i=s[0],a=s[1],o=new Date(k).setHours(i,a),u=r.split(":").map((function(e){return+e})),l=Object(G.a)(u,2),d=l[0],j=l[1],f=new Date(k).setHours(d,j);if(k>o&&k>f)return!0}return!1})).forEach((function(e){var t=["lec","pr","lab"][e.type];a[t].pass++}))}var S=V(o);return{stats:a,fromWhoms:S}}({lesson:e,lessons:j.lessons,currentUniver:g}),n=t.stats,r=t.fromWhoms;a(I({title:e.subject,stats:n,fromWhoms:r})),a(y("stats"))}},t)}))})}),Object(xe.jsxs)(pe.f,{style:{marginTop:8},children:[Object(xe.jsx)(pe.G,{children:ze.map((function(e){return Object(xe.jsx)(pe.H,{selected:e.id===U,onClick:function(){return _(e.id)},style:{color:m===e.id?"tomato":""},children:e.title},e.id)}))}),Object(xe.jsx)(pe.G,{children:Ke.map((function(e){return Object(xe.jsx)(pe.H,{selected:e.id===C,onClick:function(){return D(e.id)},style:{color:x===e.id?"tomato":""},children:e.title},e.id)}))}),Object(xe.jsxs)(pe.E,{disabled:!0,before:Object(xe.jsx)(pe.q,{children:Object(xe.jsx)(Ge.a,{onClick:function(){1===f.length?w===b?(a(v(b)),a(A())):z():(a(N()),F(!1))},width:20,style:{marginRight:12,color:"teal"}})}),after:Object(xe.jsx)(pe.q,{children:Object(xe.jsx)(Me.a,{onClick:function(){var e=p.schedule&&p.schedule.href===j.href?Object(xe.jsx)(pe.b,{autoclose:!0,style:{color:"tomato"},onClick:B,before:Object(xe.jsx)(_e.a,{fill:"tomato"}),children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}):Object(xe.jsx)(pe.b,{autoclose:!0,onClick:J,before:Object(xe.jsx)(Re.a,{}),subtitle:p.schedule?"\u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e":"",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),t=Object(xe.jsxs)(pe.a,{onClose:function(){return i(null)},iosCloseItem:Object(xe.jsx)(pe.b,{autoclose:!0,mode:"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),children:[!1,p.schedule&&!(p.schedule.href===j.href)&&Object(xe.jsx)(pe.b,{autoclose:!0,style:{color:"teal"},before:Object(xe.jsx)(Fe.a,{fill:W?"tomato":"orange",style:{transform:"rotateY(".concat(W?0:180,"deg)")}}),subtitle:W?"\u0412\u0441\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f":"\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0432\u043d\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f",onClick:K,children:W?"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0435\u0437 \u0440\u0430\u0437\u043d\u0438\u0446\u044b":"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0439"}),e]});i(t)},width:20,style:{color:"violet"}})}),children:[Object(xe.jsx)(pe.r,{href:"".concat(p.univer.baseUrl).concat(j.href),children:j.title}),W&&Object(xe.jsx)(Fe.a,{className:"schedule__icon--diff"}),(null===p||void 0===p?void 0:p.schedule)&&p.schedule.href===j.href&&Object(xe.jsx)(Re.a,{className:"schedule__icon--fav"})]})]})]})}return Object(xe.jsxs)(pe.w,{id:s,children:[Object(xe.jsx)(pe.x,{separator:!1,left:Object(xe.jsx)(Ve.a,{onClick:z})}),Object(xe.jsx)(pe.j,{className:"schedule__wrapper",children:t})]})},Be=function(e){var t=e.id,n=Object(l.b)(),r=Object(l.c)((function(e){return e.schedule})),s=r.isSearchLoading,i=r.searchedSchedules,a=r.q,o=Object(l.c)((function(e){return e.user})).user,u=c.a.useRef(null);c.a.useEffect((function(){window.setTimeout((function(){u.current&&u.current.focus()}),100)}),[]);var d=c.a.useState(a),j=Object(G.a)(d,2),b=j[0],p=j[1];c.a.useEffect((function(){var e=window.setTimeout((function(){p(a)}),500);return function(){window.clearTimeout(e)}}),[a]),c.a.useEffect((function(){b&&n(H({univer:o.univer.code,q:b}))}),[b]);var O;return O=s?Object(xe.jsx)(pe.F,{}):0===i.length?Object(xe.jsx)(pe.z,{icon:Object(xe.jsx)(Ee.a,{style:{color:"teal"}}),children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):Object(xe.jsxs)(xe.Fragment,{children:[i.map((function(e,t){return Object(xe.jsx)(pe.h,{onClick:function(){return function(e){n(E({univer:o.univer.code,tail:e.href})),n(v(f))}(e)},children:e.title},t)})),Object(xe.jsxs)(pe.l,{children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",i.length," \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0439 ",Object(xe.jsx)("br",{}),"\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0438\u043b\u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441, ",Object(xe.jsx)("br",{})," \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043d\u0443\u0436\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"]})]}),Object(xe.jsxs)(pe.w,{id:t,children:[Object(xe.jsx)(pe.x,{separator:!1,left:Object(xe.jsx)(pe.y,{onClick:function(){n(v(h)),n(R("")),n(P())}}),children:"\u041f\u043e\u0438\u0441\u043a"}),Object(xe.jsx)(pe.k,{style:{paddingTop:24},vertical:"top",filled:!0,children:Object(xe.jsx)(pe.C,{getRef:u,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f",after:null,value:a,onChange:function(e){var t=e.target.value;n(R(t)),t||n(P())}})}),Object(xe.jsx)(pe.j,{style:{marginTop:70},children:O})]})},Qe=function(e){var t,n,r=e.id,s=Object(l.b)(),i=Object(l.c)((function(e){return e.config})).univerList,a=Object(l.c)((function(e){return e.user})).user,o=null!==(t=null===a||void 0===a||null===(n=a.univer)||void 0===n?void 0:n.id)&&void 0!==t?t:"",u=c.a.useState(""+o),d=Object(G.a)(u,2),j=d[0],f=d[1];return Object(xe.jsxs)(pe.w,{id:r,children:[Object(xe.jsx)(pe.x,{separator:!1,left:Object(xe.jsx)(pe.y,{onClick:function(){s(v(h))}}),children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(xe.jsxs)(pe.o,{header:Object(xe.jsx)(pe.p,{mode:"secondary",children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"}),children:[Object(xe.jsx)(pe.m,{top:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",bottom:"\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430, \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u0441\u044f!",children:Object(xe.jsx)(pe.v,{placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",value:j,onChange:function(e){f(e.target.value)},children:i.map((function(e){return Object(xe.jsx)("option",{value:e.id,children:e.subtitle},e.code)}))})}),Object(xe.jsx)(pe.j,{style:{paddingTop:0},children:Object(xe.jsx)(pe.d,{disabled:""+o===j,style:{width:"100%"},size:"l",onClick:function(){""+o!==j&&s(""===j?ee(a.id):$({id:a.id,univerId:+j}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})},Ye=n(148),Xe=(n(127),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navigation})).activeModal,n=Object(l.c)((function(e){return e.schedule})).lessonStats,r=Object(l.c)((function(e){return e.user})).user,c=Object(l.c)((function(e){return e.config})).currentUniver,s=function(){e(y(null))};return Object(xe.jsx)(pe.u,{activeModal:t,onClose:s,children:Object(xe.jsxs)(pe.s,{id:"stats",children:[Object(xe.jsx)(pe.t,{right:Object(xe.jsx)(Ye.a,{onClick:s,style:{marginRight:8}}),children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),n&&Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(pe.j,{children:Object(xe.jsx)(pe.f,{children:Object(xe.jsx)(pe.j,{children:n.title})})}),Object(xe.jsx)(pe.j,{style:{paddingTop:"0px 12px"},children:c&&Object(xe.jsxs)(pe.e,{level:"2",weight:"regular",style:{opacity:.5},children:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e! \u0422.\u043a. \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430, \u043f\u0435\u0440\u0432\u044b\u043c \u0434\u043d\u0435\u043c \u043f\u0440\u0438\u043d\u044f\u0442 ",new Date(c.startDateStartOfWeek).toLocaleDateString(),", \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c ",new Date(c.endDate).toLocaleDateString(),"."]})}),Object(xe.jsx)(pe.j,{children:Object.entries(n.stats).map((function(e){var t=Object(G.a)(e,2),n=t[0],r=t[1],c=r.pass,s=r.total;if(0===s)return null;var i={lec:"\u041b\u0435\u043a\u0446\u0438\u044f",pr:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",lab:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f"}[n];return Object(xe.jsxs)("div",{className:"stats__item",children:[Object(xe.jsxs)(pe.p,{children:[i,Object(xe.jsxs)("span",{className:"stats__secondary",children:[c,"/",s]})]}),Object(xe.jsx)(pe.A,{className:"stats__progress--".concat(n),style:{margin:"0px 12px 8px 12px"},value:c/s*100})]},n)}))}),0!==n.fromWhoms.length&&Object(xe.jsxs)(pe.j,{style:{paddingTop:0},children:[Object(xe.jsx)(pe.p,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 / \u0433\u0440\u0443\u043f\u043f\u044b"}),n.fromWhoms.map((function(t){return Object(xe.jsx)(pe.h,{onClick:function(){return n=t.href,e(E({univer:r.univer.code,tail:n})),void s();var n},children:t.title},t.href)}))]})]})]})})}),Ze=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.navigation})),n=t.activePanel,r=t.history,s=Object(l.c)((function(e){return e.user})),i=s.user,a=s.isUniverLoading,u=s.isScheduleLoading;c.a.useEffect((function(){document.body.setAttribute("scheme","space_gray");var t=window.location.search.slice(1).split("&").reduce((function(e,t){var n=t.split("="),r=Object(G.a)(n,2),c=r[0],s=r[1];return Object(be.a)(Object(be.a)({},e),{},Object(he.a)({},c.slice(3),"1"===s))}),{});e(Y(t))}),[]);var d=c.a.useState(null),j=Object(G.a)(d,2),O=j[0],g=j[1],x=function(e){g(e)};return c.a.useEffect((function(){i||function(){var t=Object(S.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.send("VKWebAppGetUserInfo");case 2:n=t.sent,e(se(n)),e(z()),e(Z(n.id)),e(oe());case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),c.a.useEffect((function(){i&&(i.univer?e(Q(i.univer)):e(Q(null)))}),[i]),c.a.useEffect((function(){g(a||u?Object(xe.jsx)(pe.B,{}):null)}),[a,u]),Object(xe.jsx)(pe.i,{isWebView:!0,children:Object(xe.jsx)(pe.c,{children:Object(xe.jsxs)(pe.I,{popout:O,modal:Object(xe.jsx)(Xe,{}),activePanel:n,history:r,children:[Object(xe.jsx)(Ie,{id:h}),Object(xe.jsx)(Qe,{id:p,setPopout:x}),Object(xe.jsx)(Be,{id:b}),Object(xe.jsx)(Je,{id:f,setPopout:x})]})})})};o.a.send("VKWebAppInit"),o.a.subscribe((function(e){"VKWebAppUpdateConfig"===e.detail.type&&document.body.setAttribute("scheme","space_gray")})),i.a.render(Object(xe.jsx)(l.a,{store:fe,children:Object(xe.jsx)(Ze,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.52ae8ec8.chunk.js.map