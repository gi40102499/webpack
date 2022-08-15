!(function () {
  var o = {
      352: function (o, e, t) {
        "use strict";
        t.r(e), (e.default = { add: (o, e) => o + e, minus: (o, e) => o - e });
      },
    },
    e = {};
  function t(n) {
    var r = e[n];
    if (void 0 !== r) return r.exports;
    var u = (e[n] = { exports: {} });
    return o[n](u, u.exports, t), u.exports;
  }
  (t.r = function (o) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(o, "__esModule", { value: !0 });
  }),
    (function () {
      const { add: o, minus: e } = t(352);
      console.log(o(1, 2)), console.log(e(1, 2));
    })();
})();
//# sourceMappingURL=bundle.js.map
