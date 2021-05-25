!function(t,i){for(var e in i)t[e]=i[e]}(window,function(t){var i={};function e(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(o,s,function(i){return t[i]}.bind(null,s));return o},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=126)}({126:function(t,i){!function(t){var i={tooltip:{show:!1,cssClass:"flotTip",content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,monthNames:null,dayNames:null,shifts:{x:10,y:20},defaultTheme:!0,snap:!0,lines:!1,clickTips:!1,onHover:function(t,i){},$compat:!1}};i.tooltipOpts=i.tooltip;var e=function(t){this.tipPosition={x:0,y:0},this.init(t)};e.prototype.init=function(i){var e=this,o=t.plot.plugins.length;if(this.plotPlugins=[],o)for(var s=0;s<o;s++)this.plotPlugins.push(t.plot.plugins[s].name);function n(t){var e={};e.x=t.pageX,e.y=t.pageY,i.setTooltipPosition(e)}function a(o,s,n){e.clickmode?(t(i.getPlaceholder()).bind("plothover",r),i.hideTooltip(),e.clickmode=!1):(r(o,s,n),e.getDomElement().is(":visible")&&(t(i.getPlaceholder()).unbind("plothover",r),e.clickmode=!0))}function r(o,s,n){var a=function(t,i,e,o){return Math.sqrt((e-t)*(e-t)+(o-i)*(o-i))};if(n)i.showTooltip(n,e.tooltipOptions.snap?n:s);else if(e.plotOptions.series.lines.show&&!0===e.tooltipOptions.lines){var r=e.plotOptions.grid.mouseActiveRadius,p={distance:r+1},l=s;t.each(i.getData(),(function(t,o){for(var n=0,r=-1,c=1;c<o.data.length;c++)o.data[c-1][0]<=s.x&&o.data[c][0]>=s.x&&(n=c-1,r=c);if(-1!==r){var d={x:o.data[n][0],y:o.data[n][1]},x={x:o.data[r][0],y:o.data[r][1]},u=function(t,i,e,o,s,n,r){if(!r||(r=function(t,i,e,o,s,n){if(void 0!==e)return{x:e,y:i};if(void 0!==o)return{x:t,y:o};var a,r=-1/((n-o)/(s-e));return{x:a=(s*(t*r-i+o)+e*(t*-r+i-n))/(r*(s-e)+o-n),y:r*a-r*t+i}}(t,i,e,o,s,n)).x>=Math.min(e,s)&&r.x<=Math.max(e,s)&&r.y>=Math.min(o,n)&&r.y<=Math.max(o,n)){var p=o-n,l=s-e,c=e*n-o*s;return Math.abs(p*t+l*i+c)/Math.sqrt(p*p+l*l)}var d=a(t,i,e,o),x=a(t,i,s,n);return d>x?x:d}(o.xaxis.p2c(s.x),o.yaxis.p2c(s.y),o.xaxis.p2c(d.x),o.yaxis.p2c(d.y),o.xaxis.p2c(x.x),o.yaxis.p2c(x.y),!1);if(u<p.distance){var h=a(d.x,d.y,s.x,s.y)<a(s.x,s.y,x.x,x.y)?n:r,f=(o.datapoints.pointsize,[s.x,d.y+(x.y-d.y)*((s.x-d.x)/(x.x-d.x))]);p={distance:u,item:{datapoint:f,dataIndex:h,series:o,seriesIndex:t}},e.tooltipOptions.snap&&(l={pageX:o.xaxis.p2c(f[0]),pageY:o.yaxis.p2c(f[1])})}}else i.hideTooltip()})),p.distance<r+1?i.showTooltip(p.item,l):i.hideTooltip()}else i.hideTooltip()}i.hooks.bindEvents.push((function(i,o){if(e.plotOptions=i.getOptions(),"boolean"==typeof e.plotOptions.tooltip&&(e.plotOptions.tooltipOpts.show=e.plotOptions.tooltip,e.plotOptions.tooltip=e.plotOptions.tooltipOpts,delete e.plotOptions.tooltipOpts),!1!==e.plotOptions.tooltip.show&&void 0!==e.plotOptions.tooltip.show){e.tooltipOptions=e.plotOptions.tooltip,e.tooltipOptions.$compat?(e.wfunc="width",e.hfunc="height"):(e.wfunc="innerWidth",e.hfunc="innerHeight");e.getDomElement();t(i.getPlaceholder()).bind("plothover",r),e.tooltipOptions.clickTips&&t(i.getPlaceholder()).bind("plotclick",a),e.clickmode=!1,t(o).bind("mousemove",n)}})),i.hooks.shutdown.push((function(i,e){t(i.getPlaceholder()).unbind("plothover",r),t(i.getPlaceholder()).unbind("plotclick",a),i.removeTooltip(),t(e).unbind("mousemove",n)})),i.setTooltipPosition=function(i){var o=e.getDomElement(),s=o.outerWidth()+e.tooltipOptions.shifts.x,n=o.outerHeight()+e.tooltipOptions.shifts.y;i.x-t(window).scrollLeft()>t(window)[e.wfunc]()-s&&(i.x-=s,i.x=Math.max(i.x,0)),i.y-t(window).scrollTop()>t(window)[e.hfunc]()-n&&(i.y-=n),isNaN(i.x)?e.tipPosition.x=e.tipPosition.xPrev:(e.tipPosition.x=i.x,e.tipPosition.xPrev=i.x),isNaN(i.y)?e.tipPosition.y=e.tipPosition.yPrev:(e.tipPosition.y=i.y,e.tipPosition.yPrev=i.y)},i.showTooltip=function(t,o,s){var n=e.getDomElement(),a=e.stringFormat(e.tooltipOptions.content,t);""!==a&&(n.html(a),i.setTooltipPosition({x:e.tipPosition.x,y:e.tipPosition.y}),n.css({left:e.tipPosition.x+e.tooltipOptions.shifts.x,top:e.tipPosition.y+e.tooltipOptions.shifts.y}).show(),"function"==typeof e.tooltipOptions.onHover&&e.tooltipOptions.onHover(t,n))},i.hideTooltip=function(){e.getDomElement().hide().html("")},i.removeTooltip=function(){e.getDomElement().remove()}},e.prototype.getDomElement=function(){var i=t("<div>");return this.tooltipOptions&&this.tooltipOptions.cssClass&&0===(i=t("."+this.tooltipOptions.cssClass)).length&&((i=t("<div />").addClass(this.tooltipOptions.cssClass)).appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&i.css({background:"#fff","z-index":"1040",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),i},e.prototype.stringFormat=function(t,i){var e,o,s,n,a,r=/%s/,p=/%c/,l=/%lx/,c=/%ly/,d=/%x\.{0,1}(\d{0,})/,x=/%y\.{0,1}(\d{0,})/;if(void 0!==i.series.threshold?(e=i.datapoint[0],o=i.datapoint[1],s=i.datapoint[2]):void 0!==i.series.curvedLines?(e=i.datapoint[0],o=i.datapoint[1]):void 0!==i.series.lines&&i.series.lines.steps?(e=i.series.datapoints.points[2*i.dataIndex],o=i.series.datapoints.points[2*i.dataIndex+1],s=""):(e=i.series.data[i.dataIndex][0],o=i.series.data[i.dataIndex][1],s=i.series.data[i.dataIndex][2]),null===i.series.label&&i.series.originSeries&&(i.series.label=i.series.originSeries.label),"function"==typeof t&&(t=t(i.series.label,e,o,i)),"boolean"==typeof t&&!t)return"";if(s&&(t=t.replace("%ct",s)),void 0!==i.series.percent?n=i.series.percent:void 0!==i.series.percents&&(n=i.series.percents[i.dataIndex]),"number"==typeof n&&(t=this.adjustValPrecision(/%p\.{0,1}(\d{0,})/,t,n)),i.series.hasOwnProperty("pie")&&void 0!==i.series.data[0][1]&&(a=i.series.data[0][1]),"number"==typeof a&&(t=t.replace("%n",a)),t=void 0!==i.series.label?t.replace(r,i.series.label):t.replace(r,""),t=void 0!==i.series.color?t.replace(p,i.series.color):t.replace(p,""),t=this.hasAxisLabel("xaxis",i)?t.replace(l,i.series.xaxis.options.axisLabel):t.replace(l,""),t=this.hasAxisLabel("yaxis",i)?t.replace(c,i.series.yaxis.options.axisLabel):t.replace(c,""),this.isTimeMode("xaxis",i)&&this.isXDateFormat(i)&&(t=t.replace(d,this.timestampToDate(e,this.tooltipOptions.xDateFormat,i.series.xaxis.options))),this.isTimeMode("yaxis",i)&&this.isYDateFormat(i)&&(t=t.replace(x,this.timestampToDate(o,this.tooltipOptions.yDateFormat,i.series.yaxis.options))),"number"==typeof e&&(t=this.adjustValPrecision(d,t,e)),"number"==typeof o&&(t=this.adjustValPrecision(x,t,o)),void 0!==i.series.xaxis.ticks){var u;u=this.hasRotatedXAxisTicks(i)?"rotatedTicks":"ticks";var h=i.dataIndex+i.seriesIndex;for(var f in i.series.xaxis[u]){if(i.series.xaxis[u].hasOwnProperty(h)&&!this.isTimeMode("xaxis",i))(this.isCategoriesMode("xaxis",i)?i.series.xaxis[u][h].label:i.series.xaxis[u][h].v)===e&&(t=t.replace(d,i.series.xaxis[u][h].label.replace(/\$/g,"$$$$")))}}if(void 0!==i.series.yaxis.ticks)for(var y in i.series.yaxis.ticks){if(i.series.yaxis.ticks.hasOwnProperty(y))(this.isCategoriesMode("yaxis",i)?i.series.yaxis.ticks[y].label:i.series.yaxis.ticks[y].v)===o&&(t=t.replace(x,i.series.yaxis.ticks[y].label.replace(/\$/g,"$$$$")))}return void 0!==i.series.xaxis.tickFormatter&&(t=t.replace("%x",i.series.xaxis.tickFormatter(e,i.series.xaxis).replace(/\$/g,"$$"))),void 0!==i.series.yaxis.tickFormatter&&(t=t.replace("%y",i.series.yaxis.tickFormatter(o,i.series.yaxis).replace(/\$/g,"$$"))),t},e.prototype.isTimeMode=function(t,i){return void 0!==i.series[t].options.mode&&"time"===i.series[t].options.mode},e.prototype.isXDateFormat=function(t){return void 0!==this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},e.prototype.isYDateFormat=function(t){return void 0!==this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},e.prototype.isCategoriesMode=function(t,i){return void 0!==i.series[t].options.mode&&"categories"===i.series[t].options.mode},e.prototype.timestampToDate=function(i,e,o){var s=t.plot.dateGenerator(i,o);return t.plot.formatDate(s,e,this.tooltipOptions.monthNames,this.tooltipOptions.dayNames)},e.prototype.adjustValPrecision=function(t,i,e){var o;return null!==i.match(t)&&""!==RegExp.$1&&(o=RegExp.$1,e=e.toFixed(o),i=i.replace(t,e)),i},e.prototype.hasAxisLabel=function(i,e){return-1!==t.inArray("axisLabels",this.plotPlugins)&&void 0!==e.series[i].options.axisLabel&&e.series[i].options.axisLabel.length>0},e.prototype.hasRotatedXAxisTicks=function(i){return-1!==t.inArray("tickRotor",this.plotPlugins)&&void 0!==i.series.xaxis.rotatedTicks};t.plot.plugins.push({init:function(t){new e(t)},options:i,name:"tooltip",version:"0.8.5"})}(jQuery)}}));