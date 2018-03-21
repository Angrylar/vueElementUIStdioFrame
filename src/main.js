// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

import store from './store/index.js'

import $server from './server.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/**
 * 在引入 Element 时，可以传入一个全局配置对象。该对象目前仅支持 size 字段，用于改变组件的默认尺寸。
 */
// Vue.use(Element, { size: 'small' });


Vue.use(Vuex);

Vue.prototype.$$ = $server;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App },
})
