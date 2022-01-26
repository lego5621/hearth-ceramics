exports.ids = [8,2,6];
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=cecfe458&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-grow-1 d-flex"},[(_vm.allData.Title)?_c('TheLayout',[_c('section',{staticClass:"blog-hero spad"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row d-flex justify-content-center"},[_c('div',{staticClass:"col-lg-9 text-center"},[_c('div',{staticClass:"blog__hero__text"},[_c('h2',[_vm._v("\n                                "+_vm._s(_vm.allData.Title)+"\n                            ")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("\n                                    "+_vm._s(_vm._f("moment")(_vm.allData.published_at,'LL'))+"\n                                ")])])])])])])]),_vm._v(" "),_c('section',{staticClass:"blog-details"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row d-flex justify-content-center"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"blog__details__pic"},[_c('img',{attrs:{"src":_vm.urlApi + _vm.allData.Logo.url,"alt":"Post blog logo"}})])]),_vm._v(" "),_c('div',{staticClass:"col-lg-8"},[_c('div',{staticClass:"blog__details__content"},[_c('div',{staticClass:"blog__details__text",domProps:{"innerHTML":_vm._s(_vm.allData.Text)}})])])])])])]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=cecfe458&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Grid',

  data() {
    return {
      allData: [],
      error: null,
      urlApi: 'http://localhost:1337'
    };
  },

  async fetch() {
    if (false) {}

    try {
      this.allData = await this.$strapi.$blogs.findOne(this.$route.params.slug);
    } catch (error) {
      this.error = error;
      this.$nuxt.error({
        statusCode: 404
      });
    }
  },

  head() {
    return {
      title: this.allData.Title + ' - hearth.ceramics',
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.allData.blogSEODescription
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/blog/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "94070cae"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheLayout: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map