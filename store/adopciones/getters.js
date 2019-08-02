export default {
  getCount(state) {
    return {
      perros: state.perros.length,
      gatos: state.gatos.length
    };
  },
  getAdopciones(state) {
    return [...state.perros, ...state.gatos, ...state.otros];
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
