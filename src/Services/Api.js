// const getApiData = (data) => {
//   return (
//     fetch("https://swapi.dev/api/people/")
//       /*Hay que retornar el fecth para que no salga undefined
//        */
//       .then((response) => response.json())
//       .then((data) => {
//         const characters = data.results;
//         return characters;
//       })
//   );
// };
// export default getApiData;
const getApiData = (data) => {
  return (
    fetch("https://swapi.py4e.com/api/people/")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        return characters;
      })
  );
};
export default getApiData;
