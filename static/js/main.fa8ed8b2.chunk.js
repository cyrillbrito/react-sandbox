(this.webpackJsonpkintree=this.webpackJsonpkintree||[]).push([[0],[,,,,,,,,function(t,n,e){t.exports=e(16)},,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(7),c=e.n(a),i=(e(13),e(1)),l=e(2),s=e(3),u=e(4),h=e(5),f=(e(14),e(15),function(t){Object(h.a)(e,t);var n=Object(u.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(s.a)(e,[{key:"componentWillMount",value:function(){var t=this;setInterval((function(){t.setState({board:t.props.tick()})}),1)}},{key:"render",value:function(){var t;if(!(null===(t=this.state)||void 0===t?void 0:t.board))return r.a.createElement("div",null,"No board");var n,e=[],o=Object(i.a)(this.state.board);try{for(o.s();!(n=o.n()).done;){var a,c=n.value,l=[],s=Object(i.a)(c);try{for(s.s();!(a=s.n()).done;){var u=a.value;l.push(r.a.createElement("div",{className:"cell",style:{backgroundColor:"hsl("+u+",75%,75%)"}}))}}catch(h){s.e(h)}finally{s.f()}e.push(r.a.createElement("div",{className:"line"},l))}}catch(h){o.e(h)}finally{o.f()}return r.a.createElement("div",{className:"board"},e)}}]),e}(o.Component)),d=function(t){Object(h.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(l.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).b=void 0,t.drops=[],t.nRows=0,t.nCols=0,t.functick=function(){var n,e=Object(i.a)(t.drops);try{for(e.s();!(n=e.n()).done;){var o=n.value;o.row=(o.row+Math.floor(2*Math.random()))%t.nRows,o.col=(o.col+Math.floor(2*Math.random()))%t.nCols,console.log(o.row,o.col),t.b[o.row][o.col]=(t.b[o.row][o.col]+50)%360}}catch(r){e.e(r)}finally{e.f()}return t.b},t}return Object(s.a)(e,[{key:"componentWillMount",value:function(){this.nRows=Math.floor(window.innerHeight/30),this.nCols=Math.floor(window.innerWidth/30),this.b=[];for(var t=0;t<this.nRows;t++){this.b[t]=[];for(var n=0;n<this.nCols;n++)this.b[t][n]=0}for(var e=0,o=0;o<this.nCols;o+=10)this.drops.push({row:0,col:e}),e+=10}},{key:"render",value:function(){return r.a.createElement(f,{tick:this.functick})}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fa8ed8b2.chunk.js.map