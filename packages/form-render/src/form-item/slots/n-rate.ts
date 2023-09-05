export default {
  default(conf, key) {
    return conf.__slot__[key];
  },
};
