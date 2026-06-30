"use strict";

window.addEventListener(
  "DOMContentLoaded",
  function () {
    //ページ本体が読み込まれたタイミングで実行するコード

    const item = document.querySelectorAll(".item01,item02");
    item.forEach(function (element, index) {
      setTimeout(function () {
        element.classList.add("fade-in");
      }, 100 * index);
    });
  },
  false
);
