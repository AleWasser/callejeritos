import {
  db,
  storage
} from '~/plugins/firebase.js';
import moment from '~/plugins/moment.js';

export default {
  createMascota({
    dispatch
  }, data) {
    console.log('[Create Mascota]', data);
    data.fecha = moment().format('L');
    return db.ref(`data/mascotas/${data.categoria}`)
      .push(data)
      .then(res => {
        if (data.imagen) {
          data.id = res.key;
          dispatch('uploadImage', {
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
          delete data.deleteData;
          db.ref(`data/mascotas/${data.categoria}/${data.id}`)
            .update(data)
            .then(() => {
              if (data.imagen) {
                dispatch('uploadImage', {
                  data
                });
              }
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
        if (data.imageUrl) {
          dispatch('deleteImage', {
            data
          });
        } else {
          dispatch('storeMascotas');
        }
      })
      .catch(err => console.error(err))
  },
  uploadImage({
    dispatch
  }, payload) {
    const task = storage.ref(`imagenes/mascotas/${payload.data.id}`).put(payload.data.imagen);
    task.on('state_changed',
      snapshot => console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
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
  },
  deleteImage({
    dispatch
  }, payload) {
    return storage.ref(`imagenes/mascotas/${payload.data.id}`)
      .delete()
      .then(() => {
        dispatch('storeMascotas');
      })
      .catch(err => console.error(err));
  }
}