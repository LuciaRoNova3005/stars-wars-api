const getApiData = () => {
  return (
    fetch("https://swapi.dev/api/people/")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  );
};
export default getApiData;
