webpackJsonp([0x67ef26645b2a,60335399758886],{145:function(e,t){e.exports={layoutContext:{}}},233:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(2),i=a(o),l=n(238),c=a(l),u=n(145),s=a(u);t.default=function(e){return i.default.createElement(c.default,r({},e,s.default))},e.exports=t.default},236:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),c=a(l),u=n(43),s=a(u),f=n(29),d=n(492),p=a(d),h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:m},c.default.createElement(s.default,{to:"/"},c.default.createElement("img",{src:p.default,alt:"Mike herchel"})),c.default.createElement("p",null,"Hi, I'm Mike Herchel, and I use Drupal, JavaScript, and other technologies to kick various asses throughout cyberspace."))},t}(c.default.Component),m=(0,f.css)("margin-top:20px;@media (max-width:700px){display:flex;align-items:center;margin-bottom:20px;text-align:left;}img{border-radius:50%\n\n    @media (max-width:700px){display:none;}}p{color:white;font-size:16px;@media (min-width:700px){padding:20px;background-color:rgba(255,255,255,0.15);font-size:20px;}}");t.default=h,e.exports=t.default},237:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),c=a(l),u=n(43),s=a(u),f=n(29),d=function(e){function t(){r(this,t);var n=o(this,e.call(this));return n.handleNavClick=n.handleNavClick.bind(n),n.state={navVisible:!1},n}return i(t,e),t.prototype.handleNavClick=function(){this.setState({navVisible:!this.state.navVisible})},t.prototype.render=function(){var e=this;return c.default.createElement("div",null,c.default.createElement("button",{className:p,onClick:function(){return e.handleNavClick()},style:{transform:this.state.navVisible?"rotate(90deg)":""}},c.default.createElement("span",null,"Toggle Navigation")),c.default.createElement("div",{className:h,style:{display:this.state.navVisible?"block":""}},c.default.createElement("nav",{className:m},c.default.createElement(s.default,{onClick:function(){return e.handleNavClick()},to:"/"},"Home"),c.default.createElement(s.default,{onClick:function(){return e.handleNavClick()},to:"/about"},"About"),c.default.createElement(s.default,{onClick:function(){return e.handleNavClick()},to:"/philosophy"},"Philosophy"),c.default.createElement(s.default,{onClick:function(){return e.handleNavClick()},to:"/events"},"Events")),c.default.createElement("section",{className:b},c.default.createElement("p",null,"Email me at ",c.default.createElement("a",{href:"mailto:mike@herchel.com",target:"_blank"},"mike@herchel.com")),c.default.createElement("p",null,"Follow me at ",c.default.createElement("a",{href:"http://twitter.com/mikeherchel",target:"_blank"},"@mikeherchel")),c.default.createElement("p",null,"I'm on github at ",c.default.createElement("a",{href:"https://github.com/mherchel",target:"_blank"},"github.com/mherchel")),c.default.createElement("p",null,"Facebook profile is ",c.default.createElement("a",{href:"http://www.facebook.com/mherchel",target:"_blank"},"facebook.com/mherchel")),c.default.createElement("p",null,"Find me on D.O at ",c.default.createElement("a",{href:"http://drupal.org/user/118428",target:"_blank"},"drupal.org/user/118428")),c.default.createElement("p",null,"I don't use LinkedIn ",c.default.createElement("a",{href:"http://www.linkedin.com/in/mherchel",target:"_blank"},"linkedin.com/in/mherchel")))))},t}(c.default.Component),p=(0,f.css)('position:fixed;top:35px;right:20px;z-index:3;border:0;background:transparent;color:white;font-size:40px;line-height:40px;cursor:pointer;transition:0.2s;@media (min-width:700px){display:none;}&:before{content:"☰"}span{font-size:0;position:absolute;visibility:hidden;}'),h=(0,f.css)("@media (max-width:700px){display:none;position:fixed;z-index:2;top:0;left:0;width:100%;height:100vh;overflow:auto;-webkit-overflow-scrolling:touch;background:var(--primary);padding:40px;text-align:left;}"),m=(0,f.css)("margin:0 0 20px;font-size:40px;font-weight:bold;@media (min-width:700px){margin-top:20px;}a{display:block;color:white;text-decoration:none;}"),b=(0,f.css)("color:rgba(255,255,255,0.8);a{color:white;}");t.default=d,e.exports=t.default},492:function(e,t,n){e.exports=n.p+"static/herchelshead.d39009c9.jpg"},238:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),c=a(l),u=n(29),s=n(43),f=(a(s),n(236)),d=a(f),p=n(237),h=a(p),m=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return c.default.createElement("div",{className:b},c.default.createElement("header",{className:x},c.default.createElement(d.default,null),c.default.createElement(h.default,null)),c.default.createElement("main",{role:"main"},t()))},t}(c.default.Component);(0,u.injectGlobal)('*{box-sizing:border-box;&:before,&:after{box-sizing:inherit;}}:root{--primary:deepskyblue;--gray:#333;--white:white;}body{margin:10px;background:var(--primary);line-height:1.7;overflow:scroll;font-family:helvetica,arial,sans-serif;}h1,h2,h3{line-height:1.4;color:var(--gray);margin:1em 0 0.5em;&:first-child{margin-top:0;}}h1{@media (max-width:700px){font-size:30px;}}h2{@media (max-width:700px){font-size:25px;}}.content{position:relative;min-height:calc(100vh - 20px);padding:40px;background:var(--white);font-family:georgia;color:#666;font-size:22px;line-height:2;@media (min-width:700px){&:before{content:"";position:absolute;right:100%;top:70px;transform:translatey(-50%);height:0;width:0;border-top:solid transparent 20px;border-right:solid var(--white) 20px;border-bottom:solid transparent 20px;}}em{color:#777;}a{color:var(--primary);filter:brightness(0.8);}}');var b=(0,u.css)("width:94%;max-width:1200px;margin:0 auto;--header-width:200px;@media (min-width:700px){display:flex;}@media (min-width:1000px){--header-width:320px;}header{margin-right:60px;@media (min-width:700px){flex-basis:var(--header-width);flex-shrink:0;}}main{@media (min-width:700px){flex-grow:1;width:calc(100% - var(--header-width));}}"),x=(0,u.css)("text-align:right;color:white;");m.propTypes={children:c.default.PropTypes.func,location:c.default.PropTypes.object,route:c.default.PropTypes.object},t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-68ad35e9d412bd716b8a.js.map