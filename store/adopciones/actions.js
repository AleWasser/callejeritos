import {
  db
} from '~/plugins/firebase.js';

export default {
  createMascota({
    dispatch
  }, data) {
    return db.ref(`data/mascotas/${data.categoria}`)
      .push(data)
      .then(res => {
        dispatch('storeMascotas');
      })
      .catch(err => console.log(err));
  },
  storeMascotas({
    commit
  }) {
    return db.ref('data/mascotas')
      .once('value')
      .then(res => {
        commit('setAdopciones', res.val());
      })
      .catch(err => console.log(err));
  }
}
