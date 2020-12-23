import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import VueMobileDetection from "vue-mobile-detection";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueMobileDetection);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
