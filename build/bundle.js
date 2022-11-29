
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n    background-color: seagreen;\r\n    color: white;\r\n    margin: 5px;\r\n    padding: 5px;\r\n}";
n(css,{});

var MY_IMAGE = "data:image/jpeg;base64,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";

console.log('Hello World!');
const h1 = document.createElement("h1");
h1.textContent = 'Картинка';
const img = document.createElement('img');
img.src = MY_IMAGE;
document.body.append(h1, img);
