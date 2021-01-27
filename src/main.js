import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMobileDetection from "vue-mobile-detection";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css"; // Default-dark theme

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueMobileDetection);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
