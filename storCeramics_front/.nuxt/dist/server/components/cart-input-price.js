exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=cart-input-price.js.map