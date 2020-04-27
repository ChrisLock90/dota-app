(this["webpackJsonpdota-app"]=this["webpackJsonpdota-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),o=n.n(r),i=(n(12),n(1)),c=n(2),s=n(4),u=n(3),m=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={topPlayers:[],heroDetails:e.hero,LaneRoles:[]},a}return Object(c.a)(n,[{key:"getTopPlayers",value:function(){var e=this;fetch("https://api.opendota.com/api/rankings?hero_id="+this.state.heroDetails.id,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({topPlayers:t})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getTopPlayers()}},{key:"componentWillReceiveProps",value:function(e){this.setState({heroDetails:e.hero})}},{key:"render",value:function(){return l.a.createElement("div",null,(t=this.state.heroDetails,l.a.createElement("h2",null,t.localized_name," Information")),(e=this.state.heroDetails,l.a.createElement("div",null,l.a.createElement("label",null,"Primary Attribute: "),e.primary_attr,l.a.createElement("p",null),l.a.createElement("label",null,"Attack Type: "),e.attack_type,l.a.createElement("p",null),l.a.createElement("label",null,"Roles: "),e.roles,l.a.createElement("p",null),l.a.createElement("label",null,"Legs: "),e.legs,l.a.createElement("p",null))),function(e,t){if(null!==e.rankings&&void 0!==e.rankings)return l.a.createElement("div",null,l.a.createElement("h2",null,"Current Top 5 ",t.localized_name," Players"),l.a.createElement("p",null),l.a.createElement("label",null,"1. "),e.rankings[0].personaname,l.a.createElement("p",null),l.a.createElement("label",null,"2. "),e.rankings[1].personaname,l.a.createElement("p",null),l.a.createElement("label",null,"3. "),e.rankings[2].personaname,l.a.createElement("p",null),l.a.createElement("label",null,"4. "),e.rankings[3].personaname,l.a.createElement("p",null),l.a.createElement("label",null,"5. "),e.rankings[4].personaname,l.a.createElement("p",null))}(this.state.topPlayers,this.state.heroDetails));var e,t}}]),n}(l.a.Component));var h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={heroes:[],id:-1},a}return Object(c.a)(n,[{key:"getHeroData",value:function(){var e=this;fetch("https://api.opendota.com/api/heroes?api_key=B05481EB573059BDB0136454432E27F6",{method:"GET"}).then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){var n=e.localized_name.toUpperCase(),a=t.localized_name.toUpperCase();return n<a?-1:n>a?1:0})),e.setState({heroes:t})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getHeroData()}},{key:"GetId",value:function(e){this.setState({id:e})}},{key:"render",value:function(){var e=this,t=this.state.heroes.map((function(t,n){return l.a.createElement("button",{class:"btn-group",onClick:e.GetId.bind(e,t.id),key:t.id},t.localized_name)}));return l.a.createElement("div",null,l.a.createElement("ul",null,t),function(e,t){if(-1!==t)return l.a.createElement("div",null,l.a.createElement(m,{hero:e.find((function(e){return e.id===t}))}))}(this.state.heroes,this.state.id))}}]),n}(l.a.Component);var p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"Dota 2 Hero App"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(h,null))))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b46726aa.chunk.js.map