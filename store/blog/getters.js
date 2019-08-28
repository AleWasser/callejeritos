export default {
  getPosts(state) {
    return state.posts;
  },
  getPostById: (state) => (id) => {
    return state.posts.find(element => {
      return element.id === id;
    });
  }
}