!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/bundles/administration/",r(r.s="vb55")}({"251U":function(e,t,r){},"2eDk":function(e,t,r){var n=r("4PmU");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("SZ7m").default)("74542846",n,!0,{})},"4PmU":function(e,t,r){},BorJ:function(e,t){e.exports='<sw-page class="frosh-mail-archive-detail">\n    <template slot="smart-bar-header">\n        <h2 v-if="archive">{{ archive.subject }}</h2>\n    </template>\n\n    <template slot="smart-bar-actions">\n        <sw-button variant="ghost" v-if="archive && archive.customer" @click="openCustomer">\n            {{ $tc(\'frosh-mail-archive.detail.toolbar.customer\') }}\n        </sw-button>\n\n        <sw-button-process :isLoading="isLoading" :processSuccess="isSuccessful" @click="resendMail">\n            {{ $tc(\'frosh-mail-archive.detail.toolbar.resend\') }}\n        </sw-button-process>\n    </template>\n\n    <template slot="content">\n        <sw-card-view v-if="archive">\n            <sw-card :title="$tc(\'frosh-mail-archive.detail.metadata.title\')">\n                <sw-text-field :label="$tc(\'frosh-mail-archive.detail.metadata.sentDate\')" :disabled="true" v-model="createdAtDate"></sw-text-field>\n                <sw-text-field :label="$tc(\'frosh-mail-archive.detail.metadata.sender\')" :disabled="true" v-model="senderText"></sw-text-field>\n                <sw-text-field :label="$tc(\'frosh-mail-archive.detail.metadata.receiver\')" :disabled="true" v-model="receiverText"></sw-text-field>\n                <sw-text-field :label="$tc(\'frosh-mail-archive.detail.metadata.subject\')" :disabled="true" v-model="archive.subject"></sw-text-field>\n                <sw-text-field :label="$tc(\'frosh-mail-archive.detail.metadata.salesChannel\')" v-if="archive.salesChannel" :disabled="true" v-model="archive.salesChannel.name"></sw-text-field>\n            </sw-card>\n            <sw-card :title="$tc(\'frosh-mail-archive.detail.content.title\')">\n                <h4>HTML</h4>\n                <iframe :src="htmlText" sandbox frameborder="0"></iframe>\n                <h4>Plain</h4>\n\n                <iframe :src="plainText" sandbox frameborder="0"></iframe>\n            </sw-card>\n        </sw-card-view>\n    </template>\n</sw-page>\n'},"NH/Y":function(e,t,r){var n=r("251U");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("SZ7m").default)("3f1d3934",n,!0,{})},SZ7m:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},i=0;i<t.length;i++){var a=t[i],o=a[0],s={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};n[o]?n[o].parts.push(s):r.push(n[o]={id:o,parts:[s]})}return r}r.r(t),r.d(t,"default",(function(){return m}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},f=null,d="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,i){c=r,f=i||{};var o=n(e,t);return p(o),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i];(l=a[s.id]).refs--,r.push(l)}t?p(o=n(e,t)):o=[];for(i=0;i<r.length;i++){var l;if(0===(l=r[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function p(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(b(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var o=[];for(i=0;i<r.parts.length;i++)o.push(b(r.parts[i]));a[r.id]={id:r.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function b(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(c)return u;n.parentNode.removeChild(n)}if(h){var i=l++;n=s||(s=v()),t=w.bind(null,n,i,!1),r=w.bind(null,n,i,!0)}else n=v(),t=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function x(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),f.ssrId&&e.setAttribute(d,t.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},iIF9:function(e,t){e.exports='<sw-page>\n    <template slot="smart-bar-header">\n        <h2>{{ $tc(\'frosh-mail-archive.title\') }}</h2>\n    </template>\n    <template slot="content">\n        <sw-entity-listing\n            v-if="items"\n            :items="items"\n            :columns="columns"\n            :isLoading="isLoading"\n            :repository="mailArchiveRepository"\n        >\n            <template slot="column-receiver" slot-scope="{ item }">\n                <span v-for="(element, index) in item.receiver">\n                    {{ element }} &lt;<a :href=\'`mailto:${index}`\'>{{ index }}</a>&gt;\n                </span>\n            </template>\n\n            <template slot="column-createdAt" slot-scope="{ item }">\n                {{ item.createdAt | date({hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\'}) }}\n            </template>\n\n            <template slot="detail-action" slot-scope="{ item }">\n                <sw-context-menu-item class="sw-entity-listing__context-menu-show-action" :routerLink="{ name: \'frosh.mail.archive.detail\', params: { id: item.id } }">\n                    {{ $tc(\'frosh-mail-archive.list.columns.action\') }}\n                </sw-context-menu-item>\n            </template>\n        </sw-entity-listing>\n    </template>\n\n    <sw-sidebar slot="sidebar">\n        <sw-sidebar-item\n            icon="default-arrow-360-left"\n            :title="$tc(\'frosh-mail-archive.list.sidebar.refresh\')"\n            @click="onRefresh">\n        </sw-sidebar-item>\n\n        <sw-sidebar-item icon="default-action-filter"\n                         :title="$tc(\'frosh-mail-archive.list.sidebar.filter\')">\n            <sw-text-field :label="$tc(\'frosh-mail-archive.list.sidebar.filters.search\')" v-model="filter.term"></sw-text-field>\n\n            <sw-entity-single-select\n                v-model="filter.salesChannelId"\n                :label="$tc(\'frosh-mail-archive.list.sidebar.filters.salesChannel\')"\n                entity="sales_channel"\n            ></sw-entity-single-select>\n\n            <sw-entity-single-select\n                v-model="filter.customerId"\n                :label="$tc(\'frosh-mail-archive.list.sidebar.filters.customer\')"\n                entity="customer"\n            >\n                <template #result-label-property="{ item, index, searchTerm, getKey }">\n                    <sw-highlight-text :text="`${getKey(item, \'firstName\')} ${getKey(item, \'lastName\')}${getKey(item, \'lastName\') ? \' (\' + getKey(item, \'lastName\') + \')\' : \'\'}`"\n                                       :searchTerm="searchTerm">\n                    </sw-highlight-text>\n                </template>\n            </sw-entity-single-select>\n\n            <sw-button\n                variant="ghost"\n                @click="resetFilter">\n                {{ $tc(\'frosh-mail-archive.list.sidebar.filters.resetFilter\') }}\n            </sw-button>\n        </sw-sidebar-item>\n    </sw-sidebar>\n</sw-page>\n'},vb55:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var i=d(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t);var h=Shopware.Classes.ApiService,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,e);var t,r,n,i=u(o);function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"frosh-mail-archive";return s(this,o),i.call(this,e,t,r)}return t=o,(r=[{key:"resendMail",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/resend-mail"),{mailId:e},a(a({},this.basicConfig),{},{headers:t})).then((function(e){return h.handleResponse(e)}))}}])&&l(t.prototype,r),n&&l(t,n),o}(h),p=Shopware.Application;p.addServiceProvider("froshMailArchiveService",(function(e){var t=p.getContainer("init");return new m(t.httpClient,e.loginService)}));var v=r("iIF9"),b=r.n(v),g=(r("2eDk"),Shopware),y=g.Component,w=g.Mixin,x=Shopware.Data.Criteria,S=Shopware.Utils;y.register("frosh-mail-archive-index",{template:b.a,inject:["repositoryFactory"],mixins:[w.getByName("listing")],metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{page:1,limit:25,total:0,repository:null,items:null,isLoading:!0,filter:{salesChannelId:null,customerId:null,term:null}}},computed:{columns:function(){return[{property:"createdAt",dataIndex:"createdAt",label:"frosh-mail-archive.list.columns.sentDate",primary:!0,routerLink:"frosh.mail.archive.detail"},{property:"subject",dataIndex:"subject",label:"frosh-mail-archive.list.columns.subject",allowResize:!0,routerLink:"frosh.mail.archive.detail"},{property:"receiver",dataIndex:"receiver",label:"frosh-mail-archive.list.columns.receiver",allowResize:!0}]},mailArchiveRepository:function(){return this.repositoryFactory.create("frosh_mail_archive")}},methods:{getList:function(){var e=this;this.isLoading=!0;var t=new x;return this.filter.salesChannelId&&t.addFilter(x.equals("salesChannelId",this.filter.salesChannelId)),this.filter.customerId&&t.addFilter(x.equals("customerId",this.filter.customerId)),this.filter.term&&t.setTerm(this.filter.term),t.addSorting(x.sort("createdAt","DESC")),this.mailArchiveRepository.search(t,Shopware.Context.api).then((function(t){e.items=t,e.total=t.total,e.isLoading=!1}))},resetFilter:function(){this.filter={salesChannelId:null,customerId:null,term:null},this.getList()}},watch:{filter:{deep:!0,handler:S.debounce((function(){this.getList()}),400)}}});var j=r("BorJ"),C=r.n(j);r("NH/Y");Shopware.Component.register("frosh-mail-archive-detail",{template:C.a,inject:["repositoryFactory","froshMailArchiveService"],data:function(){return{archive:null,isLoading:!1,isSuccessful:!1}},created:function(){var e=this;this.repository=this.repositoryFactory.create("frosh_mail_archive"),this.repository.get(this.$route.params.id,Shopware.Context.api).then((function(t){e.archive=t}))},computed:{createdAtDate:function(){var e=Shopware.State.getters.adminLocaleLanguage||"en";return new Intl.DateTimeFormat(e,{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date(this.archive.createdAt))},receiverText:function(){var e=this,t=[];return Object.keys(this.archive.receiver).forEach((function(r){t.push("".concat(e.archive.receiver[r]," <").concat(r,">"))})),t.join(",")},senderText:function(){var e=this,t=[];return Object.keys(this.archive.sender).forEach((function(r){t.push("".concat(e.archive.sender[r]," <").concat(r,">"))})),t.join(",")},htmlText:function(){return this.getContent(this.archive.htmlText)},plainText:function(){return this.getContent(this.archive.plainText)}},methods:{getContent:function(e){return"data:text/html;base64,"+btoa(unescape(encodeURIComponent(e.replace(/[\u00A0-\u2666]/g,(function(e){return"&#"+e.charCodeAt(0)+";"})))))},openCustomer:function(){this.$router.push({name:"sw.customer.detail",params:{id:this.archive.customer.id}})},resendMail:function(){var e=this;this.isLoading=!0,this.froshMailArchiveService.resendMail(this.archive.id).then((function(){e.isLoading=!1,e.isSuccessful=!0})).catch((function(){e.isLoading=!1,e.isSuccessful=!1}))}}}),Shopware.Module.register("frosh-mail-archive",{type:"plugin",name:"frosh-mail-archive.title",title:"frosh-mail-archive.title",description:"",color:"#243758",icon:"default-communication-envelope",routes:{list:{component:"frosh-mail-archive-index",path:"list"},detail:{component:"frosh-mail-archive-detail",path:"detail/:id",meta:{parentPath:"frosh.mail.archive.list"}}},settingsItem:[{group:"plugins",to:"frosh.mail.archive.list",icon:"default-communication-envelope",name:"frosh-mail-archive.title"}]})}});