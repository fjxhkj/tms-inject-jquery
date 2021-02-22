// ==UserScript==
// @name        inject jquery
// @version     1.0.6
// @namespace   https://github.com/fjxhkj/tms-inject-jquery
// @description 为页面注入jQuery引用节点,便于使用控制台调试jQuery选择器等.
// @license     Apache License 2.0
// @supportURL  https://github.com/fjxhkj/tms-inject-jquery
// @match       *
// @include     *
// @grant       unsafeWindow
// @run-at      document-end
// ==/UserScript==

(function () {
  "use strict";

  injectJqueryNode();
  var myReloader = setInterval(function () {
    testJq();
  }, 100);

  function injectJqueryNode() {
    if (typeof $ === "undefined") {
      var node = document.createElement("script");
      node.setAttribute("src", "https://code.jquery.com/jquery-1.12.4.js");
      document.body.appendChild(node);
    }
  }

  function testJq() {
    if (typeof $ === "function") {
      clearInterval(myReloader);
      console.log("tms-inject-jquery: jQuery", $.fn.jquery, "arrived!");
    }
  }
})();
