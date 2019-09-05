export default {
  getUsuarios(state) {
    return state.usuarios;
  },
  getUsuarioById: (state) => (id) => {
    return state.usuarios.find(element => {
      return element.id === id;
    });
  },
}