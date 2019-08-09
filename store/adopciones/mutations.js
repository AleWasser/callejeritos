export default {
  setAdopciones(
    state, data) {
    state.perros = [];
    state.gatos = [];
    state.otros = [];
    for (let key in data.perros) {
      const item = data.perros[key];
      item.id = key;
      state.perros.push(item);
    }
    for (let key in data.gatos) {
      const item = data.gatos[key];
      item.id = key;
      state.gatos.push(item);
    }
    for (let key in data.otros) {
      const item = data.otros[key];
      item.id = key;
      state.otros.push(item);
    }
  }
}