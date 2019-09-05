export default {
    setUsuarios(state, data) {
        state.usuarios = [];
        for (let key in data) {
            const item = data[key];
            item.id = key;
            state.usuarios.push(item);
        }
    }
}