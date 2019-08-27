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
    return db.ref('data')
      .once('value')
      .then(res => {
        let data = res.val();
        commit('adopciones/setAdopciones', data.mascotas);
        commit('blog/setPosts', data.blog);
      })
      .catch(err => console.log(err));
  }
}

export const getters = {
  getBreakpoint(state) {
    return state.breakpoint;
  }
}