import Vue from "./vue";
import App from "./app";

new Vue({
	el:"#app",
	components:{
		'app': App
	},
	template:`<app/>`
});