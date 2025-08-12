"use strict";
(self["webpackChunkmoaz_ali_portfolio"] = self["webpackChunkmoaz_ali_portfolio"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/header/header.component */ 6772);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/footer/footer.component */ 3568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class AppComponent {
  constructor() {
    this.title = 'Moaz Ali Portfolio';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900", "transition-colors", "duration-300"], [1, "pt-16"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);




const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)()]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/home/home.component */ 3738)).then(m => m.HomeComponent),
  title: 'Moaz Ali - Home'
}, {
  path: 'about',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_about_about_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/about/about.component */ 9546)).then(m => m.AboutComponent),
  title: 'Moaz Ali - About'
}, {
  path: 'projects',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_projects_projects_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/projects/projects.component */ 8556)).then(m => m.ProjectsComponent),
  title: 'Moaz Ali - Projects'
}, {
  path: 'skills',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_skills_skills_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/skills/skills.component */ 2588)).then(m => m.SkillsComponent),
  title: 'Moaz Ali - Skills'
}, {
  path: 'contact',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_contact_contact_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/contact/contact.component */ 674)).then(m => m.ContactComponent),
  title: 'Moaz Ali - Contact'
}, {
  path: 'blog',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_blog_blog_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/blog/blog.component */ 5940)).then(m => m.BlogComponent),
  title: 'Moaz Ali - Blog'
}, {
  path: 'blog/:slug',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_blog_blog-post_blog-post_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/blog/blog-post/blog-post.component */ 2739)).then(m => m.BlogPostComponent),
  title: 'Moaz Ali - Blog Post'
}, {
  path: '**',
  redirectTo: '/home'
}];

/***/ }),

/***/ 7758:
/*!****************************************************!*\
  !*** ./src/app/core/services/site-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteDataService: () => (/* binding */ SiteDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SiteDataService {
  constructor() {
    this.siteData = {
      name: "Moaz Ali",
      role: "BSCS Student | Aspiring Full-Stack Developer",
      tagline: "Passionate about creating innovative web solutions and learning new technologies",
      hero: {
        title: "Hi, I'm Moaz Ali",
        subtitle: "BSCS Student | Aspiring Full-Stack Developer",
        description: "I'm passionate about web development and creating innovative digital solutions. Currently pursuing my Bachelor's in Computer Science while building real-world projects.",
        cta: "View Projects"
      },
      about: {
        title: "About Me",
        description: "I'm a dedicated Computer Science student with a passion for web development and software engineering. I love learning new technologies and building projects that solve real-world problems.",
        education: {
          degree: "Bachelor of Science in Computer Science",
          institution: "Riphah International University",
          year: "2021 - 2025",
          description: "Studying computer science fundamentals, algorithms, data structures, and software engineering principles."
        },
        interests: ["Web Development", "Full-Stack Development", "Software Engineering", "Problem Solving", "Open Source"]
      },
      skills: {
        title: "Skills & Technologies",
        description: "I'm constantly learning and expanding my skill set. Here are the technologies I'm proficient with:",
        categories: {
          frontend: [{
            name: "HTML5",
            icon: "html5",
            level: "Advanced"
          }, {
            name: "CSS3",
            icon: "css3",
            level: "Advanced"
          }, {
            name: "JavaScript",
            icon: "javascript",
            level: "Intermediate"
          }, {
            name: "Angular",
            icon: "angular",
            level: "Intermediate"
          }],
          backend: [{
            name: "Supabase",
            icon: "supabase",
            level: "Intermediate"
          }],
          tools: [{
            name: "Docker",
            icon: "docker",
            level: "Basic"
          }, {
            name: "Git",
            icon: "git",
            level: "Intermediate"
          }, {
            name: "Cursor AI",
            icon: "cursor",
            level: "Intermediate"
          }]
        }
      },
      contact: {
        title: "Get In Touch",
        description: "I'm always interested in new opportunities and collaborations. Feel free to reach out!",
        phone: "03278031302",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again."
        }
      },
      social: {
        github: "https://github.com/Moazali302",
        linkedin: "https://linkedin.com/in/muaz-ali",
        email: "moazj048@gmail.com"
      }
    };
  }
  getSiteData() {
    return this.siteData;
  }
  static {
    this.ɵfac = function SiteDataService_Factory(t) {
      return new (t || SiteDataService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SiteDataService,
      factory: SiteDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3568:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_site_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/site-data.service */ 7758);



class FooterComponent {
  constructor(siteDataService) {
    this.siteDataService = siteDataService;
    this.currentYear = new Date().getFullYear();
    this.siteData = this.siteDataService.getSiteData();
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_site_data_service__WEBPACK_IMPORTED_MODULE_0__.SiteDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 46,
      vars: 4,
      consts: [[1, "bg-white", "dark:bg-gray-900", "border-t", "border-gray-200", "dark:border-gray-700"], [1, "container-max", "section-padding"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "space-y-4"], [1, "text-xl", "font-bold", "gradient-text"], [1, "text-gray-600", "dark:text-gray-400", "text-sm"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], [1, "space-y-2"], ["href", "/about", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "text-sm", "transition-colors", "duration-300"], ["href", "/projects", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "text-sm", "transition-colors", "duration-300"], ["href", "/skills", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "text-sm", "transition-colors", "duration-300"], ["href", "/contact", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "text-sm", "transition-colors", "duration-300"], [1, "flex", "flex-col", "space-y-3"], [1, "flex", "items-center", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600", "dark:text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "flex", "space-x-4"], ["href", "https://github.com/Moazali302", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "GitHub", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "transition-colors", "duration-300"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], ["href", "https://linkedin.com/in/muaz-ali", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "transition-colors", "duration-300"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], ["href", "mailto:moazj048@gmail.com", "aria-label", "Email", 1, "text-gray-600", "dark:text-gray-400", "hover:text-primary-600", "dark:hover:text-primary-400", "transition-colors", "duration-300"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "border-t", "border-gray-200", "dark:border-gray-700", "mt-8", "pt-8", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Quick Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 7)(12, "li")(13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " About ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Projects ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Skills ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Contact ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3)(25, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12)(28, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "svg", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "03278031302");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "svg", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "path", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "svg", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 25)(44, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.siteData.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.siteData.tagline, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u00A9 ", ctx.currentYear, " ", ctx.siteData.name, ". All rights reserved. ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6772:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme-toggle/theme-toggle.component */ 9714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_site_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/site-data.service */ 7758);






function HeaderComponent__svg_path_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "path", 18);
  }
}
function HeaderComponent__svg_path_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "path", 19);
  }
}
function HeaderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " About ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Skills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Blog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class HeaderComponent {
  constructor(siteDataService) {
    this.siteDataService = siteDataService;
    this.isMobileMenuOpen = false;
    this.siteData = this.siteDataService.getSiteData();
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_site_data_service__WEBPACK_IMPORTED_MODULE_1__.SiteDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 5,
      consts: [[1, "fixed", "top-0", "left-0", "right-0", "z-50", "bg-white/80", "dark:bg-gray-900/80", "backdrop-blur-md", "border-b", "border-gray-200", "dark:border-gray-700", "transition-all", "duration-300"], [1, "container-max", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "items-center", "justify-between", "h-16"], [1, "flex", "items-center"], ["routerLink", "/home", 1, "text-2xl", "font-bold", "gradient-text", "hover:scale-105", "transition-transform", "duration-300"], [1, "hidden", "md:flex", "items-center", "space-x-8"], ["routerLink", "/home", "routerLinkActive", "text-primary-600 dark:text-primary-400", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "transition-colors", "duration-300"], ["routerLink", "/about", "routerLinkActive", "text-primary-600 dark:text-primary-400", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "transition-colors", "duration-300"], ["routerLink", "/projects", "routerLinkActive", "text-primary-600 dark:text-primary-400", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "transition-colors", "duration-300"], ["routerLink", "/skills", "routerLinkActive", "text-primary-600 dark:text-primary-400", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "transition-colors", "duration-300"], ["routerLink", "/contact", "routerLinkActive", "text-primary-600 dark:text-primary-400", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "transition-colors", "duration-300"], ["routerLink", "/blog", "routerLinkActive", "text-primary-600 dark:text-primary-400", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "transition-colors", "duration-300"], [1, "flex", "items-center", "space-x-4"], ["aria-label", "Toggle mobile menu", 1, "md:hidden", "p-2", "rounded-lg", "text-gray-700", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-800", "transition-colors", "duration-300", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12", 4, "ngIf"], ["class", "md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-up", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "md:hidden", "py-4", "border-t", "border-gray-200", "dark:border-gray-700", "animate-slide-up"], [1, "flex", "flex-col", "space-y-4"], ["routerLink", "/home", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "py-2", "transition-colors", "duration-300", 3, "click"], ["routerLink", "/about", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "py-2", "transition-colors", "duration-300", 3, "click"], ["routerLink", "/projects", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "py-2", "transition-colors", "duration-300", 3, "click"], ["routerLink", "/skills", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "py-2", "transition-colors", "duration-300", 3, "click"], ["routerLink", "/contact", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "py-2", "transition-colors", "duration-300", 3, "click"], ["routerLink", "/blog", 1, "text-gray-700", "dark:text-gray-300", "hover:text-primary-600", "dark:hover:text-primary-400", "font-medium", "py-2", "transition-colors", "duration-300", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " About ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Projects ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Skills ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Contact ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Blog ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "app-theme-toggle");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_21_listener() {
            return ctx.toggleMobileMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, HeaderComponent__svg_path_23_Template, 1, 0, "path", 15)(24, HeaderComponent__svg_path_24_Template, 1, 0, "path", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HeaderComponent_div_25_Template, 14, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.siteData.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", ctx.isMobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_0__.ThemeToggleComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9714:
/*!***************************************************************!*\
  !*** ./src/app/shared/theme-toggle/theme-toggle.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeToggleComponent: () => (/* binding */ ThemeToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function ThemeToggleComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ThemeToggleComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ThemeToggleComponent {
  constructor() {
    this.isDarkMode = false;
  }
  ngOnInit() {
    this.loadTheme();
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.saveTheme();
  }
  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // Check system preference
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }
  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  saveTheme() {
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
  static {
    this.ɵfac = function ThemeToggleComponent_Factory(t) {
      return new (t || ThemeToggleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThemeToggleComponent,
      selectors: [["app-theme-toggle"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "p-2", "rounded-lg", "bg-gray-100", "dark:bg-gray-800", "text-gray-700", "dark:text-gray-300", "hover:bg-gray-200", "dark:hover:bg-gray-700", "transition-all", "duration-300", 3, "click"], ["class", "w-5 h-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"]],
      template: function ThemeToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeToggleComponent_Template_button_click_0_listener() {
            return ctx.toggleTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThemeToggleComponent__svg_svg_1_Template, 2, 0, "svg", 1)(2, ThemeToggleComponent__svg_svg_2_Template, 2, 0, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.isDarkMode ? "Switch to light mode" : "Switch to dark mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDarkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDarkMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map