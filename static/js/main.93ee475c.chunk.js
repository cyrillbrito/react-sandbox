(this.webpackJsonpkintree=this.webpackJsonpkintree||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(26),i=a(27),s=a(28),u=a(29),d=(a(77),a(40)),h=(a(78),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({board:e.props.tick()})}),1)}},{key:"render",value:function(){var e;if(!(null===(e=this.state)||void 0===e?void 0:e.board))return r.a.createElement("div",null,"No board");var t,a=[],n=Object(d.a)(this.state.board);try{for(n.s();!(t=n.n()).done;){var o,c=t.value,l=[],i=Object(d.a)(c);try{for(i.s();!(o=i.n()).done;){var s=o.value;l.push(r.a.createElement("div",{className:"cell",style:{backgroundColor:"hsl("+s+",75%,75%)"}}))}}catch(u){i.e(u)}finally{i.f()}a.push(r.a.createElement("div",{className:"line"},l))}}catch(u){n.e(u)}finally{n.f()}return r.a.createElement("div",{className:"board"},a)}}]),a}(n.Component)),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).board=[],n.drops=[],n.nRows=0,n.nCols=0,n.wrapperRef=void 0,n.functick=function(){var e,t=Object(d.a)(n.drops);try{for(t.s();!(e=t.n()).done;){var a=e.value;a.row=(a.row+Math.floor(2*Math.random()))%n.nRows,a.col=(a.col+Math.floor(2*Math.random()))%n.nCols,n.board[a.row][a.col]=(n.board[a.row][a.col]+50)%360}}catch(r){t.e(r)}finally{t.f()}return n.board},n.wrapperRef=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.wrapperRef.current.clientWidth,t=this.wrapperRef.current.clientHeight;this.nRows=Math.round(t/30),this.nCols=Math.round(e/30);for(var a=0;a<this.nRows;a++){this.board[a]=[];for(var n=0;n<this.nCols;n++)this.board[a][n]=0}for(var r=0,o=0;o<this.nCols;o+=10)this.drops.push({row:0,col:r}),r+=10}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"},ref:this.wrapperRef},r.a.createElement(h,{tick:this.functick}))}}]),a}(n.Component),v=a(108),m=a(109),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=v.a.Header,t=v.a.Content;return r.a.createElement(v.a,{className:"layout"},r.a.createElement(e,null,r.a.createElement("div",{className:"logo"},"React Sandbox"),r.a.createElement(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(m.a.Item,{key:"1"},"nav 1"),r.a.createElement(m.a.Item,{key:"2"},"nav 2"),r.a.createElement(m.a.Item,{key:"3"},"nav 3"))),r.a.createElement(t,{style:{padding:"50px"}},r.a.createElement(f,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(106)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.93ee475c.chunk.js.map