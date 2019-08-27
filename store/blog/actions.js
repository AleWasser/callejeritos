import {
    db,
    storage
} from '~/plugins/firebase.js';

export default {
    createPost({
        dispatch
    }, data) {
        console.log('[Create post]', data);
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
        const task = storage.ref(`imagenes/blog/${payload.data.id}/${payload.data.titulo}`).put(payload.data.imagen);
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
}