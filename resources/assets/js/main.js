var Vue = require("vue/dist/vue.js");

Vue.component("cruelWorld", require("./components/cruelWorld.vue").default);


const app = new Vue({
  el: "#app"
});