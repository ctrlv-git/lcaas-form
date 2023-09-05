// import { h } from 'vue';
export default {
  checked(conf, key) {
    return conf.__slot__[key];
  },
  unchecked(conf, key) {
    return conf.__slot__[key];
  },
  icon(conf, key) {
    return conf.__slot__[key];
  },
  'checked-icon'(conf, key) {
    return conf.__slot__[key];
  },
  'unchecked-icon'(conf, key) {
    return conf.__slot__[key];
  },
};
