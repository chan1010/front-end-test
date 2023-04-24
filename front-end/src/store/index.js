
import { createStore} from 'vuex';
import album from './modules/Album';

const Store = createStore({
  modules: {
    album
  },
})

export default Store;