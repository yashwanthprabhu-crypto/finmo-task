'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">project-root documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ParkingModule.html\" data-type=\"entity-link\" >ParkingModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' : 'data-bs-target="#xs-controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' : 'id="xs-controllers-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ParkingController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ParkingController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' : 'data-bs-target="#xs-injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"' : 'id="xs-injectables-links-module-ParkingModule-8f8349250b957b0d81e888dcebe71a7d8e98b41f14fac70580d795e04e757ba1d3b4af753df257dbeb338831f779f78046166fb3020f72d13a74a2e5ea232544"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ParkingService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ParkingService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ParkingModule.html\" data-type=\"entity-link\" >ParkingModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' : 'data-bs-target="#xs-controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' : 'id="xs-controllers-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ParkingController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ParkingController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' : 'data-bs-target="#xs-injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"' : 'id="xs-injectables-links-module-ParkingModule-e0e5b04ce8f273f6e598a722112a767b9708c615540265e50ce6f5405d366c406e5b930e5437645f3ea569d65fc0ab57df8d3c8635f82a93777290508b210aec-1"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ParkingService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ParkingService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links"' : 'data-bs-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AllocatedSlotResponseDto.html\" data-type=\"entity-link\" >AllocatedSlotResponseDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ClearSlotByNumberDto.html\" data-type=\"entity-link\" >ClearSlotByNumberDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ClearSlotByRegNoDto.html\" data-type=\"entity-link\" >ClearSlotByRegNoDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ClearSlotDto.html\" data-type=\"entity-link\" >ClearSlotDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateParkingDto.html\" data-type=\"entity-link\" >CreateParkingDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FreedSlotResponseDto.html\" data-type=\"entity-link\" >FreedSlotResponseDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/IncrementParkingLotDto.html\" data-type=\"entity-link\" >IncrementParkingLotDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/IncrementSlotDto.html\" data-type=\"entity-link\" >IncrementSlotDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/InitializeParkingLotDto.html\" data-type=\"entity-link\" >InitializeParkingLotDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ParkCarDto.html\" data-type=\"entity-link\" >ParkCarDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ParkCarDto-1.html\" data-type=\"entity-link\" >ParkCarDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ParkingLotResponseDto.html\" data-type=\"entity-link\" >ParkingLotResponseDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ParkingStatusResponseDto.html\" data-type=\"entity-link\" >ParkingStatusResponseDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/ParkedCar.html\" data-type=\"entity-link\" >ParkedCar</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ParkingLot.html\" data-type=\"entity-link\" >ParkingLot</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));