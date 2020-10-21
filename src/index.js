import Vue from 'vue/dist/vue.runtime.min';
import Hello from './components/hello.vue';

import './assets/global.scss';

console.log('Entry point!!');

class Developer {
  code() {
    console.log('code');
  }
}

console.log(new Developer().code());

new Vue({
  render: h => h(Hello)
}).$mount('.app');
