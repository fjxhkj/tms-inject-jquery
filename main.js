// ==UserScript==
// @name        tms-inject-jquery
// @namespace   Goldrobot.org
// @match       *
// @include     *
// @require      http://lib.sinaapp.com/js/jquery/1.12.4/jquery-1.12.4.min.js
// Use your own jquery script and remember to open the tm plugin to access local files
// @require2      file://d:\js\jquery\jquery-1.12.4.min.js
// @grant        unsafeWindow
// run-at: document-end, start
// @run-at       document-end
// ==/UserScript==

(function() {
	'use strict';

	function log(aItem) {
		console.dir(aItem);
	}

	var $ = $ || window.$;
	if (typeof $ === 'undefined') {
		log('Unable to import jQuery library');
		return null;
	}

	var myReloader = setInterval(function () {
		// console.clear();
		main();
	}, 5000);

	function injectJqueryNode(){
		var n = $('<script></script>').attr('src', 'http://lib.sinaapp.com/js/jquery/1.12.4/jquery-1.12.4.min.js');
		$('body').after(n);
		log('jQuery is arrived!');
	}

	function main() {
		injectJqueryNode();
		clearInterval(myReloader);
	}

})();