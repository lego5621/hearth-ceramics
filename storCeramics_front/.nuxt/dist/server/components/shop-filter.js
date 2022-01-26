exports.ids = [5];
exports.modules = {

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("58d4d486", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopFilter_vue_vue_type_style_index_0_id_72e94648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopFilter_vue_vue_type_style_index_0_id_72e94648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopFilter_vue_vue_type_style_index_0_id_72e94648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopFilter_vue_vue_type_style_index_0_id_72e94648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopFilter_vue_vue_type_style_index_0_id_72e94648_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a.activeFilter[data-v-72e94648]{color:#111!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopFilter.vue?vue&type=template&id=72e94648&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-3 pt-lg-5"},[_vm._ssrNode("<div class=\"shop__sidebar\" data-v-72e94648>","</div>",[_vm._ssrNode("<div class=\"shop__sidebar__accordion\" data-v-72e94648>","</div>",[_vm._ssrNode("<div id=\"accordionExample\" class=\"accordion\" data-v-72e94648>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-72e94648>","</div>",[_vm._ssrNode("<div class=\"card-heading\" data-v-72e94648><span data-v-72e94648>Категории</span></div> "),_vm._ssrNode("<div class=\"card-body\" data-v-72e94648>","</div>",[(_vm.category[0])?_vm._ssrNode("<div class=\"shop__sidebar__categories\" data-v-72e94648>","</div>",[_vm._ssrNode("<ul class=\"nice-scroll\" data-v-72e94648>","</ul>",[_vm._ssrNode("<li data-v-72e94648>","</li>",[_c('NuxtLink',{class:_vm.$route.params.category == 'all'
                                                ? 'activeFilter'
                                                : '',attrs:{"to":{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                category: 'all',
                                                series: _vm.$route.params
                                                    .series,
                                                page: 1,
                                            },
                                        }}},[_vm._v("\n                                        Все\n                                    ")])],1),_vm._ssrNode(" "),_vm._l((_vm.category),function(i){return _vm._ssrNode("<li data-v-72e94648>","</li>",[_c('NuxtLink',{class:_vm.$route.params.category == i.slug
                                                ? 'activeFilter'
                                                : '',attrs:{"to":{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                category: i.slug,
                                                series: _vm.$route.params
                                                    .series,
                                                page: 1,
                                            },
                                        }}},[_vm._v("\n                                        "+_vm._s(i.name)+"\n                                    ")])],1)})],2)]):_vm._e()])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card\" data-v-72e94648>","</div>",[_vm._ssrNode("<div class=\"card-heading\" data-v-72e94648><span data-v-72e94648>Серии</span></div> "),_vm._ssrNode("<div id=\"collapseThree\" data-parent=\"#accordionExample\" class=\"collapse show\" data-v-72e94648>","</div>",[_vm._ssrNode("<div class=\"card-body\" data-v-72e94648>","</div>",[_vm._ssrNode("<div class=\"shop__sidebar__price\" data-v-72e94648>","</div>",[_vm._ssrNode("<ul class=\"nice-scroll\" data-v-72e94648>","</ul>",[_vm._ssrNode("<li data-v-72e94648>","</li>",[_c('NuxtLink',{class:_vm.$route.params.series ==
                                                'all'
                                                    ? 'activeFilter'
                                                    : '',attrs:{"to":{
                                                name: 'shop-category-category-series-series-page-page',
                                                params: {
                                                    series: 'all',
                                                    category:
                                                        _vm.$route.params
                                                            .category,
                                                    page: 1,
                                                },
                                            }}},[_vm._v("\n                                            Все\n                                        ")])],1),_vm._ssrNode(" "),_vm._l((_vm.series),function(i){return _vm._ssrNode("<li data-v-72e94648>","</li>",[_c('NuxtLink',{class:_vm.$route.params.series ==
                                                i.slug
                                                    ? 'activeFilter'
                                                    : '',attrs:{"to":{
                                                name: 'shop-category-category-series-series-page-page',
                                                params: {
                                                    series: i.slug,
                                                    category:
                                                        _vm.$route.params
                                                            .category,
                                                    page: 1,
                                                },
                                            }}},[_vm._v("\n                                            "+_vm._s(i.name)+"\n                                        ")])],1)})],2)])])])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShopFilter.vue?vue&type=template&id=72e94648&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopFilter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ShopFiltervue_type_script_lang_js_ = ({
  data() {
    return {
      category: [],
      series: [],
      error: null,
      urlApi: 'http://localhost:1337'
    };
  },

  async beforeCreate() {
    try {
      this.category = await this.$strapi.$categories.find();
      this.series = await this.$strapi['$product-series'].find();
    } catch (error) {
      this.error = error;
    }
  }

});
// CONCATENATED MODULE: ./components/ShopFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopFiltervue_type_script_lang_js_ = (ShopFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/ShopFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72e94648",
  "edc1bb14"
  
)

/* harmony default export */ var ShopFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shop-filter.js.map