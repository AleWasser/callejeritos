import {
  db,
  storage
} from '~/plugins/firebase.js';

export default {
  createMascota({
    dispatch
  }, data) {
    return db.ref(`data/mascotas/${data.categoria}`)
      .push(data)
      .then(res => {
        if (data.imagen) {
          data.id = res.key;
          dispatch('uploadImage', {
            storageRef: `imagenes/adopciones/${data.categoria}/${data.id}`,
            data: data
          });
        } else {
          dispatch('storeMascotas');
        }
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
  },
  editMascota({
    dispatch
  }, data) {
    return db.ref(`data/mascotas/${data.deleteData}/${data.id}`)
      .remove((error) => {
        if (error) {
          console.error(error);
          return error;
        } else {
          db.ref(`data/mascotas/${data.categoria}/${data.id}`)
            .update({
              id: data.id,
              categoria: data.categoria,
              nombre: data.nombre,
              imageUrl: data.imageUrl
            })
            .then(() => {
              dispatch('storeMascotas');
            })
            .catch(err => console.error(err));
        }
      });
  },
  deleteMascota({
    dispatch
  }, data) {
    return db.ref(`data/mascotas/${data.categoria}/${data.id}`)
      .remove()
      .then(() => {
        dispatch('storeMascotas');
      })
      .catch(err => console.error(err))
  },
  uploadImage({
    dispatch
  }, payload) {
    const task = storage.ref(payload.storageRef).put(payload.data.imagen);
    task.on('state_changed',
      snapshot => {},
      err => console.error(err),
      () => {
        task.snapshot.ref.getDownloadURL()
          .then(url => {
            payload.data.imageUrl = url;
            dispatch('setImage', {
              data: payload.data
            });
          });
      });
  },
  setImage({
    dispatch
  }, payload) {
    return db.ref(`data/mascotas/${payload.data.categoria}/${payload.data.id}`)
      .update({
        imageUrl: payload.data.imageUrl
      })
      .then(() => {
        dispatch('storeMascotas');
      })
      .catch(err => console.error(err));
  }
}