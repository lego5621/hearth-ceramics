exports.ids = [4];
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

/***/ })

};;
//# sourceMappingURL=product-card.js.map