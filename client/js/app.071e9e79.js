(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],d=0,b=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(b.length)b.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0383":function(t,e,s){"use strict";var a=s("7505"),o=s.n(a);o.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=n,t.exports=o,o.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("main",{staticClass:"container-fluid"},[s("router-view")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-info"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("Bug Tracker")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],c=s("bc3a"),l=s.n(c),u=s("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},b=d,m=s("2877"),f=Object(m["a"])(b,i,r,!1,null,null,null),p=f.exports,g={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$store.dispatch("getBugs"))},components:{Navbar:p}},v=g,h=(s("5c0b"),Object(m["a"])(v,o,n,!1,null,null,null)),j=h.exports,_=s("c1df"),C=s.n(_),w=s("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home d-flex flex-column align-items-center"},[s("div",{staticClass:"container-fluid bug-container mt-5"},[s("div",{staticClass:"row",attrs:{name:"grid-header"}},[t._m(0),t._m(1),s("div",{staticClass:"col-3 p-2 d-flex justify-content-around"},[s("p",{staticClass:"font-weight-bold"},[t._v("Status:")]),s("button",{staticClass:"btn btn-sm custom-btn",on:{click:t.showAll}},[t._v(" All ")]),s("button",{staticClass:"btn btn-sm custom-btn",on:{click:t.showOpenBugs}},[t._v(" Open ")]),s("button",{staticClass:"btn btn-sm custom-btn",on:{click:t.showClosedBugs}},[t._v(" Closed ")])]),t._m(2)]),this.sortOpen?s("div",t._l(t.openBugs,(function(t){return s("bug-comp",{key:t.id,attrs:{bugProp:t}})})),1):t._e(),this.sortClosed?s("div",t._l(t.closedBugs,(function(t){return s("bug-comp",{key:t.id,attrs:{bugProp:t}})})),1):t._e(),t._m(3),s("div",{staticClass:"modal fade",attrs:{id:"newBugModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content text-light"},[t._m(4),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBug(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control w-75 my-2 ml-5",attrs:{type:"text",placeholder:"Bug Title ... ",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control w-75 my-2 ml-5",attrs:{type:"text",placeholder:"Brief description of bug"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),t._m(5)])])])])])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 pt-2"},[s("p",{staticClass:"font-weight-bold"},[t._v("Title")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 pt-2"},[s("p",{staticClass:"font-weight-bold"},[t._v("Reported By")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 pt-2"},[s("p",{staticClass:"font-weight-bold"},[t._v("Last Modified")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row "},[s("button",{staticClass:"btn m-3 report-btn text-light",attrs:{"data-toggle":"modal","data-target":"#newBugModal"}},[t._v(" Report Bug ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header bg-primary"},[s("h5",{staticClass:"modal-title text-light",attrs:{id:"exampleModalLabel"}},[t._v(" Report a New Bug ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer justify-content-center"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Report Bug")])])}],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row py-2"},[s("div",{staticClass:"col-3 border-bottom "},[s("p",[t._v(t._s(t.bugProp.title))])]),s("div",{staticClass:"col-3 border-bottom"},[s("p",[t._v(t._s(t.bugProp.creatorEmail))])]),s("div",{staticClass:"col-3 border-bottom"},[t.bugProp.closed?s("p",{staticClass:"text-danger"},[t._v("Closed")]):t._e(),t.bugProp.closed?t._e():s("p",{staticClass:"text-success"},[t._v("Open")])]),s("div",{staticClass:"col-3 border-bottom d-flex justify-content-between p-2"},[s("p",[t._v(t._s(t._f("formatDate")(t.bugProp.updatedAt)))]),s("router-link",{attrs:{to:{name:"bug-details",params:{bugId:t.bugProp.id}}}},[s("button",{staticClass:"btn custom-btn mr-1"},[t._v("View")])])],1)])},k=[],N={name:"bug-comp",mounted(){},computed:{},props:["bugProp"],components:{},methods:{}},P=N,O=(s("bd32"),Object(m["a"])(P,x,k,!1,null,null,null)),E=O.exports,z={name:"home",mounted(){},data(){return{newBug:{title:"",description:""},sortOpen:!0,sortClosed:!0}},computed:{bugs(){return this.$store.state.bugs},activeBug(){return this.$store.state.activeBug},openBugs(){return this.$store.state.bugs.filter(t=>!t.closed)},closedBugs(){return this.$store.state.bugs.filter(t=>t.closed)}},props:[""],components:{BugComp:E},methods:{addBug(){this.$store.dispatch("addBug",this.newBug),this.newBug={title:"",description:""}},showOpenBugs(){this.sortOpen=!0,this.sortClosed=!1},showClosedBugs(){this.sortClosed=!0,this.sortOpen=!1},showAll(){this.sortClosed=!0,this.sortOpen=!0}}},A=z,D=(s("e668"),Object(m["a"])(A,y,B,!1,null,null,null)),M=D.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about text-center"},[s("h1",[t._v("Welcome "+t._s(t.profile.name))]),s("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),s("p",[t._v(t._s(t.profile.email))])])},S=[],I={name:"Profile",computed:{profile(){return this.$store.state.profile}}},L=I,Y=(s("0383"),Object(m["a"])(L,T,S,!1,null,"59c2bb44",null)),H=Y.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home d-flex flex-column"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-5 offset-1"},[s("h1",[t._v(" "+t._s(t.activeBug.title)+" "),t.activeBug.closed?t._e():s("span",{attrs:{"data-toggle":"modal","data-target":"#editBugModal"}},[s("i",{staticClass:"fa fa-pencil text-warning drop-shadow text-small",attrs:{"aria-hidden":"true"}})])]),s("h5",[t._v(t._s(t.activeBug.creatorEmail))])]),s("div",{staticClass:"col-5 d-flex justify-content-end align-items-end"},[t.activeBug.closed?t._e():s("div",{staticClass:"div"},[t._m(0),s("button",{staticClass:"btn btn-danger",on:{click:t.closeBug}},[t._v("Close Bug")])]),t.activeBug.closed?s("div",{staticClass:"div"},[t._m(1)]):t._e()]),s("div",{staticClass:"modal fade",attrs:{id:"editBugModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content text-light"},[t._m(2),s("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugData.title,expression:"bugData.title"}],staticClass:"form-control w-75 my-2 ml-5",attrs:{type:"text",placeholder:"Bug Title ... ",required:""},domProps:{value:t.bugData.title},on:{input:function(e){e.target.composing||t.$set(t.bugData,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugData.description,expression:"bugData.description"}],staticClass:"form-control w-75 my-2 ml-5",attrs:{type:"text",placeholder:"Bug description"},domProps:{value:t.bugData.description},on:{input:function(e){e.target.composing||t.$set(t.bugData,"description",e.target.value)}}}),t._m(3)])])])])]),s("div",{staticClass:"row mt-5 d-flex"},[t._m(4),s("div",{staticClass:"col-10  bug-desc text-dark p-3"},[s("h3",[t._v("Description of issue:")]),s("p",[t._v(t._s(t.activeBug.description))])])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"container-fluid note-container "},[t._m(5),t._l(t.notes,(function(t){return s("note-comp",{key:t.id,attrs:{noteProp:t}})})),this.activeBug.closed?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 p-3"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("button",{staticClass:"btn btn-success my-1",attrs:{type:"submit"}},[t._v(" Add Note ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control w-50",attrs:{type:"text",placeholder:"description of action taken..."},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}})])])])],2)])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Status: "),s("span",{staticClass:"text-success"},[t._v("Open")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Status: "),s("span",{staticClass:"text-danger"},[t._v("Closed")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header bg-primary"},[s("h5",{staticClass:"modal-title text-light",attrs:{id:"exampleModalLabel"}},[t._v(" Edit Bug Content ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer justify-content-center"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v(" Save ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-1 mr-3"},[a("img",{attrs:{src:s("af8c"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row",attrs:{name:"grid-header"}},[s("div",{staticClass:"col-4 border-bottom p-3"},[s("p",{staticClass:"font-weight-bold"},[t._v("Name")])]),s("div",{staticClass:"col-4 border-bottom p-3"},[s("p",{staticClass:"font-weight-bold"},[t._v("Action Taken")])]),s("div",{staticClass:"col-4 border-bottom p-3"},[s("p",{staticClass:"font-weight-bold"},[t._v("Delete")])])])}],q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row ",attrs:{name:"grid-header"}},[s("div",{staticClass:"col-4"},[s("p",[t._v(t._s(t.noteProp.creatorEmail))])]),s("div",{staticClass:"col-4"},[s("p",[t._v(t._s(t.noteProp.content))])]),s("div",{staticClass:"col-4"},[this.activeBug.closed?t._e():s("button",{staticClass:"btn btn-danger my-1",on:{click:t.deleteNote}},[t._v(" Delete ")])])])},G=[],J={name:"",mounted(){},data(){return{}},computed:{activeBug(){return this.$store.state.activeBug}},props:["noteProp"],components:{},methods:{deleteNote(){this.$store.dispatch("deleteNote",this.noteProp.id)}}},V=J,W=Object(m["a"])(V,q,G,!1,null,null,null),F=W.exports,X={name:"bug-details",mounted(){this.$store.dispatch("getActiveBug",this.$route.params.bugId)},data(){return{newNote:{content:"",bug:this.$route.params.bugId},bugData:{title:"",description:"",id:this.$route.params.bugId}}},computed:{activeBug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},props:[""],components:{NoteComp:F},methods:{addNote(){this.$store.dispatch("addNote",this.newNote),this.newNote={content:"",bug:this.$route.params.bugId}},closeBug(){this.$store.dispatch("closeBug",this.newNote.bug)},editBug(){this.$store.dispatch("editBug",this.bugData)}}},Z=X,K=(s("f7ef"),Object(m["a"])(Z,R,U,!1,null,null,null)),Q=K.exports;a["a"].use(w["a"]);const tt=[{path:"/",name:"Home",component:M},{path:"/profile",name:"Profile",component:H,beforeEnter:u["b"]},{path:"/:bugId",name:"bug-details",component:Q,beforeEnter:u["b"]}],et=new w["a"]({routes:tt});var st=et,at=s("2f62"),ot=s("3d20"),nt=s.n(ot);class it{static async confirmAction(t="Are you sure?",e="You cant go back from here!"){try{let s=await nt.a.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonColor:"#DC3545",cancelButtonColor:"#17A2B8",confirmButtonText:"Confirm"});return!!s.value}catch(s){}}static toast(t="Default Toast",e=1500){nt.a.fire({title:t,timer:e,toast:!0,position:"center",showConfirmButton:!1})}static success(t="Success!"){nt.a.fire({title:t,toast:!0,position:"top-end",icon:"success",showConfirmButton:!1,timer:2e3})}}let rt=location.host.includes("localhost")?"http://localhost:3000/":"/";const ct=l.a.create({baseURL:rt+"api",timeout:3e3,withCredentials:!0});a["a"].use(at["a"]);var lt=new at["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e},addBug(t,e){t.bugs.push(e)},addNote(t,e){t.notes=e},deleteNote(t,e){t.notes=t.notes.filter(t=>t.id!=e)},closeBug(t){t.activeBug.closed="Closed"}},actions:{setBearer({},t){ct.defaults.headers.authorization=t},resetBearer(){ct.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await ct.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t}){try{let e=await ct.get("bugs");t("setBugs",e.data)}catch(e){console.error(e)}},async getActiveBug({commit:t},e){try{let s=await ct.get("bugs/"+e);t("setActiveBug",s.data),this.dispatch("getNotes",e)}catch(s){console.error(s)}},async getNotes({commit:t},e){try{let s=await ct.get("bugs/"+e+"/notes");t("setNotes",s.data)}catch(s){console.error(s)}},async addBug({commit:t},e){try{let s=await ct.post("bugs",e);t("addBug",s.data),$(".modal-backdrop").hide(),st.push({name:"bug-details",params:{bugId:s.data.id}})}catch(s){console.error(s)}},async addNote({commit:t,state:e},s){try{let a=await ct.post("notes",s);t("addNote",[...e.notes,a.data])}catch(a){console.error(a)}},async deleteNote({commit:t},e){try{await it.confirmAction("Are you sure you want to delete this note?","You will not be able to recover it")&&(await ct.delete("notes/"+e),t("deleteNote",e),it.success("Note deleted"))}catch(s){console.error(s)}},async closeBug({commit:t},e){try{await it.confirmAction("Are you sure you want to close this bug?","You will not be able to undo this action.")&&(await ct.delete("bugs/"+e),t("closeBug"),it.success("Bug closed successfully"))}catch(s){console.error(s)}},async editBug({commit:t},e){try{let s=await ct.put("bugs/"+e.id,e);t("setActiveBug",s.data),$("#editBugModal").hide(),$(".modal-backdrop").hide()}catch(s){console.error(s)}}}});const ut="dev-sa6ykm75.us.auth0.com",dt="https://kanban",bt="HSawOaGbXAgi79N1BGx7bEYNC8ZgtdxV";a["a"].use(u["a"],{domain:ut,clientId:bt,audience:dt,onRedirectCallback:t=>{st.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),a["a"].filter("formatDate",(function(t){if(t)return C()(String(t)).format("MM/DD/YYYY")})),new a["a"]({router:st,store:lt,render:function(t){return t(j)}}).$mount("#app")},"57cb":function(t,e,s){},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},7505:function(t,e,s){},"9c0c":function(t,e,s){},af8c:function(t,e,s){t.exports=s.p+"img/ant.112e9a97.png"},bd32:function(t,e,s){"use strict";var a=s("d39b"),o=s.n(a);o.a},d39b:function(t,e,s){},e668:function(t,e,s){"use strict";var a=s("57cb"),o=s.n(a);o.a},f7ef:function(t,e,s){"use strict";var a=s("fd60"),o=s.n(a);o.a},fd60:function(t,e,s){}});