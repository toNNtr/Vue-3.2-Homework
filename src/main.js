import Vue from 'vue';
import App from './App.vue';

import {message1, message2} from "./file1";
import message from "./file2";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(message1);
alert(message2);
message("Hello, Vue!");