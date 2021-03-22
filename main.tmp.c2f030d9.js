parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Lxxv":[function(require,module,exports) {
"use strict";function e(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw l}}}}function r(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function n(r,t,n){var o=document.getElementById("compass");null!==o?o.style.transform="rotate("+-r+"deg)":console.error("can't find #compass element");var a=document.getElementById("map");null!==a?a.style.transform="rotate("+r+"deg)":console.error("can't find #map element");var l=document.querySelectorAll(".cardinal-point > span");if(null!==l&&8===l.length){var s,c=e(l);try{for(c.s();!(s=c.n()).done;){s.value.style.transform="rotate("+r+"deg)"}}catch(m){c.e(m)}finally{c.f()}}else console.error("can't find .cardinal-point > span elements");var i=document.getElementById("wind-arrow");null!==i?i.style.transform="rotate("+t+"deg) translateY(-25%)":console.error("can't find #wind-arrow");var u=document.getElementById("wind-arrow__label");null!==u?u.style.transform="rotate("+(-t+r)+"deg)  translateY(-4em)":console.error("can't find #wind-arrow__label");var d=document.getElementById("waves-arrow");null!==d?d.style.transform="rotate("+n+"deg) translateY(-25%)":console.error("can't find #waves-arrow");var f=document.getElementById("waves-arrow__label");null!==f?f.style.transform="rotate("+(-n+r)+"deg)  translateY(4em)":console.error("can't find #waves-arrow__label")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"TvwN":[function(require,module,exports) {
"use strict";var a=e(require("./components/compass.tmp"));function e(a){return a&&a.__esModule?a:{default:a}}var n,o=1e-4,i=-52.6446239,s=5.168286;n={hours:[{airTemperature:{noaa:23.56,sg:23.56},airTemperature1000hpa:{noaa:24.21,sg:24.21},airTemperature100m:{noaa:24.26,sg:24.26},airTemperature200hpa:{noaa:-53.63,sg:-53.63},airTemperature500hpa:{noaa:-5.15,sg:-5.15},airTemperature800hpa:{noaa:16.35,sg:16.35},airTemperature80m:{noaa:24.28,sg:24.28},cloudCover:{noaa:100,sg:100},currentDirection:{meto:159.27,sg:159.27},currentSpeed:{meto:.04,sg:.04},gust:{noaa:8.3,sg:8.3},humidity:{noaa:86,sg:86},iceCover:{noaa:0,sg:0},precipitation:{noaa:.07,sg:.07},pressure:{noaa:1011.61,sg:1011.61},seaLevel:{meto:.06,sg:.06},secondarySwellDirection:{noaa:12.07,sg:12.07},secondarySwellHeight:{noaa:.37,sg:.37},secondarySwellPeriod:{noaa:15.79,sg:15.79},snowDepth:{noaa:0,sg:0},swellDirection:{icon:38.21,meteo:350.51,noaa:6.52,sg:350.51},swellHeight:{icon:1.24,meteo:1.05,noaa:.49,sg:1.05},swellPeriod:{icon:7.36,meteo:12.63,noaa:13.32,sg:12.63},time:"2021-01-28T00:00:00+00:00",visibility:{noaa:24.14,sg:24.14},waterTemperature:{meto:27.63,noaa:22.96,sg:27.63},waveDirection:{icon:38.22,meteo:25.76,noaa:56.49,sg:25.76},waveHeight:{icon:1.24,meteo:1.79,noaa:1.78,sg:1.79},wavePeriod:{icon:7.33,meteo:5.39,noaa:7.66,sg:5.39},windDirection:{icon:42.63,noaa:36.79,sg:42.63},windDirection1000hpa:{noaa:89.93,sg:89.93},windDirection100m:{noaa:89.93,sg:89.93},windDirection200hpa:{noaa:269.82,sg:269.82},windDirection20m:{noaa:89.92,sg:89.92},windDirection30m:{noaa:89.92,sg:89.92},windDirection40m:{noaa:89.92,sg:89.92},windDirection500hpa:{noaa:270.02,sg:270.02},windDirection50m:{noaa:89.92,sg:89.92},windDirection800hpa:{noaa:89.95,sg:89.95},windDirection80m:{noaa:89.93,sg:89.93},windSpeed:{icon:3.39,noaa:3.04,sg:3.39},windSpeed1000hpa:{noaa:3.89,sg:3.89},windSpeed100m:{noaa:4.24,sg:4.24},windSpeed200hpa:{noaa:2.84,sg:2.84},windSpeed20m:{noaa:2.4,sg:2.4},windSpeed30m:{noaa:2.47,sg:2.47},windSpeed40m:{noaa:2.76,sg:2.76},windSpeed500hpa:{noaa:.77,sg:.77},windSpeed50m:{noaa:3.04,sg:3.04},windSpeed800hpa:{noaa:5.02,sg:5.02},windSpeed80m:{noaa:3.88,sg:3.88},windWaveDirection:{icon:40.62,meteo:57.91,noaa:50.14,sg:57.91},windWaveHeight:{icon:.09,meteo:.84,noaa:1.65,sg:.84},windWavePeriod:{icon:1.61,meteo:3.55,noaa:7.66,sg:3.55}}]},mapboxgl.accessToken="pk.eyJ1Ijoic2hhbWFya2luIiwiYSI6ImNra2d2aGxydjAzYTUyb21tY3IzazNzamkifQ.lahFmUNO07-YoSdAFi0ZSA";var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/shamarkin/ckkgs8xvm0nyn17pdo4splpqe",center:[i,s],zoom:12,maxZoom:14.5,maxBounds:[[i-.5,s-.5],[i+.5,s+.5]]});t.dragPan.disable(),t.on("moveend",function(){console.log();var a=t.getCenter();Math.abs(a.lng-i)>o&&Math.abs(a.lat-s)>o&&t.setCenter([i,s])}),t.on("move",function(){(0,a.default)(t.getBearing(),52,68)}),(0,a.default)(t.getBearing(),52,68);
},{"./components/compass.tmp":"Lxxv"}]},{},["TvwN"], null)
//# sourceMappingURL=main.tmp.c2f030d9.js.map