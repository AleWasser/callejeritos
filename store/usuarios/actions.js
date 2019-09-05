import {
    db,
    storage,
    auth
} from '~/plugins/firebase.js';
import moment from '~/plugins/moment.js';

export default {
    createUser({
        dispatch,
        commit
    }, data) {
        data.fecha = moment().format('L');
        return auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(user => {
                if (user) {
                    user.updateProfile({
                            displayName: data.nombre
                            // photoUrl: data.imagen
                        })
                        .then(() => {
                            data.usuario_id = user.user.uid;
                            db.ref(`data/usuarios`)
                                .push(data)
                                .then(res => {
                                    if (data.imagen) {
                                        data.id = res.key;
                                        dispatch('uploadImage', {
                                            data: data
                                        });
                                    } else {
                                        dispatch('storeUsuarios');
                                    }
                                    this.$router.push('/admin/usuarios');
                                    commit('setNotification', {
                                        text: 'Usuario creado',
                                        color: 'success'
                                    }, {
                                        root: true
                                    });
                                })
                        })
                }
            })
            .catch(err => console.log(err));
    },
    editUser({
        dispatch,
        commit
    }, data) {
        console.log('[Edit usuario]', data);
        return db.ref(`data/usuarios/${data.id}`)
            .remove((error) => {
                if (error) {
                    console.error('[Edit usuario]', error);
                    return error;
                } else {
                    delete data.deleteData;
                    db.ref(`data/usuarios/${data.id}`)
                        .update(data)
                        .then(() => {
                            if (data.imagen) {
                                dispatch('uploadImage', {
                                    data
                                });
                            }
                            dispatch('storeUsuarios');
                            this.$router.push('/admin/usuarios');
                            commit('setNotification', {
                                text: 'Usuario editado',
                                color: 'success'
                            }, {
                                root: true
                            });
                        })
                        .catch(err => console.error(err));
                }
            });
    },
    deleteUser({
        dispatch,
        commit,
        state
    }, data) {
        console.log('[Delete usuario]', data);
        if (state.token != data.user_id) {
            return db.ref(`data/usuarios/${data.id}`)
                .remove()
                .then(() => {
                    if (data.imageUrl) {
                        dispatch('deleteImage', {
                            data
                        });
                    } else {
                        dispatch('storeUsuarios');
                    }
                    commit('setNotification', {
                        text: 'Usuario eliminado',
                        color: 'error'
                    }, {
                        root: true
                    });
                })
                .catch(err => console.error(err));
        } else {
            commit('setNotification', {
                text: 'No puedes eliminar este usuario.',
                color: 'warning'
            }, {
                root: true
            });
        }
    },
    storeUsuarios({
        commit
    }) {
        return db.ref('data/usuarios')
            .once('value')
            .then(res => {
                commit('setUsuarios', res.val());
            })
            .catch(err => console.log(err));
    },
    uploadImage({
        dispatch
    }, payload) {
        commit('setNotification', {
            text: 'Fotos de usuarios en construccion',
            color: 'warning'
        }, {
            root: true
        });
        // const task = storage.ref(`imagenes/blog/${payload.data.id}/${payload.data.id}`).put(payload.data.imagen);
        // task.on('state_changed',
        //     snapshot => console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
        //     err => console.error(err),
        //     () => {
        //         task.snapshot.ref.getDownloadURL()
        //             .then(url => {
        //                 payload.data.imageUrl = url;
        //                 dispatch('setImage', {
        //                     data: payload.data
        //                 });
        //             });
        //     });
    },
    setImage({
        dispatch
    }, payload) {
        return db.ref(`data/usuarios/${payload.data.id}`)
            .update({
                imageUrl: payload.data.imageUrl
            })
            .then(() => {
                dispatch('storeUsuarios');
            })
            .catch(err => console.error(err));
    },
    deleteImage({
        dispatch
    }, payload) {
        return storage.ref(`imagenes/blog/${payload.data.id}/${payload.data.id}`)
            .delete()
            .then(() => {
                dispatch('storeUsuarios');
            })
            .catch(err => console.error(err));
    }
}