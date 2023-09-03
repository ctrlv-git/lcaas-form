// import { h } from 'vue';
export default {
  prefix(conf, key) {
    return conf.__slot__[key];
  },
  suffix(conf, key) {
    return conf.__slot__[key];
  },
};
