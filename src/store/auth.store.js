import API from "@/modules/api";

const state = {
    user: null,
};

const getters = {
};

const actions = {


    getUser({ commit }) {
        return new Promise((resolve, reject) => {
            API.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('user-token')
            API.get("/users/profile/")
                .then((response) => {
                    commit("SET_USER", response.data);
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    login(_, payload) {
        return new Promise((resolve, reject) => {
            API.post("users/user/login/", {
                username: payload.username,
                password: payload.password,
            })
                .then((response) => {
                    const token = response.data.token
                    localStorage.setItem('user-token', token)
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};

const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
