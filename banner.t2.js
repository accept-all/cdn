(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(':root {\n  --paddingBorderFrom: 14px;\n  --paddingBorderTo: 10px;\n  --paddingBorder: 16px;\n}\n\n@media screen and (min-width: 2440px) {\n  :root {\n    --paddingBorderFrom: 33px;\n    --paddingBorderTo: 27px;\n    --paddingBorder: 35px;\n  }\n}\n#kwAcceptAllcookiePopup {\n  opacity: 0;\n  visibility: hidden;\n  z-index: 2147483647;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  transition: opacity 600ms ease-out, visibility 600ms ease-out;\n}\n#kwAcceptAllcookiePopup.kwAcceptAllshow {\n  opacity: 1;\n  visibility: visible;\n}\n@media only screen and (min-width: 45.5em) {\n  #kwAcceptAllcookiePopup.kwAcceptAllshow {\n    bottom: 0;\n    right: 0;\n  }\n}\n\n#kwAcceptAllcookieWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#kwAcceptAllcookieBackground {\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7529411765);\n  transition: transform 600ms ease-out, opacity 600ms ease-out, visibility 600ms ease-out;\n}\n#kwAcceptAllcookieBackground img {\n  all: unset;\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  min-width: 100%;\n  height: auto;\n}\n\n#kwAcceptAllcookieContent {\n  all: unset;\n  display: flex;\n  background-color: white;\n  color: black;\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 25px 20px 25px;\n  border-radius: 40px;\n  transition: transform 800ms ease-out, opacity 800ms ease-out, visibility 600ms ease-out;\n  font-family: Helvetica, sans-serif;\n  margin: 0px 16px;\n}\n@media (min-width: 430px) {\n  #kwAcceptAllcookieContent {\n    padding: 30px 35px 20px 35px;\n  }\n}\n@media (min-width: 768px) {\n  #kwAcceptAllcookieContent {\n    padding: 50px 35px 30px 35px;\n  }\n}\n@media (min-width: 2440px) {\n  #kwAcceptAllcookieContent {\n    padding: 80px 50px 50px 50px;\n  }\n}\n#kwAcceptAllcookieContent h2 {\n  all: unset;\n  color: black;\n  font-size: 1.5em;\n  width: 100%;\n  font-weight: normal;\n  line-height: 1.3;\n  text-align: center;\n}\n@media (min-width: 1200px) {\n  #kwAcceptAllcookieContent h2 {\n    width: 80%;\n    font-size: 2em;\n  }\n}\n@media (min-width: 2440px) {\n  #kwAcceptAllcookieContent h2 {\n    font-size: 2.75em;\n  }\n}\n#kwAcceptAllcookieContent h2 span, #kwAcceptAllcookieContent h2 strong {\n  all: unset;\n  font-weight: 800;\n}\n#kwAcceptAllcookieContent p {\n  all: unset;\n  color: #000;\n  font-size: 1em;\n  line-height: 1.175;\n  padding: 24px 0;\n  width: 100%;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  #kwAcceptAllcookieContent p {\n    padding: 32px 0;\n  }\n}\n@media (min-width: 1200px) {\n  #kwAcceptAllcookieContent p {\n    width: 80%;\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 2440px) {\n  #kwAcceptAllcookieContent p {\n    font-size: 1.5em;\n  }\n}\n#kwAcceptAllcookieContent button {\n  all: initial;\n  font-family: Helvetica, sans-serif;\n  font-weight: 800;\n  font-size: 1.2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  padding: 25px;\n  border-radius: 70px;\n  border: 2px solid transparent;\n  position: relative;\n}\n@media (min-width: 1200px) {\n  #kwAcceptAllcookieContent button {\n    font-size: 1.4em;\n  }\n}\n@media (min-width: 2440px) {\n  #kwAcceptAllcookieContent button {\n    font-size: 1.875em;\n    padding: 45px;\n  }\n}\n#kwAcceptAllcookieContent button:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  --width: calc(100% / 11);\n  background-image: linear-gradient(to right, #ec1d23 var(--width), #f59121 var(--width), #f59121 calc(var(--width) * 2), #fddb0f calc(var(--width) * 2), #fddb0f calc(var(--width) * 3), #029246 calc(var(--width) * 3), #029246 calc(var(--width) * 4), #242262 calc(var(--width) * 4), #242262 calc(var(--width) * 5), #804194 calc(var(--width) * 5), #804194 calc(var(--width) * 6), #60cdf5 calc(var(--width) * 6), #60cdf5 calc(var(--width) * 7), #fff calc(var(--width) * 7), #fff calc(var(--width) * 8), #f7a9b8 calc(var(--width) * 8), #f7a9b8 calc(var(--width) * 9), #000 calc(var(--width) * 9), #000 calc(var(--width) * 10), #785121 calc(var(--width) * 10), #785121 calc(var(--width) * 11));\n  border-radius: 70px;\n  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.18);\n  margin: var(--paddingBorderFrom);\n  transition: margin 300ms ease-in-out;\n  animation: pulse 1.3s infinite;\n}\n#kwAcceptAllcookieContent button:focus, #kwAcceptAllcookieContent button:focus-visible {\n  border: 2px solid #000;\n}\n#kwAcceptAllcookieContent button .sr-only {\n  position: absolute;\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n#kwAcceptAllcookieContent button .sr-only:not(caption) {\n  position: absolute;\n}\n#kwAcceptAllcookieContent button .kwAcceptAll__buttonText {\n  background-color: white;\n  color: #000;\n  padding: 15px 50px;\n  border-radius: 70px;\n  z-index: 2;\n}\n@media (min-width: 2440px) {\n  #kwAcceptAllcookieContent button .kwAcceptAll__buttonText {\n    padding: 20px 60px 22px 60px;\n  }\n}\n#kwAcceptAllcookieContent button:hover {\n  cursor: pointer;\n}\n#kwAcceptAllcookieContent button:hover::before {\n  animation: hoverAnim 300ms ease-in forwards;\n}\n#kwAcceptAllcookieContent a {\n  all: unset;\n  color: black;\n  font-size: 0.875em;\n  background-color: transparent;\n  border-radius: 20px;\n  border: 1px solid transparent;\n  margin-top: 16px;\n  padding: 8px 16px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n#kwAcceptAllcookieContent a:focus, #kwAcceptAllcookieContent a:focus-visible {\n  border: 1px solid #000;\n}\n#kwAcceptAllcookieContent a:hover {\n  cursor: pointer;\n}\n\n#kwAcceptAllButtonWrapper {\n  display: flex;\n  align-items: center;\n}\n\n#kwAcceptAllbgImage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn {\n  display: initial;\n  height: initial;\n  width: 9.0909090909%;\n  max-height: 100vh;\n  transition: transform 1s linear;\n  transform-origin: bottom;\n}\n@media (min-width: 1024px) {\n  #kwAcceptAllbgImage .kwAcceptAllColumn {\n    max-height: none;\n  }\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-0 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-0 {\n  transform: translateY(13%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-0 {\n  transform: translateY(-100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-1 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-1 {\n  transform: translateY(18%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-1 {\n  transform: translateY(100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-2 {\n  transform: translateY(-100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-2 {\n  transform: translateY(8%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-2 {\n  transform: translateY(-100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-3 {\n  transform-origin: 0 0;\n  transform: translateY(-100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-3 {\n  transform: translateY(-57%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-3 {\n  transform: translateY(100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-4 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-4 {\n  transform: translateY(5%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-4 {\n  transform: translateY(-100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-5 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-5 {\n  transform: translateY(1.5%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-5 {\n  transform: translateY(100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-6 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-6 {\n  transform: translateY(18%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-6 {\n  transform: translateY(100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-7 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-7 {\n  transform: translateY(38.5%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-7 {\n  transform: translateY(-100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-8 {\n  transform-origin: 0 0;\n  transform: translateY(-100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-8 {\n  transform: translateY(-45%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-8 {\n  transform: translateY(100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-9 {\n  transform: translateY(100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-9 {\n  transform: translateY(17%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-9 {\n  transform: translateY(-100%);\n}\n#kwAcceptAllbgImage .kwAcceptAllColumn-10 {\n  transform-origin: 0 0;\n  transform: translateY(-100%);\n}\n.kwAcceptAllTranslateIn #kwAcceptAllbgImage .kwAcceptAllColumn-10 {\n  transform: translateY(-64%);\n}\n.kwAcceptAllTranslateOut #kwAcceptAllbgImage .kwAcceptAllColumn-10 {\n  transform: translateY(100%);\n}\n\n@keyframes pulse {\n  0%, 100% {\n    margin: var(--paddingBorderTo, 15px);\n    animation-timing-function: ease-in-out;\n  }\n  50% {\n    margin: var(--paddingBorderFrom, 10px);\n    animation-timing-function: ease-in-out;\n  }\n}\n@keyframes hoverAnim {\n  to {\n    margin: var(--paddingBorder, 20px);\n  }\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function e(e2, t2) {
  for (var o2 = 0; o2 < t2.length; o2++) {
    var n2 = t2[o2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
  }
}
function t(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return o(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return o(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return o(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function o(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
    n2[o2] = e2[o2];
  return n2;
}
var n, i, a, r, s, l = (n = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], i = function() {
  function o2(e2) {
    var n2 = e2.targetModal, i3 = e2.triggers, a3 = void 0 === i3 ? [] : i3, r2 = e2.onShow, s2 = void 0 === r2 ? function() {
    } : r2, l2 = e2.onClose, c = void 0 === l2 ? function() {
    } : l2, d = e2.openTrigger, u = void 0 === d ? "data-micromodal-trigger" : d, f = e2.closeTrigger, h = void 0 === f ? "data-micromodal-close" : f, v = e2.openClass, g = void 0 === v ? "is-open" : v, m = e2.disableScroll, b = void 0 !== m && m, y = e2.disableFocus, p = void 0 !== y && y, w = e2.awaitCloseAnimation, E = void 0 !== w && w, k = e2.awaitOpenAnimation, M = void 0 !== k && k, A = e2.debugMode, C = void 0 !== A && A;
    !function(e3, t2) {
      if (!(e3 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }(this, o2), this.modal = document.getElementById(n2), this.config = { debugMode: C, disableScroll: b, openTrigger: u, closeTrigger: h, openClass: g, onShow: s2, onClose: c, awaitCloseAnimation: E, awaitOpenAnimation: M, disableFocus: p }, a3.length > 0 && this.registerTriggers.apply(this, t(a3)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  var i2, a2;
  return i2 = o2, (a2 = [{ key: "registerTriggers", value: function() {
    for (var e2 = this, t2 = arguments.length, o3 = new Array(t2), n2 = 0; n2 < t2; n2++)
      o3[n2] = arguments[n2];
    o3.filter(Boolean).forEach(function(t3) {
      t3.addEventListener("click", function(t4) {
        return e2.showModal(t4);
      });
    });
  } }, { key: "showModal", value: function() {
    var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
      var o3 = function t3() {
        e2.modal.removeEventListener("animationend", t3, false), e2.setFocusToFirstNode();
      };
      this.modal.addEventListener("animationend", o3, false);
    } else
      this.setFocusToFirstNode();
    this.config.onShow(this.modal, this.activeElement, t2);
  } }, { key: "closeModal", value: function() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = this.modal;
    if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e2), this.config.awaitCloseAnimation) {
      var o3 = this.config.openClass;
      this.modal.addEventListener("animationend", function e3() {
        t2.classList.remove(o3), t2.removeEventListener("animationend", e3, false);
      }, false);
    } else
      t2.classList.remove(this.config.openClass);
  } }, { key: "closeModalById", value: function(e2) {
    this.modal = document.getElementById(e2), this.modal && this.closeModal();
  } }, { key: "scrollBehaviour", value: function(e2) {
    if (this.config.disableScroll) {
      var t2 = document.querySelector("body");
      switch (e2) {
        case "enable":
          Object.assign(t2.style, { overflow: "" });
          break;
        case "disable":
          Object.assign(t2.style, { overflow: "hidden" });
      }
    }
  } }, { key: "addEventListeners", value: function() {
    this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
  } }, { key: "removeEventListeners", value: function() {
    this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
  } }, { key: "onClick", value: function(e2) {
    (e2.target.hasAttribute(this.config.closeTrigger) || e2.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e2.preventDefault(), e2.stopPropagation(), this.closeModal(e2));
  } }, { key: "onKeydown", value: function(e2) {
    27 === e2.keyCode && this.closeModal(e2), 9 === e2.keyCode && this.retainFocus(e2);
  } }, { key: "getFocusableNodes", value: function() {
    var e2 = this.modal.querySelectorAll(n);
    return Array.apply(void 0, t(e2));
  } }, { key: "setFocusToFirstNode", value: function() {
    var e2 = this;
    if (!this.config.disableFocus) {
      var t2 = this.getFocusableNodes();
      if (0 !== t2.length) {
        var o3 = t2.filter(function(t3) {
          return !t3.hasAttribute(e2.config.closeTrigger);
        });
        o3.length > 0 && o3[0].focus(), 0 === o3.length && t2[0].focus();
      }
    }
  } }, { key: "retainFocus", value: function(e2) {
    var t2 = this.getFocusableNodes();
    if (0 !== t2.length)
      if (t2 = t2.filter(function(e3) {
        return null !== e3.offsetParent;
      }), this.modal.contains(document.activeElement)) {
        var o3 = t2.indexOf(document.activeElement);
        e2.shiftKey && 0 === o3 && (t2[t2.length - 1].focus(), e2.preventDefault()), !e2.shiftKey && t2.length > 0 && o3 === t2.length - 1 && (t2[0].focus(), e2.preventDefault());
      } else
        t2[0].focus();
  } }]) && e(i2.prototype, a2), o2;
}(), a = null, r = function(e2) {
  if (!document.getElementById(e2))
    return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e2, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e2, '"></div>')), false;
}, s = function(e2, t2) {
  if (function(e3) {
    e3.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
  }(e2), !t2)
    return true;
  for (var o2 in t2)
    r(o2);
  return true;
}, { init: function(e2) {
  var o2 = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e2), n2 = t(document.querySelectorAll("[".concat(o2.openTrigger, "]"))), r2 = function(e3, t2) {
    var o3 = [];
    return e3.forEach(function(e4) {
      var n3 = e4.attributes[t2].value;
      void 0 === o3[n3] && (o3[n3] = []), o3[n3].push(e4);
    }), o3;
  }(n2, o2.openTrigger);
  if (true !== o2.debugMode || false !== s(n2, r2))
    for (var l2 in r2) {
      var c = r2[l2];
      o2.targetModal = l2, o2.triggers = t(c), a = new i(o2);
    }
}, show: function(e2, t2) {
  var o2 = t2 || {};
  o2.targetModal = e2, true === o2.debugMode && false === r(e2) || (a && a.removeEventListeners(), (a = new i(o2)).showModal());
}, close: function(e2) {
  e2 ? a.closeModalById(e2) : a.closeModal();
} });
"undefined" != typeof window && (window.MicroModal = l);
const columnColors = [
  "#ec1d23",
  "#f59121",
  "#fddb0f",
  "#029246",
  "#242262",
  "#804194",
  "#60cdf5",
  "#fff",
  "#f7a9b8",
  "#000",
  "#785121"
];
const languages = [
  {
    language: "de",
    buttonText: "Alle Akzeptieren",
    buttonSpan: " und Fenster schliessen",
    linkText: "Hier geht's zur Aktionsseite",
    title: "Das sind <strong>KEINE Cookie-Einstellungen.</strong>",
    text: "Das ist unsere Einstellung zu Menschenrechten, Vielfalt und Respekt."
  },
  {
    language: "bg",
    buttonText: "Приемане на всички",
    buttonSpan: "и затваряне на прозореца.",
    linkText: "Към страницата на акцията",
    title: "Това <strong>НЕ са настройки на бисквитките.</strong>",
    text: "Това е нашата позиция спрямо човешките права, многообразието и уважението."
  },
  {
    language: "bs",
    buttonText: "Prihvatite sve",
    buttonSpan: "i zatvorite prozor.",
    linkText: "Ovuda se ide do stranice s kampanjom",
    title: "To <strong>NISU postavke kolačića.</strong>",
    text: "To je naš stav o ljudskim pravima, raznolikosti i poštovanju."
  },
  {
    language: "da",
    buttonText: "Accepter alle",
    buttonSpan: "og luk vinduet.",
    linkText: "Her kommer du til kampagne-webstedet",
    title: "Dette er <strong>IKKE cookie-indstillinger.</strong>",
    text: "Dette er vores holdning til menneskerettigheder, diversitet og respekt."
  },
  {
    language: "el",
    buttonText: "Αποδοχή όλων",
    buttonSpan: "και κλείσιμο παραθύρου.",
    linkText: "Κάντε κλικ εδώ για τη σελίδα της εκστρατείας",
    title: "Αυτές <strong>ΔΕΝ είναι ρυθμίσεις για τα cookies.</strong>",
    text: "Είναι η θέση μας για τα ανθρώπινα δικαιώματα, τη διαφορετικότητα και το σεβασμό."
  },
  {
    language: "en",
    buttonText: "Accept all",
    buttonSpan: "and close the window.",
    linkText: "Click here to go to the campaign page",
    title: "These are <strong>NOT cookie settings.</strong>",
    text: "This is our attitude towards human rights, diversity and respect."
  },
  {
    language: "es",
    buttonText: "Aceptar todo",
    buttonSpan: "y cerrar la ventana.",
    linkText: "Ir a la página de la iniciativa",
    title: "Esto <strong>NO es una declaración sobre cookies.</strong>",
    text: "Esta es nuestra declaración sobre los derechos humanos, la diversidad y el respeto."
  },
  {
    language: "et",
    buttonText: "Aktsepteeri kõiki",
    buttonSpan: "ja sulge aken.",
    linkText: "Ava kampaania leht",
    title: "Tegu <strong>EI OLE küpsiste seadistustega.</strong>",
    text: "See on meie hoiak inimõiguste, mitmekesisuse ja austuse suhtes."
  },
  {
    language: "fi",
    buttonText: "Hyväksy kaikki",
    buttonSpan: "ja sulje ikkuna.",
    linkText: "Siirry kampanjasivulle tästä",
    title: "Nämä <strong>EIVÄT OLE evästeasetuksia.</strong>",
    text: "Nämä asetukset koskevat ihmisoikeuksia, moniarvoisuutta ja kunnioitusta."
  },
  {
    language: "fr",
    buttonText: "Tout accepter",
    buttonSpan: "et fermer les fenêtres.",
    linkText: "Cliquez ici pour accéder à la page de l'action",
    title: "Ce ne sont <strong>PAS des paramètres de cookies.</strong>",
    text: "C'est notre approche des droits de l'homme, de la diversité et du respect."
  },
  {
    language: "hr",
    buttonText: "Prihvati sve",
    buttonSpan: "i zatvori prozorčiće.",
    linkText: "Kliknite ovdje kako biste otišli na stranicu kampanje",
    title: "Ovo <strong>NISU postavke kolačića.</strong>",
    text: "Ovo je naš stav prema ljudskim pravima, različitosti i poštovanju."
  },
  {
    language: "hu",
    buttonText: "Az összes elfogadása",
    buttonSpan: "és az ablak bezárása.",
    linkText: "Kattintson ide a kampány oldalának megnyitásához",
    title: '"Ezek <strong>NEM sütibeállítások.</strong>"',
    text: "Ez a mi hozzáállásunk az emberi jogokhoz, a sokszínűséghez és a tisztelethez."
  },
  {
    language: "it",
    buttonText: "Accettare tutti",
    buttonSpan: "e chiudere la finestra.",
    linkText: "Cliccare qui per aprire la pagina della campagna",
    title: "<strong>NON sono impostazioni dei cookie.</strong>",
    text: "È il nostro atteggiamento nei confronti dei diritti umani, della diversità e del rispetto."
  },
  {
    language: "lt",
    buttonText: "Pripažinkite visus",
    buttonSpan: "ir uždarykite langą.",
    linkText: "Spustelėkite čia, kad peržiūrėtumėte kampanijos puslapį",
    title: "Tai <strong>NE slapukų nustatymai.</strong>",
    text: "Tai mūsų požiūris į žmogaus teises, įvairovę ir pagarbą."
  },
  {
    language: "lv",
    buttonText: "Piekrist visam",
    buttonSpan: "un aizvērt logu.",
    linkText: "Uz akcijas lapu",
    title: "Tie <strong>NAV sīkfailu iestatījumi.</strong>",
    text: "Tā ir mūsu attieksme pret cilvēktiesībām, dažādību un cieņu."
  },
  {
    language: "nl",
    buttonText: "Alles accepteren",
    buttonSpan: "en venster sluiten.",
    linkText: "Naar de actiepagina",
    title: "Dat zijn <strong>GEEN cookie-instellingen.</strong>",
    text: "Dit is onze houding ten opzichte van mensenrechten, diversiteit en respect."
  },
  {
    language: "no",
    buttonText: "Godta alle",
    buttonSpan: "og lukk vinduet.",
    linkText: "Her kommer du til kampanjesiden",
    title: "Dette er <strong>IKKE cookie-innstillinger.</strong>",
    text: "Det er vår innstilling til menneskerettigheter, mangfold og respekt."
  },
  {
    language: "pl",
    buttonText: "Akceptuj wszystkich",
    buttonSpan: "i zamknij okno.",
    linkText: "Kliknij tutaj, aby przejść na stronę kampanii",
    title: "To <strong>NIE są ustawienia plików cookie.</strong>",
    text: "To jest nasze podejście do różnorodności, praw człowieka i szacunku."
  },
  {
    language: "pt",
    buttonText: "Aceitar tudo",
    buttonSpan: "e fechar a janela.",
    linkText: "Clique aqui para aceder à página da campanha",
    title: "Estas <strong>NÃO são definições de cookies.</strong>",
    text: "Esta é a nossa posição sobre direitos humanos, diversidade e respeito."
  },
  {
    language: "ro",
    buttonText: "Acceptă-le pe toate",
    buttonSpan: "și închide fereastra.",
    linkText: "Descoperă aici pagina campaniei",
    title: "Acestea <strong>NU sunt setări cookie.</strong>",
    text: "Aceasta este viziunea noastră cu privire la drepturile omului, diversitate și respect."
  },
  {
    language: "ru",
    buttonText: "Принять всех",
    buttonSpan: "и закрыть окно.",
    linkText: "Перейти на страницу акции",
    title: "Это <strong>НЕ настройки файлов Cookie.</strong>",
    text: "Это наше отношение к правам человека, разнообразию и уважению."
  },
  {
    language: "sk",
    buttonText: "Akceptovať všetky",
    buttonSpan: "a zatvoriť okno.",
    linkText: "Tadeto sa dostanete na stránku s akciami",
    title: "Toto <strong>NIE SÚ ŽIADNE nastavenia cookies.</strong>",
    text: "To je náš postoj týkajúci sa ľudských práv, rôznorodosti, rozmanitosti a rešpektu."
  },
  {
    language: "sl",
    buttonText: "Sprejmi vse",
    buttonSpan: "in zapri okno.",
    linkText: "Tukaj greš na kampanjsko stran",
    title: "To <strong>NISO nastavitve piškotkov.</strong>",
    text: "To je naše stališče do človekovih pravic, raznolikosti in spoštovanja."
  },
  {
    language: "sr",
    buttonText: "Prihvatiti sve",
    buttonSpan: "i zatvoriti prozor.",
    linkText: "Ovde možete da pristupite stranici kampanje",
    title: "Ovo <strong>NIJE PODEŠAVANJE KOLAČIĆA.</strong>",
    text: "Ovo je naš stav o ljudskim pravima, raznolikosti i poštovanju."
  },
  {
    language: "sv",
    buttonText: "Tillåt alla",
    buttonSpan: "och stäng fönstret.",
    linkText: "Här kommer du till webbsidan för initiativet",
    title: "Det är <strong>INGA cookie-inställningar.</strong>",
    text: "Det är vår inställning till mänskliga rättigheter, mångfald och respekt."
  },
  {
    language: "tr",
    buttonText: "Tümünü kabul et",
    buttonSpan: "ve pencereyi kapat.",
    linkText: "İşlem sayfasına buradan ulaşabilirsiniz",
    title: "Bunlar <strong>çerez ayarları DEĞİLDİR.</strong>",
    text: "İnsan hakları, çeşitlilik ve saygı konusundaki tutumumuz budur."
  },
  {
    language: "uk",
    buttonText: "Прийняти всіх",
    buttonSpan: "і закрити вікно.",
    linkText: "Перейти на сторінку акції",
    title: "Це <strong>НЕ налаштування файлів Cookie.</strong>",
    text: "Це наше ставлення до прав людини, різноманіття та поваги."
  }
];
const style = "";
const createColumn = (color, index) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("class", `kwAcceptAllColumn kwAcceptAllColumn-${index}`);
  svg.setAttributeNS(null, "viewbox", "0 0 173 2221");
  svg.setAttributeNS(null, "width", "173");
  svg.setAttributeNS(null, "height", "2221");
  svg.setAttributeNS(null, "preserveAspectRatio", "none");
  const column = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  column.setAttributeNS(null, "rx", "50%");
  column.setAttributeNS(null, "width", "100%");
  column.setAttributeNS(null, "height", "100%");
  column.setAttributeNS(null, "fill", color);
  svg.appendChild(column);
  return svg;
};
class LGBTQModal {
  constructor() {
    var _a, _b, _c, _d;
    this.cookiePopup = null;
    this.cookieBackground = null;
    this.cookieContent = null;
    this.cookiePopupId = "kwAcceptAllcookiePopup";
    this.myScript = document.getElementById("kwAcceptAll");
    this.showOnlyOnce = ((_b = (_a = this.myScript) == null ? void 0 : _a.dataset) == null ? void 0 : _b.showOnce) === "true" || false;
    this.interval = parseInt((_d = (_c = this.myScript) == null ? void 0 : _c.dataset) == null ? void 0 : _d.interval) || 1;
    this.modalOptions = {
      // eslint-disable-next-line arrow-parens
      onShow: (modal) => this.showModalEvent(modal),
      // eslint-disable-next-line arrow-parens
      onClose: (modal) => this.closeModalEvent(modal),
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
      debugMode: false
    };
    this.language = "en";
    this.translations = null;
    this.checkLanguage();
    this.initModal();
    this.createModal();
  }
  checkLanguage() {
    const browserLanguages = [];
    if (navigator.languages) {
      navigator.languages.forEach((language) => {
        browserLanguages.push(language.split("-")[0]);
      });
    }
    let languageFound = false;
    for (let i2 = 0; i2 < browserLanguages.length; i2++) {
      this.translations = languages.find((lang) => lang.language === browserLanguages[i2]);
      if (this.translations) {
        languageFound = true;
        this.language = browserLanguages[i2];
        break;
      }
    }
    if (!languageFound) {
      this.translations = languages.find((lang) => lang.language === this.language);
    }
  }
  createBackground() {
    this.cookieBackground = document.createElement("div");
    this.cookieBackground.id = "kwAcceptAllcookieBackground";
    const bgImageContainer = document.createElement("div");
    bgImageContainer.id = "kwAcceptAllbgImage";
    columnColors.forEach((color, index) => {
      const column = createColumn(color, index);
      bgImageContainer.appendChild(column);
    });
    this.cookieBackground.appendChild(bgImageContainer);
    this.cookieBackground.addEventListener("click", () => this.close());
  }
  createContent() {
    this.cookieContent = document.createElement("div");
    this.cookieContent.id = "kwAcceptAllcookieContent";
    this.cookieContent.setAttribute("role", "dialog");
    this.cookieContent.setAttribute("aria-modal", "true");
    this.cookieContent.setAttribute("aria-labelledby", "kwAcceptAllModalTitle");
  }
  createText() {
    const h2 = document.createElement("h2");
    h2.id = "kwAcceptAllModalTitle";
    h2.innerHTML = this.translations.title;
    const p = document.createElement("p");
    p.textContent = this.translations.text;
    this.cookieContent.appendChild(h2);
    this.cookieContent.appendChild(p);
    this.createButton();
    this.createLink();
  }
  createButton() {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.id = "kwAcceptAllButtonWrapper";
    const button = document.createElement("button");
    button.id = "kwAcceptAllacceptCookie";
    button.innerHTML = `<span class="kwAcceptAll__buttonText">${this.translations.buttonText}<span class="sr-only"> ${this.translations.buttonSpan}</span>.</span>`;
    button.setAttribute("data-micromodal-close", "");
    buttonWrapper.appendChild(button);
    this.cookieContent.appendChild(buttonWrapper);
  }
  createLink() {
    const link = document.createElement("a");
    link.id = "kwAcceptAlllink";
    link.textContent = this.translations.linkText;
    link.target = "_blank";
    link.href = "https://www.accept.lgbt/?src=banner";
    this.cookieContent.appendChild(link);
  }
  createWrapper() {
    const cookieWrapper = document.createElement("div");
    cookieWrapper.id = "kwAcceptAllcookieWrapper";
    cookieWrapper.setAttribute("tabindex", "-1");
    cookieWrapper.appendChild(this.cookieBackground);
    cookieWrapper.appendChild(this.cookieContent);
    this.cookiePopup.appendChild(cookieWrapper);
  }
  createModal() {
    this.cookiePopup = document.createElement("div");
    this.cookiePopup.id = "kwAcceptAllcookiePopup";
    this.cookiePopup.setAttribute("aria-hidden", "");
    this.cookiePopup.setAttribute("lang", this.language);
    this.createBackground();
    this.createContent();
    this.createText();
    this.createWrapper();
    document.body.appendChild(this.cookiePopup);
  }
  initModal() {
    const triggers = document.querySelectorAll(`[${this.modalOptions.openTrigger}]`);
    l.init({
      ...this.modalOptions,
      triggers: Array.from(triggers)
      // Ensures triggers are always an array
    });
  }
  showModalEvent(modal) {
    setTimeout(() => {
      modal.classList.add("kwAcceptAllshow");
      this.cookieBackground.classList.add("kwAcceptAllTranslateIn");
    }, 200);
  }
  closeModalEvent(modal) {
    const maxAge = this.showOnlyOnce ? 60 * 60 * 24 * 1e3 * this.interval : 1;
    const now = Date.now();
    localStorage.setItem("kwAcceptAll_popup", now + maxAge);
    this.cookieBackground.classList.remove("kwAcceptAllTranslateIn");
    this.cookieBackground.classList.add("kwAcceptAllTranslateOut");
    const delay = (ms) => new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
    async function executeTimeouts() {
      await delay(900);
      modal.classList.remove("kwAcceptAllshow");
      await delay(600);
      document.getElementById("kwAcceptAllcookiePopup").style.display = "none";
    }
    executeTimeouts();
  }
  show() {
    l.show(this.cookiePopupId, this.modalOptions);
  }
  close() {
    l.close(this.cookiePopupId);
  }
}
const checkCookie = () => {
  const kwAcceptAllPopup = localStorage.getItem("kwAcceptAll_popup");
  const now = Date.now();
  if (kwAcceptAllPopup === null || Number(kwAcceptAllPopup) < now) {
    const lgbtqModal = new LGBTQModal();
    lgbtqModal.show();
  }
};
const onDOMContentLoaded = () => {
  checkCookie();
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
} else {
  onDOMContentLoaded();
}
