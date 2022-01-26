exports.ids = [16,3,4];
exports.modules = {

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=50152536&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-6 col-sm-6 new-arrivals",class:_vm.lg},[_vm._ssrNode("<div class=\"product__item sale\">","</div>",[_c('NuxtLink',{attrs:{"to":{
                name: 'product-slug',
                params: { slug: _vm.product.slug },
            }}},[_c('div',{staticClass:"product__item__pic set-bg rounded-lg",style:({
                    'background-image':
                        'url(' + _vm.urlApi + _vm.product.image[0].url + ')',
                })},[(_vm.product.OldPrice)?_c('span',{staticClass:"label"},[_vm._v("Скидка")]):_vm._e()])]),_vm._ssrNode(" <div class=\"product__item__text\"><h6>"+_vm._ssrEscape(_vm._s(_vm.product.Name))+"</h6> <span class=\"add-cart\">\n                + Добавить в корзину\n            </span> <h5>"+_vm._ssrEscape("\n                "+_vm._s(_vm.product.Price)+"₽\n                ")+((_vm.product.OldPrice)?("<span>"+_vm._ssrEscape("\n                    "+_vm._s(Math.abs(_vm.product.OldPrice))+"₽\n                ")+"</span>"):"<!---->")+"</h5></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=50152536&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: 'Card',
  props: ['product', 'urlApi', 'lg'],
  methods: { ...Object(external_vuex_["mapMutations"])('card', ['addProductInCart'])
  }
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/ProductCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e1d32632"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4b821206", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=36da3ed2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.caunt / _vm.pageLimit > 1)?_c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"product__pagination\">","</div>",[(Number(this.$route.params.page) > 1)?_c('NuxtLink',{attrs:{"to":{
                    name: 'shop-category-category-series-series-page-page',
                    params: {
                        category: _vm.$route.params.category,
                        series: _vm.$route.params.series,
                        page: Number(this.$route.params.page) - 1,
                    },
                }}},[_vm._v("\n                "+_vm._s(Number(this.$route.params.page) - 1)+"\n            ")]):_vm._e(),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"active",attrs:{"to":{
                    name: 'shop-category-category-series-series-page-page',
                    params: {
                        category: _vm.$route.params.category,
                        series: _vm.$route.params.series,
                        page: _vm.$route.params.page,
                    },
                }}},[_vm._v("\n                "+_vm._s(this.$route.params.page)+"\n            ")]),_vm._ssrNode(" "),(Number(_vm.caunt / _vm.pageLimit) > this.$route.params.page)?_c('NuxtLink',{attrs:{"to":{
                    name: 'shop-category-category-series-series-page-page',
                    params: {
                        category: _vm.$route.params.category,
                        series: _vm.$route.params.series,
                        page: Number(this.$route.params.page) + 1,
                    },
                }}},[_vm._v("\n                "+_vm._s(Number(this.$route.params.page) + 1)+"\n            ")]):_vm._e()],2)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=36da3ed2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: ['caunt', 'pageLimit']
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Pagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bd149bfc"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_34f2e370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_34f2e370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_34f2e370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_34f2e370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_vue_vue_type_style_index_0_id_34f2e370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".placeholder[data-v-34f2e370]{min-height:700px}.text-center[data-v-34f2e370]{text-align:center;font-size:18px;color:#111;display:block;font-weight:600}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/category/_category/series/_series/page/_page.vue?vue&type=template&id=34f2e370&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((!_vm.products[0])?("<div class=\"placeholder\" data-v-34f2e370></div>"):"<!---->")+" "),(_vm.products[0] !== 'noData')?_vm._ssrNode("<div data-v-34f2e370>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-34f2e370>","</div>",_vm._l((this.products),function(item){return _c('ProductCard',{key:item.id,attrs:{"product":item,"urlApi":_vm.urlApi,"lg":"col-lg-4"}})}),1),_vm._ssrNode(" "),_c('Pagination',{attrs:{"caunt":_vm.productCaunt,"pageLimit":_vm.pageLimit}})],2):_vm._e(),_vm._ssrNode(" "+((_vm.products[0] === 'noData')?("<p class=\"text-center\" data-v-34f2e370>\n        Извините, мы ничего не нашли :(\n    </p>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/category/_category/series/_series/page/_page.vue?vue&type=template&id=34f2e370&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/category/_category/series/_series/page/_page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _pagevue_type_script_lang_js_ = ({
  props: ['products', 'urlApi', 'productCaunt', 'pageLimit'],
  methods: { ...Object(external_vuex_["mapActions"])('product', ['fetchProductList']),
    fetchMoreProductList: function () {
      this.fetchProductList([this.$route.params]);
    }
  }
});
// CONCATENATED MODULE: ./pages/shop/category/_category/series/_series/page/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/shop/category/_category/series/_series/page/_page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34f2e370",
  "716d1b8e"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(70).default,Pagination: __webpack_require__(80).default})


/***/ })

};;
//# sourceMappingURL=_page.js.map