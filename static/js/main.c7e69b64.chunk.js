(this["webpackJsonpreact-cryptodash"]=this["webpackJsonpreact-cryptodash"]||[]).push([[0],{32:function(e,t,n){e.exports=n(49)},38:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n.n(c),l=(n(37),n(38),n(3)),i=n(4),u=n(6),s=n(5),f=n(2),p=n(8),m=n(9),v=n.n(m),b=n(11),d=n(7),h=n(10),O=n.n(h),g=n(19),j=n.n(g);function y(e){return Number(e.toString().slice(0,7))}var C=function(e){var t=Object(r.useState)(e||"dashboard"),n=Object(d.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),l=Object(d.a)(o,2),i=l[0],u=l[1],s=Object(r.useState)([]),f=Object(d.a)(s,2),p=f[0],m=f[1],h=Object(r.useState)([]),g=Object(d.a)(h,2),y=g[0],C=g[1],E=Object(r.useState)("months"),x=Object(d.a)(E,2),k=x[0],S=x[1],w=function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.length)){e.next=16;break}return e.prev=3,e.next=6,O.a.priceFull(t[r],"USD");case 6:a=e.sent,n.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Fetch price error: ".concat(e.t0));case 13:r++,e.next=2;break;case 16:c=n.filter((function(e){return t=e,!(0===Object.keys(t).length);var t})),m(c);case 18:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),F=Object(r.useCallback)(function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C([]),n=[],r=10;case 3:if(!(r>=1)){e.next=17;break}return e.prev=4,e.next=7,O.a.priceHistorical(t,"USD",j()().subtract(r,k).toDate());case 7:a=e.sent,n.push(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Fetch price error: ".concat(e.t0));case 14:r--,e.next=3;break;case 17:c=[{name:t,data:n.map((function(e,t){return[j()().subtract(10-t,k).valueOf(),e.USD]}))}],C(c);case 19:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[k]),A=function(){u(!0),c("settings")};return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));e?i||"dashboard"!==a||(w(e.favorites),F(e.currentFavCoin)):A()}),[F,i,a]),{page:a,prices:p,historicalPrices:y,firstVisit:i,timeInterval:k,setPage:c,saveSettings:A,confirmFavorites:function(e){localStorage.setItem("cryptoDash",JSON.stringify({favorites:e,currentFavCoin:e[0]})),u(!1),c("dashboard")},fetchHistorical:F,handleChangeOnChartSelect:function(e){S(e.target.value)}}};var E=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(d.a)(c,2);return{languageVisible:n,setLanguageVisible:a,themeVisible:o[0],setThemeVisible:o[1],toggleMenuVisible:function(e,t){t(!e)}}},x=a.a.createContext();function k(e){var t=C(),n=E(),r=x.Provider;return a.a.createElement(r,{value:Object(p.a)(Object(p.a)({},t),n)},e.children)}var S=x.Consumer,w=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(S,null,(function(t){var n=t.page,r=e.props,c=r.name,o=r.children;return n===c?a.a.createElement("div",{className:"content"},o):null}))}}]),n}(r.Component),F=n(1);var A="background-color: ".concat("#061a44",";"),z="background-color: ".concat("#010e2c",";"),D=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b",";")),B="box-shadow: 0px 0px 4px 2px #5fff17;";function P(){var e=Object(f.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return P=function(){return e},e}function R(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return R=function(){return e},e}function N(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return N=function(){return e},e}function V(){var e=Object(f.a)(["\n  position: relative;\n  padding: 10px;\n  ","\n  ","\n  transition: all 0.2s;\n"]);return V=function(){return e},e}var L=F.default.div(V(),D,A),I=Object(F.default)(L)(N(),B),H=Object(F.default)(L)(R(),"box-shadow: 0px 0px 2px 2px #e41111;"),U=Object(F.default)(L)(P()),M=n(21),T=n(15),G=n.n(T);O.a.setApiKey("ab4c13e647046a6f66904bc40fc89e06f6309fbfae3299654fce359eaf895548");var W=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),o=Object(d.a)(c,2),l=o[0],i=o[1],u=Object(r.useState)(),s=Object(d.a)(u,2),f=s[0],m=s[1],h=Object(r.useState)(["BTC","ETH","XMR","DOGE"]),g=Object(d.a)(h,2),j=g[0],y=g[1],C=Object(r.useState)(j[0]),E=Object(d.a)(C,2),x=E[0],k=E[1],S=function(){var e=Object(b.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.coinList();case 3:t=e.sent,n=t.Data,r=t.BaseImageUrl,a(n),i(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Fetch coins error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));e&&(y(e.favorites),k(e.currentFavCoin))}(),S()}),[]),{coins:n,coinBaseUrl:l,favoriteCoins:j,filteredCoins:f,currentFavCoin:x,addCoin:function(e){var t=Object(M.a)(j);j.length<10&&(t.push(e),y(t))},removeCoin:function(e){var t=Object(M.a)(j);y(G.a.pull(t,e))},setFilteredCoins:m,isInFavoriteCoins:function(e){return j.includes(e)},setCurrentFavorite:function(e){k(e);var t=JSON.parse(localStorage.getItem("cryptoDash"));localStorage.setItem("cryptoDash",JSON.stringify(Object(p.a)(Object(p.a)({},t),{},{currentFavCoin:e})))}}},J=a.a.createContext();function K(e){var t=W(),n=J.Provider;return a.a.createElement(n,{value:Object(p.a)({},t)},e.children)}function X(){var e=Object(f.a)([""]);return X=function(){return e},e}function _(){var e=Object(f.a)([""]);return _=function(){return e},e}function $(){var e=Object(f.a)(["\n  text-align: center;\n"]);return $=function(){return e},e}var q=Object(F.default)(L)($()),Q=F.default.h2(_()),Y=F.default.img(X()),Z=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(J.Consumer,null,(function(e){var t=e.coins,n=e.currentFavCoin,r=e.coinBaseUrl,c=t[n],o=c.ImageUrl,l=c.Symbol;return a.a.createElement(q,null,a.a.createElement(Q,null,t[n].CoinName),a.a.createElement(Y,{src:"".concat(r).concat(o),alt:l}))}))}}]),n}(r.Component);function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ne=a.a.createElement("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",fillOpacity:.5},a.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),re=a.a.createElement("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",fillOpacity:.5},a.a.createElement("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),ae=a.a.createElement("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"}),ce=function(e){var t=e.svgRef,n=e.title,r=te(e,["svgRef","title"]);return a.a.createElement("svg",ee({width:140,height:64,viewBox:"0 0 140 64",fill:"#fff",ref:t},r),n?a.a.createElement("title",null,n):null,ne,re,ae)},oe=a.a.forwardRef((function(e,t){return a.a.createElement(ce,ee({svgRef:t},e))})),le=(n.p,n(16)),ie=n.n(le),ue=n(28),se=n.n(ue);function fe(){var e=Object(f.a)(["\n  ","\n  ","\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #1163c9;\n  border: 1px solid;\n  cursor: pointer;\n  z-index: 1000;\n"]);return fe=function(){return e},e}var pe=F.default.select(fe(),"font-size: 1.0em;",z),me=function(e){return{title:{text:"Data Visualization"},yAxis:{title:{text:"Prices"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}},ve={colors:["#61d936"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderColor:"#cccccc",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}};function be(){var e=Object(f.a)(["\n  margin-top: 0;\n  margin-bottom: 30px;\n"]);return be=function(){return e},e}function de(){var e=Object(f.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  text-align: center;\n"]);return de=function(){return e},e}ie.a.setOptions(ve);var he=F.default.div(de()),Oe=F.default.p(be()),ge=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.timeInterval,n=e.historicalPrices,r=e.handleChangeOnChartSelect;return a.a.createElement(L,null,a.a.createElement(pe,{value:t,onChange:r},a.a.createElement("option",{value:"days"},"Days"),a.a.createElement("option",{value:"weeks"},"Weeks"),a.a.createElement("option",{value:"months"},"Months")),0===n.length?a.a.createElement(he,null,a.a.createElement(Oe,null,"Loading Historical Data..."),a.a.createElement(oe,{style:{transform:"scale(1.6)",fill:"white"}})):a.a.createElement(se.a,{highcharts:ie.a,options:me(n)}))}))}}]),n}(r.Component),je=n(29);function ye(){var e=Object(f.a)(["\n  opacity: 0;\n  justify-self: right;\n  transition: all 0.2s;\n\n  ",":hover & {\n    opacity: 1;\n    color: red;\n  }\n"]);return ye=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  font-style: italic;\n"]);return Ce=function(){return e},e}function Ee(){var e=Object(f.a)(["\n  justify-self: right;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return xe=function(){return e},e}var ke=F.default.div(xe()),Se=F.default.span(Ee()),we=F.default.span(Ce()),Fe=F.default.div(ye(),H),Ae=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.coin,n=e.topSection;return a.a.createElement(ke,null,a.a.createElement(we,null,t.CoinName),n?a.a.createElement(Fe,null,a.a.createElement(je.a,{size:"16",title:"Delete coin"})):a.a.createElement(Se,null,t.Symbol))}}]),n}(r.Component);function ze(){var e=Object(f.a)(["\n  ","\n"]);return ze=function(){return e},e}function De(){var e=Object(f.a)(["\n      color: red;\n    "]);return De=function(){return e},e}function Be(){var e=Object(f.a)(["\n  color: green;\n\n  ","\n"]);return Be=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  justify-self: left;\n"]);return Pe=function(){return e},e}function Re(){var e=Object(f.a)(["\n      pointer-events: none;\n      ","\n    "]);return Re=function(){return e},e}function Ne(){var e=Object(f.a)(["\n      display: grid;\n      gap: 6px;\n      justify-items: right;\n      grid-template-columns: repeat(3, 1fr);\n      ","\n    "]);return Ne=function(){return e},e}function Ve(){var e=Object(f.a)(["\n  ","\n\n  ","\n"]);return Ve=function(){return e},e}var Le=Object(F.default)(I)(Ve(),(function(e){return e.compact&&Object(F.css)(Ne(),"font-size: .75em;")}),(function(e){return e.currentFavCoin&&Object(F.css)(Re(),B)})),Ie=F.default.span(Pe()),He=Object(F.default)(Se)(Be(),(function(e){return e.red&&Object(F.css)(De())})),Ue=F.default.div(ze(),"font-size: 2em;"),Me=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.data,r=e.currentFavCoin,c=e.setCurrentFavorite,o=e.fetchHistorical;return a.a.createElement(Le,{currentFavCoin:r,onClick:function(){c(t),o(t)}},a.a.createElement(ke,null,a.a.createElement("span",null,t),a.a.createElement(He,{red:n.CHANGEPCT24HOUR<0},y(n.CHANGEPCT24HOUR),"%")),a.a.createElement(Ue,null,y(n.PRICE)))}}]),n}(r.Component),Te=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.data,r=e.currentFavCoin,c=e.setCurrentFavorite,o=e.fetchHistorical;return a.a.createElement(Le,{compact:!0,currentFavCoin:r,onClick:function(){c(t),o(t)}},a.a.createElement(Ie,null,t),a.a.createElement(He,{red:n.CHANGEPCT24HOUR<0},y(n.CHANGEPCT24HOUR),"%"),a.a.createElement("div",null,y(n.PRICE)))}}]),n}(r.Component),Ge=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.fetchHistorical;return a.a.createElement(J.Consumer,null,(function(t){var r=t.currentFavCoin,c=t.setCurrentFavorite,o=e.props,l=o.price,i=o.index,u=Object.keys(l)[0],s=l[u].USD;return i>=5?a.a.createElement(Te,{data:s,symbol:u,currentFavCoin:r===u,setCurrentFavorite:c,fetchHistorical:n}):a.a.createElement(Me,{data:s,symbol:u,currentFavCoin:r===u,setCurrentFavorite:c,fetchHistorical:n})}))}))}}]),n}(r.Component);function We(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-top: 40px;\n"]);return We=function(){return e},e}var Je=F.default.div(We()),Ke=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.prices;return a.a.createElement(Je,null,t.map((function(e,t){return a.a.createElement(Ge,{key:Object.keys(e)[0],price:e,index:t})})))}))}}]),n}(r.Component);function Xe(){var e=Object(f.a)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr 3fr;\n  margin-top: 30px;\n"]);return Xe=function(){return e},e}var _e=F.default.div(Xe()),$e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(w,{name:"dashboard"},a.a.createElement(Ke,null),a.a.createElement(_e,null,a.a.createElement(Z,null),a.a.createElement(ge,null)))}}]),n}(r.Component);function qe(){var e=Object(f.a)(["\n  height: 50px;\n"]);return qe=function(){return e},e}var Qe=F.default.img(qe()),Ye=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=J.Consumer;return a.a.createElement(t,null,(function(t){var n=t.coinBaseUrl,r=e.props.coin,c=r.ImageUrl,o=r.Symbol;return a.a.createElement(Qe,{src:"".concat(n).concat(c),alt:o})}))}}]),n}(r.Component),Ze=J.Consumer,et=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(t,n){var r=e.props,a=r.coin;r.topSection?n(a.Name):t(a.Name)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(Ze,null,(function(t){var n,r=t.addCoin,c=t.removeCoin,o=t.isInFavoriteCoins,l=e.props,i=l.coin,u=l.topSection;return n=u?H:o(i.Name)?U:I,a.a.createElement(n,{onClick:function(){return e.handleClick(r,c)}},a.a.createElement(Ae,{coin:i,topSection:u}),a.a.createElement(Ye,{coin:i}))}))}}]),n}(r.Component);function tt(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return tt=function(){return e},e}var nt=J.Consumer,rt=F.default.div(tt()),at=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getLowerSectionCoins",value:function(e,t){return t&&Object.keys(t)?Object.keys(t):Object.keys(e).slice(0,300)}},{key:"render",value:function(){var e=this;return a.a.createElement(nt,null,(function(t){var n=t.coins,r=t.favoriteCoins,c=t.filteredCoins,o=e.props.topSection,l=o?r:e.getLowerSectionCoins(n,c);return a.a.createElement(rt,null,l.map((function(e){return a.a.createElement(et,{key:e,coin:n[e],topSection:o})})))}))}}]),n}(r.Component);function ct(){var e=Object(f.a)(["\n  margin: 20px;\n  border: none;\n  padding: 5px;\n  color: ",";\n  background-color: transparent;\n  cursor: pointer;\n  ","\n\n  &:hover {\n    ","\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return ct=function(){return e},e}function ot(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ot=function(){return e},e}var lt=F.default.div(ot()),it=F.default.button(ct(),"#42ff3a","font-size: 1.5em;",B),ut=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=x.Consumer,t=J.Consumer;return a.a.createElement(e,null,(function(e){return a.a.createElement(t,null,(function(t){var n=t.favoriteCoins,r=e.confirmFavorites;return a.a.createElement(lt,null,a.a.createElement(it,{onClick:function(){return r(n)}},"Confirm Favorites"))}))}))}}]),n}(r.Component),st=n(31),ft=n.n(st);function pt(){var e=Object(f.a)(["\n  ","\n  ","\n  color: #1163c9;\n  border: 1px solid;\n  height: 25px;\n  place-self: center left;\n"]);return pt=function(){return e},e}function mt(){var e=Object(f.a)(["\n  margin: 0;\n"]);return mt=function(){return e},e}function vt(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return vt=function(){return e},e}var bt=J.Consumer,dt=F.default.div(vt()),ht=F.default.h2(mt()),Ot=F.default.input(pt(),z,"font-size: 1.0em;"),gt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleFilterCoins=G.a.debounce((function(e,t,n){var r=Object.keys(t),a=r.map((function(e){return t[e].CoinName})),c=r.concat(a),o=ft.a.filter(e,c,{}).map((function(e){return e.string})),l={};Object.entries(t).forEach((function(e){var t=e[0],n=e[1],r=n.CoinName;(o.includes(t)||o.includes(r))&&(l[t]=n)})),n(l)}),1e3),e}return Object(i.a)(n,[{key:"handleKeyUp",value:function(e,t,n){var r=e.target.value;if(!r)return n(null),!1;this.handleFilterCoins(r,t,n)}},{key:"render",value:function(){var e=this;return a.a.createElement(bt,null,(function(t){var n=t.coins,r=t.setFilteredCoins;return a.a.createElement(dt,null,a.a.createElement(ht,null,"Search all coins"),a.a.createElement(Ot,{onKeyUp:function(t){return e.handleKeyUp(t,n,r)}}))}))}}]),n}(r.Component);function jt(){var e=Object(f.a)(["\n  margin: 0;\n  font-weight: normal;\n  font-size: 16px;\n"]);return jt=function(){return e},e}var yt=F.default.h1(jt()),Ct=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=x.Consumer;return a.a.createElement(e,null,(function(e){return e.firstVisit?a.a.createElement(yt,null,"Welcome to CryptoDash, please select your favorite coins to begin."):null}))}}]),n}(r.Component),Et=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(w,{name:"settings"},a.a.createElement(Ct,null),a.a.createElement(at,{topSection:!0}),a.a.createElement(ut,null),a.a.createElement(gt,null),a.a.createElement(at,{topSection:!1}))}}]),n}(r.Component),xt=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.prices,r=t.firstVisit;return a.a.createElement(J.Consumer,null,(function(t){return t.coins?r||0!==n.length?e.props.children:a.a.createElement("div",null,"Loading Prices..."):a.a.createElement("div",null,"Loading Coins...")}))}))}}]),n}(r.Component);function kt(){var e=Object(f.a)(["\n  padding: 40px;\n"]);return kt=function(){return e},e}var St=F.default.div(kt());function wt(){return(wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ft(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var At=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z"}))),zt=a.a.createElement("g",null),Dt=a.a.createElement("g",null),Bt=a.a.createElement("g",null),Pt=a.a.createElement("g",null),Rt=a.a.createElement("g",null),Nt=a.a.createElement("g",null),Vt=a.a.createElement("g",null),Lt=a.a.createElement("g",null),It=a.a.createElement("g",null),Ht=a.a.createElement("g",null),Ut=a.a.createElement("g",null),Mt=a.a.createElement("g",null),Tt=a.a.createElement("g",null),Gt=a.a.createElement("g",null),Wt=a.a.createElement("g",null),Jt=function(e){var t=e.svgRef,n=e.title,r=Ft(e,["svgRef","title"]);return a.a.createElement("svg",wt({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 491.996 491.996",style:{enableBackground:"new 0 0 491.996 491.996"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,At,zt,Dt,Bt,Pt,Rt,Nt,Vt,Lt,It,Ht,Ut,Mt,Tt,Gt,Wt)},Kt=a.a.forwardRef((function(e,t){return a.a.createElement(Jt,wt({svgRef:t},e))}));n.p;function Xt(){return(Xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _t(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $t=a.a.createElement("path",{d:"m373.851562 308.296875c-1.445312-4.820313-7.390624-7.074219-13.496093-7.074219-5.945313 0-11.890625 2.253906-13.335938 7.074219l-31.011719 101.0625c-.160156.644531-.320312 1.285156-.320312 1.605469 0 5.144531 7.550781 8.675781 13.175781 8.675781 3.535157 0 6.265625-1.121094 7.070313-4.175781l6.101562-21.371094h36.796875l6.109375 21.371094c.800782 3.054687 3.53125 4.175781 7.066406 4.175781 5.625 0 13.175782-3.691406 13.175782-8.675781 0-.480469-.160156-.964844-.320313-1.605469zm-27.476562 69.40625 13.976562-49.324219 13.984376 49.324219zm0 0"}),qt=a.a.createElement("path",{d:"m456.835938 208.867188h-153.707032v-65.648438l49.953125-35.679688c3.941407-2.816406 6.28125-7.359374 6.28125-12.203124 0-4.847657-2.339843-9.390626-6.28125-12.207032l-50.554687-36.109375c-3.949219-26.570312-26.914063-47.019531-54.5625-47.019531h-192.796875c-30.421875 0-55.167969 24.746094-55.167969 55.167969v192.800781c0 30.417969 24.746094 55.164062 55.167969 55.164062h153.703125v65.648438l-49.953125 35.679688c-3.941407 2.816406-6.28125 7.363281-6.28125 12.207031s2.339843 9.390625 6.28125 12.203125l50.554687 36.109375c3.949219 26.570312 26.914063 47.019531 54.5625 47.019531h192.800782c30.417968 0 55.164062-24.75 55.164062-55.167969v-192.796875c0-30.421875-24.746094-55.167968-55.164062-55.167968zm-401.667969 64.265624c-13.878907 0-25.167969-11.289062-25.167969-25.167968v-192.800782c0-13.875 11.289062-25.164062 25.167969-25.164062h192.796875c13.875 0 25.164062 11.289062 25.164062 25.164062 0 4.847657 2.339844 9.394532 6.28125 12.207032l39.144532 27.960937-39.144532 27.960938c-3.941406 2.816406-6.28125 7.363281-6.28125 12.207031v73.367188h-9.09375c-30.417968 0-55.164062 24.746093-55.164062 55.164062v9.101562zm426.832031 183.699219c0 13.878907-11.289062 25.167969-25.164062 25.167969h-192.800782c-13.875 0-25.164062-11.289062-25.164062-25.167969 0-4.84375-2.339844-9.390625-6.28125-12.203125l-39.144532-27.960937 39.144532-27.960938c3.941406-2.816406 6.28125-7.363281 6.28125-12.207031v-112.464844c0-13.878906 11.289062-25.167968 25.164062-25.167968h24.054688.039062.039063 168.667969c13.875 0 25.164062 11.289062 25.164062 25.167968zm0 0"}),Qt=a.a.createElement("path",{d:"m197.652344 138.277344c4.667968 0 8.457031-3.789063 8.457031-8.460938s-3.789063-8.460937-8.457031-8.460937h-37.628906v-20.539063c0-4.671875-3.789063-8.460937-8.460938-8.460937-4.667969 0-8.457031 3.789062-8.457031 8.460937v20.539063h-37.628907c-4.667968 0-8.457031 3.789062-8.457031 8.460937s3.789063 8.460938 8.457031 8.460938h11.660157c1.863281 17.863281 9.566406 34.007812 21.152343 46.511718-9.605468 5.75-20.824218 9.070313-32.8125 9.070313-4.667968 0-8.457031 3.785156-8.457031 8.457031s3.789063 8.460938 8.457031 8.460938c17.117188 0 32.996094-5.351563 46.085938-14.453125 13.09375 9.101562 28.972656 14.453125 46.089844 14.453125 4.667968 0 8.457031-3.789063 8.457031-8.460938s-3.789063-8.457031-8.457031-8.457031c-11.988282 0-23.207032-3.3125-32.8125-9.070313 11.585937-12.503906 19.289062-28.648437 21.152344-46.511718zm-46.089844 35.941406c-9.253906-9.605469-15.539062-22.078125-17.378906-35.941406h34.761718c-1.839843 13.863281-8.125 26.335937-17.382812 35.941406zm0 0"}),Yt=function(e){var t=e.svgRef,n=e.title,r=_t(e,["svgRef","title"]);return a.a.createElement("svg",Xt({height:"512pt",viewBox:"0 0 512 512",width:"512pt",ref:t},r),n?a.a.createElement("title",null,n):null,$t,qt,Qt)},Zt=a.a.forwardRef((function(e,t){return a.a.createElement(Yt,Xt({svgRef:t},e))}));n.p;function en(){return(en=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function tn(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var nn=a.a.createElement("g",null,a.a.createElement("path",{d:"m480.006 73h-49v-58c0-8.284-6.716-15-15-15h-320c-8.284 0-15 6.716-15 15v58h-34v-17c0-8.284-6.716-15-15-15s-15 6.716-15 15v72c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h34v57c0 8.284 6.716 15 15 15h320c8.284 0 15-6.716 15-15v-57h34v93.288l-212.638 53.16c-6.678 1.669-11.362 7.669-11.362 14.552v49h-17c-7.921 0-14.477 6.159-14.971 14.064-8.584 137.35-8.029 128.21-8.029 128.936 0 14.657 5.657 28.582 15.931 39.209 21.651 22.4 56.481 22.407 78.139 0 10.273-10.627 15.931-24.552 15.931-39.209 0-.725.554 8.401-8.029-128.936-.494-7.905-7.05-14.064-14.971-14.064h-17v-37.288l212.638-53.16c6.678-1.669 11.362-7.669 11.362-14.552v-120c-.001-8.284-6.717-15-15.001-15zm-79 72h-290v-115h290zm-120.003 311.415c-.223 13.911-11.579 25.585-24.997 25.585s-24.774-11.674-24.997-25.585l7.089-113.415h35.816z"})),rn=function(e){var t=e.svgRef,n=e.title,r=tn(e,["svgRef","title"]);return a.a.createElement("svg",en({id:"Capa_1",enableBackground:"new 0 0 512.012 512.012",height:512,viewBox:"0 0 512.012 512.012",width:512,ref:t},r),n?a.a.createElement("title",null,n):null,nn)},an=a.a.forwardRef((function(e,t){return a.a.createElement(rn,en({svgRef:t},e))}));n.p;function cn(){var e=Object(f.a)(["\n      top: 32px;\n      opacity: 1;\n      z-index: 1000;\n    "]);return cn=function(){return e},e}function on(){var e=Object(f.a)(["\n  position: absolute;\n  top: 26px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90%;\n  border-radius: 4px;\n  padding: 8px 0;\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #fff;\n  z-index: -1;\n  opacity: 0;\n  overflow: hidden;\n  transition: all 0.2s ease-out;\n  & > li {\n    ","\n    padding: 6px 16px;\n    letter-spacing: 0.00938em;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.04);\n    }\n  }\n  ","\n"]);return on=function(){return e},e}var ln=F.default.ul(on(),"text-align: left;",(function(e){return e.menuVisible&&Object(F.css)(cn())}));function un(){var e=Object(f.a)([""]);return un=function(){return e},e}function sn(){var e=Object(f.a)(["\n  display: inline-block;\n  margin: 0px 8px;\n"]);return sn=function(){return e},e}function fn(){var e=Object(f.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 8px;\n  transition: all 0.2s;\n  &:hover {\n    background-color: #061a44;\n    ","\n  }\n"]);return fn=function(){return e},e}function pn(){var e=Object(f.a)(["\n      text-shadow: 0px 0px 20px #03ff03;\n    "]);return pn=function(){return e},e}function mn(){var e=Object(f.a)(["\n  ","\n"]);return mn=function(){return e},e}function vn(){var e=Object(f.a)(["\n  cursor: pointer;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  color: white;\n"]);return vn=function(){return e},e}function bn(){var e=Object(f.a)(["\n  margin: 0;\n  font-size: 1.5em;\n"]);return bn=function(){return e},e}function dn(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 180px auto 100px 100px 120px 120px;\n  margin-bottom: 40px;\n"]);return dn=function(){return e},e}var hn=F.default.header(dn()),On=F.default.h1(bn()),gn=F.default.button(vn()),jn=Object(F.default)(gn)(mn(),(function(e){return e.active&&Object(F.css)(pn())})),yn=Object(F.default)(gn)(fn(),B),Cn=F.default.span(sn()),En=Object(F.default)(yn)(un()),xn=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}},{key:"handleClick",value:function(e,t,n,r){"dashboard"===e&&r(n),t(e)}},{key:"render",value:function(){var e=this;return a.a.createElement(x.Consumer,null,(function(t){var n=t.page,r=t.setPage,c=t.confirmFavorites;return a.a.createElement(J.Consumer,null,(function(t){var o=t.favoriteCoins,l=e.props.name;return a.a.createElement(jn,{active:n===l,onClick:function(){e.handleClick(l,r,o,c)}},e.capitalize(l))}))}))}}]),n}(r.Component),kn=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.languageVisible,n=e.setLanguageVisible,r=e.toggleMenuVisible;return a.a.createElement(yn,{title:"Change language",onClick:function(){return r(t,n)}},a.a.createElement(Zt,{style:{width:"18px",height:"18px",fill:"white"}}),a.a.createElement(Cn,null,"ENGLISH"),a.a.createElement(Kt,{style:{width:"10px",height:"10px",fill:"white"}}),a.a.createElement(ln,{menuVisible:t},a.a.createElement("li",null,"English"),a.a.createElement("li",null,"\u4e2d\u6587"),a.a.createElement("li",null,"Espa\xf1ol")))}))}}]),n}(r.Component),Sn=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.themeVisible,n=e.setThemeVisible,r=e.toggleMenuVisible;return a.a.createElement(En,{title:"Change theme",onClick:function(){return r(t,n)}},a.a.createElement(an,{style:{width:"18px",height:"18px",fill:"white"}}),a.a.createElement(Cn,null,"Dark"),a.a.createElement(Kt,{style:{width:"10px",height:"10px",fill:"white"}}),a.a.createElement(ln,{menuVisible:t},a.a.createElement("li",null,"Dark"),a.a.createElement("li",null,"Light")))}))}}]),n}(r.Component),wn=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(hn,null,a.a.createElement(On,null,"CryptoDash"),a.a.createElement("div",{className:"text-transparent"},"Space Remaining"),a.a.createElement(xn,{name:"dashboard",active:!0}),a.a.createElement(xn,{name:"settings"}),a.a.createElement(kn,null),a.a.createElement(Sn,null))}}]),n}(r.Component),Fn=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(St,null,a.a.createElement(k,null,a.a.createElement(K,null,a.a.createElement(wn,null),a.a.createElement(xt,null,a.a.createElement(Et,null),a.a.createElement($e,null)))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Fn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c7e69b64.chunk.js.map