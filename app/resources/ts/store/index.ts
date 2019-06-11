import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: { versions: '0.1.0' },
  modules: {},
};

export default new Vuex.Store<RootState>(store);

type RootState = {};
