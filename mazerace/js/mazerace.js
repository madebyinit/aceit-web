(function(){var d3={c1:{b0:{}},v:{},display:{b3:{},font:{},A:{},O:{},b1:{}},c2:{},b2:{},c0:{},Y:{},x:{b7:{}},W:{},w:{},d1:{b4:{},A:{O:{}},input:{},Y:{},W:{},M:{}},e:{},M:{}};
var X={_2:{o:{l:{m:{},e:{},g:{}},s:{m:{},g:{}}}}};window['nogic']=d3;var currentScript=document.currentScript;
var e8=(function(){var b8;var e8;var d7;e8=[];b8=document.getElementsByTagName('script');for(d7=0;d7<b8.length;
d7++){e8.push(b8[d7]);}return e8;})();d3.d1.d=function(canvas,k8,i8,d0,q1,p8,b,c,o1,i4,j8,i0){d3.d1.d.o0=this;
this.b=b;if(this.b==null||this.b===undefined)this.b={};this.c=c;if(this.c==null||this.c===undefined)this.c={};
canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight;this.canvas=canvas;this.p9=canvas.getContext('2d');
canvas.setAttribute('tabIndex',0);this.k8=k8;this.i8=i8;this.d0=d0;this.q1=q1;this.p8=p8;this.l9='rgba('+((q1>>>16)&0xFF)+','+((q1>>>8)&0xFF)+','+(q1&0xFF)+','+(((q1>>>24)&0xFF)/0xFF)+')';
this.l8='rgba('+((p8>>>16)&0xFF)+','+((p8>>>8)&0xFF)+','+(p8&0xFF)+','+(((p8>>>24)&0xFF)/0xFF)+')';this.k3(canvas.clientWidth,canvas.clientHeight);
this.h1=canvas.width;this.f5=canvas.height;this.l5=canvas.clientWidth;this.j9=canvas.clientHeight;this.m1(k8[this.e4],i8[this.e4],canvas.width,canvas.height,canvas.clientWidth,canvas.clientHeight);
this.o1=o1;this.i4=i4;this.j8=j8;this.i0=i0;};d3.d1.d.prototype.k3=function(o9,p6){var a7;var i9,j2;var h2;
var d7;a7=Number.POSITIVE_INFINITY;for(d7=0;d7<this.k8.length;d7++){i9=o9/this.k8[d7];j2=p6/this.i8[d7];
if(i9<j2){h2=p6/(this.i8[d7]*i9);}else{h2=o9/(this.k8[d7]*j2);}if(h2<a7){this.e4=d7;a7=h2;}}};d3.d1.d.prototype.m1=function(width,height,h1,f5,o9,p6){var i9,j2,scale,q6,n9;
var _8,m5;i9=o9/h1;j2=p6/f5;_8=new d3.d1.d.o2();_8.scale(i9,j2);m5=_8.e5();i9=o9/width;j2=p6/height;scale=Math.min(i9,j2);
q6=(o9-scale*width)/2;n9=(p6-scale*height)/2;this.g6=new d3.d1.d.o2();this.g6.translate(q6,n9);this.g6.scale(scale,scale);
this.b9=this.g6.e5();this.e0=this.g6.D();this.e0.B(m5);this.t=this.e0.e5();};d3.d1.d.prototype.K=function(){if(!this.I())return;
this._4();this.n();};d3.d1.d.prototype.I=function(){if(d3.d1.d.E()){alert('Internet Explorer 9 or below is not supported, please update to version 10 or above.');
return false;}if(this.c['allowRunInAndroidDefaultBrowser']==false){if(d3.d1.d.p()){alert('The default browser on Android is not supported, please download another browser such as Chrome, Firefox or Opera from Play Store.');
return false;}}try{new ArrayBuffer(0);}catch(h8){alert('This browser is not supported. Please use the latest version of Internet Explorer, Firefox, Chrome, Safari, or Opera.');
}return true;};d3.d1.d.E=function(){var a4;a4=/\bMSIE\b\s*(\d+)\.\d+\b/.exec(navigator.userAgent);return a4!=null&&a4[1]<=9;
};d3.d1.d.p=function(){if(/\bSamsung\b/i.test(navigator.userAgent))return true;if(!/\bAndroid\b/.test(navigator.userAgent))return false;
if(/\bChrome\b/.test(navigator.userAgent))return false;if(/\bFirefox\b/.test(navigator.userAgent))return false;
return true;};d3.d1.d.prototype._4=function(){if(document.location.href.substr(0,4)=='http')return true;
alert('Loading from the local computer may or may not work, depending on the browser you are using and the security settings. If there are any problems, try using another web browser or loading from a web server.');
};d3.d1.d.prototype.n=function(){var l3=this;this.p9.save();this.p9.fillStyle=this.d0[this.e4]?this.l8:this.l9;
this.p9.fillRect(0,0,this.canvas.width,this.canvas.height);this.p9.restore();this.f();};d3.d1.d.prototype.f=function(){if(!this.i4){this.N();
}else{this.V();}};d3.d1.d.prototype.N=function(){var d4;if(this.i0==null){this.q4(false,d4);return;}d4=new Image();
d4.crossOrigin='Anonymous';d4.onload=d3.d1.d.m6;d4.onerror=d3.d1.d.g3;d4.onabort=d3.d1.d.g3;d4.src=this.i0;
};d3.d1.d.prototype.V=function(){var d2;if(this.i0==null){this.q4(false,null);return;}try{d2=new XMLHttpRequest();
}catch(h8){d2=new ActiveXObject("Msxml2.XMLHTTP");}d2.open("GET",this.i0,true);d2.responseType='arraybuffer';
d2.onreadystatechange=d3.d1.d.R;d2.send(null);};d3.d1.d.R=function(){var d2=this;if(d2.readyState!=4)return;
d3.d1.d.o0.T(d2);};d3.d1.d.prototype.T=function(d2){var d6=[110,111,103,105,99];var d5;var g2;var k4;var m9;
if(d2.response==null){this.q4(false,null);return;}d5=new Uint8Array(d2.response);g2=d3.d1.d.f6(d5,d6);
if(g2.length==0){this.q4(false,null);return;}k4='image/png';m9=new Image();m9.onload=d3.d1.d.m6;m9.onerror=d3.d1.d.g3;
m9.onabort=d3.d1.d.g3;m9.src='data:'+k4+';base64,'+this.y(d5,g2[0][2],g2[0][3],d6);};d3.d1.d.f6=function(d5,d6){var a8;
var i3;var l2,a1,_9,n3;a8=[];i3=0;while(i3<d5.length-1){l2=d3.d1.d._7(d5,i3++,1,d6);a1=d3.d1.d._7(d5,i3++,1,d6);
_9=d3.d1.d._7(d5,i3,4,d6);i3+=4;n3=d3.d1.d.r(d5,i3,a1,d6);i3+=a1;a8.push([l2,n3,i3,_9]);i3+=_9;}return a8;
};d3.d1.d.m6=function(){var d4=this;d3.d1.d.o0.q4(true,d4);};d3.d1.d.g3=function(){var d4=this;d3.d1.d.o0.q4(false,d4);
};d3.d1.d.prototype.q4=function(z,d4){var l3=this;if(z&&d4!=null&&d4.width>0&&d4.height>0){this.a0=d4;
this.m4();this.q=setInterval(d3.d1.d.C,1);}if(this.j8!=null){this.l4();}else{this.c4=d3.d1.U;this.c4['preloadAssets'](this.o1,this.i4,this.canvas,this.k8,this.i8,this.d0,this.q1,this.p8,this.b,this.c,d3.d1.d.f6,d3.d1.d.j7.q2,d3.d1.d.a9);
}};d3.d1.d.prototype.m4=function(){this.p9.save();this.p9.transform(this.e0.f1,this.e0.f3,this.e0.f2,this.e0.f0,this.e0.q0,this.e0.p4);
this.p9.translate((this.k8[this.e4]-this.a0.width)/2,(this.i8[this.e4]-this.a0.height)/2);this.p9.drawImage(this.a0,0,0);
this.p9.restore();};d3.d1.d.C=function(){d3.d1.d.o0._3();};d3.d1.d.prototype._3=function(){if(this.canvas.width==this.h1&&this.canvas.height==this.f5&&this.canvas.clientWidth==this.l5&&this.canvas.clientHeight==this.j9)return;
this.k3(this.canvas.clientWidth,this.canvas.clientHeight);this.p9.save();this.p9.fillStyle=this.d0[this.e4]?this.l8:this.l9;
this.p9.fillRect(0,0,this.canvas.width,this.canvas.height);this.p9.restore();this.m1(this.k8[this.e4],this.i8[this.e4],this.canvas.width,this.canvas.height,this.canvas.clientWidth,this.canvas.clientHeight);
this.m4();this.h1=this.canvas.width;this.f5=this.canvas.height;this.l5=this.canvas.clientWidth;this.j9=this.canvas.clientHeight;
};d3.d1.d.prototype.l4=function(){var l3=this;var d2;try{d2=new XMLHttpRequest();}catch(h8){d2=new ActiveXObject("Msxml2.XMLHTTP");
}d2.open("GET",this.j8,true);if(this.j8.substr(this.j8.length-3)=='.js'){d2.responseType='text';d2.onreadystatechange=d3.d1.d.F;
}else{d2.responseType='arraybuffer';d2.onreadystatechange=d3.d1.d.J;}d2.send(null);};d3.d1.d.F=function(){var d2=this;
if(d2.readyState!=4)return;d3.d1.d.o0._0(d2);};d3.d1.d.prototype._0=function(d2){this.c4=window.eval(d2.responseText);
this.c4['preloadAssets'](this.o1,this.i4,this.canvas,this.k8,this.i8,this.d0,this.q1,this.p8,this.b,this.c,d3.d1.d.f6,d3.d1.d.j7.q2,d3.d1.d.a9);
};d3.d1.d.J=function(){var d2=this;if(d2.readyState!=4)return;d3.d1.d.o0.k(d2);};d3.d1.d.prototype.k=function(d2){var d6=[110,111,103,105,99];
var response;var d5;var k9;response=d2.response;if(response==null){this.l4();return;}d5=new Uint8Array(response);
k9=d3.d1.d.j7.q2(d5,0,d5.length,d6,0);this.c4=window.eval(k9);this.c4['preloadAssets'](this.o1,this.i4,this.canvas,this.k8,this.i8,this.d0,this.q1,this.p8,this.b,this.c,d3.d1.d.f6,d3.d1.d.j7.q2,d3.d1.d.a9);
};d3.d1.d._7=function(a6,index,e9,d6){var value;var d7;value=0;for(d7=0;d7<e9;d7++){value<<=8;value|=(a6[index+d7]^d6[(index+d7)%d6.length]);
}return value;};d3.d1.d.r=function(a6,index,e9,d6){var d5;var d7;d5=[];for(d7=0;d7<e9;d7++){d5[d7]=a6[index+d7]^d6[(index+d7)%d6.length];
}return d3.d1.d.i(d5,0,e9);};d3.d1.d.a9=function(){d3.d1.d.o0.L();};d3.d1.d.prototype.L=function(){clearInterval(this.q);
};d3.d1.d.prototype.Q=function(message,b){return this.c4['sendMessage'](message,b);};d3.d1.d.i=function(d5,g0,length){var f9='';
var j1,d9,o7;var charCode;var d7;for(d7=g0;d7<g0+length;d7++){j1=d5[d7];if(j1>=0xE0){d9=d5[++d7];o7=d5[++d7];
charCode=((j1&0xF)<<12)|((d9&0x3F)<<6)|(o7&0x3F);f9+=String.fromCharCode(charCode);}else if(j1>0x7F){d9=d5[++d7];
charCode=((j1&0x1F)<<6)|(d9&0x3F);f9+=String.fromCharCode(charCode);}else{f9+=String.fromCharCode(j1);
}}return f9;};d3.d1.d.prototype.y=function(d5,g0,length,d6){if(d6===undefined)d6=[0];var i5=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];
var n8;var j1,d9,o7;var d7;n8='';for(d7=g0;d7<g0+length;d7+=3){j1=d5[d7]^d6[d7%d6.length];d9=d7+1<g0+length?(d5[d7+1]^d6[(d7+1)%d6.length]):0;
o7=d7+2<g0+length?(d5[d7+2]^d6[(d7+2)%d6.length]):0;n8+=i5[j1>>2];n8+=i5[((j1&0x3)<<4)|(d9>>4)];n8+=d7+1<g0+length?i5[((d9&0xF)<<2)|(o7>>6)]:'=';
n8+=d7+2<g0+length?i5[o7&0x3F]:'=';}return n8;};d3.d1.d.o2=function(o4,q5,h9,h5,c6,c5){if(o4===undefined)o4=1;
if(q5===undefined)q5=0;if(h9===undefined)h9=0;if(h5===undefined)h5=1;if(c6===undefined)c6=0;if(c5===undefined)c5=0;
this.f1=o4;this.f3=q5;this.f2=h9;this.f0=h5;this.q0=c6;this.p4=c5;return this;};d3.d1.d.o2.prototype.m0=function(a){var o4=this.f1*a.f1+this.f2*a.f3;
var q5=this.f3*a.f1+this.f0*a.f3;var h9=this.f1*a.f2+this.f2*a.f0;var h5=this.f3*a.f2+this.f0*a.f0;var c6=this.f1*a.q0+this.f2*a.p4+this.q0;
var c5=this.f3*a.q0+this.f0*a.p4+this.p4;this.f1=o4;this.f3=q5;this.f2=h9;this.f0=h5;this.q0=c6;this.p4=c5;
};d3.d1.d.o2.prototype.B=function(a){var o4=a.f1*this.f1+a.f2*this.f3;var q5=a.f3*this.f1+a.f0*this.f3;
var h9=a.f1*this.f2+a.f2*this.f0;var h5=a.f3*this.f2+a.f0*this.f0;var c6=a.f1*this.q0+a.f2*this.p4+a.q0;
var c5=a.f3*this.q0+a.f0*this.p4+a.p4;this.f1=o4;this.f3=q5;this.f2=h9;this.f0=h5;this.q0=c6;this.p4=c5;
};d3.d1.d.o2.prototype.translate=function(q6,n9){this.m0(new d3.d1.d.o2(1,0,0,1,q6,n9));};d3.d1.d.o2.prototype.scale=function(i9,j2){var a=new d3.d1.d.o2(i9,0,0,j2,0,0);
this.m0(a);};d3.d1.d.o2.prototype.e5=function(){var c3=this.f1*this.f0-this.f3*this.f2;var e6;if(c3==0)return null;
e6=new d3.d1.d.o2();e6.f1=this.f0/c3;e6.f3=-this.f3/c3;e6.f2=-this.f2/c3;e6.f0=this.f1/c3;e6.q0=(this.f2*this.p4-this.f0*this.q0)/c3;
e6.p4=(this.f3*this.q0-this.f1*this.p4)/c3;return e6;};d3.d1.d.o2.prototype.D=function(){return new d3.d1.d.o2(this.f1,this.f3,this.f2,this.f0,this.q0,this.p4);
};d3.d1.d.j7=function(){};d3.d1.d.j7.l7=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0];
d3.d1.d.j7.i6=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99];d3.d1.d.j7.m7=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
d3.d1.d.j7.n5=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];d3.d1.d.j7.l6=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
d3.d1.d.j7.l1=function(){this.next=null;this.g5=null;};d3.d1.d.j7.m3=function(){this.h8=0;this.q5=0;
this.n2=0;this._=null;};d3.d1.d.j7.n1=function(q5,n2,a3,h5,h8,e3){var o4;var h9=new Array(16+1);var h0;var q3;
var j4;var h6;var d7;var d8;var i2;var j0=new Array(16+1);var o3;var q8;var i1;var j6=new d3.d1.d.j7.m3();var c7=new Array(16);
var g8=new Array(288);var a5;var q6=new Array(16+1);var n7;var n9;var g1;var g9;var c8;this.status=0;this.e2=null;
this.h4=0;c8=this.e2=null;for(d7=0;d7<h9.length;d7++)h9[d7]=0;for(d7=0;d7<j0.length;d7++)j0[d7]=0;for(d7=0;
d7<c7.length;d7++)c7[d7]=null;for(d7=0;d7<g8.length;d7++)g8[d7]=0;for(d7=0;d7<q6.length;d7++)q6[d7]=0;
h0=n2>256?q5[256]:16;o3=q5;q8=0;d7=n2;do{h9[o3[q8]]++;q8++;}while(--d7>0);if(h9[0]==n2){this.e2=null;
this.h4=0;this.status=0;return;}for(d8=1;d8<=16;d8++){if(h9[d8]!=0)break;}i2=d8;if(e3<d8)e3=d8;for(d7=16;
d7!=0;d7--){if(h9[d7]!=0)break;}j4=d7;if(e3>d7)e3=d7;for(n9=1<<d8;d8<d7;d8++,n9<<=1){if((n9-=h9[d8])<0){this.status=2;
this.h4=e3;return;}}if((n9-=h9[d7])<0){this.status=2;this.h4=e3;return;}h9[d7]+=n9;q6[1]=d8=0;o3=h9;
q8=1;n7=2;while(--d7>0){q6[n7++]=(d8+=o3[q8++]);}o3=q5;q8=0;d7=0;do{if((d8=o3[q8++])!=0)g8[q6[d8]++]=d7;
}while(++d7<n2);n2=q6[j4];q6[0]=d7=0;o3=g8;q8=0;h6=-1;a5=j0[0]=0;i1=null;g1=0;for(;i2<=j4;i2++){o4=h9[i2];
while(o4-->0){while(i2>a5+j0[1+h6]){a5+=j0[1+h6];h6++;g1=(g1=j4-a5)>e3?e3:g1;if((q3=1<<(d8=i2-a5))>o4+1){q3-=o4+1;
n7=i2;while(++d8<g1){if((q3<<=1)<=h9[++n7])break;q3-=h9[n7];}}if(a5+d8>h0&&a5<h0)d8=h0-a5;g1=1<<d8;j0[1+h6]=d8;
i1=new Array(g1);for(g9=0;g9<g1;g9++){i1[g9]=new d3.d1.d.j7.m3();}if(c8==null){c8=this.e2=new d3.d1.d.j7.l1();
}else{c8=c8.next=new d3.d1.d.j7.l1();}c8.next=null;c8.g5=i1;c7[h6]=i1;if(h6>0){q6[h6]=d7;j6.q5=j0[h6];
j6.h8=16+d8;j6._=i1;d8=(d7&((1<<a5)-1))>>(a5-j0[h6]);c7[h6-1][d8].h8=j6.h8;c7[h6-1][d8].q5=j6.q5;c7[h6-1][d8].n2=j6.n2;
c7[h6-1][d8]._=j6._;}}j6.q5=i2-a5;if(q8>=n2){j6.h8=99;}else if(o3[q8]<a3){j6.h8=(o3[q8]<256?16:15);j6.n2=o3[q8++];
}else{j6.h8=h8[o3[q8]-a3];j6.n2=h5[o3[q8++]-a3];}q3=1<<(i2-a5);for(d8=d7>>a5;d8<g1;d8+=q3){i1[d8].h8=j6.h8;
i1[d8].q5=j6.q5;i1[d8].n2=j6.n2;i1[d8]._=j6._;}for(d8=1<<(i2-1);(d7&d8)!=0;d8>>=1){d7^=d8;}d7^=d8;while((d7&((1<<a5)-1))!=q6[h6]){a5-=j0[h6];
h6--;}}}this.h4=j0[1];this.status=((n9!=0&&j4!=1)?1:0);};d3.d1.d.j7.q2=function(d5,index,length,d6,c9){return new d3.d1.d.j7().q2(d5,index,length,d6,c9);
};d3.d1.d.j7.prototype.q2=function(d5,index,length,d6,c9){if(d6===undefined)d6=[0];if(c9===undefined)c9=0;
var l0;var n8;var k5;var p5;var p7;var h3;var d7,d8;this.H=new Array(2*32768);this.k6=0;this.g7=0;this.n0=0;
this.method=-1;this.g4=false;this.o5=this.j5=0;this.f7=null;this.e1=null;this.d5=d5;this.i7=index;this.j=index+length;
this.d6=d6;this.c9=c9;l0=String.fromCodePoint?String.fromCodePoint:d3.d1.d.j7.fromCodePoint;n8='';while((k5=this.n4())!==undefined){if((k5&0x80)==0){n8+=String.fromCharCode(k5);
}else{p5=1;for(p7=0x40;p7>0;p7>>>=1){if((k5&p7)==0)break;p5++;}p7=0xFF>>>(p5+1);h3=(k5&p7)<<((p5-1)*6);
for(d8=1;d8<p5;d8++){k5=this.n4();h3|=(k5&0x3F)<<((p5-1-d8)*6);}n8+=l0(h3);}}this.d5=null;return n8;};
d3.d1.d.j7.prototype.n4=function(){var k5;var e7;while(true){if(this.g4&&this.method==-1)return undefined;
if(this.o5>0){if(this.method!=0){this.o5--;this.j5&=0x7FFF;this.k6&=0x7FFF;k5=this.H[this.k6++]=this.H[this.j5++];
}else{this.o5--;this.k6&=0x7FFF;this.h7(8);k5=this.H[this.k6++]=this.f4(8);this.j3(8);if(this.o5==0)this.method=-1;
}return k5;}if(this.method==-1){if(this.g4)break;this.h7(1);if(this.f4(1)!=0)this.g4=true;this.j3(1);
this.h7(2);this.method=this.f4(2);this.j3(2);this.e1=null;this.o5=0;}switch(this.method){case 0:e7=this.Z();
break;case 1:if(this.e1!=null){e7=this.f8();}else{e7=this._1();}break;case 2:if(this.e1!=null){e7=this.f8();
}else{e7=this.h();}break;default:e7=-1;break;}if(e7==-1){if(this.g4)return undefined;return undefined;
}if(e7>0)break;}return this.a2;};d3.d1.d.j7.prototype.h7=function(p1){while(this.n0<p1){this.g7|=this.G()<<this.n0;
this.n0+=8;}};d3.d1.d.j7.prototype.G=function(){if(this.j==this.i7)return-1;return this.d5[this.i7++]^this.d6[(this.c9++)%this.d6.length];
};d3.d1.d.j7.prototype.f4=function(p1){return this.g7&((1<<p1)-1);};d3.d1.d.j7.prototype.j3=function(p1){this.g7>>=p1;
this.n0-=p1;};d3.d1.d.j7.prototype.Z=function(){var e9;this.j3(this.n0&7);this.h7(16);e9=this.f4(16);
this.j3(16);this.h7(16);if(e9!=((~this.g7)&0xFFFF))return-1;this.j3(16);this.o5=e9;if(this.o5>0){this.o5--;
this.k6&=0x7FFF;this.h7(8);this.a2=this.H[this.k6++]=this.f4(8);this.j3(8);}if(this.o5==0)this.method=-1;
return 1;};d3.d1.d.j7.prototype.f8=function(){var h8;var _;while(true){this.h7(this.k7);_=this.e1.g5[this.f4(this.k7)];
h8=_.h8;while(h8>16){if(h8==99)return-1;this.j3(_.q5);h8-=16;this.h7(h8);_=_._[this.f4(h8)];h8=_.h8;
}this.j3(_.q5);if(h8==16){this.k6&=0x7FFF;this.a2=this.H[this.k6++]=_.n2;return 1;}if(h8==15)break;this.h7(h8);
this.o5=_.n2+this.f4(h8);this.j3(h8);this.h7(this.p3);_=this.k1.g5[this.f4(this.p3)];h8=_.h8;while(h8>16){if(h8==99)return-1;
this.j3(_.q5);h8-=16;this.h7(h8);_=_._[this.f4(h8)];h8=_.h8;}this.j3(_.q5);this.h7(h8);this.j5=this.k6-_.n2-this.f4(h8);
this.j3(h8);if(this.o5>0){this.o5--;this.j5&=0x7FFF;this.k6&=0x7FFF;this.a2=this.H[this.k6++]=this.H[this.j5++];
return 1;}}this.method=-1;return 0;};d3.d1.d.j7.prototype._1=function(){var d7;var q7;var h6;if(this.f7==null){q7=new Array(288);
for(d7=0;d7<144;d7++)q7[d7]=8;for(;d7<256;d7++)q7[d7]=9;for(;d7<280;d7++)q7[d7]=7;for(;d7<288;d7++)q7[d7]=8;
this.b6=7;h6=new d3.d1.d.j7.n1(q7,288,257,d3.d1.d.j7.l7,d3.d1.d.j7.i6,this.b6);if(h6.status!=0){return-1;
}this.f7=h6.e2;this.b6=h6.h4;for(d7=0;d7<30;d7++)q7[d7]=5;this._6=5;h6=new d3.d1.d.j7.n1(q7,30,0,d3.d1.d.j7.m7,d3.d1.d.j7.n5,this._6);
if(h6.status>1){this.f7=null;return-1;}this.S=h6.e2;this._6=h6.h4;}this.e1=this.f7;this.k1=this.S;this.k7=this.b6;
this.p3=this._6;return this.f8();};d3.d1.d.j7.prototype.h=function(){var d7;var d8;var q7;var n2;var _;var m2;
var p0;var m8;var o6=new Array(286+30);var h6;for(d7=0;d7<o6.length;d7++)o6[d7]=0;this.h7(5);p0=257+this.f4(5);
this.j3(5);this.h7(5);m8=1+this.f4(5);this.j3(5);this.h7(4);m2=4+this.f4(4);this.j3(4);if(p0>286||m8>30)return-1;
for(d8=0;d8<m2;d8++){this.h7(3);o6[d3.d1.d.j7.l6[d8]]=this.f4(3);this.j3(3);}for(;d8<19;d8++){o6[d3.d1.d.j7.l6[d8]]=0;
}this.k7=7;h6=new d3.d1.d.j7.n1(o6,19,19,null,null,this.k7);if(h6.status!=0)return-1;this.e1=h6.e2;this.k7=h6.h4;
n2=p0+m8;d7=q7=0;while(d7<n2){this.h7(this.k7);_=this.e1.g5[this.f4(this.k7)];d8=_.q5;this.j3(d8);d8=_.n2;
if(d8<16){o6[d7++]=q7=d8;}else if(d8==16){this.h7(2);d8=3+this.f4(2);this.j3(2);if(d7+d8>n2)return-1;
while(d8-->0){o6[d7++]=q7;}}else if(d8==17){this.h7(3);d8=3+this.f4(3);this.j3(3);if(d7+d8>n2)return-1;
while(d8-->0){o6[d7++]=0;}q7=0;}else{this.h7(7);d8=11+this.f4(7);this.j3(7);if(d7+d8>n2)return-1;while(d8-->0){o6[d7++]=0;
}q7=0;}}this.k7=9;h6=new d3.d1.d.j7.n1(o6,p0,257,d3.d1.d.j7.l7,d3.d1.d.j7.i6,this.k7);if(this.k7==0)h6.status=1;
if(h6.status!=0)return-1;this.e1=h6.e2;this.k7=h6.h4;for(d7=0;d7<m8;d7++){o6[d7]=o6[d7+p0];}this.p3=6;
h6=new d3.d1.d.j7.n1(o6,m8,0,d3.d1.d.j7.m7,d3.d1.d.j7.n5,this.p3);this.k1=h6.e2;this.p3=h6.h4;if(this.p3==0&&p0>257)return-1;
if(h6.status!=0)return-1;return this.f8();};d3.d1.d.j7.fromCodePoint=function(h3){if(h3<=0xFFFF)return String.fromCharCode(h3);
h3-=0x10000;return String.fromCharCode((h3>>10)+0xD800,(h3%0x400)+0xDC00);};d3['initialize']=function(P,b,c){var o8;
var canvas;var i4;var k2;var n6;var k0;var p2;var o1;var j8;var i0;var q1,p8;var j6,j4,q5;var o0;var _5;var d7;o8=document.createElement('div');
o8.style.position='relative';o8.style.width='100%';o8.style.height='100%';P.appendChild(o8);canvas=document.createElement('canvas');
canvas.style.width='100%';canvas.style.height='100%';canvas.style.outline='none';o8.appendChild(canvas);
i4=true;k2=true;n6='__.bin';k0=false;if(c==null||c===undefined||c['filesFolder']==null||c['filesFolder']===undefined){p2=currentScript;
if(p2==null){for(d7=e8.length-1;d7>=0;d7--){p2=e8[d7];if(p2.getAttribute('data-nogic-name')=='mazerace')break;
}if(d7<0)p2=e8[e8.length-1];}o1=/(.*)\/js\//.exec(p2.src)[1];}else{o1=c['filesFolder'];}if(k2){if(n6.substr(n6.length-3)=='.js'){j8=o1+'/js/'+n6;
}else{j8=o1+'/assets/'+n6;}}else{j8=null;}if(k0){i0=o1+'/assets/'+(i4?'_.bin':'');}else{i0=null;}if(c==null||c===undefined||c['backgroundColor']==null||c['backgroundColor']===undefined){q1=-1;
}else{j6=parseInt(c['backgroundColor'].substr(1,2),16);j4=parseInt(c['backgroundColor'].substr(3,2),16);
q5=parseInt(c['backgroundColor'].substr(5,2),16);q1=0xFF000000|(j6<<16)|(j4<<8)|q5;}if(c==null||c===undefined||c['backgroundOutsideColor']==null||c['backgroundOutsideColor']===undefined){p8=-16777216;
}else{j6=parseInt(c['backgroundOutsideColor'].substr(1,2),16);j4=parseInt(c['backgroundOutsideColor'].substr(3,2),16);
q5=parseInt(c['backgroundOutsideColor'].substr(5,2),16);p8=0xFF000000|(j6<<16)|(j4<<8)|q5;}try{d3.d1.U.u=X._2.o.l.b5;
}catch(h8){}o0=new d3.d1.d(canvas,[600],[400],[false],q1,p8,b,c,o1,i4,j8,i0);o0.K();_5={};_5['sendMessage']=function(message,b){return o0.Q(message,b);
};return _5;};d3['uninitialize']=function(){d3.d1.d.o0.c4['uninitializeStatic']();};})();