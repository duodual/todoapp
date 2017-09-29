import Vue from 'vue'

Vue.config.debug = true

import todo from './components/todo/todo.vue'
import store from './vuex/store'

export default new Vue({
    el: '#todo',
    store,
    components: { todo }
})
