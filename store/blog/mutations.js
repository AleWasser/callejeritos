export default {
    setPosts(state, data) {
        console.log('[setPosts blog]', data)
        state.posts = [];
        for (let key in data) {
            const item = data[key];
            item.id = key;
            state.posts.push(item);
        }
    }
}