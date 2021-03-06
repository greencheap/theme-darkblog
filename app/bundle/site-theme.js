/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/components/site-theme.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/site-theme.vue":
/*!***************************************!*\
  !*** ./app/components/site-theme.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site_theme_vue_vue_type_template_id_f065f360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-theme.vue?vue&type=template&id=f065f360& */ \"./app/components/site-theme.vue?vue&type=template&id=f065f360&\");\n/* harmony import */ var _site_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-theme.vue?vue&type=script&lang=js& */ \"./app/components/site-theme.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _site_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _site_theme_vue_vue_type_template_id_f065f360___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _site_theme_vue_vue_type_template_id_f065f360___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/components/site-theme.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/components/site-theme.vue?");

/***/ }),

/***/ "./app/components/site-theme.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./app/components/site-theme.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_site_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./site-theme.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/site-theme.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_site_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/components/site-theme.vue?");

/***/ }),

/***/ "./app/components/site-theme.vue?vue&type=template&id=f065f360&":
/*!**********************************************************************!*\
  !*** ./app/components/site-theme.vue?vue&type=template&id=f065f360& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_site_theme_vue_vue_type_template_id_f065f360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./site-theme.vue?vue&type=template&id=f065f360& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/site-theme.vue?vue&type=template&id=f065f360&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_site_theme_vue_vue_type_template_id_f065f360___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_site_theme_vue_vue_type_template_id_f065f360___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/components/site-theme.vue?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/site-theme.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/components/site-theme.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar SiteTheme = {\n  section: {\n    label: 'Theme',\n    icon: 'pk-icon-large-brush',\n    priority: 15\n  },\n\n  data() {\n    return _.extend({\n      config: {}\n    }, window.$theme);\n  },\n\n  methods: {\n    addSocial() {\n      this.config.socials.push({\n        title: '',\n        uri: ''\n      });\n    },\n\n    removeSocial(id) {\n      if (this.config.socials.length == 1) {\n        this.$notify(this.$trans('Can Not Remove'), 'danger');\n        return;\n      }\n\n      this.config.socials.splice(id, 1);\n    }\n\n  },\n  events: {\n    'save:settings': function () {\n      this.$http.post('admin/system/settings/config', {\n        name: this.name,\n        config: this.config\n      }).catch(function (res) {\n        this.$notify(res.data, 'danger');\n      });\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SiteTheme);\nwindow.Site.components['site-theme'] = SiteTheme;\n\n//# sourceURL=webpack:///./app/components/site-theme.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/site-theme.vue?vue&type=template&id=f065f360&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/site-theme.vue?vue&type=template&id=f065f360& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass:\n          \"uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap\"\n      },\n      [\n        _c(\"div\", [\n          _c(\"h2\", { staticClass: \"uk-h3 uk-margin-remove\" }, [\n            _vm._v(\n              \"\\n                \" +\n                _vm._s(_vm._f(\"trans\")(\"Theme\")) +\n                \"\\n            \"\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-margin-small\" }, [\n          _c(\n            \"button\",\n            {\n              staticClass: \"uk-button uk-button-primary\",\n              attrs: { type: \"submit\" }\n            },\n            [\n              _vm._v(\n                \"\\n                \" +\n                  _vm._s(_vm._f(\"trans\")(\"Save\")) +\n                  \"\\n            \"\n              )\n            ]\n          )\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"uk-form uk-form-horizontal\" }, [\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Avatar\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"uk-form-controls\" },\n          [\n            _c(\"input-image\", {\n              attrs: { \"input-class\": \"uk-form-width-large\" },\n              model: {\n                value: _vm.config.avatar_img,\n                callback: function($$v) {\n                  _vm.$set(_vm.config, \"avatar_img\", $$v)\n                },\n                expression: \"config.avatar_img\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"uk-text-meta\" }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(\n                    _vm._f(\"trans\")(\n                      \"Select an alternative logo which looks great on images.\"\n                    )\n                  ) +\n                  \"\\n                \"\n              )\n            ])\n          ],\n          1\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Name\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.config.name,\n                expression: \"config.name\"\n              }\n            ],\n            staticClass: \"uk-input\",\n            attrs: { type: \"text\" },\n            domProps: { value: _vm.config.name },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.config, \"name\", $event.target.value)\n              }\n            }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Description\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.config.description,\n                expression: \"config.description\"\n              }\n            ],\n            staticClass: \"uk-input\",\n            attrs: { type: \"text\" },\n            domProps: { value: _vm.config.description },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.config, \"description\", $event.target.value)\n              }\n            }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Social Media\")) + \" \"),\n          _c(\"a\", { on: { click: _vm.addSocial } }, [\n            _vm._v(_vm._s(_vm._f(\"trans\")(\"Add\")))\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"uk-margin uk-form-controls\" },\n          _vm._l(_vm.config.socials, function(social, id) {\n            return _c(\n              \"div\",\n              {\n                key: id,\n                staticClass: \"uk-grid-small\",\n                attrs: { \"uk-grid\": \"\" }\n              },\n              [\n                _c(\"div\", { staticClass: \"uk-width-medium@m\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: social.title,\n                        expression: \"social.title\"\n                      }\n                    ],\n                    staticClass: \"uk-input uk-width-expand\",\n                    attrs: {\n                      type: \"text\",\n                      placeholder: _vm._f(\"trans\")(\"Social Media Title\"),\n                      required: \"\"\n                    },\n                    domProps: { value: social.title },\n                    on: {\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.$set(social, \"title\", $event.target.value)\n                      }\n                    }\n                  })\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"uk-width-expand@m\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: social.uri,\n                        expression: \"social.uri\"\n                      }\n                    ],\n                    staticClass: \"uk-input uk-width-expand\",\n                    attrs: {\n                      type: \"text\",\n                      placeholder: _vm._f(\"trans\")(\"Link\"),\n                      required: \"\"\n                    },\n                    domProps: { value: social.uri },\n                    on: {\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.$set(social, \"uri\", $event.target.value)\n                      }\n                    }\n                  })\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"uk-width-auto@m\" }, [\n                  _c(\n                    \"a\",\n                    {\n                      staticClass:\n                        \"uk-button uk-button-default uk-button-small\",\n                      on: {\n                        click: function($event) {\n                          return _vm.removeSocial(id)\n                        }\n                      }\n                    },\n                    [_vm._v(_vm._s(_vm._f(\"trans\")(\"Remove\")))]\n                  )\n                ])\n              ]\n            )\n          }),\n          0\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Disques Code\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"textarea\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.config.disqus_code,\n                expression: \"config.disqus_code\"\n              }\n            ],\n            staticClass: \"uk-width-expand uk-height-large\",\n            domProps: { value: _vm.config.disqus_code },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.config, \"disqus_code\", $event.target.value)\n              }\n            }\n          })\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/components/site-theme.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });