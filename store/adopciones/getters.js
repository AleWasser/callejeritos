export default {
  getCount(state) {
    return {
      perros: state.perros.length,
      gatos: state.gatos.length,
      otros: state.otros.length
    };
  },
  getAdopciones(state) {
    return [...state.perros, ...state.gatos, ...state.otros];
  },
  getMascota: (state) => (id) => {
    let mascotasArray = [...state.perros, ...state.gatos, ...state.otros];

    let mascota = mascotasArray.find((element) => {
      return element.id == id;
    });

    return mascota;
  },
  getPerros(state) {
    return state.perros;
  },
  getGatos(state) {
    return state.gatos;
  },
  getOtros(state) {
    return state.otros;
  },
  getCategorias(state) {
    return state.categorias;
  }
}