(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Django\django-report-builder\js\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0O/j":
    /*!************************************!*\
      !*** ./src/app/api.interceptor.ts ***!
      \************************************/

    /*! exports provided: NetworkErrorInterceptor */

    /***/
    function OJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkErrorInterceptor", function () {
        return NetworkErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./actions/reports */
      "yctz");

      var NetworkErrorInterceptor = /*#__PURE__*/function () {
        function NetworkErrorInterceptor(snackBar, store) {
          _classCallCheck(this, NetworkErrorInterceptor);

          this.snackBar = snackBar;
          this.store = store;
        }

        _createClass(NetworkErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            // Respect base URL tag
            var baseUrl = document.getElementsByTagName('base')[0].href;
            var apiReq = request.clone({
              url: "".concat(baseUrl).concat(request.url)
            });
            return next.handle(apiReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              if (err.status === 0 || err.status === 500) {
                // An error we can't help with happened, one of:
                // 1. Network error
                // 2. Client side JS error
                // 3. Server side 500 error
                _this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_5__["CancelGeneratePreview"]());

                _this.snackBar.open('Sorry, something went wrong!', '', {
                  duration: 5000
                });

                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
            }));
          }
        }]);

        return NetworkErrorInterceptor;
      }();

      NetworkErrorInterceptor.ɵfac = function NetworkErrorInterceptor_Factory(t) {
        return new (t || NetworkErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      NetworkErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NetworkErrorInterceptor,
        factory: NetworkErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetworkErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2qkP":
    /*!*****************************!*\
      !*** ./src/app/reducers.ts ***!
      \*****************************/

    /*! exports provided: CustomSerializer, reducers, metaReducers */

    /***/
    function qkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomSerializer", function () {
        return CustomSerializer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducers", function () {
        return reducers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
        return metaReducers;
      });
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/router-store */
      "Ta0S");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngrx-store-freeze */
      "PXG5");
      /* harmony import */


      var _reducers_reports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reducers/reports */
      "ATWS");
      /* harmony import */


      var _reducers_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reducers/config */
      "yt/1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer


      var CustomSerializer = /*#__PURE__*/function () {
        function CustomSerializer() {
          _classCallCheck(this, CustomSerializer);
        }

        _createClass(CustomSerializer, [{
          key: "serialize",
          value: function serialize(routerState) {
            var route = routerState.root;

            while (route.firstChild) {
              route = route.firstChild;
            }

            var url = routerState.url,
                queryParams = routerState.root.queryParams;
            var _route = route,
                params = _route.params; // Only return an object including the URL, params and query params
            // instead of the entire snapshot

            return {
              url: url,
              params: params,
              queryParams: queryParams
            };
          }
        }]);

        return CustomSerializer;
      }();

      CustomSerializer.ɵfac = function CustomSerializer_Factory(t) {
        return new (t || CustomSerializer)();
      };

      CustomSerializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: CustomSerializer,
        factory: CustomSerializer.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CustomSerializer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"]
        }], null, null);
      })();

      var reducers = {
        reports: _reducers_reports__WEBPACK_IMPORTED_MODULE_3__["reducer"],
        config: _reducers_config__WEBPACK_IMPORTED_MODULE_4__["reducer"],
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
      };
      var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__["storeFreeze"]] : [];
      /***/
    },

    /***/
    "8COG":
    /*!***********************************!*\
      !*** ./src/app/actions/config.ts ***!
      \***********************************/

    /*! exports provided: ConfigActionTypes, GetConfig, GetConfigSuccess */

    /***/
    function COG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigActionTypes", function () {
        return ConfigActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetConfig", function () {
        return GetConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetConfigSuccess", function () {
        return GetConfigSuccess;
      });

      var ConfigActionTypes;

      (function (ConfigActionTypes) {
        ConfigActionTypes["GET_CONFIG"] = "Get Config";
        ConfigActionTypes["GET_CONFIG_SUCCESS"] = "Get Config Success";
      })(ConfigActionTypes || (ConfigActionTypes = {}));

      var GetConfig = function GetConfig() {
        _classCallCheck(this, GetConfig);

        this.type = ConfigActionTypes.GET_CONFIG;
      };

      var GetConfigSuccess = function GetConfigSuccess(payload) {
        _classCallCheck(this, GetConfigSuccess);

        this.payload = payload;
        this.type = ConfigActionTypes.GET_CONFIG_SUCCESS;
      };
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../actions/reports */
      "yctz");
      /* harmony import */


      var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../selectors */
      "SWq+");
      /* harmony import */


      var _confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../confirm/confirm-modal.component */
      "YHnS");
      /* harmony import */


      var _actions_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../actions/router */
      "fST4");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_mat_header_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_header_cell_8_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.newReport($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_mat_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_cell_9_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var report_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.copyReport(report_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "content_copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_cell_9_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var report_r12 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.deleteReport(report_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_mat_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_mat_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_cell_12_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var report_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.openReport($event, report_r16.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/report/", report_r16.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r16.name, " ");
        }
      }

      function HomeComponent_mat_header_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "USER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_mat_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r19.user_created.first_name, " ");
        }
      }

      function HomeComponent_mat_header_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_mat_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, report_r20.modified, "yyyy-MM-dd"), " ");
        }
      }

      function HomeComponent_mat_header_row_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function HomeComponent_mat_row_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function modifiedStringToDate(report) {
        return Object.assign(Object.assign({}, report), {
          modifiedDate: new Date(report.modified),
          sortName: report.name.toLowerCase()
        });
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(store, dialog) {
          _classCallCheck(this, HomeComponent);

          this.store = store;
          this.dialog = dialog;
          this.displayedColumns = ['actions', 'name', 'user', 'date'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
          this.listReports$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_6__["getReports"]);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.listReports$.subscribe(function (reports) {
              return _this2.dataSource.data = reports.map(modifiedStringToDate);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.sort = this.sort;

            this.dataSource.sortingDataAccessor = function (data, sortHeaderId) {
              switch (sortHeaderId.toLowerCase()) {
                case 'name':
                  return data.sortName;

                case 'date':
                  return data.modified;

                default:
                  return data[sortHeaderId];
              }
            };
          }
        }, {
          key: "deleteReport",
          value: function deleteReport(report) {
            var _this3 = this;

            var dialogRef = this.dialog.open(_confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], {
              data: {
                title: "Are you sure you want to delete ".concat(report.name),
                subtitle: 'You will not be able to undo this action.',
                confirmText: 'Delete'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this3.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_5__["DeleteReport"](report.id));
              }
            });
          }
        }, {
          key: "copyReport",
          value: function copyReport(reportId) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_5__["CopyReport"](reportId));
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "newReport",
          value: function newReport(event) {
            event.preventDefault();
            this.store.dispatch(new _actions_router__WEBPACK_IMPORTED_MODULE_8__["Go"]({
              path: ['/report/add']
            }));
          }
        }, {
          key: "openReport",
          value: function openReport(event, reportId) {
            event.preventDefault();
            this.store.dispatch(new _actions_router__WEBPACK_IMPORTED_MODULE_8__["Go"]({
              path: ['/report/', reportId]
            }));
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 23,
        vars: 6,
        consts: [[3, "title"], ["matInput", "", "placeholder", "Search Reports", 3, "keyup"], ["matSort", "", "matSortActive", "name", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "actions"], ["class", "mat-header-cell", 4, "matHeaderCellDef"], ["class", "reports-row", 4, "matCellDef"], ["matColumnDef", "name"], ["class", "mat-header-cell", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "user"], ["matColumnDef", "date"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "example-no-results"], [1, "mat-header-cell"], ["href", "/report/add", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "reports-row"], ["mat-icon-button", "", "text-tr", "", 3, "click"], ["aria-label", "Copy report"], ["mat-icon-button", "", 3, "click"], ["aria-label", "Delete report"], ["mat-sort-header", "", 1, "mat-header-cell"], [3, "href", "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_5_listener($event) {
              return ctx.applyFilter($event.currentTarget.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_mat_header_cell_8_Template, 5, 0, "mat-header-cell", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_mat_cell_9_Template, 7, 0, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_mat_cell_12_Template, 3, 2, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_mat_cell_15_Template, 2, 1, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_mat_cell_18_Template, 3, 4, "mat-cell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_mat_header_row_19_Template, 1, 0, "mat-header-row", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_mat_row_20_Template, 1, 0, "mat-row", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " No matches found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Welcome to Django Report Builder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.dataSource == null ? null : ctx.dataSource.filteredData.length) == 0 ? "" : "none");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html'
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "ATWS":
    /*!*************************************!*\
      !*** ./src/app/reducers/reports.ts ***!
      \*************************************/

    /*! exports provided: initialState, reducer */

    /***/
    function ATWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony import */


      var _models_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/reports */
      "JG9l");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/reports */
      "yctz");
      /* harmony import */


      var _actions_display_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../actions/display-field */
      "a6je");
      /* harmony import */


      var _actions_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../actions/filter */
      "u6LH");
      /* harmony import */


      var _selectors_reports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../selectors/reports */
      "jhkq");

      var initialState = {
        reports: [],
        selectedReport: null,
        relatedFields: [],
        fields: [],
        title: '',
        titleInput: '',
        descriptionInput: '',
        isDistinct: false,
        rightNavIsOpen: false,
        activeTab: 0,
        displayFields: _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].getInitialState(),
        filters: _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].getInitialState(),
        nextRelatedFieldId: 0,
        generatingReport: false,
        editedSinceLastSave: false
      };

      function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].SET_REPORT_LIST:
            {
              return Object.assign(Object.assign({}, state), {
                reports: action.payload
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GET_REPORT:
            {
              // Reset report state when we start making a new request
              // so the user never sees stale data
              var selectedReport = initialState.selectedReport,
                  activeTab = initialState.activeTab,
                  descriptionInput = initialState.descriptionInput,
                  reportPreview = initialState.reportPreview;
              return Object.assign(Object.assign({}, state), {
                selectedReport: selectedReport,
                activeTab: activeTab,
                descriptionInput: descriptionInput,
                reportPreview: reportPreview
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GET_TITLE:
            {
              return Object.assign(Object.assign({}, state), {
                title: action.payload
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].TOGGLE_RIGHT_NAV:
            {
              var navOpen = !state.rightNavIsOpen;

              if (state.activeTab === 2 || state.activeTab === 3) {
                navOpen = false;
              } else if (action.payload !== undefined) {
                navOpen = action.payload;
              }

              return Object.assign(Object.assign({}, state), {
                rightNavIsOpen: navOpen
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GET_REPORT_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                selectedReport: action.payload,
                relatedFields: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getRelatedFields"](initialState),
                fields: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFields"](initialState),
                descriptionInput: action.payload.description,
                titleInput: action.payload.name,
                isDistinct: action.payload.distinct,
                editedSinceLastSave: false
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GET_REPORT_FIELDS_SUCCESS:
            {
              var nextRelatedFieldId = state.nextRelatedFieldId;

              var _selectedReport = _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getSelectedReport"](state);

              var rootRelatedField = {
                id: nextRelatedFieldId++,
                children: action.payload.relatedFields.map(function (relatedField) {
                  var id = nextRelatedFieldId++;
                  return Object.assign(Object.assign({}, relatedField), {
                    children: [],
                    id: id
                  });
                }),
                field_name: '',
                verbose_name: _selectedReport.root_model_name,
                path: '',
                help_text: 'The root model for this report: ' + _selectedReport.root_model_name,
                model_id: _selectedReport.root_model,
                parent_model_name: '',
                parent_model_app_label: false,
                included_model: true
              };
              return Object.assign(Object.assign({}, state), {
                relatedFields: [rootRelatedField],
                fields: action.payload.fields,
                nextRelatedFieldId: nextRelatedFieldId
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GET_FIELDS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                fields: action.payload
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GET_RELATED_FIELDS_SUCCESS:
            {
              var _nextRelatedFieldId = state.nextRelatedFieldId;
              var relatedFields = action.payload.relatedFields.map(function (relatedField) {
                var id = _nextRelatedFieldId++;
                return Object.assign(Object.assign({}, relatedField), {
                  children: [],
                  id: id
                });
              });
              return Object.assign(Object.assign({}, state), {
                nextRelatedFieldId: _nextRelatedFieldId,
                relatedFields: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getRelatedFields"](state).map(populateChildren(action.payload.parentId, relatedFields))
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].CHANGE_REPORT_DESCRIPTION:
            {
              return Object.assign(Object.assign({}, state), {
                descriptionInput: action.payload,
                editedSinceLastSave: true
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].CHANGE_REPORT_TITLE:
            {
              return Object.assign(Object.assign({}, state), {
                titleInput: action.payload,
                editedSinceLastSave: true
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].TOGGLE_REPORT_DISTINCT:
            {
              return Object.assign(Object.assign({}, state), {
                isDistinct: action.payload !== undefined ? action.payload : !state.isDistinct
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].EDIT_REPORT_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                selectedReport: action.payload,
                descriptionInput: action.payload.description,
                isDistinct: action.payload.distinct,
                reportSaved: new Date(),
                editedSinceLastSave: false,
                errors: undefined
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].EDIT_REPORT_FAILURE:
            {
              return Object.assign(Object.assign({}, state), {
                errors: flatten(Object.entries(action.payload).map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      tab = _ref2[0],
                      items = _ref2[1];

                  if (typeof items[0] === 'string') {
                    return items.map(function (e) {
                      return "Your ".concat(tab, " field has the error: ").concat(e);
                    });
                  } else {
                    return items.map(function (item, i) {
                      return Object.entries(item).map(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            itemName = _ref4[0],
                            errors = _ref4[1];

                        return errors.map(function (e) {
                          return "In ".concat(tab, ", your ").concat(i, " field's ").concat(itemName, " has the error: ").concat(e);
                        });
                      });
                    });
                  }
                }))
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].EXPORT_REPORT:
            {
              return Object.assign(Object.assign({}, state), {
                generatingReport: true
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].CANCEL_EXPORT_REPORT:
            {
              return Object.assign(Object.assign({}, state), {
                generatingReport: false
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].DOWNLOAD_EXPORTED_REPORT:
            {
              return Object.assign(Object.assign({}, state), {
                generatingReport: false,
                errors: undefined
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GENERATE_PREVIEW:
            {
              return Object.assign(Object.assign({}, state), {
                generatingReport: true
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].GENERATE_PREVIEW_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                reportPreview: action.payload,
                generatingReport: false,
                errors: undefined
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].CANCEL_GENERATE_PREVIEW:
            {
              return Object.assign(Object.assign({}, state), {
                reportPreview: undefined,
                generatingReport: false
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].DELETE_REPORT_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                reports: state.reports.filter(function (r) {
                  return r.id !== action.reportId;
                }),
                selectedReport: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getSelectedReport"](initialState),
                editedSinceLastSave: false
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].DOWNLOAD_EXPORTED_REPORT:
            {
              return Object.assign(Object.assign({}, state), {
                selectedReport: Object.assign(Object.assign({}, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getSelectedReport"](state)), {
                  report_file: action.payload,
                  report_file_creation: new Date().toISOString()
                })
              });
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].CHANGE_TAB:
            {
              return Object.assign(Object.assign({}, state), {
                activeTab: action.payload
              });
            }

          case _actions_display_field__WEBPACK_IMPORTED_MODULE_2__["DisplayFieldActionTypes"].LOAD_ALL:
            return Object.assign(Object.assign({}, state), {
              displayFields: _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].addAll(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getDisplayFieldsState"](state))
            });

          case _actions_display_field__WEBPACK_IMPORTED_MODULE_2__["DisplayFieldActionTypes"].UPDATE_ONE:
            return Object.assign(Object.assign({}, state), {
              displayFields: _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].updateOne(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getDisplayFieldsState"](state)),
              editedSinceLastSave: true
            });

          case _actions_display_field__WEBPACK_IMPORTED_MODULE_2__["DisplayFieldActionTypes"].UPDATE_MANY:
            return Object.assign(Object.assign({}, state), {
              displayFields: _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].updateMany(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getDisplayFieldsState"](state)),
              editedSinceLastSave: true
            });

          case _actions_display_field__WEBPACK_IMPORTED_MODULE_2__["DisplayFieldActionTypes"].DELETE_ONE:
            return Object.assign(Object.assign({}, state), {
              displayFields: _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].removeOne(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getDisplayFieldsState"](state)),
              editedSinceLastSave: true
            });

          case _actions_filter__WEBPACK_IMPORTED_MODULE_3__["FilterActionTypes"].LOAD_ALL:
            return Object.assign(Object.assign({}, state), {
              filters: _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].addAll(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFiltersState"](state))
            });

          case _actions_filter__WEBPACK_IMPORTED_MODULE_3__["FilterActionTypes"].UPDATE_ONE:
            return Object.assign(Object.assign({}, state), {
              filters: _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].updateOne(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFiltersState"](state)),
              editedSinceLastSave: true
            });

          case _actions_filter__WEBPACK_IMPORTED_MODULE_3__["FilterActionTypes"].UPDATE_MANY:
            return Object.assign(Object.assign({}, state), {
              filters: _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].updateMany(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFiltersState"](state)),
              editedSinceLastSave: true
            });

          case _actions_filter__WEBPACK_IMPORTED_MODULE_3__["FilterActionTypes"].DELETE_ONE:
            return Object.assign(Object.assign({}, state), {
              filters: _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].removeOne(action.payload, _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFiltersState"](state)),
              editedSinceLastSave: true
            });

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].ADD_REPORT_FIELD:
            {
              switch (_selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getActiveTab"](state)) {
                case 0:
                  return Object.assign(Object.assign({}, state), {
                    displayFields: _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].addOne(Object.assign(Object.assign({}, action.payload), {
                      position: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getDisplayFieldsCount"](state),
                      report: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getSelectedReportId"](state)
                    }), _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getDisplayFieldsState"](state)),
                    editedSinceLastSave: true
                  });

                case 1:
                  return Object.assign(Object.assign({}, state), {
                    filters: _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].addOne(Object.assign(Object.assign({}, action.payload), {
                      position: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFiltersCount"](state),
                      report: _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getSelectedReportId"](state),
                      filter_type: 'exact',
                      filter_value: ''
                    }), _selectors_reports__WEBPACK_IMPORTED_MODULE_4__["getFiltersState"](state)),
                    editedSinceLastSave: true
                  });

                default:
                  return state;
              }
            }

          case _actions_reports__WEBPACK_IMPORTED_MODULE_1__["ReportActionTypes"].SELECT_FIELD:
            {
              return Object.assign(Object.assign({}, state), {
                selectedField: action.payload
              });
            }

          default:
            return state;
        }
      }

      function populateChildren(parentId, children) {
        return function replaceField(field) {
          var replacement = Object.assign({}, field);

          if (field.id === parentId) {
            replacement.children = _toConsumableArray(children).map(function (child) {
              return Object.assign(Object.assign({}, child), {
                children: []
              });
            });
          } else {
            replacement.children = replacement.children.map(replaceField);
          }

          return replacement;
        };
      }

      function flatten(items) {
        var flat = [];
        items.forEach(function (item) {
          if (Array.isArray(item)) {
            flat.push.apply(flat, _toConsumableArray(flatten(item)));
          } else {
            flat.push(item);
          }
        });
        return flat;
      }
      /***/

    },

    /***/
    "AfB7":
    /*!***********************************!*\
      !*** ./src/app/effects/config.ts ***!
      \***********************************/

    /*! exports provided: ConfigEffects */

    /***/
    function AfB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigEffects", function () {
        return ConfigEffects;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var _actions_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../actions/config */
      "8COG");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ConfigEffects = function ConfigEffects(actions$, api) {
        var _this4 = this;

        _classCallCheck(this, ConfigEffects);

        this.actions$ = actions$;
        this.api = api;
        this.getConfig$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_config__WEBPACK_IMPORTED_MODULE_3__["ConfigActionTypes"].GET_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
          return _this4.api.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            return new _actions_config__WEBPACK_IMPORTED_MODULE_3__["GetConfigSuccess"](response);
          }));
        }));
      };

      ConfigEffects.ɵfac = function ConfigEffects_Factory(t) {
        return new (t || ConfigEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      ConfigEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ConfigEffects,
        factory: ConfigEffects.ɵfac
      });

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])], ConfigEffects.prototype, "getConfig$", void 0);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, {
          getConfig$: []
        });
      })();
      /***/

    },

    /***/
    "AmnA":
    /*!******************************************************************!*\
      !*** ./src/app/main/tabs/filter-tab/filter-tab-row.component.ts ***!
      \******************************************************************/

    /*! exports provided: FilterTabRowComponent */

    /***/
    function AmnA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTabRowComponent", function () {
        return FilterTabRowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _filter_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./filter-input.component */
      "YQGq");

      function FilterTabRowComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r0.filter.path_verbose, ")");
        }
      }

      function FilterTabRowComponent_app_filter_input_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterTabRowComponent_app_filter_input_57_Template_app_filter_input_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.editFilter({
              filter_value: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.filter.filter_value)("fieldType", ctx_r1.filter.field_type)("filterType", ctx_r1.filter.filter_type);
        }
      }

      function FilterTabRowComponent_app_filter_input_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterTabRowComponent_app_filter_input_58_Template_app_filter_input_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.editFilter({
              filter_delta: $event
            });
          })("unitChange", function FilterTabRowComponent_app_filter_input_58_Template_app_filter_input_unitChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.editFilter({
              filter_value: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.filter.filter_delta)("unit", ctx_r2.filter.filter_value)("filterType", ctx_r2.filter.filter_type);
        }
      }

      function FilterTabRowComponent_app_filter_input_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterTabRowComponent_app_filter_input_60_Template_app_filter_input_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.editFilter({
              filter_value2: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.filter.filter_value2)("fieldType", ctx_r3.filter.field_type)("filterType", ctx_r3.filter.filter_type);
        }
      }

      var FilterTabRowComponent = /*#__PURE__*/function () {
        function FilterTabRowComponent() {
          _classCallCheck(this, FilterTabRowComponent);

          this.deleteFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.updateFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FilterTabRowComponent, [{
          key: "editFilter",
          value: function editFilter(changes) {
            this.updateFilter.emit({
              changes: changes,
              id: this.filter.position
            });
          }
        }]);

        return FilterTabRowComponent;
      }();

      FilterTabRowComponent.ɵfac = function FilterTabRowComponent_Factory(t) {
        return new (t || FilterTabRowComponent)();
      };

      FilterTabRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterTabRowComponent,
        selectors: [["app-filter-tab-row"]],
        inputs: {
          filter: "filter"
        },
        outputs: {
          deleteFilter: "deleteFilter",
          updateFilter: "updateFilter"
        },
        decls: 63,
        vars: 8,
        consts: [[1, "mat-row"], [1, "mat-cell"], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], [3, "value", "selectionChange"], ["value", "exact"], ["value", "iexact"], ["value", "contains"], ["value", "icontains"], ["value", "in"], ["value", "gt"], ["value", "gte"], ["value", "lt"], ["value", "lte"], ["value", "startswith"], ["value", "istartswith"], ["value", "endswith"], ["value", "iendswith"], ["value", "range"], ["value", "relative_range", 3, "disabled"], ["value", "week_day"], ["value", "isnull"], ["value", "regex"], ["value", "iregex"], ["value", "max"], ["value", "min"], [3, "value", "fieldType", "filterType", "valueChange", 4, "ngIf"], [3, "value", "unit", "filterType", "valueChange", "unitChange", 4, "ngIf"], ["aria-label", "Exclude?", 3, "checked", "change"], [3, "value", "fieldType", "filterType", "valueChange"], [3, "value", "unit", "filterType", "valueChange", "unitChange"]],
        template: function FilterTabRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "drag_handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterTabRowComponent_Template_button_click_5_listener() {
              return ctx.deleteFilter.emit(ctx.filter.position);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterTabRowComponent_span_9_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterTabRowComponent_Template_mat_select_selectionChange_13_listener($event) {
              return ctx.editFilter({
                filter_type: $event.value
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Equals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Equals (case-insensitive)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contains");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contains (case-insensitive)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "in (comma seperated 1,2,3)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Greater than");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Greater than equals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Less than");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Less than equals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Starts with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Starts with (case-insensitive)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ends with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ends with (case-insensitive)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Relative Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Week day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Is null");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Regular Expression");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Reg. Exp. (case-insensitive)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Max (annotation-filter)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Min (annotation-filter)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, FilterTabRowComponent_app_filter_input_57_Template, 1, 3, "app-filter-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, FilterTabRowComponent_app_filter_input_58_Template, 1, 3, "app-filter-input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, FilterTabRowComponent_app_filter_input_60_Template, 1, 3, "app-filter-input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-checkbox", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterTabRowComponent_Template_mat_checkbox_change_62_listener($event) {
              return ctx.editFilter({
                exclude: $event.checked
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter.path_verbose);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.filter.field_verbose, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filter.filter_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.filter.field_type === "DateField" || ctx.filter.field_type === "DateTimeField"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter.filter_type !== "relative_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter.filter_type === "relative_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter.filter_type === "range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.filter.exclude);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _filter_input_component__WEBPACK_IMPORTED_MODULE_8__["FilterInputComponent"]],
        styles: [".mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", ".mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTabRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-filter-tab-row',
            templateUrl: './filter-tab-row.component.html',
            styles: [".mat-row,\n  .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", ".mat-cell,\n.mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}"]
          }]
        }], function () {
          return [];
        }, {
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          deleteFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          updateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "CG0s":
    /*!******************************************!*\
      !*** ./src/app/error/error.component.ts ***!
      \******************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function CG0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function ErrorComponent_mat_card_0_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r2);
        }
      }

      function ErrorComponent_mat_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ErrorComponent_mat_card_0_p_4_Template, 2, 1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
        }
      }

      var ErrorComponent = function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      };

      ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
        return new (t || ErrorComponent)();
      };

      ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorComponent,
        selectors: [["app-error"]],
        inputs: {
          errors: "errors"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]],
        template: function ErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorComponent_mat_card_0_Template, 5, 1, "mat-card", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error',
            templateUrl: './error.component.html'
          }]
        }], null, {
          errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "GfJD":
    /*!****************************************************************!*\
      !*** ./src/app/main/tabs/display-tab/display-tab.component.ts ***!
      \****************************************************************/

    /*! exports provided: DisplayTabComponent */

    /***/
    function GfJD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayTabComponent", function () {
        return DisplayTabComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @circlon/angular-tree-component */
      "mW75");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _display_tab_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./display-tab-row.component */
      "SItL");

      function DisplayTabComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("matTooltipPosition", "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
        }
      }

      function DisplayTabComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-display-tab-row", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateField", function DisplayTabComponent_ng_template_24_Template_app_display_tab_row_updateField_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.updateField.emit($event);
          })("deleteField", function DisplayTabComponent_ng_template_24_Template_app_display_tab_row_deleteField_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.deleteField.emit($event);
          })("click", function DisplayTabComponent_ng_template_24_Template_app_display_tab_row_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var node_r3 = ctx.$implicit;
            return node_r3.mouseAction("click", $event);
          })("treeDrop", function DisplayTabComponent_ng_template_24_Template_app_display_tab_row_treeDrop_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var node_r3 = ctx.$implicit;
            return node_r3.onDrop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", node_r3.data)("formatOptions", ctx_r2.formatOptions)("treeAllowDrop", node_r3.allowDrop)("treeDrag", node_r3)("treeDragEnabled", node_r3.allowDrag());
        }
      }

      var DisplayTabComponent = function DisplayTabComponent() {
        var _this5 = this;

        _classCallCheck(this, DisplayTabComponent);

        this.deleteField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeOptions = {
          allowDrag: true,
          allowDrop: function allowDrop(node, to) {
            return !to.parent.parent;
          },
          idField: 'position',
          actionMapping: {
            mouse: {
              drop: function drop(tree, node, event, _ref5) {
                var data = _ref5.from.data,
                    index = _ref5.to.index;
                var newPos = data.position > index ? index : index - 1;

                _this5.updateField.emit({
                  id: data.position,
                  changes: {
                    position: newPos
                  }
                });
              }
            }
          }
        };
      };

      DisplayTabComponent.ɵfac = function DisplayTabComponent_Factory(t) {
        return new (t || DisplayTabComponent)();
      };

      DisplayTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DisplayTabComponent,
        selectors: [["app-display-tab"]],
        inputs: {
          fields: "fields",
          formatOptions: "formatOptions",
          hasChanged: "hasChanged",
          errors: "errors"
        },
        outputs: {
          deleteField: "deleteField",
          updateField: "updateField",
          saveReport: "saveReport"
        },
        decls: 26,
        vars: 4,
        consts: [[1, "mat-table", "tab-table-header"], [1, "mat-header-row"], [1, "mat-header-cell"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-icon-button", "", "matTooltip", "There were errors with your report! Check the report tab for more info", 3, "disabled", "matTooltipPosition", 4, "ngIf"], [1, "mat-header-cell", "narrow"], [3, "nodes", "options"], ["treeNodeWrapperTemplate", ""], ["mat-icon-button", "", "matTooltip", "There were errors with your report! Check the report tab for more info", 3, "disabled", "matTooltipPosition"], [3, "color"], [1, "node-wrapper", "report-builder-display-grid"], [3, "field", "formatOptions", "treeAllowDrop", "treeDrag", "treeDragEnabled", "updateField", "deleteField", "click", "treeDrop"]],
        template: function DisplayTabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayTabComponent_Template_button_click_3_listener() {
              return ctx.saveReport.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplayTabComponent_button_6_Template, 3, 3, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sort");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Desc?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aggregate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tree-root", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DisplayTabComponent_ng_template_24_Template, 2, 5, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.hasChanged);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", ctx.fields)("options", ctx.treeOptions);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _display_tab_row_component__WEBPACK_IMPORTED_MODULE_6__["DisplayTabRowComponent"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeDragDirective"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeDropDirective"]],
        styles: [".mat-table[_ngcontent-%COMP%] {\n    display: block;\n  }", ".mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", ".mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n    flex: 4;\n    overflow: hidden;\n    word-wrap: break-word;\n  }", ".narrow[_ngcontent-%COMP%] {\n    flex: 1;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayTabComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-display-tab',
            templateUrl: './display-tab.component.html',
            styles: ["\n  .mat-table {\n    display: block;\n  }", "\n  .mat-row,\n  .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", "\n  .mat-cell,\n  .mat-header-cell {\n    flex: 4;\n    overflow: hidden;\n    word-wrap: break-word;\n  }", "\n  .narrow {\n    flex: 1;\n  }"]
          }]
        }], function () {
          return [];
        }, {
          fields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formatOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hasChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          deleteField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          updateField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          saveReport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "IO7V":
    /*!**************************************************************!*\
      !*** ./src/app/main/tabs/report-tab/report-tab.component.ts ***!
      \**************************************************************/

    /*! exports provided: ReportTabComponent */

    /***/
    function IO7V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportTabComponent", function () {
        return ReportTabComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../selectors */
      "SWq+");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../actions/reports */
      "yctz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _saved_timestamp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./saved-timestamp.component */
      "eTro");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../error/error.component */
      "CG0s");
      /* harmony import */


      var _last_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./last-report.component */
      "eMG3");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _report_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./report-preview.component */
      "OgNE");

      function ReportTabComponent_app_last_report_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-last-report", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.lastGeneratedReport$));
        }
      }

      function ReportTabComponent_mat_progress_bar_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 9);
        }
      }

      function ReportTabComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-report-preview", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("previewData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.previewData$));
        }
      }

      var ReportTabComponent = /*#__PURE__*/function () {
        function ReportTabComponent(store) {
          _classCallCheck(this, ReportTabComponent);

          this.store = store;
          this.previewData$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getPreview"]);
          this.lastSaved$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getLastSaved"]);
          this.lastGeneratedReport$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getLastGeneratedReport"]);
          this.isGeneratingReport$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["isGeneratingReport"]);
          this.errors$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getErrors"]);
          this.dirty$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["hasEditedSinceLastSave"]);
        }

        _createClass(ReportTabComponent, [{
          key: "onSave",
          value: function onSave() {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["EditReport"]());
          }
        }, {
          key: "makePreview",
          value: function makePreview() {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["GeneratePreview"]());
          }
        }, {
          key: "exportReport",
          value: function exportReport(type) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["ExportReport"](type));
          }
        }]);

        return ReportTabComponent;
      }();

      ReportTabComponent.ɵfac = function ReportTabComponent_Factory(t) {
        return new (t || ReportTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      ReportTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportTabComponent,
        selectors: [["app-report-tab"]],
        decls: 21,
        vars: 18,
        consts: [[1, "app-report-tab"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 3, "click"], [3, "report", 4, "ngIf"], [3, "lastSaved"], [3, "errors"], ["mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], [3, "report"], ["mode", "indeterminate"], [3, "previewData"]],
        template: function ReportTabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportTabComponent_Template_button_click_2_listener() {
              return ctx.onSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportTabComponent_Template_button_click_5_listener() {
              return ctx.makePreview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportTabComponent_Template_button_click_7_listener() {
              return ctx.exportReport("xlsx");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "XLSX");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportTabComponent_Template_button_click_9_listener() {
              return ctx.exportReport("csv");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportTabComponent_app_last_report_11_Template, 2, 3, "app-last-report", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-saved-timestamp", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReportTabComponent_mat_progress_bar_17_Template, 1, 0, "mat-progress-bar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReportTabComponent_div_19_Template, 3, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.dirty$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, ctx.lastGeneratedReport$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lastSaved", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx.lastSaved$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, ctx.errors$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, ctx.isGeneratingReport$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, ctx.previewData$));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _saved_timestamp_component__WEBPACK_IMPORTED_MODULE_6__["SavedTimestampComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _last_report_component__WEBPACK_IMPORTED_MODULE_8__["LastReportComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _report_preview_component__WEBPACK_IMPORTED_MODULE_10__["ReportPreviewComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportTabComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report-tab',
            template: "\n  <div class=\"app-report-tab\">\n    <div>\n      <button mat-button [disabled]=\"!(dirty$ | async)\" (click)=\"this.onSave()\">Save</button>\n      <button mat-button (click)=\"this.makePreview()\">Preview</button>\n      <button mat-button (click)=\"this.exportReport('xlsx')\">XLSX</button>\n      <button mat-button (click)=\"this.exportReport('csv')\">CSV</button>\n      <app-last-report *ngIf=\"lastGeneratedReport$ | async\" [report]=\"lastGeneratedReport$ | async\"></app-last-report>\n      <app-saved-timestamp [lastSaved]=\"this.lastSaved$ | async\" ></app-saved-timestamp>\n    </div>\n    <app-error [errors]=\"errors$ | async\"></app-error>\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"isGeneratingReport$ | async\"></mat-progress-bar>\n    <div *ngIf=\"this.previewData$ | async\">\n      <app-report-preview [previewData]=\"this.previewData$ | async\" ></app-report-preview>\n    </div>\n  </div>\n  "
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JG9l":
    /*!***********************************!*\
      !*** ./src/app/models/reports.ts ***!
      \***********************************/

    /*! exports provided: createPositionEntityAdapter, displayFieldAdapter, filterAdapter */

    /***/
    function JG9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPositionEntityAdapter", function () {
        return createPositionEntityAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "displayFieldAdapter", function () {
        return displayFieldAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterAdapter", function () {
        return filterAdapter;
      });
      /* harmony import */


      var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/entity */
      "EVqC");

      function createPositionEntityAdapter() {
        var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
          sortComparer: function sortComparer(x, y) {
            return x.position - y.position;
          },
          selectId: function selectId(x) {
            return x.position;
          }
        });
        var selectors = adapter.getSelectors();
        var result = Object.assign({}, adapter);

        result.removeOne = function (removedPos, state) {
          state = adapter.removeOne(removedPos, state);
          return adapter.updateMany(selectors.selectAll(state).reduce(function (updatelist, entity) {
            if (entity.position > removedPos) {
              updatelist.push({
                id: entity.position,
                changes: {
                  position: entity.position - 1
                }
              });
            }

            return updatelist;
          }, []), state);
        };

        result.removeMany = function (removedPositions, state) {
          return removedPositions.reduce(function (s, pos) {
            return result.removeOne(pos, s);
          }, state);
        };

        var getPositionUpdates = function getPositionUpdates(oldPosition, newPosition, state) {
          var changedPositions = inclusiveRange(oldPosition, newPosition);
          var isIncrease = oldPosition < newPosition;
          return selectors.selectAll(state).reduce(function (col, entity) {
            if (changedPositions.includes(entity.position)) {
              var update = {
                id: entity.position,
                changes: {}
              };

              if (entity.position === oldPosition) {
                update.changes.position = newPosition;
              } else if (isIncrease) {
                update.changes.position = entity.position - 1;
              } else {
                update.changes.position = entity.position + 1;
              }

              return [].concat(_toConsumableArray(col), [update]);
            } else {
              return col;
            }
          }, []);
        };

        result.updateOne = function (update, state) {
          if ('position' in update.changes) {
            var updates = getPositionUpdates(update.id, update.changes.position, state);

            if (Object.keys(update.changes).length === 1) {
              return adapter.updateMany(updates, state);
            }

            update = Object.assign(Object.assign({}, update), {
              changes: Object.assign({}, update.changes)
            });
            delete update.changes.position;
            return adapter.updateMany([update].concat(_toConsumableArray(updates)), state);
          } else {
            return adapter.updateOne(update, state);
          }
        };

        result.updateMany = function (updates, state) {
          return updates.reduce(function (s, update) {
            return result.updateOne(update, s);
          }, state);
        };

        return result;
      }

      var displayFieldAdapter = createPositionEntityAdapter();
      var filterAdapter = createPositionEntityAdapter();

      function inclusiveRange(begin, end) {
        var result = [];

        for (var i = Math.min(begin, end); i <= Math.max(begin, end); i++) {
          result.push(i);
        }

        return result;
      }
      /***/

    },

    /***/
    "M4Lc":
    /*!*************************************!*\
      !*** ./src/app/selectors/config.ts ***!
      \*************************************/

    /*! exports provided: getIsAsyncReport, getFormatOptions */

    /***/
    function M4Lc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIsAsyncReport", function () {
        return getIsAsyncReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFormatOptions", function () {
        return getFormatOptions;
      });

      var getIsAsyncReport = function getIsAsyncReport(state) {
        return state.async_report;
      };

      var getFormatOptions = function getFormatOptions(state) {
        return state.formats;
      };
      /***/

    },

    /***/
    "OgNE":
    /*!******************************************************************!*\
      !*** ./src/app/main/tabs/report-tab/report-preview.component.ts ***!
      \******************************************************************/

    /*! exports provided: ReportPreviewComponent */

    /***/
    function OgNE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPreviewComponent", function () {
        return ReportPreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ReportPreviewComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](header_r2);
        }
      }

      function ReportPreviewComponent_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r5);
        }
      }

      function ReportPreviewComponent_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportPreviewComponent_tr_5_td_1_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r3);
        }
      }

      var ReportPreviewComponent = function ReportPreviewComponent() {
        _classCallCheck(this, ReportPreviewComponent);
      };

      ReportPreviewComponent.ɵfac = function ReportPreviewComponent_Factory(t) {
        return new (t || ReportPreviewComponent)();
      };

      ReportPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportPreviewComponent,
        selectors: [["app-report-preview"]],
        inputs: {
          previewData: "previewData"
        },
        decls: 6,
        vars: 2,
        consts: [[4, "ngFor", "ngForOf"]],
        template: function ReportPreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportPreviewComponent_td_3_Template, 2, 1, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportPreviewComponent_tr_5_Template, 2, 1, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.previewData.meta.titles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.previewData.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportPreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report-preview',
            template: "<table>\n    <thead><tr><td *ngFor=\"let header of previewData.meta.titles\">{{header}}</td></tr></thead>\n    <tbody><tr *ngFor=\"let row of previewData.data\"><td *ngFor=\"let cell of row\">{{cell}}</td></tr></tbody>\n  </table>"
          }]
        }], function () {
          return [];
        }, {
          previewData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "PcZK":
    /*!**********************************!*\
      !*** ./src/app/generic.guard.ts ***!
      \**********************************/

    /*! exports provided: PendingChangesGuard */

    /***/
    function PcZK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendingChangesGuard", function () {
        return PendingChangesGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PendingChangesGuard = /*#__PURE__*/function () {
        function PendingChangesGuard() {
          _classCallCheck(this, PendingChangesGuard);
        }

        _createClass(PendingChangesGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            return component.canDeactivate();
          }
        }]);

        return PendingChangesGuard;
      }();

      PendingChangesGuard.ɵfac = function PendingChangesGuard_Factory(t) {
        return new (t || PendingChangesGuard)();
      };

      PendingChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PendingChangesGuard,
        factory: PendingChangesGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingChangesGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SItL":
    /*!********************************************************************!*\
      !*** ./src/app/main/tabs/display-tab/display-tab-row.component.ts ***!
      \********************************************************************/

    /*! exports provided: DisplayTabRowComponent */

    /***/
    function SItL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayTabRowComponent", function () {
        return DisplayTabRowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DisplayTabRowComponent_mat_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var format_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", format_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](format_r1.name);
        }
      }

      var DisplayTabRowComponent = /*#__PURE__*/function () {
        function DisplayTabRowComponent() {
          _classCallCheck(this, DisplayTabRowComponent);

          this.deleteField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.updateField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(DisplayTabRowComponent, [{
          key: "editField",
          value: function editField(changes) {
            this.updateField.emit({
              changes: changes,
              id: this.field.position
            });
          }
        }]);

        return DisplayTabRowComponent;
      }();

      DisplayTabRowComponent.ɵfac = function DisplayTabRowComponent_Factory(t) {
        return new (t || DisplayTabRowComponent)();
      };

      DisplayTabRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DisplayTabRowComponent,
        selectors: [["app-display-tab-row"]],
        inputs: {
          field: "field",
          formatOptions: "formatOptions"
        },
        outputs: {
          deleteField: "deleteField",
          updateField: "updateField"
        },
        decls: 43,
        vars: 10,
        consts: [[1, "mat-row"], [1, "mat-cell"], ["mat-icon-button", "", "disableRipple", ""], ["mat-icon-button", "", 3, "click"], ["matInput", "", 3, "value", "keyup"], [1, "mat-cell", "narrow"], [3, "checked", "change"], [3, "value", "selectionChange"], ["value", ""], ["value", "Sum"], ["value", "Count"], ["value", "Avg"], ["value", "Max"], ["value", "Min"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function DisplayTabRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "drag_handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayTabRowComponent_Template_button_click_5_listener() {
              return ctx.deleteField.emit(ctx.field.position);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DisplayTabRowComponent_Template_input_keyup_12_listener($event) {
              return ctx.editField({
                name: $event.currentTarget.value
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DisplayTabRowComponent_Template_input_keyup_15_listener($event) {
              return ctx.editField({
                sort: $event.currentTarget.value
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DisplayTabRowComponent_Template_mat_checkbox_change_17_listener($event) {
              return ctx.editField({
                sort_reverse: $event.checked
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DisplayTabRowComponent_Template_mat_select_selectionChange_20_listener($event) {
              return ctx.editField({
                aggregate: $event.value
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "----------");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Count");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Avg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Max");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DisplayTabRowComponent_Template_mat_select_selectionChange_35_listener($event) {
              return ctx.editField({
                display_format: $event.value
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "----------");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DisplayTabRowComponent_mat_option_38_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DisplayTabRowComponent_Template_mat_checkbox_change_40_listener($event) {
              return ctx.editField({
                total: $event.checked
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DisplayTabRowComponent_Template_mat_checkbox_change_42_listener($event) {
              return ctx.editField({
                group: $event.checked
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.field.field_verbose, " [", ctx.field.field_type, "]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.field.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.field.sort);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.field.sort_reverse);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.field.aggregate || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.field.display_format ? ctx.field.display_format.toString() : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formatOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.field.total);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.field.group);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        styles: [".mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", ".mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n    flex: 4;\n    overflow: hidden;\n    word-wrap: break-word;\n  }", ".narrow[_ngcontent-%COMP%] {\n    flex: 1;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayTabRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-display-tab-row',
            templateUrl: './display-tab-row.component.html',
            styles: ["\n  .mat-row,\n  .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", "\n  .mat-cell,\n  .mat-header-cell {\n    flex: 4;\n    overflow: hidden;\n    word-wrap: break-word;\n  }", "\n  .narrow {\n    flex: 1;\n  }"]
          }]
        }], function () {
          return [];
        }, {
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formatOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          deleteField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          updateField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "SWq+":
    /*!******************************!*\
      !*** ./src/app/selectors.ts ***!
      \******************************/

    /*! exports provided: getIsAsyncReport, getFormatOptions, getReports, getSelectedReport, getSelectedReportId, getSelectedReportName, getFields, getTitle, getRightNavIsOpen, getRelatedFields, getDescriptionInput, getIsDistinct, getEditedReport, getPreview, getLastSaved, getNewReportInfo, getLastGeneratedReport, getActiveTab, getDisplayFields, getFilters, getSelectedField, isGeneratingReport, hasEditedSinceLastSave, getErrors */

    /***/
    function SWq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIsAsyncReport", function () {
        return getIsAsyncReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFormatOptions", function () {
        return getFormatOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getReports", function () {
        return getReports;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedReport", function () {
        return getSelectedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedReportId", function () {
        return getSelectedReportId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedReportName", function () {
        return getSelectedReportName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFields", function () {
        return getFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTitle", function () {
        return getTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRightNavIsOpen", function () {
        return getRightNavIsOpen;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRelatedFields", function () {
        return getRelatedFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDescriptionInput", function () {
        return getDescriptionInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIsDistinct", function () {
        return getIsDistinct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEditedReport", function () {
        return getEditedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPreview", function () {
        return getPreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLastSaved", function () {
        return getLastSaved;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNewReportInfo", function () {
        return getNewReportInfo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLastGeneratedReport", function () {
        return getLastGeneratedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getActiveTab", function () {
        return getActiveTab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDisplayFields", function () {
        return getDisplayFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFilters", function () {
        return getFilters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedField", function () {
        return getSelectedField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGeneratingReport", function () {
        return isGeneratingReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasEditedSinceLastSave", function () {
        return hasEditedSinceLastSave;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getErrors", function () {
        return getErrors;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _selectors_reports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./selectors/reports */
      "jhkq");
      /* harmony import */


      var _selectors_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./selectors/config */
      "M4Lc");

      var getConfigState = function getConfigState(state) {
        return state.config;
      };

      var getIsAsyncReport = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getConfigState, _selectors_config__WEBPACK_IMPORTED_MODULE_2__["getIsAsyncReport"]);
      var getFormatOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getConfigState, _selectors_config__WEBPACK_IMPORTED_MODULE_2__["getFormatOptions"]);

      var getReportsState = function getReportsState(state) {
        return state.reports;
      };

      var getReports = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getReports"]);
      var getSelectedReport = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getSelectedReport"]);
      var getSelectedReportId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getSelectedReportId"]);
      var getSelectedReportName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getSelectedReportName"]);
      var getFields = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getFields"]);
      var getTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getTitle"]);
      var getRightNavIsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getRightNavIsOpen"]);
      var getRelatedFields = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getRelatedFields"]);
      var getDescriptionInput = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getDescriptionInput"]);
      var getIsDistinct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getIsDistinct"]);
      var getEditedReport = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getEditedReport"]);
      var getPreview = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getPreview"]);
      var getLastSaved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getLastSaved"]);
      var getNewReportInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getNewReportInfo"]);
      var getLastGeneratedReport = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getLastGeneratedReport"]);
      var getActiveTab = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getActiveTab"]);
      var getDisplayFields = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getDisplayFields"]);
      var getFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getFilters"]);
      var getSelectedField = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getSelectedField"]);
      var isGeneratingReport = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["isGeneratingReport"]);
      var hasEditedSinceLastSave = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["hasEditedSinceLastSave"]);
      var getErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReportsState, _selectors_reports__WEBPACK_IMPORTED_MODULE_1__["getErrors"]);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _actions_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions/config */
      "8COG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(store) {
          _classCallCheck(this, AppComponent);

          this.store = store;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch(new _actions_config__WEBPACK_IMPORTED_MODULE_2__["GetConfig"]());
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TyqG":
    /*!**************************************************************!*\
      !*** ./src/app/main/tabs/filter-tab/filter-tab.component.ts ***!
      \**************************************************************/

    /*! exports provided: FilterTabComponent */

    /***/
    function TyqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTabComponent", function () {
        return FilterTabComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @circlon/angular-tree-component */
      "mW75");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _filter_tab_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filter-tab-row.component */
      "AmnA");

      function FilterTabComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("matTooltipPosition", "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
        }
      }

      function FilterTabComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-filter-tab-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateFilter", function FilterTabComponent_ng_template_17_Template_app_filter_tab_row_updateFilter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.updateFilter.emit($event);
          })("deleteFilter", function FilterTabComponent_ng_template_17_Template_app_filter_tab_row_deleteFilter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.deleteFilter.emit($event);
          })("click", function FilterTabComponent_ng_template_17_Template_app_filter_tab_row_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var node_r3 = ctx.$implicit;
            return node_r3.mouseAction("click", $event);
          })("treeDrop", function FilterTabComponent_ng_template_17_Template_app_filter_tab_row_treeDrop_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var node_r3 = ctx.$implicit;
            return node_r3.onDrop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", node_r3.data)("treeAllowDrop", node_r3.allowDrop)("treeDrag", node_r3)("treeDragEnabled", node_r3.allowDrag());
        }
      }

      var FilterTabComponent = function FilterTabComponent() {
        var _this6 = this;

        _classCallCheck(this, FilterTabComponent);

        this.deleteFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeOptions = {
          allowDrag: true,
          allowDrop: function allowDrop(node, to) {
            return !to.parent.parent;
          },
          idField: 'position',
          actionMapping: {
            mouse: {
              drop: function drop(tree, node, event, _ref6) {
                var data = _ref6.from.data,
                    index = _ref6.to.index;

                _this6.updateFilter.emit({
                  id: data.position,
                  changes: {
                    position: index
                  }
                });
              }
            }
          }
        };
      };

      FilterTabComponent.ɵfac = function FilterTabComponent_Factory(t) {
        return new (t || FilterTabComponent)();
      };

      FilterTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterTabComponent,
        selectors: [["app-filter-tab"]],
        inputs: {
          filters: "filters",
          hasChanged: "hasChanged",
          errors: "errors"
        },
        outputs: {
          deleteFilter: "deleteFilter",
          updateFilter: "updateFilter",
          saveReport: "saveReport",
          moveFilter: "moveFilter"
        },
        decls: 19,
        vars: 4,
        consts: [[1, "mat-table", "tab-table-header"], [1, "mat-header-row"], [1, "mat-header-cell"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-icon-button", "", "matTooltip", "There were errors with your report! Check the report tab for more info", 3, "disabled", "matTooltipPosition", 4, "ngIf"], [3, "nodes", "options"], ["treeNodeWrapperTemplate", ""], ["mat-icon-button", "", "matTooltip", "There were errors with your report! Check the report tab for more info", 3, "disabled", "matTooltipPosition"], [3, "color"], [1, "node-wrapper", "report-builder-display-grid"], [3, "filter", "treeAllowDrop", "treeDrag", "treeDragEnabled", "updateFilter", "deleteFilter", "click", "treeDrop"]],
        template: function FilterTabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterTabComponent_Template_button_click_3_listener() {
              return ctx.saveReport.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterTabComponent_button_6_Template, 3, 3, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Values");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Exclude");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tree-root", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FilterTabComponent_ng_template_17_Template, 2, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.hasChanged);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", ctx.filters)("options", ctx.treeOptions);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _filter_tab_row_component__WEBPACK_IMPORTED_MODULE_6__["FilterTabRowComponent"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeDragDirective"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeDropDirective"]],
        styles: [".mat-table[_ngcontent-%COMP%] {\n    display: block;\n  }", ".mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", ".mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTabComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-filter-tab',
            templateUrl: './filter-tab.component.html',
            styles: [".mat-table {\n    display: block;\n  }", ".mat-row,\n  .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n  }", ".mat-cell,\n.mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}"]
          }]
        }], function () {
          return [];
        }, {
          filters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hasChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          deleteFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          updateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          saveReport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          moveFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "X73d":
    /*!****************************************************!*\
      !*** ./src/app/new-report/new-report.component.ts ***!
      \****************************************************/

    /*! exports provided: NewReportComponent */

    /***/
    function X73d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewReportComponent", function () {
        return NewReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../actions/reports */
      "yctz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../error/error.component */
      "CG0s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function NewReportComponent_app_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error", 11);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.errors);
        }
      }

      function NewReportComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var model_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", model_r3.pk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", model_r3.name, " ");
        }
      }

      var NewReportComponent = /*#__PURE__*/function () {
        function NewReportComponent(store, api) {
          var _this7 = this;

          _classCallCheck(this, NewReportComponent);

          this.store = store;
          this.api = api;
          this.errors = [];
          this.root_model_choices$ = this.api.getRootModels().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (models) {
            _this7.errors = [];
            return models.sort(function (x, y) {
              return x.name === y.name ? 0 : x.name > y.name ? 1 : -1;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ('detail' in err) {
              _this7.errors = [err.detail];
            } else {
              _this7.errors = ['Unable to fetch models from Django'];
            }

            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
          }));
        }

        _createClass(NewReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = {
              name: '',
              description: '',
              root_model: null
            };
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.form.name.trim() && this.form.root_model) {
              this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_5__["CreateReport"](this.form));
            }
          }
        }]);

        return NewReportComponent;
      }();

      NewReportComponent.ɵfac = function NewReportComponent_Factory(t) {
        return new (t || NewReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      NewReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewReportComponent,
        selectors: [["app-new-report"]],
        decls: 19,
        vars: 8,
        consts: [[1, "form-container"], [1, "report-form"], [1, "report-title"], [3, "errors", 4, "ngIf"], [1, "container", 3, "ngSubmit"], ["reportForm", "ngForm"], ["matInput", "", "placeholder", "Report Name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", "name", "description", 3, "ngModel", "ngModelChange"], ["placeholder", "Root Model", "name", "root_model", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], [3, "errors"], [3, "value"]],
        template: function NewReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add New Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewReportComponent_app_error_4_Template, 1, 1, "app-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewReportComponent_Template_form_ngSubmit_5_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewReportComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.form.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewReportComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.form.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewReportComponent_Template_mat_select_ngModelChange_12_listener($event) {
              return ctx.form.root_model = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewReportComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Create Report ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.root_model);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.root_model_choices$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.name.trim() || !ctx.form.root_model);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".form-container[_ngcontent-%COMP%] {\r\n  background: #f8f8f8;\r\n  height: 100vh;\r\n}\r\n\r\n.report-form[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  border: 1px solid #dbdbdb;\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  display: table;\r\n  border-radius: 5px;\r\n  padding-top: 0;\r\n}\r\n\r\n.report-title[_ngcontent-%COMP%] {\r\n  background: #417690;\r\n  color: white;\r\n  height: 15%;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  margin: 0 -17px 16px;\r\n  padding-left: 20px;\r\n  padding-top: 10px;\r\n  font-weight: 300;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .report-title[_ngcontent-%COMP%] {\r\n    margin: 0 -16px 16px;\r\n    padding: 10px 16px;\r\n  }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlcG9ydC9uZXctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmV3LXJlcG9ydC9uZXctcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnJlcG9ydC1mb3JtIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4ucmVwb3J0LXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjNDE3NjkwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgLTE3cHggMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAucmVwb3J0LXRpdGxlIHtcclxuICAgIG1hcmdpbjogMCAtMTZweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+IG1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-report',
            templateUrl: './new-report.component.html',
            styleUrls: ['./new-report.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YHnS":
    /*!****************************************************!*\
      !*** ./src/app/confirm/confirm-modal.component.ts ***!
      \****************************************************/

    /*! exports provided: ConfirmModalComponent */

    /***/
    function YHnS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function () {
        return ConfirmModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ConfirmModalComponent = function ConfirmModalComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      };

      ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) {
        return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmModalComponent,
        selectors: [["app-confirm-modal"]],
        decls: 10,
        vars: 5,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
        template: function ConfirmModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_6_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.subtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.cancelText || "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.confirmText || "Confirm");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confirm-modal',
            templateUrl: './confirm-modal.component.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YQGq":
    /*!****************************************************************!*\
      !*** ./src/app/main/tabs/filter-tab/filter-input.component.ts ***!
      \****************************************************************/

    /*! exports provided: FilterInputComponent */

    /***/
    function YQGq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterInputComponent", function () {
        return FilterInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      function FilterInputComponent_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterInputComponent_mat_form_field_1_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.valueChange.emit($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sunday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Monday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tuesday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wednesday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Thursday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Friday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Saturday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value);
        }
      }

      function FilterInputComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterInputComponent_div_2_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.emitBoolean($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.getBoolean());
        }
      }

      function FilterInputComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterInputComponent_div_3_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.emitBoolean($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.getBoolean());
        }
      }

      function FilterInputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterInputComponent_div_4_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.emitBoolean($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.getBoolean());
        }
      }

      function FilterInputComponent_div_5_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.display, " ");
        }
      }

      function FilterInputComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FilterInputComponent_div_5_Template_input_keyup_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.onRangeChange($event.currentTarget.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterInputComponent_div_5_Template_mat_select_selectionChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onRangeUnitChange($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterInputComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.range);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.rangeUnit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.rangeUnitOpts);
        }
      }

      function FilterInputComponent_div_6_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function FilterInputComponent_div_6_mat_form_field_1_Template_input_dateChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.onDateChange($event.value.format("YYYY-MM-DD"));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker-toggle", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r23)("value", ctx_r19.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r23);
        }
      }

      function FilterInputComponent_div_6_div_2_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28.display, " ");
        }
      }

      function FilterInputComponent_div_6_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function FilterInputComponent_div_6_div_2_Template_input_dateChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.onDateChange($event.value.format("YYYY-MM-DD"));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker-toggle", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterInputComponent_div_6_div_2_Template_mat_select_selectionChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.onTimeChange($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilterInputComponent_div_6_div_2_mat_option_8_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r26)("value", ctx_r20.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.timeOpts);
        }
      }

      function FilterInputComponent_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterInputComponent_div_6_div_3_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.emitBoolean($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r21.getBoolean());
        }
      }

      function FilterInputComponent_div_6_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FilterInputComponent_div_6_mat_form_field_4_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.valueChange.emit($event.currentTarget.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r22.value);
        }
      }

      function FilterInputComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterInputComponent_div_6_mat_form_field_1_Template, 5, 3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterInputComponent_div_6_div_2_Template, 9, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterInputComponent_div_6_div_3_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterInputComponent_div_6_mat_form_field_4_Template, 2, 1, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r5.fieldType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "DateField");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "DateTimeField");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BooleanField");
        }
      } // this code is ugly and Dog willing can be deleted when Angular Material adds a datetime input
      // until that day I will describe what it does in comments because it's real imperative


      var timeOpts = [];

      for (var x = 0; x < 24; x += 0.5) {
        // go through numbers from 0.0 to 23.5
        var hour = Math.floor(x); // ignore the decimal to get the hour

        var displayHour = hour % 12 === 0 ? '12' : String(hour % 12); // display 12-hour clock times

        var valueHour = hour < 10 ? '0' + hour : String(hour); // use two digit 24-hour clock times for the value

        var ampm = hour < 12 ? 'AM' : 'PM'; // before noon display AM, after PM

        var _minutes = x === Math.floor(x) ? '00' : '30'; // 0.0 = on the hour, 0.5 = on the half hour


        timeOpts.push({
          display: "".concat(displayHour, ":").concat(_minutes, " ").concat(ampm),
          value: "".concat(valueHour, ":").concat(_minutes)
        });
      }

      var rangeUnitOpts = [];
      var days = 'days';
      var hours = 'hours';
      var minutes = 'minutes';
      var seconds = 'seconds';
      var options = [days, hours, minutes, seconds];
      var multipliers = [24 * 60 * 60, 60 * 60, 60, 1];

      for (var i = 0; i < options.length; i++) {
        rangeUnitOpts.push({
          display: "".concat(options[i], " ago"),
          value: "".concat(options[i]),
          multiplier: multipliers[i]
        });
      }

      var FilterInputComponent = /*#__PURE__*/function () {
        function FilterInputComponent() {
          _classCallCheck(this, FilterInputComponent);

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.unitChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.timeOpts = timeOpts;
          this.rangeUnitOpts = rangeUnitOpts;
        }

        _createClass(FilterInputComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this8 = this;

            if (/Date/.test(this.fieldType)) {
              var _this$value$split = this.value.split(' '),
                  _this$value$split2 = _slicedToArray(_this$value$split, 2),
                  date = _this$value$split2[0],
                  time = _this$value$split2[1];

              this.date = date;
              this.time = time;
            }

            if (changes.filterType && /^(?:isnull|max|min)$/.test(changes.filterType.currentValue) && this.value.length === 0) {
              // settimeout is a hack because we probably shouldn't be emitting inside of ngOnChanges. Eventually this should be moved to some kind of serializer
              setTimeout(function () {
                return _this8.emitBoolean(false);
              }, 0);
            }

            if (this.filterType === 'relative_range') {
              this.rangeUnit = options.includes(this.unit) ? this.unit : seconds;
              this.range = (this.getNumber(this.value) / this.getMultiplier()).toString();
            }
          }
        }, {
          key: "getBoolean",
          value: function getBoolean() {
            return this.value === 'True';
          }
        }, {
          key: "emitBoolean",
          value: function emitBoolean(value) {
            this.valueChange.emit(value ? 'True' : 'False');
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(date) {
            this.date = date;
            this.emitDateTime();
          }
        }, {
          key: "onTimeChange",
          value: function onTimeChange(time) {
            this.time = time;
            this.emitDateTime();
          }
        }, {
          key: "emitDateTime",
          value: function emitDateTime() {
            var result = this.date;

            if (this.fieldType === 'DateTimeField') {
              result += ' ' + (this.time || '00:00');
            }

            this.valueChange.emit(result);
          }
        }, {
          key: "getNumber",
          value: function getNumber(s) {
            var n = parseInt(s, 10);
            return isNaN(n) ? 0 : Math.abs(n);
          }
        }, {
          key: "getMultiplier",
          value: function getMultiplier() {
            var _this9 = this;

            var option = this.rangeUnitOpts.find(function (_option) {
              return _option.value === _this9.rangeUnit;
            });
            return option ? option.multiplier : 1;
          }
        }, {
          key: "onRangeChange",
          value: function onRangeChange(range) {
            this.range = this.getNumber(range).toString();
            this.emitRange();
          }
        }, {
          key: "onRangeUnitChange",
          value: function onRangeUnitChange(unit) {
            this.rangeUnit = unit;
            this.unitChange.emit(unit);
            this.emitRange();
          }
        }, {
          key: "emitRange",
          value: function emitRange() {
            // we need to make seconds negative for the API
            var _seconds = -this.getNumber(this.range) * this.getMultiplier();

            this.valueChange.emit(_seconds);
          }
        }]);

        return FilterInputComponent;
      }();

      FilterInputComponent.ɵfac = function FilterInputComponent_Factory(t) {
        return new (t || FilterInputComponent)();
      };

      FilterInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterInputComponent,
        selectors: [["app-filter-input"]],
        inputs: {
          value: "value",
          unit: "unit",
          filterType: "filterType",
          fieldType: "fieldType"
        },
        outputs: {
          valueChange: "valueChange",
          unitChange: "unitChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 7,
        vars: 6,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [3, "value", "selectionChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["arial-label", "Is Null", 3, "checked", "change"], ["arial-label", "Max (annotation-filter)", 3, "checked", "change"], ["arial-label", "Min (annotation-filter)", 3, "checked", "change"], ["matInput", "", "type", "number", "oninput", "if (isNaN(parseInt(this.value))) this.value = 0; else this.value = parseInt(this.value);", 3, "value", "keyup"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngSwitchDefault"], ["matInput", "", 3, "matDatepicker", "value", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "checked", "change"], ["matInput", "", 3, "value", "keyup"]],
        template: function FilterInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterInputComponent_mat_form_field_1_Template, 16, 1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterInputComponent_div_2_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterInputComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterInputComponent_div_4_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterInputComponent_div_5_Template, 6, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterInputComponent_div_6_Template, 5, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week_day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "isnull");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "max");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "min");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "relative_range");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-filter-input',
            templateUrl: './filter-input.component.html'
          }]
        }], null, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          filterType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fieldType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          unitChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: MatModules, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatModules", function () {
        return MatModules;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @circlon/angular-tree-component */
      "mW75");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "B3rN");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ngrx/router-store */
      "Ta0S");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _new_report_new_report_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./new-report/new-report.component */
      "X73d");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./api.service */
      "yTNM");
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./reducers */
      "2qkP");
      /* harmony import */


      var _effects_reports__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./effects/reports */
      "eRXj");
      /* harmony import */


      var _effects_config__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./effects/config */
      "AfB7");
      /* harmony import */


      var _effects_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./effects/router */
      "uUab");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./confirm/confirm-modal.component */
      "YHnS");
      /* harmony import */


      var _main_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./main/tabs/tabs.component */
      "wIJ9");
      /* harmony import */


      var _main_tabs_options_tab_options_tab_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./main/tabs/options-tab/options-tab.component */
      "jrw+");
      /* harmony import */


      var _main_tabs_report_tab_report_tab_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./main/tabs/report-tab/report-tab.component */
      "IO7V");
      /* harmony import */


      var _main_tabs_report_tab_report_preview_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./main/tabs/report-tab/report-preview.component */
      "OgNE");
      /* harmony import */


      var _main_tabs_report_tab_saved_timestamp_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./main/tabs/report-tab/saved-timestamp.component */
      "eTro");
      /* harmony import */


      var _main_tabs_report_tab_last_report_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./main/tabs/report-tab/last-report.component */
      "eMG3");
      /* harmony import */


      var _main_tabs_display_tab_display_tab_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./main/tabs/display-tab/display-tab.component */
      "GfJD");
      /* harmony import */


      var _main_tabs_display_tab_display_tab_row_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./main/tabs/display-tab/display-tab-row.component */
      "SItL");
      /* harmony import */


      var _main_tabs_filter_tab_filter_tab_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./main/tabs/filter-tab/filter-tab.component */
      "TyqG");
      /* harmony import */


      var _main_tabs_filter_tab_filter_tab_row_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./main/tabs/filter-tab/filter-tab-row.component */
      "AmnA");
      /* harmony import */


      var _main_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./main/right-sidebar/right-sidebar.component */
      "iC4P");
      /* harmony import */


      var _main_right_sidebar_field_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./main/right-sidebar/field.component */
      "skpU");
      /* harmony import */


      var ng4_click_outside__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ng4-click-outside */
      "hLGM");
      /* harmony import */


      var ng4_click_outside__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside__WEBPACK_IMPORTED_MODULE_53__);
      /* harmony import */


      var _generic_guard__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./generic.guard */
      "PcZK");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./error/error.component */
      "CG0s");
      /* harmony import */


      var _api_interceptor__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./api.interceptor */
      "0O/j");
      /* harmony import */


      var _main_tabs_filter_tab_filter_input_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./main/tabs/filter-tab/filter-input.component */
      "YQGq");

      var appRoutes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_32__["HomeComponent"],
        data: {
          title: 'Reports'
        }
      }, {
        path: 'report/add',
        component: _new_report_new_report_component__WEBPACK_IMPORTED_MODULE_31__["NewReportComponent"],
        data: {
          title: 'Add New Report'
        }
      }, {
        path: 'report/:id',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"],
        data: {
          title: 'Report'
        },
        canDeactivate: [_generic_guard__WEBPACK_IMPORTED_MODULE_54__["PendingChangesGuard"]]
      }];
      var MatModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__["MatMomentDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"]];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_api_service__WEBPACK_IMPORTED_MODULE_34__["ApiService"], {
          provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["RouterStateSerializer"],
          useClass: _reducers__WEBPACK_IMPORTED_MODULE_35__["CustomSerializer"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_56__["NetworkErrorInterceptor"],
          multi: true
        }, _generic_guard__WEBPACK_IMPORTED_MODULE_54__["PendingChangesGuard"]],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng4_click_outside__WEBPACK_IMPORTED_MODULE_53__["ClickOutsideModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_35__["reducers"], {
          metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_35__["metaReducers"]
        }), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["StoreRouterConnectingModule"].forRoot({
          serializer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["DefaultRouterStateSerializer"],
          stateKey: 'router'
        }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_28__["StoreDevtoolsModule"].instrument({
          maxAge: 25
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__["EffectsModule"].forRoot([_effects_reports__WEBPACK_IMPORTED_MODULE_36__["ReportEffects"], _effects_config__WEBPACK_IMPORTED_MODULE_37__["ConfigEffects"], _effects_router__WEBPACK_IMPORTED_MODULE_38__["RouterEffects"]]), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"].withOptions({
          cookieName: 'csrftoken',
          headerName: 'X-CSRFToken'
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]].concat(MatModules)]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _new_report_new_report_component__WEBPACK_IMPORTED_MODULE_31__["NewReportComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_32__["HomeComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_39__["HeaderComponent"], _confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmModalComponent"], _main_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_41__["TabsComponent"], _main_tabs_options_tab_options_tab_component__WEBPACK_IMPORTED_MODULE_42__["OptionsTabComponent"], _main_tabs_report_tab_last_report_component__WEBPACK_IMPORTED_MODULE_46__["LastReportComponent"], _main_tabs_report_tab_report_tab_component__WEBPACK_IMPORTED_MODULE_43__["ReportTabComponent"], _main_tabs_report_tab_report_preview_component__WEBPACK_IMPORTED_MODULE_44__["ReportPreviewComponent"], _main_tabs_report_tab_saved_timestamp_component__WEBPACK_IMPORTED_MODULE_45__["SavedTimestampComponent"], _main_tabs_display_tab_display_tab_component__WEBPACK_IMPORTED_MODULE_47__["DisplayTabComponent"], _main_tabs_display_tab_display_tab_row_component__WEBPACK_IMPORTED_MODULE_48__["DisplayTabRowComponent"], _main_tabs_filter_tab_filter_tab_component__WEBPACK_IMPORTED_MODULE_49__["FilterTabComponent"], _main_tabs_filter_tab_filter_tab_row_component__WEBPACK_IMPORTED_MODULE_50__["FilterTabRowComponent"], _main_tabs_filter_tab_filter_input_component__WEBPACK_IMPORTED_MODULE_57__["FilterInputComponent"], _main_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_51__["RightSidebarComponent"], _main_right_sidebar_field_component__WEBPACK_IMPORTED_MODULE_52__["FieldComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_55__["ErrorComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng4_click_outside__WEBPACK_IMPORTED_MODULE_53__["ClickOutsideModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreRootModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_28__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__["EffectsRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__["MatMomentDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _new_report_new_report_component__WEBPACK_IMPORTED_MODULE_31__["NewReportComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_32__["HomeComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_39__["HeaderComponent"], _confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmModalComponent"], _main_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_41__["TabsComponent"], _main_tabs_options_tab_options_tab_component__WEBPACK_IMPORTED_MODULE_42__["OptionsTabComponent"], _main_tabs_report_tab_last_report_component__WEBPACK_IMPORTED_MODULE_46__["LastReportComponent"], _main_tabs_report_tab_report_tab_component__WEBPACK_IMPORTED_MODULE_43__["ReportTabComponent"], _main_tabs_report_tab_report_preview_component__WEBPACK_IMPORTED_MODULE_44__["ReportPreviewComponent"], _main_tabs_report_tab_saved_timestamp_component__WEBPACK_IMPORTED_MODULE_45__["SavedTimestampComponent"], _main_tabs_display_tab_display_tab_component__WEBPACK_IMPORTED_MODULE_47__["DisplayTabComponent"], _main_tabs_display_tab_display_tab_row_component__WEBPACK_IMPORTED_MODULE_48__["DisplayTabRowComponent"], _main_tabs_filter_tab_filter_tab_component__WEBPACK_IMPORTED_MODULE_49__["FilterTabComponent"], _main_tabs_filter_tab_filter_tab_row_component__WEBPACK_IMPORTED_MODULE_50__["FilterTabRowComponent"], _main_tabs_filter_tab_filter_input_component__WEBPACK_IMPORTED_MODULE_57__["FilterInputComponent"], _main_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_51__["RightSidebarComponent"], _main_right_sidebar_field_component__WEBPACK_IMPORTED_MODULE_52__["FieldComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_55__["ErrorComponent"]],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng4_click_outside__WEBPACK_IMPORTED_MODULE_53__["ClickOutsideModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_35__["reducers"], {
              metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_35__["metaReducers"]
            }), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["StoreRouterConnectingModule"].forRoot({
              serializer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["DefaultRouterStateSerializer"],
              stateKey: 'router'
            }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_28__["StoreDevtoolsModule"].instrument({
              maxAge: 25
            }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__["EffectsModule"].forRoot([_effects_reports__WEBPACK_IMPORTED_MODULE_36__["ReportEffects"], _effects_config__WEBPACK_IMPORTED_MODULE_37__["ConfigEffects"], _effects_router__WEBPACK_IMPORTED_MODULE_38__["RouterEffects"]]), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"].withOptions({
              cookieName: 'csrftoken',
              headerName: 'X-CSRFToken'
            }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]].concat(MatModules),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_34__["ApiService"], {
              provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_29__["RouterStateSerializer"],
              useClass: _reducers__WEBPACK_IMPORTED_MODULE_35__["CustomSerializer"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_56__["NetworkErrorInterceptor"],
              multi: true
            }, _generic_guard__WEBPACK_IMPORTED_MODULE_54__["PendingChangesGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]],
            entryComponents: [_confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmModalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "a6je":
    /*!******************************************!*\
      !*** ./src/app/actions/display-field.ts ***!
      \******************************************/

    /*! exports provided: DisplayFieldActionTypes, LoadAll, UpdateOne, UpdateMany, DeleteOne */

    /***/
    function a6je(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayFieldActionTypes", function () {
        return DisplayFieldActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadAll", function () {
        return LoadAll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateOne", function () {
        return UpdateOne;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateMany", function () {
        return UpdateMany;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteOne", function () {
        return DeleteOne;
      });

      var DisplayFieldActionTypes;

      (function (DisplayFieldActionTypes) {
        DisplayFieldActionTypes["LOAD_ALL"] = "[Display Fields] Load All";
        DisplayFieldActionTypes["UPDATE_ONE"] = "[Display Fields] Update One";
        DisplayFieldActionTypes["UPDATE_MANY"] = "[Display Fields] Update Many";
        DisplayFieldActionTypes["DELETE_ONE"] = "[Display Fields] Delete One";
      })(DisplayFieldActionTypes || (DisplayFieldActionTypes = {}));

      var LoadAll = function LoadAll(payload) {
        _classCallCheck(this, LoadAll);

        this.payload = payload;
        this.type = DisplayFieldActionTypes.LOAD_ALL;
      };

      var UpdateOne = function UpdateOne(payload) {
        _classCallCheck(this, UpdateOne);

        this.payload = payload;
        this.type = DisplayFieldActionTypes.UPDATE_ONE;
      };

      var UpdateMany = function UpdateMany(payload) {
        _classCallCheck(this, UpdateMany);

        this.payload = payload;
        this.type = DisplayFieldActionTypes.UPDATE_MANY;
      };

      var DeleteOne = function DeleteOne(payload) {
        _classCallCheck(this, DeleteOne);

        this.payload = payload;
        this.type = DisplayFieldActionTypes.DELETE_ONE;
      };
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
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
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "eMG3":
    /*!***************************************************************!*\
      !*** ./src/app/main/tabs/report-tab/last-report.component.ts ***!
      \***************************************************************/

    /*! exports provided: LastReportComponent */

    /***/
    function eMG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LastReportComponent", function () {
        return LastReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var LastReportComponent = function LastReportComponent() {
        _classCallCheck(this, LastReportComponent);
      };

      LastReportComponent.ɵfac = function LastReportComponent_Factory(t) {
        return new (t || LastReportComponent)();
      };

      LastReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LastReportComponent,
        selectors: [["app-last-report"]],
        inputs: {
          report: "report"
        },
        decls: 4,
        vars: 2,
        consts: [["mat-button", "", 3, "href", "matTooltip"]],
        template: function LastReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "file_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Download ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.report.report_file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "Download report generated at ", ctx.report.report_file_creation, "");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LastReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-last-report',
            template: "\n  <a mat-button href=\"{{ report.report_file }}\" matTooltip=\"Download report generated at {{ report.report_file_creation }}\">\n    <mat-icon>file_download</mat-icon>Download\n  </a>"
          }]
        }], function () {
          return [];
        }, {
          report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "eRXj":
    /*!************************************!*\
      !*** ./src/app/effects/reports.ts ***!
      \************************************/

    /*! exports provided: ReportEffects */

    /***/
    function eRXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportEffects", function () {
        return ReportEffects;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../actions/reports */
      "yctz");
      /* harmony import */


      var _actions_display_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../actions/display-field */
      "a6je");
      /* harmony import */


      var _actions_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../actions/filter */
      "u6LH");
      /* harmony import */


      var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../selectors */
      "SWq+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ReportActionTypes = _actions_reports__WEBPACK_IMPORTED_MODULE_7__.ReportActionTypes;

      var ReportEffects = function ReportEffects(actions$, store$, api, router, snackBar) {
        var _this10 = this;

        _classCallCheck(this, ReportEffects);

        this.actions$ = actions$;
        this.store$ = store$;
        this.api = api;
        this.router = router;
        this.snackBar = snackBar;
        this.getReports$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_REPORT_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function () {
          return _this10.api.getReports().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (reports) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["SetReportList"](reports);
          }));
        }));
        this.getReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (reportId) {
          return _this10.api.getReport(reportId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (report) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["GetReportSuccess"](report);
          }));
        }));
        this.loadDisplayFields$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_REPORT_SUCCESS, ReportActionTypes.EDIT_REPORT_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return new _actions_display_field__WEBPACK_IMPORTED_MODULE_8__["LoadAll"](action.payload.displayfield_set);
        }));
        this.loadFilterFields$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_REPORT_SUCCESS, ReportActionTypes.EDIT_REPORT_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return new _actions_filter__WEBPACK_IMPORTED_MODULE_9__["LoadAll"](action.payload.filterfield_set);
        }));
        this.getReportSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_REPORT_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (report) {
          var request = {
            model: report.root_model,
            path: '',
            field: ''
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(_this10.api.getRelatedFields(request), _this10.api.getFields(request)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                relatedFields = _ref8[0],
                fields = _ref8[1];

            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["GetReportFieldsSuccess"]({
              relatedFields: relatedFields,
              fields: fields
            });
          }));
        }));
        this.getFields$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_FIELDS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (relatedField) {
          var fieldReq = {
            model: relatedField.model_id,
            path: relatedField.path,
            field: relatedField.field_name
          };
          return _this10.api.getFields(fieldReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fields) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["GetFieldsSuccess"](fields);
          }));
        }));
        this.getRelatedFields$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GET_RELATED_FIELDS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (relatedField) {
          var fieldReq = {
            model: relatedField.model_id,
            path: relatedField.path,
            field: relatedField.field_name
          };
          return _this10.api.getRelatedFields(fieldReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fields) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["GetRelatedFieldsSuccess"]({
              parentId: relatedField.id,
              relatedFields: fields
            });
          }));
        }));
        this.deleteReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.DELETE_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (reportId) {
          return _this10.api.deleteReport(reportId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["DeleteReportSuccess"](reportId);
          }));
        }));
        this.deleteReportSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.DELETE_REPORT_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
          return _this10.router.navigate(['']);
        }));
        this.editReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.EDIT_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              _ = _ref10[0],
              storeState = _ref10[1];

          var editedReport = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getEditedReport"])(storeState);
          return _this10.api.editReport(editedReport).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["EditReportSuccess"](response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["EditReportFailure"](error));
          }));
        }));
        this.generatePreview$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.GENERATE_PREVIEW), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
              _ = _ref12[0],
              storeState = _ref12[1];

          var reportId = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getSelectedReportId"])(storeState);
          return _this10.api.generatePreview(reportId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["GeneratePreviewSuccess"](response);
          }));
        }));
        this.exportReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.EXPORT_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              action = _ref14[0],
              storeState = _ref14[1];

          var reportId = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getSelectedReportId"])(storeState);
          var async = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getIsAsyncReport"])(storeState);
          var type = action.payload;

          if (!async) {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
              observer.next(new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["DownloadExportedReport"]("api/report/".concat(reportId, "/download_file/").concat(type, "/")));
              observer.complete();
            });
          }

          return _this10.api.exportReport({
            reportId: reportId,
            type: type
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref15) {
            var task_id = _ref15.task_id;
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["CheckExportStatus"]({
              reportId: reportId,
              taskId: task_id
            });
          }));
        }));
        this.downloadExportedReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.DOWNLOAD_EXPORTED_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
          return window.location.href = action.payload;
        }));
        this.cancelExportReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.CANCEL_EXPORT_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          return _this10.snackBar.open('Sorry, something went wrong!', '', {
            duration: 5000
          });
        }));
        this.createReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.CREATE_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (newReport) {
          return _this10.api.submitNewReport(newReport).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (createdReport) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["CreateReportSuccess"](createdReport);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["CreateReportError"](error));
          }));
        }));
        this.createReportSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.CREATE_REPORT_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload.id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (reportId) {
          return _this10.router.navigate(["/report/".concat(reportId, "/")]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
          return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["ChangeTab"](0);
        }));
        this.createReportError$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.CREATE_REPORT_ERROR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (error) {
          return _this10.snackBar.open('Invalid report: please reload the page', '', {
            duration: 5000
          });
        }));
        this.copyReport$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.COPY_REPORT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (reportId) {
          return _this10.api.copyReport(reportId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (createdReport) {
          return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["CreateReportSuccess"](createdReport);
        }));

        this.checkExportStatus$ = function () {
          var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref16$delayTime = _ref16.delayTime,
              delayTime = _ref16$delayTime === void 0 ? 500 : _ref16$delayTime,
              _ref16$scheduler = _ref16.scheduler,
              scheduler = _ref16$scheduler === void 0 ? rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"] : _ref16$scheduler;

          return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(ReportActionTypes.CHECK_EXPORT_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayTime, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_ref17) {
            var _ref17$payload = _ref17.payload,
                reportId = _ref17$payload.reportId,
                taskId = _ref17$payload.taskId;
            return _this10.api.checkStatus({
              reportId: reportId,
              taskId: taskId
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref18) {
              var state = _ref18.state,
                  link = _ref18.link;

              if (state === 'SUCCESS') {
                return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["DownloadExportedReport"](link);
              } else if (state === 'FAILURE') {
                return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["CancelExportReport"]();
              } else {
                return new _actions_reports__WEBPACK_IMPORTED_MODULE_7__["CheckExportStatus"]({
                  reportId: reportId,
                  taskId: taskId
                });
              }
            }));
          }));
        };
      };

      ReportEffects.ɵfac = function ReportEffects_Factory(t) {
        return new (t || ReportEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]));
      };

      ReportEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ReportEffects,
        factory: ReportEffects.ɵfac
      });

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])], ReportEffects.prototype, "getReports$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])], ReportEffects.prototype, "getReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "loadDisplayFields$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "loadFilterFields$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "getReportSuccess$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "getFields$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "getRelatedFields$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "deleteReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], ReportEffects.prototype, "deleteReportSuccess$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "editReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "generatePreview$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "exportReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], ReportEffects.prototype, "downloadExportedReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], ReportEffects.prototype, "cancelExportReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "createReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "createReportSuccess$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], ReportEffects.prototype, "createReportError$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "copyReport$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), __metadata("design:type", Object)], ReportEffects.prototype, "checkExportStatus$", void 0);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ReportEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
          }];
        }, {
          getReports$: [],
          getReport$: [],
          loadDisplayFields$: [],
          loadFilterFields$: [],
          getReportSuccess$: [],
          getFields$: [],
          getRelatedFields$: [],
          deleteReport$: [],
          deleteReportSuccess$: [],
          editReport$: [],
          generatePreview$: [],
          exportReport$: [],
          downloadExportedReport$: [],
          cancelExportReport$: [],
          createReport$: [],
          createReportSuccess$: [],
          createReportError$: [],
          copyReport$: [],
          checkExportStatus$: []
        });
      })();
      /***/

    },

    /***/
    "eTro":
    /*!*******************************************************************!*\
      !*** ./src/app/main/tabs/report-tab/saved-timestamp.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SavedTimestampComponent */

    /***/
    function eTro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedTimestampComponent", function () {
        return SavedTimestampComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SavedTimestampComponent = function SavedTimestampComponent() {
        _classCallCheck(this, SavedTimestampComponent);

        this.notSaved = 'Report has not been saved';
      };

      SavedTimestampComponent.ɵfac = function SavedTimestampComponent_Factory(t) {
        return new (t || SavedTimestampComponent)();
      };

      SavedTimestampComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SavedTimestampComponent,
        selectors: [["app-saved-timestamp"]],
        inputs: {
          lastSaved: "lastSaved"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "saved-timestamp"]],
        template: function SavedTimestampComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastSaved ? "Last saved: " + ctx.lastSaved : ctx.notSaved);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavedTimestampComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-saved-timestamp',
            template: "<span class=\"saved-timestamp\">{{this.lastSaved ? 'Last saved: ' + this.lastSaved : this.notSaved}}</span>"
          }]
        }], function () {
          return [];
        }, {
          lastSaved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function HeaderComponent_mat_form_field_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HeaderComponent_mat_form_field_7_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.changeTitleInput.emit($event.currentTarget.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.reportName);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.onToggleRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.changeTitleInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.goHome = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HeaderComponent, [{
          key: "clickGoHome",
          value: function clickGoHome(event) {
            event.preventDefault();
            this.goHome.emit();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        inputs: {
          title: "title",
          reportName: "reportName",
          showRightNavButton: "showRightNavButton"
        },
        outputs: {
          onToggleRightNav: "onToggleRightNav",
          changeTitleInput: "changeTitleInput",
          goHome: "goHome"
        },
        decls: 13,
        vars: 3,
        consts: [[1, "left-navbar-container"], ["mat-icon-button", "", "href", "/", 3, "click"], [4, "ngIf"], [1, "right-navbar-container"], [3, "hidden"], ["id", "toggleRight", "type", "button", 1, "button", 3, "click"], ["matInput", "", "id", "title-input", 3, "value", "keyup"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener($event) {
              return ctx.clickGoHome($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_mat_form_field_7_Template, 2, 1, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() {
              return ctx.onToggleRightNav.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showRightNavButton);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"]],
        styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  color: white;\n  background: #417690;\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  box-sizing: border-box;\n  font-weight: 300;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  background-color: transparent;\n}\n\n.material-icons.mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: white;\n  background: #417690;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%], .mat-icon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.left-navbar-container[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: inline;\n  vertical-align: middle;\n}\n\n.right-navbar-container[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 8px;\n  display: block;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n#title-input[_ngcontent-%COMP%] {\n  border-bottom-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBUUE7RUFMRSxlQU0wQjtFQUwxQixZQUswQjtFQUoxQixXQUkwQjtBQUg1Qjs7QUFNQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtBQUhqQjs7QUFNQTs7RUFFRSxhQUFhO0FBSGY7O0FBTUE7RUFDRSxlQUFlO0FBSGpCOztBQU1BO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUh4Qjs7QUFNQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBSGpCOztBQU1BO0VBQ0UsMEJBQ0Y7QUFKQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjNDE3NjkwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMDVlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5AbWl4aW4gbWQtaWNvbi1zaXplKCRzaXplOiAyNHB4KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBoZWlnaHQ6ICRzaXplO1xyXG4gIHdpZHRoOiAkc2l6ZTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zLm1hdC1pY29uIHtcclxuICBAaW5jbHVkZSBtZC1pY29uLXNpemUoMzJweCk7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM0MTc2OTA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLFxyXG4ubWF0LWljb246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5sZWZ0LW5hdmJhci1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5yaWdodC1uYXZiYXItY29udGFpbmVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuI3RpdGxlLWlucHV0IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], null, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          reportName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showRightNavButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onToggleRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          changeTitleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          goHome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fST4":
    /*!***********************************!*\
      !*** ./src/app/actions/router.ts ***!
      \***********************************/

    /*! exports provided: RouterActionTypes, Go, Back, Forward */

    /***/
    function fST4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterActionTypes", function () {
        return RouterActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Go", function () {
        return Go;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Back", function () {
        return Back;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Forward", function () {
        return Forward;
      });

      var RouterActionTypes;

      (function (RouterActionTypes) {
        RouterActionTypes["GO"] = "[Router] Go";
        RouterActionTypes["BACK"] = "[Router] Back";
        RouterActionTypes["FORWARD"] = "[Router] Forward";
      })(RouterActionTypes || (RouterActionTypes = {}));

      var Go = function Go(payload) {
        _classCallCheck(this, Go);

        this.payload = payload;
        this.type = RouterActionTypes.GO;
      };

      var Back = function Back() {
        _classCallCheck(this, Back);

        this.type = RouterActionTypes.BACK;
      };

      var Forward = function Forward() {
        _classCallCheck(this, Forward);

        this.type = RouterActionTypes.FORWARD;
      };
      /***/

    },

    /***/
    "iC4P":
    /*!***************************************************************!*\
      !*** ./src/app/main/right-sidebar/right-sidebar.component.ts ***!
      \***************************************************************/

    /*! exports provided: RightSidebarComponent */

    /***/
    function iC4P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function () {
        return RightSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @circlon/angular-tree-component */
      "mW75");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var _c0 = ["searchFields"];

      function RightSidebarComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightSidebarComponent_mat_icon_3_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RightSidebarComponent_mat_header_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Field Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RightSidebarComponent_mat_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightSidebarComponent_mat_cell_21_Template_mat_cell_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var field_r14 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selectField.emit(field_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", field_r14.name, " ");
        }
      }

      function RightSidebarComponent_mat_header_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 20);
        }
      }

      function RightSidebarComponent_mat_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightSidebarComponent_mat_cell_24_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var field_r17 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.addReportField.emit(field_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RightSidebarComponent_mat_header_row_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function RightSidebarComponent_mat_row_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      function RightSidebarComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" [", ctx_r11.selectedField.field_type, "] ", ctx_r11.selectedField.help_text, "\n");
        }
      }

      var RightSidebarComponent = /*#__PURE__*/function () {
        function RightSidebarComponent() {
          _classCallCheck(this, RightSidebarComponent);

          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectRelatedField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.expandRelatedField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.searchFields = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.searchRelations = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.addReportField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.displayedColumnsField = ['name', 'button'];
        }

        _createClass(RightSidebarComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.nodes = this.getRelatedFields();
          }
        }, {
          key: "onExpand",
          value: function onExpand(_ref19) {
            var node = _ref19.node,
                isExpanded = _ref19.isExpanded;

            if (isExpanded) {
              this.expandRelatedField.emit(node.data);
            }
          }
        }, {
          key: "onActivate",
          value: function onActivate(_ref20) {
            var node = _ref20.node;
            this.selectRelatedField.emit(node.data);
            this.searchInput.nativeElement.value = '';
          }
        }, {
          key: "filterTree",
          value: function filterTree(text, tree) {
            tree.treeModel.filterNodes(function (node) {
              return node.data.verbose_name.startsWith(text);
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            filterValue = filterValue.trim();
            filterValue = filterValue.toLowerCase();
            this.fieldDataSource.filter = filterValue;
          }
        }, {
          key: "getRelatedFields",
          value: function getRelatedFields() {
            return this.relatedFields.map(deepCopy);
          }
        }, {
          key: "fields",
          set: function set(value) {
            this.fieldDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](value);
          }
        }]);

        return RightSidebarComponent;
      }();

      RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || RightSidebarComponent)();
      };

      RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        viewQuery: function RightSidebarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        inputs: {
          modelName: "modelName",
          selectedField: "selectedField",
          lockOpen: "lockOpen",
          relatedFields: "relatedFields",
          fields: "fields"
        },
        outputs: {
          close: "close",
          selectRelatedField: "selectRelatedField",
          expandRelatedField: "expandRelatedField",
          searchFields: "searchFields",
          searchRelations: "searchRelations",
          addReportField: "addReportField",
          selectField: "selectField"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 29,
        vars: 7,
        consts: [[1, "header"], ["class", "close-icon", 3, "click", 4, "ngIf"], [1, "example-header"], ["id", "filter", "matInput", "", "placeholder", "Search Related Fields", 3, "keyup"], ["filter", ""], [3, "nodes", "toggleExpanded", "activate"], ["tree", ""], ["matInput", "", "placeholder", "Search Fields", 3, "keyup"], ["searchFields", ""], ["matSort", "", "matSortDisableClear", "true", 3, "dataSource"], ["table", ""], ["matColumnDef", "name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "button"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["class", "selected-field", 4, "ngIf"], [1, "close-icon", 3, "click"], ["mat-sort-header", ""], [3, "click"], [1, "add-button", 3, "click"], [1, "add-button-content"], [1, "add-icon"], [1, "content"], [1, "selected-field"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RightSidebarComponent_mat_icon_3_Template, 2, 0, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RightSidebarComponent_Template_input_keyup_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return _r2.treeModel.filterNodes(_r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tree-root", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleExpanded", function RightSidebarComponent_Template_tree_root_toggleExpanded_8_listener($event) {
              return ctx.onExpand($event);
            })("activate", function RightSidebarComponent_Template_tree_root_activate_8_listener($event) {
              return ctx.onActivate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fields");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RightSidebarComponent_Template_input_keyup_15_listener($event) {
              return ctx.applyFilter($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-table", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RightSidebarComponent_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RightSidebarComponent_mat_cell_21_Template, 2, 1, "mat-cell", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RightSidebarComponent_mat_header_cell_23_Template, 1, 0, "mat-header-cell", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RightSidebarComponent_mat_cell_24_Template, 7, 0, "mat-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xE5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RightSidebarComponent_mat_header_row_26_Template, 1, 0, "mat-header-row", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RightSidebarComponent_mat_row_27_Template, 1, 0, "mat-row", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RightSidebarComponent_div_28_Template, 2, 2, "div", 18);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.modelName, " relations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lockOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", ctx.nodes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.fieldDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsField);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsField);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedField);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_5__["TreeComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["tree-root[_ngcontent-%COMP%]     {\n  height: 38%;\n}\n\ntree-root[_ngcontent-%COMP%]     tree-viewport {\n  height: 38%;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  background-color: #417690;\n  color: white;\n  margin-top: -21px;\n  padding-left: 10px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  box-sizing: border-box;\n  font-weight: 300;\n  padding-left: 10px;\n  padding-top: 20px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  padding-top: 5px;\n  padding-right: 25px;\n}\n\n.fields[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  float: right;\n  background: white;\n  border: none;\n  cursor: pointer;\n}\n\n.add-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #79aec8;\n  font-weight: bold;\n}\n\n.selected-field[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  float: left;\n  color: #79aec8;\n  padding-right: 5px;\n}\n\n.example-no-results[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  font-size: 12px;\n  font-style: italic;\n}\n\n.material-icons.mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n@media screen and (max-width: 620px) {\n  .header[_ngcontent-%COMP%] {\n    height: 63px;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .mat-sidenav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRkE7RUFHSSxXQUFXO0FBR2Y7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUVwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBRW5COztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsYUFBYTtBQUVmOztBQUNBOztFQUVFLGdCQUFnQjtBQUVsQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBRWxCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUVyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBRWI7O0FBQ0E7RUFDRSxlQUFlO0FBRWpCOztBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUduQjs7QUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFHakI7O0FBQUE7RUFDRSxhQUFhO0FBR2Y7O0FBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUduQjs7QUFBQTtFQUNFLGFBQWE7QUFHZjs7QUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBR3BCOztBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUdwQjs7QUFNQTtFQUxFLGVBTTBCO0VBTDFCLFlBSzBCO0VBSjFCLFdBSTBCO0FBRDVCOztBQUlBO0VBQ0U7SUFDRSxZQUFZO0VBRGQ7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsV0FBVztFQURiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRyZWUtcm9vdCAvZGVlcC8ge1xyXG4gIGhlaWdodDogMzglO1xyXG4gIHRyZWUtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiAzOCU7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNzY5MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTIxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAwNWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmZpZWxkcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItcm93LFxyXG4ubWF0LXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzc5YWVjODtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWZpZWxkIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWljb24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjNzlhZWM4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbm8tcmVzdWx0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtaXhpbiBtZC1pY29uLXNpemUoJHNpemU6IDI0cHgpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGhlaWdodDogJHNpemU7XHJcbiAgd2lkdGg6ICRzaXplO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMubWF0LWljb24ge1xyXG4gIEBpbmNsdWRlIG1kLWljb24tc2l6ZSgxOHB4KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogNjNweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.scss']
          }]
        }], function () {
          return [];
        }, {
          modelName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectedField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lockOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectRelatedField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expandRelatedField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          searchFields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          searchRelations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          addReportField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          relatedFields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchFields', {
              "static": true
            }]
          }]
        });
      })();

      function deepCopy(obj) {
        var copy = Object.assign({}, obj);
        copy.name = copy.verbose_name;
        copy.children = copy.children.map(deepCopy);
        copy.hasChildren = true;
        return copy;
      }
      /***/

    },

    /***/
    "jhkq":
    /*!**************************************!*\
      !*** ./src/app/selectors/reports.ts ***!
      \**************************************/

    /*! exports provided: getReports, getTitle, getSelectedReport, getSelectedReportId, getSelectedReportName, getFields, getRelatedFields, getDescriptionInput, getTitleInput, getIsDistinct, getPreview, getLastSaved, getNewReportInfo, getLastGeneratedReport, getRightNavIsOpen, getDisplayFieldsState, getDisplayFields, getDisplayFieldsCount, getFiltersState, getFilters, getFiltersCount, getActiveTab, getEditedReport, getSelectedField, isGeneratingReport, hasEditedSinceLastSave, getErrors */

    /***/
    function jhkq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getReports", function () {
        return getReports;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTitle", function () {
        return getTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedReport", function () {
        return getSelectedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedReportId", function () {
        return getSelectedReportId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedReportName", function () {
        return getSelectedReportName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFields", function () {
        return getFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRelatedFields", function () {
        return getRelatedFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDescriptionInput", function () {
        return getDescriptionInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTitleInput", function () {
        return getTitleInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIsDistinct", function () {
        return getIsDistinct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPreview", function () {
        return getPreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLastSaved", function () {
        return getLastSaved;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNewReportInfo", function () {
        return getNewReportInfo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLastGeneratedReport", function () {
        return getLastGeneratedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRightNavIsOpen", function () {
        return getRightNavIsOpen;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDisplayFieldsState", function () {
        return getDisplayFieldsState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDisplayFields", function () {
        return getDisplayFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDisplayFieldsCount", function () {
        return getDisplayFieldsCount;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFiltersState", function () {
        return getFiltersState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFilters", function () {
        return getFilters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFiltersCount", function () {
        return getFiltersCount;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getActiveTab", function () {
        return getActiveTab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEditedReport", function () {
        return getEditedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectedField", function () {
        return getSelectedField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGeneratingReport", function () {
        return isGeneratingReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasEditedSinceLastSave", function () {
        return hasEditedSinceLastSave;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getErrors", function () {
        return getErrors;
      });
      /* harmony import */


      var _models_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/reports */
      "JG9l");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");

      var getReports = function getReports(state) {
        return state.reports;
      };

      var getTitle = function getTitle(state) {
        return state.title;
      };

      var getSelectedReport = function getSelectedReport(state) {
        return state.selectedReport;
      };

      var getSelectedReportId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getSelectedReport, function (report) {
        return report && report.id;
      });
      var getSelectedReportName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getSelectedReport, function (report) {
        return report && report.name;
      });

      var getFields = function getFields(state) {
        return state.fields;
      };

      var getRelatedFields = function getRelatedFields(state) {
        return state.relatedFields;
      };

      var getDescriptionInput = function getDescriptionInput(state) {
        return state.descriptionInput;
      };

      var getTitleInput = function getTitleInput(state) {
        return state.titleInput;
      };

      var getIsDistinct = function getIsDistinct(state) {
        return state.isDistinct;
      };

      var getPreview = function getPreview(state) {
        return state.reportPreview;
      };

      var getLastSaved = function getLastSaved(state) {
        return state.reportSaved;
      };

      var getNewReportInfo = function getNewReportInfo(state) {
        var report = getSelectedReport(state);

        if (report) {
          var name = report.name,
              description = report.description,
              root_model = report.root_model;
          return {
            name: name,
            description: description,
            root_model: root_model
          };
        }
      };

      var getLastGeneratedReport = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getSelectedReport, function (selectedReport) {
        if (selectedReport && selectedReport.report_file) {
          var report_file = selectedReport.report_file,
              report_file_creation = selectedReport.report_file_creation;
          return {
            report_file: report_file,
            report_file_creation: report_file_creation
          };
        }
      });

      var getRightNavIsOpen = function getRightNavIsOpen(state) {
        return state.rightNavIsOpen;
      };

      var getDisplayFieldsState = function getDisplayFieldsState(state) {
        return state.displayFields;
      };

      var _models_reports__WEBP = _models_reports__WEBPACK_IMPORTED_MODULE_0__["displayFieldAdapter"].getSelectors(),
          selectAllDisplayFields = _models_reports__WEBP.selectAll,
          selectDisplayFieldsCount = _models_reports__WEBP.selectTotal;

      var getDisplayFields = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getDisplayFieldsState, selectAllDisplayFields);
      var getDisplayFieldsCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getDisplayFieldsState, selectDisplayFieldsCount);

      var getFiltersState = function getFiltersState(state) {
        return state.filters;
      };

      var _models_reports__WEBP2 = _models_reports__WEBPACK_IMPORTED_MODULE_0__["filterAdapter"].getSelectors(),
          selectAllFilters = _models_reports__WEBP2.selectAll,
          selectFiltersCount = _models_reports__WEBP2.selectTotal;

      var getFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getFiltersState, selectAllFilters);
      var getFiltersCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getFiltersState, selectFiltersCount);

      var getActiveTab = function getActiveTab(state) {
        return state.activeTab;
      };

      var getEditedReport = function getEditedReport(state) {
        return Object.assign(Object.assign({}, state.selectedReport), {
          description: getDescriptionInput(state),
          distinct: getIsDistinct(state),
          displayfield_set: getDisplayFields(state),
          filterfield_set: getFilters(state),
          name: getTitleInput(state)
        });
      };

      var getSelectedField = function getSelectedField(state) {
        return state.selectedField;
      };

      var isGeneratingReport = function isGeneratingReport(state) {
        return state.generatingReport;
      };

      var hasEditedSinceLastSave = function hasEditedSinceLastSave(state) {
        return state.editedSinceLastSave;
      };

      var getErrors = function getErrors(state) {
        return state.errors;
      };
      /***/

    },

    /***/
    "jrw+":
    /*!****************************************************************!*\
      !*** ./src/app/main/tabs/options-tab/options-tab.component.ts ***!
      \****************************************************************/

    /*! exports provided: OptionsTabComponent */

    /***/
    function jrw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsTabComponent", function () {
        return OptionsTabComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../selectors */
      "SWq+");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../actions/reports */
      "yctz");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../confirm/confirm-modal.component */
      "YHnS");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OptionsTabComponent_mat_list_item_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsTabComponent_mat_list_item_20_Template_mat_list_item_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.copyReport($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copy this report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/report_builder/report/", ctx_r0.report.id, "/create_copy/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var OptionsTabComponent = /*#__PURE__*/function () {
        function OptionsTabComponent(store, dialog) {
          _classCallCheck(this, OptionsTabComponent);

          this.store = store;
          this.dialog = dialog;
          this.descriptionInput$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getDescriptionInput"]);
          this.isChecked$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsDistinct"]);
        }

        _createClass(OptionsTabComponent, [{
          key: "onChange",
          value: function onChange(value) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["ChangeReportDescription"](value));
          }
        }, {
          key: "onClick",
          value: function onClick(value) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["ToggleReportDistinct"](value));
          }
        }, {
          key: "onDelete",
          value: function onDelete(e) {
            var _this11 = this;

            e.preventDefault();
            var dialogRef = this.dialog.open(_confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], {
              data: {
                title: "Are you sure you want to delete ".concat(this.report.name),
                subtitle: 'You will not be able to undo this action.',
                confirmText: 'Delete'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this11.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["DeleteReport"](_this11.report.id));
              }
            });
          }
        }, {
          key: "copyReport",
          value: function copyReport(e) {
            e.preventDefault();
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["CopyReport"](this.report.id));
          }
        }]);

        return OptionsTabComponent;
      }();

      OptionsTabComponent.ɵfac = function OptionsTabComponent_Factory(t) {
        return new (t || OptionsTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
      };

      OptionsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OptionsTabComponent,
        selectors: [["app-options-tab"]],
        inputs: {
          report: "report"
        },
        decls: 21,
        vars: 7,
        consts: [[1, "options-tab"], [1, "options-content"], ["matInput", "", "placeholder", "Description", "matTextareaAutosize", "", 3, "value", "keyup"], ["matListIcon", "", 3, "checked", "change"], ["matLine", ""], ["href", "https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.query.QuerySet.distinct", "target", "_blank"], ["matListIcon", "", 3, "click"], ["matLine", "", "href", "#", "alt", "Delete this report", 3, "click"], [3, "click", 4, "ngIf"], [3, "click"], ["matListIcon", ""], ["matLine", "", 3, "href"]],
        template: function OptionsTabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function OptionsTabComponent_Template_textarea_keyup_5_listener($event) {
              return ctx.onChange($event.currentTarget.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-checkbox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OptionsTabComponent_Template_mat_checkbox_change_8_listener($event) {
              return ctx.onClick($event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Is Distinct (maybe help reduce duplicate rows). Read ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsTabComponent_Template_mat_icon_click_16_listener($event) {
              return ctx.onDelete($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsTabComponent_Template_a_click_18_listener($event) {
              return ctx.onDelete($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete this report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OptionsTabComponent_mat_list_item_20_Template, 5, 1, "mat-list-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.descriptionInput$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.isChecked$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatTextareaAutosize"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsTabComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-options-tab',
            templateUrl: './options-tab.component.html'
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }];
        }, {
          report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "skpU":
    /*!*******************************************************!*\
      !*** ./src/app/main/right-sidebar/field.component.ts ***!
      \*******************************************************/

    /*! exports provided: FieldComponent */

    /***/
    function skpU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldComponent", function () {
        return FieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var FieldComponent = function FieldComponent() {
        _classCallCheck(this, FieldComponent);

        this.addReportField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      FieldComponent.ɵfac = function FieldComponent_Factory(t) {
        return new (t || FieldComponent)();
      };

      FieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FieldComponent,
        selectors: [["app-field-component"]],
        inputs: {
          field: "field"
        },
        outputs: {
          addReportField: "addReportField",
          selectField: "selectField"
        },
        decls: 5,
        vars: 1,
        consts: [[3, "click"]],
        template: function FieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldComponent_Template_span_click_1_listener() {
              return ctx.selectField.emit(ctx.field);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldComponent_Template_mat_icon_click_3_listener() {
              return ctx.addReportField.emit(ctx.field);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.name);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-field-component',
            template: "<div>\n    <span (click)=\"selectField.emit(field)\">{{field.name}}</span><mat-icon (click)=\"addReportField.emit(field)\">add</mat-icon>\n  </div>"
          }]
        }], function () {
          return [];
        }, {
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addReportField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "u6LH":
    /*!***********************************!*\
      !*** ./src/app/actions/filter.ts ***!
      \***********************************/

    /*! exports provided: FilterActionTypes, LoadAll, UpdateOne, UpdateMany, DeleteOne */

    /***/
    function u6LH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterActionTypes", function () {
        return FilterActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadAll", function () {
        return LoadAll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateOne", function () {
        return UpdateOne;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateMany", function () {
        return UpdateMany;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteOne", function () {
        return DeleteOne;
      });

      var FilterActionTypes;

      (function (FilterActionTypes) {
        FilterActionTypes["LOAD_ALL"] = "[Filters] Load All";
        FilterActionTypes["UPDATE_ONE"] = "[Filters] Update One";
        FilterActionTypes["UPDATE_MANY"] = "[Filters] Update Many";
        FilterActionTypes["DELETE_ONE"] = "[Filters] Delete One";
      })(FilterActionTypes || (FilterActionTypes = {}));

      var LoadAll = function LoadAll(payload) {
        _classCallCheck(this, LoadAll);

        this.payload = payload;
        this.type = FilterActionTypes.LOAD_ALL;
      };

      var UpdateOne = function UpdateOne(payload) {
        _classCallCheck(this, UpdateOne);

        this.payload = payload;
        this.type = FilterActionTypes.UPDATE_ONE;
      };

      var UpdateMany = function UpdateMany(payload) {
        _classCallCheck(this, UpdateMany);

        this.payload = payload;
        this.type = FilterActionTypes.UPDATE_MANY;
      };

      var DeleteOne = function DeleteOne(payload) {
        _classCallCheck(this, DeleteOne);

        this.payload = payload;
        this.type = FilterActionTypes.DELETE_ONE;
      };
      /***/

    },

    /***/
    "uUab":
    /*!***********************************!*\
      !*** ./src/app/effects/router.ts ***!
      \***********************************/

    /*! exports provided: RouterEffects */

    /***/
    function uUab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterEffects", function () {
        return RouterEffects;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "snw9");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/router-store */
      "Ta0S");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../actions/reports */
      "yctz");
      /* harmony import */


      var _actions_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../actions/router */
      "fST4");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var RouterEffects = function RouterEffects(actions$, router, location) {
        var _this12 = this;

        _classCallCheck(this, RouterEffects);

        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_router__WEBPACK_IMPORTED_MODULE_7__["RouterActionTypes"].GO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_ref21) {
          var path = _ref21.path,
              queryParams = _ref21.query,
              extras = _ref21.extras;
          return _this12.router.navigate(path, Object.assign({
            queryParams: queryParams
          }, extras));
        }));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_router__WEBPACK_IMPORTED_MODULE_7__["RouterActionTypes"].BACK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
          return _this12.location.back();
        }));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_router__WEBPACK_IMPORTED_MODULE_7__["RouterActionTypes"].FORWARD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
          return _this12.location.forward();
        }));
        this.routeChange$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["ROUTER_NAVIGATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
          var route = action.payload.routerState;

          if (route.url === '/') {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_6__["GetReportList"]();
          }

          if (route.params.id) {
            return new _actions_reports__WEBPACK_IMPORTED_MODULE_6__["GetReport"](route.params.id);
          }

          return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(Boolean));
      };

      RouterEffects.ɵfac = function RouterEffects_Factory(t) {
        return new (t || RouterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      RouterEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RouterEffects,
        factory: RouterEffects.ɵfac
      });

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], RouterEffects.prototype, "navigate$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], RouterEffects.prototype, "navigateBack$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      }), __metadata("design:type", Object)], RouterEffects.prototype, "navigateForward$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", Object)], RouterEffects.prototype, "routeChange$", void 0);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
          }];
        }, {
          navigate$: [],
          navigateBack$: [],
          navigateForward$: [],
          routeChange$: []
        });
      })();
      /***/

    },

    /***/
    "wIJ9":
    /*!*********************************************!*\
      !*** ./src/app/main/tabs/tabs.component.ts ***!
      \*********************************************/

    /*! exports provided: TabsComponent */

    /***/
    function wIJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
        return TabsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../actions/reports */
      "yctz");
      /* harmony import */


      var _actions_display_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../actions/display-field */
      "a6je");
      /* harmony import */


      var _actions_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../actions/filter */
      "u6LH");
      /* harmony import */


      var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../selectors */
      "SWq+");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _report_tab_report_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./report-tab/report-tab.component */
      "IO7V");
      /* harmony import */


      var _options_tab_options_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./options-tab/options-tab.component */
      "jrw+");
      /* harmony import */


      var _display_tab_display_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./display-tab/display-tab.component */
      "GfJD");
      /* harmony import */


      var _filter_tab_filter_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./filter-tab/filter-tab.component */
      "TyqG");

      var _c0 = ["tabs"];

      function TabsComponent_app_display_tab_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-display-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateField", function TabsComponent_app_display_tab_3_Template_app_display_tab_updateField_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.updateDisplayField($event);
          })("deleteField", function TabsComponent_app_display_tab_3_Template_app_display_tab_deleteField_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.deleteDisplayField($event);
          })("saveReport", function TabsComponent_app_display_tab_3_Template_app_display_tab_saveReport_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.saveReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r1.displayFields$))("formatOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r1.formatOptions$))("hasChanged", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r1.hasChanged$))("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r1.errors$));
        }
      }

      function TabsComponent_app_filter_tab_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateFilter", function TabsComponent_app_filter_tab_6_Template_app_filter_tab_updateFilter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.updateFilter($event);
          })("deleteFilter", function TabsComponent_app_filter_tab_6_Template_app_filter_tab_deleteFilter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.deleteFilter($event);
          })("saveReport", function TabsComponent_app_filter_tab_6_Template_app_filter_tab_saveReport_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.saveReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filters", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r2.filters$))("hasChanged", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r2.hasChanged$))("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r2.errors$));
        }
      }

      var TabsComponent = /*#__PURE__*/function () {
        function TabsComponent(store) {
          _classCallCheck(this, TabsComponent);

          this.store = store;
          this.displayFields$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getDisplayFields"]);
          this.filters$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getFilters"]);
          this.activeTab$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getActiveTab"]);
          this.formatOptions$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getFormatOptions"]);
          this.report$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedReport"]);
          this.hasChanged$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["hasEditedSinceLastSave"]);
          this.errors$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getErrors"]);
        }

        _createClass(TabsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.activeTab$.subscribe(function (number) {
              return _this13.tabs.selectedIndex = number;
            });
          }
        }, {
          key: "tabChange",
          value: function tabChange(index) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_2__["ChangeTab"](index));
          }
        }, {
          key: "updateDisplayField",
          value: function updateDisplayField(update) {
            this.store.dispatch(new _actions_display_field__WEBPACK_IMPORTED_MODULE_3__["UpdateOne"](update));
          }
        }, {
          key: "deleteDisplayField",
          value: function deleteDisplayField(id) {
            this.store.dispatch(new _actions_display_field__WEBPACK_IMPORTED_MODULE_3__["DeleteOne"](id));
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(update) {
            this.store.dispatch(new _actions_filter__WEBPACK_IMPORTED_MODULE_4__["UpdateOne"](update));
          }
        }, {
          key: "deleteFilter",
          value: function deleteFilter(id) {
            this.store.dispatch(new _actions_filter__WEBPACK_IMPORTED_MODULE_4__["DeleteOne"](id));
          }
        }, {
          key: "saveReport",
          value: function saveReport() {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_2__["EditReport"]());
          }
        }]);

        return TabsComponent;
      }();

      TabsComponent.ɵfac = function TabsComponent_Factory(t) {
        return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TabsComponent,
        selectors: [["app-tabs"]],
        viewQuery: function TabsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
          }
        },
        decls: 13,
        vars: 9,
        consts: [[1, "tab-group", 3, "selectedTabChange"], ["tabs", ""], ["label", "Display"], [3, "fields", "formatOptions", "hasChanged", "errors", "updateField", "deleteField", "saveReport", 4, "ngIf"], ["label", "Filter"], [3, "filters", "hasChanged", "errors", "updateFilter", "deleteFilter", "saveReport", 4, "ngIf"], ["label", "Report"], ["label", "Options"], [3, "report"], [3, "fields", "formatOptions", "hasChanged", "errors", "updateField", "deleteField", "saveReport"], [3, "filters", "hasChanged", "errors", "updateFilter", "deleteFilter", "saveReport"]],
        template: function TabsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function TabsComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) {
              return ctx.tabChange($event.index);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabsComponent_app_display_tab_3_Template, 5, 12, "app-display-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TabsComponent_app_filter_tab_6_Template, 4, 9, "app-filter-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-report-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-options-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.displayFields$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.filters$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.report$));
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _report_tab_report_tab_component__WEBPACK_IMPORTED_MODULE_8__["ReportTabComponent"], _options_tab_options_tab_component__WEBPACK_IMPORTED_MODULE_9__["OptionsTabComponent"], _display_tab_display_tab_component__WEBPACK_IMPORTED_MODULE_10__["DisplayTabComponent"], _filter_tab_filter_tab_component__WEBPACK_IMPORTED_MODULE_11__["FilterTabComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".mat-side-nav-content {\n  padding: 20px;\n}\n\n.mat-tab-label {\n  padding: 10px;\n  width: 100%;\n}\n\n.options-content {\n  padding-left: 20px;\n}\n\n.mat-header-row {\n  background: none;\n}\n\n.mat-list-item {\n  position: relative;\n  padding: 0px 16px;\n  flex: 1 1 auto;\n  display: flex;\n}\n\n.mat-icon {\n  cursor: pointer;\n}\n\n.options-tab {\n  padding-top: 50px;\n  white-space: normal !important;\n}\n\na,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  color: #79aec8;\n  padding-bottom: 10px;\n}\n\n.app-report-tab {\n  padding: 20px;\n}\n\n.tab-table-header {\n  min-width: 600px;\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUdqQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc2lkZS1uYXYtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vcHRpb25zLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItcm93IHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gIC13ZWJraXQtZmxleDogMSAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3B0aW9ucy10YWIge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyLFxyXG5hOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNzlhZWM4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYXBwLXJlcG9ydC10YWIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWItdGFibGUtaGVhZGVyIHtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }];
        }, {
          tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabs', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "wlho":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function wlho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../selectors */
      "SWq+");
      /* harmony import */


      var _actions_reports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../actions/reports */
      "yctz");
      /* harmony import */


      var _actions_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../actions/router */
      "fST4");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../confirm/confirm-modal.component */
      "YHnS");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "wIJ9");
      /* harmony import */


      var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./right-sidebar/right-sidebar.component */
      "iC4P");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(store, dialog, breakpointObserver) {
          var _this14 = this;

          _classCallCheck(this, MainComponent);

          this.store = store;
          this.dialog = dialog;
          this.title$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getTitle"]);
          this.activeTab$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getActiveTab"]);
          this.listReports$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getReports"]);
          this.fields$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getFields"]);
          this.relatedFields$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getRelatedFields"]);
          this.selectedReport$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedReport"]);
          this.selectedReportName$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedReportName"]);
          this.rightNavIsOpen$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getRightNavIsOpen"]);
          this.getFields$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getFields"]);
          this.selectedField$ = this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedField"]);
          this.edited = false;
          this.mode = 'over';
          this.lockOpen = false;
          store.select(_selectors__WEBPACK_IMPORTED_MODULE_2__["hasEditedSinceLastSave"]).subscribe(function (edited) {
            return _this14.edited = edited;
          });
          breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["Breakpoints"].TabletPortrait]).subscribe(function (result) {
            _this14.mode = result.matches ? 'over' : 'side';
          });
          breakpointObserver.observe(['(min-width: 2000px)']).subscribe(function (result) {
            _this14.lockOpen = result.matches;
          });
        }

        _createClass(MainComponent, [{
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.edited) {
              var dialogRef = this.dialog.open(_confirm_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], {
                data: {
                  title: 'Are you sure you want to navigate away from this report?',
                  subtitle: 'All of your changes will be lost.'
                }
              });
              return dialogRef.afterClosed();
            }

            return true;
          }
        }, {
          key: "beforeUnload",
          value: function beforeUnload() {
            if (this.edited) {
              return confirm();
            }
          }
        }, {
          key: "openNav",
          value: function openNav(bool) {
            if (!this.lockOpen) {
              if (bool === undefined) {
                this.sidenav.toggle();
              } else if (bool) {
                this.sidenav.open();
              } else {
                this.sidenav.close();
              }
            }
          }
        }, {
          key: "onClickReport",
          value: function onClickReport(reportId) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["GetReport"](reportId));
          }
        }, {
          key: "selectRelatedField",
          value: function selectRelatedField(relatedField) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["GetFields"](relatedField));
          }
        }, {
          key: "expandRelatedField",
          value: function expandRelatedField(relatedField) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["GetRelatedFields"](relatedField));
          }
        }, {
          key: "toggleRightNav",
          value: function toggleRightNav(open) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["ToggleRightNav"](open));
          }
        }, {
          key: "addReportField",
          value: function addReportField(field) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["AddReportField"](field));
          }
        }, {
          key: "selectField",
          value: function selectField(field) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["SelectField"](field));
          }
        }, {
          key: "editTitle",
          value: function editTitle(title) {
            this.store.dispatch(new _actions_reports__WEBPACK_IMPORTED_MODULE_3__["ChangeReportTitle"](title));
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.store.dispatch(new _actions_router__WEBPACK_IMPORTED_MODULE_4__["Go"]({
              path: ['/']
            }));
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        viewQuery: function MainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        hostBindings: function MainComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function MainComponent_beforeunload_HostBindingHandler() {
              return ctx.beforeUnload();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 15,
        vars: 25,
        consts: [[3, "title", "showRightNavButton", "reportName", "onToggleRightNav", "changeTitleInput", "goHome"], [1, "left-sidenav-container"], ["position", "end", 3, "mode", "opened", "disableClose", "openedChange"], ["sidenav", ""], [3, "modelName", "relatedFields", "fields", "selectedField", "lockOpen", "selectRelatedField", "close", "addReportField", "expandRelatedField", "selectField"], ["rightMenu", ""]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onToggleRightNav", function MainComponent_Template_app_header_onToggleRightNav_0_listener() {
              return ctx.openNav();
            })("changeTitleInput", function MainComponent_Template_app_header_changeTitleInput_0_listener($event) {
              return ctx.editTitle($event);
            })("goHome", function MainComponent_Template_app_header_goHome_0_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function MainComponent_Template_mat_sidenav_openedChange_7_listener($event) {
              return ctx.toggleRightNav($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-right-sidebar", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectRelatedField", function MainComponent_Template_app_right_sidebar_selectRelatedField_9_listener($event) {
              return ctx.selectRelatedField($event);
            })("close", function MainComponent_Template_app_right_sidebar_close_9_listener() {
              return ctx.openNav(false);
            })("addReportField", function MainComponent_Template_app_right_sidebar_addReportField_9_listener($event) {
              return ctx.addReportField($event);
            })("expandRelatedField", function MainComponent_Template_app_right_sidebar_expandRelatedField_9_listener($event) {
              return ctx.expandRelatedField($event);
            })("selectField", function MainComponent_Template_app_right_sidebar_selectField_9_listener($event) {
              return ctx.selectField($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 11, ctx.title$))("showRightNavButton", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 13, ctx.activeTab$) <= 1)("reportName", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, ctx.selectedReportName$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mode)("opened", ctx.lockOpen)("disableClose", ctx.lockOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modelName", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, ctx.selectedReportName$))("relatedFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, ctx.relatedFields$))("fields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 21, ctx.fields$))("selectedField", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, ctx.selectedField$))("lockOpen", ctx.lockOpen);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
        styles: [".mat-sidenav[_ngcontent-%COMP%] {\n  width: 320px;\n  min-width: 320px;\n  position: fixed;\n  height: 100%;\n  border-left: 1px solid #ededed;\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixpREFBaUQ7RUFDakQsMEhBQzJFO0FBQTdFIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgbWluLXdpZHRoOiAzMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VkZWRlZDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]
          }];
        }, {
          sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], {
              "static": true
            }]
          }],
          beforeUnload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload']
          }]
        });
      })();
      /***/

    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.apiUrl = 'api/';
        }

        _createClass(ApiService, [{
          key: "getConfig",
          value: function getConfig() {
            return this.http.get(this.apiUrl + 'config/');
          }
        }, {
          key: "getRootModels",
          value: function getRootModels() {
            return this.http.get(this.apiUrl + 'contenttypes/');
          }
        }, {
          key: "submitNewReport",
          value: function submitNewReport(form) {
            return this.http.post(this.apiUrl + 'report/', form);
          }
        }, {
          key: "getReports",
          value: function getReports() {
            return this.http.get(this.apiUrl + 'reports/');
          }
        }, {
          key: "getReport",
          value: function getReport(reportId) {
            return this.http.get(this.apiUrl + "report/".concat(reportId, "/"));
          }
        }, {
          key: "getRelatedFields",
          value: function getRelatedFields(request) {
            return this.http.post(this.apiUrl + 'related_fields/', request);
          }
        }, {
          key: "getFields",
          value: function getFields(request) {
            return this.http.post(this.apiUrl + 'fields/', request);
          }
        }, {
          key: "deleteReport",
          value: function deleteReport(reportId) {
            return this.http["delete"](this.apiUrl + "report/".concat(reportId, "/"));
          }
        }, {
          key: "editReport",
          value: function editReport(form) {
            return this.http.put(this.apiUrl + "report/".concat(form.id, "/"), form);
          }
        }, {
          key: "generatePreview",
          value: function generatePreview(reportId) {
            return this.http.get(this.apiUrl + "report/".concat(reportId, "/generate/"));
          }
        }, {
          key: "exportReport",
          value: function exportReport(_ref22) {
            var reportId = _ref22.reportId,
                type = _ref22.type;
            return this.http.get("api/report/".concat(reportId, "/download_file/").concat(type, "/"));
          }
        }, {
          key: "checkStatus",
          value: function checkStatus(_ref23) {
            var reportId = _ref23.reportId,
                taskId = _ref23.taskId;
            return this.http.get("api/report/".concat(reportId, "/check_status/").concat(taskId, "/"));
          }
        }, {
          key: "copyReport",
          value: function copyReport(reportId) {
            return this.http.post(this.apiUrl + "report/".concat(reportId, "/copy_report/"), null);
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yctz":
    /*!************************************!*\
      !*** ./src/app/actions/reports.ts ***!
      \************************************/

    /*! exports provided: ReportActionTypes, GetReportList, SetReportList, GetReport, GetTitle, GetReportSuccess, GetReportFieldsSuccess, GetFields, GetFieldsSuccess, GetRelatedFields, GetRelatedFieldsSuccess, ChangeReportDescription, ChangeReportTitle, ToggleReportDistinct, DeleteReport, DeleteReportSuccess, EditReport, EditReportSuccess, EditReportFailure, GeneratePreview, GeneratePreviewSuccess, CancelGeneratePreview, ExportReport, DownloadExportedReport, CheckExportStatus, CancelExportReport, CreateReport, CreateReportSuccess, CreateReportError, CopyReport, ToggleRightNav, SortReports, ChangeTab, AddReportField, SelectField */

    /***/
    function yctz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportActionTypes", function () {
        return ReportActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetReportList", function () {
        return GetReportList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetReportList", function () {
        return SetReportList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetReport", function () {
        return GetReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTitle", function () {
        return GetTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetReportSuccess", function () {
        return GetReportSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetReportFieldsSuccess", function () {
        return GetReportFieldsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFields", function () {
        return GetFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFieldsSuccess", function () {
        return GetFieldsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetRelatedFields", function () {
        return GetRelatedFields;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetRelatedFieldsSuccess", function () {
        return GetRelatedFieldsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeReportDescription", function () {
        return ChangeReportDescription;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeReportTitle", function () {
        return ChangeReportTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleReportDistinct", function () {
        return ToggleReportDistinct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteReport", function () {
        return DeleteReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteReportSuccess", function () {
        return DeleteReportSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditReport", function () {
        return EditReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditReportSuccess", function () {
        return EditReportSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditReportFailure", function () {
        return EditReportFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneratePreview", function () {
        return GeneratePreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneratePreviewSuccess", function () {
        return GeneratePreviewSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelGeneratePreview", function () {
        return CancelGeneratePreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportReport", function () {
        return ExportReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadExportedReport", function () {
        return DownloadExportedReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckExportStatus", function () {
        return CheckExportStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelExportReport", function () {
        return CancelExportReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateReport", function () {
        return CreateReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateReportSuccess", function () {
        return CreateReportSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateReportError", function () {
        return CreateReportError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CopyReport", function () {
        return CopyReport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleRightNav", function () {
        return ToggleRightNav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortReports", function () {
        return SortReports;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeTab", function () {
        return ChangeTab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddReportField", function () {
        return AddReportField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectField", function () {
        return SelectField;
      });

      var ReportActionTypes;

      (function (ReportActionTypes) {
        ReportActionTypes["GET_REPORT_LIST"] = "Get Report List";
        ReportActionTypes["SET_REPORT_LIST"] = "Set Report List";
        ReportActionTypes["GET_REPORT"] = "Get Report";
        ReportActionTypes["GET_TITLE"] = "Get Title";
        ReportActionTypes["GET_REPORT_SUCCESS"] = "Get Report Success";
        ReportActionTypes["GET_REPORT_FIELDS_SUCCESS"] = "Get Report Fields Success";
        ReportActionTypes["GET_FIELDS"] = "Get Fields";
        ReportActionTypes["GET_FIELDS_SUCCESS"] = "Get Fields Success";
        ReportActionTypes["GET_RELATED_FIELDS"] = "Get Related Fields";
        ReportActionTypes["GET_RELATED_FIELDS_SUCCESS"] = "Get Related Fields Success";
        ReportActionTypes["CHANGE_REPORT_DESCRIPTION"] = "Change Report Description";
        ReportActionTypes["CHANGE_REPORT_TITLE"] = "Change Report Title";
        ReportActionTypes["TOGGLE_REPORT_DISTINCT"] = "Toggle Report Distinct";
        ReportActionTypes["DELETE_REPORT"] = "Delete Report";
        ReportActionTypes["DELETE_REPORT_SUCCESS"] = "Delete Report Success";
        ReportActionTypes["EDIT_REPORT"] = "Edit Report";
        ReportActionTypes["EDIT_REPORT_SUCCESS"] = "Edit Report Success";
        ReportActionTypes["EDIT_REPORT_FAILURE"] = "Edit Report Failure";
        ReportActionTypes["GENERATE_PREVIEW"] = "Generate Preview";
        ReportActionTypes["GENERATE_PREVIEW_SUCCESS"] = "Generate Preview Success";
        ReportActionTypes["EXPORT_REPORT"] = "Export Report";
        ReportActionTypes["CREATE_REPORT"] = "Create Report";
        ReportActionTypes["CREATE_REPORT_SUCCESS"] = "Create Report Success";
        ReportActionTypes["CREATE_REPORT_ERROR"] = "Create Report Error";
        ReportActionTypes["CANCEL_GENERATE_PREVIEW"] = "Cancel Generate Preview";
        ReportActionTypes["COPY_REPORT"] = "Copy Report";
        ReportActionTypes["DOWNLOAD_EXPORTED_REPORT"] = "Download Exported Report";
        ReportActionTypes["CHECK_EXPORT_STATUS"] = "Check Export Status";
        ReportActionTypes["CANCEL_EXPORT_REPORT"] = "Cancel Export Report";
        ReportActionTypes["TOGGLE_LEFT_NAV"] = "Toggle Left Nav";
        ReportActionTypes["SORT_REPORTS"] = "Sort Reports";
        ReportActionTypes["TOGGLE_RIGHT_NAV"] = "Toggle Right Nav";
        ReportActionTypes["CHANGE_TAB"] = "Change Tab";
        ReportActionTypes["ADD_REPORT_FIELD"] = "Add Report Field";
        ReportActionTypes["SELECT_FIELD"] = "Select Field";
        ReportActionTypes["CHANGE_DISPLAY_FIELD_POSITION"] = "Change Display Field Position";
        ReportActionTypes["CHANGE_FILTER_POSITION"] = "Change Filter Position";
      })(ReportActionTypes || (ReportActionTypes = {}));
      /** Request an updated list of all reports from the api */


      var GetReportList = function GetReportList() {
        _classCallCheck(this, GetReportList);

        this.type = ReportActionTypes.GET_REPORT_LIST;
      };

      var SetReportList = function SetReportList(payload) {
        _classCallCheck(this, SetReportList);

        this.payload = payload;
        this.type = ReportActionTypes.SET_REPORT_LIST;
      };
      /** Get the report details for one report for active editing */


      var GetReport = function GetReport(payload) {
        _classCallCheck(this, GetReport);

        this.payload = payload;
        this.type = ReportActionTypes.GET_REPORT;
      };

      var GetTitle = function GetTitle(payload) {
        _classCallCheck(this, GetTitle);

        this.payload = payload;
        this.type = ReportActionTypes.GET_TITLE;
      };

      var GetReportSuccess = function GetReportSuccess(payload) {
        _classCallCheck(this, GetReportSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.GET_REPORT_SUCCESS;
      };

      var GetReportFieldsSuccess = function GetReportFieldsSuccess(payload) {
        _classCallCheck(this, GetReportFieldsSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.GET_REPORT_FIELDS_SUCCESS;
      };

      var GetFields = function GetFields(payload) {
        _classCallCheck(this, GetFields);

        this.payload = payload;
        this.type = ReportActionTypes.GET_FIELDS;
      };

      var GetFieldsSuccess = function GetFieldsSuccess(payload) {
        _classCallCheck(this, GetFieldsSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.GET_FIELDS_SUCCESS;
      };

      var GetRelatedFields = function GetRelatedFields(payload) {
        _classCallCheck(this, GetRelatedFields);

        this.payload = payload;
        this.type = ReportActionTypes.GET_RELATED_FIELDS;
      };

      var GetRelatedFieldsSuccess = function GetRelatedFieldsSuccess(payload) {
        _classCallCheck(this, GetRelatedFieldsSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.GET_RELATED_FIELDS_SUCCESS;
      };

      var ChangeReportDescription = function ChangeReportDescription(payload) {
        _classCallCheck(this, ChangeReportDescription);

        this.payload = payload;
        this.type = ReportActionTypes.CHANGE_REPORT_DESCRIPTION;
      };

      var ChangeReportTitle = function ChangeReportTitle(payload) {
        _classCallCheck(this, ChangeReportTitle);

        this.payload = payload;
        this.type = ReportActionTypes.CHANGE_REPORT_TITLE;
      };

      var ToggleReportDistinct = function ToggleReportDistinct(payload) {
        _classCallCheck(this, ToggleReportDistinct);

        this.payload = payload;
        this.type = ReportActionTypes.TOGGLE_REPORT_DISTINCT;
      };

      var DeleteReport = function DeleteReport(payload) {
        _classCallCheck(this, DeleteReport);

        this.payload = payload;
        this.type = ReportActionTypes.DELETE_REPORT;
      };

      var DeleteReportSuccess = function DeleteReportSuccess(reportId) {
        _classCallCheck(this, DeleteReportSuccess);

        this.reportId = reportId;
        this.type = ReportActionTypes.DELETE_REPORT_SUCCESS;
      };

      var EditReport = function EditReport() {
        _classCallCheck(this, EditReport);

        this.type = ReportActionTypes.EDIT_REPORT;
      };

      var EditReportSuccess = function EditReportSuccess(payload) {
        _classCallCheck(this, EditReportSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.EDIT_REPORT_SUCCESS;
      };

      var EditReportFailure = function EditReportFailure(payload) {
        _classCallCheck(this, EditReportFailure);

        this.payload = payload;
        this.type = ReportActionTypes.EDIT_REPORT_FAILURE;
      };

      var GeneratePreview = function GeneratePreview() {
        _classCallCheck(this, GeneratePreview);

        this.type = ReportActionTypes.GENERATE_PREVIEW;
      };

      var GeneratePreviewSuccess = function GeneratePreviewSuccess(payload) {
        _classCallCheck(this, GeneratePreviewSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.GENERATE_PREVIEW_SUCCESS;
      };

      var CancelGeneratePreview = function CancelGeneratePreview() {
        _classCallCheck(this, CancelGeneratePreview);

        this.type = ReportActionTypes.CANCEL_GENERATE_PREVIEW;
      };

      var ExportReport = function ExportReport(payload) {
        _classCallCheck(this, ExportReport);

        this.payload = payload;
        this.type = ReportActionTypes.EXPORT_REPORT;
      };

      var DownloadExportedReport = function DownloadExportedReport(payload) {
        _classCallCheck(this, DownloadExportedReport);

        this.payload = payload;
        this.type = ReportActionTypes.DOWNLOAD_EXPORTED_REPORT;
      };

      var CheckExportStatus = function CheckExportStatus(payload) {
        _classCallCheck(this, CheckExportStatus);

        this.payload = payload;
        this.type = ReportActionTypes.CHECK_EXPORT_STATUS;
      };

      var CancelExportReport = function CancelExportReport() {
        _classCallCheck(this, CancelExportReport);

        this.type = ReportActionTypes.CANCEL_EXPORT_REPORT;
      };

      var CreateReport = function CreateReport(payload) {
        _classCallCheck(this, CreateReport);

        this.payload = payload;
        this.type = ReportActionTypes.CREATE_REPORT;
      };

      var CreateReportSuccess = function CreateReportSuccess(payload) {
        _classCallCheck(this, CreateReportSuccess);

        this.payload = payload;
        this.type = ReportActionTypes.CREATE_REPORT_SUCCESS;
      };

      var CreateReportError = function CreateReportError(payload) {
        _classCallCheck(this, CreateReportError);

        this.payload = payload;
        this.type = ReportActionTypes.CREATE_REPORT_ERROR;
      };

      var CopyReport = function CopyReport(payload) {
        _classCallCheck(this, CopyReport);

        this.payload = payload;
        this.type = ReportActionTypes.COPY_REPORT;
      };

      var ToggleRightNav = function ToggleRightNav(payload) {
        _classCallCheck(this, ToggleRightNav);

        this.payload = payload;
        this.type = ReportActionTypes.TOGGLE_RIGHT_NAV;
      };

      var SortReports = function SortReports(payload) {
        _classCallCheck(this, SortReports);

        this.payload = payload;
        this.type = ReportActionTypes.SORT_REPORTS;
      };

      var ChangeTab = function ChangeTab(payload) {
        _classCallCheck(this, ChangeTab);

        this.payload = payload;
        this.type = ReportActionTypes.CHANGE_TAB;
      };

      var AddReportField = function AddReportField(payload) {
        _classCallCheck(this, AddReportField);

        this.payload = payload;
        this.type = ReportActionTypes.ADD_REPORT_FIELD;
      };

      var SelectField = function SelectField(payload) {
        _classCallCheck(this, SelectField);

        this.payload = payload;
        this.type = ReportActionTypes.SELECT_FIELD;
      };
      /***/

    },

    /***/
    "yt/1":
    /*!************************************!*\
      !*** ./src/app/reducers/config.ts ***!
      \************************************/

    /*! exports provided: reducer */

    /***/
    function yt1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony import */


      var _actions_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/config */
      "8COG");

      function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_config__WEBPACK_IMPORTED_MODULE_0__["ConfigActionTypes"].GET_CONFIG_SUCCESS:
            {
              return action.payload;
            }

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map