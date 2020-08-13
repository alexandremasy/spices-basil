import isNil from '../utils/isNil'

let __vue = null;

let vue = {};
vue.install = (basil) => {
  if (!isNil(basil.$vue)){
    return;
  }

  Object.defineProperty(basil, '$vue', {
    get: () => __vue,
    set: (value) => {
      __vue = value;
      basil.reset();
    }
  })
}

export default vue;
