const getApiData = () => {
  return (
    fetch("https://swapi.dev/api/people/")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        const data = data.results.map((character) => {
          return {
            id: character.id,
            img: character.image,
            name: character.name,
            species: character.species,
            status: character.status,
            origin: character.origin.name,
            episode: character.episode.length,
          };
        });
        return data;
      })
  );
};
export default getApiData;
