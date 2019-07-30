export default {
  getCount(state) {
    return {
      perros: state.perros.length,
      gatos: state.gatos.length
    };
  },
  getPerros(state) {
    return state.perros;
  }
}