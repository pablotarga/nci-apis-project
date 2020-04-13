function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/account-detail/account-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/account-detail/account-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: AccountDetailComponent */

  /***/
  function srcAppAccountDetailAccountDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountDetailComponent", function () {
      return AccountDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../transaction-list/transaction-list.component */
    "./src/app/transaction-list/transaction-list.component.ts");
    /* harmony import */


    var _account_withdrawal_account_withdrawal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../account-withdrawal/account-withdrawal.component */
    "./src/app/account-withdrawal/account-withdrawal.component.ts");
    /* harmony import */


    var _account_lodgement_account_lodgement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../account-lodgement/account-lodgement.component */
    "./src/app/account-lodgement/account-lodgement.component.ts");
    /* harmony import */


    var _account_transfer_account_transfer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../account-transfer/account-transfer.component */
    "./src/app/account-transfer/account-transfer.component.ts");

    function AccountDetailComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@balanceTip", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r15.acc.balance, "EUR"));
      }
    }

    function AccountDetailComponent_app_transaction_list_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-transaction-list", 14);
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx_r16.acc)("@contentAnimation", undefined);
      }
    }

    function AccountDetailComponent_app_account_withdrawal_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-withdrawal", 14);
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx_r17.acc)("@contentAnimation", undefined);
      }
    }

    function AccountDetailComponent_app_account_lodgement_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-lodgement", 14);
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx_r18.acc)("@contentAnimation", undefined);
      }
    }

    function AccountDetailComponent_app_account_transfer_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-transfer", 14);
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx_r19.acc)("@contentAnimation", undefined);
      }
    }

    var AccountDetailComponent = /*#__PURE__*/function () {
      function AccountDetailComponent(s) {
        _classCallCheck(this, AccountDetailComponent);

        this.s = s;
      }

      _createClass(AccountDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.acc = this.account;
        }
      }, {
        key: "close",
        value: function close() {
          this.s.activeForm = null;
          this.s.activeAccount = null;
        }
      }, {
        key: "openForm",
        value: function openForm(name) {
          if (this.s.activeForm === name) {
            this.s.activeForm = null;
          } else {
            this.s.activeForm = name;
          }
        }
      }, {
        key: "showing",
        get: function get() {
          return this.s.activeForm === null ? 'list' : this.s.activeForm;
        }
      }]);

      return AccountDetailComponent;
    }();

    AccountDetailComponent.ɵfac = function AccountDetailComponent_Factory(t) {
      return new (t || AccountDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]));
    };

    AccountDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountDetailComponent,
      selectors: [["app-account-detail"]],
      inputs: {
        account: "account"
      },
      decls: 26,
      vars: 14,
      consts: [[1, "card", "card-green", "v-100", "shadow", "mb-5"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-4"], [1, "card-title"], [1, "ml-2"], ["class", "ml-auto mr-3 totals", 4, "ngIf"], ["icon", "times", 3, "click"], [1, "my-3", "d-flex", "flex-column", "flex-sm-row"], [1, "btn", "flex-fill", "btn-outline-light", "d-sm-inline", "mr-sm-2", "mb-2", "mb-sm-0", 3, "click"], [1, "btn", "flex-fill", "btn-outline-light", "d-sm-inline", 3, "click"], [1, "row", "content"], [1, "col-12"], [3, "account", 4, "ngIf"], [1, "ml-auto", "mr-3", "totals"], [3, "account"]],
      template: function AccountDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountDetailComponent_div_10_Template, 3, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountDetailComponent_Template_fa_icon_click_12_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountDetailComponent_Template_span_click_14_listener() {
            return ctx.openForm("withdraw");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountDetailComponent_Template_span_click_16_listener() {
            return ctx.openForm("lodgement");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lodgement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountDetailComponent_Template_span_click_18_listener() {
            return ctx.openForm("transfer");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Transfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AccountDetailComponent_app_transaction_list_22_Template, 1, 2, "app-transaction-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccountDetailComponent_app_account_withdrawal_23_Template, 1, 2, "app-account-withdrawal", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountDetailComponent_app_account_lodgement_24_Template, 1, 2, "app-account-lodgement", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountDetailComponent_app_account_transfer_25_Template, 1, 2, "app-account-transfer", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.acc.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.acc.sortCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.acc.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing != "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.showing == "withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.showing == "lodgement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.showing == "transfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "lodgement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "transfer");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_5__["TransactionListComponent"], _account_withdrawal_account_withdrawal_component__WEBPACK_IMPORTED_MODULE_6__["AccountWithdrawalComponent"], _account_lodgement_account_lodgement_component__WEBPACK_IMPORTED_MODULE_7__["AccountLodgementComponent"], _account_transfer_account_transfer_component__WEBPACK_IMPORTED_MODULE_8__["AccountTransferComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 350px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9hY2NvdW50LWRldGFpbC9hY2NvdW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC1kZXRhaWwvYWNjb3VudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC1kZXRhaWwvYWNjb3VudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY29udGVudHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIiwiLmNhcmQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          height: 0,
          display: 'block'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms 200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          display: 'block'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          display: 'block'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms 0s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: 0,
          opacity: 0
        }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('balanceTip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          display: 'block'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          display: 'block'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-detail',
          templateUrl: './account-detail.component.html',
          styleUrls: ['./account-detail.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            height: 0,
            display: 'block'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms 200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            display: 'block'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            display: 'block'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms 0s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: 0,
            opacity: 0
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('balanceTip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            display: 'block'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            display: 'block'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]
        }];
      }, {
        account: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/account-form-base.component.ts":
  /*!************************************************!*\
    !*** ./src/app/account-form-base.component.ts ***!
    \************************************************/

  /*! exports provided: AccountFormBaseComponent */

  /***/
  function srcAppAccountFormBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountFormBaseComponent", function () {
      return AccountFormBaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AccountFormBaseComponent = /*#__PURE__*/function () {
      function AccountFormBaseComponent(fb, s, msg) {
        _classCallCheck(this, AccountFormBaseComponent);

        this.fb = fb;
        this.s = s;
        this.msg = msg;
        this.saving = false;
      }

      _createClass(AccountFormBaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.acc = {};
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var account = changes.account;

          if (account.currentValue) {
            this.acc = account.currentValue;
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.form.reset();
          this.s.activeForm = null;
        }
      }, {
        key: "checkValid",
        value: function checkValid(msg) {
          this.msg.error(msg);
        }
      }, {
        key: "submit",
        value: function submit() {}
      }]);

      return AccountFormBaseComponent;
    }();

    AccountFormBaseComponent.ɵfac = function AccountFormBaseComponent_Factory(t) {
      return new (t || AccountFormBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    AccountFormBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountFormBaseComponent,
      selectors: [["app-account-form-base"]],
      inputs: {
        account: "account"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      template: function AccountFormBaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is a test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountFormBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-form-base',
          template: '<div>This is a test</div>',
          styles: ['']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, {
        account: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/account-list/account-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account-list/account-list.component.ts ***!
    \********************************************************/

  /*! exports provided: AccountListComponent */

  /***/
  function srcAppAccountListAccountListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountListComponent", function () {
      return AccountListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AccountListComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var acc_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.s.activeAccount = acc_r21;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acc_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", acc_r21.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r21.sortCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r21.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, acc_r21.balance, "EUR"));
      }
    }

    var AccountListComponent = /*#__PURE__*/function () {
      function AccountListComponent(s) {
        _classCallCheck(this, AccountListComponent);

        this.s = s;
      }

      _createClass(AccountListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "total",
        get: function get() {
          var list = this.s.accounts || [];

          if (list.length) {
            return list.reduce(function (a, b) {
              return {
                balance: a.balance + b.balance
              };
            }).balance;
          } else {
            return 0;
          }
        }
      }]);

      return AccountListComponent;
    }();

    AccountListComponent.ɵfac = function AccountListComponent_Factory(t) {
      return new (t || AccountListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]));
    };

    AccountListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountListComponent,
      selectors: [["app-account-list"]],
      decls: 13,
      vars: 5,
      consts: [[1, "card", "v-100", "shadow", "mb-5"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-4"], [1, "card-title"], ["icon", "plus", 3, "click"], ["class", "account-row d-flex justify-content-between align-items-center py-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "align-items-center", "py-2"], [1, "totals", "mr-3"], [1, "totals"], [1, "account-row", "d-flex", "justify-content-between", "align-items-center", "py-2", 3, "click"], [1, "text-muted"], [1, "text-muted", "ml-2"], [1, "balance"]],
      template: function AccountListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_Template_fa_icon_click_5_listener() {
            return ctx.s.activeAccount = {};
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountListComponent_div_6_Template, 11, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.s.accounts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 2, ctx.total, "EUR"));
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".account-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  margin: 0 -20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  cursor: pointer;\n}\n.account-row[_ngcontent-%COMP%], .account-row[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  transition: background-color 0.3s ease, color 0.3s ease, border-bottom 0.3s ease;\n}\n.account-row[_ngcontent-%COMP%]:hover {\n  background-color: #8fbc8f;\n  border-color: #8fbc8f;\n  color: white;\n}\n.account-row[_ngcontent-%COMP%]:hover   .text-muted[_ngcontent-%COMP%] {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9hY2NvdW50LWxpc3QvYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LWxpc3QvYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQ0UsZ0ZBQUE7QUNFSjtBRENFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUdBLFlBQUE7QUNESjtBREVJO0VBQ0UsdUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtbGlzdC9hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1yb3d7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmLCAudGV4dC1tdXRlZHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLCBjb2xvciAuM3MgZWFzZSwgYm9yZGVyLWJvdHRvbSAuM3MgZWFzZTtcbiAgfVxuXG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmYmM4ZjtcbiAgICBib3JkZXItY29sb3I6ICM4ZmJjOGY7XG5cbiAgICAvLyAjOWVjMzdjXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC50ZXh0LW11dGVke1xuICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5hY2NvdW50LXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjY291bnQtcm93LCAuYWNjb3VudC1yb3cgLnRleHQtbXV0ZWQge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlLCBib3JkZXItYm90dG9tIDAuM3MgZWFzZTtcbn1cbi5hY2NvdW50LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmJjOGY7XG4gIGJvcmRlci1jb2xvcjogIzhmYmM4ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFjY291bnQtcm93OmhvdmVyIC50ZXh0LW11dGVkIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-list',
          templateUrl: './account-list.component.html',
          styleUrls: ['./account-list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account-lodgement/account-lodgement.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/account-lodgement/account-lodgement.component.ts ***!
    \******************************************************************/

  /*! exports provided: AccountLodgementComponent */

  /***/
  function srcAppAccountLodgementAccountLodgementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountLodgementComponent", function () {
      return AccountLodgementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _account_form_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../account-form-base.component */
    "./src/app/account-form-base.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _api_api_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/api-account.service */
    "./src/app/api/api-account.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AccountLodgementComponent = /*#__PURE__*/function (_account_form_base_co) {
      _inherits(AccountLodgementComponent, _account_form_base_co);

      var _super = _createSuper(AccountLodgementComponent);

      function AccountLodgementComponent(fb, s, msg, api) {
        var _this;

        _classCallCheck(this, AccountLodgementComponent);

        _this = _super.call(this, fb, s, msg);
        _this.api = api;
        _this.form = _this.fb.group({
          amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9.]*')]],
          description: ['']
        });
        return _this;
      }

      _createClass(AccountLodgementComponent, [{
        key: "submit",
        value: function submit() {
          var _this2 = this;

          if (this.form.invalid) {
            this.checkValid('🤑 Inform amount to lodge.');
            return false;
          }

          if (this.saving) {
            return;
          }

          this.saving = true;
          this.api.lodge(this.account.id, this.form.value).subscribe(function (e) {
            _this2.account.balance = e.postBalance;

            _this2.account.transactions.push(e);

            _this2.msg.success('🎉 Money lodged');

            _this2.saving = false;

            _this2.close();
          }, function (err) {
            _this2.saving = false;

            _this2.msg.error('Request not accepted 💩');
          });
        }
      }]);

      return AccountLodgementComponent;
    }(_account_form_base_component__WEBPACK_IMPORTED_MODULE_1__["AccountFormBaseComponent"]);

    AccountLodgementComponent.ɵfac = function AccountLodgementComponent_Factory(t) {
      return new (t || AccountLodgementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_account_service__WEBPACK_IMPORTED_MODULE_5__["ApiAccountService"]));
    };

    AccountLodgementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountLodgementComponent,
      selectors: [["app-account-lodgement"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 3,
      consts: [[3, "formGroup", "submit"], [1, "row", "gutter-2"], [1, "col-12", "col-sm-6", "py-1"], ["for", "lodge-description"], ["autocomplete", "off", "id", "lodge-description", "type", "text", "formControlName", "description", "placeholder", "(optional)", 1, "form-control"], ["for", "lodge-amount"], ["autocomplete", "off", "id", "lodge-amount", "type", "text", "formControlName", "amount", "placeholder", "0.00", 1, "form-control"], [1, "col-12", "py-3"], ["type", "submit", 1, "btn", "btn-outline-light"], ["icon", "euro-sign", 1, "mr-1"], [1, "btn", "btn-link", "text-danger", 3, "click"]],
      template: function AccountLodgementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountLodgementComponent_Template_form_submit_0_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lodge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountLodgementComponent_Template_span_click_14_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]],
      styles: ["[type=\"submit\"][_ngcontent-%COMP%]{\n  width: 8rem;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1sb2RnZW1lbnQvYWNjb3VudC1sb2RnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LWxvZGdlbWVudC9hY2NvdW50LWxvZGdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3R5cGU9XCJzdWJtaXRcIl17XG4gIHdpZHRoOiA4cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountLodgementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-lodgement',
          templateUrl: './account-lodgement.component.html',
          styleUrls: ['./account-lodgement.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _api_api_account_service__WEBPACK_IMPORTED_MODULE_5__["ApiAccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account-new/account-new.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/account-new/account-new.component.ts ***!
    \******************************************************/

  /*! exports provided: AccountNewComponent */

  /***/
  function srcAppAccountNewAccountNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountNewComponent", function () {
      return AccountNewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _api_api_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/api-account.service */
    "./src/app/api/api-account.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AccountNewComponent = /*#__PURE__*/function () {
      function AccountNewComponent(s, fb, api, msg) {
        _classCallCheck(this, AccountNewComponent);

        this.s = s;
        this.fb = fb;
        this.api = api;
        this.msg = msg;
        this.form = this.fb.group({
          sortCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loading = false;
      }

      _createClass(AccountNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.form.reset();
          this.s.activeAccount = null;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          if (this.loading) {
            return;
          }

          if (this.form.invalid) {
            var err = [];

            if (this.form.get('title').invalid) {
              err.push('Title');
            }

            if (this.form.get('sortCode').invalid) {
              err.push('Sort Code');
            }

            this.msg.error("Please inform ".concat(err.join(' and ')));
            return;
          }

          this.loading = true;
          this.api.create(this.form.value).subscribe(function (e) {
            _this3.s.accounts.push(e);

            _this3.loading = false;

            _this3.close();

            _this3.msg.info("".concat(e.title, " created! Sort Code ").concat(e.sortCode, " no. ").concat(e.number));
          }, function (err) {
            _this3.msg.error('Request not accepted 💩');

            _this3.loading = false;
          });
        }
      }]);

      return AccountNewComponent;
    }();

    AccountNewComponent.ɵfac = function AccountNewComponent_Factory(t) {
      return new (t || AccountNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_account_service__WEBPACK_IMPORTED_MODULE_3__["ApiAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    AccountNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountNewComponent,
      selectors: [["app-account-new"]],
      decls: 20,
      vars: 3,
      consts: [[1, "card", "v-100", "shadow", "mb-5"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-4"], [1, "card-title"], ["icon", "times", 3, "click"], [3, "formGroup", "submit"], [1, "form-group"], ["for", ""], ["type", "text", "autocomplete", "off", "formControlName", "title", 1, "form-control"], ["type", "text", "autocomplete", "off", "formControlName", "sortCode", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-success"], [1, "btn", "btn-link", "text-danger", 3, "click"]],
      template: function AccountNewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add New Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountNewComponent_Template_fa_icon_click_5_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountNewComponent_Template_form_submit_6_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sort Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Open Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountNewComponent_Template_span_click_18_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtbmV3L2FjY291bnQtbmV3LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-new',
          templateUrl: './account-new.component.html',
          styleUrls: ['./account-new.component.css']
        }]
      }], function () {
        return [{
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _api_api_account_service__WEBPACK_IMPORTED_MODULE_3__["ApiAccountService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account-transfer/account-transfer.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/account-transfer/account-transfer.component.ts ***!
    \****************************************************************/

  /*! exports provided: AccountTransferComponent */

  /***/
  function srcAppAccountTransferAccountTransferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountTransferComponent", function () {
      return AccountTransferComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _account_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../account-form-base.component */
    "./src/app/account-form-base.component.ts");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _api_api_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/api-account.service */
    "./src/app/api/api-account.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var _c0 = function _c0(a1) {
      return ["far", a1];
    };

    function AccountTransferComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountTransferComponent_div_15_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var acc_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.setTarget(acc_r27);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acc_r27 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r26.targetAccount == acc_r27 ? "dot-circle" : "circle"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", acc_r27.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r27.sortCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r27.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, acc_r27.balance, "EUR"));
      }
    }

    var AccountTransferComponent = /*#__PURE__*/function (_account_form_base_co2) {
      _inherits(AccountTransferComponent, _account_form_base_co2);

      var _super2 = _createSuper(AccountTransferComponent);

      function AccountTransferComponent(fb, s, msg, api) {
        var _this4;

        _classCallCheck(this, AccountTransferComponent);

        _this4 = _super2.call(this, fb, s, msg);
        _this4.api = api;
        _this4.targetAccount = null;
        _this4.form = _this4.fb.group({
          targetid: [''],
          sortCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9.]*')]]
        });
        return _this4;
      }

      _createClass(AccountTransferComponent, [{
        key: "setTarget",
        value: function setTarget(a) {
          this.targetAccount = a;

          if (a === null) {
            this.fTarget.clearValidators();
            this.fTarget.setValue(null);
            this.fSortCode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.fNumber.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          } else {
            this.fTarget.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.fTarget.setValue(a.id);
            this.fSortCode.clearValidators();
            this.fNumber.clearValidators();
            this.fSortCode.setValue('');
            this.fNumber.setValue('');
          }

          this.fTarget.updateValueAndValidity();
          this.fSortCode.updateValueAndValidity();
          this.fNumber.updateValueAndValidity();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this5 = this;

          if (this.form.invalid) {
            if (this.fAmount.invalid) {
              if (this.fAmount.errors.required) {
                this.msg.error('🚦 Amount is required');
              } else {
                this.msg.error('🚦 Amount accepts only digits and \'.\'');
              }
            }

            if (this.fTarget.invalid || this.fSortCode.invalid || this.fNumber.invalid) {
              this.msg.error('🚦 Select a target account or fill Sort Code and Number');
            }

            return false;
          }

          if (this.saving) {
            return;
          }

          this.saving = true;
          this.api.transfer(this.account.id, this.form.value).subscribe(function (e) {
            if (e) {
              _this5.s.addTransaction(e[0]);

              _this5.s.addTransaction(e[1]);

              _this5.msg.success('💚💚💚 Transferred with success');
            } else {
              _this5.msg.error('Request not accepted 💩');
            }

            _this5.saving = false;

            _this5.close();
          }, function (err) {
            _this5.saving = false;

            _this5.msg.error('Request not accepted 💩');
          });
        }
      }, {
        key: "list",
        get: function get() {
          var _this6 = this;

          return this.s.accounts.filter(function (e) {
            return e.id !== _this6.s.activeAccount.id;
          });
        }
      }, {
        key: "fAmount",
        get: function get() {
          return this.form.get('amount');
        }
      }, {
        key: "fTarget",
        get: function get() {
          return this.form.get('targetid');
        }
      }, {
        key: "fSortCode",
        get: function get() {
          return this.form.get('sortCode');
        }
      }, {
        key: "fNumber",
        get: function get() {
          return this.form.get('number');
        }
      }]);

      return AccountTransferComponent;
    }(_account_form_base_component__WEBPACK_IMPORTED_MODULE_2__["AccountFormBaseComponent"]);

    AccountTransferComponent.ɵfac = function AccountTransferComponent_Factory(t) {
      return new (t || AccountTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_account_service__WEBPACK_IMPORTED_MODULE_5__["ApiAccountService"]));
    };

    AccountTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountTransferComponent,
      selectors: [["app-account-transfer"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 7,
      consts: [[3, "formGroup", "submit"], [1, "row", "gutter-2"], [1, "col-8"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "amount", "placeholder", "0.00", 1, "form-control"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-block", "btn-outline-light"], ["class", "account-row d-flex justify-content-between align-items-center py-2 clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "account-row", "d-flex", "justify-content-between", "align-items-center", "py-2", "clickable", 3, "click"], [1, "mr-3"], [3, "icon"], [1, "flex-fill"], [1, "col-6"], ["type", "text", "formControlName", "sortCode", "placeholder", "Sort Code (00-00-00)...", 1, "form-control"], ["type", "text", "formControlName", "number", "placeholder", "Acc. number (00000)...", 1, "form-control"], [1, "mr-auto"], [1, "text-white"], [1, "text-white", "ml-2"], [1, "balance"]],
      template: function AccountTransferComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountTransferComponent_Template_form_submit_0_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TRANSFER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Target Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountTransferComponent_div_15_Template, 13, 10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountTransferComponent_Template_div_click_16_listener() {
            return ctx.setTarget(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.targetAccount == null ? "dot-circle" : "circle"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtdHJhbnNmZXIvYWNjb3VudC10cmFuc2Zlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-transfer',
          templateUrl: './account-transfer.component.html',
          styleUrls: ['./account-transfer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _api_api_account_service__WEBPACK_IMPORTED_MODULE_5__["ApiAccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account-withdrawal/account-withdrawal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/account-withdrawal/account-withdrawal.component.ts ***!
    \********************************************************************/

  /*! exports provided: AccountWithdrawalComponent */

  /***/
  function srcAppAccountWithdrawalAccountWithdrawalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountWithdrawalComponent", function () {
      return AccountWithdrawalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _account_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../account-form-base.component */
    "./src/app/account-form-base.component.ts");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _api_api_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/api-account.service */
    "./src/app/api/api-account.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AccountWithdrawalComponent = /*#__PURE__*/function (_account_form_base_co3) {
      _inherits(AccountWithdrawalComponent, _account_form_base_co3);

      var _super3 = _createSuper(AccountWithdrawalComponent);

      function AccountWithdrawalComponent(fb, s, msg, api) {
        var _this7;

        _classCallCheck(this, AccountWithdrawalComponent);

        _this7 = _super3.call(this, fb, s, msg);
        _this7.api = api;
        _this7.form = _this7.fb.group({
          amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9.]*')]],
          description: ['']
        });
        return _this7;
      }

      _createClass(AccountWithdrawalComponent, [{
        key: "submit",
        value: function submit() {
          var _this8 = this;

          if (this.form.invalid) {
            this.checkValid('💸 Inform amount to withdraw.');
            return false;
          }

          if (this.saving) {
            return;
          }

          this.saving = true;
          this.api.withdraw(this.account.id, this.form.value).subscribe(function (e) {
            _this8.account.balance = e.postBalance;

            _this8.account.transactions.push(e);

            _this8.msg.success('😎🎉 Money withdrawn');

            _this8.saving = false;

            _this8.close();
          }, function (err) {
            _this8.saving = false;

            _this8.msg.error('Request not accepted 💩');
          });
        }
      }]);

      return AccountWithdrawalComponent;
    }(_account_form_base_component__WEBPACK_IMPORTED_MODULE_2__["AccountFormBaseComponent"]);

    AccountWithdrawalComponent.ɵfac = function AccountWithdrawalComponent_Factory(t) {
      return new (t || AccountWithdrawalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_account_service__WEBPACK_IMPORTED_MODULE_5__["ApiAccountService"]));
    };

    AccountWithdrawalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountWithdrawalComponent,
      selectors: [["app-account-withdrawal"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 3,
      consts: [[3, "formGroup", "submit"], [1, "row", "gutter-2"], [1, "col-12", "col-sm-6", "py-1"], ["for", "withdrawal-description"], ["autocomplete", "off", "id", "withdrawal-description", "type", "text", "formControlName", "description", "placeholder", "(optional)", 1, "form-control"], ["for", "withdrawal-amount"], ["autocomplete", "off", "id", "withdrawal-amount", "type", "text", "formControlName", "amount", "placeholder", "0.00", 1, "form-control"], [1, "col-12", "py-3"], ["type", "submit", 1, "btn", "btn-outline-light"], ["icon", "euro-sign", 1, "mr-1"], [1, "btn", "btn-link", "text-danger", 3, "click"]],
      template: function AccountWithdrawalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountWithdrawalComponent_Template_form_submit_0_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Withdraw ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountWithdrawalComponent_Template_span_click_14_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]],
      styles: ["[type=submit][_ngcontent-%COMP%] {\n  width: 8rem;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9hY2NvdW50LXdpdGhkcmF3YWwvYWNjb3VudC13aXRoZHJhd2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50LXdpdGhkcmF3YWwvYWNjb3VudC13aXRoZHJhd2FsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LXdpdGhkcmF3YWwvYWNjb3VudC13aXRoZHJhd2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3R5cGU9XCJzdWJtaXRcIl17XG4gIHdpZHRoOiA4cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiW3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiA4cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountWithdrawalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-withdrawal',
          templateUrl: './account-withdrawal.component.html',
          styleUrls: ['./account-withdrawal.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _api_api_account_service__WEBPACK_IMPORTED_MODULE_5__["ApiAccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api-account.service.ts":
  /*!********************************************!*\
    !*** ./src/app/api/api-account.service.ts ***!
    \********************************************/

  /*! exports provided: ApiAccountService */

  /***/
  function srcAppApiApiAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiAccountService", function () {
      return ApiAccountService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiAccountService = /*#__PURE__*/function (_api_service__WEBPACK) {
      _inherits(ApiAccountService, _api_service__WEBPACK);

      var _super4 = _createSuper(ApiAccountService);

      function ApiAccountService(httpClient) {
        var _this9;

        _classCallCheck(this, ApiAccountService);

        _this9 = _super4.call(this, httpClient);
        _this9.base = 'accounts';

        _this9.index = function () {
          return _this9.get(null);
        };

        _this9.show = function (id) {
          return _this9.get(id);
        };

        _this9.create = function (data) {
          return _this9.post(null, data);
        };

        _this9.withdraw = function (id, data) {
          return _this9.post("".concat(id, "/withdraw"), data);
        };

        _this9.lodge = function (id, data) {
          return _this9.post("".concat(id, "/lodge"), data);
        };

        _this9.transfer = function (id, data) {
          return _this9.post("".concat(id, "/transfer"), data);
        };

        return _this9;
      }

      return ApiAccountService;
    }(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]);

    ApiAccountService.ɵfac = function ApiAccountService_Factory(t) {
      return new (t || ApiAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiAccountService,
      factory: ApiAccountService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiAccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api-auth.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/api/api-auth.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiAuthService */

  /***/
  function srcAppApiApiAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiAuthService", function () {
      return ApiAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiAuthService = /*#__PURE__*/function (_api_service__WEBPACK2) {
      _inherits(ApiAuthService, _api_service__WEBPACK2);

      var _super5 = _createSuper(ApiAuthService);

      function ApiAuthService(httpClient) {
        var _this10;

        _classCallCheck(this, ApiAuthService);

        _this10 = _super5.call(this, httpClient);

        _this10.login = function (email, password) {
          return _this10.post('login', {
            email: email,
            password: password
          });
        };

        _this10.logout = function () {
          return _this10["delete"]('logout');
        };

        _this10.register = function (form) {
          return _this10.post('register', form);
        };

        _this10.me = function () {
          return _this10.get('me');
        };

        return _this10;
      }

      return ApiAuthService;
    }(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]);

    ApiAuthService.ɵfac = function ApiAuthService_Factory(t) {
      return new (t || ApiAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiAuthService,
      factory: ApiAuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = function ApiService(httpClient) {
      var _this11 = this;

      _classCallCheck(this, ApiService);

      this.httpClient = httpClient;

      this.post = function (path, body) {
        return _this11.httpClient.post(_this11.getUrl(path), body, {});
      };

      this.put = function (path, body) {
        return _this11.httpClient.put(_this11.getUrl(path), body, {});
      };

      this.get = function (path, params) {
        return _this11.httpClient.get(_this11.getUrl(path), {
          params: params
        });
      };

      this["delete"] = function (path) {
        return _this11.httpClient["delete"](_this11.getUrl(path), {});
      };

      this.getUrl = function (path) {
        return [src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host, _this11.base, path].filter(function (e) {
          return e;
        }).join('/');
      };
    };

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _authorized_authorized_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authorized/authorized.component */
    "./src/app/authorized/authorized.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    function AppComponent_app_authorized_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-authorized");
      }
    }

    function AppComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = function AppComponent(s) {
      _classCallCheck(this, AppComponent);

      this.s = s;
      this.title = 'NCI API CA3';
      this.subtitle = 'Bank Account HtmlClient';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 4,
      consts: [[1, "row"], ["id", "title", 1, "col-12", "mb-3"], [1, "text-muted"], [4, "ngIf", "ngIfElse"], ["authComponents", ""], [1, "col-12", "col-md-6"], [1, "col-12", "col-md-6", "mt-5", "mt-md-0"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_authorized_6_Template, 1, 0, "app-authorized", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 5, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.customer)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _authorized_authorized_component__WEBPACK_IMPORTED_MODULE_3__["AuthorizedComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
      styles: ["@media screen and (max-width: 768px) {\n  #title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFO0lBQ0UsZUFBQTtFQ0FKO0VER0U7SUFDRSxlQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZXtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIGgxe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIGgye1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3RpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgI3RpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _authorized_authorized_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./authorized/authorized.component */
    "./src/app/authorized/authorized.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./customer-info/customer-info.component */
    "./src/app/customer-info/customer-info.component.ts");
    /* harmony import */


    var _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./account-detail/account-detail.component */
    "./src/app/account-detail/account-detail.component.ts");
    /* harmony import */


    var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./account-list/account-list.component */
    "./src/app/account-list/account-list.component.ts");
    /* harmony import */


    var _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./transaction-list/transaction-list.component */
    "./src/app/transaction-list/transaction-list.component.ts");
    /* harmony import */


    var _account_withdrawal_account_withdrawal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./account-withdrawal/account-withdrawal.component */
    "./src/app/account-withdrawal/account-withdrawal.component.ts");
    /* harmony import */


    var _account_lodgement_account_lodgement_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./account-lodgement/account-lodgement.component */
    "./src/app/account-lodgement/account-lodgement.component.ts");
    /* harmony import */


    var _account_transfer_account_transfer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./account-transfer/account-transfer.component */
    "./src/app/account-transfer/account-transfer.component.ts");
    /* harmony import */


    var _account_new_account_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./account-new/account-new.component */
    "./src/app/account-new/account-new.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AppModule = function AppModule(library) {
      _classCallCheck(this, AppModule);

      library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot({
        preventDuplicates: true,
        countDuplicates: true,
        resetTimeoutOnDuplicate: true,
        positionClass: 'toast-bottom-full-width',
        progressBar: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _authorized_authorized_component__WEBPACK_IMPORTED_MODULE_9__["AuthorizedComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__["CustomerInfoComponent"], _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_13__["AccountDetailComponent"], _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_14__["AccountListComponent"], _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_15__["TransactionListComponent"], _account_withdrawal_account_withdrawal_component__WEBPACK_IMPORTED_MODULE_16__["AccountWithdrawalComponent"], _account_lodgement_account_lodgement_component__WEBPACK_IMPORTED_MODULE_17__["AccountLodgementComponent"], _account_transfer_account_transfer_component__WEBPACK_IMPORTED_MODULE_18__["AccountTransferComponent"], _account_new_account_new_component__WEBPACK_IMPORTED_MODULE_19__["AccountNewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _authorized_authorized_component__WEBPACK_IMPORTED_MODULE_9__["AuthorizedComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__["CustomerInfoComponent"], _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_13__["AccountDetailComponent"], _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_14__["AccountListComponent"], _transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_15__["TransactionListComponent"], _account_withdrawal_account_withdrawal_component__WEBPACK_IMPORTED_MODULE_16__["AccountWithdrawalComponent"], _account_lodgement_account_lodgement_component__WEBPACK_IMPORTED_MODULE_17__["AccountLodgementComponent"], _account_transfer_account_transfer_component__WEBPACK_IMPORTED_MODULE_18__["AccountTransferComponent"], _account_new_account_new_component__WEBPACK_IMPORTED_MODULE_19__["AccountNewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot({
            preventDuplicates: true,
            countDuplicates: true,
            resetTimeoutOnDuplicate: true,
            positionClass: 'toast-bottom-full-width',
            progressBar: true
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authorized/authorized.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/authorized/authorized.component.ts ***!
    \****************************************************/

  /*! exports provided: AuthorizedComponent */

  /***/
  function srcAppAuthorizedAuthorizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizedComponent", function () {
      return AuthorizedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../customer-info/customer-info.component */
    "./src/app/customer-info/customer-info.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../account-list/account-list.component */
    "./src/app/account-list/account-list.component.ts");
    /* harmony import */


    var _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../account-detail/account-detail.component */
    "./src/app/account-detail/account-detail.component.ts");
    /* harmony import */


    var _account_new_account_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../account-new/account-new.component */
    "./src/app/account-new/account-new.component.ts");

    function AuthorizedComponent_app_account_list_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-list");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimation", undefined);
      }
    }

    function AuthorizedComponent_app_account_detail_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-detail", 5);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimation", undefined)("account", ctx_r4.s.activeAccount);
      }
    }

    function AuthorizedComponent_app_account_new_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-new");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimation", undefined);
      }
    }

    var AuthorizedComponent = /*#__PURE__*/function () {
      function AuthorizedComponent(s) {
        _classCallCheck(this, AuthorizedComponent);

        this.s = s;
      }

      _createClass(AuthorizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showing",
        get: function get() {
          if (this.s.activeAccount === null) {
            return 'list';
          } else if (!this.s.activeAccount.id) {
            return 'new';
          } else {
            return 'details';
          }
        }
      }]);

      return AuthorizedComponent;
    }();

    AuthorizedComponent.ɵfac = function AuthorizedComponent_Factory(t) {
      return new (t || AuthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]));
    };

    AuthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthorizedComponent,
      selectors: [["app-authorized"]],
      decls: 7,
      vars: 3,
      consts: [[1, "row"], [1, "col-md-5", "col-lg-3"], [1, "col-md-7", "col-lg-9", "mt-4", "mt-md-0"], [4, "ngIf"], [3, "account", 4, "ngIf"], [3, "account"]],
      template: function AuthorizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-customer-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthorizedComponent_app_account_list_4_Template, 1, 1, "app-account-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthorizedComponent_app_account_detail_5_Template, 1, 2, "app-account-detail", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthorizedComponent_app_account_new_6_Template, 1, 1, "app-account-new", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showing == "new");
        }
      },
      directives: [_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_3__["CustomerInfoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_5__["AccountListComponent"], _account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_6__["AccountDetailComponent"], _account_new_account_new_component__WEBPACK_IMPORTED_MODULE_7__["AccountNewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZWQvYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('inOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          height: 0,
          display: 'block',
          transform: 'translateY(1rem)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          display: 'block',
          transform: 'translateY(0)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          display: 'block',
          transform: 'translateY(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms 0s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: 0,
          opacity: 0,
          // display: 'block',
          transform: 'translateY(-1rem)'
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-authorized',
          templateUrl: './authorized.component.html',
          styleUrls: ['./authorized.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('inOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            height: 0,
            display: 'block',
            transform: 'translateY(1rem)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            display: 'block',
            transform: 'translateY(0)'
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            display: 'block',
            transform: 'translateY(0)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms 0s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: 0,
            opacity: 0,
            // display: 'block',
            transform: 'translateY(-1rem)'
          }))])])]
        }]
      }], function () {
        return [{
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer-info/customer-info.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/customer-info/customer-info.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomerInfoComponent */

  /***/
  function srcAppCustomerInfoCustomerInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function () {
      return CustomerInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var CustomerInfoComponent = /*#__PURE__*/function () {
      function CustomerInfoComponent(s) {
        _classCallCheck(this, CustomerInfoComponent);

        this.s = s;
      }

      _createClass(CustomerInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerInfoComponent;
    }();

    CustomerInfoComponent.ɵfac = function CustomerInfoComponent_Factory(t) {
      return new (t || CustomerInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]));
    };

    CustomerInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerInfoComponent,
      selectors: [["app-customer-info"]],
      decls: 17,
      vars: 8,
      consts: [[1, "card", "shadow"], [1, "card-body"], [1, "card-title"], [1, "card-text", "text-muted"], ["icon", "envelope", 3, "fixedWidth"], ["icon", "id-card", 3, "fixedWidth"], ["icon", "map-marker-alt", 3, "fixedWidth"], ["href", "#", 1, "card-link", "text-danger", 3, "click"], ["icon", "power-off", 3, "fixedWidth"]],
      template: function CustomerInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerInfoComponent_Template_a_click_14_listener() {
            return ctx.s.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx.s.customer.name, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedWidth", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.customer.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedWidth", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ("" + ctx.s.customer.id).padStart(5, "0"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedWidth", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.s.customer.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedWidth", true);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWluZm8vY3VzdG9tZXItaW5mby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customer-info',
          templateUrl: './customer-info.component.html',
          styleUrls: ['./customer-info.component.css']
        }]
      }], function () {
        return [{
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email format.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, s) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.s = s;
        this.form = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "isEmailInvalid",
        get: function get() {
          var e = this.email;
          return e.invalid && (e.dirty || e.touched);
        }
      }, {
        key: "password",
        get: function get() {
          return this.form.get('password');
        }
      }, {
        key: "isPasswordInvalid",
        get: function get() {
          var e = this.password;
          return e.invalid && (e.dirty || e.touched);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 18,
      vars: 9,
      consts: [[1, "card", "shadow"], [1, "card-body"], [1, "card-title"], [3, "formGroup", "submit"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "autocomplete", "off", "formControlName", "password", 1, "form-control"], ["type", "submit", "value", "Login", 1, "btn", "btn-primary", 3, "disabled"], [1, "invalid-feedback"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener() {
            return ctx.s.login(ctx.form.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isEmailInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailInvalid && ctx.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailInvalid && !ctx.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isPasswordInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPasswordInvalid && ctx.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.s.authenticating || ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/system.service */
    "./src/app/services/system.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort Code is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email format.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(fb, s) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.s = s;
        this.form = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          sortCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showInvalidControl",
        value: function showInvalidControl(e) {
          return e.invalid && (e.dirty || e.touched);
        }
      }, {
        key: "name",
        get: function get() {
          return this.form.get('name');
        }
      }, {
        key: "isNameInvalid",
        get: function get() {
          return this.showInvalidControl(this.name);
        }
      }, {
        key: "sortCode",
        get: function get() {
          return this.form.get('sortCode');
        }
      }, {
        key: "isSortCodeInvalid",
        get: function get() {
          return this.showInvalidControl(this.sortCode);
        }
      }, {
        key: "address",
        get: function get() {
          return this.form.get('address');
        }
      }, {
        key: "isAddressInvalid",
        get: function get() {
          return this.showInvalidControl(this.address);
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "isEmailInvalid",
        get: function get() {
          return this.showInvalidControl(this.email);
        }
      }, {
        key: "password",
        get: function get() {
          return this.form.get('password');
        }
      }, {
        key: "isPasswordInvalid",
        get: function get() {
          return this.showInvalidControl(this.password);
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 33,
      vars: 18,
      consts: [[1, "card", "shadow"], [1, "card-body"], [1, "card-title"], [3, "formGroup", "submit"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "sortCode", 1, "form-control"], ["type", "text", "formControlName", "address", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "password", "autocomplete", "off", "formControlName", "password", 1, "form-control"], ["type", "submit", "value", "Create Account", 1, "btn", "btn-primary", 3, "disabled"], [1, "invalid-feedback"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_4_listener() {
            return ctx.s.register(ctx.form.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sort Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegisterComponent_div_14_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_div_24_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_div_30_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isNameInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNameInvalid && ctx.name.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isSortCodeInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSortCodeInvalid && ctx.sortCode.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isAddressInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddressInvalid && ctx.address.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isEmailInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailInvalid && ctx.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailInvalid && !ctx.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.isPasswordInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPasswordInvalid && ctx.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.s.authenticating || ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/system.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/system.service.ts ***!
    \********************************************/

  /*! exports provided: SystemService */

  /***/
  function srcAppServicesSystemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemService", function () {
      return SystemService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api/api-auth.service */
    "./src/app/api/api-auth.service.ts");
    /* harmony import */


    var _api_api_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api-account.service */
    "./src/app/api/api-account.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var SystemService = /*#__PURE__*/function () {
      function SystemService(authApi, accApi, msg) {
        var _this12 = this;

        _classCallCheck(this, SystemService);

        this.authApi = authApi;
        this.accApi = accApi;
        this.msg = msg;
        this.authenticating = false;
        this.loading = false;
        this.loadingAccounts = false;
        this.customer = null;
        this.accounts = [];
        this.activeAccount = null;
        this.activeForm = null;

        this.login = function (data) {
          if (_this12.authenticating) {
            return;
          }

          _this12.authenticating = true;

          _this12.clearAll();

          _this12.authApi.login(data.email, data.password).subscribe(function (e) {
            _this12.customer = e;

            _this12.loadAccounts();

            _this12.authenticating = false;

            _this12.msg.success('🤘 awesome!');
          }, function (err) {
            _this12.msg.error('Invalid Email/Password 🚫');

            _this12.authenticating = false;
          });
        };

        this.register = function (data) {
          if (_this12.authenticating) {
            return;
          }

          _this12.authenticating = true;

          _this12.clearAll();

          _this12.authApi.register(data).subscribe(function (e) {
            _this12.customer = e;

            _this12.loadAccounts();

            _this12.msg.success('Welcome aboard 👨‍✈️');

            _this12.authenticating = false;
          }, function (err) {
            _this12.authenticating = false;

            _this12.msg.error('Request not accepted 💩');
          });
        };

        this.logout = function () {
          _this12.authApi.logout().subscribe(function (e) {
            return console.log('Logged out!');
          });

          _this12.clearAll();

          _this12.msg.info('Your cookie was destroyed');
        };

        this.clearAll = function () {
          _this12.customer = null;
          _this12.accounts = [];
          _this12.activeAccount = null;
          _this12.activeForm = null;
        };

        this.loadAccounts = function () {
          if (_this12.loadingAccounts) {
            return;
          }

          _this12.loadingAccounts = true;

          _this12.accApi.index().subscribe(function (e) {
            _this12.accounts = e;
            _this12.loadingAccounts = false;
          }, function (err) {
            _this12.loadingAccounts = false;
          });
        };

        this.loadTransactions = function (accountID) {
          _this12.loading = true;
          setTimeout(function () {
            return _this12.loading = false;
          }, 3000);
        };

        this.authenticating = true;
        this.authApi.me().subscribe(function (e) {
          _this12.customer = e;
          _this12.authenticating = false;

          _this12.loadAccounts();
        }, function (err) {
          if (err.status === 0) {
            _this12.msg.warning('Server not responding activating FAKE data 🤪🤪🤪');

            _this12.mock();
          }

          _this12.authenticating = false;
        });
      }

      _createClass(SystemService, [{
        key: "addTransaction",
        value: function addTransaction(t) {
          if (t == null) {
            return;
          }

          var acc = this.findAccountById(t.accountID);

          if (acc == null) {
            return;
          }

          acc.balance = t.postBalance;
          acc.transactions.push(t);
        }
      }, {
        key: "findAccountById",
        value: function findAccountById(id) {
          var _iterator = _createForOfIteratorHelper(this.accounts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var acc = _step.value;

              if (+acc.id === +id) {
                return acc;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return null;
        }
      }, {
        key: "mock",
        value: function mock() {
          this.customer = {
            address: '25 Talbot St',
            email: 'john@student.ncirl.ie',
            id: 1,
            name: 'John Doe',
            password: 'Yjk5d53JESdHv5k/rI6Tq/wSkHY=.1GwRmuF4kNs='
          };
          this.accounts = [{
            id: 1,
            customerID: 1,
            sortCode: '90-30-66',
            number: '00001',
            balance: 34.56,
            title: 'Current Account',
            transactions: [{
              id: 123,
              accountID: 1,
              type: 'c',
              created: new Date(2020, 3, 1, 14, 34),
              amount: 200.00,
              postBalance: 200.00,
              description: 'Account opening'
            }, {
              id: 124,
              accountID: 1,
              type: 'c',
              created: new Date(2020, 3, 5, 14, 34),
              amount: 20.00,
              postBalance: 220.00,
              description: 'Lodgement'
            }, {
              id: 125,
              accountID: 1,
              type: 'd',
              created: new Date(2020, 3, 6, 10, 20),
              amount: 123.00,
              postBalance: 97.00,
              description: 'Withdrawal'
            }, {
              id: 126,
              accountID: 1,
              type: 'd',
              created: new Date(2020, 3, 7, 22, 0),
              amount: 15.00,
              postBalance: 84.00,
              description: 'Tesco Stores'
            }, {
              id: 126,
              accountID: 1,
              type: 'd',
              created: new Date(2020, 3, 9, 10, 0),
              amount: 49.44,
              postBalance: 34.56,
              description: 'Annual Subscription'
            }]
          }, {
            id: 2,
            customerID: 1,
            sortCode: '90-30-66',
            number: '00002',
            balance: 402.34,
            title: 'Savings',
            transactions: [{
              id: 223,
              accountID: 2,
              type: 'c',
              created: new Date(2020, 1, 1, 10, 0),
              amount: 200.00,
              postBalance: 200.00,
              description: 'Deposit'
            }, {
              id: 224,
              accountID: 2,
              type: 'c',
              created: new Date(2020, 2, 1, 10, 0),
              amount: 200.00,
              postBalance: 400.00,
              description: 'Deposit'
            }, {
              id: 225,
              accountID: 2,
              type: 'c',
              created: new Date(2020, 2, 1, 10, 0),
              amount: 2.34,
              postBalance: 402.34,
              description: 'Interest'
            }]
          }, {
            id: 3,
            customerID: 1,
            sortCode: '90-30-66',
            number: '00003',
            balance: 4024.68,
            title: 'Investments',
            transactions: []
          }, {
            id: 4,
            customerID: 1,
            sortCode: '90-30-66',
            number: '00004',
            balance: 76.34,
            title: 'Other',
            transactions: []
          }]; // this.activeAccount = this.accounts[1];
        }
      }]);

      return SystemService;
    }();

    SystemService.ɵfac = function SystemService_Factory(t) {
      return new (t || SystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["ApiAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_account_service__WEBPACK_IMPORTED_MODULE_2__["ApiAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    SystemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SystemService,
      factory: SystemService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["ApiAuthService"]
        }, {
          type: _api_api_account_service__WEBPACK_IMPORTED_MODULE_2__["ApiAccountService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/transaction-list/transaction-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/transaction-list/transaction-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: TransactionListComponent */

  /***/
  function srcAppTransactionListTransactionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function () {
      return TransactionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TransactionListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entry_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r25.description, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, entry_r25.created, "dd/LL/yyyy HH:mm"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", entry_r25.type == "d");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r25.type == "c" ? "+" : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 10, entry_r25.amount, "EUR"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 13, entry_r25.postBalance, "EUR"));
      }
    }

    var TransactionListComponent = /*#__PURE__*/function () {
      function TransactionListComponent() {
        _classCallCheck(this, TransactionListComponent);
      }

      _createClass(TransactionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionListComponent;
    }();

    TransactionListComponent.ɵfac = function TransactionListComponent_Factory(t) {
      return new (t || TransactionListComponent)();
    };

    TransactionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransactionListComponent,
      selectors: [["app-transaction-list"]],
      inputs: {
        account: "account"
      },
      decls: 7,
      vars: 5,
      consts: [["class", "account-row d-flex justify-content-between align-items-center py-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "align-items-center", "py-2"], [1, "totals", "mr-3"], [1, "totals"], [1, "account-row", "d-flex", "justify-content-between", "align-items-center", "py-2"], [1, "text-white"], [1, "text-right"], [1, "balance"], [1, "font-weight-lighter"]],
      template: function TransactionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TransactionListComponent_div_0_Template, 18, 16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.account.transactions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.account.balance, "EUR"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWxpc3QvdHJhbnNhY3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-transaction-list',
          templateUrl: './transaction-list.component.html',
          styleUrls: ['./transaction-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        account: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      host: 'http://localhost:49000/api'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map