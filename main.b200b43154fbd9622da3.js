(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("QJ3N"),t("zrP5"),t("bzha"),t("JBxO"),t("FdtR");var a={page:1,key:"17197765-c51078dcc877b1a19d5004a4f",query:"",fetchImages:function(){var e=this,n="?q="+this.query+"&image_type=photo&orientation=horizontal&page="+this.page+"&per_page=12&key="+this.key;return fetch("https://pixabay.com/api/"+n).then((function(e){return e.json()})).then((function(n){return e.incrementPage(),n.hits})).catch((function(e){return error("Something bad happend.Cannot fetch data from API.Please, try again later.")}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},l=t("VUTP"),r=t.n(l),o=(t("dcBu"),{searchForm:document.querySelector("#search-form"),gallery:document.querySelector("#gallery"),loadMoreBtn:document.querySelector("#loadMore")});function s(e){var n=r()(e);o.gallery.insertAdjacentHTML("beforeend",n)}o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),o.gallery.innerHTML="",a.resetPage();var n=e.currentTarget.elements.query.value;a.searchQuery=n,a.fetchImages().then((function(e){return s(e)}))})),o.loadMoreBtn.addEventListener("click",(function(e){a.fetchImages().then((function(e){return s(e)}))}))},VUTP:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var r,o=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c="function",i=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="gallery__item">\r\n    <div class="photo-card">\r\n        <img src="'+i(typeof(r=null!=(r=u(t,"webformatURL")||(null!=n?u(n,"webformatURL"):n))?r:s)===c?r.call(o,{name:"webformatURL",hash:{},data:l,loc:{start:{line:4,column:18},end:{line:4,column:34}}}):r)+'" alt="'+i(typeof(r=null!=(r=u(t,"tags")||(null!=n?u(n,"tags"):n))?r:s)===c?r.call(o,{name:"tags",hash:{},data:l,loc:{start:{line:4,column:41},end:{line:4,column:49}}}):r)+'" />\r\n\r\n        <div class="stats">\r\n            <p class="stats-item">\r\n                <i class="material-icons">thumb_up</i>\r\n                '+i(typeof(r=null!=(r=u(t,"likes")||(null!=n?u(n,"likes"):n))?r:s)===c?r.call(o,{name:"likes",hash:{},data:l,loc:{start:{line:9,column:16},end:{line:9,column:25}}}):r)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">visibility</i>\r\n                '+i(typeof(r=null!=(r=u(t,"views")||(null!=n?u(n,"views"):n))?r:s)===c?r.call(o,{name:"views",hash:{},data:l,loc:{start:{line:13,column:16},end:{line:13,column:25}}}):r)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">comments</i>\r\n                '+i(typeof(r=null!=(r=u(t,"comments")||(null!=n?u(n,"comments"):n))?r:s)===c?r.call(o,{name:"comments",hash:{},data:l,loc:{start:{line:17,column:16},end:{line:17,column:28}}}):r)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">cloud_download</i>\r\n                '+i(typeof(r=null!=(r=u(t,"downloads")||(null!=n?u(n,"downloads"):n))?r:s)===c?r.call(o,{name:"downloads",hash:{},data:l,loc:{start:{line:21,column:16},end:{line:21,column:29}}}):r)+"\r\n            </p>\r\n        </div>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r;return null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b200b43154fbd9622da3.js.map