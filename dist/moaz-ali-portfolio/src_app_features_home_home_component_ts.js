"use strict";
(self["webpackChunkmoaz_ali_portfolio"] = self["webpackChunkmoaz_ali_portfolio"] || []).push([["src_app_features_home_home_component_ts"],{

/***/ 3738:
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_site_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/site-data.service */ 7758);




class HomeComponent {
  constructor(siteDataService) {
    this.siteDataService = siteDataService;
    this.siteData = this.siteDataService.getSiteData();
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_site_data_service__WEBPACK_IMPORTED_MODULE_0__.SiteDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 42,
      vars: 4,
      consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-gray-50", "via-blue-50", "to-indigo-100", "dark:from-gray-900", "dark:via-gray-800", "dark:to-gray-900"], [1, "container-max", "text-center", "px-4", "sm:px-6", "lg:px-8"], [1, "absolute", "inset-0", "overflow-hidden", "pointer-events-none"], [1, "absolute", "-top-40", "-right-40", "w-80", "h-80", "bg-primary-300", "rounded-full", "mix-blend-multiply", "filter", "blur-xl", "opacity-70", "animate-bounce-gentle"], [1, "absolute", "-bottom-40", "-left-40", "w-80", "h-80", "bg-secondary-300", "rounded-full", "mix-blend-multiply", "filter", "blur-xl", "opacity-70", "animate-bounce-gentle", 2, "animation-delay", "-1s"], [1, "relative", "z-10", "space-y-8"], [1, "animate-fade-in"], [1, "text-4xl", "sm:text-6xl", "lg:text-7xl", "font-bold", "text-gray-900", "dark:text-white", "mb-4"], [1, "animate-slide-up", 2, "animation-delay", "0.2s"], [1, "text-xl", "sm:text-2xl", "lg:text-3xl", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-6"], [1, "animate-slide-up", "max-w-3xl", "mx-auto", 2, "animation-delay", "0.4s"], [1, "text-lg", "sm:text-xl", "text-gray-600", "dark:text-gray-400", "leading-relaxed", "mb-8"], [1, "animate-slide-up", 2, "animation-delay", "0.6s"], ["routerLink", "/projects", 1, "btn-primary", "inline-flex", "items-center", "space-x-2", "text-lg", "px-8", "py-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 8l4 4m0 0l-4 4m4-4H3"], [1, "animate-bounce-gentle", "absolute", "bottom-8", "left-1/2", "transform", "-translate-x-1/2", 2, "animation-delay", "1s"], [1, "w-6", "h-10", "border-2", "border-gray-400", "dark:border-gray-600", "rounded-full", "flex", "justify-center"], [1, "w-1", "h-3", "bg-gray-400", "dark:bg-gray-600", "rounded-full", "mt-2", "animate-bounce"], [1, "py-16", "bg-white", "dark:bg-gray-800"], [1, "container-max", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "text-center"], [1, "text-4xl", "font-bold", "text-primary-600", "dark:text-primary-400", "mb-2"], [1, "text-gray-600", "dark:text-gray-400"], [1, "text-4xl", "font-bold", "text-secondary-600", "dark:text-secondary-400", "mb-2"], [1, "text-4xl", "font-bold", "text-accent-600", "dark:text-accent-400", "mb-2"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "a", 13)(17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16)(22, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 19)(25, "div", 20)(26, "div", 21)(27, "div", 22)(28, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "10+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Projects Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22)(33, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "8+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Technologies");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22)(38, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "2+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Years Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.siteData.hero.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.siteData.hero.subtitle, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.siteData.hero.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.siteData.hero.cta);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_home_component_ts.js.map