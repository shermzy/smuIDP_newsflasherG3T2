/*
 * Raphael 1.5.2 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 */
(function() {
    function a() {
        if (a.is(arguments[0], G)) {
            var b = arguments[0], d = bV[m](a, b.splice(0, 3 + a.is(b[0], E))), e = d.set();
            for (var g = 0, h = b[w]; g < h; g++) {
                var i = b[g] || {};
                c[f](i.type) && e[L](d[i.type]().attr(i))
            }
            return e
        }
        return bV[m](a, arguments)
    }
    a.version = "1.5.2";
    var b = /[, ]+/, c = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1}, d = /\{(\d+)\}/g, e = "prototype", f = "hasOwnProperty", g = document, h = window, i = {was: Object[e][f].call(h, "Raphael"), is: h.Raphael}, j = function() {
        this.customAttributes = {}
    }, k, l = "appendChild", m = "apply", n = "concat", o = "createTouch"in g, p = "", q = " ", r = String, s = "split", t = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[s](q), u = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, v = "join", w = "length", x = r[e].toLowerCase, y = Math, z = y.max, A = y.min, B = y.abs, C = y.pow, D = y.PI, E = "number", F = "string", G = "array", H = "toString", I = "fill", J = Object[e][H], K = {}, L = "push", M = /^url\(['"]?([^\)]+?)['"]?\)$/i, N = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i, O = {"NaN": 1, Infinity: 1, "-Infinity": 1}, P = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, Q = y.round, R = "setAttribute", S = parseFloat, T = parseInt, U = " progid:DXImageTransform.Microsoft", V = r[e].toUpperCase, W = {blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: "10px \"Arial\"", "font-family": "\"Arial\"", "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", opacity: 1, path: "M0,0", r: 0, rotation: 0, rx: 0, ry: 0, scale: "1 1", src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", translation: "0 0", width: 0, x: 0, y: 0}, X = {along: "along", blur: E, "clip-rect": "csv", cx: E, cy: E, fill: "colour", "fill-opacity": E, "font-size": E, height: E, opacity: E, path: "path", r: E, rotation: "csv", rx: E, ry: E, scale: "csv", stroke: "colour", "stroke-opacity": E, "stroke-width": E, translation: "csv", width: E, x: E, y: E}, Y = "replace", Z = /^(from|to|\d+%?)$/, $ = /\s*,\s*/, _ = {hs: 1, rg: 1}, ba = /,?([achlmqrstvxz]),?/gi, bb = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig, bc = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig, bd = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/, be = function(a, b) {
        return a.key - b.key
    };
    a.type = h.SVGAngle || g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (a.type == "VML") {
        var bf = g.createElement("div"), bg;
        bf.innerHTML = "<v:shape adj=\"1\"/>";
        bg = bf.firstChild;
        bg.style.behavior = "url(#default#VML)";
        if (!(bg && typeof bg.adj == "object"))
            return a.type = null;
        bf = null
    }
    a.svg = !(a.vml = a.type == "VML");
    j[e] = a[e];
    k = j[e];
    a._id = 0;
    a._oid = 0;
    a.fn = {};
    a.is = function(a, b) {
        b = x.call(b);
        if (b == "finite")
            return!O[f](+a);
        return b == "null" && a === null || b == typeof a || b == "object" && a === Object(a) || b == "array" && Array.isArray && Array.isArray(a) || J.call(a).slice(8, -1).toLowerCase() == b
    };
    a.angle = function(b, c, d, e, f, g) {
        {
            if (f == null) {
                var h = b - d, i = c - e;
                if (!h && !i)
                    return 0;
                return((h < 0) * 180 + y.atan(-i / -h) * 180 / D + 360) % 360
            }
            return a.angle(b, c, f, g) - a.angle(d, e, f, g)
        }
    };
    a.rad = function(a) {
        return a % 360 * D / 180
    };
    a.deg = function(a) {
        return a * 180 / D % 360
    };
    a.snapTo = function(b, c, d) {
        d = a.is(d, "finite") ? d : 10;
        if (a.is(b, G)) {
            var e = b.length;
            while (e--)
                if (B(b[e] - c) <= d)
                    return b[e]
        } else {
            b = +b;
            var f = c % b;
            if (f < d)
                return c - f;
            if (f > b - d)
                return c - f + b
        }
        return c
    };
    function bh() {
        var a = [], b = 0;
        for (; b < 32; b++)
            a[b] = (~(~(y.random() * 16)))[H](16);
        a[12] = 4;
        a[16] = (a[16] & 3 | 8)[H](16);
        return"r-" + a[v]("")
    }
    a.setWindow = function(a) {
        h = a;
        g = h.document
    };
    var bi = function(b) {
        if (a.vml) {
            var c = /^\s+|\s+$/g, d;
            try {
                var e = new ActiveXObject("htmlfile");
                e.write("<body>");
                e.close();
                d = e.body
            } catch (a) {
                d = createPopup().document.body
            }
            var f = d.createTextRange();
            bi = bm(function(a) {
                try {
                    d.style.color = r(a)[Y](c, p);
                    var b = f.queryCommandValue("ForeColor");
                    b = (b & 255) << 16 | b & 65280 | (b & 16711680) >>> 16;
                    return"#" + ("fff" + b[H](16)).slice(-6)
                } catch (a) {
                    return"none"
                }
            })
        } else {
            var h = g.createElement("i");
            h.title = "Raphaël Colour Picker";
            h.style.display = "none";
            g.body[l](h);
            bi = bm(function(a) {
                h.style.color = a;
                return g.defaultView.getComputedStyle(h, p).getPropertyValue("color")
            })
        }
        return bi(b)
    }, bj = function() {
        return"hsb(" + [this.h, this.s, this.b] + ")"
    }, bk = function() {
        return"hsl(" + [this.h, this.s, this.l] + ")"
    }, bl = function() {
        return this.hex
    };
    a.hsb2rgb = function(b, c, d, e) {
        if (a.is(b, "object") && "h"in b && "s"in b && "b"in b) {
            d = b.b;
            c = b.s;
            b = b.h;
            e = b.o
        }
        return a.hsl2rgb(b, c, d / 2, e)
    };
    a.hsl2rgb = function(b, c, d, e) {
        if (a.is(b, "object") && "h"in b && "s"in b && "l"in b) {
            d = b.l;
            c = b.s;
            b = b.h
        }
        if (b > 1 || c > 1 || d > 1) {
            b /= 360;
            c /= 100;
            d /= 100
        }
        var f = {}, g = ["r", "g", "b"], h, i, j, k, l, m;
        if (c) {
            d < 0.5 ? h = d * (1 + c) : h = d + c - d * c;
            i = 2 * d - h;
            for (var n = 0; n < 3; n++) {
                j = b + 1 / 3 * -(n - 1);
                j < 0 && j++;
                j > 1 && j--;
                j * 6 < 1 ? f[g[n]] = i + (h - i) * 6 * j : j * 2 < 1 ? f[g[n]] = h : j * 3 < 2 ? f[g[n]] = i + (h - i) * (2 / 3 - j) * 6 : f[g[n]] = i
            }
        } else
            f = {r: d, g: d, b: d};
        f.r *= 255;
        f.g *= 255;
        f.b *= 255;
        f.hex = "#" + (16777216 | f.b | f.g << 8 | f.r << 16).toString(16).slice(1);
        a.is(e, "finite") && (f.opacity = e);
        f.toString = bl;
        return f
    };
    a.rgb2hsb = function(b, c, d) {
        if (c == null && a.is(b, "object") && "r"in b && "g"in b && "b"in b) {
            d = b.b;
            c = b.g;
            b = b.r
        }
        if (c == null && a.is(b, F)) {
            var e = a.getRGB(b);
            b = e.r;
            c = e.g;
            d = e.b
        }
        if (b > 1 || c > 1 || d > 1) {
            b /= 255;
            c /= 255;
            d /= 255
        }
        var f = z(b, c, d), g = A(b, c, d), h, i, j = f;
        {
            if (g == f)
                return{h: 0, s: 0, b: f, toString: bj};
            var k = f - g;
            i = k / f;
            b == f ? h = (c - d) / k : c == f ? h = 2 + (d - b) / k : h = 4 + (b - c) / k;
            h /= 6;
            h < 0 && h++;
            h > 1 && h--
        }
        return{h: h, s: i, b: j, toString: bj}
    };
    a.rgb2hsl = function(b, c, d) {
        if (c == null && a.is(b, "object") && "r"in b && "g"in b && "b"in b) {
            d = b.b;
            c = b.g;
            b = b.r
        }
        if (c == null && a.is(b, F)) {
            var e = a.getRGB(b);
            b = e.r;
            c = e.g;
            d = e.b
        }
        if (b > 1 || c > 1 || d > 1) {
            b /= 255;
            c /= 255;
            d /= 255
        }
        var f = z(b, c, d), g = A(b, c, d), h, i, j = (f + g) / 2, k;
        if (g == f)
            k = {h: 0, s: 0, l: j};
        else {
            var l = f - g;
            i = j < 0.5 ? l / (f + g) : l / (2 - f - g);
            b == f ? h = (c - d) / l : c == f ? h = 2 + (d - b) / l : h = 4 + (b - c) / l;
            h /= 6;
            h < 0 && h++;
            h > 1 && h--;
            k = {h: h, s: i, l: j}
        }
        k.toString = bk;
        return k
    };
    a._path2string = function() {
        return this.join(",")[Y](ba, "$1")
    };
    function bm(a, b, c) {
        function d() {
            var g = Array[e].slice.call(arguments, 0), h = g[v]("►"), i = d.cache = d.cache || {}, j = d.count = d.count || [];
            if (i[f](h))
                return c ? c(i[h]) : i[h];
            j[w] >= 1000 && delete i[j.shift()];
            j[L](h);
            i[h] = a[m](b, g);
            return c ? c(i[h]) : i[h]
        }
        return d
    }
    a.getRGB = bm(function(b) {
        if (!b || !(!((b = r(b)).indexOf("-") + 1)))
            return{r: -1, g: -1, b: -1, hex: "none", error: 1};
        if (b == "none")
            return{r: -1, g: -1, b: -1, hex: "none"};
        !(_[f](b.toLowerCase().substring(0, 2)) || b.charAt() == "#") && (b = bi(b));
        var c, d, e, g, h, i, j, k = b.match(N);
        if (k) {
            if (k[2]) {
                g = T(k[2].substring(5), 16);
                e = T(k[2].substring(3, 5), 16);
                d = T(k[2].substring(1, 3), 16)
            }
            if (k[3]) {
                g = T((i = k[3].charAt(3)) + i, 16);
                e = T((i = k[3].charAt(2)) + i, 16);
                d = T((i = k[3].charAt(1)) + i, 16)
            }
            if (k[4]) {
                j = k[4][s]($);
                d = S(j[0]);
                j[0].slice(-1) == "%" && (d *= 2.55);
                e = S(j[1]);
                j[1].slice(-1) == "%" && (e *= 2.55);
                g = S(j[2]);
                j[2].slice(-1) == "%" && (g *= 2.55);
                k[1].toLowerCase().slice(0, 4) == "rgba" && (h = S(j[3]));
                j[3] && j[3].slice(-1) == "%" && (h /= 100)
            }
            if (k[5]) {
                j = k[5][s]($);
                d = S(j[0]);
                j[0].slice(-1) == "%" && (d *= 2.55);
                e = S(j[1]);
                j[1].slice(-1) == "%" && (e *= 2.55);
                g = S(j[2]);
                j[2].slice(-1) == "%" && (g *= 2.55);
                (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d /= 360);
                k[1].toLowerCase().slice(0, 4) == "hsba" && (h = S(j[3]));
                j[3] && j[3].slice(-1) == "%" && (h /= 100);
                return a.hsb2rgb(d, e, g, h)
            }
            if (k[6]) {
                j = k[6][s]($);
                d = S(j[0]);
                j[0].slice(-1) == "%" && (d *= 2.55);
                e = S(j[1]);
                j[1].slice(-1) == "%" && (e *= 2.55);
                g = S(j[2]);
                j[2].slice(-1) == "%" && (g *= 2.55);
                (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d /= 360);
                k[1].toLowerCase().slice(0, 4) == "hsla" && (h = S(j[3]));
                j[3] && j[3].slice(-1) == "%" && (h /= 100);
                return a.hsl2rgb(d, e, g, h)
            }
            k = {r: d, g: e, b: g};
            k.hex = "#" + (16777216 | g | e << 8 | d << 16).toString(16).slice(1);
            a.is(h, "finite") && (k.opacity = h);
            return k
        }
        return{r: -1, g: -1, b: -1, hex: "none", error: 1}
    }, a);
    a.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: a || 0.75}, c = this.hsb2rgb(b.h, b.s, b.b);
        b.h += 0.075;
        if (b.h > 1) {
            b.h = 0;
            b.s -= 0.2;
            b.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: b.b})
        }
        return c.hex
    };
    a.getColor.reset = function() {
        delete this.start
    };
    a.parsePathString = bm(function(b) {
        if (!b)
            return null;
        var c = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}, d = [];
        a.is(b, G) && a.is(b[0], G) && (d = bo(b));
        d[w] || r(b)[Y](bb, function(a, b, e) {
            var f = [], g = x.call(b);
            e[Y](bc, function(a, b) {
                b && f[L](+b)
            });
            if (g == "m" && f[w] > 2) {
                d[L]([b][n](f.splice(0, 2)));
                g = "l";
                b = b == "m" ? "l" : "L"
            }
            while (f[w] >= c[g]) {
                d[L]([b][n](f.splice(0, c[g])));
                if (!c[g])
                    break
            }
        });
        d[H] = a._path2string;
        return d
    });
    a.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i, k = C(j, 3) * a + C(j, 2) * 3 * i * c + j * 3 * i * i * e + C(i, 3) * g, l = C(j, 3) * b + C(j, 2) * 3 * i * d + j * 3 * i * i * f + C(i, 3) * h, m = a + 2 * i * (c - a) + i * i * (e - 2 * c + a), n = b + 2 * i * (d - b) + i * i * (f - 2 * d + b), o = c + 2 * i * (e - c) + i * i * (g - 2 * e + c), p = d + 2 * i * (f - d) + i * i * (h - 2 * f + d), q = (1 - i) * a + i * c, r = (1 - i) * b + i * d, s = (1 - i) * e + i * g, t = (1 - i) * f + i * h, u = 90 - y.atan((m - o) / (n - p)) * 180 / D;
        (m > o || n < p) && (u += 180);
        return{x: k, y: l, m: {x: m, y: n}, n: {x: o, y: p}, start: {x: q, y: r}, end: {x: s, y: t}, alpha: u}
    };
    var bn = bm(function(a) {
        if (!a)
            return{x: 0, y: 0, width: 0, height: 0};
        a = bw(a);
        var b = 0, c = 0, d = [], e = [], f;
        for (var g = 0, h = a[w]; g < h; g++) {
            f = a[g];
            if (f[0] == "M") {
                b = f[1];
                c = f[2];
                d[L](b);
                e[L](c)
            } else {
                var i = bv(b, c, f[1], f[2], f[3], f[4], f[5], f[6]);
                d = d[n](i.min.x, i.max.x);
                e = e[n](i.min.y, i.max.y);
                b = f[5];
                c = f[6]
            }
        }
        var j = A[m](0, d), k = A[m](0, e);
        return{x: j, y: k, width: z[m](0, d) - j, height: z[m](0, e) - k}
    }), bo = function(b) {
        var c = [];
        if (!a.is(b, G) || !a.is(b && b[0], G))
            b = a.parsePathString(b);
        for (var d = 0, e = b[w]; d < e; d++) {
            c[d] = [];
            for (var f = 0, g = b[d][w]; f < g; f++)
                c[d][f] = b[d][f]
        }
        c[H] = a._path2string;
        return c
    }, bp = bm(function(b) {
        if (!a.is(b, G) || !a.is(b && b[0], G))
            b = a.parsePathString(b);
        var c = [], d = 0, e = 0, f = 0, g = 0, h = 0;
        if (b[0][0] == "M") {
            d = b[0][1];
            e = b[0][2];
            f = d;
            g = e;
            h++;
            c[L](["M", d, e])
        }
        for (var i = h, j = b[w]; i < j; i++) {
            var k = c[i] = [], l = b[i];
            if (l[0] != x.call(l[0])) {
                k[0] = x.call(l[0]);
                switch (k[0]) {
                    case"a":
                        k[1] = l[1];
                        k[2] = l[2];
                        k[3] = l[3];
                        k[4] = l[4];
                        k[5] = l[5];
                        k[6] = +(l[6] - d).toFixed(3);
                        k[7] = +(l[7] - e).toFixed(3);
                        break;
                    case"v":
                        k[1] = +(l[1] - e).toFixed(3);
                        break;
                    case"m":
                        f = l[1];
                        g = l[2];
                    default:
                        for (var m = 1, n = l[w]; m < n; m++)
                            k[m] = +(l[m] - (m % 2 ? d : e)).toFixed(3)
                    }
            } else {
                k = c[i] = [];
                if (l[0] == "m") {
                    f = l[1] + d;
                    g = l[2] + e
                }
                for (var o = 0, p = l[w]; o < p; o++)
                    c[i][o] = l[o]
            }
            var q = c[i][w];
            switch (c[i][0]) {
                case"z":
                    d = f;
                    e = g;
                    break;
                case"h":
                    d += +c[i][q - 1];
                    break;
                case"v":
                    e += +c[i][q - 1];
                    break;
                default:
                    d += +c[i][q - 2];
                    e += +c[i][q - 1]
                }
        }
        c[H] = a._path2string;
        return c
    }, 0, bo), bq = bm(function(b) {
        if (!a.is(b, G) || !a.is(b && b[0], G))
            b = a.parsePathString(b);
        var c = [], d = 0, e = 0, f = 0, g = 0, h = 0;
        if (b[0][0] == "M") {
            d = +b[0][1];
            e = +b[0][2];
            f = d;
            g = e;
            h++;
            c[0] = ["M", d, e]
        }
        for (var i = h, j = b[w]; i < j; i++) {
            var k = c[i] = [], l = b[i];
            if (l[0] != V.call(l[0])) {
                k[0] = V.call(l[0]);
                switch (k[0]) {
                    case"A":
                        k[1] = l[1];
                        k[2] = l[2];
                        k[3] = l[3];
                        k[4] = l[4];
                        k[5] = l[5];
                        k[6] = +(l[6] + d);
                        k[7] = +(l[7] + e);
                        break;
                    case"V":
                        k[1] = +l[1] + e;
                        break;
                    case"H":
                        k[1] = +l[1] + d;
                        break;
                    case"M":
                        f = +l[1] + d;
                        g = +l[2] + e;
                    default:
                        for (var m = 1, n = l[w]; m < n; m++)
                            k[m] = +l[m] + (m % 2 ? d : e)
                    }
            } else
                for (var o = 0, p = l[w]; o < p; o++)
                    c[i][o] = l[o];
            switch (k[0]) {
                case"Z":
                    d = f;
                    e = g;
                    break;
                case"H":
                    d = k[1];
                    break;
                case"V":
                    e = k[1];
                    break;
                case"M":
                    f = c[i][c[i][w] - 2];
                    g = c[i][c[i][w] - 1];
                default:
                    d = c[i][c[i][w] - 2];
                    e = c[i][c[i][w] - 1]
                }
        }
        c[H] = a._path2string;
        return c
    }, null, bo), br = function(a, b, c, d) {
        return[a, b, c, d, c, d]
    }, bs = function(a, b, c, d, e, f) {
        var g = 1 / 3, h = 2 / 3;
        return[g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }, bt = function(a, b, c, d, e, f, g, h, i, j) {
        var k = D * 120 / 180, l = D / 180 * (+e || 0), m = [], o, p = bm(function(a, b, c) {
            var d = a * y.cos(c) - b * y.sin(c), e = a * y.sin(c) + b * y.cos(c);
            return{x: d, y: e}
        });
        if (j) {
            G = j[0];
            H = j[1];
            E = j[2];
            F = j[3]
        } else {
            o = p(a, b, -l);
            a = o.x;
            b = o.y;
            o = p(h, i, -l);
            h = o.x;
            i = o.y;
            var q = y.cos(D / 180 * e), r = y.sin(D / 180 * e), t = (a - h) / 2, u = (b - i) / 2, x = t * t / (c * c) + u * u / (d * d);
            if (x > 1) {
                x = y.sqrt(x);
                c = x * c;
                d = x * d
            }
            var z = c * c, A = d * d, C = (f == g ? -1 : 1) * y.sqrt(B((z * A - z * u * u - A * t * t) / (z * u * u + A * t * t))), E = C * c * u / d + (a + h) / 2, F = C * -d * t / c + (b + i) / 2, G = y.asin(((b - F) / d).toFixed(9)), H = y.asin(((i - F) / d).toFixed(9));
            G = a < E ? D - G : G;
            H = h < E ? D - H : H;
            G < 0 && (G = D * 2 + G);
            H < 0 && (H = D * 2 + H);
            g && G > H && (G = G - D * 2);
            !g && H > G && (H = H - D * 2)
        }
        var I = H - G;
        if (B(I) > k) {
            var J = H, K = h, L = i;
            H = G + k * (g && H > G ? 1 : -1);
            h = E + c * y.cos(H);
            i = F + d * y.sin(H);
            m = bt(h, i, c, d, e, 0, g, K, L, [H, J, E, F])
        }
        I = H - G;
        var M = y.cos(G), N = y.sin(G), O = y.cos(H), P = y.sin(H), Q = y.tan(I / 4), R = 4 / 3 * c * Q, S = 4 / 3 * d * Q, T = [a, b], U = [a + R * N, b - S * M], V = [h + R * P, i - S * O], W = [h, i];
        U[0] = 2 * T[0] - U[0];
        U[1] = 2 * T[1] - U[1];
        {
            if (j)
                return[U, V, W][n](m);
            m = [U, V, W][n](m)[v]()[s](",");
            var X = [];
            for (var Y = 0, Z = m[w]; Y < Z; Y++)
                X[Y] = Y % 2 ? p(m[Y - 1], m[Y], l).y : p(m[Y], m[Y + 1], l).x;
            return X
        }
    }, bu = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i;
        return{x: C(j, 3) * a + C(j, 2) * 3 * i * c + j * 3 * i * i * e + C(i, 3) * g, y: C(j, 3) * b + C(j, 2) * 3 * i * d + j * 3 * i * i * f + C(i, 3) * h}
    }, bv = bm(function(a, b, c, d, e, f, g, h) {
        var i = e - 2 * c + a - (g - 2 * e + c), j = 2 * (c - a) - 2 * (e - c), k = a - c, l = (-j + y.sqrt(j * j - 4 * i * k)) / 2 / i, n = (-j - y.sqrt(j * j - 4 * i * k)) / 2 / i, o = [b, h], p = [a, g], q;
        B(l) > "1e12" && (l = 0.5);
        B(n) > "1e12" && (n = 0.5);
        if (l > 0 && l < 1) {
            q = bu(a, b, c, d, e, f, g, h, l);
            p[L](q.x);
            o[L](q.y)
        }
        if (n > 0 && n < 1) {
            q = bu(a, b, c, d, e, f, g, h, n);
            p[L](q.x);
            o[L](q.y)
        }
        i = f - 2 * d + b - (h - 2 * f + d);
        j = 2 * (d - b) - 2 * (f - d);
        k = b - d;
        l = (-j + y.sqrt(j * j - 4 * i * k)) / 2 / i;
        n = (-j - y.sqrt(j * j - 4 * i * k)) / 2 / i;
        B(l) > "1e12" && (l = 0.5);
        B(n) > "1e12" && (n = 0.5);
        if (l > 0 && l < 1) {
            q = bu(a, b, c, d, e, f, g, h, l);
            p[L](q.x);
            o[L](q.y)
        }
        if (n > 0 && n < 1) {
            q = bu(a, b, c, d, e, f, g, h, n);
            p[L](q.x);
            o[L](q.y)
        }
        return{min: {x: A[m](0, p), y: A[m](0, o)}, max: {x: z[m](0, p), y: z[m](0, o)}}
    }), bw = bm(function(a, b) {
        var c = bq(a), d = b && bq(b), e = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, f = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, g = function(a, b) {
            var c, d;
            if (!a)
                return["C", b.x, b.y, b.x, b.y, b.x, b.y];
            !(a[0]in{T: 1, Q: 1}) && (b.qx = b.qy = null);
            switch (a[0]) {
                case"M":
                    b.X = a[1];
                    b.Y = a[2];
                    break;
                case"A":
                    a = ["C"][n](bt[m](0, [b.x, b.y][n](a.slice(1))));
                    break;
                case"S":
                    c = b.x + (b.x - (b.bx || b.x));
                    d = b.y + (b.y - (b.by || b.y));
                    a = ["C", c, d][n](a.slice(1));
                    break;
                case"T":
                    b.qx = b.x + (b.x - (b.qx || b.x));
                    b.qy = b.y + (b.y - (b.qy || b.y));
                    a = ["C"][n](bs(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                    break;
                case"Q":
                    b.qx = a[1];
                    b.qy = a[2];
                    a = ["C"][n](bs(b.x, b.y, a[1], a[2], a[3], a[4]));
                    break;
                case"L":
                    a = ["C"][n](br(b.x, b.y, a[1], a[2]));
                    break;
                case"H":
                    a = ["C"][n](br(b.x, b.y, a[1], b.y));
                    break;
                case"V":
                    a = ["C"][n](br(b.x, b.y, b.x, a[1]));
                    break;
                case"Z":
                    a = ["C"][n](br(b.x, b.y, b.X, b.Y));
                    break
            }
            return a
        }, h = function(a, b) {
            if (a[b][w] > 7) {
                a[b].shift();
                var e = a[b];
                while (e[w])
                    a.splice(b++, 0, ["C"][n](e.splice(0, 6)));
                a.splice(b, 1);
                k = z(c[w], d && d[w] || 0)
            }
        }, i = function(a, b, e, f, g) {
            if (a && b && a[g][0] == "M" && b[g][0] != "M") {
                b.splice(g, 0, ["M", f.x, f.y]);
                e.bx = 0;
                e.by = 0;
                e.x = a[g][1];
                e.y = a[g][2];
                k = z(c[w], d && d[w] || 0)
            }
        };
        for (var j = 0, k = z(c[w], d && d[w] || 0); j < k; j++) {
            c[j] = g(c[j], e);
            h(c, j);
            d && (d[j] = g(d[j], f));
            d && h(d, j);
            i(c, d, e, f, j);
            i(d, c, f, e, j);
            var l = c[j], o = d && d[j], p = l[w], q = d && o[w];
            e.x = l[p - 2];
            e.y = l[p - 1];
            e.bx = S(l[p - 4]) || e.x;
            e.by = S(l[p - 3]) || e.y;
            f.bx = d && (S(o[q - 4]) || f.x);
            f.by = d && (S(o[q - 3]) || f.y);
            f.x = d && o[q - 2];
            f.y = d && o[q - 1]
        }
        return d ? [c, d] : c
    }, null, bo), bx = bm(function(b) {
        var c = [];
        for (var d = 0, e = b[w]; d < e; d++) {
            var f = {}, g = b[d].match(/^([^:]*):?([\d\.]*)/);
            f.color = a.getRGB(g[1]);
            if (f.color.error)
                return null;
            f.color = f.color.hex;
            g[2] && (f.offset = g[2] + "%");
            c[L](f)
        }
        for (d = 1, e = c[w] - 1; d < e; d++) {
            if (!c[d].offset) {
                var h = S(c[d - 1].offset || 0), i = 0;
                for (var j = d + 1; j < e; j++) {
                    if (c[j].offset) {
                        i = c[j].offset;
                        break
                    }
                }
                if (!i) {
                    i = 100;
                    j = e
                }
                i = S(i);
                var k = (i - h) / (j - d + 1);
                for (; d < j; d++) {
                    h += k;
                    c[d].offset = h + "%"
                }
            }
        }
        return c
    }), by = function(b, c, d, e) {
        var f;
        if (a.is(b, F) || a.is(b, "object")) {
            f = a.is(b, F) ? g.getElementById(b) : b;
            if (f.tagName)
                return c == null ? {container: f, width: f.style.pixelWidth || f.offsetWidth, height: f.style.pixelHeight || f.offsetHeight} : {container: f, width: c, height: d}
        } else
            return{container: 1, x: b, y: c, width: d, height: e}
    }, bz = function(a, b) {
        var c = this;
        for (var d in b) {
            if (b[f](d) && !(d in a))
                switch (typeof b[d]) {
                    case"function":
                        (function(b) {
                            a[d] = a === c ? b : function() {
                                return b[m](c, arguments)
                            }
                        })(b[d]);
                        break;
                    case"object":
                        a[d] = a[d] || {};
                        bz.call(this, a[d], b[d]);
                        break;
                    default:
                        a[d] = b[d];
                        break
                    }
        }
    }, bA = function(a, b) {
        a == b.top && (b.top = a.prev);
        a == b.bottom && (b.bottom = a.next);
        a.next && (a.next.prev = a.prev);
        a.prev && (a.prev.next = a.next)
    }, bB = function(a, b) {
        if (b.top === a)
            return;
        bA(a, b);
        a.next = null;
        a.prev = b.top;
        b.top.next = a;
        b.top = a
    }, bC = function(a, b) {
        if (b.bottom === a)
            return;
        bA(a, b);
        a.next = b.bottom;
        a.prev = null;
        b.bottom.prev = a;
        b.bottom = a
    }, bD = function(a, b, c) {
        bA(a, c);
        b == c.top && (c.top = a);
        b.next && (b.next.prev = a);
        a.next = b.next;
        a.prev = b;
        b.next = a
    }, bE = function(a, b, c) {
        bA(a, c);
        b == c.bottom && (c.bottom = a);
        b.prev && (b.prev.next = a);
        a.prev = b.prev;
        b.prev = a;
        a.next = b
    }, bF = function(a) {
        return function() {
            throw new Error("Raphaël: you are calling to method “" + a + "” of removed object")
        }
    };
    a.pathToRelative = bp;
    if (a.svg) {
        k.svgns = "http://www.w3.org/2000/svg";
        k.xlink = "http://www.w3.org/1999/xlink";
        Q = function(a) {
            return+a + (~(~a) === a) * 0.5
        };
        var bG = function(a, b) {
            if (b)
                for (var c in b)
                    b[f](c) && a[R](c, r(b[c]));
            else {
                a = g.createElementNS(k.svgns, a);
                a.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
                return a
            }
        };
        a[H] = function() {
            return"Your browser supports SVG.\nYou are running Raphaël " + this.version
        };
        var bH = function(a, b) {
            var c = bG("path");
            b.canvas && b.canvas[l](c);
            var d = new bN(c, b);
            d.type = "path";
            bK(d, {fill: "none", stroke: "#000", path: a});
            return d
        }, bI = function(a, b, c) {
            var d = "linear", e = 0.5, f = 0.5, h = a.style;
            b = r(b)[Y](bd, function(a, b, c) {
                d = "radial";
                if (b && c) {
                    e = S(b);
                    f = S(c);
                    var g = (f > 0.5) * 2 - 1;
                    C(e - 0.5, 2) + C(f - 0.5, 2) > 0.25 && (f = y.sqrt(0.25 - C(e - 0.5, 2)) * g + 0.5) && f != 0.5 && (f = f.toFixed(5) - 0.00001 * g)
                }
                return p
            });
            b = b[s](/\s*\-\s*/);
            if (d == "linear") {
                var i = b.shift();
                i = -S(i);
                if (isNaN(i))
                    return null;
                var j = [0, 0, y.cos(i * D / 180), y.sin(i * D / 180)], k = 1 / (z(B(j[2]), B(j[3])) || 1);
                j[2] *= k;
                j[3] *= k;
                if (j[2] < 0) {
                    j[0] = -j[2];
                    j[2] = 0
                }
                if (j[3] < 0) {
                    j[1] = -j[3];
                    j[3] = 0
                }
            }
            var m = bx(b);
            if (!m)
                return null;
            var n = a.getAttribute(I);
            n = n.match(/^url\(#(.*)\)$/);
            n && c.defs.removeChild(g.getElementById(n[1]));
            var o = bG(d + "Gradient");
            o.id = bh();
            bG(o, d == "radial" ? {fx: e, fy: f} : {x1: j[0], y1: j[1], x2: j[2], y2: j[3]});
            c.defs[l](o);
            for (var q = 0, t = m[w]; q < t; q++) {
                var u = bG("stop");
                bG(u, {offset: m[q].offset ? m[q].offset : q ? "100%" : "0%", "stop-color": m[q].color || "#fff"});
                o[l](u)
            }
            bG(a, {fill: "url(#" + o.id + ")", opacity: 1, "fill-opacity": 1});
            h.fill = p;
            h.opacity = 1;
            h.fillOpacity = 1;
            return 1
        }, bJ = function(b) {
            var c = b.getBBox();
            bG(b.pattern, {patternTransform: a.format("translate({0},{1})", c.x, c.y)})
        }, bK = function(c, d) {
            var e = {"": [0], none: [0], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3]}, h = c.node, i = c.attrs, j = c.rotate(), k = function(a, b) {
                b = e[x.call(b)];
                if (b) {
                    var c = a.attrs["stroke-width"] || "1", f = ({round: c, square: c, butt: 0})[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], i = b[w];
                    while (i--)
                        g[i] = b[i] * c + (i % 2 ? 1 : -1) * f;
                    bG(h, {"stroke-dasharray": g[v](",")})
                }
            };
            d[f]("rotation") && (j = d.rotation);
            var m = r(j)[s](b);
            if (m.length - 1) {
                m[1] = +m[1];
                m[2] = +m[2]
            } else
                m = null;
            S(j) && c.rotate(0, true);
            for (var n in d) {
                if (d[f](n)) {
                    if (!W[f](n))
                        continue;
                    var o = d[n];
                    i[n] = o;
                    switch (n) {
                        case"blur":
                            c.blur(o);
                            break;
                        case"rotation":
                            c.rotate(o, true);
                            break;
                        case"href":
                        case"title":
                        case"target":
                            var t = h.parentNode;
                            if (x.call(t.tagName) != "a") {
                                var u = bG("a");
                                t.insertBefore(u, h);
                                u[l](h);
                                t = u
                            }
                            n == "target" && o == "blank" ? t.setAttributeNS(c.paper.xlink, "show", "new") : t.setAttributeNS(c.paper.xlink, n, o);
                            break;
                        case"cursor":
                            h.style.cursor = o;
                            break;
                        case"clip-rect":
                            var y = r(o)[s](b);
                            if (y[w] == 4) {
                                c.clip && c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);
                                var z = bG("clipPath"), A = bG("rect");
                                z.id = bh();
                                bG(A, {x: y[0], y: y[1], width: y[2], height: y[3]});
                                z[l](A);
                                c.paper.defs[l](z);
                                bG(h, {"clip-path": "url(#" + z.id + ")"});
                                c.clip = A
                            }
                            if (!o) {
                                var B = g.getElementById(h.getAttribute("clip-path")[Y](/(^url\(#|\)$)/g, p));
                                B && B.parentNode.removeChild(B);
                                bG(h, {"clip-path": p});
                                delete c.clip
                            }
                            break;
                        case"path":
                            c.type == "path" && bG(h, {d: o ? i.path = bq(o) : "M0,0"});
                            break;
                        case"width":
                            h[R](n, o);
                            if (i.fx) {
                                n = "x";
                                o = i.x
                            } else
                                break;
                        case"x":
                            i.fx && (o = -i.x - (i.width || 0));
                        case"rx":
                            if (n == "rx" && c.type == "rect")
                                break;
                        case"cx":
                            m && (n == "x" || n == "cx") && (m[1] += o - i[n]);
                            h[R](n, o);
                            c.pattern && bJ(c);
                            break;
                        case"height":
                            h[R](n, o);
                            if (i.fy) {
                                n = "y";
                                o = i.y
                            } else
                                break;
                        case"y":
                            i.fy && (o = -i.y - (i.height || 0));
                        case"ry":
                            if (n == "ry" && c.type == "rect")
                                break;
                        case"cy":
                            m && (n == "y" || n == "cy") && (m[2] += o - i[n]);
                            h[R](n, o);
                            c.pattern && bJ(c);
                            break;
                        case"r":
                            c.type == "rect" ? bG(h, {rx: o, ry: o}) : h[R](n, o);
                            break;
                        case"src":
                            c.type == "image" && h.setAttributeNS(c.paper.xlink, "href", o);
                            break;
                        case"stroke-width":
                            h.style.strokeWidth = o;
                            h[R](n, o);
                            i["stroke-dasharray"] && k(c, i["stroke-dasharray"]);
                            break;
                        case"stroke-dasharray":
                            k(c, o);
                            break;
                        case"translation":
                            var C = r(o)[s](b);
                            C[0] = +C[0] || 0;
                            C[1] = +C[1] || 0;
                            if (m) {
                                m[1] += C[0];
                                m[2] += C[1]
                            }
                            cz.call(c, C[0], C[1]);
                            break;
                        case"scale":
                            C = r(o)[s](b);
                            c.scale(+C[0] || 1, +C[1] || +C[0] || 1, isNaN(S(C[2])) ? null : +C[2], isNaN(S(C[3])) ? null : +C[3]);
                            break;
                        case I:
                            var D = r(o).match(M);
                            if (D) {
                                z = bG("pattern");
                                var E = bG("image");
                                z.id = bh();
                                bG(z, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
                                bG(E, {x: 0, y: 0});
                                E.setAttributeNS(c.paper.xlink, "href", D[1]);
                                z[l](E);
                                var F = g.createElement("img");
                                F.style.cssText = "position:absolute;left:-9999em;top-9999em";
                                F.onload = function() {
                                    bG(z, {width: this.offsetWidth, height: this.offsetHeight});
                                    bG(E, {width: this.offsetWidth, height: this.offsetHeight});
                                    g.body.removeChild(this);
                                    c.paper.safari()
                                };
                                g.body[l](F);
                                F.src = D[1];
                                c.paper.defs[l](z);
                                h.style.fill = "url(#" + z.id + ")";
                                bG(h, {fill: "url(#" + z.id + ")"});
                                c.pattern = z;
                                c.pattern && bJ(c);
                                break
                            }
                            var G = a.getRGB(o);
                            if (G.error)
                                if ((({circle: 1, ellipse: 1})[f](c.type) || r(o).charAt() != "r") && bI(h, o, c.paper)) {
                                    i.gradient = o;
                                    i.fill = "none";
                                    break
                                } else {
                                    delete d.gradient;
                                    delete i.gradient;
                                    !a.is(i.opacity, "undefined") && a.is(d.opacity, "undefined") && bG(h, {opacity: i.opacity});
                                    !a.is(i["fill-opacity"], "undefined") && a.is(d["fill-opacity"], "undefined") && bG(h, {"fill-opacity": i["fill-opacity"]})
                                }
                            G[f]("opacity") && bG(h, {"fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity});
                        case"stroke":
                            G = a.getRGB(o);
                            h[R](n, G.hex);
                            n == "stroke" && G[f]("opacity") && bG(h, {"stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity});
                            break;
                        case"gradient":
                            (({circle: 1, ellipse: 1})[f](c.type) || r(o).charAt() != "r") && bI(h, o, c.paper);
                            break;
                        case"opacity":
                            i.gradient && !i[f]("stroke-opacity") && bG(h, {"stroke-opacity": o > 1 ? o / 100 : o});
                        case"fill-opacity":
                            if (i.gradient) {
                                var H = g.getElementById(h.getAttribute(I)[Y](/^url\(#|\)$/g, p));
                                if (H) {
                                    var J = H.getElementsByTagName("stop");
                                    J[J[w] - 1][R]("stop-opacity", o)
                                }
                                break
                            }
                        default:
                            n == "font-size" && (o = T(o, 10) + "px");
                            var K = n[Y](/(\-.)/g, function(a) {
                                return V.call(a.substring(1))
                            });
                            h.style[K] = o;
                            h[R](n, o);
                            break
                        }
                }
            }
            bM(c, d);
            m ? c.rotate(m.join(q)) : S(j) && c.rotate(j, true)
        }, bL = 1.2, bM = function(b, c) {
            if (b.type != "text" || !(c[f]("text") || c[f]("font") || c[f]("font-size") || c[f]("x") || c[f]("y")))
                return;
            var d = b.attrs, e = b.node, h = e.firstChild ? T(g.defaultView.getComputedStyle(e.firstChild, p).getPropertyValue("font-size"), 10) : 10;
            if (c[f]("text")) {
                d.text = c.text;
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                var i = r(c.text)[s]("\n");
                for (var j = 0, k = i[w]; j < k; j++)
                    if (i[j]) {
                        var m = bG("tspan");
                        j && bG(m, {dy: h * bL, x: d.x});
                        m[l](g.createTextNode(i[j]));
                        e[l](m)
                    }
            } else {
                i = e.getElementsByTagName("tspan");
                for (j = 0, k = i[w]; j < k; j++)
                    j && bG(i[j], {dy: h * bL, x: d.x})
            }
            bG(e, {y: d.y});
            var n = b.getBBox(), o = d.y - (n.y + n.height / 2);
            o && a.is(o, "finite") && bG(e, {y: d.y + o})
        }, bN = function(b, c) {
            var d = 0, e = 0;
            this[0] = b;
            this.id = a._oid++;
            this.node = b;
            b.raphael = this;
            this.paper = c;
            this.attrs = this.attrs || {};
            this.transformations = [];
            this._ = {tx: 0, ty: 0, rt: {deg: 0, cx: 0, cy: 0}, sx: 1, sy: 1};
            !c.bottom && (c.bottom = this);
            this.prev = c.top;
            c.top && (c.top.next = this);
            c.top = this;
            this.next = null
        }, bO = bN[e];
        bN[e].rotate = function(c, d, e) {
            if (this.removed)
                return this;
            if (c == null) {
                if (this._.rt.cx)
                    return[this._.rt.deg, this._.rt.cx, this._.rt.cy][v](q);
                return this._.rt.deg
            }
            var f = this.getBBox();
            c = r(c)[s](b);
            if (c[w] - 1) {
                d = S(c[1]);
                e = S(c[2])
            }
            c = S(c[0]);
            d != null && d !== false ? this._.rt.deg = c : this._.rt.deg += c;
            e == null && (d = null);
            this._.rt.cx = d;
            this._.rt.cy = e;
            d = d == null ? f.x + f.width / 2 : d;
            e = e == null ? f.y + f.height / 2 : e;
            if (this._.rt.deg) {
                this.transformations[0] = a.format("rotate({0} {1} {2})", this._.rt.deg, d, e);
                this.clip && bG(this.clip, {transform: a.format("rotate({0} {1} {2})", -this._.rt.deg, d, e)})
            } else {
                this.transformations[0] = p;
                this.clip && bG(this.clip, {transform: p})
            }
            bG(this.node, {transform: this.transformations[v](q)});
            return this
        };
        bN[e].hide = function() {
            !this.removed && (this.node.style.display = "none");
            return this
        };
        bN[e].show = function() {
            !this.removed && (this.node.style.display = "");
            return this
        };
        bN[e].remove = function() {
            if (this.removed)
                return;
            bA(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            for (var a in this)
                delete this[a];
            this.removed = true
        };
        bN[e].getBBox = function() {
            if (this.removed)
                return this;
            if (this.type == "path")
                return bn(this.attrs.path);
            if (this.node.style.display == "none") {
                this.show();
                var a = true
            }
            var b = {};
            try {
                b = this.node.getBBox()
            } catch (a) {
            } finally {
                b = b || {}
            }
            if (this.type == "text") {
                b = {x: b.x, y: Infinity, width: 0, height: 0};
                for (var c = 0, d = this.node.getNumberOfChars(); c < d; c++) {
                    var e = this.node.getExtentOfChar(c);
                    e.y < b.y && (b.y = e.y);
                    e.y + e.height - b.y > b.height && (b.height = e.y + e.height - b.y);
                    e.x + e.width - b.x > b.width && (b.width = e.x + e.width - b.x)
                }
            }
            a && this.hide();
            return b
        };
        bN[e].attr = function(b, c) {
            if (this.removed)
                return this;
            if (b == null) {
                var d = {};
                for (var e in this.attrs)
                    this.attrs[f](e) && (d[e] = this.attrs[e]);
                this._.rt.deg && (d.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (d.scale = this.scale());
                d.gradient && d.fill == "none" && (d.fill = d.gradient) && delete d.gradient;
                return d
            }
            if (c == null && a.is(b, F)) {
                if (b == "translation")
                    return cz.call(this);
                if (b == "rotation")
                    return this.rotate();
                if (b == "scale")
                    return this.scale();
                if (b == I && this.attrs.fill == "none" && this.attrs.gradient)
                    return this.attrs.gradient;
                return this.attrs[b]
            }
            if (c == null && a.is(b, G)) {
                var g = {};
                for (var h = 0, i = b.length; h < i; h++)
                    g[b[h]] = this.attr(b[h]);
                return g
            }
            if (c != null) {
                var j = {};
                j[b] = c
            } else
                b != null && a.is(b, "object") && (j = b);
            for (var k in this.paper.customAttributes)
                if (this.paper.customAttributes[f](k) && j[f](k) && a.is(this.paper.customAttributes[k], "function")) {
                    var l = this.paper.customAttributes[k].apply(this, [][n](j[k]));
                    this.attrs[k] = j[k];
                    for (var m in l)
                        l[f](m) && (j[m] = l[m])
                }
            bK(this, j);
            return this
        };
        bN[e].toFront = function() {
            if (this.removed)
                return this;
            this.node.parentNode[l](this.node);
            var a = this.paper;
            a.top != this && bB(this, a);
            return this
        };
        bN[e].toBack = function() {
            if (this.removed)
                return this;
            if (this.node.parentNode.firstChild != this.node) {
                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                bC(this, this.paper);
                var a = this.paper
            }
            return this
        };
        bN[e].insertAfter = function(a) {
            if (this.removed)
                return this;
            var b = a.node || a[a.length - 1].node;
            b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode[l](this.node);
            bD(this, a, this.paper);
            return this
        };
        bN[e].insertBefore = function(a) {
            if (this.removed)
                return this;
            var b = a.node || a[0].node;
            b.parentNode.insertBefore(this.node, b);
            bE(this, a, this.paper);
            return this
        };
        bN[e].blur = function(a) {
            var b = this;
            if (+a !== 0) {
                var c = bG("filter"), d = bG("feGaussianBlur");
                b.attrs.blur = a;
                c.id = bh();
                bG(d, {stdDeviation: +a || 1.5});
                c.appendChild(d);
                b.paper.defs.appendChild(c);
                b._blur = c;
                bG(b.node, {filter: "url(#" + c.id + ")"})
            } else {
                if (b._blur) {
                    b._blur.parentNode.removeChild(b._blur);
                    delete b._blur;
                    delete b.attrs.blur
                }
                b.node.removeAttribute("filter")
            }
        };
        var bP = function(a, b, c, d) {
            var e = bG("circle");
            a.canvas && a.canvas[l](e);
            var f = new bN(e, a);
            f.attrs = {cx: b, cy: c, r: d, fill: "none", stroke: "#000"};
            f.type = "circle";
            bG(e, f.attrs);
            return f
        }, bQ = function(a, b, c, d, e, f) {
            var g = bG("rect");
            a.canvas && a.canvas[l](g);
            var h = new bN(g, a);
            h.attrs = {x: b, y: c, width: d, height: e, r: f || 0, rx: f || 0, ry: f || 0, fill: "none", stroke: "#000"};
            h.type = "rect";
            bG(g, h.attrs);
            return h
        }, bR = function(a, b, c, d, e) {
            var f = bG("ellipse");
            a.canvas && a.canvas[l](f);
            var g = new bN(f, a);
            g.attrs = {cx: b, cy: c, rx: d, ry: e, fill: "none", stroke: "#000"};
            g.type = "ellipse";
            bG(f, g.attrs);
            return g
        }, bS = function(a, b, c, d, e, f) {
            var g = bG("image");
            bG(g, {x: c, y: d, width: e, height: f, preserveAspectRatio: "none"});
            g.setAttributeNS(a.xlink, "href", b);
            a.canvas && a.canvas[l](g);
            var h = new bN(g, a);
            h.attrs = {x: c, y: d, width: e, height: f, src: b};
            h.type = "image";
            return h
        }, bT = function(a, b, c, d) {
            var e = bG("text");
            bG(e, {x: b, y: c, "text-anchor": "middle"});
            a.canvas && a.canvas[l](e);
            var f = new bN(e, a);
            f.attrs = {x: b, y: c, "text-anchor": "middle", text: d, font: W.font, stroke: "none", fill: "#000"};
            f.type = "text";
            bK(f, f.attrs);
            return f
        }, bU = function(a, b) {
            this.width = a || this.width;
            this.height = b || this.height;
            this.canvas[R]("width", this.width);
            this.canvas[R]("height", this.height);
            return this
        }, bV = function() {
            var b = by[m](0, arguments), c = b && b.container, d = b.x, e = b.y, f = b.width, h = b.height;
            if (!c)
                throw new Error("SVG container not found.");
            var i = bG("svg");
            d = d || 0;
            e = e || 0;
            f = f || 512;
            h = h || 342;
            bG(i, {xmlns: "http://www.w3.org/2000/svg", version: 1.1, width: f, height: h});
            if (c == 1) {
                i.style.cssText = "position:absolute;left:" + d + "px;top:" + e + "px";
                g.body[l](i)
            } else
                c.firstChild ? c.insertBefore(i, c.firstChild) : c[l](i);
            c = new j;
            c.width = f;
            c.height = h;
            c.canvas = i;
            bz.call(c, c, a.fn);
            c.clear();
            return c
        };
        k.clear = function() {
            var a = this.canvas;
            while (a.firstChild)
                a.removeChild(a.firstChild);
            this.bottom = this.top = null;
            (this.desc = bG("desc"))[l](g.createTextNode("Created with Raphaël"));
            a[l](this.desc);
            a[l](this.defs = bG("defs"))
        };
        k.remove = function() {
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var a in this)
                this[a] = bF(a)
        }
    }
    if (a.vml) {
        var bW = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"}, bX = /([clmz]),?([^clmz]*)/gi, bY = / progid:\S+Blur\([^\)]+\)/g, bZ = /-?[^,\s-]+/g, b$ = 1000 + q + 1000, b_ = 10, ca = {path: 1, rect: 1}, cb = function(a) {
            var b = /[ahqstv]/ig, c = bq;
            r(a).match(b) && (c = bw);
            b = /[clmz]/g;
            if (c == bq && !r(a).match(b)) {
                var d = r(a)[Y](bX, function(a, b, c) {
                    var d = [], e = x.call(b) == "m", f = bW[b];
                    c[Y](bZ, function(a) {
                        if (e && d[w] == 2) {
                            f += d + bW[b == "m" ? "l" : "L"];
                            d = []
                        }
                        d[L](Q(a * b_))
                    });
                    return f + d
                });
                return d
            }
            var e = c(a), f, g;
            d = [];
            for (var h = 0, i = e[w]; h < i; h++) {
                f = e[h];
                g = x.call(e[h][0]);
                g == "z" && (g = "x");
                for (var j = 1, k = f[w]; j < k; j++)
                    g += Q(f[j] * b_) + (j != k - 1 ? "," : p);
                d[L](g)
            }
            return d[v](q)
        };
        a[H] = function() {
            return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
        };
        bH = function(a, b) {
            var c = cd("group");
            c.style.cssText = "position:absolute;left:0;top:0;width:" + b.width + "px;height:" + b.height + "px";
            c.coordsize = b.coordsize;
            c.coordorigin = b.coordorigin;
            var d = cd("shape"), e = d.style;
            e.width = b.width + "px";
            e.height = b.height + "px";
            d.coordsize = b$;
            d.coordorigin = b.coordorigin;
            c[l](d);
            var f = new bN(d, c, b), g = {fill: "none", stroke: "#000"};
            a && (g.path = a);
            f.type = "path";
            f.path = [];
            f.Path = p;
            bK(f, g);
            b.canvas[l](c);
            return f
        };
        bK = function(c, d) {
            c.attrs = c.attrs || {};
            var e = c.node, h = c.attrs, i = e.style, j, k = (d.x != h.x || d.y != h.y || d.width != h.width || d.height != h.height || d.r != h.r) && c.type == "rect", m = c;
            for (var n in d)
                d[f](n) && (h[n] = d[n]);
            if (k) {
                h.path = cc(h.x, h.y, h.width, h.height, h.r);
                c.X = h.x;
                c.Y = h.y;
                c.W = h.width;
                c.H = h.height
            }
            d.href && (e.href = d.href);
            d.title && (e.title = d.title);
            d.target && (e.target = d.target);
            d.cursor && (i.cursor = d.cursor);
            "blur"in d && c.blur(d.blur);
            if (d.path && c.type == "path" || k)
                e.path = cb(h.path);
            d.rotation != null && c.rotate(d.rotation, true);
            if (d.translation) {
                j = r(d.translation)[s](b);
                cz.call(c, j[0], j[1]);
                if (c._.rt.cx != null) {
                    c._.rt.cx += +j[0];
                    c._.rt.cy += +j[1];
                    c.setBox(c.attrs, j[0], j[1])
                }
            }
            if (d.scale) {
                j = r(d.scale)[s](b);
                c.scale(+j[0] || 1, +j[1] || +j[0] || 1, +j[2] || null, +j[3] || null)
            }
            if ("clip-rect"in d) {
                var o = r(d["clip-rect"])[s](b);
                if (o[w] == 4) {
                    o[2] = +o[2] + +o[0];
                    o[3] = +o[3] + +o[1];
                    var q = e.clipRect || g.createElement("div"), t = q.style, u = e.parentNode;
                    t.clip = a.format("rect({1}px {2}px {3}px {0}px)", o);
                    if (!e.clipRect) {
                        t.position = "absolute";
                        t.top = 0;
                        t.left = 0;
                        t.width = c.paper.width + "px";
                        t.height = c.paper.height + "px";
                        u.parentNode.insertBefore(q, u);
                        q[l](u);
                        e.clipRect = q
                    }
                }
                d["clip-rect"] || e.clipRect && (e.clipRect.style.clip = p)
            }
            c.type == "image" && d.src && (e.src = d.src);
            if (c.type == "image" && d.opacity) {
                e.filterOpacity = U + ".Alpha(opacity=" + d.opacity * 100 + ")";
                i.filter = (e.filterMatrix || p) + (e.filterOpacity || p)
            }
            d.font && (i.font = d.font);
            d["font-family"] && (i.fontFamily = "\"" + d["font-family"][s](",")[0][Y](/^['"]+|['"]+$/g, p) + "\"");
            d["font-size"] && (i.fontSize = d["font-size"]);
            d["font-weight"] && (i.fontWeight = d["font-weight"]);
            d["font-style"] && (i.fontStyle = d["font-style"]);
            if (d.opacity != null || d["stroke-width"] != null || d.fill != null || d.stroke != null || d["stroke-width"] != null || d["stroke-opacity"] != null || d["fill-opacity"] != null || d["stroke-dasharray"] != null || d["stroke-miterlimit"] != null || d["stroke-linejoin"] != null || d["stroke-linecap"] != null) {
                e = c.shape || e;
                var v = e.getElementsByTagName(I) && e.getElementsByTagName(I)[0], x = false;
                !v && (x = v = cd(I));
                if ("fill-opacity"in d || "opacity"in d) {
                    var y = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+a.getRGB(d.fill).o + 1 || 2) - 1);
                    y = A(z(y, 0), 1);
                    v.opacity = y
                }
                d.fill && (v.on = true);
                if (v.on == null || d.fill == "none")
                    v.on = false;
                if (v.on && d.fill) {
                    var B = d.fill.match(M);
                    if (B) {
                        v.src = B[1];
                        v.type = "tile"
                    } else {
                        v.color = a.getRGB(d.fill).hex;
                        v.src = p;
                        v.type = "solid";
                        if (a.getRGB(d.fill).error && (m.type in{circle: 1, ellipse: 1} || r(d.fill).charAt() != "r") && bI(m, d.fill)) {
                            h.fill = "none";
                            h.gradient = d.fill
                        }
                    }
                }
                x && e[l](v);
                var C = e.getElementsByTagName("stroke") && e.getElementsByTagName("stroke")[0], D = false;
                !C && (D = C = cd("stroke"));
                if (d.stroke && d.stroke != "none" || d["stroke-width"] || d["stroke-opacity"] != null || d["stroke-dasharray"] || d["stroke-miterlimit"] || d["stroke-linejoin"] || d["stroke-linecap"])
                    C.on = true;
                (d.stroke == "none" || C.on == null || d.stroke == 0 || d["stroke-width"] == 0) && (C.on = false);
                var E = a.getRGB(d.stroke);
                C.on && d.stroke && (C.color = E.hex);
                y = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+E.o + 1 || 2) - 1);
                var F = (S(d["stroke-width"]) || 1) * 0.75;
                y = A(z(y, 0), 1);
                d["stroke-width"] == null && (F = h["stroke-width"]);
                d["stroke-width"] && (C.weight = F);
                F && F < 1 && (y *= F) && (C.weight = 1);
                C.opacity = y;
                d["stroke-linejoin"] && (C.joinstyle = d["stroke-linejoin"] || "miter");
                C.miterlimit = d["stroke-miterlimit"] || 8;
                d["stroke-linecap"] && (C.endcap = d["stroke-linecap"] == "butt" ? "flat" : d["stroke-linecap"] == "square" ? "square" : "round");
                if (d["stroke-dasharray"]) {
                    var G = {"-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot"};
                    C.dashstyle = G[f](d["stroke-dasharray"]) ? G[d["stroke-dasharray"]] : p
                }
                D && e[l](C)
            }
            if (m.type == "text") {
                i = m.paper.span.style;
                h.font && (i.font = h.font);
                h["font-family"] && (i.fontFamily = h["font-family"]);
                h["font-size"] && (i.fontSize = h["font-size"]);
                h["font-weight"] && (i.fontWeight = h["font-weight"]);
                h["font-style"] && (i.fontStyle = h["font-style"]);
                m.node.string && (m.paper.span.innerHTML = r(m.node.string)[Y](/</g, "&#60;")[Y](/&/g, "&#38;")[Y](/\n/g, "<br>"));
                m.W = h.w = m.paper.span.offsetWidth;
                m.H = h.h = m.paper.span.offsetHeight;
                m.X = h.x;
                m.Y = h.y + Q(m.H / 2);
                switch (h["text-anchor"]) {
                    case"start":
                        m.node.style["v-text-align"] = "left";
                        m.bbx = Q(m.W / 2);
                        break;
                    case"end":
                        m.node.style["v-text-align"] = "right";
                        m.bbx = -Q(m.W / 2);
                        break;
                    default:
                        m.node.style["v-text-align"] = "center";
                        break
                    }
            }
        };
        bI = function(a, b) {
            a.attrs = a.attrs || {};
            var c = a.attrs, d, e = "linear", f = ".5 .5";
            a.attrs.gradient = b;
            b = r(b)[Y](bd, function(a, b, c) {
                e = "radial";
                if (b && c) {
                    b = S(b);
                    c = S(c);
                    C(b - 0.5, 2) + C(c - 0.5, 2) > 0.25 && (c = y.sqrt(0.25 - C(b - 0.5, 2)) * ((c > 0.5) * 2 - 1) + 0.5);
                    f = b + q + c
                }
                return p
            });
            b = b[s](/\s*\-\s*/);
            if (e == "linear") {
                var g = b.shift();
                g = -S(g);
                if (isNaN(g))
                    return null
            }
            var h = bx(b);
            if (!h)
                return null;
            a = a.shape || a.node;
            d = a.getElementsByTagName(I)[0] || cd(I);
            !d.parentNode && a.appendChild(d);
            if (h[w]) {
                d.on = true;
                d.method = "none";
                d.color = h[0].color;
                d.color2 = h[h[w] - 1].color;
                var i = [];
                for (var j = 0, k = h[w]; j < k; j++)
                    h[j].offset && i[L](h[j].offset + q + h[j].color);
                d.colors && (d.colors.value = i[w] ? i[v]() : "0% " + d.color);
                if (e == "radial") {
                    d.type = "gradientradial";
                    d.focus = "100%";
                    d.focussize = f;
                    d.focusposition = f
                } else {
                    d.type = "gradient";
                    d.angle = (270 - g) % 360
                }
            }
            return 1
        };
        bN = function(b, c, d) {
            var e = 0, f = 0, g = 0, h = 1;
            this[0] = b;
            this.id = a._oid++;
            this.node = b;
            b.raphael = this;
            this.X = 0;
            this.Y = 0;
            this.attrs = {};
            this.Group = c;
            this.paper = d;
            this._ = {tx: 0, ty: 0, rt: {deg: 0}, sx: 1, sy: 1};
            !d.bottom && (d.bottom = this);
            this.prev = d.top;
            d.top && (d.top.next = this);
            d.top = this;
            this.next = null
        };
        bO = bN[e];
        bO.rotate = function(a, c, d) {
            if (this.removed)
                return this;
            if (a == null) {
                if (this._.rt.cx)
                    return[this._.rt.deg, this._.rt.cx, this._.rt.cy][v](q);
                return this._.rt.deg
            }
            a = r(a)[s](b);
            if (a[w] - 1) {
                c = S(a[1]);
                d = S(a[2])
            }
            a = S(a[0]);
            c != null ? this._.rt.deg = a : this._.rt.deg += a;
            d == null && (c = null);
            this._.rt.cx = c;
            this._.rt.cy = d;
            this.setBox(this.attrs, c, d);
            this.Group.style.rotation = this._.rt.deg;
            return this
        };
        bO.setBox = function(a, b, c) {
            if (this.removed)
                return this;
            var d = this.Group.style, e = this.shape && this.shape.style || this.node.style;
            a = a || {};
            for (var g in a)
                a[f](g) && (this.attrs[g] = a[g]);
            b = b || this._.rt.cx;
            c = c || this._.rt.cy;
            var h = this.attrs, i, j, k, l;
            switch (this.type) {
                case"circle":
                    i = h.cx - h.r;
                    j = h.cy - h.r;
                    k = l = h.r * 2;
                    break;
                case"ellipse":
                    i = h.cx - h.rx;
                    j = h.cy - h.ry;
                    k = h.rx * 2;
                    l = h.ry * 2;
                    break;
                case"image":
                    i = +h.x;
                    j = +h.y;
                    k = h.width || 0;
                    l = h.height || 0;
                    break;
                case"text":
                    this.textpath.v = ["m", Q(h.x), ", ", Q(h.y - 2), "l", Q(h.x) + 1, ", ", Q(h.y - 2)][v](p);
                    i = h.x - Q(this.W / 2);
                    j = h.y - this.H / 2;
                    k = this.W;
                    l = this.H;
                    break;
                case"rect":
                case"path":
                    if (this.attrs.path) {
                        var m = bn(this.attrs.path);
                        i = m.x;
                        j = m.y;
                        k = m.width;
                        l = m.height
                    } else {
                        i = 0;
                        j = 0;
                        k = this.paper.width;
                        l = this.paper.height
                    }
                    break;
                default:
                    i = 0;
                    j = 0;
                    k = this.paper.width;
                    l = this.paper.height;
                    break
            }
            b = b == null ? i + k / 2 : b;
            c = c == null ? j + l / 2 : c;
            var n = b - this.paper.width / 2, o = c - this.paper.height / 2, q;
            d.left != (q = n + "px") && (d.left = q);
            d.top != (q = o + "px") && (d.top = q);
            this.X = ca[f](this.type) ? -n : i;
            this.Y = ca[f](this.type) ? -o : j;
            this.W = k;
            this.H = l;
            if (ca[f](this.type)) {
                e.left != (q = -n * b_ + "px") && (e.left = q);
                e.top != (q = -o * b_ + "px") && (e.top = q)
            } else if (this.type == "text") {
                e.left != (q = -n + "px") && (e.left = q);
                e.top != (q = -o + "px") && (e.top = q)
            } else {
                d.width != (q = this.paper.width + "px") && (d.width = q);
                d.height != (q = this.paper.height + "px") && (d.height = q);
                e.left != (q = i - n + "px") && (e.left = q);
                e.top != (q = j - o + "px") && (e.top = q);
                e.width != (q = k + "px") && (e.width = q);
                e.height != (q = l + "px") && (e.height = q)
            }
        };
        bO.hide = function() {
            !this.removed && (this.Group.style.display = "none");
            return this
        };
        bO.show = function() {
            !this.removed && (this.Group.style.display = "block");
            return this
        };
        bO.getBBox = function() {
            if (this.removed)
                return this;
            if (ca[f](this.type))
                return bn(this.attrs.path);
            return{x: this.X + (this.bbx || 0), y: this.Y, width: this.W, height: this.H}
        };
        bO.remove = function() {
            if (this.removed)
                return;
            bA(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            this.Group.parentNode.removeChild(this.Group);
            this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var a in this)
                delete this[a];
            this.removed = true
        };
        bO.attr = function(b, c) {
            if (this.removed)
                return this;
            if (b == null) {
                var d = {};
                for (var e in this.attrs)
                    this.attrs[f](e) && (d[e] = this.attrs[e]);
                this._.rt.deg && (d.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (d.scale = this.scale());
                d.gradient && d.fill == "none" && (d.fill = d.gradient) && delete d.gradient;
                return d
            }
            if (c == null && a.is(b, "string")) {
                if (b == "translation")
                    return cz.call(this);
                if (b == "rotation")
                    return this.rotate();
                if (b == "scale")
                    return this.scale();
                if (b == I && this.attrs.fill == "none" && this.attrs.gradient)
                    return this.attrs.gradient;
                return this.attrs[b]
            }
            if (this.attrs && c == null && a.is(b, G)) {
                var g, h = {};
                for (e = 0, g = b[w]; e < g; e++)
                    h[b[e]] = this.attr(b[e]);
                return h
            }
            var i;
            if (c != null) {
                i = {};
                i[b] = c
            }
            c == null && a.is(b, "object") && (i = b);
            if (i) {
                for (var j in this.paper.customAttributes)
                    if (this.paper.customAttributes[f](j) && i[f](j) && a.is(this.paper.customAttributes[j], "function")) {
                        var k = this.paper.customAttributes[j].apply(this, [][n](i[j]));
                        this.attrs[j] = i[j];
                        for (var l in k)
                            k[f](l) && (i[l] = k[l])
                    }
                i.text && this.type == "text" && (this.node.string = i.text);
                bK(this, i);
                i.gradient && (({circle: 1, ellipse: 1})[f](this.type) || r(i.gradient).charAt() != "r") && bI(this, i.gradient);
                (!ca[f](this.type) || this._.rt.deg) && this.setBox(this.attrs)
            }
            return this
        };
        bO.toFront = function() {
            !this.removed && this.Group.parentNode[l](this.Group);
            this.paper.top != this && bB(this, this.paper);
            return this
        };
        bO.toBack = function() {
            if (this.removed)
                return this;
            if (this.Group.parentNode.firstChild != this.Group) {
                this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild);
                bC(this, this.paper)
            }
            return this
        };
        bO.insertAfter = function(a) {
            if (this.removed)
                return this;
            a.constructor == cC && (a = a[a.length - 1]);
            a.Group.nextSibling ? a.Group.parentNode.insertBefore(this.Group, a.Group.nextSibling) : a.Group.parentNode[l](this.Group);
            bD(this, a, this.paper);
            return this
        };
        bO.insertBefore = function(a) {
            if (this.removed)
                return this;
            a.constructor == cC && (a = a[0]);
            a.Group.parentNode.insertBefore(this.Group, a.Group);
            bE(this, a, this.paper);
            return this
        };
        bO.blur = function(b) {
            var c = this.node.runtimeStyle, d = c.filter;
            d = d.replace(bY, p);
            if (+b !== 0) {
                this.attrs.blur = b;
                c.filter = d + q + U + ".Blur(pixelradius=" + (+b || 1.5) + ")";
                c.margin = a.format("-{0}px 0 0 -{0}px", Q(+b || 1.5))
            } else {
                c.filter = d;
                c.margin = 0;
                delete this.attrs.blur
            }
        };
        bP = function(a, b, c, d) {
            var e = cd("group"), f = cd("oval"), g = f.style;
            e.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            e.coordsize = b$;
            e.coordorigin = a.coordorigin;
            e[l](f);
            var h = new bN(f, e, a);
            h.type = "circle";
            bK(h, {stroke: "#000", fill: "none"});
            h.attrs.cx = b;
            h.attrs.cy = c;
            h.attrs.r = d;
            h.setBox({x: b - d, y: c - d, width: d * 2, height: d * 2});
            a.canvas[l](e);
            return h
        };
        function cc(b, c, d, e, f) {
            return f ? a.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z", b + f, c, d - f * 2, f, -f, e - f * 2, f * 2 - d, f * 2 - e) : a.format("M{0},{1}l{2},0,0,{3},{4},0z", b, c, d, e, -d)
        }
        bQ = function(a, b, c, d, e, f) {
            var g = cc(b, c, d, e, f), h = a.path(g), i = h.attrs;
            h.X = i.x = b;
            h.Y = i.y = c;
            h.W = i.width = d;
            h.H = i.height = e;
            i.r = f;
            i.path = g;
            h.type = "rect";
            return h
        };
        bR = function(a, b, c, d, e) {
            var f = cd("group"), g = cd("oval"), h = g.style;
            f.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            f.coordsize = b$;
            f.coordorigin = a.coordorigin;
            f[l](g);
            var i = new bN(g, f, a);
            i.type = "ellipse";
            bK(i, {stroke: "#000"});
            i.attrs.cx = b;
            i.attrs.cy = c;
            i.attrs.rx = d;
            i.attrs.ry = e;
            i.setBox({x: b - d, y: c - e, width: d * 2, height: e * 2});
            a.canvas[l](f);
            return i
        };
        bS = function(a, b, c, d, e, f) {
            var g = cd("group"), h = cd("image");
            g.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            g.coordsize = b$;
            g.coordorigin = a.coordorigin;
            h.src = b;
            g[l](h);
            var i = new bN(h, g, a);
            i.type = "image";
            i.attrs.src = b;
            i.attrs.x = c;
            i.attrs.y = d;
            i.attrs.w = e;
            i.attrs.h = f;
            i.setBox({x: c, y: d, width: e, height: f});
            a.canvas[l](g);
            return i
        };
        bT = function(b, c, d, e) {
            var f = cd("group"), g = cd("shape"), h = g.style, i = cd("path"), j = i.style, k = cd("textpath");
            f.style.cssText = "position:absolute;left:0;top:0;width:" + b.width + "px;height:" + b.height + "px";
            f.coordsize = b$;
            f.coordorigin = b.coordorigin;
            i.v = a.format("m{0},{1}l{2},{1}", Q(c * 10), Q(d * 10), Q(c * 10) + 1);
            i.textpathok = true;
            h.width = b.width;
            h.height = b.height;
            k.string = r(e);
            k.on = true;
            g[l](k);
            g[l](i);
            f[l](g);
            var m = new bN(k, f, b);
            m.shape = g;
            m.textpath = i;
            m.type = "text";
            m.attrs.text = e;
            m.attrs.x = c;
            m.attrs.y = d;
            m.attrs.w = 1;
            m.attrs.h = 1;
            bK(m, {font: W.font, stroke: "none", fill: "#000"});
            m.setBox();
            b.canvas[l](f);
            return m
        };
        bU = function(a, b) {
            var c = this.canvas.style;
            a == +a && (a += "px");
            b == +b && (b += "px");
            c.width = a;
            c.height = b;
            c.clip = "rect(0 " + a + " " + b + " 0)";
            return this
        };
        var cd;
        g.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !g.namespaces.rvml && g.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            cd = function(a) {
                return g.createElement("<rvml:" + a + " class=\"rvml\">")
            }
        } catch (a) {
            cd = function(a) {
                return g.createElement("<" + a + " xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">")
            }
        }
        bV = function() {
            var b = by[m](0, arguments), c = b.container, d = b.height, e, f = b.width, h = b.x, i = b.y;
            if (!c)
                throw new Error("VML container not found.");
            var k = new j, n = k.canvas = g.createElement("div"), o = n.style;
            h = h || 0;
            i = i || 0;
            f = f || 512;
            d = d || 342;
            f == +f && (f += "px");
            d == +d && (d += "px");
            k.width = 1000;
            k.height = 1000;
            k.coordsize = b_ * 1000 + q + b_ * 1000;
            k.coordorigin = "0 0";
            k.span = g.createElement("span");
            k.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            n[l](k.span);
            o.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d);
            if (c == 1) {
                g.body[l](n);
                o.left = h + "px";
                o.top = i + "px";
                o.position = "absolute"
            } else
                c.firstChild ? c.insertBefore(n, c.firstChild) : c[l](n);
            bz.call(k, k, a.fn);
            return k
        };
        k.clear = function() {
            this.canvas.innerHTML = p;
            this.span = g.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas[l](this.span);
            this.bottom = this.top = null
        };
        k.remove = function() {
            this.canvas.parentNode.removeChild(this.canvas);
            for (var a in this)
                this[a] = bF(a);
            return true
        }
    }
    var ce = navigator.userAgent.match(/Version\\x2f(.*?)\s/);
    navigator.vendor == "Apple Computer, Inc." && (ce && ce[1] < 4 || navigator.platform.slice(0, 2) == "iP") ? k.safari = function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
        h.setTimeout(function() {
            a.remove()
        })
    } : k.safari = function() {
    };
    var cf = function() {
        this.returnValue = false
    }, cg = function() {
        return this.originalEvent.preventDefault()
    }, ch = function() {
        this.cancelBubble = true
    }, ci = function() {
        return this.originalEvent.stopPropagation()
    }, cj = (function() {
        {
            if (g.addEventListener)
                return function(a, b, c, d) {
                    var e = o && u[b] ? u[b] : b, g = function(e) {
                        if (o && u[f](b))
                            for (var g = 0, h = e.targetTouches && e.targetTouches.length; g < h; g++) {
                                if (e.targetTouches[g].target == a) {
                                    var i = e;
                                    e = e.targetTouches[g];
                                    e.originalEvent = i;
                                    e.preventDefault = cg;
                                    e.stopPropagation = ci;
                                    break
                                }
                            }
                        return c.call(d, e)
                    };
                    a.addEventListener(e, g, false);
                    return function() {
                        a.removeEventListener(e, g, false);
                        return true
                    }
                };
            if (g.attachEvent)
                return function(a, b, c, d) {
                    var e = function(a) {
                        a = a || h.event;
                        a.preventDefault = a.preventDefault || cf;
                        a.stopPropagation = a.stopPropagation || ch;
                        return c.call(d, a)
                    };
                    a.attachEvent("on" + b, e);
                    var f = function() {
                        a.detachEvent("on" + b, e);
                        return true
                    };
                    return f
                }
        }
    })(), ck = [], cl = function(a) {
        var b = a.clientX, c = a.clientY, d = g.documentElement.scrollTop || g.body.scrollTop, e = g.documentElement.scrollLeft || g.body.scrollLeft, f, h = ck.length;
        while (h--) {
            f = ck[h];
            if (o) {
                var i = a.touches.length, j;
                while (i--) {
                    j = a.touches[i];
                    if (j.identifier == f.el._drag.id) {
                        b = j.clientX;
                        c = j.clientY;
                        (a.originalEvent ? a.originalEvent : a).preventDefault();
                        break
                    }
                }
            } else
                a.preventDefault();
            b += e;
            c += d;
            f.move && f.move.call(f.move_scope || f.el, b - f.el._drag.x, c - f.el._drag.y, b, c, a)
        }
    }, cm = function(b) {
        a.unmousemove(cl).unmouseup(cm);
        var c = ck.length, d;
        while (c--) {
            d = ck[c];
            d.el._drag = {};
            d.end && d.end.call(d.end_scope || d.start_scope || d.move_scope || d.el, b)
        }
        ck = []
    };
    for (var cn = t[w]; cn--; )
        (function(b) {
            a[b] = bN[e][b] = function(c, d) {
                if (a.is(c, "function")) {
                    this.events = this.events || [];
                    this.events.push({name: b, f: c, unbind: cj(this.shape || this.node || g, b, c, d || this)})
                }
                return this
            };
            a["un" + b] = bN[e]["un" + b] = function(a) {
                var c = this.events, d = c[w];
                while (d--)
                    if (c[d].name == b && c[d].f == a) {
                        c[d].unbind();
                        c.splice(d, 1);
                        !c.length && delete this.events;
                        return this
                    }
                return this
            }
        })(t[cn]);
    bO.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    };
    bO.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    bO.drag = function(b, c, d, e, f, h) {
        this._drag = {};
        this.mousedown(function(i) {
            (i.originalEvent || i).preventDefault();
            var j = g.documentElement.scrollTop || g.body.scrollTop, k = g.documentElement.scrollLeft || g.body.scrollLeft;
            this._drag.x = i.clientX + k;
            this._drag.y = i.clientY + j;
            this._drag.id = i.identifier;
            c && c.call(f || e || this, i.clientX + k, i.clientY + j, i);
            !ck.length && a.mousemove(cl).mouseup(cm);
            ck.push({el: this, move: b, end: d, move_scope: e, start_scope: f, end_scope: h})
        });
        return this
    };
    bO.undrag = function(b, c, d) {
        var e = ck.length;
        while (e--)
            ck[e].el == this && (ck[e].move == b && ck[e].end == d) && ck.splice(e++, 1);
        !ck.length && a.unmousemove(cl).unmouseup(cm)
    };
    k.circle = function(a, b, c) {
        return bP(this, a || 0, b || 0, c || 0)
    };
    k.rect = function(a, b, c, d, e) {
        return bQ(this, a || 0, b || 0, c || 0, d || 0, e || 0)
    };
    k.ellipse = function(a, b, c, d) {
        return bR(this, a || 0, b || 0, c || 0, d || 0)
    };
    k.path = function(b) {
        b && !a.is(b, F) && !a.is(b[0], G) && (b += p);
        return bH(a.format[m](a, arguments), this)
    };
    k.image = function(a, b, c, d, e) {
        return bS(this, a || "about:blank", b || 0, c || 0, d || 0, e || 0)
    };
    k.text = function(a, b, c) {
        return bT(this, a || 0, b || 0, r(c))
    };
    k.set = function(a) {
        arguments[w] > 1 && (a = Array[e].splice.call(arguments, 0, arguments[w]));
        return new cC(a)
    };
    k.setSize = bU;
    k.top = k.bottom = null;
    k.raphael = a;
    function co() {
        return this.x + q + this.y
    }
    bO.resetScale = function() {
        if (this.removed)
            return this;
        this._.sx = 1;
        this._.sy = 1;
        this.attrs.scale = "1 1"
    };
    bO.scale = function(a, b, c, d) {
        if (this.removed)
            return this;
        if (a == null && b == null)
            return{x: this._.sx, y: this._.sy, toString: co};
        b = b || a;
        !(+b) && (b = a);
        var e, f, g, h, i = this.attrs;
        if (a != 0) {
            var j = this.getBBox(), k = j.x + j.width / 2, l = j.y + j.height / 2, m = B(a / this._.sx), o = B(b / this._.sy);
            c = +c || c == 0 ? c : k;
            d = +d || d == 0 ? d : l;
            var r = this._.sx > 0, s = this._.sy > 0, t = ~(~(a / B(a))), u = ~(~(b / B(b))), x = m * t, y = o * u, z = this.node.style, A = c + B(k - c) * x * (k > c == r ? 1 : -1), C = d + B(l - d) * y * (l > d == s ? 1 : -1), D = a * t > b * u ? o : m;
            switch (this.type) {
                case"rect":
                case"image":
                    var E = i.width * m, F = i.height * o;
                    this.attr({height: F, r: i.r * D, width: E, x: A - E / 2, y: C - F / 2});
                    break;
                case"circle":
                case"ellipse":
                    this.attr({rx: i.rx * m, ry: i.ry * o, r: i.r * D, cx: A, cy: C});
                    break;
                case"text":
                    this.attr({x: A, y: C});
                    break;
                case"path":
                    var G = bp(i.path), H = true, I = r ? x : m, J = s ? y : o;
                    for (var K = 0, L = G[w]; K < L; K++) {
                        var M = G[K], N = V.call(M[0]);
                        {
                            if (N == "M" && H)
                                continue;
                            H = false
                        }
                        if (N == "A") {
                            M[G[K][w] - 2] *= I;
                            M[G[K][w] - 1] *= J;
                            M[1] *= m;
                            M[2] *= o;
                            M[5] = +(t + u ? !(!(+M[5])) : !(+M[5]))
                        } else if (N == "H")
                            for (var O = 1, P = M[w]; O < P; O++)
                                M[O] *= I;
                        else if (N == "V")
                            for (O = 1, P = M[w]; O < P; O++)
                                M[O] *= J;
                        else
                            for (O = 1, P = M[w]; O < P; O++)
                                M[O] *= O % 2 ? I : J
                    }
                    var Q = bn(G);
                    e = A - Q.x - Q.width / 2;
                    f = C - Q.y - Q.height / 2;
                    G[0][1] += e;
                    G[0][2] += f;
                    this.attr({path: G});
                    break
            }
            if (this.type in{text: 1, image: 1} && (t != 1 || u != 1))
                if (this.transformations) {
                    this.transformations[2] = "scale("[n](t, ",", u, ")");
                    this.node[R]("transform", this.transformations[v](q));
                    e = t == -1 ? -i.x - (E || 0) : i.x;
                    f = u == -1 ? -i.y - (F || 0) : i.y;
                    this.attr({x: e, y: f});
                    i.fx = t - 1;
                    i.fy = u - 1
                } else {
                    this.node.filterMatrix = U + ".Matrix(M11="[n](t, ", M12=0, M21=0, M22=", u, ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
                    z.filter = (this.node.filterMatrix || p) + (this.node.filterOpacity || p)
                }
            else if (this.transformations) {
                this.transformations[2] = p;
                this.node[R]("transform", this.transformations[v](q));
                i.fx = 0;
                i.fy = 0
            } else {
                this.node.filterMatrix = p;
                z.filter = (this.node.filterMatrix || p) + (this.node.filterOpacity || p)
            }
            i.scale = [a, b, c, d][v](q);
            this._.sx = a;
            this._.sy = b
        }
        return this
    };
    bO.clone = function() {
        if (this.removed)
            return null;
        var a = this.attr();
        delete a.scale;
        delete a.translation;
        return this.paper[this.type]().attr(a)
    };
    var cp = {}, cq = function(b, c, d, e, f, g, h, i, j) {
        var k = 0, l = 100, m = [b, c, d, e, f, g, h, i].join(), n = cp[m], o, p;
        !n && (cp[m] = n = {data: []});
        n.timer && clearTimeout(n.timer);
        n.timer = setTimeout(function() {
            delete cp[m]
        }, 2000);
        if (j != null) {
            var q = cq(b, c, d, e, f, g, h, i);
            l = ~(~q) * 10
        }
        for (var r = 0; r < l + 1; r++) {
            if (n.data[j] > r)
                p = n.data[r * l];
            else {
                p = a.findDotsAtSegment(b, c, d, e, f, g, h, i, r / l);
                n.data[r] = p
            }
            r && (k += C(C(o.x - p.x, 2) + C(o.y - p.y, 2), 0.5));
            if (j != null && k >= j)
                return p;
            o = p
        }
        if (j == null)
            return k
    }, cr = function(b, c) {
        return function(d, e, f) {
            d = bw(d);
            var g, h, i, j, k = "", l = {}, m, n = 0;
            for (var o = 0, p = d.length; o < p; o++) {
                i = d[o];
                if (i[0] == "M") {
                    g = +i[1];
                    h = +i[2]
                } else {
                    j = cq(g, h, i[1], i[2], i[3], i[4], i[5], i[6]);
                    if (n + j > e) {
                        if (c && !l.start) {
                            m = cq(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n);
                            k += ["C", m.start.x, m.start.y, m.m.x, m.m.y, m.x, m.y];
                            if (f)
                                return k;
                            l.start = k;
                            k = ["M", m.x, m.y + "C", m.n.x, m.n.y, m.end.x, m.end.y, i[5], i[6]][v]();
                            n += j;
                            g = +i[5];
                            h = +i[6];
                            continue
                        }
                        if (!b && !c) {
                            m = cq(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n);
                            return{x: m.x, y: m.y, alpha: m.alpha}
                        }
                    }
                    n += j;
                    g = +i[5];
                    h = +i[6]
                }
                k += i
            }
            l.end = k;
            m = b ? n : c ? l : a.findDotsAtSegment(g, h, i[1], i[2], i[3], i[4], i[5], i[6], 1);
            m.alpha && (m = {x: m.x, y: m.y, alpha: m.alpha});
            return m
        }
    }, cs = cr(1), ct = cr(), cu = cr(0, 1);
    bO.getTotalLength = function() {
        if (this.type != "path")
            return;
        if (this.node.getTotalLength)
            return this.node.getTotalLength();
        return cs(this.attrs.path)
    };
    bO.getPointAtLength = function(a) {
        if (this.type != "path")
            return;
        return ct(this.attrs.path, a)
    };
    bO.getSubpath = function(a, b) {
        if (this.type != "path")
            return;
        if (B(this.getTotalLength() - b) < "1e-6")
            return cu(this.attrs.path, a).end;
        var c = cu(this.attrs.path, b, 1);
        return a ? cu(c, a).end : c
    };
    a.easing_formulas = {linear: function(a) {
            return a
        }, "<": function(a) {
            return C(a, 3)
        }, ">": function(a) {
            return C(a - 1, 3) + 1
        }, "<>": function(a) {
            a = a * 2;
            if (a < 1)
                return C(a, 3) / 2;
            a -= 2;
            return(C(a, 3) + 2) / 2
        }, backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, backOut: function(a) {
            a = a - 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }, elastic: function(a) {
            if (a == 0 || a == 1)
                return a;
            var b = 0.3, c = b / 4;
            return C(2, -10 * a) * y.sin((a - c) * (2 * D) / b) + 1
        }, bounce: function(a) {
            var b = 7.5625, c = 2.75, d;
            if (a < 1 / c)
                d = b * a * a;
            else if (a < 2 / c) {
                a -= 1.5 / c;
                d = b * a * a + 0.75
            } else if (a < 2.5 / c) {
                a -= 2.25 / c;
                d = b * a * a + 0.9375
            } else {
                a -= 2.625 / c;
                d = b * a * a + 0.984375
            }
            return d
        }};
    var cv = [], cw = function() {
        var b = +(new Date);
        for (var c = 0; c < cv[w]; c++) {
            var d = cv[c];
            if (d.stop || d.el.removed)
                continue;
            var e = b - d.start, g = d.ms, h = d.easing, i = d.from, j = d.diff, k = d.to, l = d.t, m = d.el, n = {}, o;
            if (e < g) {
                var r = h(e / g);
                for (var s in i)
                    if (i[f](s)) {
                        switch (X[s]) {
                            case"along":
                                o = r * g * j[s];
                                k.back && (o = k.len - o);
                                var t = ct(k[s], o);
                                m.translate(j.sx - j.x || 0, j.sy - j.y || 0);
                                j.x = t.x;
                                j.y = t.y;
                                m.translate(t.x - j.sx, t.y - j.sy);
                                k.rot && m.rotate(j.r + t.alpha, t.x, t.y);
                                break;
                            case E:
                                o = +i[s] + r * g * j[s];
                                break;
                            case"colour":
                                o = "rgb(" + [cy(Q(i[s].r + r * g * j[s].r)), cy(Q(i[s].g + r * g * j[s].g)), cy(Q(i[s].b + r * g * j[s].b))][v](",") + ")";
                                break;
                            case"path":
                                o = [];
                                for (var u = 0, x = i[s][w]; u < x; u++) {
                                    o[u] = [i[s][u][0]];
                                    for (var y = 1, z = i[s][u][w]; y < z; y++)
                                        o[u][y] = +i[s][u][y] + r * g * j[s][u][y];
                                    o[u] = o[u][v](q)
                                }
                                o = o[v](q);
                                break;
                            case"csv":
                                switch (s) {
                                    case"translation":
                                        var A = r * g * j[s][0] - l.x, B = r * g * j[s][1] - l.y;
                                        l.x += A;
                                        l.y += B;
                                        o = A + q + B;
                                        break;
                                    case"rotation":
                                        o = +i[s][0] + r * g * j[s][0];
                                        i[s][1] && (o += "," + i[s][1] + "," + i[s][2]);
                                        break;
                                    case"scale":
                                        o = [+i[s][0] + r * g * j[s][0], +i[s][1] + r * g * j[s][1], 2 in k[s] ? k[s][2] : p, 3 in k[s] ? k[s][3] : p][v](q);
                                        break;
                                    case"clip-rect":
                                        o = [];
                                        u = 4;
                                        while (u--)
                                            o[u] = +i[s][u] + r * g * j[s][u];
                                        break
                                }
                                break;
                            default:
                                var C = [].concat(i[s]);
                                o = [];
                                u = m.paper.customAttributes[s].length;
                                while (u--)
                                    o[u] = +C[u] + r * g * j[s][u];
                                break
                        }
                        n[s] = o
                    }
                m.attr(n);
                m._run && m._run.call(m)
            } else {
                if (k.along) {
                    t = ct(k.along, k.len * !k.back);
                    m.translate(j.sx - (j.x || 0) + t.x - j.sx, j.sy - (j.y || 0) + t.y - j.sy);
                    k.rot && m.rotate(j.r + t.alpha, t.x, t.y)
                }
                (l.x || l.y) && m.translate(-l.x, -l.y);
                k.scale && (k.scale += p);
                m.attr(k);
                cv.splice(c--, 1)
            }
        }
        a.svg && m && m.paper && m.paper.safari();
        cv[w] && setTimeout(cw)
    }, cx = function(b, c, d, e, f) {
        var g = d - e;
        c.timeouts.push(setTimeout(function() {
            a.is(f, "function") && f.call(c);
            c.animate(b, g, b.easing)
        }, e))
    }, cy = function(a) {
        return z(A(a, 255), 0)
    }, cz = function(a, b) {
        if (a == null)
            return{x: this._.tx, y: this._.ty, toString: co};
        this._.tx += +a;
        this._.ty += +b;
        switch (this.type) {
            case"circle":
            case"ellipse":
                this.attr({cx: +a + this.attrs.cx, cy: +b + this.attrs.cy});
                break;
            case"rect":
            case"image":
            case"text":
                this.attr({x: +a + this.attrs.x, y: +b + this.attrs.y});
                break;
            case"path":
                var c = bp(this.attrs.path);
                c[0][1] += +a;
                c[0][2] += +b;
                this.attr({path: c});
                break
        }
        return this
    };
    bO.animateWith = function(a, b, c, d, e) {
        for (var f = 0, g = cv.length; f < g; f++)
            cv[f].el.id == a.id && (b.start = cv[f].start);
        return this.animate(b, c, d, e)
    };
    bO.animateAlong = cA();
    bO.animateAlongBack = cA(1);
    function cA(b) {
        return function(c, d, e, f) {
            var g = {back: b};
            a.is(e, "function") ? f = e : g.rot = e;
            c && c.constructor == bN && (c = c.attrs.path);
            c && (g.along = c);
            return this.animate(g, d, f)
        }
    }
    function cB(a, b, c, d, e, f) {
        var g = 3 * b, h = 3 * (d - b) - g, i = 1 - g - h, j = 3 * c, k = 3 * (e - c) - j, l = 1 - j - k;
        function m(a) {
            return((i * a + h) * a + g) * a
        }
        function n(a, b) {
            var c = o(a, b);
            return((l * c + k) * c + j) * c
        }
        function o(a, b) {
            var c, d, e, f, j, k;
            for (e = a, k = 0; k < 8; k++) {
                f = m(e) - a;
                if (B(f) < b)
                    return e;
                j = (3 * i * e + 2 * h) * e + g;
                if (B(j) < 0.000001)
                    break;
                e = e - f / j
            }
            c = 0;
            d = 1;
            e = a;
            if (e < c)
                return c;
            if (e > d)
                return d;
            while (c < d) {
                f = m(e);
                if (B(f - a) < b)
                    return e;
                a > f ? c = e : d = e;
                e = (d - c) / 2 + c
            }
            return e
        }
        return n(a, 1 / (200 * f))
    }
    bO.onAnimation = function(a) {
        this._run = a || 0;
        return this
    };
    bO.animate = function(c, d, e, g) {
        var h = this;
        h.timeouts = h.timeouts || [];
        if (a.is(e, "function") || !e)
            g = e || null;
        if (h.removed) {
            g && g.call(h);
            return h
        }
        var i = {}, j = {}, k = false, l = {};
        for (var m in c)
            if (c[f](m)) {
                if (X[f](m) || h.paper.customAttributes[f](m)) {
                    k = true;
                    i[m] = h.attr(m);
                    i[m] == null && (i[m] = W[m]);
                    j[m] = c[m];
                    switch (X[m]) {
                        case"along":
                            var n = cs(c[m]), o = ct(c[m], n * !(!c.back)), p = h.getBBox();
                            l[m] = n / d;
                            l.tx = p.x;
                            l.ty = p.y;
                            l.sx = o.x;
                            l.sy = o.y;
                            j.rot = c.rot;
                            j.back = c.back;
                            j.len = n;
                            c.rot && (l.r = S(h.rotate()) || 0);
                            break;
                        case E:
                            l[m] = (j[m] - i[m]) / d;
                            break;
                        case"colour":
                            i[m] = a.getRGB(i[m]);
                            var q = a.getRGB(j[m]);
                            l[m] = {r: (q.r - i[m].r) / d, g: (q.g - i[m].g) / d, b: (q.b - i[m].b) / d};
                            break;
                        case"path":
                            var t = bw(i[m], j[m]);
                            i[m] = t[0];
                            var u = t[1];
                            l[m] = [];
                            for (var v = 0, x = i[m][w]; v < x; v++) {
                                l[m][v] = [0];
                                for (var y = 1, z = i[m][v][w]; y < z; y++)
                                    l[m][v][y] = (u[v][y] - i[m][v][y]) / d
                            }
                            break;
                        case"csv":
                            var A = r(c[m])[s](b), B = r(i[m])[s](b);
                            switch (m) {
                                case"translation":
                                    i[m] = [0, 0];
                                    l[m] = [A[0] / d, A[1] / d];
                                    break;
                                case"rotation":
                                    i[m] = B[1] == A[1] && B[2] == A[2] ? B : [0, A[1], A[2]];
                                    l[m] = [(A[0] - i[m][0]) / d, 0, 0];
                                    break;
                                case"scale":
                                    c[m] = A;
                                    i[m] = r(i[m])[s](b);
                                    l[m] = [(A[0] - i[m][0]) / d, (A[1] - i[m][1]) / d, 0, 0];
                                    break;
                                case"clip-rect":
                                    i[m] = r(i[m])[s](b);
                                    l[m] = [];
                                    v = 4;
                                    while (v--)
                                        l[m][v] = (A[v] - i[m][v]) / d;
                                    break
                            }
                            j[m] = A;
                            break;
                        default:
                            A = [].concat(c[m]);
                            B = [].concat(i[m]);
                            l[m] = [];
                            v = h.paper.customAttributes[m][w];
                            while (v--)
                                l[m][v] = ((A[v] || 0) - (B[v] || 0)) / d;
                            break
                        }
                }
            }
        if (k) {
            var G = a.easing_formulas[e];
            if (!G) {
                G = r(e).match(P);
                if (G && G[w] == 5) {
                    var H = G;
                    G = function(a) {
                        return cB(a, +H[1], +H[2], +H[3], +H[4], d)
                    }
                } else
                    G = function(a) {
                        return a
                    }
            }
            cv.push({start: c.start || +(new Date), ms: d, easing: G, from: i, diff: l, to: j, el: h, t: {x: 0, y: 0}});
            a.is(g, "function") && (h._ac = setTimeout(function() {
                g.call(h)
            }, d));
            cv[w] == 1 && setTimeout(cw)
        } else {
            var C = [], D;
            for (var F in c)
                if (c[f](F) && Z.test(F)) {
                    m = {value: c[F]};
                    F == "from" && (F = 0);
                    F == "to" && (F = 100);
                    m.key = T(F, 10);
                    C.push(m)
                }
            C.sort(be);
            C[0].key && C.unshift({key: 0, value: h.attrs});
            for (v = 0, x = C[w]; v < x; v++)
                cx(C[v].value, h, d / 100 * C[v].key, d / 100 * (C[v - 1] && C[v - 1].key || 0), C[v - 1] && C[v - 1].value.callback);
            D = C[C[w] - 1].value.callback;
            D && h.timeouts.push(setTimeout(function() {
                D.call(h)
            }, d))
        }
        return this
    };
    bO.stop = function() {
        for (var a = 0; a < cv.length; a++)
            cv[a].el.id == this.id && cv.splice(a--, 1);
        for (a = 0, ii = this.timeouts && this.timeouts.length; a < ii; a++)
            clearTimeout(this.timeouts[a]);
        this.timeouts = [];
        clearTimeout(this._ac);
        delete this._ac;
        return this
    };
    bO.translate = function(a, b) {
        return this.attr({translation: a + " " + b})
    };
    bO[H] = function() {
        return"Raphaël’s object"
    };
    a.ae = cv;
    var cC = function(a) {
        this.items = [];
        this[w] = 0;
        this.type = "set";
        if (a)
            for (var b = 0, c = a[w]; b < c; b++) {
                if (a[b] && (a[b].constructor == bN || a[b].constructor == cC)) {
                    this[this.items[w]] = this.items[this.items[w]] = a[b];
                    this[w]++
                }
            }
    };
    cC[e][L] = function() {
        var a, b;
        for (var c = 0, d = arguments[w]; c < d; c++) {
            a = arguments[c];
            if (a && (a.constructor == bN || a.constructor == cC)) {
                b = this.items[w];
                this[b] = this.items[b] = a;
                this[w]++
            }
        }
        return this
    };
    cC[e].pop = function() {
        delete this[this[w]--];
        return this.items.pop()
    };
    for (var cD in bO)
        bO[f](cD) && (cC[e][cD] = (function(a) {
            return function() {
                for (var b = 0, c = this.items[w]; b < c; b++)
                    this.items[b][a][m](this.items[b], arguments);
                return this
            }
        })(cD));
    cC[e].attr = function(b, c) {
        if (b && a.is(b, G) && a.is(b[0], "object"))
            for (var d = 0, e = b[w]; d < e; d++)
                this.items[d].attr(b[d]);
        else
            for (var f = 0, g = this.items[w]; f < g; f++)
                this.items[f].attr(b, c);
        return this
    };
    cC[e].animate = function(b, c, d, e) {
        (a.is(d, "function") || !d) && (e = d || null);
        var f = this.items[w], g = f, h, i = this, j;
        e && (j = function() {
            !(--f) && e.call(i)
        });
        d = a.is(d, F) ? d : j;
        h = this.items[--g].animate(b, c, d, j);
        while (g--)
            this.items[g] && !this.items[g].removed && this.items[g].animateWith(h, b, c, d, j);
        return this
    };
    cC[e].insertAfter = function(a) {
        var b = this.items[w];
        while (b--)
            this.items[b].insertAfter(a);
        return this
    };
    cC[e].getBBox = function() {
        var a = [], b = [], c = [], d = [];
        for (var e = this.items[w]; e--; ) {
            var f = this.items[e].getBBox();
            a[L](f.x);
            b[L](f.y);
            c[L](f.x + f.width);
            d[L](f.y + f.height)
        }
        a = A[m](0, a);
        b = A[m](0, b);
        return{x: a, y: b, width: z[m](0, c) - a, height: z[m](0, d) - b}
    };
    cC[e].clone = function(a) {
        a = new cC;
        for (var b = 0, c = this.items[w]; b < c; b++)
            a[L](this.items[b].clone());
        return a
    };
    a.registerFont = function(a) {
        if (!a.face)
            return a;
        this.fonts = this.fonts || {};
        var b = {w: a.w, face: {}, glyphs: {}}, c = a.face["font-family"];
        for (var d in a.face)
            a.face[f](d) && (b.face[d] = a.face[d]);
        this.fonts[c] ? this.fonts[c][L](b) : this.fonts[c] = [b];
        if (!a.svg) {
            b.face["units-per-em"] = T(a.face["units-per-em"], 10);
            for (var e in a.glyphs)
                if (a.glyphs[f](e)) {
                    var g = a.glyphs[e];
                    b.glyphs[e] = {w: g.w, k: {}, d: g.d && "M" + g.d[Y](/[mlcxtrv]/g, function(a) {
                            return({l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"})[a] || "M"
                        }) + "z"};
                    if (g.k)
                        for (var h in g.k)
                            g[f](h) && (b.glyphs[e].k[h] = g.k[h])
                }
        }
        return a
    };
    k.getFont = function(b, c, d, e) {
        e = e || "normal";
        d = d || "normal";
        c = +c || ({normal: 400, bold: 700, lighter: 300, bolder: 800})[c] || 400;
        if (!a.fonts)
            return;
        var g = a.fonts[b];
        if (!g) {
            var h = new RegExp("(^|\\s)" + b[Y](/[^\w\d\s+!~.:_-]/g, p) + "(\\s|$)", "i");
            for (var i in a.fonts)
                if (a.fonts[f](i)) {
                    if (h.test(i)) {
                        g = a.fonts[i];
                        break
                    }
                }
        }
        var j;
        if (g)
            for (var k = 0, l = g[w]; k < l; k++) {
                j = g[k];
                if (j.face["font-weight"] == c && (j.face["font-style"] == d || !j.face["font-style"]) && j.face["font-stretch"] == e)
                    break
            }
        return j
    };
    k.print = function(c, d, e, f, g, h, i) {
        h = h || "middle";
        i = z(A(i || 0, 1), -1);
        var j = this.set(), k = r(e)[s](p), l = 0, m = p, n;
        a.is(f, e) && (f = this.getFont(f));
        if (f) {
            n = (g || 16) / f.face["units-per-em"];
            var o = f.face.bbox.split(b), q = +o[0], t = +o[1] + (h == "baseline" ? o[3] - o[1] + +f.face.descent : (o[3] - o[1]) / 2);
            for (var u = 0, v = k[w]; u < v; u++) {
                var x = u && f.glyphs[k[u - 1]] || {}, y = f.glyphs[k[u]];
                l += u ? (x.w || f.w) + (x.k && x.k[k[u]] || 0) + f.w * i : 0;
                y && y.d && j[L](this.path(y.d).attr({fill: "#000", stroke: "none", translation: [l, 0]}))
            }
            j.scale(n, n, q, t).translate(c - q, d - t)
        }
        return j
    };
    a.format = function(b, c) {
        var e = a.is(c, G) ? [0][n](c) : arguments;
        b && a.is(b, F) && e[w] - 1 && (b = b[Y](d, function(a, b) {
            return e[++b] == null ? p : e[b]
        }));
        return b || p
    };
    a.ninja = function() {
        i.was ? h.Raphael = i.is : delete Raphael;
        return a
    };
    a.el = bO;
    a.st = cC[e];
    i.was ? h.Raphael = a : Raphael = a
})()/*
 * Raphael 1.4.7 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael = function() {
    function l() {
        if (l.is(arguments[0], U)) {
            for (var a = arguments[0], b = Ca[K](l, a.splice(0, 3 + l.is(a[0], P))), c = b.set(), d = 0, f = a[o]; d < f; d++) {
                var e = a[d] || {};
                sb.test(e.type) && c[F](b[e.type]().attr(e))
            }
            return c
        }
        return Ca[K](l, arguments)
    }
    l.version = "1.4.7";
    var V = /[, ]+/, sb = /^(circle|rect|path|ellipse|text|image)$/, p = "prototype", z = "hasOwnProperty", C = document, aa = window, Qa = {was: Object[p][z].call(aa, "Raphael"), is: aa.Raphael};
    function H() {
    }
    var x = "appendChild", K = "apply", M = "concat", Da = "createTouch"in C,
            A = "", N = " ", D = String, G = "split", Ra = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[G](N), Ea = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, R = "join", o = "length", fa = String[p].toLowerCase, v = Math, Y = v.max, ba = v.min, P = "number", ga = "string", U = "array", O = "toString", ca = "fill", tb = Object[p][O], E = v.pow, F = "push", ja = /^(?=[\da-f]$)/, Sa = /^url\(['"]?([^\)]+?)['"]?\)$/i, ub = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%)?)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,
            Q = v.round, W = "setAttribute", y = parseFloat, ha = parseInt, Fa = " progid:DXImageTransform.Microsoft", sa = String[p].toUpperCase, ta = {blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", opacity: 1, path: "M0,0", r: 0, rotation: 0, rx: 0, ry: 0, scale: "1 1", src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt",
        "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", translation: "0 0", width: 0, x: 0, y: 0}, Ga = {along: "along", blur: P, "clip-rect": "csv", cx: P, cy: P, fill: "colour", "fill-opacity": P, "font-size": P, height: P, opacity: P, path: "path", r: P, rotation: "csv", rx: P, ry: P, scale: "csv", stroke: "colour", "stroke-opacity": P, "stroke-width": P, translation: "csv", width: P, x: P, y: P}, I = "replace";
    l.type = aa.SVGAngle || C.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1") ? "SVG" : "VML";
    if (l.type == "VML") {
        var da = C.createElement("div");
        da.innerHTML = '<v:shape adj="1"/>';
        da = da.firstChild;
        da.style.behavior = "url(#default#VML)";
        if (!(da && typeof da.adj == "object"))
            return l.type = null;
        da = null
    }
    l.svg = !(l.vml = l.type == "VML");
    H[p] = l[p];
    l._id = 0;
    l._oid = 0;
    l.fn = {};
    l.is = function(a, b) {
        b = fa.call(b);
        return b == "object" && a === Object(a) || b == "undefined" && typeof a == b || b == "null" && a == null || b == "array" && Array.isArray && Array.isArray(a) || fa.call(tb.call(a).slice(8, -1)) == b
    };
    l.setWindow = function(a) {
        aa =
                a;
        C = aa.document
    };
    function ua(a) {
        if (l.vml) {
            var b = /^\s+|\s+$/g;
            ua = Z(function(d) {
                var f;
                d = D(d)[I](b, A);
                try {
                    var e = new aa.ActiveXObject("htmlfile");
                    e.write("<body>");
                    e.close();
                    f = e.body
                } catch (g) {
                    f = aa.createPopup().document.body
                }
                e = f.createTextRange();
                try {
                    f.style.color = d;
                    var h = e.queryCommandValue("ForeColor");
                    h = (h & 255) << 16 | h & 65280 | (h & 16711680) >>> 16;
                    return"#" + ("fff" + h[O](16)).slice(-6)
                } catch (i) {
                    return"none"
                }
            })
        } else {
            var c = C.createElement("i");
            c.title = "Rapha\u00ebl Colour Picker";
            c.style.display = "none";
            C.body[x](c);
            ua = Z(function(d) {
                c.style.color = d;
                return C.defaultView.getComputedStyle(c, A).getPropertyValue("color")
            })
        }
        return ua(a)
    }
    function Ta() {
        return"hsb(" + [this.h, this.s, this.b] + ")"
    }
    function vb() {
        return"hsl(" + [this.h, this.s, this.l] + ")"
    }
    function wb() {
        return this.hex
    }
    l.hsb2rgb = function(a, b, c) {
        if (l.is(a, "object") && "h"in a && "s"in a && "b"in a) {
            c = a.b;
            b = a.s;
            a = a.h
        }
        return l.hsl2rgb(a, b, c / 2)
    };
    l.hsl2rgb = function(a, b, c) {
        if (l.is(a, "object") && "h"in a && "s"in a && "l"in a) {
            c = a.l;
            b = a.s;
            a = a.h
        }
        if (a > 1 || b > 1 || c > 1) {
            a /= 255;
            b /= 255;
            c /=
            255
        }
        var d = {}, f = ["r", "g", "b"], e;
        if (b) {
            b = c < 0.5 ? c * (1 + b) : c + b - c * b;
            c = 2 * c - b;
            for (var g = 0, h = f.length; g < h; g++) {
                e = a + 1 / 3 * -(g - 1);
                e < 0 && e++;
                e > 1 && e--;
                d[f[g]] = e * 6 < 1 ? c + (b - c) * 6 * e : e * 2 < 1 ? b : e * 3 < 2 ? c + (b - c) * (2 / 3 - e) * 6 : c
            }
        } else
            d = {r: c, g: c, b: c};
        d.r *= 255;
        d.g *= 255;
        d.b *= 255;
        a = (~~d.r)[O](16);
        f = (~~d.g)[O](16);
        b = (~~d.b)[O](16);
        a = a[I](ja, "0");
        f = f[I](ja, "0");
        b = b[I](ja, "0");
        d.hex = "#" + a + f + b;
        d.toString = wb;
        return d
    };
    l.rgb2hsb = function(a, b, c) {
        if (b == null && l.is(a, "object") && "r"in a && "g"in a && "b"in a) {
            c = a.b;
            b = a.g;
            a = a.r
        }
        if (b == null && l.is(a, ga)) {
            var d =
                    l.getRGB(a);
            a = d.r;
            b = d.g;
            c = d.b
        }
        if (a > 1 || b > 1 || c > 1) {
            a /= 255;
            b /= 255;
            c /= 255
        }
        var f = Y(a, b, c), e = ba(a, b, c);
        d = f;
        if (e == f)
            return{h: 0, s: 0, b: f, toString: Ta};
        else {
            var g = f - e;
            e = g / f;
            a = a == f ? (b - c) / g : b == f ? 2 + (c - a) / g : 4 + (a - b) / g;
            a /= 6;
            a < 0 && a++;
            a > 1 && a--
        }
        return{h: a, s: e, b: d, toString: Ta}
    };
    l.rgb2hsl = function(a, b, c) {
        if (b == null && l.is(a, "object") && "r"in a && "g"in a && "b"in a) {
            c = a.b;
            b = a.g;
            a = a.r
        }
        if (b == null && l.is(a, ga)) {
            var d = l.getRGB(a);
            a = d.r;
            b = d.g;
            c = d.b
        }
        if (a > 1 || b > 1 || c > 1) {
            a /= 255;
            b /= 255;
            c /= 255
        }
        var f = Y(a, b, c), e = ba(a, b, c);
        d = (f + e) / 2;
        if (e == f)
            a =
                    {h: 0, s: 0, l: d};
        else {
            var g = f - e;
            e = d < 0.5 ? g / (f + e) : g / (2 - f - e);
            a = a == f ? (b - c) / g : b == f ? 2 + (c - a) / g : 4 + (a - b) / g;
            a /= 6;
            a < 0 && a++;
            a > 1 && a--;
            a = {h: a, s: e, l: d}
        }
        a.toString = vb;
        return a
    };
    var xb = /,?([achlmqrstvxz]),?/gi, ka = /\s*,\s*/, yb = {hs: 1, rg: 1};
    l._path2string = function() {
        return this.join(",")[I](xb, "$1")
    };
    function Z(a, b, c) {
        function d() {
            var f = Array[p].slice.call(arguments, 0), e = f[R]("\u25ba"), g = d.cache = d.cache || {}, h = d.count = d.count || [];
            if (g[z](e))
                return c ? c(g[e]) : g[e];
            h[o] >= 1000 && delete g[h.shift()];
            h[F](e);
            g[e] = a[K](b, f);
            return c ?
                    c(g[e]) : g[e]
        }
        return d
    }
    l.getRGB = Z(function(a) {
        if (!a || (a = D(a)).indexOf("-") + 1)
            return{r: -1, g: -1, b: -1, hex: "none", error: 1};
        if (a == "none")
            return{r: -1, g: -1, b: -1, hex: "none"};
        !(yb[z](a.substring(0, 2)) || a.charAt() == "#") && (a = ua(a));
        var b, c, d, f, e;
        if (a = a.match(ub)) {
            if (a[2]) {
                d = ha(a[2].substring(5), 16);
                c = ha(a[2].substring(3, 5), 16);
                b = ha(a[2].substring(1, 3), 16)
            }
            if (a[3]) {
                d = ha((e = a[3].charAt(3)) + e, 16);
                c = ha((e = a[3].charAt(2)) + e, 16);
                b = ha((e = a[3].charAt(1)) + e, 16)
            }
            if (a[4]) {
                a = a[4][G](ka);
                b = y(a[0]);
                c = y(a[1]);
                d = y(a[2]);
                f = y(a[3])
            }
            if (a[5]) {
                a =
                        a[5][G](ka);
                b = y(a[0]) * 2.55;
                c = y(a[1]) * 2.55;
                d = y(a[2]) * 2.55;
                f = y(a[3])
            }
            if (a[6]) {
                a = a[6][G](ka);
                b = y(a[0]);
                c = y(a[1]);
                d = y(a[2]);
                (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360);
                return l.hsb2rgb(b, c, d)
            }
            if (a[7]) {
                a = a[7][G](ka);
                b = y(a[0]) * 2.55;
                c = y(a[1]) * 2.55;
                d = y(a[2]) * 2.55;
                (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360 * 2.55);
                return l.hsb2rgb(b, c, d)
            }
            if (a[8]) {
                a = a[8][G](ka);
                b = y(a[0]);
                c = y(a[1]);
                d = y(a[2]);
                (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360);
                return l.hsl2rgb(b, c, d)
            }
            if (a[9]) {
                a =
                        a[9][G](ka);
                b = y(a[0]) * 2.55;
                c = y(a[1]) * 2.55;
                d = y(a[2]) * 2.55;
                (a[0].slice(-3) == "deg" || a[0].slice(-1) == "\u00b0") && (b /= 360 * 2.55);
                return l.hsl2rgb(b, c, d)
            }
            a = {r: b, g: c, b: d};
            b = (~~b)[O](16);
            c = (~~c)[O](16);
            d = (~~d)[O](16);
            b = b[I](ja, "0");
            c = c[I](ja, "0");
            d = d[I](ja, "0");
            a.hex = "#" + b + c + d;
            isFinite(y(f)) && (a.o = f);
            return a
        }
        return{r: -1, g: -1, b: -1, hex: "none", error: 1}
    }, l);
    l.getColor = function(a) {
        a = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: a || 0.75};
        var b = this.hsb2rgb(a.h, a.s, a.b);
        a.h += 0.075;
        if (a.h > 1) {
            a.h = 0;
            a.s -= 0.2;
            a.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: a.b})
        }
        return b.hex
    };
    l.getColor.reset = function() {
        delete this.start
    };
    var zb = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig, Ab = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig;
    l.parsePathString = Z(function(a) {
        if (!a)
            return null;
        var b = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}, c = [];
        if (l.is(a, U) && l.is(a[0], U))
            c = va(a);
        c[o] || D(a)[I](zb, function(d, f, e) {
            var g = [];
            d = fa.call(f);
            e[I](Ab, function(h, i) {
                i && g[F](+i)
            });
            if (d == "m" && g[o] > 2) {
                c[F]([f][M](g.splice(0, 2)));
                d = "l";
                f = f == "m" ? "l" : "L"
            }
            for (; g[o] >= b[d]; ) {
                c[F]([f][M](g.splice(0, b[d])));
                if (!b[d])
                    break
            }
        });
        c[O] = l._path2string;
        return c
    });
    l.findDotsAtSegment = function(a, b, c, d, f, e, g, h, i) {
        var j = 1 - i, m = E(j, 3) * a + E(j, 2) * 3 * i * c + j * 3 * i * i * f + E(i, 3) * g;
        j = E(j, 3) * b + E(j, 2) * 3 * i * d + j * 3 * i * i * e + E(i, 3) * h;
        var n = a + 2 * i * (c - a) + i * i * (f - 2 * c + a), r = b + 2 * i * (d - b) + i * i * (e - 2 * d + b), q = c + 2 * i * (f - c) + i * i * (g - 2 * f + c), k = d + 2 * i * (e - d) + i * i * (h - 2 * e + d);
        a = (1 - i) * a + i * c;
        b = (1 - i) * b + i * d;
        f = (1 - i) * f + i * g;
        e = (1 - i) * e + i * h;
        h = 90 - v.atan((n - q) / (r - k)) * 180 / v.PI;
        (n > q || r < k) && (h += 180);
        return{x: m, y: j,
            m: {x: n, y: r}, n: {x: q, y: k}, start: {x: a, y: b}, end: {x: f, y: e}, alpha: h}
    };
    var xa = Z(function(a) {
        if (!a)
            return{x: 0, y: 0, width: 0, height: 0};
        a = wa(a);
        for (var b = 0, c = 0, d = [], f = [], e, g = 0, h = a[o]; g < h; g++) {
            e = a[g];
            if (e[0] == "M") {
                b = e[1];
                c = e[2];
                d[F](b);
                f[F](c)
            } else {
                b = Bb(b, c, e[1], e[2], e[3], e[4], e[5], e[6]);
                d = d[M](b.min.x, b.max.x);
                f = f[M](b.min.y, b.max.y);
                b = e[5];
                c = e[6]
            }
        }
        a = ba[K](0, d);
        e = ba[K](0, f);
        return{x: a, y: e, width: Y[K](0, d) - a, height: Y[K](0, f) - e}
    });
    function va(a) {
        var b = [];
        if (!l.is(a, U) || !l.is(a && a[0], U))
            a = l.parsePathString(a);
        for (var c =
                0, d = a[o]; c < d; c++) {
            b[c] = [];
            for (var f = 0, e = a[c][o]; f < e; f++)
                b[c][f] = a[c][f]
        }
        b[O] = l._path2string;
        return b
    }
    var Ha = Z(function(a) {
        if (!l.is(a, U) || !l.is(a && a[0], U))
            a = l.parsePathString(a);
        var b = [], c = 0, d = 0, f = 0, e = 0, g = 0;
        if (a[0][0] == "M") {
            c = a[0][1];
            d = a[0][2];
            f = c;
            e = d;
            g++;
            b[F](["M", c, d])
        }
        g = g;
        for (var h = a[o]; g < h; g++) {
            var i = b[g] = [], j = a[g];
            if (j[0] != fa.call(j[0])) {
                i[0] = fa.call(j[0]);
                switch (i[0]) {
                    case "a":
                        i[1] = j[1];
                        i[2] = j[2];
                        i[3] = j[3];
                        i[4] = j[4];
                        i[5] = j[5];
                        i[6] = +(j[6] - c).toFixed(3);
                        i[7] = +(j[7] - d).toFixed(3);
                        break;
                    case "v":
                        i[1] =
                                +(j[1] - d).toFixed(3);
                        break;
                    case "m":
                        f = j[1];
                        e = j[2];
                    default:
                        for (var m = 1, n = j[o]; m < n; m++)
                            i[m] = +(j[m] - (m % 2 ? c : d)).toFixed(3)
                    }
            } else {
                b[g] = [];
                if (j[0] == "m") {
                    f = j[1] + c;
                    e = j[2] + d
                }
                i = 0;
                for (m = j[o]; i < m; i++)
                    b[g][i] = j[i]
            }
            j = b[g][o];
            switch (b[g][0]) {
                case "z":
                    c = f;
                    d = e;
                    break;
                case "h":
                    c += +b[g][j - 1];
                    break;
                case "v":
                    d += +b[g][j - 1];
                    break;
                default:
                    c += +b[g][j - 2];
                    d += +b[g][j - 1]
                }
        }
        b[O] = l._path2string;
        return b
    }, 0, va), oa = Z(function(a) {
        if (!l.is(a, U) || !l.is(a && a[0], U))
            a = l.parsePathString(a);
        var b = [], c = 0, d = 0, f = 0, e = 0, g = 0;
        if (a[0][0] == "M") {
            c =
                    +a[0][1];
            d = +a[0][2];
            f = c;
            e = d;
            g++;
            b[0] = ["M", c, d]
        }
        g = g;
        for (var h = a[o]; g < h; g++) {
            var i = b[g] = [], j = a[g];
            if (j[0] != sa.call(j[0])) {
                i[0] = sa.call(j[0]);
                switch (i[0]) {
                    case "A":
                        i[1] = j[1];
                        i[2] = j[2];
                        i[3] = j[3];
                        i[4] = j[4];
                        i[5] = j[5];
                        i[6] = +(j[6] + c);
                        i[7] = +(j[7] + d);
                        break;
                    case "V":
                        i[1] = +j[1] + d;
                        break;
                    case "H":
                        i[1] = +j[1] + c;
                        break;
                    case "M":
                        f = +j[1] + c;
                        e = +j[2] + d;
                    default:
                        for (var m = 1, n = j[o]; m < n; m++)
                            i[m] = +j[m] + (m % 2 ? c : d)
                    }
            } else {
                m = 0;
                for (n = j[o]; m < n; m++)
                    b[g][m] = j[m]
            }
            switch (i[0]) {
                case "Z":
                    c = f;
                    d = e;
                    break;
                case "H":
                    c = i[1];
                    break;
                case "V":
                    d = i[1];
                    break;
                case "M":
                    f = b[g][b[g][o] - 2];
                    e = b[g][b[g][o] - 1];
                default:
                    c = b[g][b[g][o] - 2];
                    d = b[g][b[g][o] - 1]
                }
        }
        b[O] = l._path2string;
        return b
    }, null, va);
    function ya(a, b, c, d) {
        return[a, b, c, d, c, d]
    }
    function Ua(a, b, c, d, f, e) {
        var g = 1 / 3, h = 2 / 3;
        return[g * a + h * c, g * b + h * d, g * f + h * c, g * e + h * d, f, e]
    }
    function Va(a, b, c, d, f, e, g, h, i, j) {
        var m = v.PI, n = m * 120 / 180, r = m / 180 * (+f || 0), q = [], k, t = Z(function(J, ia, za) {
            var Cb = J * v.cos(za) - ia * v.sin(za);
            J = J * v.sin(za) + ia * v.cos(za);
            return{x: Cb, y: J}
        });
        if (j) {
            w = j[0];
            k = j[1];
            e = j[2];
            B = j[3]
        } else {
            k = t(a, b, -r);
            a = k.x;
            b = k.y;
            k = t(h, i, -r);
            h = k.x;
            i = k.y;
            v.cos(m / 180 * f);
            v.sin(m / 180 * f);
            k = (a - h) / 2;
            w = (b - i) / 2;
            B = k * k / (c * c) + w * w / (d * d);
            if (B > 1) {
                B = v.sqrt(B);
                c = B * c;
                d = B * d
            }
            B = c * c;
            var L = d * d;
            B = (e == g ? -1 : 1) * v.sqrt(v.abs((B * L - B * w * w - L * k * k) / (B * w * w + L * k * k)));
            e = B * c * w / d + (a + h) / 2;
            var B = B * -d * k / c + (b + i) / 2, w = v.asin(((b - B) / d).toFixed(7));
            k = v.asin(((i - B) / d).toFixed(7));
            w = a < e ? m - w : w;
            k = h < e ? m - k : k;
            w < 0 && (w = m * 2 + w);
            k < 0 && (k = m * 2 + k);
            if (g && w > k)
                w -= m * 2;
            if (!g && k > w)
                k -= m * 2
        }
        m = k - w;
        if (v.abs(m) > n) {
            q = k;
            m = h;
            L = i;
            k = w + n * (g && k > w ? 1 : -1);
            h = e + c * v.cos(k);
            i = B + d * v.sin(k);
            q = Va(h, i, c, d, f, 0, g, m,
                    L, [k, q, e, B])
        }
        m = k - w;
        f = v.cos(w);
        e = v.sin(w);
        g = v.cos(k);
        k = v.sin(k);
        m = v.tan(m / 4);
        c = 4 / 3 * c * m;
        m = 4 / 3 * d * m;
        d = [a, b];
        a = [a + c * e, b - m * f];
        b = [h + c * k, i - m * g];
        h = [h, i];
        a[0] = 2 * d[0] - a[0];
        a[1] = 2 * d[1] - a[1];
        if (j)
            return[a, b, h][M](q);
        else {
            q = [a, b, h][M](q)[R]()[G](",");
            j = [];
            h = 0;
            for (i = q[o]; h < i; h++)
                j[h] = h % 2 ? t(q[h - 1], q[h], r).y : t(q[h], q[h + 1], r).x;
            return j
        }
    }
    function la(a, b, c, d, f, e, g, h, i) {
        var j = 1 - i;
        return{x: E(j, 3) * a + E(j, 2) * 3 * i * c + j * 3 * i * i * f + E(i, 3) * g, y: E(j, 3) * b + E(j, 2) * 3 * i * d + j * 3 * i * i * e + E(i, 3) * h}
    }
    var Bb = Z(function(a, b, c, d, f, e, g, h) {
        var i = f - 2 *
                c + a - (g - 2 * f + c), j = 2 * (c - a) - 2 * (f - c), m = a - c, n = (-j + v.sqrt(j * j - 4 * i * m)) / 2 / i;
        i = (-j - v.sqrt(j * j - 4 * i * m)) / 2 / i;
        var r = [b, h], q = [a, g];
        v.abs(n) > 1000000000000 && (n = 0.5);
        v.abs(i) > 1000000000000 && (i = 0.5);
        if (n > 0 && n < 1) {
            n = la(a, b, c, d, f, e, g, h, n);
            q[F](n.x);
            r[F](n.y)
        }
        if (i > 0 && i < 1) {
            n = la(a, b, c, d, f, e, g, h, i);
            q[F](n.x);
            r[F](n.y)
        }
        i = e - 2 * d + b - (h - 2 * e + d);
        j = 2 * (d - b) - 2 * (e - d);
        m = b - d;
        n = (-j + v.sqrt(j * j - 4 * i * m)) / 2 / i;
        i = (-j - v.sqrt(j * j - 4 * i * m)) / 2 / i;
        v.abs(n) > 1000000000000 && (n = 0.5);
        v.abs(i) > 1000000000000 && (i = 0.5);
        if (n > 0 && n < 1) {
            n = la(a, b, c, d, f, e, g, h, n);
            q[F](n.x);
            r[F](n.y)
        }
        if (i > 0 && i < 1) {
            n = la(a, b, c, d, f, e, g, h, i);
            q[F](n.x);
            r[F](n.y)
        }
        return{min: {x: ba[K](0, q), y: ba[K](0, r)}, max: {x: Y[K](0, q), y: Y[K](0, r)}}
    }), wa = Z(function(a, b) {
        var c = oa(a), d = b && oa(b);
        a = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null};
        b = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null};
        function f(q, k) {
            var t;
            if (!q)
                return["C", k.x, k.y, k.x, k.y, k.x, k.y];
            !(q[0]in{T: 1, Q: 1}) && (k.qx = k.qy = null);
            switch (q[0]) {
                case "M":
                    k.X = q[1];
                    k.Y = q[2];
                    break;
                case "A":
                    q = ["C"][M](Va[K](0, [k.x, k.y][M](q.slice(1))));
                    break;
                case "S":
                    t = k.x + (k.x -
                            (k.bx || k.x));
                    k = k.y + (k.y - (k.by || k.y));
                    q = ["C", t, k][M](q.slice(1));
                    break;
                case "T":
                    k.qx = k.x + (k.x - (k.qx || k.x));
                    k.qy = k.y + (k.y - (k.qy || k.y));
                    q = ["C"][M](Ua(k.x, k.y, k.qx, k.qy, q[1], q[2]));
                    break;
                case "Q":
                    k.qx = q[1];
                    k.qy = q[2];
                    q = ["C"][M](Ua(k.x, k.y, q[1], q[2], q[3], q[4]));
                    break;
                case "L":
                    q = ["C"][M](ya(k.x, k.y, q[1], q[2]));
                    break;
                case "H":
                    q = ["C"][M](ya(k.x, k.y, q[1], k.y));
                    break;
                case "V":
                    q = ["C"][M](ya(k.x, k.y, k.x, q[1]));
                    break;
                case "Z":
                    q = ["C"][M](ya(k.x, k.y, k.X, k.Y));
                    break
            }
            return q
        }
        function e(q, k) {
            if (q[k][o] > 7) {
                q[k].shift();
                for (var t = q[k]; t[o]; )
                    q.splice(k++, 0, ["C"][M](t.splice(0, 6)));
                q.splice(k, 1);
                i = Y(c[o], d && d[o] || 0)
            }
        }
        function g(q, k, t, L, B) {
            if (q && k && q[B][0] == "M" && k[B][0] != "M") {
                k.splice(B, 0, ["M", L.x, L.y]);
                t.bx = 0;
                t.by = 0;
                t.x = q[B][1];
                t.y = q[B][2];
                i = Y(c[o], d && d[o] || 0)
            }
        }
        for (var h = 0, i = Y(c[o], d && d[o] || 0); h < i; h++) {
            c[h] = f(c[h], a);
            e(c, h);
            d && (d[h] = f(d[h], b));
            d && e(d, h);
            g(c, d, a, b, h);
            g(d, c, b, a, h);
            var j = c[h], m = d && d[h], n = j[o], r = d && m[o];
            a.x = j[n - 2];
            a.y = j[n - 1];
            a.bx = y(j[n - 4]) || a.x;
            a.by = y(j[n - 3]) || a.y;
            b.bx = d && (y(m[r - 4]) || b.x);
            b.by = d && (y(m[r -
            3]) || b.y);
            b.x = d && m[r - 2];
            b.y = d && m[r - 1]
        }
        return d ? [c, d] : c
    }, null, va), Wa = Z(function(a) {
        for (var b = [], c = 0, d = a[o]; c < d; c++) {
            var f = {}, e = a[c].match(/^([^:]*):?([\d\.]*)/);
            f.color = l.getRGB(e[1]);
            if (f.color.error)
                return null;
            f.color = f.color.hex;
            e[2] && (f.offset = e[2] + "%");
            b[F](f)
        }
        c = 1;
        for (d = b[o] - 1; c < d; c++)
            if (!b[c].offset) {
                a = y(b[c - 1].offset || 0);
                e = 0;
                for (f = c + 1; f < d; f++)
                    if (b[f].offset) {
                        e = b[f].offset;
                        break
                    }
                if (!e) {
                    e = 100;
                    f = d
                }
                e = y(e);
                for (e = (e - a) / (f - c + 1); c < f; c++) {
                    a += e;
                    b[c].offset = a + "%"
                }
            }
        return b
    });
    function Xa(a, b, c, d) {
        if (l.is(a,
                ga) || l.is(a, "object")) {
            a = l.is(a, ga) ? C.getElementById(a) : a;
            if (a.tagName)
                return b == null ? {container: a, width: a.style.pixelWidth || a.offsetWidth, height: a.style.pixelHeight || a.offsetHeight} : {container: a, width: b, height: c}
        } else
            return{container: 1, x: a, y: b, width: c, height: d}
    }
    function Ia(a, b) {
        var c = this;
        for (var d in b)
            if (b[z](d) && !(d in a))
                switch (typeof b[d]) {
                    case "function":
                        (function(f) {
                            a[d] = a === c ? f : function() {
                                return f[K](c, arguments)
                            }
                        })(b[d]);
                        break;
                    case "object":
                        a[d] = a[d] || {};
                        Ia.call(this, a[d], b[d]);
                        break;
                    default:
                        a[d] =
                                b[d];
                        break
                    }
    }
    function ma(a, b) {
        a == b.top && (b.top = a.prev);
        a == b.bottom && (b.bottom = a.next);
        a.next && (a.next.prev = a.prev);
        a.prev && (a.prev.next = a.next)
    }
    function Ya(a, b) {
        if (b.top !== a) {
            ma(a, b);
            a.next = null;
            a.prev = b.top;
            b.top.next = a;
            b.top = a
        }
    }
    function Za(a, b) {
        if (b.bottom !== a) {
            ma(a, b);
            a.next = b.bottom;
            a.prev = null;
            b.bottom.prev = a;
            b.bottom = a
        }
    }
    function $a(a, b, c) {
        ma(a, c);
        b == c.top && (c.top = a);
        b.next && (b.next.prev = a);
        a.next = b.next;
        a.prev = b;
        b.next = a
    }
    function ab(a, b, c) {
        ma(a, c);
        b == c.bottom && (c.bottom = a);
        b.prev && (b.prev.next =
                a);
        a.prev = b.prev;
        b.prev = a;
        a.next = b
    }
    function bb(a) {
        return function() {
            throw new Error("Rapha\u00ebl: you are calling to method \u201c" + a + "\u201d of removed object");
        }
    }
    var cb = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/;
    l.pathToRelative = Ha;
    if (l.svg) {
        H[p].svgns = "http://www.w3.org/2000/svg";
        H[p].xlink = "http://www.w3.org/1999/xlink";
        Q = function(a) {
            return+a + (~~a === a) * 0.5
        };
        var u = function(a, b) {
            if (b)
                for (var c in b)
                    b[z](c) && a[W](c, D(b[c]));
            else {
                a = C.createElementNS(H[p].svgns, a);
                a.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
                return a
            }
        };
        l[O] = function() {
            return"Your browser supports SVG.\nYou are running Rapha\u00ebl " + this.version
        };
        var db = function(a, b) {
            var c = u("path");
            b.canvas && b.canvas[x](c);
            b = new s(c, b);
            b.type = "path";
            ea(b, {fill: "none", stroke: "#000", path: a});
            return b
        }, pa = function(a, b, c) {
            var d = "linear", f = 0.5, e = 0.5, g = a.style;
            b = D(b)[I](cb, function(m, n, r) {
                d = "radial";
                if (n && r) {
                    f = y(n);
                    e = y(r);
                    m = (e > 0.5) * 2 - 1;
                    E(f - 0.5, 2) + E(e - 0.5, 2) > 0.25 && (e = v.sqrt(0.25 - E(f - 0.5, 2)) * m + 0.5) && e != 0.5 && (e = e.toFixed(5) - 1.0E-5 * m)
                }
                return A
            });
            b = b[G](/\s*\-\s*/);
            if (d == "linear") {
                var h = b.shift();
                h = -y(h);
                if (isNaN(h))
                    return null;
                h = [0, 0, v.cos(h * v.PI / 180), v.sin(h * v.PI / 180)];
                var i = 1 / (Y(v.abs(h[2]), v.abs(h[3])) || 1);
                h[2] *= i;
                h[3] *= i;
                if (h[2] < 0) {
                    h[0] = -h[2];
                    h[2] = 0
                }
                if (h[3] < 0) {
                    h[1] = -h[3];
                    h[3] = 0
                }
            }
            b = Wa(b);
            if (!b)
                return null;
            i = a.getAttribute(ca);
            (i = i.match(/^url\(#(.*)\)$/)) && c.defs.removeChild(C.getElementById(i[1]));
            i = u(d + "Gradient");
            i.id = "r" + (l._id++)[O](36);
            u(i, d == "radial" ? {fx: f, fy: e} : {x1: h[0], y1: h[1], x2: h[2], y2: h[3]});
            c.defs[x](i);
            c = 0;
            for (h = b[o]; c < h; c++) {
                var j = u("stop");
                u(j, {offset: b[c].offset ? b[c].offset : !c ? "0%" : "100%", "stop-color": b[c].color || "#fff"});
                i[x](j)
            }
            u(a, {fill: "url(#" + i.id + ")", opacity: 1, "fill-opacity": 1});
            g.fill = A;
            g.opacity = 1;
            return g.fillOpacity = 1
        }, Ja = function(a) {
            var b = a.getBBox();
            u(a.pattern, {patternTransform: l.format("translate({0},{1})", b.x, b.y)})
        }, ea = function(a, b) {
            var c = {"": [0], none: [0], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3]}, d = a.node, f = a.attrs, e =
                    a.rotate();
            function g(k, t) {
                if (t = c[fa.call(t)]) {
                    var L = k.attrs["stroke-width"] || "1";
                    k = {round: L, square: L, butt: 0}[k.attrs["stroke-linecap"] || b["stroke-linecap"]] || 0;
                    for (var B = [], w = t[o]; w--; )
                        B[w] = t[w] * L + (w % 2 ? 1 : -1) * k;
                    u(d, {"stroke-dasharray": B[R](",")})
                }
            }
            b[z]("rotation") && (e = b.rotation);
            var h = D(e)[G](V);
            if (h.length - 1) {
                h[1] = +h[1];
                h[2] = +h[2]
            } else
                h = null;
            y(e) && a.rotate(0, true);
            for (var i in b)
                if (b[z](i))
                    if (ta[z](i)) {
                        var j = b[i];
                        f[i] = j;
                        switch (i) {
                            case "blur":
                                a.blur(j);
                                break;
                            case "rotation":
                                a.rotate(j, true);
                                break;
                            case "href":
                            case "title":
                            case "target":
                                var m = d.parentNode;
                                if (fa.call(m.tagName) != "a") {
                                    var n = u("a");
                                    m.insertBefore(n, d);
                                    n[x](d);
                                    m = n
                                }
                                m.setAttributeNS(a.paper.xlink, i, j);
                                break;
                            case "cursor":
                                d.style.cursor = j;
                                break;
                            case "clip-rect":
                                m = D(j)[G](V);
                                if (m[o] == 4) {
                                    a.clip && a.clip.parentNode.parentNode.removeChild(a.clip.parentNode);
                                    var r = u("clipPath");
                                    n = u("rect");
                                    r.id = "r" + (l._id++)[O](36);
                                    u(n, {x: m[0], y: m[1], width: m[2], height: m[3]});
                                    r[x](n);
                                    a.paper.defs[x](r);
                                    u(d, {"clip-path": "url(#" + r.id + ")"});
                                    a.clip = n
                                }
                                if (!j) {
                                    (j =
                                            C.getElementById(d.getAttribute("clip-path")[I](/(^url\(#|\)$)/g, A))) && j.parentNode.removeChild(j);
                                    u(d, {"clip-path": A});
                                    delete a.clip
                                }
                                break;
                            case "path":
                                if (a.type == "path")
                                    u(d, {d: j ? (f.path = oa(j)) : "M0,0"});
                                break;
                            case "width":
                                d[W](i, j);
                                if (f.fx) {
                                    i = "x";
                                    j = f.x
                                } else
                                    break;
                            case "x":
                                if (f.fx)
                                    j = -f.x - (f.width || 0);
                            case "rx":
                                if (i == "rx" && a.type == "rect")
                                    break;
                            case "cx":
                                h && (i == "x" || i == "cx") && (h[1] += j - f[i]);
                                d[W](i, j);
                                a.pattern && Ja(a);
                                break;
                            case "height":
                                d[W](i, j);
                                if (f.fy) {
                                    i = "y";
                                    j = f.y
                                } else
                                    break;
                            case "y":
                                if (f.fy)
                                    j = -f.y -
                                            (f.height || 0);
                            case "ry":
                                if (i == "ry" && a.type == "rect")
                                    break;
                            case "cy":
                                h && (i == "y" || i == "cy") && (h[2] += j - f[i]);
                                d[W](i, j);
                                a.pattern && Ja(a);
                                break;
                            case "r":
                                a.type == "rect" ? u(d, {rx: j, ry: j}) : d[W](i, j);
                                break;
                            case "src":
                                a.type == "image" && d.setAttributeNS(a.paper.xlink, "href", j);
                                break;
                            case "stroke-width":
                                d.style.strokeWidth = j;
                                d[W](i, j);
                                f["stroke-dasharray"] && g(a, f["stroke-dasharray"]);
                                break;
                            case "stroke-dasharray":
                                g(a, j);
                                break;
                            case "translation":
                                j = D(j)[G](V);
                                j[0] = +j[0] || 0;
                                j[1] = +j[1] || 0;
                                if (h) {
                                    h[1] += j[0];
                                    h[2] += j[1]
                                }
                                Aa.call(a,
                                        j[0], j[1]);
                                break;
                            case "scale":
                                j = D(j)[G](V);
                                a.scale(+j[0] || 1, +j[1] || +j[0] || 1, isNaN(y(j[2])) ? null : +j[2], isNaN(y(j[3])) ? null : +j[3]);
                                break;
                            case ca:
                                if (m = D(j).match(Sa)) {
                                    r = u("pattern");
                                    var q = u("image");
                                    r.id = "r" + (l._id++)[O](36);
                                    u(r, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
                                    u(q, {x: 0, y: 0});
                                    q.setAttributeNS(a.paper.xlink, "href", m[1]);
                                    r[x](q);
                                    j = C.createElement("img");
                                    j.style.cssText = "position:absolute;left:-9999em;top-9999em";
                                    j.onload = function() {
                                        u(r, {width: this.offsetWidth, height: this.offsetHeight});
                                        u(q, {width: this.offsetWidth, height: this.offsetHeight});
                                        C.body.removeChild(this);
                                        a.paper.safari()
                                    };
                                    C.body[x](j);
                                    j.src = m[1];
                                    a.paper.defs[x](r);
                                    d.style.fill = "url(#" + r.id + ")";
                                    u(d, {fill: "url(#" + r.id + ")"});
                                    a.pattern = r;
                                    a.pattern && Ja(a);
                                    break
                                }
                                m = l.getRGB(j);
                                if (m.error) {
                                    if (({circle: 1, ellipse: 1}[z](a.type) || D(j).charAt() != "r") && pa(d, j, a.paper)) {
                                        f.gradient = j;
                                        f.fill = "none";
                                        break
                                    }
                                } else {
                                    delete b.gradient;
                                    delete f.gradient;
                                    !l.is(f.opacity, "undefined") && l.is(b.opacity, "undefined") && u(d, {opacity: f.opacity});
                                    !l.is(f["fill-opacity"],
                                            "undefined") && l.is(b["fill-opacity"], "undefined") && u(d, {"fill-opacity": f["fill-opacity"]})
                                }
                                m[z]("o") && u(d, {"fill-opacity": m.o > 1 ? m.o / 100 : m.o});
                            case "stroke":
                                m = l.getRGB(j);
                                d[W](i, m.hex);
                                i == "stroke" && m[z]("o") && u(d, {"stroke-opacity": m.o > 1 ? m.o / 100 : m.o});
                                break;
                            case "gradient":
                                (({circle: 1, ellipse: 1})[z](a.type) || D(j).charAt() != "r") && pa(d, j, a.paper);
                                break;
                            case "opacity":
                            case "fill-opacity":
                                if (f.gradient) {
                                    if (m = C.getElementById(d.getAttribute(ca)[I](/^url\(#|\)$/g, A))) {
                                        m = m.getElementsByTagName("stop");
                                        m[m[o] -
                                        1][W]("stop-opacity", j)
                                    }
                                    break
                                }
                            default:
                                i == "font-size" && (j = ha(j, 10) + "px");
                                m = i[I](/(\-.)/g, function(k) {
                                    return sa.call(k.substring(1))
                                });
                                d.style[m] = j;
                                d[W](i, j);
                                break
                            }
                    }
            Db(a, b);
            if (h)
                a.rotate(h.join(N));
            else
                y(e) && a.rotate(e, true)
        }, eb = 1.2, Db = function(a, b) {
            if (!(a.type != "text" || !(b[z]("text") || b[z]("font") || b[z]("font-size") || b[z]("x") || b[z]("y")))) {
                var c = a.attrs, d = a.node, f = d.firstChild ? ha(C.defaultView.getComputedStyle(d.firstChild, A).getPropertyValue("font-size"), 10) : 10;
                if (b[z]("text")) {
                    for (c.text = b.text; d.firstChild; )
                        d.removeChild(d.firstChild);
                    b = D(b.text)[G]("\n");
                    for (var e = 0, g = b[o]; e < g; e++)
                        if (b[e]) {
                            var h = u("tspan");
                            e && u(h, {dy: f * eb, x: c.x});
                            h[x](C.createTextNode(b[e]));
                            d[x](h)
                        }
                } else {
                    b = d.getElementsByTagName("tspan");
                    e = 0;
                    for (g = b[o]; e < g; e++)
                        e && u(b[e], {dy: f * eb, x: c.x})
                }
                u(d, {y: c.y});
                a = a.getBBox();
                (a = c.y - (a.y + a.height / 2)) && isFinite(a) && u(d, {y: c.y + a})
            }
        }, s = function(a, b) {
            this[0] = a;
            this.id = l._oid++;
            this.node = a;
            a.raphael = this;
            this.paper = b;
            this.attrs = this.attrs || {};
            this.transformations = [];
            this._ = {tx: 0, ty: 0, rt: {deg: 0, cx: 0, cy: 0}, sx: 1, sy: 1};
            !b.bottom &&
                    (b.bottom = this);
            (this.prev = b.top) && (b.top.next = this);
            b.top = this;
            this.next = null
        };
        s[p].rotate = function(a, b, c) {
            if (this.removed)
                return this;
            if (a == null) {
                if (this._.rt.cx)
                    return[this._.rt.deg, this._.rt.cx, this._.rt.cy][R](N);
                return this._.rt.deg
            }
            var d = this.getBBox();
            a = D(a)[G](V);
            if (a[o] - 1) {
                b = y(a[1]);
                c = y(a[2])
            }
            a = y(a[0]);
            if (b != null)
                this._.rt.deg = a;
            else
                this._.rt.deg += a;
            c == null && (b = null);
            this._.rt.cx = b;
            this._.rt.cy = c;
            b = b == null ? d.x + d.width / 2 : b;
            c = c == null ? d.y + d.height / 2 : c;
            if (this._.rt.deg) {
                this.transformations[0] =
                        l.format("rotate({0} {1} {2})", this._.rt.deg, b, c);
                this.clip && u(this.clip, {transform: l.format("rotate({0} {1} {2})", -this._.rt.deg, b, c)})
            } else {
                this.transformations[0] = A;
                this.clip && u(this.clip, {transform: A})
            }
            u(this.node, {transform: this.transformations[R](N)});
            return this
        };
        s[p].hide = function() {
            !this.removed && (this.node.style.display = "none");
            return this
        };
        s[p].show = function() {
            !this.removed && (this.node.style.display = "");
            return this
        };
        s[p].remove = function() {
            if (!this.removed) {
                ma(this, this.paper);
                this.node.parentNode.removeChild(this.node);
                for (var a in this)
                    delete this[a];
                this.removed = true
            }
        };
        s[p].getBBox = function() {
            if (this.removed)
                return this;
            if (this.type == "path")
                return xa(this.attrs.path);
            if (this.node.style.display == "none") {
                this.show();
                var a = true
            }
            var b = {};
            try {
                b = this.node.getBBox()
            } catch (c) {
            } finally {
                b = b || {}
            }
            if (this.type == "text") {
                b = {x: b.x, y: Infinity, width: 0, height: 0};
                for (var d = 0, f = this.node.getNumberOfChars(); d < f; d++) {
                    var e = this.node.getExtentOfChar(d);
                    e.y < b.y && (b.y = e.y);
                    e.y + e.height - b.y > b.height && (b.height = e.y + e.height - b.y);
                    e.x + e.width -
                            b.x > b.width && (b.width = e.x + e.width - b.x)
                }
            }
            a && this.hide();
            return b
        };
        s[p].attr = function(a, b) {
            if (this.removed)
                return this;
            if (a == null) {
                a = {};
                for (var c in this.attrs)
                    if (this.attrs[z](c))
                        a[c] = this.attrs[c];
                this._.rt.deg && (a.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (a.scale = this.scale());
                a.gradient && a.fill == "none" && (a.fill = a.gradient) && delete a.gradient;
                return a
            }
            if (b == null && l.is(a, ga)) {
                if (a == "translation")
                    return Aa.call(this);
                if (a == "rotation")
                    return this.rotate();
                if (a == "scale")
                    return this.scale();
                if (a == ca && this.attrs.fill == "none" && this.attrs.gradient)
                    return this.attrs.gradient;
                return this.attrs[a]
            }
            if (b == null && l.is(a, U)) {
                b = {};
                c = 0;
                for (var d = a.length; c < d; c++)
                    b[a[c]] = this.attr(a[c]);
                return b
            }
            if (b != null) {
                c = {};
                c[a] = b;
                ea(this, c)
            } else
                a != null && l.is(a, "object") && ea(this, a);
            return this
        };
        s[p].toFront = function() {
            if (this.removed)
                return this;
            this.node.parentNode[x](this.node);
            var a = this.paper;
            a.top != this && Ya(this, a);
            return this
        };
        s[p].toBack = function() {
            if (this.removed)
                return this;
            if (this.node.parentNode.firstChild !=
                    this.node) {
                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                Za(this, this.paper)
            }
            return this
        };
        s[p].insertAfter = function(a) {
            if (this.removed)
                return this;
            var b = a.node || a[a.length].node;
            b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode[x](this.node);
            $a(this, a, this.paper);
            return this
        };
        s[p].insertBefore = function(a) {
            if (this.removed)
                return this;
            var b = a.node || a[0].node;
            b.parentNode.insertBefore(this.node, b);
            ab(this, a, this.paper);
            return this
        };
        s[p].blur =
                function(a) {
                    var b = this;
                    if (+a !== 0) {
                        var c = u("filter"), d = u("feGaussianBlur");
                        b.attrs.blur = a;
                        c.id = "r" + (l._id++)[O](36);
                        u(d, {stdDeviation: +a || 1.5});
                        c.appendChild(d);
                        b.paper.defs.appendChild(c);
                        b._blur = c;
                        u(b.node, {filter: "url(#" + c.id + ")"})
                    } else {
                        if (b._blur) {
                            b._blur.parentNode.removeChild(b._blur);
                            delete b._blur;
                            delete b.attrs.blur
                        }
                        b.node.removeAttribute("filter")
                    }
                };
        var fb = function(a, b, c, d) {
            var f = u("circle");
            a.canvas && a.canvas[x](f);
            a = new s(f, a);
            a.attrs = {cx: b, cy: c, r: d, fill: "none", stroke: "#000"};
            a.type = "circle";
            u(f, a.attrs);
            return a
        }, gb = function(a, b, c, d, f, e) {
            var g = u("rect");
            a.canvas && a.canvas[x](g);
            a = new s(g, a);
            a.attrs = {x: b, y: c, width: d, height: f, r: e || 0, rx: e || 0, ry: e || 0, fill: "none", stroke: "#000"};
            a.type = "rect";
            u(g, a.attrs);
            return a
        }, hb = function(a, b, c, d, f) {
            var e = u("ellipse");
            a.canvas && a.canvas[x](e);
            a = new s(e, a);
            a.attrs = {cx: b, cy: c, rx: d, ry: f, fill: "none", stroke: "#000"};
            a.type = "ellipse";
            u(e, a.attrs);
            return a
        }, ib = function(a, b, c, d, f, e) {
            var g = u("image");
            u(g, {x: c, y: d, width: f, height: e, preserveAspectRatio: "none"});
            g.setAttributeNS(a.xlink,
                    "href", b);
            a.canvas && a.canvas[x](g);
            a = new s(g, a);
            a.attrs = {x: c, y: d, width: f, height: e, src: b};
            a.type = "image";
            return a
        }, jb = function(a, b, c, d) {
            var f = u("text");
            u(f, {x: b, y: c, "text-anchor": "middle"});
            a.canvas && a.canvas[x](f);
            a = new s(f, a);
            a.attrs = {x: b, y: c, "text-anchor": "middle", text: d, font: ta.font, stroke: "none", fill: "#000"};
            a.type = "text";
            ea(a, a.attrs);
            return a
        }, kb = function(a, b) {
            this.width = a || this.width;
            this.height = b || this.height;
            this.canvas[W]("width", this.width);
            this.canvas[W]("height", this.height);
            return this
        },
                Ca = function() {
                    var a = Xa[K](0, arguments), b = a && a.container, c = a.x, d = a.y, f = a.width;
                    a = a.height;
                    if (!b)
                        throw new Error("SVG container not found.");
                    var e = u("svg");
                    c = c || 0;
                    d = d || 0;
                    f = f || 512;
                    a = a || 342;
                    u(e, {xmlns: "http://www.w3.org/2000/svg", version: 1.1, width: f, height: a});
                    if (b == 1) {
                        e.style.cssText = "position:absolute;left:" + c + "px;top:" + d + "px";
                        C.body[x](e)
                    } else
                        b.firstChild ? b.insertBefore(e, b.firstChild) : b[x](e);
                    b = new H;
                    b.width = f;
                    b.height = a;
                    b.canvas = e;
                    Ia.call(b, b, l.fn);
                    b.clear();
                    return b
                };
        H[p].clear = function() {
            for (var a =
                    this.canvas; a.firstChild; )
                a.removeChild(a.firstChild);
            this.bottom = this.top = null;
            (this.desc = u("desc"))[x](C.createTextNode("Created with Rapha\u00ebl"));
            a[x](this.desc);
            a[x](this.defs = u("defs"))
        };
        H[p].remove = function() {
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var a in this)
                this[a] = bb(a)
        }
    }
    if (l.vml) {
        var lb = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"}, Eb = /([clmz]),?([^clmz]*)/gi, Fb = /-?[^,\s-]+/g, qa = 1000 + N + 1000, na = 10, ra = {path: 1, rect: 1}, Gb = function(a) {
            var b = /[ahqstv]/ig,
                    c = oa;
            D(a).match(b) && (c = wa);
            b = /[clmz]/g;
            if (c == oa && !D(a).match(b))
                return a = D(a)[I](Eb, function(i, j, m) {
                    var n = [], r = fa.call(j) == "m", q = lb[j];
                    m[I](Fb, function(k) {
                        if (r && n[o] == 2) {
                            q += n + lb[j == "m" ? "l" : "L"];
                            n = []
                        }
                        n[F](Q(k * na))
                    });
                    return q + n
                });
            b = c(a);
            var d;
            a = [];
            for (var f = 0, e = b[o]; f < e; f++) {
                c = b[f];
                d = fa.call(b[f][0]);
                d == "z" && (d = "x");
                for (var g = 1, h = c[o]; g < h; g++)
                    d += Q(c[g] * na) + (g != h - 1 ? "," : A);
                a[F](d)
            }
            return a[R](N)
        };
        l[O] = function() {
            return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl " +
                    this.version
        };
        db = function(a, b) {
            var c = S("group");
            c.style.cssText = "position:absolute;left:0;top:0;width:" + b.width + "px;height:" + b.height + "px";
            c.coordsize = b.coordsize;
            c.coordorigin = b.coordorigin;
            var d = S("shape"), f = d.style;
            f.width = b.width + "px";
            f.height = b.height + "px";
            d.coordsize = qa;
            d.coordorigin = b.coordorigin;
            c[x](d);
            d = new s(d, c, b);
            f = {fill: "none", stroke: "#000"};
            a && (f.path = a);
            d.isAbsolute = true;
            d.type = "path";
            d.path = [];
            d.Path = A;
            ea(d, f);
            b.canvas[x](c);
            return d
        };
        ea = function(a, b) {
            a.attrs = a.attrs || {};
            var c = a.node,
                    d = a.attrs, f = c.style, e;
            e = (b.x != d.x || b.y != d.y || b.width != d.width || b.height != d.height || b.r != d.r) && a.type == "rect";
            var g = a;
            for (var h in b)
                if (b[z](h))
                    d[h] = b[h];
            if (e) {
                d.path = mb(d.x, d.y, d.width, d.height, d.r);
                a.X = d.x;
                a.Y = d.y;
                a.W = d.width;
                a.H = d.height
            }
            b.href && (c.href = b.href);
            b.title && (c.title = b.title);
            b.target && (c.target = b.target);
            b.cursor && (f.cursor = b.cursor);
            "blur"in b && a.blur(b.blur);
            if (b.path && a.type == "path" || e)
                c.path = Gb(d.path);
            b.rotation != null && a.rotate(b.rotation, true);
            if (b.translation) {
                e = D(b.translation)[G](V);
                Aa.call(a, e[0], e[1]);
                if (a._.rt.cx != null) {
                    a._.rt.cx += +e[0];
                    a._.rt.cy += +e[1];
                    a.setBox(a.attrs, e[0], e[1])
                }
            }
            if (b.scale) {
                e = D(b.scale)[G](V);
                a.scale(+e[0] || 1, +e[1] || +e[0] || 1, +e[2] || null, +e[3] || null)
            }
            if ("clip-rect"in b) {
                e = D(b["clip-rect"])[G](V);
                if (e[o] == 4) {
                    e[2] = +e[2] + +e[0];
                    e[3] = +e[3] + +e[1];
                    h = c.clipRect || C.createElement("div");
                    var i = h.style, j = c.parentNode;
                    i.clip = l.format("rect({1}px {2}px {3}px {0}px)", e);
                    if (!c.clipRect) {
                        i.position = "absolute";
                        i.top = 0;
                        i.left = 0;
                        i.width = a.paper.width + "px";
                        i.height = a.paper.height +
                                "px";
                        j.parentNode.insertBefore(h, j);
                        h[x](j);
                        c.clipRect = h
                    }
                }
                if (!b["clip-rect"])
                    c.clipRect && (c.clipRect.style.clip = A)
            }
            if (a.type == "image" && b.src)
                c.src = b.src;
            if (a.type == "image" && b.opacity) {
                c.filterOpacity = Fa + ".Alpha(opacity=" + b.opacity * 100 + ")";
                f.filter = (c.filterMatrix || A) + (c.filterOpacity || A)
            }
            b.font && (f.font = b.font);
            b["font-family"] && (f.fontFamily = '"' + b["font-family"][G](",")[0][I](/^['"]+|['"]+$/g, A) + '"');
            b["font-size"] && (f.fontSize = b["font-size"]);
            b["font-weight"] && (f.fontWeight = b["font-weight"]);
            b["font-style"] &&
                    (f.fontStyle = b["font-style"]);
            if (b.opacity != null || b["stroke-width"] != null || b.fill != null || b.stroke != null || b["stroke-width"] != null || b["stroke-opacity"] != null || b["fill-opacity"] != null || b["stroke-dasharray"] != null || b["stroke-miterlimit"] != null || b["stroke-linejoin"] != null || b["stroke-linecap"] != null) {
                c = a.shape || c;
                f = c.getElementsByTagName(ca) && c.getElementsByTagName(ca)[0];
                e = false;
                !f && (e = f = S(ca));
                if ("fill-opacity"in b || "opacity"in b) {
                    a = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+l.getRGB(b.fill).o +
                            1 || 2) - 1);
                    a < 0 && (a = 0);
                    a > 1 && (a = 1);
                    f.opacity = a
                }
                b.fill && (f.on = true);
                if (f.on == null || b.fill == "none")
                    f.on = false;
                if (f.on && b.fill)
                    if (a = b.fill.match(Sa)) {
                        f.src = a[1];
                        f.type = "tile"
                    } else {
                        f.color = l.getRGB(b.fill).hex;
                        f.src = A;
                        f.type = "solid";
                        if (l.getRGB(b.fill).error && (g.type in{circle: 1, ellipse: 1} || D(b.fill).charAt() != "r") && pa(g, b.fill)) {
                            d.fill = "none";
                            d.gradient = b.fill
                        }
                    }
                e && c[x](f);
                f = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0];
                e = false;
                !f && (e = f = S("stroke"));
                if (b.stroke && b.stroke != "none" ||
                        b["stroke-width"] || b["stroke-opacity"] != null || b["stroke-dasharray"] || b["stroke-miterlimit"] || b["stroke-linejoin"] || b["stroke-linecap"])
                    f.on = true;
                (b.stroke == "none" || f.on == null || b.stroke == 0 || b["stroke-width"] == 0) && (f.on = false);
                a = l.getRGB(b.stroke);
                f.on && b.stroke && (f.color = a.hex);
                a = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+a.o + 1 || 2) - 1);
                h = (y(b["stroke-width"]) || 1) * 0.75;
                a < 0 && (a = 0);
                a > 1 && (a = 1);
                b["stroke-width"] == null && (h = d["stroke-width"]);
                b["stroke-width"] && (f.weight = h);
                h && h < 1 && (a *= h) && (f.weight =
                        1);
                f.opacity = a;
                b["stroke-linejoin"] && (f.joinstyle = b["stroke-linejoin"] || "miter");
                f.miterlimit = b["stroke-miterlimit"] || 8;
                b["stroke-linecap"] && (f.endcap = b["stroke-linecap"] == "butt" ? "flat" : b["stroke-linecap"] == "square" ? "square" : "round");
                if (b["stroke-dasharray"]) {
                    a = {"-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot"};
                    f.dashstyle = a[z](b["stroke-dasharray"]) ? a[b["stroke-dasharray"]] :
                    A
                }
                e && c[x](f)
            }
            if (g.type == "text") {
                f = g.paper.span.style;
                d.font && (f.font = d.font);
                d["font-family"] && (f.fontFamily = d["font-family"]);
                d["font-size"] && (f.fontSize = d["font-size"]);
                d["font-weight"] && (f.fontWeight = d["font-weight"]);
                d["font-style"] && (f.fontStyle = d["font-style"]);
                g.node.string && (g.paper.span.innerHTML = D(g.node.string)[I](/</g, "&#60;")[I](/&/g, "&#38;")[I](/\n/g, "<br>"));
                g.W = d.w = g.paper.span.offsetWidth;
                g.H = d.h = g.paper.span.offsetHeight;
                g.X = d.x;
                g.Y = d.y + Q(g.H / 2);
                switch (d["text-anchor"]) {
                    case "start":
                        g.node.style["v-text-align"] =
                                "left";
                        g.bbx = Q(g.W / 2);
                        break;
                    case "end":
                        g.node.style["v-text-align"] = "right";
                        g.bbx = -Q(g.W / 2);
                        break;
                    default:
                        g.node.style["v-text-align"] = "center";
                        break
                    }
            }
        };
        pa = function(a, b) {
            a.attrs = a.attrs || {};
            var c = "linear", d = ".5 .5";
            a.attrs.gradient = b;
            b = D(b)[I](cb, function(i, j, m) {
                c = "radial";
                if (j && m) {
                    j = y(j);
                    m = y(m);
                    E(j - 0.5, 2) + E(m - 0.5, 2) > 0.25 && (m = v.sqrt(0.25 - E(j - 0.5, 2)) * ((m > 0.5) * 2 - 1) + 0.5);
                    d = j + N + m
                }
                return A
            });
            b = b[G](/\s*\-\s*/);
            if (c == "linear") {
                var f = b.shift();
                f = -y(f);
                if (isNaN(f))
                    return null
            }
            var e = Wa(b);
            if (!e)
                return null;
            a = a.shape || a.node;
            b = a.getElementsByTagName(ca)[0] || S(ca);
            !b.parentNode && a.appendChild(b);
            if (e[o]) {
                b.on = true;
                b.method = "none";
                b.color = e[0].color;
                b.color2 = e[e[o] - 1].color;
                a = [];
                for (var g = 0, h = e[o]; g < h; g++)
                    e[g].offset && a[F](e[g].offset + N + e[g].color);
                b.colors && (b.colors.value = a[o] ? a[R]() : "0% " + b.color);
                if (c == "radial") {
                    b.type = "gradientradial";
                    b.focus = "100%";
                    b.focussize = d;
                    b.focusposition = d
                } else {
                    b.type = "gradient";
                    b.angle = (270 - f) % 360
                }
            }
            return 1
        };
        s = function(a, b, c) {
            this[0] = a;
            this.id = l._oid++;
            this.node = a;
            a.raphael =
                    this;
            this.Y = this.X = 0;
            this.attrs = {};
            this.Group = b;
            this.paper = c;
            this._ = {tx: 0, ty: 0, rt: {deg: 0}, sx: 1, sy: 1};
            !c.bottom && (c.bottom = this);
            (this.prev = c.top) && (c.top.next = this);
            c.top = this;
            this.next = null
        };
        s[p].rotate = function(a, b, c) {
            if (this.removed)
                return this;
            if (a == null) {
                if (this._.rt.cx)
                    return[this._.rt.deg, this._.rt.cx, this._.rt.cy][R](N);
                return this._.rt.deg
            }
            a = D(a)[G](V);
            if (a[o] - 1) {
                b = y(a[1]);
                c = y(a[2])
            }
            a = y(a[0]);
            if (b != null)
                this._.rt.deg = a;
            else
                this._.rt.deg += a;
            c == null && (b = null);
            this._.rt.cx = b;
            this._.rt.cy = c;
            this.setBox(this.attrs, b, c);
            this.Group.style.rotation = this._.rt.deg;
            return this
        };
        s[p].setBox = function(a, b, c) {
            if (this.removed)
                return this;
            var d = this.Group.style, f = this.shape && this.shape.style || this.node.style;
            a = a || {};
            for (var e in a)
                if (a[z](e))
                    this.attrs[e] = a[e];
            b = b || this._.rt.cx;
            c = c || this._.rt.cy;
            var g = this.attrs, h;
            switch (this.type) {
                case "circle":
                    a = g.cx - g.r;
                    e = g.cy - g.r;
                    h = g = g.r * 2;
                    break;
                case "ellipse":
                    a = g.cx - g.rx;
                    e = g.cy - g.ry;
                    h = g.rx * 2;
                    g = g.ry * 2;
                    break;
                case "image":
                    a = +g.x;
                    e = +g.y;
                    h = g.width || 0;
                    g = g.height ||
                            0;
                    break;
                case "text":
                    this.textpath.v = ["m", Q(g.x), ", ", Q(g.y - 2), "l", Q(g.x) + 1, ", ", Q(g.y - 2)][R](A);
                    a = g.x - Q(this.W / 2);
                    e = g.y - this.H / 2;
                    h = this.W;
                    g = this.H;
                    break;
                case "rect":
                case "path":
                    if (this.attrs.path) {
                        g = xa(this.attrs.path);
                        a = g.x;
                        e = g.y;
                        h = g.width;
                        g = g.height
                    } else {
                        e = a = 0;
                        h = this.paper.width;
                        g = this.paper.height
                    }
                    break;
                default:
                    e = a = 0;
                    h = this.paper.width;
                    g = this.paper.height;
                    break
            }
            b = b == null ? a + h / 2 : b;
            c = c == null ? e + g / 2 : c;
            b = b - this.paper.width / 2;
            c = c - this.paper.height / 2;
            var i;
            d.left != (i = b + "px") && (d.left = i);
            d.top != (i = c + "px") &&
                    (d.top = i);
            this.X = ra[z](this.type) ? -b : a;
            this.Y = ra[z](this.type) ? -c : e;
            this.W = h;
            this.H = g;
            if (ra[z](this.type)) {
                f.left != (i = -b * na + "px") && (f.left = i);
                f.top != (i = -c * na + "px") && (f.top = i)
            } else if (this.type == "text") {
                f.left != (i = -b + "px") && (f.left = i);
                f.top != (i = -c + "px") && (f.top = i)
            } else {
                d.width != (i = this.paper.width + "px") && (d.width = i);
                d.height != (i = this.paper.height + "px") && (d.height = i);
                f.left != (i = a - b + "px") && (f.left = i);
                f.top != (i = e - c + "px") && (f.top = i);
                f.width != (i = h + "px") && (f.width = i);
                f.height != (i = g + "px") && (f.height = i)
            }
        };
        s[p].hide = function() {
            !this.removed && (this.Group.style.display = "none");
            return this
        };
        s[p].show = function() {
            !this.removed && (this.Group.style.display = "block");
            return this
        };
        s[p].getBBox = function() {
            if (this.removed)
                return this;
            if (ra[z](this.type))
                return xa(this.attrs.path);
            return{x: this.X + (this.bbx || 0), y: this.Y, width: this.W, height: this.H}
        };
        s[p].remove = function() {
            if (!this.removed) {
                ma(this, this.paper);
                this.node.parentNode.removeChild(this.node);
                this.Group.parentNode.removeChild(this.Group);
                this.shape && this.shape.parentNode.removeChild(this.shape);
                for (var a in this)
                    delete this[a];
                this.removed = true
            }
        };
        s[p].attr = function(a, b) {
            if (this.removed)
                return this;
            if (a == null) {
                a = {};
                for (var c in this.attrs)
                    if (this.attrs[z](c))
                        a[c] = this.attrs[c];
                this._.rt.deg && (a.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (a.scale = this.scale());
                a.gradient && a.fill == "none" && (a.fill = a.gradient) && delete a.gradient;
                return a
            }
            if (b == null && l.is(a, ga)) {
                if (a == "translation")
                    return Aa.call(this);
                if (a == "rotation")
                    return this.rotate();
                if (a == "scale")
                    return this.scale();
                if (a == ca &&
                        this.attrs.fill == "none" && this.attrs.gradient)
                    return this.attrs.gradient;
                return this.attrs[a]
            }
            if (this.attrs && b == null && l.is(a, U)) {
                var d = {};
                c = 0;
                for (b = a[o]; c < b; c++)
                    d[a[c]] = this.attr(a[c]);
                return d
            }
            if (b != null) {
                d = {};
                d[a] = b
            }
            b == null && l.is(a, "object") && (d = a);
            if (d) {
                if (d.text && this.type == "text")
                    this.node.string = d.text;
                ea(this, d);
                if (d.gradient && ({circle: 1, ellipse: 1}[z](this.type) || D(d.gradient).charAt() != "r"))
                    pa(this, d.gradient);
                (!ra[z](this.type) || this._.rt.deg) && this.setBox(this.attrs)
            }
            return this
        };
        s[p].toFront =
                function() {
                    !this.removed && this.Group.parentNode[x](this.Group);
                    this.paper.top != this && Ya(this, this.paper);
                    return this
                };
        s[p].toBack = function() {
            if (this.removed)
                return this;
            if (this.Group.parentNode.firstChild != this.Group) {
                this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild);
                Za(this, this.paper)
            }
            return this
        };
        s[p].insertAfter = function(a) {
            if (this.removed)
                return this;
            if (a.constructor == X)
                a = a[a.length];
            a.Group.nextSibling ? a.Group.parentNode.insertBefore(this.Group, a.Group.nextSibling) :
                    a.Group.parentNode[x](this.Group);
            $a(this, a, this.paper);
            return this
        };
        s[p].insertBefore = function(a) {
            if (this.removed)
                return this;
            if (a.constructor == X)
                a = a[0];
            a.Group.parentNode.insertBefore(this.Group, a.Group);
            ab(this, a, this.paper);
            return this
        };
        var Hb = / progid:\S+Blur\([^\)]+\)/g;
        s[p].blur = function(a) {
            var b = this.node.runtimeStyle, c = b.filter;
            c = c.replace(Hb, A);
            if (+a !== 0) {
                this.attrs.blur = a;
                b.filter = c + N + Fa + ".Blur(pixelradius=" + (+a || 1.5) + ")";
                b.margin = l.format("-{0}px 0 0 -{0}px", Q(+a || 1.5))
            } else {
                b.filter =
                        c;
                b.margin = 0;
                delete this.attrs.blur
            }
        };
        fb = function(a, b, c, d) {
            var f = S("group"), e = S("oval");
            f.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            f.coordsize = qa;
            f.coordorigin = a.coordorigin;
            f[x](e);
            e = new s(e, f, a);
            e.type = "circle";
            ea(e, {stroke: "#000", fill: "none"});
            e.attrs.cx = b;
            e.attrs.cy = c;
            e.attrs.r = d;
            e.setBox({x: b - d, y: c - d, width: d * 2, height: d * 2});
            a.canvas[x](f);
            return e
        };
        function mb(a, b, c, d, f) {
            return f ? l.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",
                    a + f, b, c - f * 2, f, -f, d - f * 2, f * 2 - c, f * 2 - d) : l.format("M{0},{1}l{2},0,0,{3},{4},0z", a, b, c, d, -c)
        }
        gb = function(a, b, c, d, f, e) {
            var g = mb(b, c, d, f, e);
            a = a.path(g);
            var h = a.attrs;
            a.X = h.x = b;
            a.Y = h.y = c;
            a.W = h.width = d;
            a.H = h.height = f;
            h.r = e;
            h.path = g;
            a.type = "rect";
            return a
        };
        hb = function(a, b, c, d, f) {
            var e = S("group"), g = S("oval");
            e.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            e.coordsize = qa;
            e.coordorigin = a.coordorigin;
            e[x](g);
            g = new s(g, e, a);
            g.type = "ellipse";
            ea(g, {stroke: "#000"});
            g.attrs.cx =
                    b;
            g.attrs.cy = c;
            g.attrs.rx = d;
            g.attrs.ry = f;
            g.setBox({x: b - d, y: c - f, width: d * 2, height: f * 2});
            a.canvas[x](e);
            return g
        };
        ib = function(a, b, c, d, f, e) {
            var g = S("group"), h = S("image");
            g.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            g.coordsize = qa;
            g.coordorigin = a.coordorigin;
            h.src = b;
            g[x](h);
            h = new s(h, g, a);
            h.type = "image";
            h.attrs.src = b;
            h.attrs.x = c;
            h.attrs.y = d;
            h.attrs.w = f;
            h.attrs.h = e;
            h.setBox({x: c, y: d, width: f, height: e});
            a.canvas[x](g);
            return h
        };
        jb = function(a, b, c, d) {
            var f = S("group"),
                    e = S("shape"), g = e.style, h = S("path"), i = S("textpath");
            f.style.cssText = "position:absolute;left:0;top:0;width:" + a.width + "px;height:" + a.height + "px";
            f.coordsize = qa;
            f.coordorigin = a.coordorigin;
            h.v = l.format("m{0},{1}l{2},{1}", Q(b * 10), Q(c * 10), Q(b * 10) + 1);
            h.textpathok = true;
            g.width = a.width;
            g.height = a.height;
            i.string = D(d);
            i.on = true;
            e[x](i);
            e[x](h);
            f[x](e);
            g = new s(i, f, a);
            g.shape = e;
            g.textpath = h;
            g.type = "text";
            g.attrs.text = d;
            g.attrs.x = b;
            g.attrs.y = c;
            g.attrs.w = 1;
            g.attrs.h = 1;
            ea(g, {font: ta.font, stroke: "none", fill: "#000"});
            g.setBox();
            a.canvas[x](f);
            return g
        };
        kb = function(a, b) {
            var c = this.canvas.style;
            a == +a && (a += "px");
            b == +b && (b += "px");
            c.width = a;
            c.height = b;
            c.clip = "rect(0 " + a + " " + b + " 0)";
            return this
        };
        var S;
        C.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !C.namespaces.rvml && C.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            S = function(a) {
                return C.createElement("<rvml:" + a + ' class="rvml">')
            }
        } catch (Pb) {
            S = function(a) {
                return C.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
        Ca =
                function() {
                    var a = Xa[K](0, arguments), b = a.container, c = a.height, d = a.width, f = a.x;
                    a = a.y;
                    if (!b)
                        throw new Error("VML container not found.");
                    var e = new H, g = e.canvas = C.createElement("div"), h = g.style;
                    f = f || 0;
                    a = a || 0;
                    d = d || 512;
                    c = c || 342;
                    d == +d && (d += "px");
                    c == +c && (c += "px");
                    e.width = 1000;
                    e.height = 1000;
                    e.coordsize = na * 1000 + N + na * 1000;
                    e.coordorigin = "0 0";
                    e.span = C.createElement("span");
                    e.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
                    g[x](e.span);
                    h.cssText =
                            l.format("width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", d, c);
                    if (b == 1) {
                        C.body[x](g);
                        h.left = f + "px";
                        h.top = a + "px";
                        h.position = "absolute"
                    } else
                        b.firstChild ? b.insertBefore(g, b.firstChild) : b[x](g);
                    Ia.call(e, e, l.fn);
                    return e
                };
        H[p].clear = function() {
            this.canvas.innerHTML = A;
            this.span = C.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas[x](this.span);
            this.bottom =
                    this.top = null
        };
        H[p].remove = function() {
            this.canvas.parentNode.removeChild(this.canvas);
            for (var a in this)
                this[a] = bb(a);
            return true
        }
    }
    H[p].safari = navigator.vendor == "Apple Computer, Inc." && (navigator.userAgent.match(/Version\/(.*?)\s/)[1] < 4 || aa.navigator.platform.slice(0, 2) == "iP") ? function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
        aa.setTimeout(function() {
            a.remove()
        })
    } : function() {
    };
    function Ib() {
        this.returnValue = false
    }
    function Jb() {
        return this.originalEvent.preventDefault()
    }
    function Kb() {
        this.cancelBubble = true
    }
    function Lb() {
        return this.originalEvent.stopPropagation()
    }
    var Mb = function() {
        if (C.addEventListener)
            return function(a, b, c, d) {
                var f = Da && Ea[b] ? Ea[b] : b;
                function e(g) {
                    if (Da && Ea[z](b))
                        for (var h = 0, i = g.targetTouches && g.targetTouches.length; h < i; h++)
                            if (g.targetTouches[h].target == a) {
                                i = g;
                                g = g.targetTouches[h];
                                g.originalEvent = i;
                                g.preventDefault = Jb;
                                g.stopPropagation = Lb;
                                break
                            }
                    return c.call(d, g)
                }
                a.addEventListener(f, e, false);
                return function() {
                    a.removeEventListener(f, e, false);
                    return true
                }
            };
        else if (C.attachEvent)
            return function(a, b, c, d) {
                function f(g) {
                    g = g || aa.event;
                    g.preventDefault = g.preventDefault || Ib;
                    g.stopPropagation = g.stopPropagation || Kb;
                    return c.call(d, g)
                }
                a.attachEvent("on" + b, f);
                function e() {
                    a.detachEvent("on" + b, f);
                    return true
                }
                return e
            }
    }(), $ = [];
    function Ka(a) {
        for (var b = a.clientX, c = a.clientY, d, f = $.length; f--; ) {
            d = $[f];
            if (Da)
                for (var e = a.touches.length, g; e--; ) {
                    g = a.touches[e];
                    if (g.identifier == d.el._drag.id) {
                        b = g.clientX;
                        c = g.clientY;
                        (a.originalEvent ? a.originalEvent : a).preventDefault();
                        break
                    }
                }
            else
                a.preventDefault();
            d.move && d.move.call(d.el, b - d.el._drag.x, c - d.el._drag.y, b, c)
        }
    }
    function La() {
        l.unmousemove(Ka).unmouseup(La);
        for (var a = $.length, b; a--; ) {
            b = $[a];
            b.el._drag = {};
            b.end && b.end.call(b.el)
        }
        $ = []
    }
    for (da = Ra[o]; da--; )
        (function(a) {
            l[a] = s[p][a] = function(b) {
                if (l.is(b, "function")) {
                    this.events = this.events || [];
                    this.events.push({name: a, f: b, unbind: Mb(this.shape || this.node || C, a, b, this)})
                }
                return this
            };
            l["un" + a] = s[p]["un" + a] = function(b) {
                for (var c = this.events, d = c[o]; d--; )
                    if (c[d].name == a && c[d].f ==
                            b) {
                        c[d].unbind();
                        c.splice(d, 1);
                        !c.length && delete this.events;
                        return this
                    }
                return this
            }
        })(Ra[da]);
    s[p].hover = function(a, b) {
        return this.mouseover(a).mouseout(b)
    };
    s[p].unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    s[p].drag = function(a, b, c) {
        this._drag = {};
        this.mousedown(function(d) {
            (d.originalEvent || d).preventDefault();
            this._drag.x = d.clientX;
            this._drag.y = d.clientY;
            this._drag.id = d.identifier;
            b && b.call(this, d.clientX, d.clientY);
            !$.length && l.mousemove(Ka).mouseup(La);
            $.push({el: this, move: a,
                end: c})
        });
        return this
    };
    s[p].undrag = function(a, b, c) {
        for (b = $.length; b--; ) {
            $[b].el == this && $[b].move == a && $[b].end == c && $.splice(b, 1);
            !$.length && l.unmousemove(Ka).unmouseup(La)
        }
    };
    H[p].circle = function(a, b, c) {
        return fb(this, a || 0, b || 0, c || 0)
    };
    H[p].rect = function(a, b, c, d, f) {
        return gb(this, a || 0, b || 0, c || 0, d || 0, f || 0)
    };
    H[p].ellipse = function(a, b, c, d) {
        return hb(this, a || 0, b || 0, c || 0, d || 0)
    };
    H[p].path = function(a) {
        a && !l.is(a, ga) && !l.is(a[0], U) && (a += A);
        return db(l.format[K](l, arguments), this)
    };
    H[p].image = function(a, b, c,
            d, f) {
        return ib(this, a || "about:blank", b || 0, c || 0, d || 0, f || 0)
    };
    H[p].text = function(a, b, c) {
        return jb(this, a || 0, b || 0, c || A)
    };
    H[p].set = function(a) {
        arguments[o] > 1 && (a = Array[p].splice.call(arguments, 0, arguments[o]));
        return new X(a)
    };
    H[p].setSize = kb;
    H[p].top = H[p].bottom = null;
    H[p].raphael = l;
    function nb() {
        return this.x + N + this.y
    }
    s[p].resetScale = function() {
        if (this.removed)
            return this;
        this._.sx = 1;
        this._.sy = 1;
        this.attrs.scale = "1 1"
    };
    s[p].scale = function(a, b, c, d) {
        if (this.removed)
            return this;
        if (a == null && b == null)
            return{x: this._.sx,
                y: this._.sy, toString: nb};
        b = b || a;
        !+b && (b = a);
        var f, e, g = this.attrs;
        if (a != 0) {
            var h = this.getBBox(), i = h.x + h.width / 2, j = h.y + h.height / 2;
            f = a / this._.sx;
            e = b / this._.sy;
            c = +c || c == 0 ? c : i;
            d = +d || d == 0 ? d : j;
            h = ~~(a / v.abs(a));
            var m = ~~(b / v.abs(b)), n = this.node.style, r = c + (i - c) * f;
            j = d + (j - d) * e;
            switch (this.type) {
                case "rect":
                case "image":
                    var q = g.width * h * f, k = g.height * m * e;
                    this.attr({height: k, r: g.r * ba(h * f, m * e), width: q, x: r - q / 2, y: j - k / 2});
                    break;
                case "circle":
                case "ellipse":
                    this.attr({rx: g.rx * h * f, ry: g.ry * m * e, r: g.r * ba(h * f, m * e), cx: r, cy: j});
                    break;
                case "text":
                    this.attr({x: r, y: j});
                    break;
                case "path":
                    i = Ha(g.path);
                    for (var t = true, L = 0, B = i[o]; L < B; L++) {
                        var w = i[L], J = sa.call(w[0]);
                        if (!(J == "M" && t)) {
                            t = false;
                            if (J == "A") {
                                w[i[L][o] - 2] *= f;
                                w[i[L][o] - 1] *= e;
                                w[1] *= h * f;
                                w[2] *= m * e;
                                w[5] = +!(h + m ? !+w[5] : +w[5])
                            } else if (J == "H") {
                                J = 1;
                                for (var ia = w[o]; J < ia; J++)
                                    w[J] *= f
                            } else if (J == "V") {
                                J = 1;
                                for (ia = w[o]; J < ia; J++)
                                    w[J] *= e
                            } else {
                                J = 1;
                                for (ia = w[o]; J < ia; J++)
                                    w[J] *= J % 2 ? f : e
                            }
                        }
                    }
                    e = xa(i);
                    f = r - e.x - e.width / 2;
                    e = j - e.y - e.height / 2;
                    i[0][1] += f;
                    i[0][2] += e;
                    this.attr({path: i});
                    break
            }
            if (this.type in
                    {text: 1, image: 1} && (h != 1 || m != 1))
                if (this.transformations) {
                    this.transformations[2] = "scale("[M](h, ",", m, ")");
                    this.node[W]("transform", this.transformations[R](N));
                    f = h == -1 ? -g.x - (q || 0) : g.x;
                    e = m == -1 ? -g.y - (k || 0) : g.y;
                    this.attr({x: f, y: e});
                    g.fx = h - 1;
                    g.fy = m - 1
                } else {
                    this.node.filterMatrix = Fa + ".Matrix(M11="[M](h, ", M12=0, M21=0, M22=", m, ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
                    n.filter = (this.node.filterMatrix || A) + (this.node.filterOpacity || A)
                }
            else if (this.transformations) {
                this.transformations[2] =
                        A;
                this.node[W]("transform", this.transformations[R](N));
                g.fx = 0;
                g.fy = 0
            } else {
                this.node.filterMatrix = A;
                n.filter = (this.node.filterMatrix || A) + (this.node.filterOpacity || A)
            }
            g.scale = [a, b, c, d][R](N);
            this._.sx = a;
            this._.sy = b
        }
        return this
    };
    s[p].clone = function() {
        if (this.removed)
            return null;
        var a = this.attr();
        delete a.scale;
        delete a.translation;
        return this.paper[this.type]().attr(a)
    };
    var ob = Z(function(a, b, c, d, f, e, g, h, i) {
        for (var j = 0, m, n = 0; n < 1.01; n += 0.01) {
            var r = la(a, b, c, d, f, e, g, h, n);
            n && (j += E(E(m.x - r.x, 2) + E(m.y - r.y,
                    2), 0.5));
            if (j >= i)
                return r;
            m = r
        }
    });
    function Ma(a, b) {
        return function(c, d, f) {
            c = wa(c);
            for (var e, g, h, i, j = "", m = {}, n = 0, r = 0, q = c.length; r < q; r++) {
                h = c[r];
                if (h[0] == "M") {
                    e = +h[1];
                    g = +h[2]
                } else {
                    i = Nb(e, g, h[1], h[2], h[3], h[4], h[5], h[6]);
                    if (n + i > d) {
                        if (b && !m.start) {
                            e = ob(e, g, h[1], h[2], h[3], h[4], h[5], h[6], d - n);
                            j += ["C", e.start.x, e.start.y, e.m.x, e.m.y, e.x, e.y];
                            if (f)
                                return j;
                            m.start = j;
                            j = ["M", e.x, e.y + "C", e.n.x, e.n.y, e.end.x, e.end.y, h[5], h[6]][R]();
                            n += i;
                            e = +h[5];
                            g = +h[6];
                            continue
                        }
                        if (!a && !b) {
                            e = ob(e, g, h[1], h[2], h[3], h[4], h[5], h[6],
                                    d - n);
                            return{x: e.x, y: e.y, alpha: e.alpha}
                        }
                    }
                    n += i;
                    e = +h[5];
                    g = +h[6]
                }
                j += h
            }
            m.end = j;
            e = a ? n : b ? m : l.findDotsAtSegment(e, g, h[1], h[2], h[3], h[4], h[5], h[6], 1);
            e.alpha && (e = {x: e.x, y: e.y, alpha: e.alpha});
            return e
        }
    }
    var Nb = Z(function(a, b, c, d, f, e, g, h) {
        for (var i = {x: 0, y: 0}, j = 0, m = 0; m < 1.01; m += 0.01) {
            var n = la(a, b, c, d, f, e, g, h, m);
            m && (j += E(E(i.x - n.x, 2) + E(i.y - n.y, 2), 0.5));
            i = n
        }
        return j
    }), pb = Ma(1), Ba = Ma(), Na = Ma(0, 1);
    s[p].getTotalLength = function() {
        if (this.type == "path") {
            if (this.node.getTotalLength)
                return this.node.getTotalLength();
            return pb(this.attrs.path)
        }
    };
    s[p].getPointAtLength = function(a) {
        if (this.type == "path") {
            if (this.node.getPointAtLength)
                return this.node.getPointAtLength(a);
            return Ba(this.attrs.path, a)
        }
    };
    s[p].getSubpath = function(a, b) {
        if (this.type == "path") {
            if (v.abs(this.getTotalLength() - b) < 1.0E-6)
                return Na(this.attrs.path, a).end;
            b = Na(this.attrs.path, b, 1);
            return a ? Na(b, a).end : b
        }
    };
    l.easing_formulas = {linear: function(a) {
            return a
        }, "<": function(a) {
            return E(a, 3)
        }, ">": function(a) {
            return E(a - 1, 3) + 1
        }, "<>": function(a) {
            a *= 2;
            if (a < 1)
                return E(a, 3) / 2;
            a -= 2;
            return(E(a,
                    3) + 2) / 2
        }, backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }, elastic: function(a) {
            if (a == 0 || a == 1)
                return a;
            var b = 0.3, c = b / 4;
            return E(2, -10 * a) * v.sin((a - c) * 2 * v.PI / b) + 1
        }, bounce: function(a) {
            var b = 7.5625, c = 2.75;
            if (a < 1 / c)
                a = b * a * a;
            else if (a < 2 / c) {
                a -= 1.5 / c;
                a = b * a * a + 0.75
            } else if (a < 2.5 / c) {
                a -= 2.25 / c;
                a = b * a * a + 0.9375
            } else {
                a -= 2.625 / c;
                a = b * a * a + 0.984375
            }
            return a
        }};
    var T = {length: 0};
    function qb() {
        var a = +new Date;
        for (var b in T)
            if (b != "length" && T[z](b)) {
                var c =
                        T[b];
                if (c.stop || c.el.removed) {
                    delete T[b];
                    T[o]--
                } else {
                    var d = a - c.start, f = c.ms, e = c.easing, g = c.from, h = c.diff, i = c.to, j = c.t, m = c.prev || 0, n = c.el, r = c.callback, q = {}, k;
                    if (d < f) {
                        r = l.easing_formulas[e] ? l.easing_formulas[e](d / f) : d / f;
                        for (var t in g)
                            if (g[z](t)) {
                                switch (Ga[t]) {
                                    case "along":
                                        k = r * f * h[t];
                                        i.back && (k = i.len - k);
                                        e = Ba(i[t], k);
                                        n.translate(h.sx - h.x || 0, h.sy - h.y || 0);
                                        h.x = e.x;
                                        h.y = e.y;
                                        n.translate(e.x - h.sx, e.y - h.sy);
                                        i.rot && n.rotate(h.r + e.alpha, e.x, e.y);
                                        break;
                                    case P:
                                        k = +g[t] + r * f * h[t];
                                        break;
                                    case "colour":
                                        k = "rgb(" + [Oa(Q(g[t].r +
                                                    r * f * h[t].r)), Oa(Q(g[t].g + r * f * h[t].g)), Oa(Q(g[t].b + r * f * h[t].b))][R](",") + ")";
                                        break;
                                    case "path":
                                        k = [];
                                        e = 0;
                                        for (var L = g[t][o]; e < L; e++) {
                                            k[e] = [g[t][e][0]];
                                            for (var B = 1, w = g[t][e][o]; B < w; B++)
                                                k[e][B] = +g[t][e][B] + r * f * h[t][e][B];
                                            k[e] = k[e][R](N)
                                        }
                                        k = k[R](N);
                                        break;
                                    case "csv":
                                        switch (t) {
                                            case "translation":
                                                k = h[t][0] * (d - m);
                                                e = h[t][1] * (d - m);
                                                j.x += k;
                                                j.y += e;
                                                k = k + N + e;
                                                break;
                                            case "rotation":
                                                k = +g[t][0] + r * f * h[t][0];
                                                g[t][1] && (k += "," + g[t][1] + "," + g[t][2]);
                                                break;
                                            case "scale":
                                                k = [+g[t][0] + r * f * h[t][0], +g[t][1] + r * f * h[t][1], 2 in i[t] ? i[t][2] :
                                                            A, 3 in i[t] ? i[t][3] : A][R](N);
                                                break;
                                            case "clip-rect":
                                                k = [];
                                                for (e = 4; e--; )
                                                    k[e] = +g[t][e] + r * f * h[t][e];
                                                break
                                        }
                                        break
                                }
                                q[t] = k
                            }
                        n.attr(q);
                        n._run && n._run.call(n)
                    } else {
                        if (i.along) {
                            e = Ba(i.along, i.len * !i.back);
                            n.translate(h.sx - (h.x || 0) + e.x - h.sx, h.sy - (h.y || 0) + e.y - h.sy);
                            i.rot && n.rotate(h.r + e.alpha, e.x, e.y)
                        }
                        (j.x || j.y) && n.translate(-j.x, -j.y);
                        i.scale && (i.scale += A);
                        n.attr(i);
                        delete T[b];
                        T[o]--;
                        n.in_animation = null;
                        l.is(r, "function") && r.call(n)
                    }
                    c.prev = d
                }
            }
        l.svg && n && n.paper && n.paper.safari();
        T[o] && aa.setTimeout(qb)
    }
    function Oa(a) {
        return Y(ba(a,
                255), 0)
    }
    function Aa(a, b) {
        if (a == null)
            return{x: this._.tx, y: this._.ty, toString: nb};
        this._.tx += +a;
        this._.ty += +b;
        switch (this.type) {
            case "circle":
            case "ellipse":
                this.attr({cx: +a + this.attrs.cx, cy: +b + this.attrs.cy});
                break;
            case "rect":
            case "image":
            case "text":
                this.attr({x: +a + this.attrs.x, y: +b + this.attrs.y});
                break;
            case "path":
                var c = Ha(this.attrs.path);
                c[0][1] += +a;
                c[0][2] += +b;
                this.attr({path: c});
                break
        }
        return this
    }
    s[p].animateWith = function(a, b, c, d, f) {
        T[a.id] && (b.start = T[a.id].start);
        return this.animate(b, c, d,
                f)
    };
    s[p].animateAlong = rb();
    s[p].animateAlongBack = rb(1);
    function rb(a) {
        return function(b, c, d, f) {
            var e = {back: a};
            l.is(d, "function") ? (f = d) : (e.rot = d);
            b && b.constructor == s && (b = b.attrs.path);
            b && (e.along = b);
            return this.animate(e, c, f)
        }
    }
    s[p].onAnimation = function(a) {
        this._run = a || 0;
        return this
    };
    s[p].animate = function(a, b, c, d) {
        if (l.is(c, "function") || !c)
            d = c || null;
        var f = {}, e = {}, g = {};
        for (var h in a)
            if (a[z](h))
                if (Ga[z](h)) {
                    f[h] = this.attr(h);
                    f[h] == null && (f[h] = ta[h]);
                    e[h] = a[h];
                    switch (Ga[h]) {
                        case "along":
                            var i = pb(a[h]),
                                    j = Ba(a[h], i * !!a.back), m = this.getBBox();
                            g[h] = i / b;
                            g.tx = m.x;
                            g.ty = m.y;
                            g.sx = j.x;
                            g.sy = j.y;
                            e.rot = a.rot;
                            e.back = a.back;
                            e.len = i;
                            a.rot && (g.r = y(this.rotate()) || 0);
                            break;
                        case P:
                            g[h] = (e[h] - f[h]) / b;
                            break;
                        case "colour":
                            f[h] = l.getRGB(f[h]);
                            i = l.getRGB(e[h]);
                            g[h] = {r: (i.r - f[h].r) / b, g: (i.g - f[h].g) / b, b: (i.b - f[h].b) / b};
                            break;
                        case "path":
                            i = wa(f[h], e[h]);
                            f[h] = i[0];
                            j = i[1];
                            g[h] = [];
                            i = 0;
                            for (m = f[h][o]; i < m; i++) {
                                g[h][i] = [0];
                                for (var n = 1, r = f[h][i][o]; n < r; n++)
                                    g[h][i][n] = (j[i][n] - f[h][i][n]) / b
                            }
                            break;
                        case "csv":
                            j = D(a[h])[G](V);
                            i = D(f[h])[G](V);
                            switch (h) {
                                case "translation":
                                    f[h] = [0, 0];
                                    g[h] = [j[0] / b, j[1] / b];
                                    break;
                                case "rotation":
                                    f[h] = i[1] == j[1] && i[2] == j[2] ? i : [0, j[1], j[2]];
                                    g[h] = [(j[0] - f[h][0]) / b, 0, 0];
                                    break;
                                case "scale":
                                    a[h] = j;
                                    f[h] = D(f[h])[G](V);
                                    g[h] = [(j[0] - f[h][0]) / b, (j[1] - f[h][1]) / b, 0, 0];
                                    break;
                                case "clip-rect":
                                    f[h] = D(f[h])[G](V);
                                    g[h] = [];
                                    for (i = 4; i--; )
                                        g[h][i] = (j[i] - f[h][i]) / b;
                                    break
                            }
                            e[h] = j
                        }
                }
        this.stop();
        this.in_animation = 1;
        T[this.id] = {start: a.start || +new Date, ms: b, easing: c, from: f, diff: g, to: e, el: this, callback: d, t: {x: 0, y: 0}};
        ++T[o] == 1 && qb();
        return this
    };
    s[p].stop = function() {
        T[this.id] && T[o]--;
        delete T[this.id];
        return this
    };
    s[p].translate = function(a, b) {
        return this.attr({translation: a + " " + b})
    };
    s[p][O] = function() {
        return"Rapha\u00ebl\u2019s object"
    };
    l.ae = T;
    function X(a) {
        this.items = [];
        this[o] = 0;
        this.type = "set";
        if (a)
            for (var b = 0, c = a[o]; b < c; b++)
                if (a[b] && (a[b].constructor == s || a[b].constructor == X)) {
                    this[this.items[o]] = this.items[this.items[o]] = a[b];
                    this[o]++
                }
    }
    X[p][F] = function() {
        for (var a, b, c = 0, d = arguments[o]; c < d; c++)
            if ((a = arguments[c]) && (a.constructor == s ||
                    a.constructor == X)) {
                b = this.items[o];
                this[b] = this.items[b] = a;
                this[o]++
            }
        return this
    };
    X[p].pop = function() {
        delete this[this[o]--];
        return this.items.pop()
    };
    for (var Pa in s[p])
        if (s[p][z](Pa))
            X[p][Pa] = function(a) {
                return function() {
                    for (var b = 0, c = this.items[o]; b < c; b++)
                        this.items[b][a][K](this.items[b], arguments);
                    return this
                }
            }(Pa);
    X[p].attr = function(a, b) {
        if (a && l.is(a, U) && l.is(a[0], "object")) {
            b = 0;
            for (var c = a[o]; b < c; b++)
                this.items[b].attr(a[b])
        } else {
            c = 0;
            for (var d = this.items[o]; c < d; c++)
                this.items[c].attr(a, b)
        }
        return this
    };
    X[p].animate = function(a, b, c, d) {
        (l.is(c, "function") || !c) && (d = c || null);
        var f = this.items[o], e = f, g, h = this, i;
        d && (i = function() {
            !--f && d.call(h)
        });
        c = l.is(c, ga) ? c : i;
        for (g = this.items[--e].animate(a, b, c, i); e--; )
            this.items[e].animateWith(g, a, b, c, i);
        return this
    };
    X[p].insertAfter = function(a) {
        for (var b = this.items[o]; b--; )
            this.items[b].insertAfter(a);
        return this
    };
    X[p].getBBox = function() {
        for (var a = [], b = [], c = [], d = [], f = this.items[o]; f--; ) {
            var e = this.items[f].getBBox();
            a[F](e.x);
            b[F](e.y);
            c[F](e.x + e.width);
            d[F](e.y +
                    e.height)
        }
        a = ba[K](0, a);
        b = ba[K](0, b);
        return{x: a, y: b, width: Y[K](0, c) - a, height: Y[K](0, d) - b}
    };
    X[p].clone = function(a) {
        a = new X;
        for (var b = 0, c = this.items[o]; b < c; b++)
            a[F](this.items[b].clone());
        return a
    };
    l.registerFont = function(a) {
        if (!a.face)
            return a;
        this.fonts = this.fonts || {};
        var b = {w: a.w, face: {}, glyphs: {}}, c = a.face["font-family"];
        for (var d in a.face)
            if (a.face[z](d))
                b.face[d] = a.face[d];
        if (this.fonts[c])
            this.fonts[c][F](b);
        else
            this.fonts[c] = [b];
        if (!a.svg) {
            b.face["units-per-em"] = ha(a.face["units-per-em"], 10);
            for (var f in a.glyphs)
                if (a.glyphs[z](f)) {
                    c = a.glyphs[f];
                    b.glyphs[f] = {w: c.w, k: {}, d: c.d && "M" + c.d[I](/[mlcxtrv]/g, function(g) {
                            return{l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[g] || "M"
                        }) + "z"};
                    if (c.k)
                        for (var e in c.k)
                            if (c[z](e))
                                b.glyphs[f].k[e] = c.k[e]
                }
        }
        return a
    };
    H[p].getFont = function(a, b, c, d) {
        d = d || "normal";
        c = c || "normal";
        b = +b || {normal: 400, bold: 700, lighter: 300, bolder: 800}[b] || 400;
        if (l.fonts) {
            var f = l.fonts[a];
            if (!f) {
                a = new RegExp("(^|\\s)" + a[I](/[^\w\d\s+!~.:_-]/g, A) + "(\\s|$)", "i");
                for (var e in l.fonts)
                    if (l.fonts[z](e))
                        if (a.test(e)) {
                            f =
                                    l.fonts[e];
                            break
                        }
            }
            var g;
            if (f) {
                e = 0;
                for (a = f[o]; e < a; e++) {
                    g = f[e];
                    if (g.face["font-weight"] == b && (g.face["font-style"] == c || !g.face["font-style"]) && g.face["font-stretch"] == d)
                        break
                }
            }
            return g
        }
    };
    H[p].print = function(a, b, c, d, f, e) {
        e = e || "middle";
        var g = this.set(), h = D(c)[G](A), i = 0;
        l.is(d, c) && (d = this.getFont(d));
        if (d) {
            c = (f || 16) / d.face["units-per-em"];
            var j = d.face.bbox.split(V);
            f = +j[0];
            e = +j[1] + (e == "baseline" ? j[3] - j[1] + +d.face.descent : (j[3] - j[1]) / 2);
            j = 0;
            for (var m = h[o]; j < m; j++) {
                var n = j && d.glyphs[h[j - 1]] || {}, r = d.glyphs[h[j]];
                i += j ? (n.w || d.w) + (n.k && n.k[h[j]] || 0) : 0;
                r && r.d && g[F](this.path(r.d).attr({fill: "#000", stroke: "none", translation: [i, 0]}))
            }
            g.scale(c, c, f, e).translate(a - f, b - e)
        }
        return g
    };
    var Ob = /\{(\d+)\}/g;
    l.format = function(a, b) {
        var c = l.is(b, U) ? [0][M](b) : arguments;
        a && l.is(a, ga) && c[o] - 1 && (a = a[I](Ob, function(d, f) {
            return c[++f] == null ? A : c[f]
        }));
        return a || A
    };
    l.ninja = function() {
        Qa.was ? (Raphael = Qa.is) : delete Raphael;
        return l
    };
    l.el = s[p];
    return l
}();
