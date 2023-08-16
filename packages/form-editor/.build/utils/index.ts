export function wrapperEnv(envConf: any): ViteEnv {
  const ret: any = {
    VITE_BUILD_PROXY: [],
  };
  const mapValue: any = {
    true: true,
    false: false,
  };
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName];
    realName = mapValue[realName] ?? realName;

    if (envName === 'VITE_BUILD_PORT') {
      realName = Number(realName);
    }

    if (envName === 'VITE_BUILD_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }
    ret[envName] = realName;
  }
  return ret;
}
