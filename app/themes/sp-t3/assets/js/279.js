(self.webpackChunksp_t3=self.webpackChunksp_t3||[]).push([[279],{279:function(t,i,e){"use strict";e.r(i),e.d(i,{Title:function(){return c}});var i=e(917),s=e.n(i),a=e(642),i=e(41),r=e.n(i),n=e(8),o=e(363);function l(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function h(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function u(t,i,e){return i&&h(t.prototype,i),e&&h(t,e),t}var c=function(){function e(t,i){l(this,e),this.app=i,this.selector=t,this.init()}return u(e,[{key:"init",value:function(){var i=this;debug("call init from Title"),this.DOM={el:Array.from(document.querySelectorAll(this.selector))},this.instances=[],this.bounds=s()({threshold:.1,margins:{top:0,bottom:0}}),n.GJ||this.DOM.el.forEach(function(t){i.initForElem(t)})}},{key:"initForElem",value:function(t){t=new d(t,this.bounds,this.app);this.instances.push(t),t.watch()}},{key:"watch",value:function(t){t.watch()}}]),e}(),d=function(){function n(t,i,e){var s=this;l(this,n),this.app=e,this.Bounds=i,this.shouldRender=!0,this.DOM={title:t,words:null,wordsText:null},this.splitBy="words",this.duration=1.2,(o.Z.hasClass(this.DOM.title,"js-reveal-char")||o.Z.hasClass(this.DOM.title,"js-reveal-char--rotation"))&&(this.splitBy="chars",this.duration=.8);r()({target:this.DOM.title,by:this.splitBy});this.DOM.words=this.DOM.title.querySelectorAll(".word"),this.animation="translate-reveal",(o.Z.hasClass(this.DOM.title,"js-reveal-text--rotation")||o.Z.hasClass(this.DOM.title,"js-reveal-char--rotation"))&&(this.animation="rotate-x"),this.DOM.words.forEach(function(t){"chars"===s.splitBy||(t.innerHTML='<span class="word-text">'.concat(t.innerHTML,"</span>"))}),"chars"===this.splitBy?this.DOM.wordsText=this.DOM.title.querySelectorAll(".char"):this.DOM.wordsText=this.DOM.title.querySelectorAll(".word-text"),this.tl=a.ZP.timeline().pause(),"rotate-x"===this.animation?this.tl.from(this.DOM.wordsText,{yPercent:50,rotationX:-90,scale:0,opacity:0,clearProps:"opacity,transform,transform-origin",ease:"Power3.out",stagger:.05,delay:.2,duration:this.duration,onStart:function(){s.DOM.title.style.transformOrigin="bottom"},onComplete:function(){o.Z.addClass(s.DOM.title,"animation-ended")}}):this.tl.from(this.DOM.wordsText,{yPercent:100,ease:"Power3.out",stagger:.075,delay:.2,duration:this.duration,onComplete:function(){o.Z.addClass(s.DOM.title,"animation-ended")}})}return u(n,[{key:"watch",value:function(){var i=this;this.Bounds.watch(this.DOM.title,function(t){i.onEnter()},function(t){})}},{key:"unwatch",value:function(){this.Bounds.unWatch(this.DOM.title)}},{key:"onEnter",value:function(){this.tl.restart(),this.unwatch()}}]),n}()}}]);