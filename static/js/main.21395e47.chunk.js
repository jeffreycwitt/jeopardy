(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(16),r=a.n(o),l=(a(24),a(9)),i=a(3),c=a(4),d=a(6),u=a(5),m=a(2),h=a(7),p=(a(25),a(17)),f=a.n(p),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleToggleSelected=a.handleToggleSelected.bind(Object(m.a)(a)),a.handleToggleAnswer=a.handleToggleAnswer.bind(Object(m.a)(a)),a.state={selected:!1,answer:!1,audio:new Audio("data/Jeopardy-theme-song.mp3")},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleToggleSelected",value:function(){this.setState(function(e){return{selected:!e.selected,answer:!e.selected&&e.answer}})}},{key:"handleToggleAnswer",value:function(){this.setState(function(e){return{answer:!e.answer}})}},{key:"componentDidUpdate",value:function(){this.state.selected&&!this.state.answer?(console.log("test1"),this.state.audio.play()):(console.log("test2"),this.state.audio.pause())}},{key:"render",value:function(){var e=this,t=this.state.selected?"question selected":"question";return s.a.createElement("div",{className:t},s.a.createElement("div",{onClick:this.handleToggleSelected},s.a.createElement("p",null,this.props.value)),s.a.createElement("div",null,this.state.selected&&!this.state.answer&&s.a.createElement("p",null,this.props.question),this.state.selected&&!this.state.answer&&s.a.createElement("button",{onClick:this.handleToggleAnswer},"Show Answer"),this.state.answer&&s.a.createElement("p",{onClick:this.handleToggleAnswer},this.props.answer),this.state.answer&&e.props.teams.map(function(t){return s.a.createElement("p",null,t.name,s.a.createElement("button",{onClick:function(){e.props.handleAwardPoints(t.name,e.props.value,!0),e.handleToggleSelected()}},"Correct"),s.a.createElement("button",{onClick:function(){e.props.handleAwardPoints(t.name,e.props.value,!1),e.handleToggleSelected()}},"Wrong"))})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleEditTeam=a.handleEditTeam.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleEditTeam",value:function(e){console.log(e.target.getAttribute("data-value"),e.target.textContent),this.props.handleEditTeam(this.props.name,e.target.getAttribute("data-value"),e.target.textContent)}},{key:"render",value:function(){return s.a.createElement("span",{className:"team"},s.a.createElement("span",{contenteditable:"true",onBlur:this.handleEditTeam,"data-value":"team"},this.props.name),": ",s.a.createElement("span",{contenteditable:"true",onBlur:this.handleEditTeam,"data-value":"score"},this.props.score))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleAwardPoints=a.handleAwardPoints.bind(Object(m.a)(a)),a.handleEditTeam=a.handleEditTeam.bind(Object(m.a)(a)),a.handleLoadGame=a.handleLoadGame.bind(Object(m.a)(a)),a.loadGame=a.loadGame.bind(Object(m.a)(a)),a.state={teams:[{name:"team1",score:0},{name:"team2",score:0}],questions:[],game:"data/test.json"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleEditTeam",value:function(e,t,a){console.log("test",e,t,a),this.setState(function(n){var s=n.teams.filter(function(t){return t.name===e})[0];return"score"===t?s.score=parseInt(a):"team"===t&&(s.name=a),{teams:Object(l.a)(n.teams)}})}},{key:"handleAwardPoints",value:function(e,t,a){this.setState(function(n){var s=n.teams.filter(function(t){return t.name===e})[0];return s.score=a?s.score+t:s.score-t,{teams:Object(l.a)(n.teams)}})}},{key:"handleLoadGame",value:function(e){e.preventDefault();var t=this.refs.game.value;this.setState({game:t}),this.loadGame(t)}},{key:"loadGame",value:function(e){var t=this;f.a.get(e).then(function(e){t.setState({questions:e.data.questions})})}},{key:"componentDidMount",value:function(){this.loadGame(this.state.game)}},{key:"render",value:function(){var e=this,t=function(t){var a=e.state.questions.map(function(a){if(a.category===t)return s.a.createElement(g,{value:a.value,question:a.question,answer:a.answer,handleAwardPoints:e.handleAwardPoints,teams:e.state.teams})});return s.a.createElement("div",{className:"column"},s.a.createElement("div",null,t),a)};return s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("span",{id:"title"},"Jeopardy"),s.a.createElement("form",{onSubmit:this.handleLoadGame},s.a.createElement("input",{type:"text",placeholder:"game url",ref:"game"}),s.a.createElement("button",null,"Load Game")),s.a.createElement("div",{id:"teamWrapper"},e.state.teams.map(function(t){return s.a.createElement(v,{name:t.name,score:t.score,handleEditTeam:e.handleEditTeam})}))),s.a.createElement("div",{className:"App"},e.state.questions.map(function(e){return e.category}).filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e){return t(e)})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.21395e47.chunk.js.map