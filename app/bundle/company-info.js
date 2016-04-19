/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/company-info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/peter/projects/pagekit-20/public/packages/roboto/companyinfo/app/components/company-info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

		section: {
			label: 'Company Info',
			icon: 'pk-icon-large-brush',
			priority: 14
		},

		data: function data() {
			return _.extend({ config: {} }, window.$theme);
		},

		events: {

			save: function save() {

				this.$http.post('admin/system/settings/config', { name: this.name, config: this.config }).catch(function (res) {
					this.$notify(res.data, 'danger');
				});
			}

		}

	};

	window.Site.components['company-info'] = module.exports;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n\t<div data-uk-margin>\n\t\t<h2 class=\"uk-margin-remove\">{{ 'Company Info' | trans }}</h2>\n\t</div>\n\t<div data-uk-margin>\n\t\t<button class=\"uk-button uk-button-primary\" type=\"submit\">{{ 'Save' | trans }}</button>\n\t</div>\n</div>\n\n<ul class=\"uk-tab\" data-uk-tab=\"{connect:'#company_info'}\">\n\t<li><a href=\"\">{{ 'Basic' | trans }}</a></li>\n\t<li><a href=\"\">{{ 'Social' | trans }}</a></li>\n</ul>\n\n<ul id=\"company_info\" class=\"uk-switcher uk-margin\">\n\t<!-- BASIC -->\n\t<li>\n\t\t<div class=\"uk-form uk-form-horizontal\">\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'Email' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-email\" class=\"uk-form-width-large\" name=\"company-email\" type=\"email\" v-model=\"config.company_email\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company Email.' | trans }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'Phone' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-phone\" class=\"uk-form-width-large\" name=\"company-phone\" type=\"number\" v-model=\"config.company_phone\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company Phone Number.' | trans }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'CVR/VAT' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-vat\" class=\"uk-form-width-large\" name=\"company-vat\" type=\"number\" v-model=\"config.company_vat\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company CVR/VAT (CVR only applys for Danish companies).' | trans }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'Address' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-address\" class=\"uk-form-width-large\" name=\"company-address\" type=\"text\" v-model=\"config.company_address\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company Address.' | trans }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\n\t<!-- SOCIAL -->\n\t<li>\n\t\t<p>{{ 'There should only be links in every field. Example: http://facebook.com/mycompany' | trans }}</p>\n\t\t<div class=\"uk-form uk-form-horizontal\">\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'Facebook' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-facebook\" class=\"uk-form-width-large\" name=\"company-facebook\" type=\"text\" v-model=\"config.company_facebook\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company ' | trans }}Facebook-{{ 'page' | trans }}.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'Twitter' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-twitter\" class=\"uk-form-width-large\" name=\"company-twitter\" type=\"text\" v-model=\"config.company_twitter\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company ' | trans }}Twitter.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'Google+' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-google\" class=\"uk-form-width-large\" name=\"company-google\" type=\"text\" v-model=\"config.company_google\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company ' | trans }}Google+.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'YouTube' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-youtube\" class=\"uk-form-width-large\" name=\"company-youtube\" type=\"text\" v-model=\"config.company_youtube\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company ' | trans }}YouTube.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t<label class=\"uk-form-label\">{{ 'GitHub' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls uk-form-width-large\">\n\t\t\t\t\t<input id=\"company-github\" class=\"uk-form-width-large\" name=\"company-github\" type=\"text\" v-model=\"config.company_github\">\n\t\t\t\t\t<p class=\"uk-form-help-block\">{{ 'Company ' | trans }}GitHub.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n\n";

/***/ }
/******/ ]);