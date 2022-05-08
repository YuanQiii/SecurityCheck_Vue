/*
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-18 22:15:51
 * @FilePath: \SecurityCheck_Vue\src\store\modules\yc.js
 */
const state = {
    languageIndex: 0,
    pageLoading: false,
};
const getters = {

};
const mutations = {
    UPDATE_LANGUAGE_INDEX(state, payload) {
        state.languageIndex = payload
    },
    UPDATE_PAGE_LOADING(state, payload) {
        state.pageLoading = payload
    }
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};