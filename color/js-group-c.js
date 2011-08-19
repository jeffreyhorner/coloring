window.Modernizr = function(i, k, t) {
  function r(b, c) {
    return typeof b === c
  }
  function z(b, c) {
    for (var e in b) if (g[b[e]] !== t && (!c || c(b[e], G))) return !0
  }
  function s(b, c) {
    var e = b.charAt(0).toUpperCase() + b.substr(1);
    e = (b + " " + q.join(e + " ") + e).split(" ");
    return !!z(e, c)
  }
  function y() {
    o.input = function(e) {
      for (var g = 0, i = e.length; g < i; g++) b[e[g]] = !! (e[g] in c);
      return b
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
    o.inputtypes = function(b) {
      for (var g = 0, i, h, l = b.length; g < l; g++) {
        c.setAttribute("type", h = b[g]);
        if (i = c.type !== "text") c.value = e, c.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(h) && c.style.WebkitAppearance !== t ? (v.appendChild(c), i = k.defaultView, i = i.getComputedStyle && i.getComputedStyle(c, null).WebkitAppearance !== "textfield" && c.offsetHeight !== 0, v.removeChild(c)) : /^(search|tel)$/.test(h) || (/^(url|email)$/.test(h) ? i = c.checkValidity && c.checkValidity() === !1 : /^color$/.test(h) ? (v.appendChild(c), i = c.value != e, v.removeChild(c)) : i = c.value != e);
        m[b[g]] = !! i
      }
      return m
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))
  }
  var o = {},
      v = k.documentElement,
      H = k.head || k.getElementsByTagName("head")[0],
      G = k.createElement("modernizr"),
      g = G.style,
      c = k.createElement("input"),
      e = ":)",
      h = Object.prototype.toString,
      l = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
      q = "Webkit Moz O ms Khtml".split(" "),
      u = {
      svg: "http://www.w3.org/2000/svg"
      },
      p = {},
      m = {},
      b = {},
      E = [],
      F, M = function(b) {
      var c = k.createElement("style"),
          e = k.createElement("div");
      c.textContent = b + "{#modernizr{height:3px}}";
      H.appendChild(c);
      e.id = "modernizr";
      v.appendChild(e);
      b = e.offsetHeight === 3;
      c.parentNode.removeChild(c);
      e.parentNode.removeChild(e);
      return !!b
      },
      L = function() {
      var b = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
      };
      return function(c, e) {
        e = e || k.createElement(b[c] || "div");
        c = "on" + c;
        var g = c in e;
        g || (e.setAttribute || (e = k.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(c, ""), g = r(e[c], "function"), r(e[c], t) || (e[c] = t), e.removeAttribute(c)));
        return g
      }
      }(),
      Q = {}.hasOwnProperty,
      aa;
  aa = !r(Q, t) && !r(Q.call, t) ?
  function(b, c) {
    return Q.call(b, c)
  } : function(b, c) {
    return c in b && r(b.constructor.prototype[c], t)
  };
  p.flexbox = function() {
    var b = k.createElement("div"),
        c = k.createElement("div");
    (function(b, c, e, g) {
      c += ":";
      b.style.cssText = (c + l.join(e + ";" + c)).slice(0, -c.length) + (g || "")
    })(b, "display", "box", "width:42px;padding:0;");
    c.style.cssText = l.join("box-flex:1;") + "width:10px;";
    b.appendChild(c);
    v.appendChild(b);
    var e = c.offsetWidth === 42;
    b.removeChild(c);
    v.removeChild(b);
    return e
  };
  p.canvas = function() {
    var b = k.createElement("canvas");
    return !(!b.getContext || !b.getContext("2d"))
  };
  p.canvastext = function() {
    return !(!o.canvas || !r(k.createElement("canvas").getContext("2d").fillText, "function"))
  };
  p.webgl = function() {
    return !!i.WebGLRenderingContext
  };
  p.touch = function() {
    return "ontouchstart" in i || M("@media (" + l.join("touch-enabled),(") + "modernizr)")
  };
  p.geolocation = function() {
    return !!navigator.geolocation
  };
  p.postmessage = function() {
    return !!i.postMessage
  };
  p.websqldatabase = function() {
    return !!i.openDatabase
  };
  p.indexedDB = function() {
    for (var b = -1, c = q.length; ++b < c;) {
      var e =
      q[b].toLowerCase();
      if (i[e + "_indexedDB"] || i[e + "IndexedDB"]) return !0
    }
    return !1
  };
  p.hashchange = function() {
    return L("hashchange", i) && (k.documentMode === t || k.documentMode > 7)
  };
  p.history = function() {
    return !(!i.history || !history.pushState)
  };
  p.draganddrop = function() {
    return L("dragstart") && L("drop")
  };
  p.websockets = function() {
    return "WebSocket" in i
  };
  p.rgba = function() {
    g.cssText = "background-color:rgba(150,255,150,.5)";
    return ("" + g.backgroundColor).indexOf("rgba") !== -1
  };
  p.hsla = function() {
    g.cssText = "background-color:hsla(120,40%,100%,.5)";
    return ("" + g.backgroundColor).indexOf("rgba") !== -1 || ("" + g.backgroundColor).indexOf("hsla") !== -1
  };
  p.multiplebgs = function() {
    g.cssText = "background:url(//:),url(//:),red url(//:)";
    return /(url\s*\(.*?){3}/.test(g.background)
  };
  p.backgroundsize = function() {
    return s("backgroundSize")
  };
  p.borderimage = function() {
    return s("borderImage")
  };
  p.borderradius = function() {
    return s("borderRadius", "", function(b) {
      return ("" + b).indexOf("orderRadius") !== -1
    })
  };
  p.boxshadow = function() {
    return s("boxShadow")
  };
  p.textshadow = function() {
    return k.createElement("div").style.textShadow === ""
  };
  p.opacity = function() {
    var b = l.join("opacity:.55;") + "";
    g.cssText = b;
    return /^0.55$/.test(g.opacity)
  };
  p.cssanimations = function() {
    return s("animationName")
  };
  p.csscolumns = function() {
    return s("columnCount")
  };
  p.cssgradients = function() {
    var b = ("background-image:" + l.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + l.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
    g.cssText = b;
    return ("" + g.backgroundImage).indexOf("gradient") !== -1
  };
  p.cssreflections =

  function() {
    return s("boxReflect")
  };
  p.csstransforms = function() {
    return !!z(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
  };
  p.csstransforms3d = function() {
    var b = !! z(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
    b && "webkitPerspective" in v.style && (b = M("@media (" + l.join("transform-3d),(") + "modernizr)"));
    return b
  };
  p.csstransitions = function() {
    return s("transitionProperty")
  };
  p.fontface = function() {
    var b, c, e = H || v,
        g = k.createElement("style");
    c = k.implementation || {
      hasFeature: function() {
        return !1
      }
    };
    g.type = "text/css";
    e.insertBefore(g, e.firstChild);
    b = g.sheet || g.styleSheet;
    c = (c.hasFeature("CSS2", "") ?
    function(c) {
      if (!b || !c) return !1;
      var e = !1;
      try {
        b.insertRule(c, 0), e = /src/i.test(b.cssRules[0].cssText), b.deleteRule(b.cssRules.length - 1)
      } catch (g) {}
      return e
    } : function(c) {
      if (!b || !c) return !1;
      b.cssText = c;
      return b.cssText.length !== 0 && /src/i.test(b.cssText) && b.cssText.replace(/\r+|\n+/g, "").indexOf(c.split(" ")[0]) === 0
    })('@font-face { font-family: "font"; src: url(data:,); }');
    e.removeChild(g);
    return c
  };
  p.video = function() {
    var b = k.createElement("video"),
        c = !! b.canPlayType;
    if (c) c = new Boolean(c), c.ogg = b.canPlayType('video/ogg; codecs="theora"'), c.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"') || b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), c.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"');
    return c
  };
  p.audio = function() {
    var b = k.createElement("audio"),
        c = !! b.canPlayType;
    if (c) c = new Boolean(c), c.ogg = b.canPlayType('audio/ogg; codecs="vorbis"'), c.mp3 = b.canPlayType("audio/mpeg;"), c.wav = b.canPlayType('audio/wav; codecs="1"'), c.m4a = b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;");
    return c
  };
  p.localstorage = function() {
    try {
      return !!localStorage.getItem
    } catch (b) {
      return !1
    }
  };
  p.sessionstorage = function() {
    try {
      return !!sessionStorage.getItem
    } catch (b) {
      return !1
    }
  };
  p.webWorkers = function() {
    return !!i.Worker
  };
  p.applicationcache = function() {
    return !!i.applicationCache
  };
  p.svg = function() {
    return !!k.createElementNS && !! k.createElementNS(u.svg, "svg").createSVGRect
  };
  p.inlinesvg = function() {
    var b =
    k.createElement("div");
    b.innerHTML = "<svg/>";
    return (b.firstChild && b.firstChild.namespaceURI) == u.svg
  };
  p.smil = function() {
    return !!k.createElementNS && /SVG/.test(h.call(k.createElementNS(u.svg, "animate")))
  };
  p.svgclippaths = function() {
    return !!k.createElementNS && /SVG/.test(h.call(k.createElementNS(u.svg, "clipPath")))
  };
  for (var V in p) aa(p, V) && (F = V.toLowerCase(), o[F] = p[V](), E.push((o[F] ? "" : "no-") + F));
  o.input || y();
  o.crosswindowmessaging = o.postmessage;
  o.historymanagement = o.history;
  o.addTest = function(b, c) {
    b = b.toLowerCase();
    if (!o[b]) return c = !! c(), v.className += " " + (c ? "" : "no-") + b, o[b] = c, o
  };
  g.cssText = "";
  G = c = null;
  i.attachEvent &&
  function() {
    var b = k.createElement("div");
    b.innerHTML = "<elem></elem>";
    return b.childNodes.length !== 1
  }() &&
  function(b, c) {
    function e(b) {
      for (var c = -1; ++c < h;) b.createElement(i[c])
    }
    function g(b, c) {
      for (var e = -1, i = b.length, h, k = []; ++e < i;) h = b[e], (c = h.media || c) != "screen" && k.push(g(h.imports, c), h.cssText);
      return k.join("")
    }
    var i = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),
        h = i.length,
        k = RegExp("(^|\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
        l = RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
        m = RegExp("(^|[^\\n]*?\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
        q = c.createDocumentFragment(),
        p = c.documentElement,
        o = p.firstChild,
        u = c.createElement("body"),
        t = c.createElement("style"),
        r;
    e(c);
    e(q);
    o.insertBefore(t, o.firstChild);
    t.media = "print";
    b.attachEvent("onbeforeprint", function() {
      var b = -1,
          e = g(c.styleSheets, "all"),
          o = [],
          s;
      for (r = r || c.body;
      (s = m.exec(e)) != null;) o.push((s[1] + s[2] + s[3]).replace(k, "$1.iepp_$2") + s[4]);
      for (t.styleSheet.cssText = o.join("\n"); ++b < h;) {
        e = c.getElementsByTagName(i[b]);
        o = e.length;
        for (s = -1; ++s < o;) e[s].className.indexOf("iepp_") < 0 && (e[s].className += " iepp_" + i[b])
      }
      q.appendChild(r);
      p.appendChild(u);
      u.className = r.className;
      u.innerHTML = r.innerHTML.replace(l, "<$1font")
    });
    b.attachEvent("onafterprint", function() {
      u.innerHTML = "";
      p.removeChild(u);
      p.appendChild(r);
      t.styleSheet.cssText = ""
    })
  }(i, k);
  o._enableHTML5 = !0;
  o._version = "1.7";
  v.className = v.className.replace(/\bno-js\b/, "") + " js " + E.join(" ");
  return o
}(this, this.document);
(function(i, k) {
  function t(a, d, f) {
    if (f === k && a.nodeType === 1) if (f = a.getAttribute("data-" + d), typeof f === "string") {
      try {
        f = f === "true" ? !0 : f === "false" ? !1 : f === "null" ? null : !b.isNaN(f) ? parseFloat(f) : E.test(f) ? b.parseJSON(f) : f
      } catch (j) {}
      b.data(a, d, f)
    } else f = k;
    return f
  }
  function r() {
    return !1
  }
  function z() {
    return !0
  }
  function s(a, d, f) {
    f[0].type = a;
    return b.event.handle.apply(d, f)
  }
  function y(a) {
    var d, f, j, c, n, e, C, g, i, h, k, l = [];
    c = [];
    n = b._data(this, I);
    if (typeof n === "function") n = n.events;
    if (!(a.liveFired === this || !n || !n.live || a.target.disabled || a.button && a.type === "click")) {
      a.namespace && (k = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
      a.liveFired = this;
      var m = n.live.slice(0);
      for (C = 0; C < m.length; C++) n = m[C], n.origType.replace(Z, "") === a.type ? c.push(n.selector) : m.splice(C--, 1);
      c = b(a.target).closest(c, a.currentTarget);
      g = 0;
      for (i = c.length; g < i; g++) {
        h = c[g];
        for (C = 0; C < m.length; C++) if (n = m[C], h.selector === n.selector && (!k || k.test(n.namespace))) {
          e = h.elem;
          j = null;
          if (n.preType === "mouseenter" || n.preType === "mouseleave") a.type =
          n.preType, j = b(a.relatedTarget).closest(n.selector)[0];
          (!j || j !== e) && l.push({
            elem: e,
            handleObj: n,
            level: h.level
          })
        }
      }
      g = 0;
      for (i = l.length; g < i; g++) {
        c = l[g];
        if (f && c.level > f) break;
        a.currentTarget = c.elem;
        a.data = c.handleObj.data;
        a.handleObj = c.handleObj;
        k = c.handleObj.origHandler.apply(c.elem, arguments);
        if (k === !1 || a.isPropagationStopped()) if (f = c.level, k === !1 && (d = !1), a.isImmediatePropagationStopped()) break
      }
      return d
    }
  }
  function o(a, d) {
    return (a && a !== "*" ? a + "." : "") + d.replace(Ma, "`").replace(Na, "&")
  }
  function v(a, d, f) {
    if (b.isFunction(d)) return b.grep(a, function(a, b) {
      return !!d.call(a, b, a) === f
    });
    else if (d.nodeType) return b.grep(a, function(a) {
      return a === d === f
    });
    else if (typeof d === "string") {
      var j = b.grep(a, function(a) {
        return a.nodeType === 1
      });
      if (Sa.test(d)) return b.filter(d, j, !f);
      else d = b.filter(d, j)
    }
    return b.grep(a, function(a) {
      return b.inArray(a, d) >= 0 === f
    })
  }
  function H(a, d) {
    if (d.nodeType === 1 && b.hasData(a)) {
      var f = b.expando,
          j = b.data(a),
          c = b.data(d, j);
      if (j = j[f]) {
        var n = j.events;
        c = c[f] = b.extend({}, j);
        if (n) for (var e in delete c.handle, c.events = {}, n) {
          f = 0;
          for (j =
          n[e].length; f < j; f++) b.event.add(d, e, n[e][f], n[e][f].data)
        }
      }
    }
  }
  function G(a, d) {
    if (d.nodeType === 1) {
      var f = d.nodeName.toLowerCase();
      d.clearAttributes();
      d.mergeAttributes(a);
      if (f === "object") d.outerHTML = a.outerHTML;
      else if (f === "input" && (a.type === "checkbox" || a.type === "radio")) {
        if (a.checked) d.defaultChecked = d.checked = a.checked;
        if (d.value !== a.value) d.value = a.value
      } else if (f === "option") d.selected = a.defaultSelected;
      else if (f === "input" || f === "textarea") d.defaultValue = a.defaultValue;
      d.removeAttribute(b.expando)
    }
  }

  function g(a, d) {
    d.src ? b.ajax({
      url: d.src,
      async: !1,
      dataType: "script"
    }) : b.globalEval(d.text || d.textContent || d.innerHTML || "");
    d.parentNode && d.parentNode.removeChild(d)
  }
  function c(a, d, f) {
    var j = d === "width" ? a.offsetWidth : a.offsetHeight;
    if (f === "border") return j;
    b.each(d === "width" ? Wa : Xa, function() {
      f || (j -= parseFloat(b.css(a, "padding" + this)) || 0);
      f === "margin" ? j += parseFloat(b.css(a, "margin" + this)) || 0 : j -= parseFloat(b.css(a, "border" + this + "Width")) || 0
    });
    return j
  }
  function e(a) {
    return function(d, f) {
      typeof d !== "string" && (f = d, d = "*");
      if (b.isFunction(f)) for (var j = d.toLowerCase().split(ta), c = 0, n = j.length, e, C; c < n; c++) e = j[c], (C = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = a[e] = a[e] || [], e[C ? "unshift" : "push"](f)
    }
  }
  function h(a, d, b, j, c, n) {
    c = c || d.dataTypes[0];
    n = n || {};
    n[c] = !0;
    c = a[c];
    for (var e = 0, C = c ? c.length : 0, g = a === ha, i; e < C && (g || !i); e++) i = c[e](d, b, j), typeof i === "string" && (n[i] ? i = k : (d.dataTypes.unshift(i), i = h(a, d, b, j, i, n)));
    if ((g || !i) && !n["*"]) i = h(a, d, b, j, "*", n);
    return i
  }
  function l(a, d, f, j) {
    b.isArray(d) && d.length ? b.each(d, function(d, c) {
      f || Ya.test(a) ? j(a, c) : l(a + "[" + (typeof c === "object" || b.isArray(c) ? d : "") + "]", c, f, j)
    }) : !f && d != null && typeof d === "object" ? b.isArray(d) || b.isEmptyObject(d) ? j(a, "") : b.each(d, function(d, b) {
      l(a + "[" + d + "]", b, f, j)
    }) : j(a, d)
  }
  function q(a, d) {
    var f = {};
    b.each(ua.concat.apply([], ua.slice(0, d)), function() {
      f[this] = a
    });
    return f
  }
  function u(a) {
    if (!ia[a]) {
      var d = b("<" + a + ">").appendTo("body"),
          f = d.css("display");
      d.remove();
      if (f === "none" || f === "") f = "block";
      ia[a] = f
    }
    return ia[a]
  }
  function p(a) {
    return b.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
  }
  var m = i.document,
      b = function() {
      function a() {
        if (!d.isReady) {
          try {
            m.documentElement.doScroll("left")
          } catch (b) {
            setTimeout(a, 1);
            return
          }
          d.ready()
        }
      }
      var d = function(a, b) {
        return new d.fn.init(a, b, c)
      },
          b = i.jQuery,
          j = i.$,
          c, n = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
          e = /\S/,
          C = /^\s+/,
          g = /\s+$/,
          h = /\d/,
          l = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
          q = /^[\],:{}\s]*$/,
          p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          u = /(?:^|:|,)(?:\s*\[)+/g,
          t = /(webkit)[ \/]([\w.]+)/,
          s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
          B = /(msie) ([\w.]+)/,
          Za = /(mozilla)(?:.*? rv:([\w.]+))?/,
          x = navigator.userAgent,
          va = !1,
          ja, ka = "then done fail isResolved isRejected promise".split(" "),
          T, $a = Object.prototype.toString,
          la = Object.prototype.hasOwnProperty,
          r = Array.prototype.push,
          v = Array.prototype.slice,
          wa = String.prototype.trim,
          A = Array.prototype.indexOf,
          xa = {};
      d.fn = d.prototype = {
        constructor: d,
        init: function(a, b, f) {
          var j;
          if (!a) return this;
          if (a.nodeType) return this.context = this[0] =
          a, this.length = 1, this;
          if (a === "body" && !b && m.body) return this.context = m, this[0] = m.body, this.selector = "body", this.length = 1, this;
          if (typeof a === "string") if ((j = n.exec(a)) && (j[1] || !b)) if (j[1]) return f = (b = b instanceof d ? b[0] : b) ? b.ownerDocument || b : m, (a = l.exec(a)) ? d.isPlainObject(b) ? (a = [m.createElement(a[1])], d.fn.attr.call(a, b, !0)) : a = [f.createElement(a[1])] : (a = d.buildFragment([j[1]], [f]), a = (a.cacheable ? d.clone(a.fragment) : a.fragment).childNodes), d.merge(this, a);
          else {
            if ((b = m.getElementById(j[2])) && b.parentNode) {
              if (b.id !== j[2]) return f.find(a);
              this.length = 1;
              this[0] = b
            }
            this.context = m;
            this.selector = a;
            return this
          } else
          return !b || b.jquery ? (b || f).find(a) : this.constructor(b).find(a);
          else if (d.isFunction(a)) return f.ready(a);
          if (a.selector !== k) this.selector = a.selector, this.context = a.context;
          return d.makeArray(a, this)
        },
        selector: "",
        jquery: "1.5",
        length: 0,
        size: function() {
          return this.length
        },
        toArray: function() {
          return v.call(this, 0)
        },
        get: function(a) {
          return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, f) {
          var j = this.constructor();
          d.isArray(a) ? r.apply(j, a) : d.merge(j, a);
          j.prevObject = this;
          j.context = this.context;
          if (b === "find") j.selector = this.selector + (this.selector ? " " : "") + f;
          else if (b) j.selector = this.selector + "." + b + "(" + f + ")";
          return j
        },
        each: function(a, b) {
          return d.each(this, a, b)
        },
        ready: function(a) {
          d.bindReady();
          ja.done(a);
          return this
        },
        eq: function(a) {
          return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
          return this.eq(0)
        },
        last: function() {
          return this.eq(-1)
        },
        slice: function() {
          return this.pushStack(v.apply(this, arguments), "slice", v.call(arguments).join(","))
        },
        map: function(a) {
          return this.pushStack(d.map(this, function(d, b) {
            return a.call(d, b, d)
          }))
        },
        end: function() {
          return this.prevObject || this.constructor(null)
        },
        push: r,
        sort: [].sort,
        splice: [].splice
      };
      d.fn.init.prototype = d.fn;
      d.extend = d.fn.extend = function() {
        var a, b, f, j, c, w = arguments[0] || {},
            B = 1,
            n = arguments.length,
            e = !1;
        typeof w === "boolean" && (e = w, w = arguments[1] || {}, B = 2);
        typeof w !== "object" && !d.isFunction(w) && (w = {});
        n === B && (w = this, --B);
        for (; B < n; B++) if ((a = arguments[B]) != null) for (b in a) f = w[b], j = a[b], w !== j && (e && j && (d.isPlainObject(j) || (c = d.isArray(j))) ? (c ? (c = !1, f = f && d.isArray(f) ? f : []) : f = f && d.isPlainObject(f) ? f : {}, w[b] = d.extend(e, f, j)) : j !== k && (w[b] = j));
        return w
      };
      d.extend({
        noConflict: function(a) {
          i.$ = j;
          if (a) i.jQuery = b;
          return d
        },
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
          a === !0 && d.readyWait--;
          if (!d.readyWait || a !== !0 && !d.isReady) {
            if (!m.body) return setTimeout(d.ready, 1);
            d.isReady = !0;
            a !== !0 && --d.readyWait > 0 || (ja.resolveWith(m, [d]), d.fn.trigger && d(m).trigger("ready").unbind("ready"))
          }
        },
        bindReady: function() {
          if (!va) {
            va = !0;
            if (m.readyState === "complete") return setTimeout(d.ready, 1);
            if (m.addEventListener) m.addEventListener("DOMContentLoaded", T, !1), i.addEventListener("load", d.ready, !1);
            else if (m.attachEvent) {
              m.attachEvent("onreadystatechange", T);
              i.attachEvent("onload", d.ready);
              var b = !1;
              try {
                b = i.frameElement == null
              } catch (f) {}
              m.documentElement.doScroll && b && a()
            }
          }
        },
        isFunction: function(a) {
          return d.type(a) === "function"
        },
        isArray: Array.isArray ||
        function(a) {
          return d.type(a) === "array"
        },
        isWindow: function(a) {
          return a && typeof a === "object" && "setInterval" in a
        },
        isNaN: function(a) {
          return a == null || !h.test(a) || isNaN(a)
        },
        type: function(a) {
          return a == null ? String(a) : xa[$a.call(a)] || "object"
        },
        isPlainObject: function(a) {
          if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return !1;
          if (a.constructor && !la.call(a, "constructor") && !la.call(a.constructor.prototype, "isPrototypeOf")) return !1;
          for (var b in a);
          return b === k || la.call(a, b)
        },
        isEmptyObject: function(a) {
          for (var b in a) return !1;
          return !0
        },
        error: function(a) {
          throw a;
        },
        parseJSON: function(a) {
          if (typeof a !== "string" || !a) return null;
          a = d.trim(a);
          if (q.test(a.replace(p, "@").replace(o, "]").replace(u, ""))) return i.JSON && i.JSON.parse ? i.JSON.parse(a) : (new Function("return " + a))();
          else d.error("Invalid JSON: " + a)
        },
        parseXML: function(a, b, f) {
          i.DOMParser ? (f = new DOMParser, b = f.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
          f = b.documentElement;
          (!f || !f.nodeName || f.nodeName === "parsererror") && d.error("Invalid XML: " + a);
          return b
        },
        noop: function() {},
        globalEval: function(a) {
          if (a && e.test(a)) {
            var b = m.getElementsByTagName("head")[0] || m.documentElement,
                f = m.createElement("script");
            f.type = "text/javascript";
            d.support.scriptEval() ? f.appendChild(m.createTextNode(a)) : f.text = a;
            b.insertBefore(f, b.firstChild);
            b.removeChild(f)
          }
        },
        nodeName: function(a, b) {
          return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        each: function(a, b, f) {
          var j, c = 0,
              w = a.length,
              B = w === k || d.isFunction(a);
          if (f) if (B) for (j in a) {
            if (b.apply(a[j], f) === !1) break
          } else
          for (; c < w;) {
            if (b.apply(a[c++], f) === !1) break
          } else if (B) for (j in a) {
            if (b.call(a[j], j, a[j]) === !1) break
          } else
          for (f = a[0]; c < w && b.call(f, c, f) !== !1; f = a[++c]);
          return a
        },
        trim: wa ?
        function(a) {
          return a == null ? "" : wa.call(a)
        } : function(a) {
          return a == null ? "" : a.toString().replace(C, "").replace(g, "")
        },
        makeArray: function(a, b) {
          var f = b || [];
          if (a != null) {
            var j = d.type(a);
            a.length == null || j === "string" || j === "function" || j === "regexp" || d.isWindow(a) ? r.call(f, a) : d.merge(f, a)
          }
          return f
        },
        inArray: function(a, b) {
          if (b.indexOf) return b.indexOf(a);
          for (var d = 0, f = b.length; d < f; d++) if (b[d] === a) return d;
          return -1
        },
        merge: function(a, b) {
          var d = a.length,
              f = 0;
          if (typeof b.length === "number") for (var j = b.length; f < j; f++) a[d++] = b[f];
          else
          for (; b[f] !== k;) a[d++] = b[f++];
          a.length = d;
          return a
        },
        grep: function(a, b, d) {
          var f = [],
              j;
          d = !! d;
          for (var c = 0, w = a.length; c < w; c++) j = !! b(a[c], c), d !== j && f.push(a[c]);
          return f
        },
        map: function(a, b, d) {
          for (var f = [], j, c = 0, w = a.length; c < w; c++) j = b(a[c], c, d), j != null && (f[f.length] = j);
          return f.concat.apply([], f)
        },
        guid: 1,
        proxy: function(a, b, f) {
          arguments.length === 2 && (typeof b === "string" ? (f = a, a = f[b], b = k) : b && !d.isFunction(b) && (f = b, b =
          k));
          !b && a && (b = function() {
            return a.apply(f || this, arguments)
          });
          if (a) b.guid = a.guid = a.guid || b.guid || d.guid++;
          return b
        },
        access: function(a, b, f, j, c, w) {
          var B = a.length;
          if (typeof b === "object") {
            for (var n in b) d.access(a, n, b[n], j, c, f);
            return a
          }
          if (f !== k) {
            j = !w && j && d.isFunction(f);
            for (n = 0; n < B; n++) c(a[n], b, j ? f.call(a[n], n, c(a[n], b)) : f, w);
            return a
          }
          return B ? c(a[0], b) : k
        },
        now: function() {
          return (new Date).getTime()
        },
        _Deferred: function() {
          var a = [],
              b, f, j, c = {
              done: function() {
                if (!j) {
                  var f = arguments,
                      w, B, n, e, C;
                  b && (C = b, b = 0);
                  w =
                  0;
                  for (B = f.length; w < B; w++) n = f[w], e = d.type(n), e === "array" ? c.done.apply(c, n) : e === "function" && a.push(n);
                  C && c.resolveWith(C[0], C[1])
                }
                return this
              },
              resolveWith: function(d, c) {
                if (!j && !b && !f) {
                  f = 1;
                  try {
                    for (; a[0];) a.shift().apply(d, c)
                  } finally {
                    b = [d, c], f = 0
                  }
                }
                return this
              },
              resolve: function() {
                c.resolveWith(d.isFunction(this.promise) ? this.promise() : this, arguments);
                return this
              },
              isResolved: function() {
                return !(!f && !b)
              },
              cancel: function() {
                j = 1;
                a = [];
                return this
              }
              };
          return c
        },
        Deferred: function(a) {
          var b = d._Deferred(),
              f = d._Deferred(),
              j;
          d.extend(b, {
            then: function(a, d) {
              b.done(a).fail(d);
              return this
            },
            fail: f.done,
            rejectWith: f.resolveWith,
            reject: f.resolve,
            isRejected: f.isResolved,
            promise: function(a, d) {
              if (a == null) {
                if (j) return j;
                j = a = {}
              }
              for (d = ka.length; d--;) a[ka[d]] = b[ka[d]];
              return a
            }
          });
          b.then(f.cancel, b.cancel);
          delete b.cancel;
          a && a.call(b, b);
          return b
        },
        when: function(a) {
          var b = arguments,
              f = b.length,
              j = f <= 1 && a && d.isFunction(a.promise) ? a : d.Deferred(),
              c = j.promise(),
              w;
          f > 1 ? (w = Array(f), d.each(b, function(a, b) {
            d.when(b).then(function(b) {
              w[a] = arguments.length > 1 ? v.call(arguments, 0) : b;
              --f || j.resolveWith(c, w)
            }, j.reject)
          })) : j !== a && j.resolve(a);
          return c
        },
        uaMatch: function(a) {
          a = a.toLowerCase();
          a = t.exec(a) || s.exec(a) || B.exec(a) || a.indexOf("compatible") < 0 && Za.exec(a) || [];
          return {
            browser: a[1] || "",
            version: a[2] || "0"
          }
        },
        sub: function() {
          function a(b, d) {
            return new a.fn.init(b, d)
          }
          d.extend(!0, a, this);
          a.superclass = this;
          a.fn = a.prototype = this();
          a.fn.constructor = a;
          a.subclass = this.subclass;
          a.fn.init = function(f, j) {
            j && j instanceof d && !(j instanceof a) && (j = a(j));
            return d.fn.init.call(this, f, j, b)
          };
          a.fn.init.prototype = a.fn;
          var b = a(m);
          return a
        },
        browser: {}
      });
      ja = d._Deferred();
      d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        xa["[object " + b + "]"] = b.toLowerCase()
      });
      x = d.uaMatch(x);
      if (x.browser) d.browser[x.browser] = !0, d.browser.version = x.version;
      if (d.browser.webkit) d.browser.safari = !0;
      if (A) d.inArray = function(a, b) {
        return A.call(b, a)
      };
      e.test("\u00a0") && (C = /^[\s\xA0]+/, g = /[\s\xA0]+$/);
      c = d(m);
      m.addEventListener ? T = function() {
        m.removeEventListener("DOMContentLoaded", T, !1);
        d.ready()
      } : m.attachEvent && (T = function() {
        m.readyState === "complete" && (m.detachEvent("onreadystatechange", T), d.ready())
      });
      return i.jQuery = i.$ = d
      }();
  (function() {
    b.support = {};
    var a = m.createElement("div");
    a.style.display = "none";
    a.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    var d = a.getElementsByTagName("*"),
        f = a.getElementsByTagName("a")[0],
        j = m.createElement("select"),
        c = j.appendChild(m.createElement("option"));
    if (d && d.length && f) {
      b.support = {
        leadingWhitespace: a.firstChild.nodeType === 3,
        tbody: !a.getElementsByTagName("tbody").length,
        htmlSerialize: !! a.getElementsByTagName("link").length,
        style: /red/.test(f.getAttribute("style")),
        hrefNormalized: f.getAttribute("href") === "/a",
        opacity: /^0.55$/.test(f.style.opacity),
        cssFloat: !! f.style.cssFloat,
        checkOn: a.getElementsByTagName("input")[0].value === "on",
        optSelected: c.selected,
        deleteExpando: !0,
        optDisabled: !1,
        checkClone: !1,
        _scriptEval: null,
        noCloneEvent: !0,
        boxModel: null,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableHiddenOffsets: !0
      };
      j.disabled = !0;
      b.support.optDisabled = !c.disabled;
      b.support.scriptEval = function() {
        if (b.support._scriptEval === null) {
          var a = m.documentElement,
              d = m.createElement("script"),
              f = "script" + b.now();
          d.type = "text/javascript";
          try {
            d.appendChild(m.createTextNode("window." + f + "=1;"))
          } catch (j) {}
          a.insertBefore(d, a.firstChild);
          i[f] ? (b.support._scriptEval = !0, delete i[f]) : b.support._scriptEval = !1;
          a.removeChild(d)
        }
        return b.support._scriptEval
      };
      try {
        delete a.test
      } catch (n) {
        b.support.deleteExpando = !1
      }
      a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function C() {
        b.support.noCloneEvent = !1;
        a.detachEvent("onclick", C)
      }), a.cloneNode(!0).fireEvent("onclick"));
      a = m.createElement("div");
      a.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
      d = m.createDocumentFragment();
      d.appendChild(a.firstChild);
      b.support.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
      b(function() {
        var a = m.createElement("div"),
            d = m.getElementsByTagName("body")[0];
        if (d) {
          a.style.width = a.style.paddingLeft = "1px";
          d.appendChild(a);
          b.boxModel = b.support.boxModel = a.offsetWidth === 2;
          if ("zoom" in a.style) a.style.display = "inline", a.style.zoom = 1, b.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", b.support.shrinkWrapBlocks = a.offsetWidth !== 2;
          a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
          var f = a.getElementsByTagName("td");
          b.support.reliableHiddenOffsets = f[0].offsetHeight === 0;
          f[0].style.display = "";
          f[1].style.display = "none";
          b.support.reliableHiddenOffsets = b.support.reliableHiddenOffsets && f[0].offsetHeight === 0;
          a.innerHTML = "";
          d.removeChild(a).style.display = "none"
        }
      });
      d = function(a) {
        var b = m.createElement("div");
        a = "on" + a;
        if (!b.attachEvent) return !0;
        var d = a in b;
        d || (b.setAttribute(a, "return;"), d = typeof b[a] === "function");
        return d
      };
      b.support.submitBubbles = d("submit");
      b.support.changeBubbles = d("change");
      a = d = f = null
    }
  })();
  var E = /^(?:\{.*\}|\[.*\])$/;
  b.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(a) {
      a = a.nodeType ? b.cache[a[b.expando]] : a[b.expando];
      return !!a && !b.isEmptyObject(a)
    },
    data: function(a, d, f, j) {
      if (b.acceptData(a)) {
        var c = b.expando,
            n = typeof d === "string",
            e = a.nodeType,
            g = e ? b.cache : a,
            i = e ? a[b.expando] : a[b.expando] && b.expando;
        if (i && (!j || !i || g[i][c]) || !(n && f === k)) {
          if (!i) e ? a[b.expando] = i = ++b.uuid : i = b.expando;
          g[i] || (g[i] = {});
          typeof d === "object" && (j ? g[i][c] = b.extend(g[i][c], d) : g[i] = b.extend(g[i], d));
          a = g[i];
          j && (a[c] || (a[c] = {}), a = a[c]);
          f !== k && (a[d] = f);
          if (d === "events" && !a[d]) return a[c] && a[c].events;
          return n ? a[d] : a
        }
      }
    },
    removeData: function(a, d, f) {
      if (b.acceptData(a)) {
        var j = b.expando,
            c = a.nodeType,
            n = c ? b.cache : a,
            e = c ? a[b.expando] : b.expando;
        if (n[e]) {
          if (d) {
            var g = f ? n[e][j] : n[e];
            if (g && (delete g[d], !b.isEmptyObject(g))) return
          }
          if (f && (delete n[e][j], !b.isEmptyObject(n[e]))) return;
          d = n[e][j];
          b.support.deleteExpando || n != i ? delete n[e] : n[e] = null;
          d ? (n[e] = {}, n[e][j] = d) : c && (b.support.deleteExpando ? delete a[b.expando] : a.removeAttribute ? a.removeAttribute(b.expando) : a[b.expando] = null)
        }
      }
    },
    _data: function(a, d, f) {
      return b.data(a, d, f, !0)
    },
    acceptData: function(a) {
      if (a.nodeName) {
        var d = b.noData[a.nodeName.toLowerCase()];
        if (d) return !(d === !0 || a.getAttribute("classid") !== d)
      }
      return !0
    }
  });
  b.fn.extend({
    data: function(a, d) {
      var f = null;
      if (typeof a === "undefined") {
        if (this.length && (f = b.data(this[0]), this[0].nodeType === 1)) for (var j = this[0].attributes, c, n = 0, e = j.length; n < e; n++) c = j[n].name, c.indexOf("data-") === 0 && (c = c.substr(5), t(this[0], c, f[c]));
        return f
      } else if (typeof a === "object") return this.each(function() {
        b.data(this, a)
      });
      var g = a.split(".");
      g[1] = g[1] ? "." + g[1] : "";
      return d === k ? (f = this.triggerHandler("getData" + g[1] + "!", [g[0]]), f === k && this.length && (f = b.data(this[0], a), f = t(this[0], a, f)), f === k && g[1] ? this.data(g[0]) : f) : this.each(function() {
        var f = b(this),
            j = [g[0], d];
        f.triggerHandler("setData" + g[1] + "!", j);
        b.data(this, a, d);
        f.triggerHandler("changeData" + g[1] + "!", j)
      })
    },
    removeData: function(a) {
      return this.each(function() {
        b.removeData(this, a)
      })
    }
  });
  b.extend({
    queue: function(a, d, f) {
      if (a) {
        d = (d || "fx") + "queue";
        var j = b._data(a, d);
        if (!f) return j || [];
        !j || b.isArray(f) ? j = b._data(a, d, b.makeArray(f)) : j.push(f);
        return j
      }
    },
    dequeue: function(a, d) {
      d = d || "fx";
      var f = b.queue(a, d),
          j = f.shift();
      j === "inprogress" && (j = f.shift());
      j && (d === "fx" && f.unshift("inprogress"), j.call(a, function() {
        b.dequeue(a, d)
      }));
      f.length || b.removeData(a, d + "queue", !0)
    }
  });
  b.fn.extend({
    queue: function(a, d) {
      typeof a !== "string" && (d = a, a = "fx");
      if (d === k) return b.queue(this[0], a);
      return this.each(function() {
        var f =
        b.queue(this, a, d);
        a === "fx" && f[0] !== "inprogress" && b.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        b.dequeue(this, a)
      })
    },
    delay: function(a, d) {
      a = b.fx ? b.fx.speeds[a] || a : a;
      d = d || "fx";
      return this.queue(d, function() {
        var f = this;
        setTimeout(function() {
          b.dequeue(f, d)
        }, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    }
  });
  var F = /[\n\t\r]/g,
      M = /\s+/,
      L = /\r/g,
      Q = /^(?:href|src|style)$/,
      aa = /^(?:button|input)$/i,
      V = /^(?:button|input|object|select|textarea)$/i,
      La = /^a(?:rea)?$/i,
      oa = /^(?:radio|checkbox)$/i;
  b.props = {
    "for": "htmlFor",
    "class": "className",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    tabindex: "tabIndex",
    usemap: "useMap",
    frameborder: "frameBorder"
  };
  b.fn.extend({
    attr: function(a, d) {
      return b.access(this, a, d, !0, b.attr)
    },
    removeAttr: function(a) {
      return this.each(function() {
        b.attr(this, a, "");
        this.nodeType === 1 && this.removeAttribute(a)
      })
    },
    addClass: function(a) {
      if (b.isFunction(a)) return this.each(function(d) {
        var f = b(this);
        f.addClass(a.call(this, d, f.attr("class")))
      });
      if (a && typeof a === "string") for (var d = (a || "").split(M), f = 0, j = this.length; f < j; f++) {
        var c = this[f];
        if (c.nodeType === 1) if (c.className) {
          for (var n = " " + c.className + " ", e = c.className, g = 0, i = d.length; g < i; g++) n.indexOf(" " + d[g] + " ") < 0 && (e += " " + d[g]);
          c.className = b.trim(e)
        } else c.className = a
      }
      return this
    },
    removeClass: function(a) {
      if (b.isFunction(a)) return this.each(function(d) {
        var f = b(this);
        f.removeClass(a.call(this, d, f.attr("class")))
      });
      if (a && typeof a === "string" || a === k) for (var d = (a || "").split(M), f = 0, j = this.length; f < j; f++) {
        var c = this[f];
        if (c.nodeType === 1 && c.className) if (a) {
          for (var n = (" " + c.className + " ").replace(F, " "), e = 0, g = d.length; e < g; e++) n = n.replace(" " + d[e] + " ", " ");
          c.className = b.trim(n)
        } else c.className = ""
      }
      return this
    },
    toggleClass: function(a, d) {
      var f = typeof a,
          j = typeof d === "boolean";
      if (b.isFunction(a)) return this.each(function(f) {
        var j = b(this);
        j.toggleClass(a.call(this, f, j.attr("class"), d), d)
      });
      return this.each(function() {
        if (f === "string") for (var c, n = 0, e = b(this), g = d, i = a.split(M); c = i[n++];) g =
        j ? g : !e.hasClass(c), e[g ? "addClass" : "removeClass"](c);
        else if (f === "undefined" || f === "boolean") this.className && b._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : b._data(this, "__className__") || ""
      })
    },
    hasClass: function(a) {
      a = " " + a + " ";
      for (var b = 0, f = this.length; b < f; b++) if ((" " + this[b].className + " ").replace(F, " ").indexOf(a) > -1) return !0;
      return !1
    },
    val: function(a) {
      if (!arguments.length) {
        var d = this[0];
        if (d) {
          if (b.nodeName(d, "option")) {
            var f = d.attributes.value;
            return !f || f.specified ? d.value : d.text
          }
          if (b.nodeName(d, "select")) {
            var j = d.selectedIndex;
            f = [];
            var c = d.options;
            d = d.type === "select-one";
            if (j < 0) return null;
            var n = d ? j : 0;
            for (j = d ? j + 1 : c.length; n < j; n++) {
              var e = c[n];
              if (e.selected && (b.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !b.nodeName(e.parentNode, "optgroup"))) {
                a = b(e).val();
                if (d) return a;
                f.push(a)
              }
            }
            return f
          }
          if (oa.test(d.type) && !b.support.checkOn) return d.getAttribute("value") === null ? "on" : d.value;
          return (d.value || "").replace(L, "")
        }
        return k
      }
      var g =
      b.isFunction(a);
      return this.each(function(d) {
        var f = b(this),
            j = a;
        if (this.nodeType === 1) if (g && (j = a.call(this, d, f.val())), j == null ? j = "" : typeof j === "number" ? j += "" : b.isArray(j) && (j = b.map(j, function(a) {
          return a == null ? "" : a + ""
        })), b.isArray(j) && oa.test(this.type)) this.checked = b.inArray(f.val(), j) >= 0;
        else if (b.nodeName(this, "select")) {
          var c = b.makeArray(j);
          b("option", this).each(function() {
            this.selected = b.inArray(b(this).val(), c) >= 0
          });
          if (!c.length) this.selectedIndex = -1
        } else this.value = j
      })
    }
  });
  b.extend({
    attrFn: {
      val: !0,
      css: !0,
      html: !0,
      text: !0,
      data: !0,
      width: !0,
      height: !0,
      offset: !0
    },
    attr: function(a, d, f, j) {
      if (!a || a.nodeType === 3 || a.nodeType === 8 || a.nodeType === 2) return k;
      if (j && d in b.attrFn) return b(a)[d](f);
      j = a.nodeType !== 1 || !b.isXMLDoc(a);
      var c = f !== k;
      d = j && b.props[d] || d;
      if (a.nodeType === 1) {
        var e = Q.test(d);
        if ((d in a || a[d] !== k) && j && !e) {
          c && (d === "type" && aa.test(a.nodeName) && a.parentNode && b.error("type property can't be changed"), f === null ? a.nodeType === 1 && a.removeAttribute(d) : a[d] = f);
          if (b.nodeName(a, "form") && a.getAttributeNode(d)) return a.getAttributeNode(d).nodeValue;
          if (d === "tabIndex") return (d = a.getAttributeNode("tabIndex")) && d.specified ? d.value : V.test(a.nodeName) || La.test(a.nodeName) && a.href ? 0 : k;
          return a[d]
        }
        if (!b.support.style && j && d === "style") {
          if (c) a.style.cssText = "" + f;
          return a.style.cssText
        }
        c && a.setAttribute(d, "" + f);
        if (!a.attributes[d] && a.hasAttribute && !a.hasAttribute(d)) return k;
        a = !b.support.hrefNormalized && j && e ? a.getAttribute(d, 2) : a.getAttribute(d);
        return a === null ? k : a
      }
      c && (a[d] = f);
      return a[d]
    }
  });
  var Z = /\.(.*)$/,
      ga = /^(?:textarea|input|select)$/i,
      Ma = /\./g,
      Na = / /g,
      Oa = /[^\w\s.|`]/g,
      Va = function(a) {
      return a.replace(Oa, "\\$&")
      },
      I = "events";
  b.event = {
    add: function(a, d, f, j) {
      if (!(a.nodeType === 3 || a.nodeType === 8)) {
        b.isWindow(a) && a !== i && !a.frameElement && (a = i);
        if (f === !1) f = r;
        else if (!f) return;
        var c, e;
        if (f.handler) c = f, f = c.handler;
        if (!f.guid) f.guid = b.guid++;
        if (e = b._data(a)) {
          var g = e[I],
              h = e.handle;
          if (typeof g === "function") h = g.handle, g = g.events;
          else if (!g) a.nodeType || (e[I] = e = function() {}), e.events = g = {};
          if (!h) e.handle = h = function() {
            return typeof b !== "undefined" && !b.event.triggered ? b.event.handle.apply(h.elem, arguments) : k
          };
          h.elem = a;
          d = d.split(" ");
          for (var K, l = 0, m; K = d[l++];) {
            e = c ? b.extend({}, c) : {
              handler: f,
              data: j
            };
            K.indexOf(".") > -1 ? (m = K.split("."), K = m.shift(), e.namespace = m.slice(0).sort().join(".")) : (m = [], e.namespace = "");
            e.type = K;
            if (!e.guid) e.guid = f.guid;
            var q = g[K],
                p = b.event.special[K] || {};
            if (!q && (q = g[K] = [], !p.setup || p.setup.call(a, j, m, h) === !1)) a.addEventListener ? a.addEventListener(K, h, !1) : a.attachEvent && a.attachEvent("on" + K, h);
            if (p.add && (p.add.call(a, e), !e.handler.guid)) e.handler.guid =
            f.guid;
            q.push(e);
            b.event.global[K] = !0
          }
          a = null
        }
      }
    },
    global: {},
    remove: function(a, d, f, j) {
      if (!(a.nodeType === 3 || a.nodeType === 8)) {
        f === !1 && (f = r);
        var c, e, g = 0,
            i, h, l, m, q, p, o = b.hasData(a) && b._data(a),
            u = o && o[I];
        if (o && u) {
          if (typeof u === "function") o = u, u = u.events;
          if (d && d.type) f = d.handler, d = d.type;
          if (!d || typeof d === "string" && d.charAt(0) === ".") for (c in d = d || "", u) b.event.remove(a, c + d);
          else {
            for (d = d.split(" "); c = d[g++];) if (m = c, i = c.indexOf(".") < 0, h = [], i || (h = c.split("."), c = h.shift(), l = RegExp("(^|\\.)" + b.map(h.slice(0).sort(), Va).join("\\.(?:.*\\.)?") + "(\\.|$)")), q = u[c]) if (f) {
              m = b.event.special[c] || {};
              for (e = j || 0; e < q.length; e++) if (p = q[e], f.guid === p.guid) {
                if (i || l.test(p.namespace)) j == null && q.splice(e--, 1), m.remove && m.remove.call(a, p);
                if (j != null) break
              }
              if (q.length === 0 || j != null && q.length === 1)(!m.teardown || m.teardown.call(a, h) === !1) && b.removeEvent(a, c, o.handle), delete u[c]
            } else
            for (e = 0; e < q.length; e++) if (p = q[e], i || l.test(p.namespace)) b.event.remove(a, m, p.handler, e), q.splice(e--, 1);
            if (b.isEmptyObject(u)) {
              if (d = o.handle) d.elem = null;
              delete o.events;
              delete o.handle;
              typeof o === "function" ? b.removeData(a, I, !0) : b.isEmptyObject(o) && b.removeData(a, k, !0)
            }
          }
        }
      }
    },
    trigger: function(a, d, f, j) {
      var c = a.type || a;
      if (!j) {
        a = typeof a === "object" ? a[b.expando] ? a : b.extend(b.Event(c), a) : b.Event(c);
        if (c.indexOf("!") >= 0) a.type = c = c.slice(0, -1), a.exclusive = !0;
        f || (a.stopPropagation(), b.event.global[c] && b.each(b.cache, function() {
          var f = this[b.expando];
          f && f.events && f.events[c] && b.event.trigger(a, d, f.handle.elem)
        }));
        if (!f || f.nodeType === 3 || f.nodeType === 8) return k;
        a.result = k;
        a.target = f;
        d = b.makeArray(d);
        d.unshift(a)
      }
      a.currentTarget = f;
      (j = f.nodeType ? b._data(f, "handle") : (b._data(f, I) || {}).handle) && j.apply(f, d);
      j = f.parentNode || f.ownerDocument;
      try {
        if ((!f || !f.nodeName || !b.noData[f.nodeName.toLowerCase()]) && f["on" + c] && f["on" + c].apply(f, d) === !1) a.result = !1, a.preventDefault()
      } catch (e) {}
      if (!a.isPropagationStopped() && j) b.event.trigger(a, d, j, !0);
      else if (!a.isDefaultPrevented()) {
        var g;
        j = a.target;
        var i = c.replace(Z, ""),
            h = b.nodeName(j, "a") && i === "click",
            l = b.event.special[i] || {};
        if ((!l._default || l._default.call(f, a) === !1) && !h && (!j || !j.nodeName || !b.noData[j.nodeName.toLowerCase()])) {
          try {
            if (j[i])(g = j["on" + i]) && (j["on" + i] = null), b.event.triggered = !0, j[i]()
          } catch (m) {}
          g && (j["on" + i] = g);
          b.event.triggered = !1
        }
      }
    },
    handle: function(a) {
      var d, f, j, c;
      f = [];
      var e = b.makeArray(arguments);
      a = e[0] = b.event.fix(a || i.event);
      a.currentTarget = this;
      d = a.type.indexOf(".") < 0 && !a.exclusive;
      if (!d) j = a.type.split("."), a.type = j.shift(), f = j.slice(0).sort(), j = RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)");
      a.namespace = a.namespace || f.join(".");
      c = b._data(this, I);
      if (typeof c === "function") c = c.events;
      f = (c || {})[a.type];
      if (c && f) {
        f = f.slice(0);
        c = 0;
        for (var g = f.length; c < g; c++) {
          var h = f[c];
          if (d || j.test(h.namespace)) {
            a.handler = h.handler;
            a.data = h.data;
            a.handleObj = h;
            h = h.handler.apply(this, e);
            if (h !== k) a.result = h, h === !1 && (a.preventDefault(), a.stopPropagation());
            if (a.isImmediatePropagationStopped()) break
          }
        }
      }
      return a.result
    },
    props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
    fix: function(a) {
      if (a[b.expando]) return a;
      var d = a;
      a = b.Event(d);
      for (var f = this.props.length, c; f;) c = this.props[--f], a[c] = d[c];
      if (!a.target) a.target = a.srcElement || m;
      if (a.target.nodeType === 3) a.target = a.target.parentNode;
      if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
      if (a.pageX == null && a.clientX != null) d = m.documentElement, f = m.body, a.pageX = a.clientX + (d && d.scrollLeft || f && f.scrollLeft || 0) - (d && d.clientLeft || f && f.clientLeft || 0), a.pageY = a.clientY + (d && d.scrollTop || f && f.scrollTop || 0) - (d && d.clientTop || f && f.clientTop || 0);
      if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
      if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
      if (!a.which && a.button !== k) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
      return a
    },
    guid: 1E8,
    proxy: b.proxy,
    special: {
      ready: {
        setup: b.bindReady,
        teardown: b.noop
      },
      live: {
        add: function(a) {
          b.event.add(this, o(a.origType, a.selector), b.extend({}, a, {
            handler: y,
            guid: a.handler.guid
          }))
        },
        remove: function(a) {
          b.event.remove(this, o(a.origType, a.selector), a)
        }
      },
      beforeunload: {
        setup: function(a, d, f) {
          if (b.isWindow(this)) this.onbeforeunload = f
        },
        teardown: function(a, b) {
          if (this.onbeforeunload === b) this.onbeforeunload = null
        }
      }
    }
  };
  b.removeEvent = m.removeEventListener ?
  function(a, b, f) {
    a.removeEventListener && a.removeEventListener(b, f, !1)
  } : function(a, b, f) {
    a.detachEvent && a.detachEvent("on" + b, f)
  };
  b.Event = function(a) {
    if (!this.preventDefault) return new b.Event(a);
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? z : r) : this.type = a;
    this.timeStamp = b.now();
    this[b.expando] = !0
  };
  b.Event.prototype = {
    preventDefault: function() {
      this.isDefaultPrevented = z;
      var a = this.originalEvent;
      if (a) a.preventDefault ? a.preventDefault() : a.returnValue = !1
    },
    stopPropagation: function() {
      this.isPropagationStopped = z;
      var a = this.originalEvent;
      if (a) a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = z;
      this.stopPropagation()
    },
    isDefaultPrevented: r,
    isPropagationStopped: r,
    isImmediatePropagationStopped: r
  };
  var pa = function(a) {
    var d = a.relatedTarget;
    try {
      for (; d && d !== this;) d = d.parentNode;
      if (d !== this) a.type = a.data, b.event.handle.apply(this, arguments)
    } catch (f) {}
  },
      qa = function(a) {
      a.type = a.data;
      b.event.handle.apply(this, arguments)
      };
  b.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(a, d) {
    b.event.special[a] = {
      setup: function(f) {
        b.event.add(this, d, f && f.selector ? qa : pa, a)
      },
      teardown: function(a) {
        b.event.remove(this, d, a && a.selector ? qa : pa)
      }
    }
  });
  if (!b.support.submitBubbles) b.event.special.submit = {
    setup: function() {
      if (this.nodeName && this.nodeName.toLowerCase() !== "form") b.event.add(this, "click.specialSubmit", function(a) {
        var d = a.target,
            f = d.type;
        if ((f === "submit" || f === "image") && b(d).closest("form").length) return a.liveFired = k, s("submit", this, arguments)
      }), b.event.add(this, "keypress.specialSubmit", function(a) {
        var d = a.target,
            f = d.type;
        if ((f === "text" || f === "password") && b(d).closest("form").length && a.keyCode === 13) return a.liveFired = k, s("submit", this, arguments)
      });
      else
      return !1
    },
    teardown: function() {
      b.event.remove(this, ".specialSubmit")
    }
  };
  if (!b.support.changeBubbles) {
    var W, ra = function(a) {
      var d = a.type,
          f = a.value;
      if (d === "radio" || d === "checkbox") f = a.checked;
      else if (d === "select-multiple") f = a.selectedIndex > -1 ? b.map(a.options, function(a) {
        return a.selected
      }).join("-") : "";
      else if (a.nodeName.toLowerCase() === "select") f = a.selectedIndex;
      return f
    },
        ba = function(a, d) {
        var f = a.target,
            c, e;
        if (ga.test(f.nodeName) && !f.readOnly && (c = b._data(f, "_change_data"), e = ra(f), (a.type !== "focusout" || f.type !== "radio") && b._data(f, "_change_data", e), !(c === k || e === c))) if (c != null || e) return a.type = "change", a.liveFired = k, b.event.trigger(a, d, f)
        };
    b.event.special.change = {
      filters: {
        focusout: ba,
        beforedeactivate: ba,
        click: function(a) {
          var b = a.target,
              f = b.type;
          if (f === "radio" || f === "checkbox" || b.nodeName.toLowerCase() === "select") return ba.call(this, a)
        },
        keydown: function(a) {
          var b = a.target,
              f = b.type;
          if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (f === "checkbox" || f === "radio") || f === "select-multiple") return ba.call(this, a)
        },
        beforeactivate: function(a) {
          a = a.target;
          b._data(a, "_change_data", ra(a))
        }
      },
      setup: function() {
        if (this.type === "file") return !1;
        for (var a in W) b.event.add(this, a + ".specialChange", W[a]);
        return ga.test(this.nodeName)
      },
      teardown: function() {
        b.event.remove(this, ".specialChange");
        return ga.test(this.nodeName)
      }
    };
    W = b.event.special.change.filters;
    W.focus = W.beforeactivate
  }
  m.addEventListener && b.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, d) {
    function f(a) {
      a = b.event.fix(a);
      a.type = d;
      return b.event.handle.call(this, a)
    }
    b.event.special[d] = {
      setup: function() {
        this.addEventListener(a, f, !0)
      },
      teardown: function() {
        this.removeEventListener(a, f, !0)
      }
    }
  });
  b.each(["bind", "one"], function(a, d) {
    b.fn[d] = function(a, c, e) {
      if (typeof a === "object") {
        for (var n in a) this[d](n, c, a[n], e);
        return this
      }
      if (b.isFunction(c) || c === !1) e = c, c = k;
      var g = d === "one" ? b.proxy(e, function(a) {
        b(this).unbind(a, g);
        return e.apply(this, arguments)
      }) : e;
      if (a === "unload" && d !== "one") this.one(a, c, e);
      else {
        n = 0;
        for (var i = this.length; n < i; n++) b.event.add(this[n], a, g, c)
      }
      return this
    }
  });
  b.fn.extend({
    unbind: function(a, d) {
      if (typeof a === "object" && !a.preventDefault) for (var f in a) this.unbind(f, a[f]);
      else {
        f = 0;
        for (var c = this.length; f < c; f++) b.event.remove(this[f], a, d)
      }
      return this
    },
    delegate: function(a, b, f, c) {
      return this.live(b, f, c, a)
    },
    undelegate: function(a, b, f) {
      return arguments.length === 0 ? this.unbind("live") : this.die(b, null, f, a)
    },
    trigger: function(a, d) {
      return this.each(function() {
        b.event.trigger(a, d, this)
      })
    },
    triggerHandler: function(a, d) {
      if (this[0]) {
        var f =
        b.Event(a);
        f.preventDefault();
        f.stopPropagation();
        b.event.trigger(f, d, this[0]);
        return f.result
      }
    },
    toggle: function(a) {
      for (var d = arguments, f = 1; f < d.length;) b.proxy(a, d[f++]);
      return this.click(b.proxy(a, function(c) {
        var e = (b._data(this, "lastToggle" + a.guid) || 0) % f;
        b._data(this, "lastToggle" + a.guid, e + 1);
        c.preventDefault();
        return d[e].apply(this, arguments) || !1
      }))
    },
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  });
  var sa = {
    focus: "focusin",
    blur: "focusout",
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  b.each(["live", "die"], function(a, d) {
    b.fn[d] = function(a, c, e, n) {
      var g, i = 0,
          h, l, m = n || this.selector;
      n = n ? this : b(this.context);
      if (typeof a === "object" && !a.preventDefault) {
        for (g in a) n[d](g, c, a[g], m);
        return this
      }
      b.isFunction(c) && (e = c, c = k);
      for (a = (a || "").split(" ");
      (g = a[i++]) != null;) if (h = Z.exec(g), l = "", h && (l = h[0], g = g.replace(Z, "")), g === "hover") a.push("mouseenter" + l, "mouseleave" + l);
      else if (h = g, g === "focus" || g === "blur" ? (a.push(sa[g] + l), g += l) : g = (sa[g] || g) + l, d === "live") {
        l = 0;
        for (var q = n.length; l < q; l++) b.event.add(n[l], "live." + o(g, m), {
          data: c,
          selector: m,
          handler: e,
          origType: g,
          origHandler: e,
          preType: h
        })
      } else n.unbind("live." + o(g, m), e);
      return this
    }
  });
  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, d) {
    b.fn[d] = function(a, b) {
      b == null && (b = a, a = null);
      return arguments.length > 0 ? this.bind(d, a, b) : this.trigger(d)
    };
    b.attrFn && (b.attrFn[d] = !0)
  });
  (function() {
    function a(a, b, d, f, c, j) {
      c = 0;
      for (var e = f.length; c < e; c++) {
        var g = f[c];
        if (g) {
          var n = !1;
          for (g = g[a]; g;) {
            if (g.sizcache === d) {
              n = f[g.sizset];
              break
            }
            if (g.nodeType === 1 && !j) g.sizcache = d, g.sizset = c;
            if (g.nodeName.toLowerCase() === b) {
              n = g;
              break
            }
            g = g[a]
          }
          f[c] = n
        }
      }
    }
    function d(a, b, d, f, c, j) {
      c = 0;
      for (var e = f.length; c < e; c++) {
        var g = f[c];
        if (g) {
          var n = !1;
          for (g = g[a]; g;) {
            if (g.sizcache === d) {
              n = f[g.sizset];
              break
            }
            if (g.nodeType === 1) {
              if (!j) g.sizcache = d, g.sizset = c;
              if (typeof b !== "string") {
                if (g === b) {
                  n = !0;
                  break
                }
              } else if (h.filter(b, [g]).length > 0) {
                n = g;
                break
              }
            }
            g =
            g[a]
          }
          f[c] = n
        }
      }
    }
    var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        c = 0,
        e = Object.prototype.toString,
        g = !1,
        i = !0;
    [0, 0].sort(function() {
      i = !1;
      return 0
    });
    var h = function(a, b, d, c) {
      d = d || [];
      var j = b = b || m;
      if (b.nodeType !== 1 && b.nodeType !== 9) return [];
      if (!a || typeof a !== "string") return d;
      var g, n, i, k, J, p = !0,
          o = h.isXML(b),
          A = [],
          r = a;
      do
      if (f.exec(""), g = f.exec(r)) if (r = g[3], A.push(g[1]), g[2]) {
        k = g[3];
        break
      }
      while (g);
      if (A.length > 1 && q.exec(a)) if (A.length === 2 && l.relative[A[0]]) n = v(A[0] + A[1], b);
      else
      for (n = l.relative[A[0]] ? [b] : h(A.shift(), b); A.length;) a = A.shift(), l.relative[a] && (a += A.shift()), n = v(a, n);
      else if (!c && A.length > 1 && b.nodeType === 9 && !o && l.match.ID.test(A[0]) && !l.match.ID.test(A[A.length - 1]) && (g = h.find(A.shift(), b, o), b = g.expr ? h.filter(g.expr, g.set)[0] : g.set[0]), b) {
        g = c ? {
          expr: A.pop(),
          set: u(c)
        } : h.find(A.pop(), A.length === 1 && (A[0] === "~" || A[0] === "+") && b.parentNode ? b.parentNode : b, o);
        n = g.expr ? h.filter(g.expr, g.set) : g.set;
        for (A.length > 0 ? i = u(n) : p = !1; A.length;) g =
        J = A.pop(), l.relative[J] ? g = A.pop() : J = "", g == null && (g = b), l.relative[J](i, g, o)
      } else i = [];
      i || (i = n);
      i || h.error(J || a);
      if (e.call(i) === "[object Array]") if (p) if (b && b.nodeType === 1) for (a = 0; i[a] != null; a++) i[a] && (i[a] === !0 || i[a].nodeType === 1 && h.contains(b, i[a])) && d.push(n[a]);
      else
      for (a = 0; i[a] != null; a++) i[a] && i[a].nodeType === 1 && d.push(n[a]);
      else d.push.apply(d, i);
      else u(i, d);
      k && (h(k, j, d, c), h.uniqueSort(d));
      return d
    };
    h.uniqueSort = function(a) {
      if (s && (g = i, a.sort(s), g)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
      return a
    };
    h.matches = function(a, b) {
      return h(a, null, null, b)
    };
    h.matchesSelector = function(a, b) {
      return h(b, null, null, [a]).length > 0
    };
    h.find = function(a, b, d) {
      var f;
      if (!a) return [];
      for (var c = 0, j = l.order.length; c < j; c++) {
        var e, g = l.order[c];
        if (e = l.leftMatch[g].exec(a)) {
          var n = e[1];
          e.splice(1, 1);
          if (n.substr(n.length - 1) !== "\\" && (e[1] = (e[1] || "").replace(/\\/g, ""), f = l.find[g](e, b, d), f != null)) {
            a = a.replace(l.match[g], "");
            break
          }
        }
      }
      f || (f = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
      return {
        set: f,
        expr: a
      }
    };
    h.filter = function(a, b, d, f) {
      for (var c, j, e = a, g = [], n = b, i = b && b[0] && h.isXML(b[0]); a && b.length;) {
        for (var w in l.filter) if ((c = l.leftMatch[w].exec(a)) != null && c[2]) {
          var J, m, q = l.filter[w];
          m = c[1];
          j = !1;
          c.splice(1, 1);
          if (m.substr(m.length - 1) !== "\\") {
            n === g && (g = []);
            if (l.preFilter[w]) if (c = l.preFilter[w](c, n, d, g, f, i)) {
              if (c === !0) continue
            } else j = J = !0;
            if (c) for (var p = 0;
            (m = n[p]) != null; p++) if (m) {
              J = q(m, c, p, n);
              var o = f ^ !! J;
              d && J != null ? o ? j = !0 : n[p] = !1 : o && (g.push(m), j = !0)
            }
            if (J !== k) {
              d || (n = g);
              a = a.replace(l.match[w], "");
              if (!j) return [];
              break
            }
          }
        }
        if (a === e) if (j == null) h.error(a);
        else
        break;
        e = a
      }
      return n
    };
    h.error = function(a) {
      throw "Syntax error, unrecognized expression: " + a;
    };
    var l = h.selectors = {
      order: ["ID", "NAME", "TAG"],
      match: {
        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
      },
      leftMatch: {},
      attrMap: {
        "class": "className",
        "for": "htmlFor"
      },
      attrHandle: {
        href: function(a) {
          return a.getAttribute("href")
        }
      },
      relative: {
        "+": function(a, b) {
          var d = typeof b === "string",
              f = d && !/\W/.test(b);
          d = d && !f;
          f && (b = b.toLowerCase());
          f = 0;
          for (var c = a.length, j; f < c; f++) if (j = a[f]) {
            for (;
            (j = j.previousSibling) && j.nodeType !== 1;);
            a[f] = d || j && j.nodeName.toLowerCase() === b ? j || !1 : j === b
          }
          d && h.filter(b, a, !0)
        },
        ">": function(a, b) {
          var d, f = typeof b === "string",
              c = 0,
              j = a.length;
          if (f && !/\W/.test(b)) for (b = b.toLowerCase(); c < j; c++) {
            if (d = a[c]) d = d.parentNode, a[c] = d.nodeName.toLowerCase() === b ? d : !1
          } else {
            for (; c < j; c++)(d = a[c]) && (a[c] = f ? d.parentNode : d.parentNode === b);
            f && h.filter(b, a, !0)
          }
        },
        "": function(b, f, e) {
          var g, n = c++,
              h = d;
          typeof f === "string" && !/\W/.test(f) && (g = f = f.toLowerCase(), h = a);
          h("parentNode", f, n, b, g, e)
        },
        "~": function(b, f, e) {
          var g, n = c++,
              h = d;
          typeof f === "string" && !/\W/.test(f) && (g = f =
          f.toLowerCase(), h = a);
          h("previousSibling", f, n, b, g, e)
        }
      },
      find: {
        ID: function(a, b, d) {
          if (typeof b.getElementById !== "undefined" && !d) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
        },
        NAME: function(a, b) {
          if (typeof b.getElementsByName !== "undefined") {
            for (var d = [], f = b.getElementsByName(a[1]), c = 0, j = f.length; c < j; c++) f[c].getAttribute("name") === a[1] && d.push(f[c]);
            return d.length === 0 ? null : d
          }
        },
        TAG: function(a, b) {
          if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
        }
      },
      preFilter: {
        CLASS: function(a, b, d, f, c, j) {
          a = " " + a[1].replace(/\\/g, "") + " ";
          if (j) return a;
          j = 0;
          for (var e;
          (e = b[j]) != null; j++) e && (c ^ (e.className && (" " + e.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? d || f.push(e) : d && (b[j] = !1));
          return !1
        },
        ID: function(a) {
          return a[1].replace(/\\/g, "")
        },
        TAG: function(a) {
          return a[1].toLowerCase()
        },
        CHILD: function(a) {
          if (a[1] === "nth") {
            a[2] || h.error(a[0]);
            a[2] = a[2].replace(/^\+|\s*/g, "");
            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
            a[2] = b[1] + (b[2] || 1) - 0;
            a[3] = b[3] - 0
          } else a[2] && h.error(a[0]);
          a[0] = c++;
          return a
        },
        ATTR: function(a, b, d, f, c, j) {
          b = a[1] = a[1].replace(/\\/g, "");
          !j && l.attrMap[b] && (a[1] = l.attrMap[b]);
          a[4] = (a[4] || a[5] || "").replace(/\\/g, "");
          a[2] === "~=" && (a[4] = " " + a[4] + " ");
          return a
        },
        PSEUDO: function(a, b, d, c, j) {
          if (a[1] === "not") if ((f.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = h(a[3], null, null, b);
          else
          return a = h.filter(a[3], b, d, 1 ^ j), d || c.push.apply(c, a), !1;
          else if (l.match.POS.test(a[0]) || l.match.CHILD.test(a[0])) return !0;
          return a
        },
        POS: function(a) {
          a.unshift(!0);
          return a
        }
      },
      filters: {
        enabled: function(a) {
          return a.disabled === !1 && a.type !== "hidden"
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          return a.checked === !0
        },
        selected: function(a) {
          return a.selected === !0
        },
        parent: function(a) {
          return !!a.firstChild
        },
        empty: function(a) {
          return !a.firstChild
        },
        has: function(a, b, d) {
          return !!h(d[3], a).length
        },
        header: function(a) {
          return /h\d/i.test(a.nodeName)
        },
        text: function(a) {
          return "text" === a.type
        },
        radio: function(a) {
          return "radio" === a.type
        },
        checkbox: function(a) {
          return "checkbox" === a.type
        },
        file: function(a) {
          return "file" === a.type
        },
        password: function(a) {
          return "password" === a.type
        },
        submit: function(a) {
          return "submit" === a.type
        },
        image: function(a) {
          return "image" === a.type
        },
        reset: function(a) {
          return "reset" === a.type
        },
        button: function(a) {
          return "button" === a.type || a.nodeName.toLowerCase() === "button"
        },
        input: function(a) {
          return /input|select|textarea|button/i.test(a.nodeName)
        }
      },
      setFilters: {
        first: function(a, b) {
          return b === 0
        },
        last: function(a, b, d, f) {
          return b === f.length - 1
        },
        even: function(a, b) {
          return b % 2 === 0
        },
        odd: function(a, b) {
          return b % 2 === 1
        },
        lt: function(a, b, d) {
          return b < d[3] - 0
        },
        gt: function(a, b, d) {
          return b > d[3] - 0
        },
        nth: function(a, b, d) {
          return d[3] - 0 === b
        },
        eq: function(a, b, d) {
          return d[3] - 0 === b
        }
      },
      filter: {
        PSEUDO: function(a, b, d, f) {
          var c = b[1],
              j = l.filters[c];
          if (j) return j(a, d, b, f);
          else if (c === "contains") return (a.textContent || a.innerText || h.getText([a]) || "").indexOf(b[3]) >= 0;
          else if (c === "not") {
            b = b[3];
            d = 0;
            for (f = b.length; d < f; d++) if (b[d] === a) return !1;
            return !0
          } else h.error(c)
        },
        CHILD: function(a, b) {
          var d = b[1],
              f = a;
          switch (d) {
          case "only":
          case "first":
            for (; f = f.previousSibling;) if (f.nodeType === 1) return !1;
            if (d === "first") return !0;
            f = a;
          case "last":
            for (; f = f.nextSibling;) if (f.nodeType === 1) return !1;
            return !0;
          case "nth":
            d = b[2];
            var c = b[3];
            if (d === 1 && c === 0) return !0;
            var j = b[0],
                e = a.parentNode;
            if (e && (e.sizcache !== j || !a.nodeIndex)) {
              var g = 0;
              for (f = e.firstChild; f; f = f.nextSibling) if (f.nodeType === 1) f.nodeIndex = ++g;
              e.sizcache = j
            }
            f = a.nodeIndex - c;
            return d === 0 ? f === 0 : f % d === 0 && f / d >= 0
          }
        },
        ID: function(a, b) {
          return a.nodeType === 1 && a.getAttribute("id") === b
        },
        TAG: function(a, b) {
          return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
        },
        CLASS: function(a, b) {
          return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        },
        ATTR: function(a, b) {
          var d = b[1];
          d = l.attrHandle[d] ? l.attrHandle[d](a) : a[d] != null ? a[d] : a.getAttribute(d);
          var f = d + "",
              c = b[2],
              j = b[4];
          return d == null ? c === "!=" : c === "=" ? f === j : c === "*=" ? f.indexOf(j) >= 0 : c === "~=" ? (" " + f + " ").indexOf(j) >= 0 : !j ? f && d !== !1 : c === "!=" ? f !== j : c === "^=" ? f.indexOf(j) === 0 : c === "$=" ? f.substr(f.length - j.length) === j : c === "|=" ? f === j || f.substr(0, j.length + 1) === j + "-" : !1
        },
        POS: function(a, b, d, f) {
          var c = l.setFilters[b[2]];
          if (c) return c(a, d, b, f)
        }
      }
    },
        q = l.match.POS,
        p = function(a, b) {
        return "\\" + (b - 0 + 1)
        },
        o;
    for (o in l.match) l.match[o] = RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, p));
    var u = function(a, b) {
      a = Array.prototype.slice.call(a, 0);
      if (b) return b.push.apply(b, a), b;
      return a
    };
    try {
      Array.prototype.slice.call(m.documentElement.childNodes, 0)
    } catch (t) {
      u = function(a, b) {
        var d = 0,
            f = b || [];
        if (e.call(a) === "[object Array]") Array.prototype.push.apply(f, a);
        else if (typeof a.length === "number") for (var c = a.length; d < c; d++) f.push(a[d]);
        else
        for (; a[d]; d++) f.push(a[d]);
        return f
      }
    }
    var s, r;
    m.documentElement.compareDocumentPosition ? s = function(a, b) {
      if (a === b) return g = !0, 0;
      if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
      return a.compareDocumentPosition(b) & 4 ? -1 : 1
    } : (s = function(a, b) {
      var d, f, c = [],
          j = [];
      d = a.parentNode;
      f = b.parentNode;
      var e = d;
      if (a === b) return g = !0, 0;
      else if (d === f) return r(a, b);
      else if (d) {
        if (!f) return 1
      } else
      return -1;
      for (; e;) c.unshift(e), e = e.parentNode;
      for (e = f; e;) j.unshift(e), e = e.parentNode;
      d = c.length;
      f = j.length;
      for (e = 0; e < d && e < f; e++) if (c[e] !== j[e]) return r(c[e], j[e]);
      return e === d ? r(a, j[e], -1) : r(c[e], b, 1)
    }, r = function(a, b, d) {
      if (a === b) return d;
      for (a = a.nextSibling; a;) {
        if (a === b) return -1;
        a = a.nextSibling
      }
      return 1
    });
    h.getText = function(a) {
      for (var b = "", d, f = 0; a[f]; f++) d = a[f], d.nodeType === 3 || d.nodeType === 4 ? b += d.nodeValue : d.nodeType !== 8 && (b += h.getText(d.childNodes));
      return b
    };
    (function() {
      var a = m.createElement("div"),
          b = "script" + (new Date).getTime(),
          d = m.documentElement;
      a.innerHTML = "<a name='" + b + "'/>";
      d.insertBefore(a, d.firstChild);
      if (m.getElementById(b)) l.find.ID = function(a, b, d) {
        if (typeof b.getElementById !== "undefined" && !d) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : k : []
      }, l.filter.ID = function(a, b) {
        var d = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
        return a.nodeType === 1 && d && d.nodeValue === b
      };
      d.removeChild(a);
      d = a = null
    })();
    (function() {
      var a = m.createElement("div");
      a.appendChild(m.createComment(""));
      if (a.getElementsByTagName("*").length > 0) l.find.TAG = function(a, b) {
        var d = b.getElementsByTagName(a[1]);
        if (a[1] === "*") {
          for (var f = [], c = 0; d[c]; c++) d[c].nodeType === 1 && f.push(d[c]);
          d = f
        }
        return d
      };
      a.innerHTML = "<a href='#'></a>";
      if (a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#") l.attrHandle.href = function(a) {
        return a.getAttribute("href", 2)
      };
      a = null
    })();
    m.querySelectorAll &&
    function() {
      var a = h,
          b = m.createElement("div");
      b.innerHTML = "<p class='TEST'></p>";
      if (!(b.querySelectorAll && b.querySelectorAll(".TEST").length === 0)) {
        h = function(b, d, f, c) {
          d = d || m;
          if (!c && !h.isXML(d)) {
            var j = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
            if (j && (d.nodeType === 1 || d.nodeType === 9)) if (j[1]) return u(d.getElementsByTagName(b), f);
            else if (j[2] && l.find.CLASS && d.getElementsByClassName) return u(d.getElementsByClassName(j[2]), f);
            if (d.nodeType === 9) {
              if (b === "body" && d.body) return u([d.body], f);
              else if (j && j[3]) {
                var e = d.getElementById(j[3]);
                if (e && e.parentNode) {
                  if (e.id === j[3]) return u([e], f)
                } else
                return u([], f)
              }
              try {
                return u(d.querySelectorAll(b), f)
              } catch (g) {}
            } else if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
              e = (j = d.getAttribute("id")) || "__sizzle__";
              var n = d.parentNode,
                  i = /^\s*[+~]/.test(b);
              j ? e = e.replace(/'/g, "\\$&") : d.setAttribute("id", e);
              if (i && n) d = d.parentNode;
              try {
                if (!i || n) return u(d.querySelectorAll("[id='" + e + "'] " + b), f)
              } catch (w) {} finally {
                j || d.removeAttribute("id")
              }
            }
          }
          return a(b, d, f, c)
        };
        for (var d in a) h[d] = a[d];
        b = null
      }
    }();
    (function() {
      var a = m.documentElement,
          b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector,
          d = !1;
      try {
        b.call(m.documentElement, "[test!='']:sizzle")
      } catch (f) {
        d = !0
      }
      if (b) h.matchesSelector = function(a, f) {
        f = f.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
        if (!h.isXML(a)) try {
          if (d || !l.match.PSEUDO.test(f) && !/!=/.test(f)) return b.call(a, f)
        } catch (c) {}
        return h(f, null, null, [a]).length > 0
      }
    })();
    (function() {
      var a = m.createElement("div");
      a.innerHTML = "<div class='test e'></div><div class='test'></div>";
      if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0 && (a.lastChild.className = "e", a.getElementsByClassName("e").length !== 1)) l.order.splice(1, 0, "CLASS"), l.find.CLASS = function(a, b, d) {
        if (typeof b.getElementsByClassName !== "undefined" && !d) return b.getElementsByClassName(a[1])
      }, a = null
    })();
    h.contains = m.documentElement.contains ?
    function(a, b) {
      return a !== b && (a.contains ? a.contains(b) : !0)
    } : m.documentElement.compareDocumentPosition ?
    function(a, b) {
      return !!(a.compareDocumentPosition(b) & 16)
    } : function() {
      return !1
    };
    h.isXML = function(a) {
      return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : !1
    };
    var v = function(a, b) {
      for (var d, f = [], c = "", j = b.nodeType ? [b] : b; d = l.match.PSEUDO.exec(a);) c += d[0], a = a.replace(l.match.PSEUDO, "");
      a = l.relative[a] ? a + "*" : a;
      d = 0;
      for (var e = j.length; d < e; d++) h(a, j[d], f);
      return h.filter(c, f)
    };
    b.find = h;
    b.expr = h.selectors;
    b.expr[":"] = b.expr.filters;
    b.unique = h.uniqueSort;
    b.text = h.getText;
    b.isXMLDoc = h.isXML;
    b.contains = h.contains
  })();
  var Pa = /Until$/,
      Qa = /^(?:parents|prevUntil|prevAll)/,
      Ra = /,/,
      Sa = /^.[^:#\[\.,]*$/,
      Ta = Array.prototype.slice,
      Ua = b.expr.match.POS,
      ab = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
      };
  b.fn.extend({
    find: function(a) {
      for (var d = this.pushStack("", "find", a), f = 0, c = 0, e = this.length; c < e; c++) if (f = d.length, b.find(a, this[c], d), c > 0) for (var g = f; g < d.length; g++) for (var h = 0; h < f; h++) if (d[h] === d[g]) {
        d.splice(g--, 1);
        break
      }
      return d
    },
    has: function(a) {
      var d = b(a);
      return this.filter(function() {
        for (var a =
        0, c = d.length; a < c; a++) if (b.contains(this, d[a])) return !0
      })
    },
    not: function(a) {
      return this.pushStack(v(this, a, !1), "not", a)
    },
    filter: function(a) {
      return this.pushStack(v(this, a, !0), "filter", a)
    },
    is: function(a) {
      return !!a && b.filter(a, this).length > 0
    },
    closest: function(a, d) {
      var f = [],
          c, e, g = this[0];
      if (b.isArray(a)) {
        var h, i = {},
            l = 1;
        if (g && a.length) {
          c = 0;
          for (e = a.length; c < e; c++) h = a[c], i[h] || (i[h] = b.expr.match.POS.test(h) ? b(h, d || this.context) : h);
          for (; g && g.ownerDocument && g !== d;) {
            for (h in i) c = i[h], (c.jquery ? c.index(g) > -1 : b(g).is(c)) && f.push({
              selector: h,
              elem: g,
              level: l
            });
            g = g.parentNode;
            l++
          }
        }
        return f
      }
      h = Ua.test(a) ? b(a, d || this.context) : null;
      c = 0;
      for (e = this.length; c < e; c++) for (g = this[c]; g;) if (h ? h.index(g) > -1 : b.find.matchesSelector(g, a)) {
        f.push(g);
        break
      } else if (g = g.parentNode, !g || !g.ownerDocument || g === d) break;
      f = f.length > 1 ? b.unique(f) : f;
      return this.pushStack(f, "closest", a)
    },
    index: function(a) {
      if (!a || typeof a === "string") return b.inArray(this[0], a ? b(a) : this.parent().children());
      return b.inArray(a.jquery ? a[0] : a, this)
    },
    add: function(a, d) {
      var f = typeof a === "string" ? b(a, d) : b.makeArray(a),
          c = b.merge(this.get(), f);
      return this.pushStack(!f[0] || !f[0].parentNode || f[0].parentNode.nodeType === 11 || !c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 ? c : b.unique(c))
    },
    andSelf: function() {
      return this.add(this.prevObject)
    }
  });
  b.each({
    parent: function(a) {
      return (a = a.parentNode) && a.nodeType !== 11 ? a : null
    },
    parents: function(a) {
      return b.dir(a, "parentNode")
    },
    parentsUntil: function(a, d, f) {
      return b.dir(a, "parentNode", f)
    },
    next: function(a) {
      return b.nth(a, 2, "nextSibling")
    },
    prev: function(a) {
      return b.nth(a, 2, "previousSibling")
    },
    nextAll: function(a) {
      return b.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return b.dir(a, "previousSibling")
    },
    nextUntil: function(a, d, f) {
      return b.dir(a, "nextSibling", f)
    },
    prevUntil: function(a, d, f) {
      return b.dir(a, "previousSibling", f)
    },
    siblings: function(a) {
      return b.sibling(a.parentNode.firstChild, a)
    },
    children: function(a) {
      return b.sibling(a.firstChild)
    },
    contents: function(a) {
      return b.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b.makeArray(a.childNodes)
    }
  }, function(a, d) {
    b.fn[a] = function(f, c) {
      var e = b.map(this, d, f),
          g = Ta.call(arguments);
      Pa.test(a) || (c = f);
      c && typeof c === "string" && (e = b.filter(c, e));
      e = this.length > 1 && !ab[a] ? b.unique(e) : e;
      if ((this.length > 1 || Ra.test(c)) && Qa.test(a)) e = e.reverse();
      return this.pushStack(e, a, g.join(","))
    }
  });
  b.extend({
    filter: function(a, d, f) {
      f && (a = ":not(" + a + ")");
      return d.length === 1 ? b.find.matchesSelector(d[0], a) ? [d[0]] : [] : b.find.matches(a, d)
    },
    dir: function(a, d, f) {
      var c = [];
      for (a = a[d]; a && a.nodeType !== 9 && (f === k || a.nodeType !== 1 || !b(a).is(f));) a.nodeType === 1 && c.push(a), a = a[d];
      return c
    },
    nth: function(a, b, f) {
      b = b || 1;
      for (var c = 0; a; a = a[f]) if (a.nodeType === 1 && ++c === b) break;
      return a
    },
    sibling: function(a, b) {
      for (var f = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && f.push(a);
      return f
    }
  });
  var bb = / jQuery\d+="(?:\d+|null)"/g,
      ma = /^\s+/,
      ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
      za = /<([\w:]+)/,
      cb = /<tbody/i,
      db = /<|&#?\w+;/,
      Aa = /<(?:script|object|embed|option|style)/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      D = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""]
      };
  D.optgroup = D.option;
  D.tbody = D.tfoot = D.colgroup = D.caption = D.thead;
  D.th = D.td;
  if (!b.support.htmlSerialize) D._default = [1, "div<div>", "</div>"];
  b.fn.extend({
    text: function(a) {
      if (b.isFunction(a)) return this.each(function(d) {
        var f =
        b(this);
        f.text(a.call(this, d, f.text()))
      });
      if (typeof a !== "object" && a !== k) return this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(a));
      return b.text(this)
    },
    wrapAll: function(a) {
      if (b.isFunction(a)) return this.each(function(d) {
        b(this).wrapAll(a.call(this, d))
      });
      if (this[0]) {
        var d = b(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && d.insertBefore(this[0]);
        d.map(function() {
          for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      if (b.isFunction(a)) return this.each(function(d) {
        b(this).wrapInner(a.call(this, d))
      });
      return this.each(function() {
        var d = b(this),
            f = d.contents();
        f.length ? f.wrapAll(a) : d.append(a)
      })
    },
    wrap: function(a) {
      return this.each(function() {
        b(this).wrapAll(a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
      }).end()
    },
    append: function() {
      return this.domManip(arguments, !0, function(a) {
        this.nodeType === 1 && this.appendChild(a)
      })
    },
    prepend: function() {
      return this.domManip(arguments, !0, function(a) {
        this.nodeType === 1 && this.insertBefore(a, this.firstChild)
      })
    },
    before: function() {
      if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this)
      });
      else if (arguments.length) {
        var a = b(arguments[0]);
        a.push.apply(a, this.toArray());
        return this.pushStack(a, "before", arguments)
      }
    },
    after: function() {
      if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this.nextSibling)
      });
      else if (arguments.length) {
        var a =
        this.pushStack(this, "after", arguments);
        a.push.apply(a, b(arguments[0]).toArray());
        return a
      }
    },
    remove: function(a, d) {
      for (var f = 0, c;
      (c = this[f]) != null; f++) if (!a || b.filter(a, [c]).length)!d && c.nodeType === 1 && (b.cleanData(c.getElementsByTagName("*")), b.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
      return this
    },
    empty: function() {
      for (var a = 0, d;
      (d = this[a]) != null; a++) for (d.nodeType === 1 && b.cleanData(d.getElementsByTagName("*")); d.firstChild;) d.removeChild(d.firstChild);
      return this
    },
    clone: function(a, d) {
      a =
      a == null ? !0 : a;
      d = d == null ? a : d;
      return this.map(function() {
        return b.clone(this, a, d)
      })
    },
    html: function(a) {
      if (a === k) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(bb, "") : null;
      else if (typeof a === "string" && !Aa.test(a) && (b.support.leadingWhitespace || !ma.test(a)) && !D[(za.exec(a) || ["", ""])[1].toLowerCase()]) {
        a = a.replace(ya, "<$1></$2>");
        try {
          for (var d = 0, f = this.length; d < f; d++) if (this[d].nodeType === 1) b.cleanData(this[d].getElementsByTagName("*")), this[d].innerHTML = a
        } catch (c) {
          this.empty().append(a)
        }
      } else b.isFunction(a) ? this.each(function(d) {
        var f = b(this);
        f.html(a.call(this, d, f.html()))
      }) : this.empty().append(a);
      return this
    },
    replaceWith: function(a) {
      if (this[0] && this[0].parentNode) {
        if (b.isFunction(a)) return this.each(function(d) {
          var f = b(this),
              c = f.html();
          f.replaceWith(a.call(this, d, c))
        });
        typeof a !== "string" && (a = b(a).detach());
        return this.each(function() {
          var d = this.nextSibling,
              f = this.parentNode;
          b(this).remove();
          d ? b(d).before(a) : b(f).append(a)
        })
      } else
      return this.pushStack(b(b.isFunction(a) ? a() : a), "replaceWith", a)
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, d, f) {
      var c, e, h, i = a[0],
          l = [];
      if (!b.support.checkClone && arguments.length === 3 && typeof i === "string" && Ba.test(i)) return this.each(function() {
        b(this).domManip(a, d, f, !0)
      });
      if (b.isFunction(i)) return this.each(function(c) {
        var j = b(this);
        a[0] = i.call(this, c, d ? j.html() : k);
        j.domManip(a, d, f)
      });
      if (this[0]) {
        c = i && i.parentNode;
        c = b.support.parentNode && c && c.nodeType === 11 && c.childNodes.length === this.length ? {
          fragment: c
        } : b.buildFragment(a, this, l);
        h = c.fragment;
        if (e = h.childNodes.length === 1 ? h = h.firstChild : h.firstChild) {
          d = d && b.nodeName(e, "tr");
          e = 0;
          for (var m = this.length, q = m - 1; e < m; e++) f.call(d ? b.nodeName(this[e], "table") ? this[e].getElementsByTagName("tbody")[0] || this[e].appendChild(this[e].ownerDocument.createElement("tbody")) : this[e] : this[e], c.cacheable || m > 1 && e < q ? b.clone(h, !0, !0) : h)
        }
        l.length && b.each(l, g)
      }
      return this
    }
  });
  b.buildFragment = function(a, d, f) {
    var c, e, g;
    d = d && d[0] ? d[0].ownerDocument || d[0] : m;
    if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && d === m && a[0].charAt(0) === "<" && !Aa.test(a[0]) && (b.support.checkClone || !Ba.test(a[0]))) e = !0, (g = b.fragments[a[0]]) && g !== 1 && (c = g);
    c || (c = d.createDocumentFragment(), b.clean(a, d, c, f));
    e && (b.fragments[a[0]] = g ? c : 1);
    return {
      fragment: c,
      cacheable: e
    }
  };
  b.fragments = {};
  b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, d) {
    b.fn[a] = function(f) {
      var c = [];
      f = b(f);
      var e = this.length === 1 && this[0].parentNode;
      if (e && e.nodeType === 11 && e.childNodes.length === 1 && f.length === 1) return f[d](this[0]), this;
      else {
        e = 0;
        for (var g = f.length; e < g; e++) {
          var h = (e > 0 ? this.clone(!0) : this).get();
          b(f[e])[d](h);
          c = c.concat(h)
        }
        return this.pushStack(c, a, f.selector)
      }
    }
  });
  b.extend({
    clone: function(a, d, f) {
      var c = a.cloneNode(!0),
          e, g, h;
      if (!b.support.noCloneEvent && (a.nodeType === 1 || a.nodeType === 11) && !b.isXMLDoc(a)) {
        e = a.getElementsByTagName("*");
        g = c.getElementsByTagName("*");
        for (h = 0; e[h]; ++h) G(e[h], g[h]);
        G(a, c)
      }
      if (d && (H(a, c), f && "getElementsByTagName" in a && (e = a.getElementsByTagName("*"), g = c.getElementsByTagName("*"), e.length))) for (h = 0; e[h]; ++h) H(e[h], g[h]);
      return c
    },
    clean: function(a, d, c, j) {
      d = d || m;
      typeof d.createElement === "undefined" && (d = d.ownerDocument || d[0] && d[0].ownerDocument || m);
      for (var e = [], g = 0, h;
      (h = a[g]) != null; g++) if (typeof h === "number" && (h += ""), h) {
        if (typeof h === "string" && !db.test(h)) h = d.createTextNode(h);
        else if (typeof h === "string") {
          h = h.replace(ya, "<$1></$2>");
          var i = (za.exec(h) || ["", ""])[1].toLowerCase(),
              l = D[i] || D._default,
              k = l[0],
              q = d.createElement("div");
          for (q.innerHTML = l[1] + h + l[2]; k--;) q = q.lastChild;
          if (!b.support.tbody) {
            k = cb.test(h);
            i = i === "table" && !k ? q.firstChild && q.firstChild.childNodes : l[1] === "<table>" && !k ? q.childNodes : [];
            for (l = i.length - 1; l >= 0; --l) b.nodeName(i[l], "tbody") && !i[l].childNodes.length && i[l].parentNode.removeChild(i[l])
          }!b.support.leadingWhitespace && ma.test(h) && q.insertBefore(d.createTextNode(ma.exec(h)[0]), q.firstChild);
          h = q.childNodes
        }
        h.nodeType ? e.push(h) : e = b.merge(e, h)
      }
      if (c) for (g = 0; e[g]; g++) j && b.nodeName(e[g], "script") && (!e[g].type || e[g].type.toLowerCase() === "text/javascript") ? j.push(e[g].parentNode ? e[g].parentNode.removeChild(e[g]) : e[g]) : (e[g].nodeType === 1 && e.splice.apply(e, [g + 1, 0].concat(b.makeArray(e[g].getElementsByTagName("script")))), c.appendChild(e[g]));
      return e
    },
    cleanData: function(a) {
      for (var d, c, e = b.cache, g = b.expando, h = b.event.special, i = b.support.deleteExpando, l = 0, k;
      (k = a[l]) != null; l++) if (!k.nodeName || !b.noData[k.nodeName.toLowerCase()]) if (c = k[b.expando]) {
        if ((d = e[c] && e[c][g]) && d.events) {
          for (var m in d.events) h[m] ? b.event.remove(k, m) : b.removeEvent(k, m, d.handle);
          if (d.handle) d.handle.elem = null
        }
        i ? delete k[b.expando] : k.removeAttribute && k.removeAttribute(b.expando);
        delete e[c]
      }
    }
  });
  var Ca = /alpha\([^)]*\)/i,
      eb = /opacity=([^)]*)/,
      fb = /-([a-z])/ig,
      gb = /([A-Z])/g,
      Da = /^-?\d+(?:px)?$/i,
      hb = /^-?\d/,
      ib = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
      },
      Wa = ["Left", "Right"],
      Xa = ["Top", "Bottom"],
      X, Ea, da, jb = function(a, b) {
      return b.toUpperCase()
      };
  b.fn.css = function(a, d) {
    if (arguments.length === 2 && d === k) return this;
    return b.access(this, a, d, !0, function(a, d, c) {
      return c !== k ? b.style(a, d, c) : b.css(a, d)
    })
  };
  b.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c =
            X(a, "opacity", "opacity");
            return c === "" ? "1" : c
          } else
          return a.style.opacity
        }
      }
    },
    cssNumber: {
      zIndex: !0,
      fontWeight: !0,
      opacity: !0,
      zoom: !0,
      lineHeight: !0
    },
    cssProps: {
      "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, d, c, e) {
      if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
        var g, h = b.camelCase(d),
            i = a.style,
            l = b.cssHooks[h];
        d = b.cssProps[h] || h;
        if (c !== k) {
          if (!(typeof c === "number" && isNaN(c) || c == null)) if (typeof c === "number" && !b.cssNumber[h] && (c += "px"), !l || !("set" in l) || (c = l.set(a, c)) !== k) try {
            i[d] =
            c
          } catch (m) {}
        } else {
          if (l && "get" in l && (g = l.get(a, !1, e)) !== k) return g;
          return i[d]
        }
      }
    },
    css: function(a, d, c) {
      var e, g = b.camelCase(d),
          h = b.cssHooks[g];
      d = b.cssProps[g] || g;
      if (h && "get" in h && (e = h.get(a, !0, c)) !== k) return e;
      else if (X) return X(a, d, g)
    },
    swap: function(a, b, c) {
      var e = {},
          g;
      for (g in b) e[g] = a.style[g], a.style[g] = b[g];
      c.call(a);
      for (g in b) a.style[g] = e[g]
    },
    camelCase: function(a) {
      return a.replace(fb, jb)
    }
  });
  b.curCSS = b.css;
  b.each(["height", "width"], function(a, d) {
    b.cssHooks[d] = {
      get: function(a, e, g) {
        var h;
        if (e) {
          a.offsetWidth !== 0 ? h = c(a, d, g) : b.swap(a, ib, function() {
            h = c(a, d, g)
          });
          if (h <= 0 && (h = X(a, d, d), h === "0px" && da && (h = da(a, d, d)), h != null)) return h === "" || h === "auto" ? "0px" : h;
          if (h < 0 || h == null) return h = a.style[d], h === "" || h === "auto" ? "0px" : h;
          return typeof h === "string" ? h : h + "px"
        }
      },
      set: function(a, b) {
        if (Da.test(b)) {
          if (b = parseFloat(b), b >= 0) return b + "px"
        } else
        return b
      }
    }
  });
  if (!b.support.opacity) b.cssHooks.opacity = {
    get: function(a, b) {
      return eb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    },
    set: function(a, d) {
      var c = a.style;
      c.zoom = 1;
      var e = b.isNaN(d) ? "" : "alpha(opacity=" + d * 100 + ")",
          g = c.filter || "";
      c.filter = Ca.test(g) ? g.replace(Ca, e) : c.filter + " " + e
    }
  };
  m.defaultView && m.defaultView.getComputedStyle && (Ea = function(a, d, c) {
    var e;
    c = c.replace(gb, "-$1").toLowerCase();
    if (!(d = a.ownerDocument.defaultView)) return k;
    if (d = d.getComputedStyle(a, null)) e = d.getPropertyValue(c), e === "" && !b.contains(a.ownerDocument.documentElement, a) && (e = b.style(a, c));
    return e
  });
  m.documentElement.currentStyle && (da = function(a, b) {
    var c, e = a.currentStyle && a.currentStyle[b],
        g = a.runtimeStyle && a.runtimeStyle[b],
        h = a.style;
    if (!Da.test(e) && hb.test(e)) {
      c = h.left;
      if (g) a.runtimeStyle.left = a.currentStyle.left;
      h.left = b === "fontSize" ? "1em" : e || 0;
      e = h.pixelLeft + "px";
      h.left = c;
      if (g) a.runtimeStyle.left = g
    }
    return e === "" ? "auto" : e
  });
  X = Ea || da;
  if (b.expr && b.expr.filters) b.expr.filters.hidden = function(a) {
    var d = a.offsetHeight;
    return a.offsetWidth === 0 && d === 0 || !b.support.reliableHiddenOffsets && (a.style.display || b.css(a, "display")) === "none"
  }, b.expr.filters.visible =

  function(a) {
    return !b.expr.filters.hidden(a)
  };
  var kb = /%20/g,
      Ya = /\[\]$/,
      Fa = /\r?\n/g,
      lb = /#.*$/,
      mb = /^(.*?):\s*(.*?)\r?$/mg,
      nb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      ob = /^(?:GET|HEAD)$/,
      pb = /^\/\//,
      Ga = /\?/,
      qb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      rb = /^(?:select|textarea)/i,
      ta = /\s+/,
      sb = /([?&])_=[^&]*/,
      tb = /^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,
      Ha = b.fn.load,
      ha = {},
      Ia = {};
  b.fn.extend({
    load: function(a, d, c) {
      if (typeof a !== "string" && Ha) return Ha.apply(this, arguments);
      else if (!this.length) return this;
      var e = a.indexOf(" ");
      if (e >= 0) {
        var g = a.slice(e, a.length);
        a = a.slice(0, e)
      }
      e = "GET";
      d && (b.isFunction(d) ? (c = d, d = null) : typeof d === "object" && (d = b.param(d, b.ajaxSettings.traditional), e = "POST"));
      var h = this;
      b.ajax({
        url: a,
        type: e,
        dataType: "html",
        data: d,
        complete: function(a, d, e) {
          e = a.responseText;
          a.isResolved() && (a.done(function(a) {
            e = a
          }), h.html(g ? b("<div>").append(e.replace(qb, "")).find(g) : e));
          c && h.each(c, [e, d, a])
        }
      });
      return this
    },
    serialize: function() {
      return b.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        return this.elements ? b.makeArray(this.elements) : this
      }).filter(function() {
        return this.name && !this.disabled && (this.checked || rb.test(this.nodeName) || nb.test(this.type))
      }).map(function(a, d) {
        var c = b(this).val();
        return c == null ? null : b.isArray(c) ? b.map(c, function(a) {
          return {
            name: d.name,
            value: a.replace(Fa, "\r\n")
          }
        }) : {
          name: d.name,
          value: c.replace(Fa, "\r\n")
        }
      }).get()
    }
  });
  b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, d) {
    b.fn[d] = function(a) {
      return this.bind(d, a)
    }
  });
  b.each(["get", "post"], function(a, d) {
    b[d] = function(a, c, e, g) {
      b.isFunction(c) && (g = g || e, e = c, c = null);
      return b.ajax({
        type: d,
        url: a,
        data: c,
        success: e,
        dataType: g
      })
    }
  });
  b.extend({
    getScript: function(a, d) {
      return b.get(a, null, d, "script")
    },
    getJSON: function(a, d, c) {
      return b.get(a, d, c, "json")
    },
    ajaxSetup: function(a) {
      b.extend(!0, b.ajaxSettings, a);
      if (a.context) b.ajaxSettings.context = a.context
    },
    ajaxSettings: {
      url: location.href,
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": "*/*"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": i.String,
        "text html": !0,
        "text json": b.parseJSON,
        "text xml": b.parseXML
      }
    },
    ajaxPrefilter: e(ha),
    ajaxTransport: e(Ia),
    ajax: function(a, d) {
      function c(a, d, f, h) {
        if (B !== 2) {
          B = 2;
          t && clearTimeout(t);
          s = k;
          u = h || "";
          x.readyState = a ? 4 : 0;
          var m, o, r;
          if (f) {
            h =
            e;
            var v = x,
                A = h.contents,
                z = h.dataTypes,
                D = h.responseFields,
                y, E, N, G;
            for (E in D) E in f && (v[D[E]] = f[E]);
            for (; z[0] === "*";) z.shift(), y === k && (y = v.getResponseHeader("content-type"));
            if (y) for (E in A) if (A[E] && A[E].test(y)) {
              z.unshift(E);
              break
            }
            if (z[0] in f) N = z[0];
            else {
              for (E in f) {
                if (!z[0] || h.converters[E + " " + z[0]]) {
                  N = E;
                  break
                }
                G || (G = E)
              }
              N = N || G
            }
            N ? (N !== z[0] && z.unshift(N), f = f[N]) : f = void 0
          } else f = k;
          if (a >= 200 && a < 300 || a === 304) {
            if (e.ifModified) {
              if (y = x.getResponseHeader("Last-Modified")) b.lastModified[e.url] = y;
              if (y = x.getResponseHeader("Etag")) b.etag[e.url] =
              y
            }
            if (a === 304) d = "notmodified", m = !0;
            else
            try {
              y = e;
              y.dataFilter && (f = y.dataFilter(f, y.dataType));
              var H = y.dataTypes,
                  F = y.converters,
                  I, M = H.length,
                  ca, O = H[0],
                  S, L, P, R, U;
              for (I = 1; I < M; I++) if (S = O, O = H[I], O === "*") O = S;
              else if (S !== "*" && S !== O) {
                L = S + " " + O;
                P = F[L] || F["* " + O];
                if (!P) for (R in U = k, F) if (ca = R.split(" "), ca[0] === S || ca[0] === "*") if (U = F[ca[1] + " " + O]) {
                  R = F[R];
                  R === !0 ? P = U : U === !0 && (P = R);
                  break
                }!P && !U && b.error("No conversion from " + L.replace(" ", " to "));
                P !== !0 && (f = P ? P(f) : U(R(f)))
              }
              o = f;
              d = "success";
              m = !0
            } catch (Q) {
              d = "parsererror", r = Q
            }
          } else r = d, a && (d = "error", a < 0 && (a = 0));
          x.status = a;
          x.statusText = d;
          m ? l.resolveWith(g, [o, d, x]) : l.rejectWith(g, [x, d, r]);
          x.statusCode(p);
          p = k;
          e.global && i.trigger("ajax" + (m ? "Success" : "Error"), [x, e, m ? o : r]);
          q.resolveWith(g, [x, d]);
          e.global && (i.trigger("ajaxComplete", [x, e]), --b.active || b.event.trigger("ajaxStop"))
        }
      }
      typeof d !== "object" && (d = a, a = k);
      d = d || {};
      var e = b.extend(!0, {}, b.ajaxSettings, d),
          g = (e.context = ("context" in d ? d : b.ajaxSettings).context) || e,
          i = g === e ? b.event : b(g),
          l = b.Deferred(),
          q = b._Deferred(),
          p = e.statusCode || {},
          o = {},
          u, r, s, t, v = m.location,
          z = v.protocol || "http:",
          D, B = 0,
          y, x = {
          readyState: 0,
          setRequestHeader: function(a, b) {
            B === 0 && (o[a.toLowerCase()] = b);
            return this
          },
          getAllResponseHeaders: function() {
            return B === 2 ? u : null
          },
          getResponseHeader: function(a) {
            var b;
            if (B === 2) {
              if (!r) for (r = {}; b = mb.exec(u);) r[b[1].toLowerCase()] = b[2];
              b = r[a.toLowerCase()]
            }
            return b || null
          },
          abort: function(a) {
            a = a || "abort";
            s && s.abort(a);
            c(0, a);
            return this
          }
          };
      l.promise(x);
      x.success = x.done;
      x.error = x.fail;
      x.complete = q.done;
      x.statusCode = function(a) {
        if (a) {
          var b;
          if (B < 2) for (b in a) p[b] = [p[b], a[b]];
          else b = a[x.status], x.then(b, b)
        }
        return this
      };
      e.url = ("" + (a || e.url)).replace(lb, "").replace(pb, z + "//");
      e.dataTypes = b.trim(e.dataType || "*").toLowerCase().split(ta);
      if (!e.crossDomain) D = tb.exec(e.url.toLowerCase()), e.crossDomain = !(!D || !(D[1] != z || D[2] != v.hostname || (D[3] || (D[1] === "http:" ? 80 : 443)) != (v.port || (z === "http:" ? 80 : 443))));
      if (e.data && e.processData && typeof e.data !== "string") e.data = b.param(e.data, e.traditional);
      h(ha, e, d, x);
      e.type = e.type.toUpperCase();
      e.hasContent = !ob.test(e.type);
      e.global && b.active++ === 0 && b.event.trigger("ajaxStart");
      if (!e.hasContent && (e.data && (e.url += (Ga.test(e.url) ? "&" : "?") + e.data), e.cache === !1)) v = b.now(), z = e.url.replace(sb, "$1_=" + v), e.url = z + (z === e.url ? (Ga.test(e.url) ? "&" : "?") + "_=" + v : "");
      if (e.data && e.hasContent && e.contentType !== !1 || d.contentType) o["content-type"] = e.contentType;
      e.ifModified && (b.lastModified[e.url] && (o["if-modified-since"] = b.lastModified[e.url]), b.etag[e.url] && (o["if-none-match"] = b.etag[e.url]));
      o.accept = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : e.accepts["*"];
      for (y in e.headers) o[y.toLowerCase()] = e.headers[y];
      if (e.beforeSend && (e.beforeSend.call(g, x, e) === !1 || B === 2)) c(0, "abort"), x = !1;
      else {
        for (y in {
          success: 1,
          error: 1,
          complete: 1
        }) x[y](e[y]);
        if (s = h(Ia, e, d, x)) {
          B = x.readyState = 1;
          e.global && i.trigger("ajaxSend", [x, e]);
          e.async && e.timeout > 0 && (t = setTimeout(function() {
            x.abort("timeout")
          }, e.timeout));
          try {
            s.send(o, c)
          } catch (E) {
            status < 2 ? c(-1, E) : b.error(E)
          }
        } else c(-1, "No Transport")
      }
      return x
    },
    param: function(a, d) {
      var c = [],
          e = function(a, d) {
          d = b.isFunction(d) ? d() : d;
          c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(d)
          };
      if (d === k) d = b.ajaxSettings.traditional;
      if (b.isArray(a) || a.jquery) b.each(a, function() {
        e(this.name, this.value)
      });
      else
      for (var g in a) l(g, a[g], d, e);
      return c.join("&").replace(kb, "+")
    }
  });
  b.extend({
    active: 0,
    lastModified: {},
    etag: {}
  });
  var ub = b.now(),
      ea = /(\=)\?(&|$)|()\?\?()/i;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      return b.expando + "_" + ub++
    }
  });
  b.ajaxPrefilter("json jsonp", function(a, d, c) {
    c = typeof a.data === "string";
    if (a.dataTypes[0] === "jsonp" || d.jsonpCallback || d.jsonp != null || a.jsonp !== !1 && (ea.test(a.url) || c && ea.test(a.data))) {
      var e, g = a.jsonpCallback = b.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
          h = i[g];
      d = a.url;
      var l = a.data,
          k = "$1" + g + "$2";
      a.jsonp !== !1 && (d = d.replace(ea, k), a.url === d && (c && (l = l.replace(ea, k)), a.data === l && (d += (/\?/.test(d) ? "&" : "?") + a.jsonp + "=" + g)));
      a.url = d;
      a.data = l;
      i[g] = function(a) {
        e = [a]
      };
      a.complete = [function() {
        if (i[g] = h) {
          if (e && b.isFunction(h)) i[g](e[0])
        } else
        try {
          delete i[g]
        } catch (a) {}
      },
      a.complete];
      a.converters["script json"] = function() {
        e || b.error(g + " was not called");
        return e[0]
      };
      a.dataTypes[0] = "json";
      return "script"
    }
  });
  b.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript"
    },
    contents: {
      script: /javascript/
    },
    converters: {
      "text script": function(a) {
        b.globalEval(a);
        return a
      }
    }
  });
  b.ajaxPrefilter("script", function(a) {
    if (a.cache === k) a.cache = !1;
    if (a.crossDomain) a.type = "GET", a.global = !1
  });
  b.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = m.getElementsByTagName("head")[0] || m.documentElement;
      return {
        send: function(e, g) {
          b = m.createElement("script");
          b.async = "async";
          if (a.scriptCharset) b.charset = a.scriptCharset;
          b.src = a.url;
          b.onload = b.onreadystatechange = function(a, e) {
            if (!b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = k, e || g(200, "success")
          };
          c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          if (b) b.onload(0, 1)
        }
      }
    }
  });
  var vb = b.now(),
      na = {},
      Ja, Y;
  b.ajaxSettings.xhr = i.ActiveXObject ?
  function() {
    if (i.location.protocol !== "file:") try {
      return new i.XMLHttpRequest
    } catch (a) {}
    try {
      return new i.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  } : function() {
    return new i.XMLHttpRequest
  };
  try {
    Y = b.ajaxSettings.xhr()
  } catch (zb) {}
  b.support.ajax = !! Y;
  b.support.cors = Y && "withCredentials" in Y;
  Y = k;
  b.support.ajax && b.ajaxTransport(function(a) {
    if (!a.crossDomain || b.support.cors) {
      var d;
      return {
        send: function(c, e) {
          Ja || (Ja = 1, b(i).bind("unload", function() {
            b.each(na, function(a, b) {
              if (b.onreadystatechange) b.onreadystatechange(1)
            })
          }));
          var g = a.xhr(),
              h;
          a.username ? g.open(a.type, a.url, a.async, a.username, a.password) : g.open(a.type, a.url, a.async);
          if ((!a.crossDomain || a.hasContent) && !c["x-requested-with"]) c["x-requested-with"] = "XMLHttpRequest";
          try {
            b.each(c, function(a, b) {
              g.setRequestHeader(a, b)
            })
          } catch (l) {}
          g.send(a.hasContent && a.data || null);
          d = function(c, f) {
            if (d && (f || g.readyState === 4)) {
              d = 0;
              if (h) g.onreadystatechange = b.noop, delete na[h];
              if (f) g.readyState !== 4 && g.abort();
              else {
                var i = g.status,
                    l, k = g.getAllResponseHeaders(),
                    m = {},
                    q = g.responseXML;
                if (q && q.documentElement) m.xml =
                q;
                m.text = g.responseText;
                try {
                  l = g.statusText
                } catch (p) {
                  l = ""
                }
                i = i === 0 ? !a.crossDomain || l ? k ? 304 : 0 : 302 : i == 1223 ? 204 : i;
                e(i, l, m, k)
              }
            }
          };
          !a.async || g.readyState === 4 ? d() : (h = vb++, na[h] = g, g.onreadystatechange = d)
        },
        abort: function() {
          d && d(0, 1)
        }
      }
    }
  });
  var ia = {},
      wb = /^(?:toggle|show|hide)$/,
      xb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
      fa, ua = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"]
      ];
  b.fn.extend({
    show: function(a, d, c) {
      if (a || a === 0) return this.animate(q("show", 3), a, d, c);
      else {
        c = 0;
        for (var e = this.length; c < e; c++) {
          a = this[c];
          d = a.style.display;
          if (!b._data(a, "olddisplay") && d === "none") d = a.style.display = "";
          d === "" && b.css(a, "display") === "none" && b._data(a, "olddisplay", u(a.nodeName))
        }
        for (c = 0; c < e; c++) if (a = this[c], d = a.style.display, d === "" || d === "none") a.style.display = b._data(a, "olddisplay") || "";
        return this
      }
    },
    hide: function(a, d, c) {
      if (a || a === 0) return this.animate(q("hide", 3), a, d, c);
      else {
        a = 0;
        for (d = this.length; a < d; a++) c = b.css(this[a], "display"), c !== "none" && !b._data(this[a], "olddisplay") && b._data(this[a], "olddisplay", c);
        for (a = 0; a < d; a++) this[a].style.display = "none";
        return this
      }
    },
    _toggle: b.fn.toggle,
    toggle: function(a, d, c) {
      var e = typeof a === "boolean";
      b.isFunction(a) && b.isFunction(d) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function() {
        var d = e ? a : b(this).is(":hidden");
        b(this)[d ? "show" : "hide"]()
      }) : this.animate(q("toggle", 3), a, d, c);
      return this
    },
    fadeTo: function(a, b, c, e) {
      return this.filter(":hidden").css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, e)
    },
    animate: function(a, d, c, e) {
      var g = b.speed(d, c, e);
      if (b.isEmptyObject(a)) return this.each(g.complete);
      return this[g.queue === !1 ? "each" : "queue"](function() {
        var d = b.extend({}, g),
            c, f = this.nodeType === 1,
            e = f && b(this).is(":hidden"),
            h = this;
        for (c in a) {
          var j = b.camelCase(c);
          c !== j && (a[j] = a[c], delete a[c], c = j);
          if (a[c] === "hide" && e || a[c] === "show" && !e) return d.complete.call(this);
          if (f && (c === "height" || c === "width")) if (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], b.css(this, "display") === "inline" && b.css(this, "float") === "none") b.support.inlineBlockNeedsLayout ? u(this.nodeName) === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1) : this.style.display = "inline-block";
          if (b.isArray(a[c]))(d.specialEasing = d.specialEasing || {})[c] = a[c][1], a[c] = a[c][0]
        }
        if (d.overflow != null) this.style.overflow = "hidden";
        d.curAnim = b.extend({}, a);
        b.each(a, function(c, f) {
          var g = new b.fx(h, d, c);
          if (wb.test(f)) g[f === "toggle" ? e ? "show" : "hide" : f](a);
          else {
            var j = xb.exec(f),
                i = g.cur() || 0;
            if (j) {
              var l = parseFloat(j[2]),
                  k = j[3] || "px";
              k !== "px" && (b.style(h, c, (l || 1) + k), i *= (l || 1) / g.cur(), b.style(h, c, i + k));
              j[1] && (l = (j[1] === "-=" ? -1 : 1) * l + i);
              g.custom(i, l, k)
            } else g.custom(i, f, "")
          }
        });
        return !0
      })
    },
    stop: function(a, d) {
      var c = b.timers;
      a && this.queue([]);
      this.each(function() {
        for (var a = c.length - 1; a >= 0; a--) if (c[a].elem === this) {
          if (d) c[a](!0);
          c.splice(a, 1)
        }
      });
      d || this.dequeue();
      return this
    }
  });
  b.each({
    slideDown: q("show", 1),
    slideUp: q("hide", 1),
    slideToggle: q("toggle", 1),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(a, d) {
    b.fn[a] = function(a, b, c) {
      return this.animate(d, a, b, c)
    }
  });
  b.extend({
    speed: function(a, d, c) {
      var e = a && typeof a === "object" ? b.extend({}, a) : {
        complete: c || !c && d || b.isFunction(a) && a,
        duration: a,
        easing: c && d || d && !b.isFunction(d) && d
      };
      e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
      e.old = e.complete;
      e.complete = function() {
        e.queue !== !1 && b(this).dequeue();
        b.isFunction(e.old) && e.old.call(this)
      };
      return e
    },
    easing: {
      linear: function(a, b, c, e) {
        return c + e * a
      },
      swing: function(a, b, c, e) {
        return (-Math.cos(a * Math.PI) / 2 + 0.5) * e + c
      }
    },
    timers: [],
    fx: function(a, b, c) {
      this.options = b;
      this.elem = a;
      this.prop = c;
      if (!b.orig) b.orig = {}
    }
  });
  b.fx.prototype = {
    update: function() {
      this.options.step && this.options.step.call(this.elem, this.now, this);
      (b.fx.step[this.prop] || b.fx.step._default)(this)
    },
    cur: function() {
      if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
      return parseFloat(b.css(this.elem, this.prop)) || 0
    },
    custom: function(a, d, c) {
      function e(a) {
        return g.step(a)
      }
      var g = this,
          h = b.fx;
      this.startTime = b.now();
      this.start = a;
      this.end = d;
      this.unit = c || this.unit || "px";
      this.now = this.start;
      this.pos = this.state = 0;
      e.elem = this.elem;
      e() && b.timers.push(e) && !fa && (fa = setInterval(h.tick, h.interval))
    },
    show: function() {
      this.options.orig[this.prop] = b.style(this.elem, this.prop);
      this.options.show = !0;
      this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
      b(this.elem).show()
    },
    hide: function() {
      this.options.orig[this.prop] =
      b.style(this.elem, this.prop);
      this.options.hide = !0;
      this.custom(this.cur(), 0)
    },
    step: function(a) {
      var d = b.now(),
          c = !0;
      if (a || d >= this.options.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        this.options.curAnim[this.prop] = !0;
        for (var e in this.options.curAnim) this.options.curAnim[e] !== !0 && (c = !1);
        if (c) {
          if (this.options.overflow != null && !b.support.shrinkWrapBlocks) {
            var g = this.elem,
                h = this.options;
            b.each(["", "X", "Y"], function(a, b) {
              g.style["overflow" + b] = h.overflow[a]
            })
          }
          this.options.hide && b(this.elem).hide();
          if (this.options.hide || this.options.show) for (var i in this.options.curAnim) b.style(this.elem, i, this.options.orig[i]);
          this.options.complete.call(this.elem)
        }
        return !1
      } else a = d - this.startTime, this.state = a / this.options.duration, d = this.options.easing || (b.easing.swing ? "swing" : "linear"), this.pos = b.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || d](this.state, a, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update();
      return !0
    }
  };
  b.extend(b.fx, {
    tick: function() {
      for (var a = b.timers, d = 0; d < a.length; d++) a[d]() || a.splice(d--, 1);
      a.length || b.fx.stop()
    },
    interval: 13,
    stop: function() {
      clearInterval(fa);
      fa = null
    },
    speeds: {
      slow: 600,
      fast: 200,
      _default: 400
    },
    step: {
      opacity: function(a) {
        b.style(a.elem, "opacity", a.now)
      },
      _default: function(a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
      }
    }
  });
  if (b.expr && b.expr.filters) b.expr.filters.animated = function(a) {
    return b.grep(b.timers, function(b) {
      return a === b.elem
    }).length
  };
  var yb = /^t(?:able|d|h)$/i,
      Ka = /^(?:body|html)$/i;
  b.fn.offset = "getBoundingClientRect" in m.documentElement ?
  function(a) {
    var d = this[0],
        c;
    if (a) return this.each(function(d) {
      b.offset.setOffset(this, a, d)
    });
    if (!d || !d.ownerDocument) return null;
    if (d === d.ownerDocument.body) return b.offset.bodyOffset(d);
    try {
      c = d.getBoundingClientRect()
    } catch (e) {}
    var g = d.ownerDocument,
        h = g.documentElement;
    if (!c || !b.contains(h, d)) return c ? {
      top: c.top,
      left: c.left
    } : {
      top: 0,
      left: 0
    };
    d = g.body;
    g = p(g);
    return {
      top: c.top + (g.pageYOffset || b.support.boxModel && h.scrollTop || d.scrollTop) - (h.clientTop || d.clientTop || 0),
      left: c.left + (g.pageXOffset || b.support.boxModel && h.scrollLeft || d.scrollLeft) - (h.clientLeft || d.clientLeft || 0)
    }
  } : function(a) {
    var d = this[0];
    if (a) return this.each(function(d) {
      b.offset.setOffset(this, a, d)
    });
    if (!d || !d.ownerDocument) return null;
    if (d === d.ownerDocument.body) return b.offset.bodyOffset(d);
    b.offset.initialize();
    var c, e = d.offsetParent,
        g = d.ownerDocument,
        h = g.documentElement,
        i = g.body;
    c = (g =
    g.defaultView) ? g.getComputedStyle(d, null) : d.currentStyle;
    for (var l = d.offsetTop, k = d.offsetLeft;
    (d = d.parentNode) && d !== i && d !== h;) {
      if (b.offset.supportsFixedPosition && c.position === "fixed") break;
      c = g ? g.getComputedStyle(d, null) : d.currentStyle;
      l -= d.scrollTop;
      k -= d.scrollLeft;
      if (d === e) {
        l += d.offsetTop;
        k += d.offsetLeft;
        if (b.offset.doesNotAddBorder && (!b.offset.doesAddBorderForTableAndCells || !yb.test(d.nodeName))) l += parseFloat(c.borderTopWidth) || 0, k += parseFloat(c.borderLeftWidth) || 0;
        e = d.offsetParent
      }
      b.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, k += parseFloat(c.borderLeftWidth) || 0)
    }
    if (c.position === "relative" || c.position === "static") l += i.offsetTop, k += i.offsetLeft;
    b.offset.supportsFixedPosition && c.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), k += Math.max(h.scrollLeft, i.scrollLeft));
    return {
      top: l,
      left: k
    }
  };
  b.offset = {
    initialize: function() {
      var a = m.body,
          d = m.createElement("div"),
          c, e, g, h = parseFloat(b.css(a, "marginTop")) || 0;
      b.extend(d.style, {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
        border: 0,
        width: "1px",
        height: "1px",
        visibility: "hidden"
      });
      d.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
      a.insertBefore(d, a.firstChild);
      c = d.firstChild;
      e = c.firstChild;
      g = c.nextSibling.firstChild.firstChild;
      this.doesNotAddBorder = e.offsetTop !== 5;
      this.doesAddBorderForTableAndCells =
      g.offsetTop === 5;
      e.style.position = "fixed";
      e.style.top = "20px";
      this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15;
      e.style.position = e.style.top = "";
      c.style.overflow = "hidden";
      c.style.position = "relative";
      this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
      this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
      a.removeChild(d);
      b.offset.initialize = b.noop
    },
    bodyOffset: function(a) {
      var d = a.offsetTop,
          c = a.offsetLeft;
      b.offset.initialize();
      b.offset.doesNotIncludeMarginInBodyOffset && (d += parseFloat(b.css(a, "marginTop")) || 0, c += parseFloat(b.css(a, "marginLeft")) || 0);
      return {
        top: d,
        left: c
      }
    },
    setOffset: function(a, d, c) {
      var e = b.css(a, "position");
      if (e === "static") a.style.position = "relative";
      var g = b(a),
          h = g.offset(),
          i = b.css(a, "top"),
          l = b.css(a, "left"),
          k = e === "absolute" && b.inArray("auto", [i, l]) > -1;
      e = {};
      var m = {};
      k && (m = g.position());
      i = k ? m.top : parseInt(i, 10) || 0;
      l = k ? m.left : parseInt(l, 10) || 0;
      b.isFunction(d) && (d = d.call(a, c, h));
      if (d.top != null) e.top = d.top - h.top + i;
      if (d.left != null) e.left = d.left - h.left + l;
      "using" in d ? d.using.call(a, e) : g.css(e)
    }
  };
  b.fn.extend({
    position: function() {
      if (!this[0]) return null;
      var a = this[0],
          d = this.offsetParent(),
          c = this.offset(),
          e = Ka.test(d[0].nodeName) ? {
          top: 0,
          left: 0
          } : d.offset();
      c.top -= parseFloat(b.css(a, "marginTop")) || 0;
      c.left -= parseFloat(b.css(a, "marginLeft")) || 0;
      e.top += parseFloat(b.css(d[0], "borderTopWidth")) || 0;
      e.left += parseFloat(b.css(d[0], "borderLeftWidth")) || 0;
      return {
        top: c.top - e.top,
        left: c.left - e.left
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || m.body; a && !Ka.test(a.nodeName) && b.css(a, "position") === "static";) a = a.offsetParent;
        return a
      })
    }
  });
  b.each(["Left", "Top"], function(a, d) {
    var c = "scroll" + d;
    b.fn[c] = function(d) {
      var e = this[0],
          g;
      if (!e) return null;
      return d !== k ? this.each(function() {
        (g = p(this)) ? g.scrollTo(!a ? d : b(g).scrollLeft(), a ? d : b(g).scrollTop()) : this[c] = d
      }) : (g = p(e)) ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && g.document.documentElement[c] || g.document.body[c] : e[c]
    }
  });
  b.each(["Height", "Width"], function(a, c) {
    var e = c.toLowerCase();
    b.fn["inner" + c] = function() {
      return this[0] ? parseFloat(b.css(this[0], e, "padding")) : null
    };
    b.fn["outer" + c] = function(a) {
      return this[0] ? parseFloat(b.css(this[0], e, a ? "margin" : "border")) : null
    };
    b.fn[e] = function(a) {
      var g = this[0];
      if (!g) return a == null ? null : this;
      if (b.isFunction(a)) return this.each(function(c) {
        var d = b(this);
        d[e](a.call(this, c, d[e]()))
      });
      if (b.isWindow(g)) {
        var h = g.document.documentElement["client" + c];
        return g.document.compatMode === "CSS1Compat" && h || g.document.body["client" + c] || h
      } else
      return g.nodeType === 9 ? Math.max(g.documentElement["client" + c], g.body["scroll" + c], g.documentElement["scroll" + c], g.body["offset" + c], g.documentElement["offset" + c]) : a === k ? (g = b.css(g, e), h = parseFloat(g), b.isNaN(h) ? g : h) : this.css(e, typeof a === "string" ? a : a + "px")
    }
  })
})(window);
jQuery.effects ||
function(i, k) {
  function t(g) {
    var c;
    if (g && g.constructor == Array && g.length == 3) return g;
    if (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)) return [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)];
    if (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)) return [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55];
    if (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)) return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)];
    if (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)) return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)];
    if (/rgba\(0, 0, 0, 0\)/.exec(g)) return v.transparent;
    return v[i.trim(g).toLowerCase()]
  }
  function r() {
    var g = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
        c = {},
        e, h;
    if (g && g.length && g[0] && g[g[0]]) for (var i = g.length; i--;) e = g[i], typeof g[e] == "string" && (h = e.replace(/\-(\w)/g, function(c, e) {
      return e.toUpperCase()
    }), c[h] = g[e]);
    else
    for (e in g) typeof g[e] === "string" && (c[e] = g[e]);
    return c
  }
  function z(g) {
    var c, e;
    for (c in g) e = g[c], (e == null || i.isFunction(e) || c in G || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(e))) && delete g[c];
    return g
  }
  function s(g, c) {
    var e = {
      _: 0
    },
        h;
    for (h in c) g[h] != c[h] && (e[h] = c[h]);
    return e
  }
  function y(g, c, e, h) {
    if (typeof g == "object") h = c, e = null, c = g, g = c.effect;
    i.isFunction(c) && (h = c, e = null, c = {});
    if (typeof c == "number" || i.fx.speeds[c]) h = e, e = c, c = {};
    i.isFunction(e) && (h = e, e = null);
    c = c || {};
    e = e || c.duration;
    e = i.fx.off ? 0 : typeof e == "number" ? e : e in i.fx.speeds ? i.fx.speeds[e] : i.fx.speeds._default;
    h = h || c.complete;
    return [g, c, e, h]
  }
  function o(g) {
    if (!g || typeof g === "number" || i.fx.speeds[g]) return !0;
    if (typeof g === "string" && !i.effects[g]) return !0;
    return !1
  }
  i.effects = {};
  i.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(g, c) {
    i.fx.step[c] = function(e) {
      if (!e.colorInit) {
        var g;
        g = e.elem;
        var l = c,
            k;
        do {
          k = i.curCSS(g, l);
          if (k != "" && k != "transparent" || i.nodeName(g, "body")) break;
          l = "backgroundColor"
        } while (g = g.parentNode);
        g = t(k);
        e.start = g;
        e.end = t(e.end);
        e.colorInit = !0
      }
      e.elem.style[c] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
    }
  });
  var v = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0],
    transparent: [255, 255, 255]
  },
      H = ["add", "remove", "toggle"],
      G = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
      };
  i.effects.animateClass = function(g, c, e, h) {
    i.isFunction(e) && (h = e, e = null);
    return this.queue("fx", function() {
      var l = i(this),
          k = l.attr("style") || " ",
          o = z(r.call(this)),
          p, m = l.attr("className");
      i.each(H, function(b, c) {
        if (g[c]) l[c + "Class"](g[c])
      });
      p = z(r.call(this));
      l.attr("className", m);
      l.animate(s(o, p), c, e, function() {
        i.each(H, function(b, c) {
          if (g[c]) l[c + "Class"](g[c])
        });
        typeof l.attr("style") == "object" ? (l.attr("style").cssText = "", l.attr("style").cssText = k) : l.attr("style", k);
        h && h.apply(this, arguments)
      });
      o = i.queue(this);
      p = o.splice(o.length - 1, 1)[0];
      o.splice(1, 0, p);
      i.dequeue(this)
    })
  };
  i.fn.extend({
    _addClass: i.fn.addClass,
    addClass: function(g, c, e, h) {
      return c ? i.effects.animateClass.apply(this, [{
        add: g
      },
      c, e, h]) : this._addClass(g)
    },
    _removeClass: i.fn.removeClass,
    removeClass: function(g, c, e, h) {
      return c ? i.effects.animateClass.apply(this, [{
        remove: g
      },
      c, e, h]) : this._removeClass(g)
    },
    _toggleClass: i.fn.toggleClass,
    toggleClass: function(g, c, e, h, l) {
      return typeof c == "boolean" || c === k ? e ? i.effects.animateClass.apply(this, [c ? {
        add: g
      } : {
        remove: g
      },
      e, h, l]) : this._toggleClass(g, c) : i.effects.animateClass.apply(this, [{
        toggle: g
      },
      c, e, h])
    },
    switchClass: function(g, c, e, h, l) {
      return i.effects.animateClass.apply(this, [{
        add: c,
        remove: g
      },
      e, h, l])
    }
  });
  i.extend(i.effects, {
    version: "@VERSION",
    save: function(g, c) {
      for (var e = 0; e < c.length; e++) c[e] !== null && g.data("ec.storage." + c[e], g[0].style[c[e]])
    },
    restore: function(g, c) {
      for (var e = 0; e < c.length; e++) c[e] !== null && g.css(c[e], g.data("ec.storage." + c[e]))
    },
    setMode: function(g, c) {
      c == "toggle" && (c = g.is(":hidden") ? "show" : "hide");
      return c
    },
    getBaseline: function(g, c) {
      var e, h;
      switch (g[0]) {
      case "top":
        e =
        0;
        break;
      case "middle":
        e = 0.5;
        break;
      case "bottom":
        e = 1;
        break;
      default:
        e = g[0] / c.height
      }
      switch (g[1]) {
      case "left":
        h = 0;
        break;
      case "center":
        h = 0.5;
        break;
      case "right":
        h = 1;
        break;
      default:
        h = g[1] / c.width
      }
      return {
        x: h,
        y: e
      }
    },
    createWrapper: function(g) {
      if (g.parent().is(".ui-effects-wrapper")) return g.parent();
      var c = {
        width: g.outerWidth(!0),
        height: g.outerHeight(!0),
        "float": g.css("float")
      },
          e = i("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        });
      g.wrap(e);
      e = g.parent();
      g.css("position") == "static" ? (e.css({
        position: "relative"
      }), g.css({
        position: "relative"
      })) : (i.extend(c, {
        position: g.css("position"),
        zIndex: g.css("z-index")
      }), i.each(["top", "left", "bottom", "right"], function(e, i) {
        c[i] = g.css(i);
        isNaN(parseInt(c[i], 10)) && (c[i] = "auto")
      }), g.css({
        position: "relative",
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto"
      }));
      return e.css(c).show()
    },
    removeWrapper: function(g) {
      if (g.parent().is(".ui-effects-wrapper")) return g.parent().replaceWith(g);
      return g
    },
    setTransition: function(g, c, e, h) {
      h = h || {};
      i.each(c, function(c, i) {
        unit = g.cssUnit(i);
        unit[0] > 0 && (h[i] = unit[0] * e + unit[1])
      });
      return h
    }
  });
  i.fn.extend({
    effect: function(g) {
      var c = y.apply(this, arguments),
          e = {
          options: c[1],
          duration: c[2],
          callback: c[3]
          };
      c = e.options.mode;
      var h = i.effects[g];
      if (i.fx.off || !h) return c ? this[c](e.duration, e.callback) : this.each(function() {
        e.callback && e.callback.call(this)
      });
      return h.call(this, e)
    },
    _show: i.fn.show,
    show: function(g) {
      if (o(g)) return this._show.apply(this, arguments);
      else {
        var c = y.apply(this, arguments);
        c[1].mode = "show";
        return this.effect.apply(this, c)
      }
    },
    _hide: i.fn.hide,
    hide: function(g) {
      if (o(g)) return this._hide.apply(this, arguments);
      else {
        var c = y.apply(this, arguments);
        c[1].mode = "hide";
        return this.effect.apply(this, c)
      }
    },
    __toggle: i.fn.toggle,
    toggle: function(g) {
      if (o(g) || typeof g === "boolean" || i.isFunction(g)) return this.__toggle.apply(this, arguments);
      else {
        var c = y.apply(this, arguments);
        c[1].mode = "toggle";
        return this.effect.apply(this, c)
      }
    },
    cssUnit: function(g) {
      var c = this.css(g),
          e = [];
      i.each(["em", "px", "%", "pt"], function(g, i) {
        c.indexOf(i) > 0 && (e = [parseFloat(c), i])
      });
      return e
    }
  });
  i.easing.jswing = i.easing.swing;
  i.extend(i.easing, {
    def: "easeOutQuad",
    swing: function(g, c, e, h, l) {
      return i.easing[i.easing.def](g, c, e, h, l)
    },
    easeInQuad: function(g, c, e, h, i) {
      return h * (c /= i) * c + e
    },
    easeOutQuad: function(g, c, e, h, i) {
      return -h * (c /= i) * (c - 2) + e
    },
    easeInOutQuad: function(g, c, e, h, i) {
      if ((c /= i / 2) < 1) return h / 2 * c * c + e;
      return -h / 2 * (--c * (c - 2) - 1) + e
    },
    easeInCubic: function(g, c, e, h, i) {
      return h * (c /= i) * c * c + e
    },
    easeOutCubic: function(g, c, e, h, i) {
      return h * ((c = c / i - 1) * c * c + 1) + e
    },
    easeInOutCubic: function(g, c, e, h, i) {
      if ((c /= i / 2) < 1) return h / 2 * c * c * c + e;
      return h / 2 * ((c -= 2) * c * c + 2) + e
    },
    easeInQuart: function(g, c, e, h, i) {
      return h * (c /= i) * c * c * c + e
    },
    easeOutQuart: function(g, c, e, h, i) {
      return -h * ((c = c / i - 1) * c * c * c - 1) + e
    },
    easeInOutQuart: function(g, c, e, h, i) {
      if ((c /= i / 2) < 1) return h / 2 * c * c * c * c + e;
      return -h / 2 * ((c -= 2) * c * c * c - 2) + e
    },
    easeInQuint: function(g, c, e, h, i) {
      return h * (c /= i) * c * c * c * c + e
    },
    easeOutQuint: function(g, c, e, h, i) {
      return h * ((c = c / i - 1) * c * c * c * c + 1) + e
    },
    easeInOutQuint: function(g, c, e, h, i) {
      if ((c /= i / 2) < 1) return h / 2 * c * c * c * c * c + e;
      return h / 2 * ((c -= 2) * c * c * c * c + 2) + e
    },
    easeInSine: function(g, c, e, h, i) {
      return -h * Math.cos(c / i * (Math.PI / 2)) + h + e
    },
    easeOutSine: function(g, c, e, h, i) {
      return h * Math.sin(c / i * (Math.PI / 2)) + e
    },
    easeInOutSine: function(g, c, e, h, i) {
      return -h / 2 * (Math.cos(Math.PI * c / i) - 1) + e
    },
    easeInExpo: function(g, c, e, h, i) {
      return c == 0 ? e : h * Math.pow(2, 10 * (c / i - 1)) + e
    },
    easeOutExpo: function(g, c, e, h, i) {
      return c == i ? e + h : h * (-Math.pow(2, -10 * c / i) + 1) + e
    },
    easeInOutExpo: function(g, c, e, h, i) {
      if (c == 0) return e;
      if (c == i) return e + h;
      if ((c /= i / 2) < 1) return h / 2 * Math.pow(2, 10 * (c - 1)) + e;
      return h / 2 * (-Math.pow(2, -10 * --c) + 2) + e
    },
    easeInCirc: function(g, c, e, h, i) {
      return -h * (Math.sqrt(1 - (c /= i) * c) - 1) + e
    },
    easeOutCirc: function(g, c, e, h, i) {
      return h * Math.sqrt(1 - (c = c / i - 1) * c) + e
    },
    easeInOutCirc: function(g, c, e, h, i) {
      if ((c /= i / 2) < 1) return -h / 2 * (Math.sqrt(1 - c * c) - 1) + e;
      return h / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + e
    },
    easeInElastic: function(g, c, e, h, i) {
      g = 1.70158;
      var k = 0,
          o = h;
      if (c == 0) return e;
      if ((c /= i) == 1) return e + h;
      k || (k = i * 0.3);
      o < Math.abs(h) ? (o = h, g = k / 4) : g = k / (2 * Math.PI) * Math.asin(h / o);
      return -(o * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * i - g) * 2 * Math.PI / k)) + e
    },
    easeOutElastic: function(g, c, e, h, i) {
      g = 1.70158;
      var k = 0,
          o = h;
      if (c == 0) return e;
      if ((c /= i) == 1) return e + h;
      k || (k = i * 0.3);
      o < Math.abs(h) ? (o = h, g = k / 4) : g = k / (2 * Math.PI) * Math.asin(h / o);
      return o * Math.pow(2, -10 * c) * Math.sin((c * i - g) * 2 * Math.PI / k) + h + e
    },
    easeInOutElastic: function(g, c, e, h, i) {
      g = 1.70158;
      var k = 0,
          o = h;
      if (c == 0) return e;
      if ((c /= i / 2) == 2) return e + h;
      k || (k = i * 0.3 * 1.5);
      o < Math.abs(h) ? (o = h, g = k / 4) : g = k / (2 * Math.PI) * Math.asin(h / o);
      if (c < 1) return -0.5 * o * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * i - g) * 2 * Math.PI / k) + e;
      return o * Math.pow(2, -10 * (c -= 1)) * Math.sin((c * i - g) * 2 * Math.PI / k) * 0.5 + h + e
    },
    easeInBack: function(g, c, e, h, i, o) {
      o == k && (o = 1.70158);
      return h * (c /= i) * c * ((o + 1) * c - o) + e
    },
    easeOutBack: function(g, c, e, h, i, o) {
      o == k && (o = 1.70158);
      return h * ((c = c / i - 1) * c * ((o + 1) * c + o) + 1) + e
    },
    easeInOutBack: function(g, c, e, h, i, o) {
      o == k && (o = 1.70158);
      if ((c /= i / 2) < 1) return h / 2 * c * c * (((o *= 1.525) + 1) * c - o) + e;
      return h / 2 * ((c -= 2) * c * (((o *= 1.525) + 1) * c + o) + 2) + e
    },
    easeInBounce: function(g, c, e, h, k) {
      return h - i.easing.easeOutBounce(g, k - c, 0, h, k) + e
    },
    easeOutBounce: function(g, c, e, h, i) {
      return (c /= i) < 1 / 2.75 ? h * 7.5625 * c * c + e : c < 2 / 2.75 ? h * (7.5625 * (c -= 1.5 / 2.75) * c + 0.75) + e : c < 2.5 / 2.75 ? h * (7.5625 * (c -= 2.25 / 2.75) * c + 0.9375) + e : h * (7.5625 * (c -= 2.625 / 2.75) * c + 0.984375) + e
    },
    easeInOutBounce: function(g, c, e, h, k) {
      if (c < k / 2) return i.easing.easeInBounce(g, c * 2, 0, h, k) * 0.5 + e;
      return i.easing.easeOutBounce(g, c * 2 - k, 0, h, k) * 0.5 + h * 0.5 + e
    }
  })
}(jQuery);
(function(i) {
  i.effects.slide = function(k) {
    return this.queue(function() {
      var t = i(this),
          r = ["position", "top", "bottom", "left", "right"],
          z = i.effects.setMode(t, k.options.mode || "show"),
          s = k.options.direction || "left";
      i.effects.save(t, r);
      t.show();
      i.effects.createWrapper(t).css({
        overflow: "hidden"
      });
      var y = s == "up" || s == "down" ? "top" : "left";
      s = s == "up" || s == "left" ? "pos" : "neg";
      var o = k.options.distance || (y == "top" ? t.outerHeight({
        margin: !0
      }) : t.outerWidth({
        margin: !0
      }));
      z == "show" && t.css(y, s == "pos" ? isNaN(o) ? "-" + o : -o : o);
      var v = {};
      v[y] = (z == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + o;
      t.animate(v, {
        queue: !1,
        duration: k.duration,
        easing: k.options.easing,
        complete: function() {
          z == "hide" && t.hide();
          i.effects.restore(t, r);
          i.effects.removeWrapper(t);
          k.callback && k.callback.apply(this, arguments);
          t.dequeue()
        }
      })
    })
  }
})(jQuery);

function prettyDate(i) {
  i = new Date(i || 0);
  i = ((new Date).getTime() - i.getTime()) / 1E3;
  var k = Math.floor(i / 86400);
  if (!isNaN(k) && !(k < 0 || k >= 31)) return k == 0 && (i < 60 && "just now" || i < 120 && "1 minute ago" || i < 3600 && Math.floor(i / 60) + " minutes ago" || i < 7200 && "1 hour ago" || i < 86400 && Math.floor(i / 3600) + " hours ago") || k == 1 && "Yesterday" || k < 7 && k + " days ago" || k < 31 && Math.ceil(k / 7) + " weeks ago"
}
if (typeof jQuery != "undefined") jQuery.fn.prettyDate = function() {
  return this.each(function() {
    var i = prettyDate(jQuery(this).attr("data-time"));
    i && jQuery(this).text(i)
  })
};
$(function() {
  $.ajaxSetup({
    dataType: "script"
  });
  $("#group_container").delegate(".item", "mouseover", function() {
    $("#user_pics").addClass("on");
    $("#user_" + $(this).data("user")).addClass("active");
    $("#usern_" + $(this).data("user")).addClass("active")
  });
  $("#group_container").delegate(".item", "mouseout", function() {
    $("#user_pics").removeClass("on");
    $("#user_" + $(this).data("user")).removeClass("active");
    $("#usern_" + $(this).data("user")).removeClass("active")
  });
  $("#user_pics").delegate("li", "mouseover", function() {
    $(this).addClass("active");
    $("#user_pics").addClass("on");
    $("#group_container").addClass("on");
    $(".item").filter("." + this.id).addClass("active")
  });
  $("#user_pics").delegate("li", "mouseout", function() {
    $(this).removeClass("active");
    $("#user_pics").removeClass("on");
    $("#group_container").removeClass("on");
    $(".item").filter(".active").removeClass("active")
  });
  $("#group_container").delegate(".item", "click", function() {
    enlargeItem($(this).data("item"))
  });
  $("#single").click(function(i) {
    if (i.target.tagName.toLowerCase() == "video" || i.target.tagName.toLowerCase() == "a") {
      if (i.target.id == "arr_right") return nextItem(), !1;
      if (i.target.id == "arr_left") return prevItem(), !1;
      return !0
    } else
    return hideItem(), !1
  });
  $("#fader").click(function() {
    hideItem();
    return !1
  });
  $(document).keydown(function(i) {
    if (i.keyCode == 37 || i.keyCode == 39 || i.keyCode == 32 || i.keyCode == 27) if (i.keyCode == 39) nextItem();
    else if (i.keyCode == 37) prevItem();
    else if (i.keyCode == 27) hideItem();
    else
    return $("#single").is(":visible") ? hideItem() : newItem(), !1
  });
  typeof groupCode != "undefined" && $.get("/s/" + groupCode);
  typeof pageToken != "undefined" && $.get("/p/" + pageToken)
});
var enlargeItem = function(i) {
  $("#single").data("item", i).html(ml_items["item_" + i].html).show(300);
  $("#single").find(".user em").html(prettyDate(ml_items["item_" + i].tsClient));
  $("#fader").show()
},
    hideItem = function() {
    $("#fader").hide();
    $("#single").hide(300)
    },
    nextItem = function() {
    var i = $("#single").data("item");
    i = $("#item_" + i).nextAll(".item:first").data("item") || $(".item:first").data("item");
    enlargeItem(i, !0)
    },
    prevItem = function() {
    var i = $("#single").data("item");
    i = $("#item_" + i).prevAll(".item:first").data("item") || $(".item:last").data("item");
    enlargeItem(i, !0)
    },
    newItem = function() {
    var i = $("#single").data("item") || $(".item:first").data("item");
    enlargeItem(i, !0)
    };
$.fn.duplicate = function(i, k) {
  for (var t = [], r = 0; r < i; r++) $.merge(t, this.clone(k).get());
  return this.pushStack(t)
};
var autoRefresh = function() {
  setTimeout(function() {
    window.location.reload()
  }, 6E4)
};
