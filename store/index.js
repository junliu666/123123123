import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false
	},
	mutations: {
		login(state){
			state.hasLogin = true;
			console.log(state.hasLogin)
		},
		stateReport(state){
			console.log(state.hasLogin)
		}
	},
	actions: {
        actionLogin({commit}){
            commit("login")
        },
	}
})

export default store