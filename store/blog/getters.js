import moment from 'moment';

export default {
  getPosts(state) {
    return state.posts;
  },
  getPostById: (state) => (id) => {
    return state.posts.find(element => {
      return element.id === id;
    });
  },
  getSliderPosts(state) {
    let posts = [...state.posts];
    let sortedPosts = posts.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    let latest = sortedPosts.slice(0, 5);
    return latest;
  }
}