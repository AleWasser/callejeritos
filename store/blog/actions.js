import {
    db,
    storage
} from '~/plugins/firebase.js';
import moment from '~/plugins/moment.js';

export default {
    createPost({
        dispatch
    }, data) {
        console.log('[Create post]', data);
        data.fecha = moment().format('L');
        return db.ref(`data/blog`)
            .push(data)
            .then(res => {
                if (data.imagen) {
                    data.id = res.key;
                    dispatch('uploadImage', {
                        data: data
                    });
                } else {
                    dispatch('storePosts');
                }
            })
            .catch(err => console.log(err));
    },
    editPost({
        dispatch
    }, data) {
        console.log('[Edit Post]', data);
        return db.ref(`data/blog/${data.id}`)
            .remove((error) => {
                if (error) {
                    console.error('[Edit Post]', error);
                    return error;
                } else {
                    delete data.deleteData;
                    db.ref(`data/blog/${data.id}`)
                        .update(data)
                        .then(() => {
                            if (data.imagen) {
                                dispatch('uploadImage', {
                                    data
                                });
                            }
                            dispatch('storePosts');
                        })
                        .catch(err => console.error(err));
                }
            });
    },
    deletePost({
        dispatch
    }, data) {
        console.log('[Delete post]', data);
        return db.ref(`data/blog/${data.id}`)
            .remove()
            .then(() => {
                if (data.imageUrl) {
                    dispatch('deleteImage', {
                        data
                    });
                } else {
                    dispatch('storePosts');
                }
            })
            .catch(err => console.error(err));
    },
    storePosts({
        commit
    }) {
        return db.ref('data/blog')
            .once('value')
            .then(res => {
                commit('setPosts', res.val());
            })
            .catch(err => console.log(err));
    },
    uploadImage({
        dispatch
    }, payload) {
        const task = storage.ref(`imagenes/blog/${payload.data.id}/${payload.data.id}`).put(payload.data.imagen);
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
        return db.ref(`data/blog/${payload.data.id}`)
            .update({
                imageUrl: payload.data.imageUrl
            })
            .then(() => {
                dispatch('storePosts');
            })
            .catch(err => console.error(err));
    },
    deleteImage({
        dispatch
    }, payload) {
        return storage.ref(`imagenes/blog/${payload.data.id}/${payload.data.id}`)
            .delete()
            .then(() => {
                dispatch('storePosts');
            })
            .catch(err => console.error(err));
    }
}