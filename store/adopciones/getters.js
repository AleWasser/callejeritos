export default {
  getCount(state) {
    return {
      perros: state.perros.length,
      gatos: state.gatos.length
    };
  },
  getPerros(state) {
    return state.perros;
  },
  getGatos(state) {
    return state.gatos;
  },
  getOtros(state) {
    return state.otros;
  }
}