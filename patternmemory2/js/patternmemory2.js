(function () {
  var d2 = { b8: { b4: {} }, x: {}, display: { b3: {}, font: {}, I: {}, b5: {}, c4: {} }, c0: {}, b2: {}, b9: {}, _3: {}, z: { n4: {} }, _2: {}, d1: { b7: {}, I: {}, input: {}, _3: {}, _2: {} }, y: {}, c2: {} };
  var _0 = { O: { s: { w: {}, U: {} } } };
  window['nogic5'] = d2;
  var _9 = document.getElementsByTagName('script');
  var u = _9[_9.length - 1].src;
  d2.d1.f = function (canvas, j6, h6, c7, p2, p3, b, e, o3, i6, l5, h9) {
    d2.d1.f.o0 = this;
    this.b = b;
    if (this.b === null || this.b === undefined) this.b = {};
    this.e = e;
    if (this.e === null || this.e === undefined) this.e = {};
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    this.canvas = canvas;
    this.p0 = canvas.getContext('2d');
    canvas.setAttribute('tabIndex', 0);
    this.j6 = j6;
    this.h6 = h6;
    this.c7 = c7;
    this.p2 = p2;
    this.p3 = p3;
    this.k2 = 'rgba(' + ((p2 >>> 16) & 0xFF) + ',' + ((p2 >>> 8) & 0xFF) + ',' + (p2 & 0xFF) + ',' + (((p2 >>> 24) & 0xFF) / 0xFF) + ')';
    this.k6 = 'rgba(' + ((p3 >>> 16) & 0xFF) + ',' + ((p3 >>> 8) & 0xFF) + ',' + (p3 & 0xFF) + ',' + (((p3 >>> 24) & 0xFF) / 0xFF) + ')';
    this.l4(canvas.clientWidth, canvas.clientHeight);
    this.g3 = canvas.width;
    this.g0 = canvas.height;
    this.n7 = canvas.clientWidth;
    this.l9 = canvas.clientHeight;
    this.l7(j6[this.e5], h6[this.e5], canvas.width, canvas.height, canvas.clientWidth, canvas.clientHeight);
    this.o3 = o3;
    this.i6 = i6;
    this.l5 = l5;
    this.h9 = h9;
  };
  d2.d1.f.prototype.l4 = function (p7, o7) {
    var a3;
    var i7, i4;
    var f7;
    var g;
    a3 = Number.POSITIVE_INFINITY;
    for (g = 0; g < this.j6.length; g++) {
      i7 = p7 / this.j6[g];
      i4 = o7 / this.h6[g];
      if (i7 < i4) {
        f7 = o7 / (this.h6[g] * i7);
      } else { f7 = p7 / (this.j6[g] * i4); }
      if (f7 < a3) { this.e5 = g;
        a3 = f7; }
    }
  };
  d2.d1.f.prototype.l7 = function (width, height, g3, g0, p7, o7) {
    var i7, i4, scale, q4, j2;
    var _6, k7;
    i7 = p7 / g3;
    i4 = o7 / g0;
    _6 = new d2.d1.f.n9();
    _6.scale(i7, i4);
    k7 = _6.a4();
    i7 = p7 / width;
    i4 = o7 / height;
    scale = Math.min(i7, i4);
    q4 = (p7 - scale * width) / 2;
    j2 = (o7 - scale * height) / 2;
    this.g5 = new d2.d1.f.n9();
    this.g5.translate(q4, j2);
    this.g5.scale(scale, scale);
    this.c3 = this.g5.a4();
    this.d9 = this.g5.W();
    this.d9.D(k7);
    this.b6 = this.d9.a4();
  };
  d2.d1.f.prototype.B = function () {
    if (!this.C()) return;
    this.R();
    this.t();
  };
  d2.d1.f.prototype.C = function () {
    if (d2.d1.f.X()) {
      alert('Internet Explorer 9 or below is not supported, please update to version 10 or above.');
      return false;
    }
    if (this.e['allowRunInAndroidDefaultBrowser'] === false) {
      if (d2.d1.f.h()) {
        alert('The default browser on Android is not supported, please download another browser such as Chrome, Firefox or Opera from Play Store.');
        return false;
      }
    }
    try { new ArrayBuffer(0); } catch (h7) {
      alert('This browser is not supported. Please use the latest version of Internet Explorer, Firefox, Chrome, Safari, or Opera.');
    }
    return true;
  };
  d2.d1.f.X = function () {
    var a5;
    a5 = /\bMSIE\b\s*(\d+)\.\d+\b/.exec(navigator.userAgent);
    return a5 !== null && a5[1] <= 9;
  };
  d2.d1.f.h = function () {
    if (/\bSamsung\b/i.test(navigator.userAgent)) return true;
    if (!/\bAndroid\b/.test(navigator.userAgent)) return false;
    if (/\bChrome\b/.test(navigator.userAgent)) return false;
    if (/\bFirefox\b/.test(navigator.userAgent)) return false;
    return true;
  };
  d2.d1.f.prototype.R = function () {
    if (document.location.href.substr(0, 4) === 'http') return true;
    alert('Loading from the local computer may or may not work, depending on the browser you are using and the security settings. If there are any problems, try using another web browser or loading from a web server.');
  };
  d2.d1.f.prototype.t = function () {
    var n0 = this;
    this.p0.save();
    this.p0.fillStyle = this.c7[this.e5] ? this.k6 : this.k2;
    this.p0.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.p0.restore();
    this.l();
  };
  d2.d1.f.prototype.l = function () {
    if (!this.i6) {
      this.G();
    } else { this.p(); }
  };
  d2.d1.f.prototype.G = function () {
    var d4;
    if (this.h9 === null) { this.p6(false, d4); return; } d4 = new Image();
    d4.crossOrigin = 'Anonymous';
    d4.onload = d2.d1.f.k1;
    d4.onerror = d2.d1.f.h2;
    d4.onabort = d2.d1.f.h2;
    d4.src = this.h9;
  };
  d2.d1.f.prototype.p = function () {
    var c5;
    if (this.h9 === null) { this.p6(false, null); return; }
    try {
      c5 = new XMLHttpRequest();
    } catch (h7) { c5 = new ActiveXObject("Msxml2.XMLHTTP"); } c5.open("GET", this.h9, true);
    c5.responseType = 'arraybuffer';
    c5.onreadystatechange = d2.d1.f.S;
    c5.send(null);
  };
  d2.d1.f.S = function () {
    var c5 = this;
    if (c5.readyState !== 4) return;
    d2.d1.f.o0.v(c5);
  };
  d2.d1.f.prototype.v = function (c5) {
    var d6 = [110, 111, 103, 105, 99];
    var d5;
    var f8;
    var l8;
    var j4;
    if (c5.response === null) { this.p6(false, null); return; } d5 = new Uint8Array(c5.response);
    f8 = d2.d1.f.f9(d5, d6);
    if (f8.length === 0) { this.p6(false, null); return; } l8 = 'image/png';
    j4 = new Image();
    j4.onload = d2.d1.f.k1;
    j4.onerror = d2.d1.f.h2;
    j4.onabort = d2.d1.f.h2;
    j4.src = 'data:' + l8 + ';base64,' + this.J(d5, f8[0][2], f8[0][3], d6);
  };
  d2.d1.f.f9 = function (d5, d6) {
    var a0;
    var i5;
    var k8, a8, a9, n3;
    a0 = [];
    i5 = 0;
    while (i5 < d5.length - 1) {
      k8 = d2.d1.f._5(d5, i5++, 1, d6);
      a8 = d2.d1.f._5(d5, i5++, 1, d6);
      a9 = d2.d1.f._5(d5, i5, 4, d6);
      i5 += 4;
      n3 = d2.d1.f.j(d5, i5, a8, d6);
      i5 += a8;
      a0.push([k8, n3, i5, a9]);
      i5 += a9;
    }
    return a0;
  };
  d2.d1.f.k1 = function () { var d4 = this;
    d2.d1.f.o0.p6(true, d4); };
  d2.d1.f.h2 = function () {
    var d4 = this;
    d2.d1.f.o0.p6(false, d4);
  };
  d2.d1.f.prototype.p6 = function (H, d4) {
    var n0 = this;
    if (H && d4 !== null && d4.width > 0 && d4.height > 0) {
      this.a7 = d4;
      this.k9();
      this.k = setInterval(d2.d1.f.K, 1);
    }
    if (this.l5 !== null) { this.n6(); } else {
      this.c8 = d2.d1.r;
      this.c8['preloadAssets'](this.o3, this.i6, this.canvas, this.j6, this.h6, this.c7, this.p2, this.p3, this.b, this.e, d2.d1.f.f9, d2.d1.f.j1.p4, d2.d1.f.a2);
    }
  };
  d2.d1.f.prototype.k9 = function () {
    this.p0.save();
    this.p0.transform(this.d9.e8, this.d9.e7, this.d9.f0, this.d9.e9, this.d9.o6, this.d9.o5);
    this.p0.translate((this.j6[this.e5] - this.a7.width) / 2, (this.h6[this.e5] - this.a7.height) / 2);
    this.p0.drawImage(this.a7, 0, 0);
    this.p0.restore();
  };
  d2.d1.f.K = function () { d2.d1.f.o0.Q(); };
  d2.d1.f.prototype.Q = function () {
    if (this.canvas.width === this.g3 && this.canvas.height === this.g0 && this.canvas.clientWidth === this.n7 && this.canvas.clientHeight === this.l9) return;
    this.l4(this.canvas.clientWidth, this.canvas.clientHeight);
    this.p0.save();
    this.p0.fillStyle = this.c7[this.e5] ? this.k6 : this.k2;
    this.p0.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.p0.restore();
    this.l7(this.j6[this.e5], this.h6[this.e5], this.canvas.width, this.canvas.height, this.canvas.clientWidth, this.canvas.clientHeight);
    this.k9();
    this.g3 = this.canvas.width;
    this.g0 = this.canvas.height;
    this.n7 = this.canvas.clientWidth;
    this.l9 = this.canvas.clientHeight;
  };
  d2.d1.f.prototype.n6 = function () {
    var n0 = this;
    var c5;
    try { c5 = new XMLHttpRequest(); } catch (h7) {
      c5 = new ActiveXObject("Msxml2.XMLHTTP");
    }
    c5.open("GET", this.l5, true);
    if (this.l5.substr(this.l5.length - 3) === '.js') {
      c5.responseType = 'text';
      c5.onreadystatechange = d2.d1.f.Y;
    } else { c5.responseType = 'arraybuffer';
      c5.onreadystatechange = d2.d1.f.F; } c5.send(null);
  };
  d2.d1.f.Y = function () {
    var c5 = this;
    if (c5.readyState !== 4) return;
    d2.d1.f.o0._1(c5);
  };
  d2.d1.f.prototype._1 = function (c5) {
    this.c8 = window.eval(c5.responseText);
    this.c8['preloadAssets'](this.o3, this.i6, this.canvas, this.j6, this.h6, this.c7, this.p2, this.p3, this.b, this.e, d2.d1.f.f9, d2.d1.f.j1.p4, d2.d1.f.a2);
  };
  d2.d1.f.F = function () { var c5 = this; if (c5.readyState !== 4) return;
    d2.d1.f.o0.m(c5); };
  d2.d1.f.prototype.m = function (c5) {
    var d6 = [110, 111, 103, 105, 99];
    var response;
    var d5;
    var m9;
    response = c5.response;
    if (response === null) { this.n6(); return; } d5 = new Uint8Array(response);
    m9 = d2.d1.f.j1.p4(d5, 0, d5.length, d6, 0);
    this.c8 = window.eval(m9);
    this.c8['preloadAssets'](this.o3, this.i6, this.canvas, this.j6, this.h6, this.c7, this.p2, this.p3, this.b, this.e, d2.d1.f.f9, d2.d1.f.j1.p4, d2.d1.f.a2);
  };
  d2.d1.f._5 = function (b0, index, e6, d6) {
    var value;
    var g;
    value = 0;
    for (g = 0; g < e6; g++) {
      value <<= 8;
      value |= (b0[index + g] ^ d6[(index + g) % d6.length]);
    }
    return value;
  };
  d2.d1.f.j = function (b0, index, e6, d6) {
    var d5;
    var g;
    d5 = [];
    for (g = 0; g < e6; g++) {
      d5[g] = b0[index + g] ^ d6[(index + g) % d6.length];
    }
    return d2.d1.f.o(d5, 0, e6);
  };
  d2.d1.f.a2 = function () { d2.d1.f.o0.E(); };
  d2.d1.f.prototype.E = function () {
    clearInterval(this.k);
  };
  d2.d1.f.prototype.T = function (message, b) { return this.c8['sendMessage'](message, b); };
  d2.d1.f.o = function (d5, h3, length) {
    var f6 = '';
    var i3, d8, q1;
    var charCode;
    var g;
    for (g = h3; g < h3 + length; g++) {
      i3 = d5[g];
      if (i3 >= 0xE0) {
        d8 = d5[++g];
        q1 = d5[++g];
        charCode = ((i3 & 0xF) << 12) | ((d8 & 0x3F) << 6) | (q1 & 0x3F);
        f6 += String.fromCharCode(charCode);
      } else if (i3 > 0x7F) {
        d8 = d5[++g];
        charCode = ((i3 & 0x1F) << 6) | (d8 & 0x3F);
        f6 += String.fromCharCode(charCode);
      } else { f6 += String.fromCharCode(i3); }
    }
    return f6;
  };
  d2.d1.f.prototype.J = function (d5, h3, length, d6) {
    if (d6 === undefined) d6 = [0];
    var g2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
    var j9;
    var i3, d8, q1;
    var g;
    j9 = '';
    for (g = h3; g < h3 + length; g += 3) {
      i3 = d5[g] ^ d6[g % d6.length];
      d8 = g + 1 < h3 + length ? (d5[g + 1] ^ d6[(g + 1) % d6.length]) : 0;
      q1 = g + 2 < h3 + length ? (d5[g + 2] ^ d6[(g + 2) % d6.length]) : 0;
      j9 += g2[i3 >> 2];
      j9 += g2[((i3 & 0x3) << 4) | (d8 >> 4)];
      j9 += g + 1 < h3 + length ? g2[((d8 & 0xF) << 2) | (q1 >> 6)] : '=';
      j9 += g + 2 < h3 + length ? g2[q1 & 0x3F] : '=';
    }
    return j9;
  };
  d2.d1.f.n9 = function (o2, q2, h8, f1, M, L) {
    if (o2 === undefined) o2 = 1;
    if (q2 === undefined) q2 = 0;
    if (h8 === undefined) h8 = 0;
    if (f1 === undefined) f1 = 1;
    if (M === undefined) M = 0;
    if (L === undefined) L = 0;
    this.e8 = o2;
    this.e7 = q2;
    this.f0 = h8;
    this.e9 = f1;
    this.o6 = M;
    this.o5 = L;
    return this;
  };
  d2.d1.f.n9.prototype.k5 = function (a) {
    var o2 = this.e8 * a.e8 + this.f0 * a.e7;
    var q2 = this.e7 * a.e8 + this.e9 * a.e7;
    var h8 = this.e8 * a.f0 + this.f0 * a.e9;
    var f1 = this.e7 * a.f0 + this.e9 * a.e9;
    var M = this.e8 * a.o6 + this.f0 * a.o5 + this.o6;
    var L = this.e7 * a.o6 + this.e9 * a.o5 + this.o5;
    this.e8 = o2;
    this.e7 = q2;
    this.f0 = h8;
    this.e9 = f1;
    this.o6 = M;
    this.o5 = L;
  };
  d2.d1.f.n9.prototype.D = function (a) {
    var o2 = a.e8 * this.e8 + a.f0 * this.e7;
    var q2 = a.e7 * this.e8 + a.e9 * this.e7;
    var h8 = a.e8 * this.f0 + a.f0 * this.e9;
    var f1 = a.e7 * this.f0 + a.e9 * this.e9;
    var M = a.e8 * this.o6 + a.f0 * this.o5 + a.o6;
    var L = a.e7 * this.o6 + a.e9 * this.o5 + a.o5;
    this.e8 = o2;
    this.e7 = q2;
    this.f0 = h8;
    this.e9 = f1;
    this.o6 = M;
    this.o5 = L;
  };
  d2.d1.f.n9.prototype.translate = function (q4, j2) { this.k5(new d2.d1.f.n9(1, 0, 0, 1, q4, j2)); };
  d2.d1.f.n9.prototype.scale = function (i7, i4) {
    var a = new d2.d1.f.n9(i7, 0, 0, i4, 0, 0);
    this.k5(a);
  };
  d2.d1.f.n9.prototype.a4 = function () {
    var d = this.e8 * this.e9 - this.e7 * this.f0;
    var e3;
    if (d === 0) return null;
    e3 = new d2.d1.f.n9();
    e3.e8 = this.e9 / d;
    e3.e7 = -this.e7 / d;
    e3.f0 = -this.f0 / d;
    e3.e9 = this.e8 / d;
    e3.o6 = (this.f0 * this.o5 - this.e9 * this.o6) / d;
    e3.o5 = (this.e7 * this.o6 - this.e8 * this.o5) / d;
    return e3;
  };
  d2.d1.f.n9.prototype.W = function () {
    return new d2.d1.f.n9(this.e8, this.e7, this.f0, this.e9, this.o6, this.o5);
  };
  d2.d1.f.j1 = function () {};
  d2.d1.f.j1.m8 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
  d2.d1.f.j1.l1 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99];
  d2.d1.f.j1.l0 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  d2.d1.f.j1.n2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  d2.d1.f.j1.m6 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  d2.d1.f.j1.n1 = function () { this.next = null;
    this.g6 = null; };
  d2.d1.f.j1.k4 = function () {
    this.h7 = 0;
    this.q2 = 0;
    this.n8 = 0;
    this._ = null;
  };
  d2.d1.f.j1.m2 = function (q2, n8, a1, f1, h7, e2) {
    var o2;
    var h8 = new Array(16 + 1);
    var g7;
    var p5;
    var i1;
    var h4;
    var g;
    var d7;
    var i0;
    var i8 = new Array(16 + 1);
    var o1;
    var q3;
    var i2;
    var j0 = new d2.d1.f.j1.k4();
    var c9 = new Array(16);
    var g4 = new Array(288);
    var d3;
    var q4 = new Array(16 + 1);
    var m1;
    var j2;
    var h0;
    var g1;
    var d0;
    this.status = 0;
    this.e1 = null;
    this.h1 = 0;
    d0 = this.e1 = null;
    for (g = 0; g < h8.length; g++) h8[g] = 0;
    for (g = 0; g < i8.length; g++) i8[g] = 0;
    for (g = 0; g < c9.length; g++) c9[g] = null;
    for (g = 0; g < g4.length; g++) g4[g] = 0;
    for (g = 0; g < q4.length; g++) q4[g] = 0;
    g7 = n8 > 256 ? q2[256] : 16;
    o1 = q2;
    q3 = 0;
    g = n8;
    do { h8[o1[q3]]++;
      q3++; } while (--g > 0);
    if (h8[0] === n8) {
      this.e1 = null;
      this.h1 = 0;
      this.status = 0;
      return;
    }
    for (d7 = 1; d7 <= 16; d7++) { if (h8[d7] !== 0) break; } i0 = d7;
    if (e2 < d7) e2 = d7;
    for (g = 16; g !== 0; g--) {
      if (h8[g] !== 0) break;
    }
    i1 = g;
    if (e2 > g) e2 = g;
    for (j2 = 1 << d7; d7 < g; d7++, j2 <<= 1) {
      if ((j2 -= h8[d7]) < 0) {
        this.status = 2;
        this.h1 = e2;
        return;
      }
    }
    if ((j2 -= h8[g]) < 0) { this.status = 2;
      this.h1 = e2; return; } h8[g] += j2;
    q4[1] = d7 = 0;
    o1 = h8;
    q3 = 1;
    m1 = 2;
    while (--g > 0) {
      q4[m1++] = (d7 += o1[q3++]);
    }
    o1 = q2;
    q3 = 0;
    g = 0;
    do { if ((d7 = o1[q3++]) !== 0) g4[q4[d7]++] = g; } while (++g < n8);
    n8 = q4[i1];
    q4[0] = g = 0;
    o1 = g4;
    q3 = 0;
    h4 = -1;
    d3 = i8[0] = 0;
    i2 = null;
    h0 = 0;
    for (; i0 <= i1; i0++) {
      o2 = h8[i0];
      while (o2-- > 0) {
        while (i0 > d3 + i8[1 + h4]) {
          d3 += i8[1 + h4];
          h4++;
          h0 = (h0 = i1 - d3) > e2 ? e2 : h0;
          if ((p5 = 1 << (d7 = i0 - d3)) > o2 + 1) {
            p5 -= o2 + 1;
            m1 = i0;
            while (++d7 < h0) {
              if ((p5 <<= 1) <= h8[++m1]) break;
              p5 -= h8[m1];
            }
          }
          if (d3 + d7 > g7 && d3 < g7) d7 = g7 - d3;
          h0 = 1 << d7;
          i8[1 + h4] = d7;
          i2 = new Array(h0);
          for (g1 = 0; g1 < h0; g1++) {
            i2[g1] = new d2.d1.f.j1.k4();
          }
          if (d0 === null) { d0 = this.e1 = new d2.d1.f.j1.n1(); } else { d0 = d0.next = new d2.d1.f.j1.n1(); } d0.next = null;
          d0.g6 = i2;
          c9[h4] = i2;
          if (h4 > 0) {
            q4[h4] = g;
            j0.q2 = i8[h4];
            j0.h7 = 16 + d7;
            j0._ = i2;
            d7 = (g & ((1 << d3) - 1)) >> (d3 - i8[h4]);
            c9[h4 - 1][d7].h7 = j0.h7;
            c9[h4 - 1][d7].q2 = j0.q2;
            c9[h4 - 1][d7].n8 = j0.n8;
            c9[h4 - 1][d7]._ = j0._;
          }
        }
        j0.q2 = i0 - d3;
        if (q3 >= n8) { j0.h7 = 99; } else if (o1[q3] < a1) {
          j0.h7 = (o1[q3] < 256 ? 16 : 15);
          j0.n8 = o1[q3++];
        } else { j0.h7 = h7[o1[q3] - a1];
          j0.n8 = f1[o1[q3++] - a1]; } p5 = 1 << (i0 - d3);
        for (d7 = g >> d3; d7 < h0; d7 += p5) {
          i2[d7].h7 = j0.h7;
          i2[d7].q2 = j0.q2;
          i2[d7].n8 = j0.n8;
          i2[d7]._ = j0._;
        }
        for (d7 = 1 << (i0 - 1);
          (g & d7) !== 0; d7 >>= 1) { g ^= d7; } g ^= d7;
        while ((g & ((1 << d3) - 1)) !== q4[h4]) {
          d3 -= i8[h4];
          h4--;
        }
      }
    }
    this.h1 = i8[1];
    this.status = ((j2 !== 0 && i1 !== 1) ? 1 : 0);
  };
  d2.d1.f.j1.p4 = function (d5, index, length, d6, c6) {
    return new d2.d1.f.j1().p4(d5, index, length, d6, c6);
  };
  d2.d1.f.j1.prototype.p4 = function (d5, index, length, d6, c6) {
    if (d6 === undefined) d6 = [0];
    if (c6 === undefined) c6 = 0;
    var m7;
    var j9;
    var j7;
    var p9;
    var o8;
    var f2;
    var g, d7;
    this.N = new Array(2 * 32768);
    this.k0 = 0;
    this.g8 = 0;
    this.m5 = 0;
    this.method = -1;
    this.g9 = false;
    this.o4 = this.j3 = 0;
    this.f4 = null;
    this.e0 = null;
    this.d5 = d5;
    this.l2 = index;
    this.n = index + length;
    this.d6 = d6;
    this.c6 = c6;
    m7 = String.fromCodePoint ? String.fromCodePoint : d2.d1.f.j1.fromCodePoint;
    j9 = '';
    while ((j7 = this.n5()) !== undefined) {
      if ((j7 & 0x80) === 0) {
        j9 += String.fromCharCode(j7);
      } else {
        p9 = 1;
        for (o8 = 0x40; o8 > 0; o8 >>>= 1) { if ((j7 & o8) === 0) break;
          p9++; } o8 = 0xFF >>> (p9 + 1);
        f2 = (j7 & o8) << ((p9 - 1) * 6);
        for (d7 = 1; d7 < p9; d7++) { j7 = this.n5();
          f2 |= (j7 & 0x3F) << ((p9 - 1 - d7) * 6); } j9 += m7(f2);
      }
    }
    this.d5 = null;
    return j9;
  };
  d2.d1.f.j1.prototype.n5 = function () {
    var j7;
    var e4;
    while (true) {
      if (this.g9 && this.method === -1) return undefined;
      if (this.o4 > 0) {
        if (this.method !== 0) {
          this.o4--;
          this.j3 &= 0x7FFF;
          this.k0 &= 0x7FFF;
          j7 = this.N[this.k0++] = this.N[this.j3++];
        } else {
          this.o4--;
          this.k0 &= 0x7FFF;
          this.h5(8);
          j7 = this.N[this.k0++] = this.f3(8);
          this.i9(8);
          if (this.o4 === 0) this.method = -1;
        }
        return j7;
      }
      if (this.method === -1) {
        if (this.g9) break;
        this.h5(1);
        if (this.f3(1) !== 0) this.g9 = true;
        this.i9(1);
        this.h5(2);
        this.method = this.f3(2);
        this.i9(2);
        this.e0 = null;
        this.o4 = 0;
      }
      switch (this.method) {
      case 0:
        e4 = this._4();
        break;
      case 1:
        if (this.e0 !== null) { e4 = this.f5(); } else { e4 = this.P(); }
        break;
      case 2:
        if (this.e0 !== null) {
          e4 = this.f5();
        } else { e4 = this.i(); }
        break;
      default:
        e4 = -1;
        break;
      }
      if (e4 === -1) {
        if (this.g9) return undefined;
        return undefined;
      }
      if (e4 > 0) break;
    }
    return this.a6;
  };
  d2.d1.f.j1.prototype.h5 = function (q0) {
    while (this.m5 < q0) {
      this.g8 |= this.Z() << this.m5;
      this.m5 += 8;
    }
  };
  d2.d1.f.j1.prototype.Z = function () {
    if (this.n === this.l2) return -1;
    return this.d5[this.l2++] ^ this.d6[(this.c6++) % this.d6.length];
  };
  d2.d1.f.j1.prototype.f3 = function (q0) { return this.g8 & ((1 << q0) - 1); };
  d2.d1.f.j1.prototype.i9 = function (q0) {
    this.g8 >>= q0;
    this.m5 -= q0;
  };
  d2.d1.f.j1.prototype._4 = function () {
    var e6;
    this.i9(this.m5 & 7);
    this.h5(16);
    e6 = this.f3(16);
    this.i9(16);
    this.h5(16);
    if (e6 !== ((~this.g8) & 0xFFFF)) return -1;
    this.i9(16);
    this.o4 = e6;
    if (this.o4 > 0) {
      this.o4--;
      this.k0 &= 0x7FFF;
      this.h5(8);
      this.a6 = this.N[this.k0++] = this.f3(8);
      this.i9(8);
    }
    if (this.o4 === 0) this.method = -1;
    return 1;
  };
  d2.d1.f.j1.prototype.f5 = function () {
    var h7;
    var _;
    while (true) {
      this.h5(this.j8);
      _ = this.e0.g6[this.f3(this.j8)];
      h7 = _.h7;
      while (h7 > 16) {
        if (h7 === 99) return -1;
        this.i9(_.q2);
        h7 -= 16;
        this.h5(h7);
        _ = _._[this.f3(h7)];
        h7 = _.h7;
      }
      this.i9(_.q2);
      if (h7 === 16) { this.k0 &= 0x7FFF;
        this.a6 = this.N[this.k0++] = _.n8; return 1; }
      if (h7 === 15) break;
      this.h5(h7);
      this.o4 = _.n8 + this.f3(h7);
      this.i9(h7);
      this.h5(this.o9);
      _ = this.l6.g6[this.f3(this.o9)];
      h7 = _.h7;
      while (h7 > 16) { if (h7 === 99) return -1;
        this.i9(_.q2);
        h7 -= 16;
        this.h5(h7);
        _ = _._[this.f3(h7)];
        h7 = _.h7; } this.i9(_.q2);
      this.h5(h7);
      this.j3 = this.k0 - _.n8 - this.f3(h7);
      this.i9(h7);
      if (this.o4 > 0) {
        this.o4--;
        this.j3 &= 0x7FFF;
        this.k0 &= 0x7FFF;
        this.a6 = this.N[this.k0++] = this.N[this.j3++];
        return 1;
      }
    }
    this.method = -1;
    return 0;
  };
  d2.d1.f.j1.prototype.P = function () {
    var g;
    var c;
    var h4;
    if (this.f4 === null) {
      c = new Array(288);
      for (g = 0; g < 144; g++) c[g] = 8;
      for (; g < 256; g++) c[g] = 9;
      for (; g < 280; g++) c[g] = 7;
      for (; g < 288; g++) c[g] = 8;
      this.c1 = 7;
      h4 = new d2.d1.f.j1.m2(c, 288, 257, d2.d1.f.j1.m8, d2.d1.f.j1.l1, this.c1);
      if (h4.status !== 0) { return -1; } this.f4 = h4.e1;
      this.c1 = h4.h1;
      for (g = 0; g < 30; g++) c[g] = 5;
      this._7 = 5;
      h4 = new d2.d1.f.j1.m2(c, 30, 0, d2.d1.f.j1.l0, d2.d1.f.j1.n2, this._7);
      if (h4.status > 1) { this.f4 = null; return -1; } this.V = h4.e1;
      this._7 = h4.h1;
    }
    this.e0 = this.f4;
    this.l6 = this.V;
    this.j8 = this.c1;
    this.o9 = this._7;
    return this.f5();
  };
  d2.d1.f.j1.prototype.i = function () {
    var g;
    var d7;
    var c;
    var n8;
    var _;
    var k3;
    var p8;
    var m3;
    var p1 = new Array(286 + 30);
    var h4;
    for (g = 0; g < p1.length; g++) p1[g] = 0;
    this.h5(5);
    p8 = 257 + this.f3(5);
    this.i9(5);
    this.h5(5);
    m3 = 1 + this.f3(5);
    this.i9(5);
    this.h5(4);
    k3 = 4 + this.f3(4);
    this.i9(4);
    if (p8 > 286 || m3 > 30) return -1;
    for (d7 = 0; d7 < k3; d7++) { this.h5(3);
      p1[d2.d1.f.j1.m6[d7]] = this.f3(3);
      this.i9(3); }
    for (; d7 < 19; d7++) {
      p1[d2.d1.f.j1.m6[d7]] = 0;
    }
    this.j8 = 7;
    h4 = new d2.d1.f.j1.m2(p1, 19, 19, null, null, this.j8);
    if (h4.status !== 0) return -1;
    this.e0 = h4.e1;
    this.j8 = h4.h1;
    n8 = p8 + m3;
    g = c = 0;
    while (g < n8) {
      this.h5(this.j8);
      _ = this.e0.g6[this.f3(this.j8)];
      d7 = _.q2;
      this.i9(d7);
      d7 = _.n8;
      if (d7 < 16) { p1[g++] = c = d7; } else if (d7 === 16) {
        this.h5(2);
        d7 = 3 + this.f3(2);
        this.i9(2);
        if (g + d7 > n8) return -1;
        while (d7-- > 0) {
          p1[g++] = c;
        }
      } else if (d7 === 17) {
        this.h5(3);
        d7 = 3 + this.f3(3);
        this.i9(3);
        if (g + d7 > n8) return -1;
        while (d7-- > 0) {
          p1[g++] = 0;
        }
        c = 0;
      } else { this.h5(7);
        d7 = 11 + this.f3(7);
        this.i9(7); if (g + d7 > n8) return -1; while (d7-- > 0) { p1[g++] = 0; } c = 0; }
    }
    this.j8 = 9;
    h4 = new d2.d1.f.j1.m2(p1, p8, 257, d2.d1.f.j1.m8, d2.d1.f.j1.l1, this.j8);
    if (this.j8 === 0) h4.status = 1;
    if (h4.status !== 0) return -1;
    this.e0 = h4.e1;
    this.j8 = h4.h1;
    for (g = 0; g < m3; g++) { p1[g] = p1[g + p8]; } this.o9 = 6;
    h4 = new d2.d1.f.j1.m2(p1, m3, 0, d2.d1.f.j1.l0, d2.d1.f.j1.n2, this.o9);
    this.l6 = h4.e1;
    this.o9 = h4.h1;
    if (this.o9 === 0 && p8 > 257) return -1;
    if (h4.status !== 0) return -1;
    return this.f5();
  };
  d2.d1.f.j1.fromCodePoint = function (f2) {
    if (f2 <= 0xFFFF) return String.fromCharCode(f2);
    f2 -= 0x10000;
    return String.fromCharCode((f2 >> 10) + 0xD800, (f2 % 0x400) + 0xDC00);
  };
  d2['initialize'] = function (q, b, e) {
    var j5;
    var canvas;
    var i6;
    var l3;
    var m4;
    var m0;
    var _9;
    var src;
    var o3;
    var l5;
    var h9;
    var p2, p3;
    var j0, i1, q2;
    var o0;
    var _8;
    j5 = document.createElement('div');
    j5.style.width = '100%';
    j5.style.height = '100%';
    q.appendChild(j5);
    canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.outline = 'none';
    j5.appendChild(canvas);
    i6 = true;
    l3 = true;
    m4 = '__.bin';
    m0 = false;
    if (e === null || e === undefined || e['filesFolder'] === null || e['filesFolder'] === undefined) {
      o3 = /(.*)\/js\//.exec(u)[1];
    } else { o3 = e['filesFolder']; }
    if (l3) {
      if (m4.substr(m4.length - 3) === '.js') { l5 = o3 + '/js/' + m4; } else {
        l5 = o3 + '/assets/' + m4;
      }
    } else { l5 = null; }
    if (m0) { h9 = o3 + '/assets/' + (i6 ? '_.bin' : ''); } else { h9 = null; }
    if (e === null || e === undefined || e['backgroundColor'] === null || e['backgroundColor'] === undefined) {
      p2 = -1;
    } else {
      j0 = parseInt(e['backgroundColor'].substr(1, 2), 16);
      i1 = parseInt(e['backgroundColor'].substr(3, 2), 16);
      q2 = parseInt(e['backgroundColor'].substr(5, 2), 16);
      p2 = 0xFF000000 | (j0 << 16) | (i1 << 8) | q2;
    }
    if (e === null || e === undefined || e['backgroundOutsideColor'] === null || e['backgroundOutsideColor'] === undefined) {
      p3 = -16777216;
    } else {
      j0 = parseInt(e['backgroundOutsideColor'].substr(1, 2), 16);
      i1 = parseInt(e['backgroundOutsideColor'].substr(3, 2), 16);
      q2 = parseInt(e['backgroundOutsideColor'].substr(5, 2), 16);
      p3 = 0xFF000000 | (j0 << 16) | (i1 << 8) | q2;
    }
    try {
      d2.d1.r.A = _0.O.s.U.b1;
    } catch (h7) {} o0 = new d2.d1.f(canvas, [600, 400], [400, 600], [false, false], p2, p3, b, e, o3, i6, l5, h9);
    o0.B();
    _8 = {};
    _8['sendMessage'] = function (message, b) { return o0.T(message, b); };
    return _8;
  };
  d2['uninitialize'] = function () {
    d2.d1.f.o0.c8['uninitializeStatic']();
  };
})();