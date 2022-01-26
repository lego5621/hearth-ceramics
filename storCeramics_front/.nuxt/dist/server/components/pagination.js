exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=pagination.js.map