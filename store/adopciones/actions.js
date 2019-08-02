import {
    db
} from '~/plugins/firebase.js';

export default {
    createMascota({
        commit
    }, data) {
        console.log(data);
    }
}