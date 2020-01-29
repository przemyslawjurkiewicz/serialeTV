function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<app-list></app-list>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src={{item.image.medium}} alt={{item.name}}/>\n<h3>{{item.name}}</h3>\n<bar-rating [(rate)]=\"item.rating.average\" [max]=\"10\" [theme]=\"'movie'\" [readOnly]=\"'true'\"></bar-rating>\n<p>Rating: <span>{{item.rating.average}}</span></p>\n<div class=\"summary\" [innerHTML]=\"item.summary | truncate : 100 : true\"></div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>TV Series</h1>\n<input [formControl]=\"searchField\" [formControl]=\"searchField\" class=\"form-control\" placeholder=\"Search series...\"\n       type=\"search\">\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list\">\n    <app-cart *ngFor=\"let item of pageOfItems\" [item]=\"item\" class=\"col-lg-2 col-sm-6\"></app-cart>\n</div>\n<jw-pagination (changePage)=\"onChangePage($event)\" [items]=\"items\" [pageSize]=\"12\"></jw-pagination>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/actions/series.actions.ts":
  /*!*******************************************!*\
    !*** ./src/app/actions/series.actions.ts ***!
    \*******************************************/

  /*! exports provided: SeriesActionTypes, Load, Search, LoadSuccess, LoadFail */

  /***/
  function srcAppActionsSeriesActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeriesActionTypes", function () {
      return SeriesActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Load", function () {
      return Load;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Search", function () {
      return Search;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadSuccess", function () {
      return LoadSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadFail", function () {
      return LoadFail;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SeriesActionTypes;

    (function (SeriesActionTypes) {
      SeriesActionTypes["Load"] = "[Series] Load";
      SeriesActionTypes["LoadSuccess"] = "[Series] Load Success";
      SeriesActionTypes["LoadFail"] = "[Series] Load Fail";
      SeriesActionTypes["Search"] = "[Series] Search";
    })(SeriesActionTypes || (SeriesActionTypes = {}));

    var Load = function Load() {
      _classCallCheck(this, Load);

      this.type = SeriesActionTypes.Load;
    };

    var Search = function Search(payload) {
      _classCallCheck(this, Search);

      this.payload = payload;
      this.type = SeriesActionTypes.Search;
    };

    var LoadSuccess = function LoadSuccess(payload) {
      _classCallCheck(this, LoadSuccess);

      this.payload = payload;
      this.type = SeriesActionTypes.LoadSuccess;
    };

    var LoadFail = function LoadFail(payload) {
      _classCallCheck(this, LoadFail);

      this.payload = payload;
      this.type = SeriesActionTypes.LoadFail;
    };
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Colors */\napp-header {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #777d86;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfY29sb3JzLnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcSmFcXERlc2t0b3BcXEFuZ3VsYXJcXHNlcmlhbGVUVjIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUNFQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkRMSztBRUtQIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29sb3JzICovXHJcbiRkYXJrOiAjMDAwMDAwO1xyXG4kZ3JleTogIzc3N2Q4NjtcclxuJGdyZXktbGlnaHQ6ICNiZWM3Y2U7XHJcbiRjb2xvci1wcmltYXJ5OiAjMzAzZDc1O1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjQjE4QzAwO1xyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcblxyXG5cclxuIiwiQGltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XHJcblxyXG5hcHAtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XHJcbn1cclxuIiwiLyogQ29sb3JzICovXG5hcHAtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3ZDg2O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jw-angular-pagination */
    "./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
    /* harmony import */


    var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _services_series_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/series.service */
    "./src/app/services/series.service.ts");
    /* harmony import */


    var _effects_series_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./effects/series.effect */
    "./src/app/effects/series.effect.ts");
    /* harmony import */


    var _reducers_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./reducers/index */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _params_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./params/truncate.pipe */
    "./src/app/params/truncate.pipe.ts");
    /* harmony import */


    var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bar-rating */
    "./node_modules/ngx-bar-rating/index.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"], jw_angular_pagination__WEBPACK_IMPORTED_MODULE_6__["JwPaginationComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"], _params_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__["TruncatePipe"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_9__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_effects_series_effect__WEBPACK_IMPORTED_MODULE_8__["SeriesEffect"]]), ngx_bar_rating__WEBPACK_IMPORTED_MODULE_14__["BarRatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]],
      providers: [_services_series_service__WEBPACK_IMPORTED_MODULE_7__["SeriesService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/cart/cart.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/cart/cart.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,600,700&display=swap\");\n/* Colors */\n@media (max-width: 767px) {\n  .col-sm-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-sm-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-sm-3 {\n    width: 23%;\n  }\n\n  .col-sm-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-sm-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-sm-6 {\n    width: 48%;\n  }\n\n  .col-sm-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-sm-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-sm-9 {\n    width: 73%;\n  }\n\n  .col-sm-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-sm-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-sm-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-md-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-md-3 {\n    width: 23%;\n  }\n\n  .col-md-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-md-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-md-6 {\n    width: 48%;\n  }\n\n  .col-md-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-md-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-md-9 {\n    width: 73%;\n  }\n\n  .col-md-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-md-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-md-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-lg-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-lg-3 {\n    width: 23%;\n  }\n\n  .col-lg-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-lg-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-lg-6 {\n    width: 48%;\n  }\n\n  .col-lg-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-lg-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-lg-9 {\n    width: 73%;\n  }\n\n  .col-lg-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-lg-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-lg-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-xl-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-xl-3 {\n    width: 23%;\n  }\n\n  .col-xl-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-xl-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-xl-6 {\n    width: 48%;\n  }\n\n  .col-xl-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-xl-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-xl-9 {\n    width: 73%;\n  }\n\n  .col-xl-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-xl-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-xl-12 {\n    width: 98%;\n  }\n}\n/* Font sizes */\n/* Fonts */\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  color: #303d75;\n  margin: 0;\n}\nimg {\n  max-width: 100%;\n}\np {\n  padding: 0;\n  margin: 0;\n  max-width: 200px;\n  font-family: \"Lato\", sans-serif;\n}\nbar-rating {\n  max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0M6XFxVc2Vyc1xcSmFcXERlc2t0b3BcXEFuZ3VsYXJcXHNlcmlhbGVUVjIvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0M6XFxVc2Vyc1xcSmFcXERlc2t0b3BcXEFuZ3VsYXJcXHNlcmlhbGVUVjIvc3JjXFxhc3NldHNcXHN0eWxlc1xcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbGF5b3V0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUVEsb0ZBQUE7QUNSUixXQUFBO0FDU0E7RUFQSTtJQUVFLG9CQURRO0VDRVo7O0VESEU7SUFFRSxxQkFEUTtFQ01aOztFRFBFO0lBRUUsVUFEUTtFQ1VaOztFRFhFO0lBRUUscUJBRFE7RUNjWjs7RURmRTtJQUVFLHFCQURRO0VDa0JaOztFRG5CRTtJQUVFLFVBRFE7RUNzQlo7O0VEdkJFO0lBRUUscUJBRFE7RUMwQlo7O0VEM0JFO0lBRUUscUJBRFE7RUM4Qlo7O0VEL0JFO0lBRUUsVUFEUTtFQ2tDWjs7RURuQ0U7SUFFRSxxQkFEUTtFQ3NDWjs7RUR2Q0U7SUFFRSxxQkFEUTtFQzBDWjs7RUQzQ0U7SUFFRSxVQURRO0VDOENaO0FBQ0Y7QURyQ0E7RUFYSTtJQUVFLG9CQURRO0VDbURaOztFRHBERTtJQUVFLHFCQURRO0VDdURaOztFRHhERTtJQUVFLFVBRFE7RUMyRFo7O0VENURFO0lBRUUscUJBRFE7RUMrRFo7O0VEaEVFO0lBRUUscUJBRFE7RUNtRVo7O0VEcEVFO0lBRUUsVUFEUTtFQ3VFWjs7RUR4RUU7SUFFRSxxQkFEUTtFQzJFWjs7RUQ1RUU7SUFFRSxxQkFEUTtFQytFWjs7RURoRkU7SUFFRSxVQURRO0VDbUZaOztFRHBGRTtJQUVFLHFCQURRO0VDdUZaOztFRHhGRTtJQUVFLHFCQURRO0VDMkZaOztFRDVGRTtJQUVFLFVBRFE7RUMrRlo7QUFDRjtBRGxGQTtFQWZJO0lBRUUsb0JBRFE7RUNvR1o7O0VEckdFO0lBRUUscUJBRFE7RUN3R1o7O0VEekdFO0lBRUUsVUFEUTtFQzRHWjs7RUQ3R0U7SUFFRSxxQkFEUTtFQ2dIWjs7RURqSEU7SUFFRSxxQkFEUTtFQ29IWjs7RURySEU7SUFFRSxVQURRO0VDd0haOztFRHpIRTtJQUVFLHFCQURRO0VDNEhaOztFRDdIRTtJQUVFLHFCQURRO0VDZ0laOztFRGpJRTtJQUVFLFVBRFE7RUNvSVo7O0VEcklFO0lBRUUscUJBRFE7RUN3SVo7O0VEeklFO0lBRUUscUJBRFE7RUM0SVo7O0VEN0lFO0lBRUUsVUFEUTtFQ2dKWjtBQUNGO0FEL0hBO0VBbkJJO0lBRUUsb0JBRFE7RUNxSlo7O0VEdEpFO0lBRUUscUJBRFE7RUN5Slo7O0VEMUpFO0lBRUUsVUFEUTtFQzZKWjs7RUQ5SkU7SUFFRSxxQkFEUTtFQ2lLWjs7RURsS0U7SUFFRSxxQkFEUTtFQ3FLWjs7RUR0S0U7SUFFRSxVQURRO0VDeUtaOztFRDFLRTtJQUVFLHFCQURRO0VDNktaOztFRDlLRTtJQUVFLHFCQURRO0VDaUxaOztFRGxMRTtJQUVFLFVBRFE7RUNxTFo7O0VEdExFO0lBRUUscUJBRFE7RUN5TFo7O0VEMUxFO0lBRUUscUJBRFE7RUM2TFo7O0VEOUxFO0lBRUUsVUFEUTtFQ2lNWjtBQUNGO0FIck1BLGVBQUE7QUFPQSxVQUFBO0FJRkE7RUFDRSwrQkpHVztFSUZYLGlCQUFBO0VBQ0EsY0hKYztFR0tkLFNBQUE7QURvTUY7QUNqTUE7RUFDRSxlQUFBO0FEb01GO0FDak1BO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCSlhXO0FHK01iO0FDak1BO0VBQ0UsY0FBQTtBRG9NRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBzaXplcyAqL1xyXG4kdmVyeWJpZy1mb250LXNpemU6IDJlbTtcclxuJGJpZy1mb250LXNpemU6IDEuNWVtO1xyXG4kbm9ybWFsLWZvbnQtc2l6ZTogMWVtO1xyXG4kbWVkaXVtLWZvbnQtc2l6ZTogMS4yZW07XHJcbiRzbWFsbC1mb250LXNpemU6IDAuOGVtO1xyXG5cclxuLyogRm9udHMgKi9cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiRicmFuZC1mb250OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuIiwiLyogQ29sb3JzICovXHJcbiRkYXJrOiAjMDAwMDAwO1xyXG4kZ3JleTogIzc3N2Q4NjtcclxuJGdyZXktbGlnaHQ6ICNiZWM3Y2U7XHJcbiRjb2xvci1wcmltYXJ5OiAjMzAzZDc1O1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjQjE4QzAwO1xyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcblxyXG5cclxuIiwiQG1peGluIGdyaWQoJHByZWZpeCkge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLmNvbC0jeyRwcmVmaXh9LSN7JGl9IHtcclxuICAgICAgJHdpZHRoOiAoMTAwJSAvIDEyICogJGkpLTIlO1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgQGluY2x1ZGUgZ3JpZChcInNtXCIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBAaW5jbHVkZSBncmlkKFwibWRcIik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIEBpbmNsdWRlIGdyaWQoXCJsZ1wiKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIEBpbmNsdWRlIGdyaWQoXCJ4bFwiKTtcclxufVxyXG4iLCIvKiBDb2xvcnMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb2wtc20tMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wtc20tNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXNtLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLXNtLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtc20tOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC1zbS0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbWQtMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbWQtMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wtbWQtNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLW1kLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC1tZC0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLWxnLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbGctMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wtbGctNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLWxnLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLWxnLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbGctOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1sZy05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC1sZy0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1sZy0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sLXhsLTEge1xuICAgIHdpZHRoOiA2LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14bC0yIHtcbiAgICB3aWR0aDogMTQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXhsLTMge1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cblxuICAuY29sLXhsLTQge1xuICAgIHdpZHRoOiAzMS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtNSB7XG4gICAgd2lkdGg6IDM5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC14bC02IHtcbiAgICB3aWR0aDogNDglO1xuICB9XG5cbiAgLmNvbC14bC03IHtcbiAgICB3aWR0aDogNTYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXhsLTgge1xuICAgIHdpZHRoOiA2NC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtOSB7XG4gICAgd2lkdGg6IDczJTtcbiAgfVxuXG4gIC5jb2wteGwtMTAge1xuICAgIHdpZHRoOiA4MS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtMTEge1xuICAgIHdpZHRoOiA4OS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtMTIge1xuICAgIHdpZHRoOiA5OCU7XG4gIH1cbn1cbi8qIEZvbnQgc2l6ZXMgKi9cbi8qIEZvbnRzICovXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzAzZDc1O1xuICBtYXJnaW46IDA7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5iYXItcmF0aW5nIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2xheW91dFwiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdHlwb2dyYXBoeVwiO1xyXG5cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAkYnJhbmQtZm9udDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBmb250LWZhbWlseTogJGJyYW5kLWZvbnQ7XHJcbn1cclxuXHJcbmJhci1yYXRpbmcge1xyXG4gIG1heC13aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CartComponent = function CartComponent() {
      _classCallCheck(this, CartComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartComponent.prototype, "item", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.scss */
      "./src/app/components/cart/cart.component.scss")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,600,700&display=swap\");\n/* Colors */\n@media (max-width: 767px) {\n  .col-sm-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-sm-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-sm-3 {\n    width: 23%;\n  }\n\n  .col-sm-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-sm-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-sm-6 {\n    width: 48%;\n  }\n\n  .col-sm-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-sm-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-sm-9 {\n    width: 73%;\n  }\n\n  .col-sm-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-sm-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-sm-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-md-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-md-3 {\n    width: 23%;\n  }\n\n  .col-md-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-md-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-md-6 {\n    width: 48%;\n  }\n\n  .col-md-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-md-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-md-9 {\n    width: 73%;\n  }\n\n  .col-md-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-md-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-md-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-lg-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-lg-3 {\n    width: 23%;\n  }\n\n  .col-lg-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-lg-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-lg-6 {\n    width: 48%;\n  }\n\n  .col-lg-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-lg-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-lg-9 {\n    width: 73%;\n  }\n\n  .col-lg-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-lg-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-lg-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-xl-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-xl-3 {\n    width: 23%;\n  }\n\n  .col-xl-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-xl-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-xl-6 {\n    width: 48%;\n  }\n\n  .col-xl-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-xl-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-xl-9 {\n    width: 73%;\n  }\n\n  .col-xl-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-xl-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-xl-12 {\n    width: 98%;\n  }\n}\n/* Font sizes */\n/* Fonts */\nh1 {\n  padding: 0;\n  margin: 2px 0;\n}\ninput {\n  margin: 5px 0;\n  height: 40px;\n  padding: 10px;\n  border: 1px solid #303d75;\n  border-radius: 3px;\n  color: #000000;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXEphXFxEZXNrdG9wXFxBbmd1bGFyXFxzZXJpYWxlVFYyL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbGF5b3V0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFRLG9GQUFBO0FDUlIsV0FBQTtBQ1NBO0VBUEk7SUFFRSxvQkFEUTtFQ0VaOztFREhFO0lBRUUscUJBRFE7RUNNWjs7RURQRTtJQUVFLFVBRFE7RUNVWjs7RURYRTtJQUVFLHFCQURRO0VDY1o7O0VEZkU7SUFFRSxxQkFEUTtFQ2tCWjs7RURuQkU7SUFFRSxVQURRO0VDc0JaOztFRHZCRTtJQUVFLHFCQURRO0VDMEJaOztFRDNCRTtJQUVFLHFCQURRO0VDOEJaOztFRC9CRTtJQUVFLFVBRFE7RUNrQ1o7O0VEbkNFO0lBRUUscUJBRFE7RUNzQ1o7O0VEdkNFO0lBRUUscUJBRFE7RUMwQ1o7O0VEM0NFO0lBRUUsVUFEUTtFQzhDWjtBQUNGO0FEckNBO0VBWEk7SUFFRSxvQkFEUTtFQ21EWjs7RURwREU7SUFFRSxxQkFEUTtFQ3VEWjs7RUR4REU7SUFFRSxVQURRO0VDMkRaOztFRDVERTtJQUVFLHFCQURRO0VDK0RaOztFRGhFRTtJQUVFLHFCQURRO0VDbUVaOztFRHBFRTtJQUVFLFVBRFE7RUN1RVo7O0VEeEVFO0lBRUUscUJBRFE7RUMyRVo7O0VENUVFO0lBRUUscUJBRFE7RUMrRVo7O0VEaEZFO0lBRUUsVUFEUTtFQ21GWjs7RURwRkU7SUFFRSxxQkFEUTtFQ3VGWjs7RUR4RkU7SUFFRSxxQkFEUTtFQzJGWjs7RUQ1RkU7SUFFRSxVQURRO0VDK0ZaO0FBQ0Y7QURsRkE7RUFmSTtJQUVFLG9CQURRO0VDb0daOztFRHJHRTtJQUVFLHFCQURRO0VDd0daOztFRHpHRTtJQUVFLFVBRFE7RUM0R1o7O0VEN0dFO0lBRUUscUJBRFE7RUNnSFo7O0VEakhFO0lBRUUscUJBRFE7RUNvSFo7O0VEckhFO0lBRUUsVUFEUTtFQ3dIWjs7RUR6SEU7SUFFRSxxQkFEUTtFQzRIWjs7RUQ3SEU7SUFFRSxxQkFEUTtFQ2dJWjs7RURqSUU7SUFFRSxVQURRO0VDb0laOztFRHJJRTtJQUVFLHFCQURRO0VDd0laOztFRHpJRTtJQUVFLHFCQURRO0VDNElaOztFRDdJRTtJQUVFLFVBRFE7RUNnSlo7QUFDRjtBRC9IQTtFQW5CSTtJQUVFLG9CQURRO0VDcUpaOztFRHRKRTtJQUVFLHFCQURRO0VDeUpaOztFRDFKRTtJQUVFLFVBRFE7RUM2Slo7O0VEOUpFO0lBRUUscUJBRFE7RUNpS1o7O0VEbEtFO0lBRUUscUJBRFE7RUNxS1o7O0VEdEtFO0lBRUUsVUFEUTtFQ3lLWjs7RUQxS0U7SUFFRSxxQkFEUTtFQzZLWjs7RUQ5S0U7SUFFRSxxQkFEUTtFQ2lMWjs7RURsTEU7SUFFRSxVQURRO0VDcUxaOztFRHRMRTtJQUVFLHFCQURRO0VDeUxaOztFRDFMRTtJQUVFLHFCQURRO0VDNkxaOztFRDlMRTtJQUVFLFVBRFE7RUNpTVo7QUFDRjtBSHJNQSxlQUFBO0FBT0EsVUFBQTtBSUZBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QURvTUY7QUNqTUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0hmSztFR2dCTCxZQUFBO0FEb01GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBzaXplcyAqL1xyXG4kdmVyeWJpZy1mb250LXNpemU6IDJlbTtcclxuJGJpZy1mb250LXNpemU6IDEuNWVtO1xyXG4kbm9ybWFsLWZvbnQtc2l6ZTogMWVtO1xyXG4kbWVkaXVtLWZvbnQtc2l6ZTogMS4yZW07XHJcbiRzbWFsbC1mb250LXNpemU6IDAuOGVtO1xyXG5cclxuLyogRm9udHMgKi9cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiRicmFuZC1mb250OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuIiwiLyogQ29sb3JzICovXHJcbiRkYXJrOiAjMDAwMDAwO1xyXG4kZ3JleTogIzc3N2Q4NjtcclxuJGdyZXktbGlnaHQ6ICNiZWM3Y2U7XHJcbiRjb2xvci1wcmltYXJ5OiAjMzAzZDc1O1xyXG4kY29sb3Itc2Vjb25kYXJ5OiAjQjE4QzAwO1xyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcblxyXG5cclxuIiwiQG1peGluIGdyaWQoJHByZWZpeCkge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xyXG4gICAgLmNvbC0jeyRwcmVmaXh9LSN7JGl9IHtcclxuICAgICAgJHdpZHRoOiAoMTAwJSAvIDEyICogJGkpLTIlO1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgQGluY2x1ZGUgZ3JpZChcInNtXCIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBAaW5jbHVkZSBncmlkKFwibWRcIik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIEBpbmNsdWRlIGdyaWQoXCJsZ1wiKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIEBpbmNsdWRlIGdyaWQoXCJ4bFwiKTtcclxufVxyXG4iLCIvKiBDb2xvcnMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb2wtc20tMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wtc20tNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXNtLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLXNtLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtc20tOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC1zbS0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbWQtMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbWQtMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wtbWQtNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLW1kLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC1tZC0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLWxnLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbGctMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wtbGctNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLWxnLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLWxnLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbGctOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1sZy05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC1sZy0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1sZy0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sLXhsLTEge1xuICAgIHdpZHRoOiA2LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14bC0yIHtcbiAgICB3aWR0aDogMTQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXhsLTMge1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cblxuICAuY29sLXhsLTQge1xuICAgIHdpZHRoOiAzMS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtNSB7XG4gICAgd2lkdGg6IDM5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC14bC02IHtcbiAgICB3aWR0aDogNDglO1xuICB9XG5cbiAgLmNvbC14bC03IHtcbiAgICB3aWR0aDogNTYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXhsLTgge1xuICAgIHdpZHRoOiA2NC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtOSB7XG4gICAgd2lkdGg6IDczJTtcbiAgfVxuXG4gIC5jb2wteGwtMTAge1xuICAgIHdpZHRoOiA4MS4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtMTEge1xuICAgIHdpZHRoOiA4OS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtMTIge1xuICAgIHdpZHRoOiA5OCU7XG4gIH1cbn1cbi8qIEZvbnQgc2l6ZXMgKi9cbi8qIEZvbnRzICovXG5oMSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzAzZDc1O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogMzAwcHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2xheW91dFwiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdHlwb2dyYXBoeVwiO1xyXG5cclxuaDEge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAycHggMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICB3aWR0aDogMzAwcHg7XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_series_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../actions/series.actions */
    "./src/app/actions/series.actions.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(store) {
        _classCallCheck(this, HeaderComponent);

        this.store = store;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.subscription = this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (term) {
            !_this.searchField.value ? _this.store.dispatch(new _actions_series_actions__WEBPACK_IMPORTED_MODULE_5__["Load"]()) : _this.store['loaded'] = true;
            _this.store['series'] = [];

            _this.store.dispatch(new _actions_series_actions__WEBPACK_IMPORTED_MODULE_5__["Search"](_this.searchField.value));
          });
          console.log(this.searchField.value);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/list/list.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/list/list.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,600,700&display=swap\");\n/* Colors */\n@media (max-width: 767px) {\n  .col-sm-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-sm-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-sm-3 {\n    width: 23%;\n  }\n\n  .col-sm-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-sm-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-sm-6 {\n    width: 48%;\n  }\n\n  .col-sm-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-sm-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-sm-9 {\n    width: 73%;\n  }\n\n  .col-sm-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-sm-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-sm-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-md-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-md-3 {\n    width: 23%;\n  }\n\n  .col-md-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-md-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-md-6 {\n    width: 48%;\n  }\n\n  .col-md-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-md-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-md-9 {\n    width: 73%;\n  }\n\n  .col-md-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-md-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-md-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-lg-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-lg-3 {\n    width: 23%;\n  }\n\n  .col-lg-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-lg-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-lg-6 {\n    width: 48%;\n  }\n\n  .col-lg-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-lg-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-lg-9 {\n    width: 73%;\n  }\n\n  .col-lg-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-lg-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-lg-12 {\n    width: 98%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl-1 {\n    width: 6.3333333333%;\n  }\n\n  .col-xl-2 {\n    width: 14.6666666667%;\n  }\n\n  .col-xl-3 {\n    width: 23%;\n  }\n\n  .col-xl-4 {\n    width: 31.3333333333%;\n  }\n\n  .col-xl-5 {\n    width: 39.6666666667%;\n  }\n\n  .col-xl-6 {\n    width: 48%;\n  }\n\n  .col-xl-7 {\n    width: 56.3333333333%;\n  }\n\n  .col-xl-8 {\n    width: 64.6666666667%;\n  }\n\n  .col-xl-9 {\n    width: 73%;\n  }\n\n  .col-xl-10 {\n    width: 81.3333333333%;\n  }\n\n  .col-xl-11 {\n    width: 89.6666666667%;\n  }\n\n  .col-xl-12 {\n    width: 98%;\n  }\n}\n/* Font sizes */\n/* Fonts */\n.list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 10px;\n}\napp-cart {\n  padding: 5px;\n  background-color: #bec7ce;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-shadow: #000000 0px 2px 6px;\n  border-radius: 5px;\n  margin: 1% 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L0M6XFxVc2Vyc1xcSmFcXERlc2t0b3BcXEFuZ3VsYXJcXHNlcmlhbGVUVjIvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3R5cG9ncmFwaHkuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0L0M6XFxVc2Vyc1xcSmFcXERlc2t0b3BcXEFuZ3VsYXJcXHNlcmlhbGVUVjIvc3JjXFxhc3NldHNcXHN0eWxlc1xcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpc3QvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbGF5b3V0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpc3QvQzpcXFVzZXJzXFxKYVxcRGVza3RvcFxcQW5ndWxhclxcc2VyaWFsZVRWMi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUVEsb0ZBQUE7QUNSUixXQUFBO0FDU0E7RUFQSTtJQUVFLG9CQURRO0VDRVo7O0VESEU7SUFFRSxxQkFEUTtFQ01aOztFRFBFO0lBRUUsVUFEUTtFQ1VaOztFRFhFO0lBRUUscUJBRFE7RUNjWjs7RURmRTtJQUVFLHFCQURRO0VDa0JaOztFRG5CRTtJQUVFLFVBRFE7RUNzQlo7O0VEdkJFO0lBRUUscUJBRFE7RUMwQlo7O0VEM0JFO0lBRUUscUJBRFE7RUM4Qlo7O0VEL0JFO0lBRUUsVUFEUTtFQ2tDWjs7RURuQ0U7SUFFRSxxQkFEUTtFQ3NDWjs7RUR2Q0U7SUFFRSxxQkFEUTtFQzBDWjs7RUQzQ0U7SUFFRSxVQURRO0VDOENaO0FBQ0Y7QURyQ0E7RUFYSTtJQUVFLG9CQURRO0VDbURaOztFRHBERTtJQUVFLHFCQURRO0VDdURaOztFRHhERTtJQUVFLFVBRFE7RUMyRFo7O0VENURFO0lBRUUscUJBRFE7RUMrRFo7O0VEaEVFO0lBRUUscUJBRFE7RUNtRVo7O0VEcEVFO0lBRUUsVUFEUTtFQ3VFWjs7RUR4RUU7SUFFRSxxQkFEUTtFQzJFWjs7RUQ1RUU7SUFFRSxxQkFEUTtFQytFWjs7RURoRkU7SUFFRSxVQURRO0VDbUZaOztFRHBGRTtJQUVFLHFCQURRO0VDdUZaOztFRHhGRTtJQUVFLHFCQURRO0VDMkZaOztFRDVGRTtJQUVFLFVBRFE7RUMrRlo7QUFDRjtBRGxGQTtFQWZJO0lBRUUsb0JBRFE7RUNvR1o7O0VEckdFO0lBRUUscUJBRFE7RUN3R1o7O0VEekdFO0lBRUUsVUFEUTtFQzRHWjs7RUQ3R0U7SUFFRSxxQkFEUTtFQ2dIWjs7RURqSEU7SUFFRSxxQkFEUTtFQ29IWjs7RURySEU7SUFFRSxVQURRO0VDd0haOztFRHpIRTtJQUVFLHFCQURRO0VDNEhaOztFRDdIRTtJQUVFLHFCQURRO0VDZ0laOztFRGpJRTtJQUVFLFVBRFE7RUNvSVo7O0VEcklFO0lBRUUscUJBRFE7RUN3SVo7O0VEeklFO0lBRUUscUJBRFE7RUM0SVo7O0VEN0lFO0lBRUUsVUFEUTtFQ2dKWjtBQUNGO0FEL0hBO0VBbkJJO0lBRUUsb0JBRFE7RUNxSlo7O0VEdEpFO0lBRUUscUJBRFE7RUN5Slo7O0VEMUpFO0lBRUUsVUFEUTtFQzZKWjs7RUQ5SkU7SUFFRSxxQkFEUTtFQ2lLWjs7RURsS0U7SUFFRSxxQkFEUTtFQ3FLWjs7RUR0S0U7SUFFRSxVQURRO0VDeUtaOztFRDFLRTtJQUVFLHFCQURRO0VDNktaOztFRDlLRTtJQUVFLHFCQURRO0VDaUxaOztFRGxMRTtJQUVFLFVBRFE7RUNxTFo7O0VEdExFO0lBRUUscUJBRFE7RUN5TFo7O0VEMUxFO0lBRUUscUJBRFE7RUM2TFo7O0VEOUxFO0lBRUUsVUFEUTtFQ2lNWjtBQUNGO0FIck1BLGVBQUE7QUFPQSxVQUFBO0FJRkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURvTUY7QUNoTUE7RUFDRSxZQUFBO0VBQ0EseUJIWFc7RUdZWCxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEbU1GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250IHNpemVzICovXHJcbiR2ZXJ5YmlnLWZvbnQtc2l6ZTogMmVtO1xyXG4kYmlnLWZvbnQtc2l6ZTogMS41ZW07XHJcbiRub3JtYWwtZm9udC1zaXplOiAxZW07XHJcbiRtZWRpdW0tZm9udC1zaXplOiAxLjJlbTtcclxuJHNtYWxsLWZvbnQtc2l6ZTogMC44ZW07XHJcblxyXG4vKiBGb250cyAqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuJGJyYW5kLWZvbnQ6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4iLCIvKiBDb2xvcnMgKi9cclxuJGRhcms6ICMwMDAwMDA7XHJcbiRncmV5OiAjNzc3ZDg2O1xyXG4kZ3JleS1saWdodDogI2JlYzdjZTtcclxuJGNvbG9yLXByaW1hcnk6ICMzMDNkNzU7XHJcbiRjb2xvci1zZWNvbmRhcnk6ICNCMThDMDA7XHJcbiRsaWdodDogI2ZmZmZmZjtcclxuXHJcblxyXG4iLCJAbWl4aW4gZ3JpZCgkcHJlZml4KSB7XHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAuY29sLSN7JHByZWZpeH0tI3skaX0ge1xyXG4gICAgICAkd2lkdGg6ICgxMDAlIC8gMTIgKiAkaSktMiU7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBAaW5jbHVkZSBncmlkKFwic21cIik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIEBpbmNsdWRlIGdyaWQoXCJtZFwiKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgQGluY2x1ZGUgZ3JpZChcImxnXCIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgQGluY2x1ZGUgZ3JpZChcInhsXCIpO1xyXG59XHJcbiIsIi8qIENvbG9ycyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbC1zbS0xIHtcbiAgICB3aWR0aDogNi4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtc20tMiB7XG4gICAgd2lkdGg6IDE0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS0zIHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG5cbiAgLmNvbC1zbS00IHtcbiAgICB3aWR0aDogMzEuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTUge1xuICAgIHdpZHRoOiAzOS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tNiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxuXG4gIC5jb2wtc20tNyB7XG4gICAgd2lkdGg6IDU2LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS04IHtcbiAgICB3aWR0aDogNjQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXNtLTkge1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cblxuICAuY29sLXNtLTEwIHtcbiAgICB3aWR0aDogODEuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTExIHtcbiAgICB3aWR0aDogODkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXNtLTEyIHtcbiAgICB3aWR0aDogOTglO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1tZC0xIHtcbiAgICB3aWR0aDogNi4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtMiB7XG4gICAgd2lkdGg6IDE0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC0zIHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG5cbiAgLmNvbC1tZC00IHtcbiAgICB3aWR0aDogMzEuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTUge1xuICAgIHdpZHRoOiAzOS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbWQtNiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxuXG4gIC5jb2wtbWQtNyB7XG4gICAgd2lkdGg6IDU2LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC04IHtcbiAgICB3aWR0aDogNjQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLTkge1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cblxuICAuY29sLW1kLTEwIHtcbiAgICB3aWR0aDogODEuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTExIHtcbiAgICB3aWR0aDogODkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLTEyIHtcbiAgICB3aWR0aDogOTglO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbC1sZy0xIHtcbiAgICB3aWR0aDogNi4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbGctMiB7XG4gICAgd2lkdGg6IDE0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1sZy0zIHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG5cbiAgLmNvbC1sZy00IHtcbiAgICB3aWR0aDogMzEuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLWxnLTUge1xuICAgIHdpZHRoOiAzOS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbGctNiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxuXG4gIC5jb2wtbGctNyB7XG4gICAgd2lkdGg6IDU2LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy04IHtcbiAgICB3aWR0aDogNjQuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLWxnLTkge1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cblxuICAuY29sLWxnLTEwIHtcbiAgICB3aWR0aDogODEuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLWxnLTExIHtcbiAgICB3aWR0aDogODkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLWxnLTEyIHtcbiAgICB3aWR0aDogOTglO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb2wteGwtMSB7XG4gICAgd2lkdGg6IDYuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXhsLTIge1xuICAgIHdpZHRoOiAxNC42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtMyB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuXG4gIC5jb2wteGwtNCB7XG4gICAgd2lkdGg6IDMxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14bC01IHtcbiAgICB3aWR0aDogMzkuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXhsLTYge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY29sLXhsLTcge1xuICAgIHdpZHRoOiA1Ni4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtOCB7XG4gICAgd2lkdGg6IDY0LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC14bC05IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG5cbiAgLmNvbC14bC0xMCB7XG4gICAgd2lkdGg6IDgxLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14bC0xMSB7XG4gICAgd2lkdGg6IDg5LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC14bC0xMiB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuLyogRm9udCBzaXplcyAqL1xuLyogRm9udHMgKi9cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuYXBwLWNhcnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWM3Y2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogIzAwMDAwMCAwcHggMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDElIDElO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9sYXlvdXRcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3R5cG9ncmFwaHlcIjtcclxuXHJcbi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuXHJcbmFwcC1jYXJ0IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktbGlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6ICMwMDAwMDAgMHB4IDJweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMSUgMSU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _services_series_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/series.service */
    "./src/app/services/series.service.ts");
    /* harmony import */


    var _actions_series_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../actions/series.actions */
    "./src/app/actions/series.actions.ts");
    /* harmony import */


    var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../reducers/index */
    "./src/app/reducers/index.ts");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(productService, store) {
        _classCallCheck(this, ListComponent);

        this.productService = productService;
        this.store = store;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.store.dispatch(new _actions_series_actions__WEBPACK_IMPORTED_MODULE_4__["Load"]());
          this.series$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["getSeries"]));
          this.subscription = this.series$.subscribe(function (data) {
            _this2.items = data;

            _this2.items.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            }); // console.log(this.items);

          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageOfItems) {
          // update current page of items
          this.pageOfItems = pageOfItems;
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _services_series_service__WEBPACK_IMPORTED_MODULE_3__["SeriesService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/components/list/list.component.scss")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/effects/series.effect.ts":
  /*!******************************************!*\
    !*** ./src/app/effects/series.effect.ts ***!
    \******************************************/

  /*! exports provided: SeriesEffect */

  /***/
  function srcAppEffectsSeriesEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeriesEffect", function () {
      return SeriesEffect;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../reducers/index */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _services_series_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/series.service */
    "./src/app/services/series.service.ts");
    /* harmony import */


    var _actions_series_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions/series.actions */
    "./src/app/actions/series.actions.ts");
    /* harmony import */


    var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/internal/observable/of */
    "./node_modules/rxjs/internal/observable/of.js");
    /* harmony import */


    var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/internal/observable/empty */
    "./node_modules/rxjs/internal/observable/empty.js");
    /* harmony import */


    var rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_9__);

    var SeriesEffect = function SeriesEffect(SeriesService, action$, store) {
      var _this3 = this;

      _classCallCheck(this, SeriesEffect);

      this.SeriesService = SeriesService;
      this.action$ = action$;
      this.store = store;
      this.loadSeries$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_series_actions__WEBPACK_IMPORTED_MODULE_7__["SeriesActionTypes"].Load), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["getLoaded"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            loaded = _ref2[1];

        if (loaded) {
          return Object(rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_9__["empty"])();
        }

        return _this3.SeriesService.getAllSeries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (series) {
          return new _actions_series_actions__WEBPACK_IMPORTED_MODULE_7__["LoadSuccess"](series);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
          return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_series_actions__WEBPACK_IMPORTED_MODULE_7__["LoadFail"](err));
        }));
      }));
      this.search$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_series_actions__WEBPACK_IMPORTED_MODULE_7__["SeriesActionTypes"].Search), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref3) {
        var payload = _ref3.payload;
        return _this3.SeriesService.getSeriesSearch(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (series) {
          return new _actions_series_actions__WEBPACK_IMPORTED_MODULE_7__["LoadSuccess"](series);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
          return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__["of"])(new _actions_series_actions__WEBPACK_IMPORTED_MODULE_7__["LoadFail"](err));
        }));
      }));
    };

    SeriesEffect.ctorParameters = function () {
      return [{
        type: _services_series_service__WEBPACK_IMPORTED_MODULE_6__["SeriesService"]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()], SeriesEffect.prototype, "loadSeries$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()], SeriesEffect.prototype, "search$", void 0);
    SeriesEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SeriesEffect);
    /***/
  },

  /***/
  "./src/app/params/truncate.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/params/truncate.pipe.ts ***!
    \*****************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppParamsTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          var completeWords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var ellipsis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ...';

          if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
          }

          return value.length > limit ? value.substr(0, limit) + ellipsis : value;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'truncate'
    })], TruncatePipe);
    /***/
  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: reducers, getSeries, getLoaded */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSeries", function () {
      return getSeries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLoaded", function () {
      return getLoaded;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _reducers_series_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../reducers/series.reducer */
    "./src/app/reducers/series.reducer.ts");

    var reducers = {
      seriesFeature: _reducers_series_reducer__WEBPACK_IMPORTED_MODULE_2__["SeriesReducer"]
    };
    var getSeriesFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('seriesFeature');
    var getSeries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getSeriesFeatureState, function (state) {
      return state.series;
    });
    var getLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getSeriesFeatureState, function (state) {
      return state.loaded;
    });
    /***/
  },

  /***/
  "./src/app/reducers/series.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/reducers/series.reducer.ts ***!
    \********************************************/

  /*! exports provided: SeriesReducer */

  /***/
  function srcAppReducersSeriesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeriesReducer", function () {
      return SeriesReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_series_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/series.actions */
    "./src/app/actions/series.actions.ts");

    var initialState = {
      series: [],
      loaded: false,
      error: ''
    };

    function SeriesReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_series_actions__WEBPACK_IMPORTED_MODULE_1__["SeriesActionTypes"].LoadSuccess:
          return Object.assign({}, state, {
            series: _toConsumableArray(action.payload),
            loaded: true,
            error: ''
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/services/series.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/series.service.ts ***!
    \********************************************/

  /*! exports provided: SeriesService */

  /***/
  function srcAppServicesSeriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeriesService", function () {
      return SeriesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__);

    var SeriesService =
    /*#__PURE__*/
    function () {
      function SeriesService(http) {
        _classCallCheck(this, SeriesService);

        this.http = http;
        this.seriesUrl = 'http://api.tvmaze.com/';
      }

      _createClass(SeriesService, [{
        key: "getAllSeries",
        value: function getAllSeries() {
          return this.http.get("".concat(this.seriesUrl, "shows")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }), //   tap(data => console.log(JSON.stringify(data))),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getSeriesSearch",
        value: function getSeriesSearch(phrase) {
          return this.http.get("".concat(this.seriesUrl, "search/shows?q=").concat(phrase)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.map(function (data) {
              return data['show'];
            });
          }), //  tap(data => console.log(JSON.stringify(data))),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            errorMessage = "Backend returned code ".concat(err.status, ": ").concat(err.body.error);
          }

          console.error(err);
          return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return SeriesService;
    }();

    SeriesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SeriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SeriesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ja\Desktop\Angular\serialeTV2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map