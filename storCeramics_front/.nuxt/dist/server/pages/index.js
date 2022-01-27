exports.ids = [11,2,4,6];
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=cda5c658&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.allData[1])?_c('div',{staticClass:"flex-grow-1 d-flex"},[_c('TheLayout',[_c('section',{staticClass:"banner"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row position-relative container__banner"},[_c('div',{staticClass:"col-xl-4 banner__title"},[_c('h2',{staticClass:"mt-lg-5 mb-4"},[_vm._v("\n                            Уникальные изделия ручной работы\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"col-xl-7"},[_c('div',{staticClass:"banner__item banner__item--first"},[_c('div',{staticClass:"banner__item__pic rounded-lg banner__item__img"},[_c('img',{staticClass:"rounded-lg",attrs:{"src":_vm.urlApi + _vm.allData[1][0].logo.url,"alt":'Серия' + _vm.allData[1][0].Name}})]),_vm._v(" "),_c('div',{staticClass:"banner__item__text"},[_c('h2',[_vm._v("\""+_vm._s(_vm.allData[1][0].name)+"\"")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{
                                        name: 'shop-category-category-series-series-page-page',
                                        params: {
                                            category: 'all',
                                            series: _vm.allData[1][0].slug,
                                            page: 1,
                                        },
                                    }}},[_vm._v("К серии\n                                ")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-xl-5"},[_c('div',{staticClass:"banner__item banner__item--middle banner__item__img--middle"},[_c('div',{staticClass:"banner__item__pic rounded-lg"},[_c('img',{staticClass:"rounded-lg",attrs:{"src":_vm.urlApi + _vm.allData[1][1].logo.url,"alt":'Серия' + _vm.allData[1][1].Name}})]),_vm._v(" "),_c('div',{staticClass:"banner__item__text"},[_c('h2',[_vm._v("\""+_vm._s(_vm.allData[1][1].name)+"\"")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{
                                        name: 'shop-category-category-series-series-page-page',
                                        params: {
                                            category: 'all',
                                            series: _vm.allData[1][1].slug,
                                            page: 1,
                                        },
                                    }}},[_vm._v("К серии\n                                ")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-xl-7"},[_c('div',{staticClass:"banner__item banner__item--last"},[_c('div',{staticClass:"banner__item__pic rounded-lg banner__item__img--last"},[_c('img',{staticClass:"rounded-lg",attrs:{"src":_vm.urlApi + _vm.allData[1][2].logo.url,"alt":'Серия' + _vm.allData[1][2].Name}})]),_vm._v(" "),_c('div',{staticClass:"banner__item__text"},[_c('h2',[_vm._v("\""+_vm._s(_vm.allData[1][2].name)+"\"")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{
                                        name: 'shop-category-category-series-series-page-page',
                                        params: {
                                            category: 'all',
                                            series: _vm.allData[1][2].slug,
                                            page: 1,
                                        },
                                    }}},[_vm._v("К серии\n                                ")])],1)])])])])]),_vm._v(" "),_c('section',{staticClass:"product spad"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12 banner__title"},[_c('h2',{staticClass:"mb-4"},[_vm._v("Последние поступления")])])]),_vm._v(" "),_c('div',{staticClass:"row product__filter"},_vm._l((this.allData[0]),function(item){return _c('ProductCard',{key:item.id,attrs:{"product":item,"urlApi":_vm.urlApi,"lg":"col-lg-3"}})}),1)])]),_vm._v(" "),_c('section',{staticClass:"instagram spad"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-4 instagram__text__wrap"},[_c('div',{staticClass:"instagram__text"},[_c('h2',[_vm._v("Instagram")]),_vm._v(" "),_c('p',[_vm._v("\n                                Каждое новое изделие, сделанное нами не\n                                похоже на предыдущее. Форма, размер, цвет -\n                                всё уникальное.\n                                "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n                                К каждому из них я питаю особые теплые\n                                чувства. Надеюсь они передадутся вам, вашему\n                                дому, семье и друзьям.\n                            ")]),_vm._v(" "),_c('h3',{staticClass:"mb-2"},[_c('a',{attrs:{"href":_vm.allData[3].Link,"target":"_blank"}},[_vm._v("\n                                    "+_vm._s(_vm.allData[3].Name)+"\n                                ")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-8"},[_c('div',{staticClass:"instagram__pic"},_vm._l((_vm.allData[3].img),function(i){return _c('div',{key:i.id,staticClass:"instagram__pic__item set-bg"},[_c('img',{staticClass:"rounded-lg",attrs:{"src":_vm.urlApi + i.url,"alt":_vm.allData[3].Name}})])}),0)])])])]),_vm._v(" "),_c('section',{staticClass:"latest spad"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"section-title"},[_c('h2',[_vm._v("Наш Блог")])])])]),_vm._v(" "),_c('div',{staticClass:"row"},_vm._l((_vm.allData[2]),function(item){return _c('div',{key:item.id,staticClass:"col-lg-4 col-md-6 col-sm-6"},[_c('NuxtLink',{attrs:{"to":{
                                name: 'blog-slug',
                                params: { slug: item.slug },
                            }}},[_c('div',{staticClass:"blog__item"},[_c('div',{staticClass:"blog__item__pic set-bg rounded-lg",style:({
                                        'background-image':
                                            'url(' +
                                            _vm.urlApi +
                                            item.Logo.url +
                                            ')',
                                    })}),_vm._v(" "),_c('div',{staticClass:"blog__item__text rounded-lg"},[_c('span',[_c('img',{attrs:{"src":"img/icon/calendar.png","alt":"calendar"}}),_vm._v("\n                                        "+_vm._s(_vm._f("moment")(item.published_at,'from')))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(item.Title))])])])])],1)}),0)])])])],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=cda5c658&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Index',

  data() {
    return {
      allData: [],
      error: null,
      urlApi: 'http://194.87.111.244/api/'
    };
  },

  async fetch() {
    if (false) {}

    try {
      this.allData = await this.$strapi.find('categories/index');
    } catch (error) {
      this.error = error;
    }
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aa99c994"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(70).default,TheLayout: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=index.js.map