import {
  db
} from '~/plugins/firebase.js';

export const state = () => ({
  breakpoint: ''
});

export const mutations = {
  setBreakpoint(state, breakpoint) {
    state.breakpoint = breakpoint;
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, context) {
    return db.ref('data/mascotas')
      .once('value')
      .then(res => {
        commit('adopciones/setAdopciones', res.val());
      })
      .catch(err => console.log(err));
  }
}

export const getters = {
  getBreakpoint(state) {
    return state.breakpoint;
  }
}