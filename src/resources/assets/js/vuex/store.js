import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/index'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
    modules: {
        todo
    }
})
