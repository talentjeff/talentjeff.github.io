(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[1965],{85523:function(t,n,i){var e=i(87994);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var o=i(56).Z;o("5a986601",e,!0,{sourceMap:!1,shadowMode:!1})},65859:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return p}});var e,o={uniCard:i(54074).Z,uniSection:i(46726).Z,uniLink:i(26618).Z},s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。")])],1),i("uni-section",{attrs:{title:"基本示例",subTitle:"打开外部连接",type:"line",padding:!0}},[i("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/"}})],1),i("uni-section",{attrs:{title:"自定义颜色",type:"line",padding:!0}},[i("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",color:"#007BFF"}})],1),i("uni-section",{attrs:{title:"自定义下划线",type:"line",padding:!0}},[i("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false"}})],1),i("uni-section",{attrs:{title:"自定义字体大小",type:"line",padding:!0}},[i("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false","font-size":"20"}})],1),i("uni-section",{attrs:{title:"自定义插槽",type:"line",padding:!0}},[i("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false",color:"red"}},[t._v("点击跳转")])],1)],1)},l=[],u={components:{},data:function(){return{}}},r=u,a=i(69453),d=(0,a.Z)(r,s,l,!1,null,"0c7489a8",null,!1,o,e),p=d.exports},26618:function(t,n,i){"use strict";var e;i.d(n,{Z:function(){return p}});var o,s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},l=[],u=(i(79288),i(268),{name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}}),r=u,a=(i(85523),i(69453)),d=(0,a.Z)(r,s,l,!1,null,"03b6d5de",null,!1,e,o),p=d.exports},87994:function(t,n,i){"use strict";i.r(n);var e=i(43481),o=i.n(e),s=i(2400),l=i.n(s),u=l()(o());u.push([t.id,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),n["default"]=u}}]);