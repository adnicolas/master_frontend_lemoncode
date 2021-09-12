import { createStore, createLogger } from 'vuex'


export interface State {
    orgName: string;
}
const state: State = {
    orgName: 'lemoncode'
}

const getters = {
    orgNameGetter: (state: State) => state.orgName,
}
const actions = {
  updateOrgName: ({ commit }, payload) => {
      commit('updateOrg', payload)
  }
}

const mutations = {
    updateOrg: (state, name) => {
        state.orgName = name;
    }
}
  
export default createStore({
    state,
    getters,
    actions,
    mutations,
    plugins: [createLogger()]
})

