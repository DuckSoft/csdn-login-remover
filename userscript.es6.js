// ==UserScript==
// @name         CSDN Login Remover
// @namespace    http://github.com/DuckSoft
// @version      0.1
// @description  try to take over the world!
// @author       DuckSoft
// @match        *://blog.csdn.net/*/article/details/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    (f=>{
        if (document.addEventListener) window.addEventListener("load", f, false);
        else if (window.attachEvent) window.attachEvent("onload", f);
    })(()=>{
        document.querySelector("#article_content").style="";
        document.querySelector(".hide-article-box").remove();
    });
})();
