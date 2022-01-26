exports.ids = [9,2,6];
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/page/_page.vue?vue&type=template&id=61f4f814&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-grow-1 d-flex"},[(_vm.blogList[0])?_c('TheLayout',[_c('section',{staticClass:"breadcrumb-blog set-bg",style:({
                'background-image': 'url(/img/breadcrumb-bg.jpg)',
            })},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('h2',{staticClass:"blogH2"},[_vm._v("Наш блог")])])])])]),_vm._v(" "),_c('section',{staticClass:"blog spad"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},_vm._l((_vm.blogList),function(item){return _c('div',{key:item.id,staticClass:"col-lg-4 col-md-6 col-sm-6"},[_c('div',{staticClass:"blog__item"},[_c('div',{staticClass:"blog__item__pic set-bg rounded-lg",style:({
                                    'background-image':
                                        'url(' +
                                        _vm.urlApi +
                                        item.Logo.url +
                                        ')',
                                })}),_vm._v(" "),_c('div',{staticClass:"blog__item__text rounded-lg"},[_c('span',[_c('img',{attrs:{"src":"/img/icon/calendar.png","alt":"calendar"}}),_vm._v("\n                                    "+_vm._s(_vm._f("moment")(item.published_at,'from'))+"\n                                ")]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(item.Title))]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{
                                        name: 'blog-slug',
                                        params: { slug: item.slug },
                                    }}},[_vm._v("Читать\n                                ")])],1)])])}),0),_vm._v(" "),(_vm.blogCaunt / _vm.pageLimit > 1)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"product__pagination"},[(Number(this.$route.params.page) > 1)?_c('NuxtLink',{attrs:{"to":{
                                    name: 'blog-page-page',
                                    params: {
                                        page:
                                            Number(
                                                this.$route.params.page
                                            ) - 1,
                                    },
                                }}},[_vm._v("\n                                "+_vm._s(Number(this.$route.params.page) - 1)+"\n                            ")]):_vm._e(),_vm._v(" "),_c('NuxtLink',{staticClass:"active",attrs:{"to":{
                                    name: 'blog-page-page',
                                    params: {
                                        page: _vm.$route.params.page,
                                    },
                                }}},[_vm._v("\n                                "+_vm._s(this.$route.params.page)+"\n                            ")]),_vm._v(" "),(
                                    Number(_vm.blogCaunt / _vm.pageLimit) >
                                    this.$route.params.page
                                )?_c('NuxtLink',{attrs:{"to":{
                                    name: 'blog-page-page',
                                    params: {
                                        page:
                                            Number(
                                                this.$route.params.page
                                            ) + 1,
                                    },
                                }}},[_vm._v("\n                                "+_vm._s(Number(this.$route.params.page) + 1)+"\n                            ")]):_vm._e()],1)])]):_vm._e()])])]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/page/_page.vue?vue&type=template&id=61f4f814&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/page/_page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Grid',

  data() {
    return {
      allData: [],
      error: null,
      urlApi: 'http://localhost:1337'
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])('blog', ['fetchBlogList']),
    ...Object(external_vuex_["mapMutations"])('blog', ['clearBlogList'])
  },
  computed: { ...Object(external_vuex_["mapGetters"])('blog', ['blogList', 'blogCaunt', 'pageLimit'])
  },

  async fetch() {
    if (false) {}

    try {
      await this.clearBlogList();
      await this.fetchBlogList([this.$route.params]);
    } catch (error) {
      this.$nuxt.error({
        statusCode: 404
      });
    }
  },

  head() {
    return {
      title: 'Блог' + ' - hearth.ceramics'
    };
  } // methods: {
  //     fetchMoreProductList: function () {
  //         this.fetchBlogList([this.$route.params])
  //     },
  // },


});
// CONCATENATED MODULE: ./pages/blog/page/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/blog/page/_page.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70df2b5f"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheLayout: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=_page.js.map