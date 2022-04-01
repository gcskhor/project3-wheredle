export default function initPlacesController(db) {
  const allLocations = (request, response) => {
    db.Place.findAll()
      .then((places) => {
        console.log(places);
        response.send({ places });
      })
      .catch((error) => console.log(error));
  };

  return {
    allLocations,
  };
}
