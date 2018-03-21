import Vue from 'vue';
import Vuex from 'vuex';


import moduleA from './moduleA/index.js';

import moduleB from './moduleB/index.js';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB,
    }
})