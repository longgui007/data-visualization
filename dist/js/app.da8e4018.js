(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"32b0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("7c32"),n("3d07"),n("44fb"),n("1599");var a=n("430a"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=n("cba8"),c={},o=Object(s["a"])(c,i,r,!1,null,null,null),l=o.exports,h=n("ac56"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen-container",style:t.containerStyle},[n("header",{staticClass:"screen-header"},[n("div",[n("img",{attrs:{src:t.headerSrc,alt:""}})]),n("span",{staticClass:"title"},[t._v("ECharts电商数据可视化系统")]),n("div",{staticClass:"title-right"},[n("img",{staticClass:"qiehuan",attrs:{src:t.themeSrc},on:{click:t.handleChangeTheme}}),n("span",{staticClass:"datetime"},[t._v(t._s(t.nowDateTime))])])]),n("div",{staticClass:"screen-body"},[n("section",{staticClass:"screen-left"},[n("div",{class:[t.fullScreenStatus.trend?"fullscreen":""],attrs:{id:"left-top"}},[n("Trend",{ref:"trend"}),n("div",{staticClass:"resize"},[n("span",{class:["iconfont",t.fullScreenStatus.trend?"icon-compress-alt":"icon-expand-alt"],on:{click:function(e){return t.changeSize("trend")}}})])],1),n("div",{class:[t.fullScreenStatus.seller?"fullscreen":""],attrs:{id:"left-bottom"}},[n("Seller",{ref:"seller"}),n("div",{staticClass:"resize"},[n("span",{class:["iconfont",t.fullScreenStatus.seller?"icon-compress-alt":"icon-expand-alt"],on:{click:function(e){return t.changeSize("seller")}}})])],1)]),n("section",{staticClass:"screen-middle"},[n("div",{class:[t.fullScreenStatus.map?"fullscreen":""],attrs:{id:"middle-top"}},[n("Map",{ref:"map"}),n("div",{staticClass:"resize"},[n("span",{class:["iconfont",t.fullScreenStatus.map?"icon-compress-alt":"icon-expand-alt"],on:{click:function(e){return t.changeSize("map")}}})])],1),n("div",{class:[t.fullScreenStatus.rank?"fullscreen":""],attrs:{id:"middle-bottom"}},[n("Rank",{ref:"rank"}),n("div",{staticClass:"resize"},[n("span",{class:["iconfont",t.fullScreenStatus.rank?"icon-compress-alt":"icon-expand-alt"],on:{click:function(e){return t.changeSize("rank")}}})])],1)]),n("section",{staticClass:"screen-right"},[n("div",{class:[t.fullScreenStatus.hot?"fullscreen":""],attrs:{id:"right-top"}},[n("Hot",{ref:"hot"}),n("div",{staticClass:"resize"},[n("span",{class:["iconfont",t.fullScreenStatus.hot?"icon-compress-alt":"icon-expand-alt"],on:{click:function(e){return t.changeSize("hot")}}})])],1),n("div",{class:[t.fullScreenStatus.stock?"fullscreen":""],attrs:{id:"right-bottom"}},[n("Stock",{ref:"stock"}),n("div",{staticClass:"resize"},[n("span",{class:["iconfont",t.fullScreenStatus.stock?"icon-compress-alt":"icon-expand-alt"],on:{click:function(e){return t.changeSize("stock")}}})])],1)])])])},d=[],f=n("597f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("div",{ref:"hot_ref",staticClass:"com-chart"}),n("span",{staticClass:"iconfont arr-left",style:t.comStyle,on:{click:t.toLeft}},[t._v("")]),n("span",{staticClass:"iconfont arr-right",style:t.comStyle,on:{click:t.toRight}},[t._v("")]),n("span",{staticClass:"cat-name",style:t.comStyle},[t._v(t._s(t.catName))])])},m=[],g=(n("1baf"),n("e456"),n("af46"),n("1313"),n("09a7"),n("7736")),v={chalk:{backgroundColor:"#161522",titleColor:"#ffffff",logoSrc:"logo_dark.png",themeSrc:"qiehuan_dark.png",headerBorderSrc:"header_border_dark.png"},vintage:{backgroundColor:"#eeeeee",titleColor:"#000000",logoSrc:"logo_light2.png",themeSrc:"qiehuan_light.png",headerBorderSrc:"header_border_light.png"}};function S(t){return v[t]}var k={data:function(){return{chartInstance:null,allData:null,currentIndex:0,titleFontSize:0}},created:function(){this.$socket.registerCallBack("hotData",this.getData)},computed:Object(f["a"])({catName:function(){return this.allData?this.allData[this.currentIndex].name:""},comStyle:function(){return{fontSize:this.titleFontSize+"px",color:S(this.theme).titleColor}}},Object(g["b"])(["theme"])),mounted:function(){this.initChart(),this.$socket.send({action:"getData",socketType:"hotData",chartName:"hot",value:""}),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed:function(){window.removeEventListener("resize",this.screenAdapter),this.$socket.unRegisterCallBack("hotData")},methods:{initChart:function(){this.chartInstance=this.$echarts.init(this.$refs.hot_ref,this.theme);var t={title:{text:"▎ 热销商品的占比",left:20,top:20},legend:{top:"15%",icon:"circle"},tooltip:{show:!0,formatter:function(t){var e=t.data.children,n=0;e.forEach((function(t){n+=t.value}));var a="";return e.forEach((function(t){a+="\n              ".concat(t.name,":").concat(parseInt(t.value/n*100)+"%","\n              <br/>\n              ")})),a}},series:[{type:"pie",label:{show:!1},emphasis:{label:{show:!0},labelLine:{show:!1}}}]};this.chartInstance.setOption(t)},getData:function(t){this.allData=t,console.log(this.allData),this.updateChart()},updateChart:function(){var t=this.allData[this.currentIndex].children.map((function(t){return t.name})),e=this.allData[this.currentIndex].children.map((function(t){return{name:t.name,value:t.value,children:t.children}})),n={legend:{data:t},series:[{data:e}]};this.chartInstance.setOption(n)},screenAdapter:function(){this.titleFontSize=this.$refs.hot_ref.offsetWidth/100*3.6;var t={title:{textStyle:{fontSize:this.titleFontSize}},legend:{itemWidth:this.titleFontSize,itemHeight:this.titleFontSize,itemGap:this.titleFontSize/2,textStyle:{fontSize:this.titleFontSize/2}},series:[{radius:4.5*this.titleFontSize,center:["50%","60%"]}]};this.chartInstance.setOption(t),this.chartInstance.resize()},toLeft:function(){this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.allData.length-1),this.updateChart()},toRight:function(){this.currentIndex++,this.currentIndex>this.allData.length-1&&(this.currentIndex=0),this.updateChart()}},watch:{theme:function(){console.log("主题切换了"),this.chartInstance.dispose(),this.initChart(),this.screenAdapter(),this.updateChart()}}},y=k,C=(n("5b17"),Object(s["a"])(y,p,m,!1,null,"335d4d9e",null)),b=C.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container",on:{dblclick:t.revertMap}},[n("div",{ref:"map_ref",staticClass:"com-chart"})])},w=[],D=n("febe"),x=(n("e186"),n("4ff3")),z=n.n(x),O={"安徽":"anhui","陕西":"shanxi1","澳门":"aomen","北京":"beijing","重庆":"chongqing","福建":"fujian","甘肃":"gansu","广东":"guangdong","广西":"guangxi","贵州":"guizhou","海南":"hainan","河北":"hebei","黑龙江":"heilongjiang","河南":"henan","湖北":"hubei","湖南":"hunan","江苏":"jiangsu","江西":"jiangxi","吉林":"jilin","辽宁":"liaoning","内蒙古":"neimenggu","宁夏":"ningxia","青海":"qinghai","山东":"shandong","上海":"shanghai","山西":"shanxi","四川":"sichuan","台湾":"taiwan","天津":"tianjin","香港":"xianggang","新疆":"xinjiang","西藏":"xizang","云南":"yunnan","浙江":"zhejiang"};function $(t){var e="/static/map/province/".concat(O[t],".json");return{key:O[t],path:e}}var _={data:function(){return{chartInstance:null,allData:null,mapData:{}}},created:function(){this.$socket.registerCallBack("mapData",this.getData)},mounted:function(){this.initChart(),this.$socket.send({action:"getData",socketType:"mapData",chartName:"map",value:""}),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed:function(){window.removeEventListener("resize",this.screenAdapter),this.$socket.unRegisterCallBack("mapData")},methods:{initChart:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.chartInstance=t.$echarts.init(t.$refs.map_ref,t.theme),e.next=3,z.a.get("http://localhost:8999/static/map/china.json");case 3:n=e.sent,t.$echarts.registerMap("china",n.data),a={title:{text:"▎ 商家分布",left:20,top:20},geo:{type:"map",map:"china",top:"5%",bottom:"5%",itemStyle:{areaColor:"#2E72BF",borderColor:"#333"}},legend:{left:"5%",bottom:"5%",orient:"vertical"}},t.chartInstance.setOption(a),t.chartInstance.on("click",function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(n){var a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=$(n.name),console.log(a),t.mapData[a.key]){e.next=8;break}return e.next=5,z.a.get("http://localhost:8999"+a.path);case 5:i=e.sent,t.mapData[a.key]=i.data,t.$echarts.registerMap(a.key,i.data);case 8:r={geo:{map:a.key}},t.chartInstance.setOption(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})))()},getData:function(t){this.allData=t,console.log(this.allData),this.updateChart()},updateChart:function(){var t=this.allData.map((function(t){return t.name})),e=this.allData.map((function(t){return{type:"effectScatter",rippleEffect:{scale:5,brushType:"stroke"},name:t.name,data:t.children,coordinateSystem:"geo"}})),n={legend:{data:t},series:e};this.chartInstance.setOption(n)},screenAdapter:function(){var t=this.$refs.map_ref.offsetWidth/100*3.6,e={title:{textStyle:{fontSize:t}},legend:{itemWidth:t/2,itemHeight:t/2,itemGap:t/2,textStyle:{fontSize:t/2}}};this.chartInstance.setOption(e),this.chartInstance.resize()},revertMap:function(){var t={geo:{map:"china"}};this.chartInstance.setOption(t)}},computed:Object(f["a"])({},Object(g["b"])(["theme"])),watch:{theme:function(){console.log("主题切换了"),this.chartInstance.dispose(),this.initChart(),this.screenAdapter(),this.updateChart()}}},j=_,E=Object(s["a"])(j,I,w,!1,null,"78fb400e",null),A=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("div",{ref:"rank_ref",staticClass:"com-chart"})])},B=[],R=(n("c792"),{data:function(){return{chartInstance:null,allData:null,startValue:0,endValue:9,timerId:null}},created:function(){this.$socket.registerCallBack("rankData",this.getData)},mounted:function(){this.initChart(),this.$socket.send({action:"getData",socketType:"rankData",chartName:"rank",value:""}),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed:function(){window.removeEventListener("resize",this.screenAdapter),clearInterval(this.timerId),this.$socket.unRegisterCallBack("rankData")},methods:{initChart:function(){var t=this;this.chartInstance=this.$echarts.init(this.$refs.rank_ref,this.theme);var e={title:{text:"▎ 地区销售排行",left:20,top:20},grid:{top:"40%",left:"5%",right:"5%",bottom:"5%",containLabel:!0},tooltip:{show:!0},xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"bar"}]};this.chartInstance.setOption(e),this.chartInstance.on("mouseover",(function(){clearInterval(t.timerId)})),this.chartInstance.on("mouseout",(function(){t.startInterval()}))},getData:function(t){this.allData=t,this.allData.sort((function(t,e){return e.value-t.value})),console.log(this.allData),this.updateChart(),this.startInterval()},updateChart:function(){var t=this,e=[["#0BA82C","#4FF778"],["#2E72BF","#23E5E5"],["#5052EE","#AB6EE5"]],n=this.allData.map((function(t){return t.name})),a=this.allData.map((function(t){return t.value})),i={xAxis:{data:n},dataZoom:{show:!1,startValue:this.startValue,endValue:this.endValue},series:[{data:a,itemStyle:{color:function(n){var a=null;return a=n.value>300?e[0]:n.value>200?e[1]:e[2],new t.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:a[0]},{offset:1,color:a[1]}])}}}]};this.chartInstance.setOption(i)},screenAdapter:function(){var t=this.$refs.rank_ref.offsetWidth/100*3.6,e={title:{textStyle:{fontSize:t}},series:[{barWidth:t,itemStyle:{barBorderRadius:[t/2,t/2,0,0]}}]};this.chartInstance.setOption(e),this.chartInstance.resize()},startInterval:function(){var t=this;this.timerId&&clearInterval(this.timerId),this.timerId=setInterval((function(){t.startValue++,t.endValue++,t.endValue>t.allData.length-1&&(t.startValue=0,t.endValue=9),t.updateChart()}),2e3)}},computed:Object(f["a"])({},Object(g["b"])(["theme"])),watch:{theme:function(){console.log("主题切换了"),this.chartInstance.dispose(),this.initChart(),this.screenAdapter(),this.updateChart()}}}),F=R,L=Object(s["a"])(F,T,B,!1,null,"68ecee92",null),M=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("div",{ref:"seller_ref",staticClass:"com-chart"})])},N=[],W=(n("4f84"),{data:function(){return{chartInstance:null,allData:null,currentPage:1,totalPage:0,timerId:null}},created:function(){this.$socket.registerCallBack("sellerData",this.getData)},mounted:function(){this.initChart(),this.$socket.send({action:"getData",socketType:"sellerData",chartName:"seller",value:""}),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed:function(){clearInterval(this.timerId),window.removeEventListener("resize",this.screenAdapter),this.$socket.unRegisterCallBack("sellerData")},methods:{initChart:function(){var t=this;this.chartInstance=this.$echarts.init(this.$refs.seller_ref,this.theme);var e={title:{text:"▎商家销售统计",left:20,top:20},grid:{top:"20%",left:"3%",right:"6%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category"},tooltip:{trigger:"axis",axisPointer:{type:"line",z:0,lineStyle:{color:"#2D3443"}}},series:[{type:"bar",label:{show:!0,position:"right",textStyle:{color:"white"}},itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#5052EE"},{offset:1,color:"#AB6EE5"}])}}]};this.chartInstance.setOption(e),this.chartInstance.on("mouseover",(function(){clearInterval(t.timerId)})),this.chartInstance.on("mouseout",(function(){t.startInterval()}))},getData:function(t){this.allData=t,this.allData.sort((function(t,e){return t.value-e.value})),this.totalPage=this.allData.length%5===0?this.allData.length/5:this.allData.length/5+1,this.updateChart(),this.startInterval()},updateChart:function(){var t=5*(this.currentPage-1),e=5*this.currentPage,n=this.allData.slice(t,e),a=n.map((function(t){return t.name})),i=n.map((function(t){return t.value})),r={yAxis:{data:a},series:[{data:i}]};this.chartInstance.setOption(r)},startInterval:function(){var t=this;this.timerId&&clearInterval(this.timerId),this.timerId=setInterval((function(){t.currentPage++,t.currentPage>t.totalPage&&(t.currentPage=1),t.updateChart()}),3e3)},screenAdapter:function(){var t=this.$refs.seller_ref.offsetWidth/100*3.6,e={title:{textStyle:{fontSize:t}},tooltip:{axisPointer:{lineStyle:{width:t}}},series:[{barWidth:t,itemStyle:{barBorderRadius:[0,t/2,t/2,0]}}]};this.chartInstance.setOption(e),this.chartInstance.resize()}},computed:Object(f["a"])({},Object(g["b"])(["theme"])),watch:{theme:function(){console.log("主题切换了"),this.chartInstance.dispose(),this.initChart(),this.screenAdapter(),this.updateChart()}}}),V=W,G=Object(s["a"])(V,P,N,!1,null,"643a5aaa",null),H=G.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("div",{ref:"stock_ref",staticClass:"com-chart"})])},J=[],U={data:function(){return{chartInstance:null,allData:null,currentIndex:0,timerId:null}},created:function(){this.$socket.registerCallBack("stockData",this.getData)},mounted:function(){this.initChart(),this.$socket.send({action:"getData",socketType:"stockData",chartName:"stock",value:""}),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed:function(){window.removeEventListener("resize",this.screenAdapter),clearInterval(this.timerId),this.$socket.unRegisterCallBack("stockData")},methods:{initChart:function(){var t=this;this.chartInstance=this.$echarts.init(this.$refs.stock_ref,this.theme);var e={title:{text:"▎库存和销量分析",left:20,top:20}};this.chartInstance.setOption(e),this.chartInstance.on("mouseover",(function(){clearInterval(t.timerId)})),this.chartInstance.on("mouseout",(function(){t.startInterval()}))},getData:function(t){this.allData=t,console.log(this.allData),this.updateChart(),this.startInterval()},updateChart:function(){var t=this,e=[["18%","40%"],["50%","40%"],["82%","40%"],["34%","75%"],["66%","75%"]],n=[["#4FF778","#0BA82C"],["#E5DD45","#E8B11C"],["#E8821C","#E55445"],["#5052EE","#AB6EE5"],["#23E5E5","#2E72BF"]],a=5*this.currentIndex,i=5*(this.currentIndex+1),r=this.allData.slice(a,i),s=r.map((function(a,i){return{type:"pie",center:e[i],hoverAnimation:!1,labelLine:{show:!1},label:{position:"center",color:n[i][0]},data:[{name:a.name+"\n\n"+a.sales,value:a.sales,itemStyle:{color:new t.$echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:n[i][0]},{offset:1,color:n[i][1]}])}},{value:a.stock,itemStyle:{color:"#333843"}}]}})),c={series:s};this.chartInstance.setOption(c)},screenAdapter:function(){var t=this.$refs.stock_ref.offsetWidth/100*3.6,e=2.8*t,n=1.125*e,a={title:{textStyle:{fontSize:t}},series:[{type:"pie",radius:[n,e],label:{fontSize:t/2}},{type:"pie",radius:[n,e],label:{fontSize:t/2}},{type:"pie",radius:[n,e],label:{fontSize:t/2}},{type:"pie",radius:[n,e],label:{fontSize:t/2}},{type:"pie",radius:[n,e],label:{fontSize:t/2}}]};this.chartInstance.setOption(a),this.chartInstance.resize()},startInterval:function(){var t=this;this.timerId&&clearInterval(this.timerId),this.timerId=setInterval((function(){t.currentIndex++,t.currentIndex>1&&(t.currentIndex=0),t.updateChart()}),5e3)}},computed:Object(f["a"])({},Object(g["b"])(["theme"])),watch:{theme:function(){console.log("主题切换了"),this.chartInstance.dispose(),this.initChart(),this.screenAdapter(),this.updateChart()}}},Y=U,Z=Object(s["a"])(Y,q,J,!1,null,"0186adee",null),K=Z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("div",{staticClass:"title",style:t.comStyle},[n("span",[t._v(t._s("▎ "+t.showTitle))]),n("span",{staticClass:"iconfont title-icon",style:t.comStyle,on:{click:function(e){t.showChoice=!t.showChoice}}},[t._v("")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChoice,expression:"showChoice"}],staticClass:"select-con",style:t.marginStyle},t._l(t.selectTypes,(function(e){return n("div",{key:e.key,staticClass:"select-item",on:{click:function(n){return t.handleSelect(e.key)}}},[t._v(" "+t._s(e.text)+" ")])})),0)]),n("div",{ref:"trend_ref",staticClass:"com-chart"})])},X=[],tt=(n("ee0e"),{data:function(){return{chartInstane:null,allData:null,showChoice:!1,choiceType:"map",titleFontSize:0}},created:function(){this.$socket.registerCallBack("trendData",this.getData)},mounted:function(){this.initChart(),this.$socket.send({action:"getData",socketType:"trendData",chartName:"trend",value:""}),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed:function(){window.removeEventListener("resize",this.screenAdapter),this.$socket.unRegisterCallBack("trendData")},computed:Object(f["a"])({selectTypes:function(){var t=this;return this.allData?this.allData.type.filter((function(e){return e.key!==t.choiceType})):[]},showTitle:function(){return this.allData?this.allData[this.choiceType].title:""},comStyle:function(){return{fontSize:this.titleFontSize+"px",color:S(this.theme).titleColor}},marginStyle:function(){return{marginLeft:this.titleFontSize+"px"}}},Object(g["b"])(["theme"])),methods:{initChart:function(){this.chartInstane=this.$echarts.init(this.$refs.trend_ref,this.theme);var t={grid:{left:"3%",top:"35%",right:"4%",bottom:"1%",containLabel:!0},tooltip:{trigger:"axis"},legend:{left:20,top:"15%",icon:"circle"},xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value"}};this.chartInstane.setOption(t)},getData:function(t){this.allData=t,console.log(this.allData),this.updateChart()},updateChart:function(){var t=this,e=["rgba(11, 168, 44, 0.5)","rgba(44, 110, 255, 0.5)","rgba(22, 242, 217, 0.5)","rgba(254, 33, 30, 0.5)","rgba(250, 105, 0, 0.5)"],n=["rgba(11, 168, 44, 0)","rgba(44, 110, 255, 0)","rgba(22, 242, 217, 0)","rgba(254, 33, 30, 0)","rgba(250, 105, 0, 0)"],a=this.allData.common.month,i=this.allData[this.choiceType].data,r=i.map((function(a,i){return{name:a.name,type:"line",data:a.data,stack:t.choiceType,areaStyle:{color:new t.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[i]},{offset:1,color:n[i]}])}}})),s=i.map((function(t){return t.name})),c={xAxis:{data:a},legend:{data:s},series:r};this.chartInstane.setOption(c)},screenAdapter:function(){this.titleFontSize=this.$refs.trend_ref.offsetWidth/100*3.6;var t={legend:{itemWidth:this.titleFontSize,itemHeight:this.titleFontSize,itemGap:this.titleFontSize,textStyle:{fontSize:this.titleFontSize/2}}};this.chartInstane.setOption(t),this.chartInstane.resize()},handleSelect:function(t){this.choiceType=t,this.updateChart(),this.showChoice=!1}},watch:{theme:function(){console.log("主题切换了"),this.chartInstane.dispose(),this.initChart(),this.screenAdapter(),this.updateChart()}}}),et=tt,nt=(n("d2c8"),Object(s["a"])(et,Q,X,!1,null,"2f4ced5f",null)),at=nt.exports,it={created:function(){this.$socket.registerCallBack("fullScreen",this.recvData),this.$socket.registerCallBack("themeChange",this.recvThemeChange),this.currentTime()},destroyed:function(){this.$socket.unRegisterCallBack("fullScreen"),this.$socket.unRegisterCallBack("themeChange"),clearInterval(this.timerId)},data:function(){return{fullScreenStatus:{trend:!1,seller:!1,map:!1,rank:!1,hot:!1,stock:!1},nowDateTime:"",timerId:null}},methods:{changeSize:function(t){var e=!this.fullScreenStatus[t];this.$socket.send({action:"fullScreen",socketType:"fullScreen",chartName:t,value:e})},recvData:function(t){var e=this,n=t.chartName,a=t.value;this.fullScreenStatus[n]=a,this.$nextTick((function(){e.$refs[n].screenAdapter()}))},handleChangeTheme:function(){this.$socket.send({action:"themeChange",socketType:"themeChange",chartName:"",value:""})},recvThemeChange:function(){this.$store.commit("changeTheme")},currentTime:function(){this.timerId&&clearInterval(this.timerId),this.timerId=setInterval(this.getTime,500)},getTime:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,n=(new Date).getDate(),a=(new Date).getHours(),i=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),r=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();this.nowDateTime=t+"年 "+e+"月"+n+"日 "+a+":"+i+":"+r}},components:{Hot:b,Map:A,Rank:M,Seller:H,Stock:K,Trend:at},computed:Object(f["a"])({headerSrc:function(){return"/static/img/"+S(this.theme).headerBorderSrc},themeSrc:function(){return"/static/img/"+S(this.theme).themeSrc},containerStyle:function(){return{backgroundColor:S(this.theme).backgroundColor,color:S(this.theme).titleColor}}},Object(g["b"])(["theme"]))},rt=it,st=(n("8881"),Object(s["a"])(rt,u,d,!1,null,"73425cfe",null)),ct=st.exports;a["a"].use(h["a"]);var ot=[{path:"/",redirect:"/screen"},{path:"/screen",component:ct}],lt=new h["a"]({routes:ot}),ht=lt;a["a"].use(g["a"]);var ut=new g["a"].Store({state:{theme:"chalk"},mutations:{changeTheme:function(t){"chalk"===t.theme?t.theme="vintage":t.theme="chalk"}},actions:{},modules:{}}),dt=(n("bd4b"),n("a342"),n("a018")),ft=n("e902"),pt=n("2a8b"),mt=(n("5ad0"),function(){function t(){Object(dt["a"])(this,t),Object(pt["a"])(this,"ws",null),Object(pt["a"])(this,"callBackMapping",{}),Object(pt["a"])(this,"connected",!1),Object(pt["a"])(this,"sendRetryCount",0),Object(pt["a"])(this,"connectRetryCount",0)}return Object(ft["a"])(t,[{key:"connect",value:function(){var t=this;if(!window.WebSocket)return console.log("您的浏览器不支持WebSocket");this.ws=new WebSocket("ws://localhost:9998"),this.ws.onopen=function(){console.log("连接服务端成功了"),t.connected=!0,t.connectRetryCount=0},this.ws.onclose=function(){console.log("连接服务端失败"),t.connected=!1,t.connectRetryCount++,setTimeout((function(){t.connect()}),500*t.connectRetryCount)},this.ws.onmessage=function(e){console.log("从服务端获取到了数据");var n=JSON.parse(e.data),a=n.socketType;if(t.callBackMapping[a]){var i=n.action;if("getData"===i){var r=JSON.parse(n.data);t.callBackMapping[a].call(t,r)}else("fullScreen"===i||"themeChange"===i)&&t.callBackMapping[a].call(t,n)}}}},{key:"registerCallBack",value:function(t,e){this.callBackMapping[t]=e}},{key:"unRegisterCallBack",value:function(t){this.callBackMapping[t]=null}},{key:"send",value:function(t){var e=this;this.connected?(this.sendRetryCount=0,this.ws.send(JSON.stringify(t))):(this.sendRetryCount++,setTimeout((function(){e.send(t)}),500*this.sendRetryCount))}}],[{key:"Instance",get:function(){return this.instance||(this.instance=new t),this.instance}}]),t}());Object(pt["a"])(mt,"instance",null),mt.Instance.connect(),a["a"].prototype.$socket=mt.Instance,z.a.defaults.baseURL="http://127.0.0.1:8888/api/",a["a"].prototype.$http=z.a,a["a"].prototype.$echarts=window.echarts,a["a"].config.productionTip=!1,new a["a"]({router:ht,store:ut,render:function(t){return t(l)}}).$mount("#app")},"5b17":function(t,e,n){"use strict";n("32b0")},"6f29":function(t,e,n){},8881:function(t,e,n){"use strict";n("6f29")},a342:function(t,e,n){},bd4b:function(t,e,n){},d2c8:function(t,e,n){"use strict";n("eb19")},eb19:function(t,e,n){}});
//# sourceMappingURL=app.da8e4018.js.map