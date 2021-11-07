const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (
    data === null
    /*no tienes datos
        me devuelves los predefinido en este caso un array vacio */
  ) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
/*Para que te salga errores aunque funciona sin lo del objeto*/
const obj = {
  get: get,
  set: set,
};

export default obj;
