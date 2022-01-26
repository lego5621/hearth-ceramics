exports.ids = [12,2,4,6];
exports.modules = {

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=dfbd5786&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 text-center\"><div class=\"footer__copyright__text\"><p>"+_vm._ssrEscape("\n                        Copyright ©"+_vm._s(new Date().getFullYear())+"\n                        Все права защищены\n                    ")+"</p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=dfbd5786&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "420d2f83"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(68).default})


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheLayout.vue?vue&type=template&id=763a3d86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-column flex-grow-1"},[_vm._ssrNode("<div class=\"flex-grow-1 d-flex flex-column\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheLayout.vue?vue&type=template&id=763a3d86&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/TheLayout.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48038d43"
  
)

/* harmony default export */ var TheLayout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(68).default})


/***/ }),

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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("fb031fc4", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_fe1d5414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_fe1d5414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_fe1d5414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_fe1d5414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_fe1d5414_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel[data-v-fe1d5414]{min-width:100%!important;width:0!important}img[data-v-fe1d5414]{pointer-events:none;border-radius:10px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.center[data-v-fe1d5414]{justify-content:center;align-items:center;padding:0 10px}.slick-slider[data-v-fe1d5414]{width:100%;align-items:center}.form[data-v-fe1d5414]{display:flex;justify-content:center}input[data-v-fe1d5414]{width:15%;padding:5px;margin-right:20px;border:none;text-align:center}button[data-v-fe1d5414]{border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:14px 30px;color:#fff;background:#000;letter-spacing:4px}@media only screen and (min-width:425px){.VueSlickCarouselImg[data-v-fe1d5414]{height:472.5px!important;width:633px!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=template&id=fe1d5414&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-grow-1 d-flex"},[(_vm.productItem[0])?_c('TheLayout',[_c('section',{staticClass:"shop-details"},[_c('div',{staticClass:"product__details__pic"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"product__details__breadcrumb"},[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Главная")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{
                                        name: 'shop-category-category-series-series-page-page',
                                        params: {
                                            category: 'all',
                                            series: 'all',
                                            page: 1,
                                        },
                                    }}},[_vm._v("\n                                    Магазин\n                                ")]),_vm._v(" "),_c('span',[_vm._v("\n                                    "+_vm._s(_vm.productItem[0].Name)+"\n                                ")])],1)])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-7"},[_c('div',{staticClass:"carousel"},[_c('VueSlickCarousel',{attrs:{"dots":true,"edgeFriction":0.35,"infinite":true,"slidesToShow":1,"slidesToScroll":1,"arrows":false,"autoplay":true,"speed":1000,"autoplaySpeed":3000}},_vm._l((_vm.productItem[0].image),function(img){return _c('div',{key:img.url,staticClass:"d-flex center VueSlickCarouselDiv"},[_c('img',{staticClass:"VueSlickCarouselImg",attrs:{"src":_vm.urlApi + img.url,"alt":_vm.productItem[0].Name}})])}),0)],1)]),_vm._v(" "),_c('div',{staticClass:"col-lg-5 center mt-5 mt-lg-0"},[_c('div',{staticClass:"product__details__text"},[(_vm.productItem[0])?_c('h4',[_vm._v("\n                                    "+_vm._s(_vm.productItem[0].Name)+"\n                                ")]):_vm._e(),_vm._v(" "),(_vm.productItem[0])?_c('h3',[_vm._v("\n                                    "+_vm._s(Math.abs(
                                            _vm.productItem[0].Price *
                                                this.count
                                        ))+"₽\n                                    "),(_vm.productItem[0].OldPrice)?_c('span',[_vm._v("\n                                        "+_vm._s(Math.abs(
                                                _vm.productItem[0].OldPrice *
                                                    this.count
                                            ))+"₽\n                                    ")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"mb-3"},[_vm._v("\n                                    "+_vm._s(_vm.productItem[0].description)+"\n                                ")]),_vm._v(" "),_c('p',{staticClass:"mb-2"},[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Серия:")]),_vm._v("\n                                    "+_vm._s(_vm.productItem[0].product_sery.name)+"\n                                ")]),_vm._v(" "),_c('p',{staticClass:"mb-2"},[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Материалы:")]),_vm._v("\n                                    "+_vm._s(_vm.productItem[0].material)+"\n                                ")]),_vm._v(" "),_c('p',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("\n                                        В наличии:\n                                    ")]),_vm._v("\n                                    "+_vm._s(_vm.productItem[0].count)+"\n                                ")]),_vm._v(" "),_c('div',{staticClass:"product__details__cart__option"},[_c('div',{staticClass:"form"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.count),expression:"count",modifiers:{"number":true}}],staticClass:"rounded-lg",attrs:{"type":"number","min":"1","max":_vm.productItem[0].count},domProps:{"value":(_vm.count)},on:{"input":function($event){if($event.target.composing){ return; }_vm.count=_vm._n($event.target.value)},"blur":function($event){return _vm.$forceUpdate()}}}),_vm._v(" "),_c('button',{staticClass:"rounded-lg",on:{"click":function($event){$event.preventDefault();return _vm.addProductInCart({
                                                    product: _vm.productItem[0],
                                                    count: _vm.count,
                                                })}}},[_vm._v("\n                                            В корзину\n                                        ")])])])])])])])])]),_vm._v(" "),_c('section',{staticClass:"related"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('h4',{staticClass:"mb-xl-4 mb-2 text-uppercase"},[_vm._v("\n                            доставка\n                        ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.productItem[2].delivery))])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 mt-md-0 mt-4"},[_c('h4',{staticClass:"mb-xl-4 mb-2 text-uppercase"},[_vm._v("\n                            политика возврата\n                        ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.productItem[2].returnPolicy))])])])])]),_vm._v(" "),_c('section',{staticClass:"mb-4"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('h3',{staticClass:"related-title"},[_vm._v("Последние поступления")])])]),_vm._v(" "),_c('div',[(_vm.productItem[1] !== 'noData')?_c('div',{staticClass:"row"},_vm._l((this.productItem[1]),function(item){return _c('ProductCard',{key:item.id,attrs:{"product":item,"urlApi":_vm.urlApi,"lg":"col-lg-4"}})}),1):_vm._e()])])])]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=template&id=fe1d5414&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'slug',

  data() {
    return {
      urlApi: 'http://localhost:1337',
      count: 1
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])('product', ['fetchProductItem']),
    ...Object(external_vuex_["mapMutations"])('card', ['addProductInCart'])
  },
  computed: { ...Object(external_vuex_["mapGetters"])('product', ['productItem', 'productSEOTitle', 'productSEODescription'])
  },

  async fetch() {
    if (false) {}

    try {
      await this.fetchProductItem(this.$route.params.slug);
    } catch {
      this.$nuxt.error({
        statusCode: 404
      });
    }
  },

  head() {
    return {
      title: this.productSEOTitle + ' - hearth.ceramics',
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.productSEODescription
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/product/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fe1d5414",
  "be6b3e64"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(70).default,TheLayout: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map