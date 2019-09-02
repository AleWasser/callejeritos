import Cookie from "js-cookie";

import {
  db,
  auth
} from '~/plugins/firebase.js';

export const state = () => ({
  breakpoint: '',
  token: null
});

export const mutations = {
  setBreakpoint(state, breakpoint) {
    state.breakpoint = breakpoint;
  },
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, context) {
    return db.ref('data')
      .once('value')
      .then(res => {
        let data = res.val();
        commit('adopciones/setAdopciones', data.mascotas);
        commit('blog/setPosts', data.blog);
      })
      .catch(err => console.log(err));
  },
  userLogin({
    commit
  }, data) {
    auth.signInWithEmailAndPassword(data.email, data.password)
      .then(data => {
        return data.user.getIdToken();
      })
      .then(token => {
        commit('setToken', token);
        localStorage.setItem('token', token);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() * 1000
        );
        Cookie.set("jwt", token);
        Cookie.set(
          "expirationDate",
          new Date().getTime() * 1000
        );
        this.$router.push('/admin');
      })
      .catch(err => console.error(err));
  },
  initAuth({
    commit,
    dispatch
  }, req) {
    let token;
    let expirationDate;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("No token or invalid token");
      dispatch("logout");
      return;
    }
    commit("setToken", token);
  },
  logout({
    commit
  }) {
    commit("clearToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
    this.$router.push("/admin/login");
  },
}

export const getters = {
  getBreakpoint(state) {
    return state.breakpoint;
  },
  isAuthenticated(state) {
    return state.token != null;
  }
}