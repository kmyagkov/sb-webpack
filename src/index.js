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

const fetchTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await res.json();
  return json;
}

fetchTodo().then((json) => console.log(json))

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})
