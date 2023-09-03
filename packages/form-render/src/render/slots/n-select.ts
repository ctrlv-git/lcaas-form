export default {
  prefix(h, conf, key) {
    console.log('prefix', conf, key);
    //  <template slot="prepend">{conf.__slot__[key]}</template>
    return h();
  },
  suffix(h, conf, key) {
    console.log(conf, key);
    return h();
  },
};
