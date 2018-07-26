(function () {
  var d4 = { c1: { b4: {} }, z: {}, display: { b6: {}, font: {}, K: {}, b9: {}, b7: {} }, c3: {}, b8: {}, c2: {}, _5: {}, B: { h4: {} }, _3: {}, d3: { c0: {}, K: {}, input: {}, _5: {}, _3: {} }, A: {}, c5: {} };
  var _4 = { R: { w: { U: {}, y: {} } } };
  window['nogic3'] = d4;
  var a2 = document.getElementsByTagName('script');
  var t = a2[a2.length - 1].src;
  d4.d3.h = function (canvas, j8, i7, c9, p4, p5, d, g, o5, i5, j9, i2) {
    d4.d3.h.o2 = this;
    this.d = d;
    if (this.d === null || this.d === undefined) this.d = {};
    this.g = g;
    if (this.g === null || this.g === undefined) this.g = {};
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    this.canvas = canvas;
    canvas.id = "tets";
    this.p2 = canvas.getContext('2d');
    canvas.setAttribute('tabIndex', 0);
    this.j8 = j8;
    this.i7 = i7;
    this.c9 = c9;
    this.p4 = p4;
    this.p5 = p5;
    this.m0 = 'rgba(' + ((p4 >>> 16) & 0xFF) + ',' + ((p4 >>> 8) & 0xFF) + ',' + (p4 & 0xFF) + ',' + (((p4 >>> 24) & 0xFF) / 0xFF) + ')';
    this.l8 = 'rgba(' + ((p5 >>> 16) & 0xFF) + ',' + ((p5 >>> 8) & 0xFF) + ',' + (p5 & 0xFF) + ',' + (((p5 >>> 24) & 0xFF) / 0xFF) + ')';
    this.l4(canvas.clientWidth, canvas.clientHeight);
    this.g7 = canvas.width;
    this.g3 = canvas.height;
    this.n1 = canvas.clientWidth;
    this.l3 = canvas.clientHeight;
    this.m2(j8[this.e7], i7[this.e7], canvas.width, canvas.height, canvas.clientWidth, canvas.clientHeight);
    this.o5 = o5;
    this.i5 = i5;
    this.j9 = j9;
    this.i2 = i2;
  };
  d4.d3.h.prototype.l4 = function (p9, o9) {
    var a6;
    var j1, j0;
    var g0;
    var i;
    a6 = Number.POSITIVE_INFINITY;
    for (i = 0; i < this.j8.length; i++) {
      j1 = p9 / this.j8[i];
      j0 = o9 / this.i7[i];
      if (j1 < j0) {
        g0 = o9 / (this.i7[i] * j1);
      } else { g0 = p9 / (this.j8[i] * j0); }
      if (g0 < a6) { this.e7 = i;
        a6 = g0; }
    }
  };
  d4.d3.h.prototype.m2 = function (width, height, g7, g3, p9, o9) {
    var j1, j0, scale, c, o0;
    var _9, k3;
    j1 = p9 / g7;
    j0 = o9 / g3;
    _9 = new d4.d3.h.o1();
    _9.scale(j1, j0);
    k3 = _9.a7();
    j1 = p9 / width;
    j0 = o9 / height;
    scale = Math.min(j1, j0);
    c = (p9 - scale * width) / 2;
    o0 = (o9 - scale * height) / 2;
    this.h0 = new d4.d3.h.o1();
    this.h0.translate(c, o0);
    this.h0.scale(scale, scale);
    this.c6 = this.h0.a7();
    this.e1 = this.h0.Z();
    this.e1.L(k3);
    this.x = this.e1.a7();
  };
  d4.d3.h.prototype.F = function () {
    if (!this.D()) return;
    this.T();
    this.v();
  };
  d4.d3.h.prototype.D = function () {
    if (d4.d3.h._0()) {
      alert('Internet Explorer 9 or below is not supported, please update to version 10 or above.');
      return false;
    }
    if (this.g['allowRunInAndroidDefaultBrowser'] === false) {
      if (d4.d3.h.l()) {
        alert('The default browser on Android is not supported, please download another browser such as Chrome, Firefox or Opera from Play Store.');
        return false;
      }
    }
    try { new ArrayBuffer(0); } catch (i0) {
      alert('This browser is not supported. Please use the latest version of Internet Explorer, Firefox, Chrome, Safari, or Opera.');
    }
    return true;
  };
  d4.d3.h._0 = function () {
    var a8;
    a8 = /\bMSIE\b\s*(\d+)\.\d+\b/.exec(navigator.userAgent);
    return a8 !== null && a8[1] <= 9;
  };
  d4.d3.h.l = function () {
    if (/\bSamsung\b/i.test(navigator.userAgent)) return true;
    if (!/\bAndroid\b/.test(navigator.userAgent)) return false;
    if (/\bChrome\b/.test(navigator.userAgent)) return false;
    if (/\bFirefox\b/.test(navigator.userAgent)) return false;
    return true;
  };
  d4.d3.h.prototype.T = function () {
    if (document.location.href.substr(0, 4) === 'http') return true;
    alert('Loading from the local computer may or may not work, depending on the browser you are using and the security settings. If there are any problems, try using another web browser or loading from a web server.');
  };
  d4.d3.h.prototype.v = function () {
    var l0 = this;
    this.p2.save();
    this.p2.fillStyle = this.c9[this.e7] ? this.l8 : this.m0;
    this.p2.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.p2.restore();
    this.n();
  };
  d4.d3.h.prototype.n = function () {
    if (!this.i5) {
      this.G();
    } else { this.s(); }
  };
  d4.d3.h.prototype.G = function () {
    var d6;
    if (this.i2 === null) { this.p8(false, d6); return; } d6 = new Image();
    d6.crossOrigin = 'Anonymous';
    d6.onload = d4.d3.h.k4;
    d6.onerror = d4.d3.h.g2;
    d6.onabort = d4.d3.h.g2;
    d6.src = this.i2;
  };
  d4.d3.h.prototype.s = function () {
    var c7;
    if (this.i2 === null) { this.p8(false, null); return; }
    try {
      c7 = new XMLHttpRequest();
    } catch (i0) { c7 = new ActiveXObject("Msxml2.XMLHTTP"); } c7.open("GET", this.i2, true);
    c7.responseType = 'arraybuffer';
    c7.onreadystatechange = d4.d3.h.X;
    c7.send(null);
  };
  d4.d3.h.X = function () {
    var c7 = this;
    if (c7.readyState !== 4) return;
    d4.d3.h.o2.q(c7);
  };
  d4.d3.h.prototype.q = function (c7) {
    var d8 = [110, 111, 103, 105, 99];
    var d7;
    var g1;
    var l6;
    var n0;
    if (c7.response === null) { this.p8(false, null); return; } d7 = new Uint8Array(c7.response);
    g1 = d4.d3.h.f8(d7, d8);
    if (g1.length === 0) { this.p8(false, null); return; } l6 = 'image/png';
    n0 = new Image();
    n0.onload = d4.d3.h.k4;
    n0.onerror = d4.d3.h.g2;
    n0.onabort = d4.d3.h.g2;
    n0.src = 'data:' + l6 + ';base64,' + this.I(d7, g1[0][2], g1[0][3], d8);
  };
  d4.d3.h.f8 = function (d7, d8) {
    var a3;
    var i8;
    var k9, b1, b2, n3;
    a3 = [];
    i8 = 0;
    while (i8 < d7.length - 1) {
      k9 = d4.d3.h._8(d7, i8++, 1, d8);
      b1 = d4.d3.h._8(d7, i8++, 1, d8);
      b2 = d4.d3.h._8(d7, i8, 4, d8);
      i8 += 4;
      n3 = d4.d3.h.k(d7, i8, b1, d8);
      i8 += b1;
      a3.push([k9, n3, i8, b2]);
      i8 += b2;
    }
    return a3;
  };
  d4.d3.h.k4 = function () { var d6 = this;
    d4.d3.h.o2.p8(true, d6); };
  d4.d3.h.g2 = function () {
    var d6 = this;
    d4.d3.h.o2.p8(false, d6);
  };
  d4.d3.h.prototype.p8 = function (J, d6) {
    var l0 = this;
    if (J && d6 !== null && d6.width > 0 && d6.height > 0) {
      this.b0 = d6;
      this.k2();
      this.u = setInterval(d4.d3.h.M, 1);
    }
    if (this.j9 !== null) { this.n2(); } else {
      this.d0 = d4.d3.r;
      this.d0['preloadAssets'](this.o5, this.i5, this.canvas, this.j8, this.i7, this.c9, this.p4, this.p5, this.d, this.g, d4.d3.h.f8, d4.d3.h.j5.p6, d4.d3.h.a5);
    }
  };
  d4.d3.h.prototype.k2 = function () {
    this.p2.save();
    this.p2.transform(this.e1.f0, this.e1.e9, this.e1.f2, this.e1.f1, this.e1.o8, this.e1.o7);
    this.p2.translate((this.j8[this.e7] - this.b0.width) / 2, (this.i7[this.e7] - this.b0.height) / 2);
    this.p2.drawImage(this.b0, 0, 0);
    this.p2.restore();
  };
  d4.d3.h.M = function () { d4.d3.h.o2.S(); };
  d4.d3.h.prototype.S = function () {
    if (this.canvas.width === this.g7 && this.canvas.height === this.g3 && this.canvas.clientWidth === this.n1 && this.canvas.clientHeight === this.l3) return;
    this.l4(this.canvas.clientWidth, this.canvas.clientHeight);
    this.p2.save();
    this.p2.fillStyle = this.c9[this.e7] ? this.l8 : this.m0;
    this.p2.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.p2.restore();
    this.m2(this.j8[this.e7], this.i7[this.e7], this.canvas.width, this.canvas.height, this.canvas.clientWidth, this.canvas.clientHeight);
    this.k2();
    this.g7 = this.canvas.width;
    this.g3 = this.canvas.height;
    this.n1 = this.canvas.clientWidth;
    this.l3 = this.canvas.clientHeight;
  };
  d4.d3.h.prototype.n2 = function () {
    var l0 = this;
    var c7;
    try { c7 = new XMLHttpRequest(); } catch (i0) {
      c7 = new ActiveXObject("Msxml2.XMLHTTP");
    }
    c7.open("GET", this.j9, true);
    if (this.j9.substr(this.j9.length - 3) === '.js') {
      c7.responseType = 'text';
      c7.onreadystatechange = d4.d3.h._1;
    } else { c7.responseType = 'arraybuffer';
      c7.onreadystatechange = d4.d3.h.E; } c7.send(null);
  };
  d4.d3.h._1 = function () {
    var c7 = this;
    if (c7.readyState !== 4) return;
    d4.d3.h.o2._7(c7);
  };
  d4.d3.h.prototype._7 = function (c7) {
    this.d0 = window.eval(c7.responseText);
    this.d0['preloadAssets'](this.o5, this.i5, this.canvas, this.j8, this.i7, this.c9, this.p4, this.p5, this.d, this.g, d4.d3.h.f8, d4.d3.h.j5.p6, d4.d3.h.a5);
  };
  d4.d3.h.E = function () { var c7 = this; if (c7.readyState !== 4) return;
    d4.d3.h.o2.m(c7); };
  d4.d3.h.prototype.m = function (c7) {
    var d8 = [110, 111, 103, 105, 99];
    var response;
    var d7;
    var k6;
    response = c7.response;
    if (response === null) { this.n2(); return; } d7 = new Uint8Array(response);
    k6 = d4.d3.h.j5.p6(d7, 0, d7.length, d8, 0);
    this.d0 = window.eval(k6);
    this.d0['preloadAssets'](this.o5, this.i5, this.canvas, this.j8, this.i7, this.c9, this.p4, this.p5, this.d, this.g, d4.d3.h.f8, d4.d3.h.j5.p6, d4.d3.h.a5);
  };
  d4.d3.h._8 = function (b3, index, e8, d8) {
    var value;
    var i;
    value = 0;
    for (i = 0; i < e8; i++) {
      value <<= 8;
      value |= (b3[index + i] ^ d8[(index + i) % d8.length]);
    }
    return value;
  };
  d4.d3.h.k = function (b3, index, e8, d8) {
    var d7;
    var i;
    d7 = [];
    for (i = 0; i < e8; i++) {
      d7[i] = b3[index + i] ^ d8[(index + i) % d8.length];
    }
    return d4.d3.h.o(d7, 0, e8);
  };
  d4.d3.h.a5 = function () { d4.d3.h.o2.H(); };
  d4.d3.h.prototype.H = function () {
    clearInterval(this.u);
  };
  d4.d3.h.prototype.W = function (message, d) { return this.d0['sendMessage'](message, d); };
  d4.d3.h.o = function (d7, h5, length) {
    var f6 = '';
    var i6, e0, q3;
    var charCode;
    var i;
    for (i = h5; i < h5 + length; i++) {
      i6 = d7[i];
      if (i6 >= 0xE0) {
        e0 = d7[++i];
        q3 = d7[++i];
        charCode = ((i6 & 0xF) << 12) | ((e0 & 0x3F) << 6) | (q3 & 0x3F);
        f6 += String.fromCharCode(charCode);
      } else if (i6 > 0x7F) {
        e0 = d7[++i];
        charCode = ((i6 & 0x1F) << 6) | (e0 & 0x3F);
        f6 += String.fromCharCode(charCode);
      } else { f6 += String.fromCharCode(i6); }
    }
    return f6;
  };
  d4.d3.h.prototype.I = function (d7, h5, length, d8) {
    if (d8 === undefined) d8 = [0];
    var h8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
    var n9;
    var i6, e0, q3;
    var i;
    n9 = '';
    for (i = h5; i < h5 + length; i += 3) {
      i6 = d7[i] ^ d8[i % d8.length];
      e0 = i + 1 < h5 + length ? (d7[i + 1] ^ d8[(i + 1) % d8.length]) : 0;
      q3 = i + 2 < h5 + length ? (d7[i + 2] ^ d8[(i + 2) % d8.length]) : 0;
      n9 += h8[i6 >> 2];
      n9 += h8[((i6 & 0x3) << 4) | (e0 >> 4)];
      n9 += i + 1 < h5 + length ? h8[((e0 & 0xF) << 2) | (q3 >> 6)] : '=';
      n9 += i + 2 < h5 + length ? h8[q3 & 0x3F] : '=';
    }
    return n9;
  };
  d4.d3.h.o1 = function (o4, q4, i1, f3, O, N) {
    if (o4 === undefined) o4 = 1;
    if (q4 === undefined) q4 = 0;
    if (i1 === undefined) i1 = 0;
    if (f3 === undefined) f3 = 1;
    if (O === undefined) O = 0;
    if (N === undefined) N = 0;
    this.f0 = o4;
    this.e9 = q4;
    this.f2 = i1;
    this.f1 = f3;
    this.o8 = O;
    this.o7 = N;
    return this;
  };
  d4.d3.h.o1.prototype.m1 = function (a) {
    var o4 = this.f0 * a.f0 + this.f2 * a.e9;
    var q4 = this.e9 * a.f0 + this.f1 * a.e9;
    var i1 = this.f0 * a.f2 + this.f2 * a.f1;
    var f3 = this.e9 * a.f2 + this.f1 * a.f1;
    var O = this.f0 * a.o8 + this.f2 * a.o7 + this.o8;
    var N = this.e9 * a.o8 + this.f1 * a.o7 + this.o7;
    this.f0 = o4;
    this.e9 = q4;
    this.f2 = i1;
    this.f1 = f3;
    this.o8 = O;
    this.o7 = N;
  };
  d4.d3.h.o1.prototype.L = function (a) {
    var o4 = a.f0 * this.f0 + a.f2 * this.e9;
    var q4 = a.e9 * this.f0 + a.f1 * this.e9;
    var i1 = a.f0 * this.f2 + a.f2 * this.f1;
    var f3 = a.e9 * this.f2 + a.f1 * this.f1;
    var O = a.f0 * this.o8 + a.f2 * this.o7 + a.o8;
    var N = a.e9 * this.o8 + a.f1 * this.o7 + a.o7;
    this.f0 = o4;
    this.e9 = q4;
    this.f2 = i1;
    this.f1 = f3;
    this.o8 = O;
    this.o7 = N;
  };
  d4.d3.h.o1.prototype.translate = function (c, o0) { this.m1(new d4.d3.h.o1(1, 0, 0, 1, c, o0)); };
  d4.d3.h.o1.prototype.scale = function (j1, j0) {
    var a = new d4.d3.h.o1(j1, 0, 0, j0, 0, 0);
    this.m1(a);
  };
  d4.d3.h.o1.prototype.a7 = function () {
    var f = this.f0 * this.f1 - this.e9 * this.f2;
    var e5;
    if (f === 0) return null;
    e5 = new d4.d3.h.o1();
    e5.f0 = this.f1 / f;
    e5.e9 = -this.e9 / f;
    e5.f2 = -this.f2 / f;
    e5.f1 = this.f0 / f;
    e5.o8 = (this.f2 * this.o7 - this.f1 * this.o8) / f;
    e5.o7 = (this.e9 * this.o8 - this.f0 * this.o7) / f;
    return e5;
  };
  d4.d3.h.o1.prototype.Z = function () {
    return new d4.d3.h.o1(this.f0, this.e9, this.f2, this.f1, this.o8, this.o7);
  };
  d4.d3.h.j5 = function () {};
  d4.d3.h.j5.n4 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
  d4.d3.h.j5.l5 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99];
  d4.d3.h.j5.k5 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  d4.d3.h.j5.n8 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  d4.d3.h.j5.n5 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  d4.d3.h.j5.k8 = function () { this.next = null;
    this.g9 = null; };
  d4.d3.h.j5.m3 = function () {
    this.i0 = 0;
    this.q4 = 0;
    this.j6 = 0;
    this._ = null;
  };
  d4.d3.h.j5.m5 = function (q4, j6, a4, f3, i0, e4) {
    var o4;
    var i1 = new Array(16 + 1);
    var g6;
    var p7;
    var j3;
    var h6;
    var i;
    var d9;
    var i4;
    var i9 = new Array(16 + 1);
    var o3;
    var b;
    var i3;
    var j4 = new d4.d3.h.j5.m3();
    var d1 = new Array(16);
    var g4 = new Array(288);
    var d5;
    var c = new Array(16 + 1);
    var n6;
    var o0;
    var h2;
    var g5;
    var d2;
    this.status = 0;
    this.e3 = null;
    this.h3 = 0;
    d2 = this.e3 = null;
    for (i = 0; i < i1.length; i++) i1[i] = 0;
    for (i = 0; i < i9.length; i++) i9[i] = 0;
    for (i = 0; i < d1.length; i++) d1[i] = null;
    for (i = 0; i < g4.length; i++) g4[i] = 0;
    for (i = 0; i < c.length; i++) c[i] = 0;
    g6 = j6 > 256 ? q4[256] : 16;
    o3 = q4;
    b = 0;
    i = j6;
    do { i1[o3[b]]++;
      b++; } while (--i > 0);
    if (i1[0] === j6) {
      this.e3 = null;
      this.h3 = 0;
      this.status = 0;
      return;
    }
    for (d9 = 1; d9 <= 16; d9++) { if (i1[d9] !== 0) break; } i4 = d9;
    if (e4 < d9) e4 = d9;
    for (i = 16; i !== 0; i--) {
      if (i1[i] !== 0) break;
    }
    j3 = i;
    if (e4 > i) e4 = i;
    for (o0 = 1 << d9; d9 < i; d9++, o0 <<= 1) {
      if ((o0 -= i1[d9]) < 0) {
        this.status = 2;
        this.h3 = e4;
        return;
      }
    }
    if ((o0 -= i1[i]) < 0) { this.status = 2;
      this.h3 = e4; return; } i1[i] += o0;
    c[1] = d9 = 0;
    o3 = i1;
    b = 1;
    n6 = 2;
    while (--i > 0) {
      c[n6++] = (d9 += o3[b++]);
    }
    o3 = q4;
    b = 0;
    i = 0;
    do { if ((d9 = o3[b++]) !== 0) g4[c[d9]++] = i; } while (++i < j6);
    j6 = c[j3];
    c[0] = i = 0;
    o3 = g4;
    b = 0;
    h6 = -1;
    d5 = i9[0] = 0;
    i3 = null;
    h2 = 0;
    for (; i4 <= j3; i4++) {
      o4 = i1[i4];
      while (o4-- > 0) {
        while (i4 > d5 + i9[1 + h6]) {
          d5 += i9[1 + h6];
          h6++;
          h2 = (h2 = j3 - d5) > e4 ? e4 : h2;
          if ((p7 = 1 << (d9 = i4 - d5)) > o4 + 1) {
            p7 -= o4 + 1;
            n6 = i4;
            while (++d9 < h2) {
              if ((p7 <<= 1) <= i1[++n6]) break;
              p7 -= i1[n6];
            }
          }
          if (d5 + d9 > g6 && d5 < g6) d9 = g6 - d5;
          h2 = 1 << d9;
          i9[1 + h6] = d9;
          i3 = new Array(h2);
          for (g5 = 0; g5 < h2; g5++) {
            i3[g5] = new d4.d3.h.j5.m3();
          }
          if (d2 === null) { d2 = this.e3 = new d4.d3.h.j5.k8(); } else { d2 = d2.next = new d4.d3.h.j5.k8(); } d2.next = null;
          d2.g9 = i3;
          d1[h6] = i3;
          if (h6 > 0) {
            c[h6] = i;
            j4.q4 = i9[h6];
            j4.i0 = 16 + d9;
            j4._ = i3;
            d9 = (i & ((1 << d5) - 1)) >> (d5 - i9[h6]);
            d1[h6 - 1][d9].i0 = j4.i0;
            d1[h6 - 1][d9].q4 = j4.q4;
            d1[h6 - 1][d9].j6 = j4.j6;
            d1[h6 - 1][d9]._ = j4._;
          }
        }
        j4.q4 = i4 - d5;
        if (b >= j6) { j4.i0 = 99; } else if (o3[b] < a4) {
          j4.i0 = (o3[b] < 256 ? 16 : 15);
          j4.j6 = o3[b++];
        } else { j4.i0 = i0[o3[b] - a4];
          j4.j6 = f3[o3[b++] - a4]; } p7 = 1 << (i4 - d5);
        for (d9 = i >> d5; d9 < h2; d9 += p7) {
          i3[d9].i0 = j4.i0;
          i3[d9].q4 = j4.q4;
          i3[d9].j6 = j4.j6;
          i3[d9]._ = j4._;
        }
        for (d9 = 1 << (i4 - 1);
          (i & d9) !== 0; d9 >>= 1) { i ^= d9; } i ^= d9;
        while ((i & ((1 << d5) - 1)) !== c[h6]) {
          d5 -= i9[h6];
          h6--;
        }
      }
    }
    this.h3 = i9[1];
    this.status = ((o0 !== 0 && j3 !== 1) ? 1 : 0);
  };
  d4.d3.h.j5.p6 = function (d7, index, length, d8, c8) {
    return new d4.d3.h.j5().p6(d7, index, length, d8, c8);
  };
  d4.d3.h.j5.prototype.p6 = function (d7, index, length, d8, c8) {
    if (d8 === undefined) d8 = [0];
    if (c8 === undefined) c8 = 0;
    var k7;
    var n9;
    var k0;
    var q1;
    var p0;
    var f4;
    var i, d9;
    this.P = new Array(2 * 32768);
    this.k1 = 0;
    this.h1 = 0;
    this.m4 = 0;
    this.method = -1;
    this.g8 = false;
    this.o6 = this.m8 = 0;
    this.f7 = null;
    this.e2 = null;
    this.d7 = d7;
    this.h9 = index;
    this.p = index + length;
    this.d8 = d8;
    this.c8 = c8;
    k7 = String.fromCodePoint ? String.fromCodePoint : d4.d3.h.j5.fromCodePoint;
    n9 = '';
    while ((k0 = this.n7()) !== undefined) {
      if ((k0 & 0x80) === 0) {
        n9 += String.fromCharCode(k0);
      } else {
        q1 = 1;
        for (p0 = 0x40; p0 > 0; p0 >>>= 1) { if ((k0 & p0) === 0) break;
          q1++; } p0 = 0xFF >>> (q1 + 1);
        f4 = (k0 & p0) << ((q1 - 1) * 6);
        for (d9 = 1; d9 < q1; d9++) { k0 = this.n7();
          f4 |= (k0 & 0x3F) << ((q1 - 1 - d9) * 6); } n9 += k7(f4);
      }
    }
    this.d7 = null;
    return n9;
  };
  d4.d3.h.j5.prototype.n7 = function () {
    var k0;
    var e6;
    while (true) {
      if (this.g8 && this.method === -1) return undefined;
      if (this.o6 > 0) {
        if (this.method !== 0) {
          this.o6--;
          this.m8 &= 0x7FFF;
          this.k1 &= 0x7FFF;
          k0 = this.P[this.k1++] = this.P[this.m8++];
        } else {
          this.o6--;
          this.k1 &= 0x7FFF;
          this.h7(8);
          k0 = this.P[this.k1++] = this.f5(8);
          this.j2(8);
          if (this.o6 === 0) this.method = -1;
        }
        return k0;
      }
      if (this.method === -1) {
        if (this.g8) break;
        this.h7(1);
        if (this.f5(1) !== 0) this.g8 = true;
        this.j2(1);
        this.h7(2);
        this.method = this.f5(2);
        this.j2(2);
        this.e2 = null;
        this.o6 = 0;
      }
      switch (this.method) {
      case 0:
        e6 = this._6();
        break;
      case 1:
        if (this.e2 !== null) { e6 = this.f9(); } else { e6 = this.Q(); }
        break;
      case 2:
        if (this.e2 !== null) {
          e6 = this.f9();
        } else { e6 = this.j(); }
        break;
      default:
        e6 = -1;
        break;
      }
      if (e6 === -1) {
        if (this.g8) return undefined;
        return undefined;
      }
      if (e6 > 0) break;
    }
    return this.a9;
  };
  d4.d3.h.j5.prototype.h7 = function (q2) {
    while (this.m4 < q2) {
      this.h1 |= this._2() << this.m4;
      this.m4 += 8;
    }
  };
  d4.d3.h.j5.prototype._2 = function () {
    if (this.p === this.h9) return -1;
    return this.d7[this.h9++] ^ this.d8[(this.c8++) % this.d8.length];
  };
  d4.d3.h.j5.prototype.f5 = function (q2) { return this.h1 & ((1 << q2) - 1); };
  d4.d3.h.j5.prototype.j2 = function (q2) {
    this.h1 >>= q2;
    this.m4 -= q2;
  };
  d4.d3.h.j5.prototype._6 = function () {
    var e8;
    this.j2(this.m4 & 7);
    this.h7(16);
    e8 = this.f5(16);
    this.j2(16);
    this.h7(16);
    if (e8 !== ((~this.h1) & 0xFFFF)) return -1;
    this.j2(16);
    this.o6 = e8;
    if (this.o6 > 0) {
      this.o6--;
      this.k1 &= 0x7FFF;
      this.h7(8);
      this.a9 = this.P[this.k1++] = this.f5(8);
      this.j2(8);
    }
    if (this.o6 === 0) this.method = -1;
    return 1;
  };
  d4.d3.h.j5.prototype.f9 = function () {
    var i0;
    var _;
    while (true) {
      this.h7(this.j7);
      _ = this.e2.g9[this.f5(this.j7)];
      i0 = _.i0;
      while (i0 > 16) {
        if (i0 === 99) return -1;
        this.j2(_.q4);
        i0 -= 16;
        this.h7(i0);
        _ = _._[this.f5(i0)];
        i0 = _.i0;
      }
      this.j2(_.q4);
      if (i0 === 16) { this.k1 &= 0x7FFF;
        this.a9 = this.P[this.k1++] = _.j6; return 1; }
      if (i0 === 15) break;
      this.h7(i0);
      this.o6 = _.j6 + this.f5(i0);
      this.j2(i0);
      this.h7(this.p1);
      _ = this.l2.g9[this.f5(this.p1)];
      i0 = _.i0;
      while (i0 > 16) { if (i0 === 99) return -1;
        this.j2(_.q4);
        i0 -= 16;
        this.h7(i0);
        _ = _._[this.f5(i0)];
        i0 = _.i0; } this.j2(_.q4);
      this.h7(i0);
      this.m8 = this.k1 - _.j6 - this.f5(i0);
      this.j2(i0);
      if (this.o6 > 0) {
        this.o6--;
        this.m8 &= 0x7FFF;
        this.k1 &= 0x7FFF;
        this.a9 = this.P[this.k1++] = this.P[this.m8++];
        return 1;
      }
    }
    this.method = -1;
    return 0;
  };
  d4.d3.h.j5.prototype.Q = function () {
    var i;
    var e;
    var h6;
    if (this.f7 === null) {
      e = new Array(288);
      for (i = 0; i < 144; i++) e[i] = 8;
      for (; i < 256; i++) e[i] = 9;
      for (; i < 280; i++) e[i] = 7;
      for (; i < 288; i++) e[i] = 8;
      this.c4 = 7;
      h6 = new d4.d3.h.j5.m5(e, 288, 257, d4.d3.h.j5.n4, d4.d3.h.j5.l5, this.c4);
      if (h6.status !== 0) { return -1; } this.f7 = h6.e3;
      this.c4 = h6.h3;
      for (i = 0; i < 30; i++) e[i] = 5;
      this.a0 = 5;
      h6 = new d4.d3.h.j5.m5(e, 30, 0, d4.d3.h.j5.k5, d4.d3.h.j5.n8, this.a0);
      if (h6.status > 1) { this.f7 = null; return -1; } this.Y = h6.e3;
      this.a0 = h6.h3;
    }
    this.e2 = this.f7;
    this.l2 = this.Y;
    this.j7 = this.c4;
    this.p1 = this.a0;
    return this.f9();
  };
  d4.d3.h.j5.prototype.j = function () {
    var i;
    var d9;
    var e;
    var j6;
    var _;
    var l9;
    var q0;
    var m9;
    var p3 = new Array(286 + 30);
    var h6;
    for (i = 0; i < p3.length; i++) p3[i] = 0;
    this.h7(5);
    q0 = 257 + this.f5(5);
    this.j2(5);
    this.h7(5);
    m9 = 1 + this.f5(5);
    this.j2(5);
    this.h7(4);
    l9 = 4 + this.f5(4);
    this.j2(4);
    if (q0 > 286 || m9 > 30) return -1;
    for (d9 = 0; d9 < l9; d9++) { this.h7(3);
      p3[d4.d3.h.j5.n5[d9]] = this.f5(3);
      this.j2(3); }
    for (; d9 < 19; d9++) {
      p3[d4.d3.h.j5.n5[d9]] = 0;
    }
    this.j7 = 7;
    h6 = new d4.d3.h.j5.m5(p3, 19, 19, null, null, this.j7);
    if (h6.status !== 0) return -1;
    this.e2 = h6.e3;
    this.j7 = h6.h3;
    j6 = q0 + m9;
    i = e = 0;
    while (i < j6) {
      this.h7(this.j7);
      _ = this.e2.g9[this.f5(this.j7)];
      d9 = _.q4;
      this.j2(d9);
      d9 = _.j6;
      if (d9 < 16) { p3[i++] = e = d9; } else if (d9 === 16) {
        this.h7(2);
        d9 = 3 + this.f5(2);
        this.j2(2);
        if (i + d9 > j6) return -1;
        while (d9-- > 0) {
          p3[i++] = e;
        }
      } else if (d9 === 17) {
        this.h7(3);
        d9 = 3 + this.f5(3);
        this.j2(3);
        if (i + d9 > j6) return -1;
        while (d9-- > 0) {
          p3[i++] = 0;
        }
        e = 0;
      } else { this.h7(7);
        d9 = 11 + this.f5(7);
        this.j2(7); if (i + d9 > j6) return -1; while (d9-- > 0) { p3[i++] = 0; } e = 0; }
    }
    this.j7 = 9;
    h6 = new d4.d3.h.j5.m5(p3, q0, 257, d4.d3.h.j5.n4, d4.d3.h.j5.l5, this.j7);
    if (this.j7 === 0) h6.status = 1;
    if (h6.status !== 0) return -1;
    this.e2 = h6.e3;
    this.j7 = h6.h3;
    for (i = 0; i < m9; i++) { p3[i] = p3[i + q0]; } this.p1 = 6;
    h6 = new d4.d3.h.j5.m5(p3, m9, 0, d4.d3.h.j5.k5, d4.d3.h.j5.n8, this.p1);
    this.l2 = h6.e3;
    this.p1 = h6.h3;
    if (this.p1 === 0 && q0 > 257) return -1;
    if (h6.status !== 0) return -1;
    return this.f9();
  };
  d4.d3.h.j5.fromCodePoint = function (f4) {
    if (f4 <= 0xFFFF) return String.fromCharCode(f4);
    f4 -= 0x10000;
    return String.fromCharCode((f4 >> 10) + 0xD800, (f4 % 0x400) + 0xDC00);
  };
  d4['initialize'] = function (V, d, g) {
    var m7;
    var canvas;
    var i5;
    var l7;
    var m6;
    var l1;
    var a2;
    var src;
    var o5;
    var j9;
    var i2;
    var p4, p5;
    var j4, j3, q4;
    var o2;
    var a1;
    m7 = document.createElement('div');
    m7.style.width = '100%';
    m7.style.height = '100%';
    V.appendChild(m7);
    canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.outline = 'none';
    m7.appendChild(canvas);
    i5 = true;
    l7 = true;
    m6 = '__.bin';
    l1 = false;
    if (g === null || g === undefined || g['filesFolder'] === null || g['filesFolder'] === undefined) {
      o5 = /(.*)\/js\//.exec(t)[1];
    } else { o5 = g['filesFolder']; }
    if (l7) {
      if (m6.substr(m6.length - 3) === '.js') { j9 = o5 + '/js/' + m6; } else {
        j9 = o5 + '/assets/' + m6;
      }
    } else { j9 = null; }
    if (l1) { i2 = o5 + '/assets/' + (i5 ? '_.bin' : ''); } else { i2 = null; }
    if (g === null || g === undefined || g['backgroundColor'] === null || g['backgroundColor'] === undefined) {
      p4 = -1;
    } else {
      j4 = parseInt(g['backgroundColor'].substr(1, 2), 16);
      j3 = parseInt(g['backgroundColor'].substr(3, 2), 16);
      q4 = parseInt(g['backgroundColor'].substr(5, 2), 16);
      p4 = 0xFF000000 | (j4 << 16) | (j3 << 8) | q4;
    }
    if (g === null || g === undefined || g['backgroundOutsideColor'] === null || g['backgroundOutsideColor'] === undefined) {
      p5 = -16777216;
    } else {
      j4 = parseInt(g['backgroundOutsideColor'].substr(1, 2), 16);
      j3 = parseInt(g['backgroundOutsideColor'].substr(3, 2), 16);
      q4 = parseInt(g['backgroundOutsideColor'].substr(5, 2), 16);
      p5 = 0xFF000000 | (j4 << 16) | (j3 << 8) | q4;
    }
    try {
      d4.d3.r.C = _4.R.w.U.b5;
    } catch (i0) {} o2 = new d4.d3.h(canvas, [600], [400], [false], p4, p5, d, g, o5, i5, j9, i2);
    o2.F();
    a1 = {};
    a1['sendMessage'] = function (message, d) {
      return o2.W(message, d);
    };
    return a1;
  };
  d4['uninitialize'] = function () { d4.d3.h.o2.d0['uninitializeStatic'](); };
})();