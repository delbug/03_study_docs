(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(t,e,n){},378:function(t,e,n){"use strict";n(340)},387:function(t,e,n){"use strict";n.r(e);n(318);var a={computed:{data:function(){return this.$page.frontmatter}},mounted:function(){this.createValine()},methods:{createValine:function(){var t=n(376);window.AV=n(377);new t({el:"#vcomments",appId:"3L1fpObjz755gChYukdN6DYE-gzGzoHsz",appKey:"1tnWDx6OEre8iXr65lndUhFW",notify:!0,verify:!1,avatar:"monsterid",path:window.location.pathname,placeholder:"欢迎留言与我分享您的想法..."});this.valineRefresh=!1}},watch:{$route:function(t,e){var n=this;t.path!==e.path&&setTimeout((function(){n.createValine()}),300)}}},i=(n(378),n(45)),o=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return!0===this.data.comments?e("div",{staticClass:"vcomment"},[e("div",{attrs:{id:"vcomments"}})]):this._e()}),[],!1,null,null,null);e.default=o.exports}}]);