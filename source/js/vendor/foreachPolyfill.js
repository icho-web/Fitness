"NodeList"in window&&!NodeList.prototype.forEach&&(console.info("polyfill for IE11"),NodeList.prototype.forEach=function(o,i){i=i||window;for(var t=0;t<this.length;t++)o.call(i,this[t],t,this)});
