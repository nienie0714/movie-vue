import Vue from 'vue';
import Vuex from 'vuex';
import { serialize, getLoc, setLoc, getSen, setSen } from '../utils';
import { xhr, api } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  state: {
    cacheData: getSen('cacheData') || {},
    lang: getLoc('lang') || 'zh'
  },
  getters: {
    getCacheData: state => serialize(state.cacheData),
    getLang: state => state.lang
  },
  mutations: {
    setCacheData(state, data) {
      state.cacheData = { ...state.cacheData, ...data };
      setSen('cacheData', state.cacheData);
    },
    setLang(state, data) {
      state.lang = data;
      setLoc('lang', data);
    }
  },
  actions: {}
});
