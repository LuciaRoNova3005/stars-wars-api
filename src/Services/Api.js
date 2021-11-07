const getApiData = () => {
  return (
    fetch("https://swapi.dev/api/people/")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        /*Tenemos los datos de la api y los limpiamos
         sort() invoca una función que recibe dos valores y los compara*/
        const characters = data.results;
        return characters;
      })
  );
};
export default getApiData;
