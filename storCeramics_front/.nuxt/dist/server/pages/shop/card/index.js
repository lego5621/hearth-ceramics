exports.ids = [14,1,2,6];
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5b11d058", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartInputPrice.vue?vue&type=template&id=733cf765&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quantity"},[_vm._ssrNode("<div class=\"pro-qty-2 text-center\"><input type=\"number\" min=\"1\""+(_vm._ssrAttr("max",this.$store.state.card.cart[this.product.slug].totalCount))+(_vm._ssrAttr("value",(_vm.count)))+"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CartInputPrice.vue?vue&type=template&id=733cf765&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartInputPrice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CartInputPricevue_type_script_lang_js_ = ({
  props: ['product'],
  computed: { ...Object(external_vuex_["mapGetters"])('card', ['getTotalPrice', 'getCart']),
    count: {
      get: function () {
        return this.$store.state.card.cart[this.product.slug].count;
      },
      set: function (count) {
        this.changeCountProductInCart({
          product: this.product,
          count: count
        });
      }
    }
  },
  methods: { ...Object(external_vuex_["mapMutations"])('card', ['changeCountProductInCart'])
  }
});
// CONCATENATED MODULE: ./components/CartInputPrice.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CartInputPricevue_type_script_lang_js_ = (CartInputPricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/CartInputPrice.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CartInputPricevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7fb3e272"
  
)

/* harmony default export */ var CartInputPrice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_385f71ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_385f71ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_385f71ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_385f71ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_385f71ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".center[data-v-385f71ad]{display:flex;align-items:center;justify-content:flex-start}img[data-v-385f71ad]{width:90px;height:90px;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}.cart__close i[data-v-385f71ad]{cursor:pointer}tr.clear-card[data-v-385f71ad]{border:none;text-align:center;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/card/index.vue?vue&type=template&id=385f71ad&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-grow-1 d-flex"},[_c('TheLayout',[_c('section',{staticClass:"breadcrumb-option"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"breadcrumb__text"},[_c('h4',[_vm._v("Корзина")]),_vm._v(" "),_c('div',{staticClass:"breadcrumb__links"},[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Главная")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{
                                        name: 'shop-category-category-series-series-page-page',
                                        params: {
                                            series: 'all',
                                            category: 'all',
                                            page: 1,
                                        },
                                    }}},[_vm._v("\n                                    Магазин\n                                ")]),_vm._v(" "),_c('span',[_vm._v("Корзина")])],1)])])])])]),_vm._v(" "),(!Object.keys(_vm.getCart).length)?_c('section',{staticClass:"d-flex flex-column flex-grow-1 align-items-center"},[_c('div',{staticClass:"flex-grow-1 center"},[_c('h4',[_vm._v("Ваша корзина пуста")])])]):_vm._e(),_vm._v(" "),(Object.keys(_vm.getCart).length)?_c('section',{staticClass:"shopping-cart spad"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-8"},[_c('div',{staticClass:"shopping__cart__table"},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Товар")]),_vm._v(" "),_c('th',[_vm._v("Количество")]),_vm._v(" "),_c('th',[_vm._v("Сумма")]),_vm._v(" "),_c('th')])]),_vm._v(" "),_c('tbody',_vm._l((_vm.getCart),function(prod){return _c('tr',{key:prod.slug},[_c('td',{staticClass:"product__cart__item"},[_c('NuxtLink',{attrs:{"to":{
                                                    name: 'product-slug',
                                                    params: {
                                                        slug: prod.slug,
                                                    },
                                                }}},[_c('div',{staticClass:"product__cart__item__pic"},[_c('img',{staticClass:"rounded-lg",attrs:{"src":_vm.urlApi +
                                                            prod.image,"alt":prod.name}})]),_vm._v(" "),_c('div',{staticClass:"product__cart__item__text"},[_c('h6',[_vm._v("\n                                                        "+_vm._s(prod.name)+"\n                                                    ")]),_vm._v(" "),_c('h5',[_vm._v("\n                                                        "+_vm._s(prod.price)+" ₽\n                                                    ")])])])],1),_vm._v(" "),_c('td',{staticClass:"quantity__item"},[_c('CartInputPrice',{attrs:{"product":prod}})],1),_vm._v(" "),_c('td',{staticClass:"cart__price"},[_vm._v("\n                                            "+_vm._s(prod.price * prod.count)+" ₽\n                                        ")]),_vm._v(" "),_c('td',{staticClass:"cart__close",on:{"click":function($event){return _vm.removeProduct({
                                                    product: prod,
                                                })}}},[_c('i',{staticClass:"fa fa-close"})])])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"cart__total rounded-lg"},[_c('h6',[_vm._v("Цена корзины")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Доставка"),_c('span',[_vm._v("300 ₽")])]),_vm._v(" "),_c('li',[_vm._v("\n                                    Итого "),_c('span',[_vm._v(_vm._s(_vm.getTotalPrice +300)+" ₽")])])]),_vm._v(" "),_c('NuxtLink',{staticClass:"primary-btn rounded-lg",attrs:{"to":"/shop/card/checkout"}},[_vm._v("\n                                Оформить заказ\n                            ")])],1)])])])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/card/index.vue?vue&type=template&id=385f71ad&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/card/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  data: function () {
    return {
      urlApi: 'http://localhost:1337',
      caunt: 0
    };
  },
  computed: { ...Object(external_vuex_["mapGetters"])('card', ['getCart', 'getTotalPrice'])
  },
  methods: { ...Object(external_vuex_["mapMutations"])('card', ['removeProduct'])
  }
});
// CONCATENATED MODULE: ./pages/shop/card/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var shop_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/shop/card/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shop_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "385f71ad",
  "587c57a0"
  
)

/* harmony default export */ var card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartInputPrice: __webpack_require__(78).default,TheLayout: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=index.js.map