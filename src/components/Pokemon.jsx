const Pokemon = ({ details }) => {
  let types = details.types.map((typeI) => typeI.type.name).join(", ");

  return (
    <>
      <div className="pokemon-card-container">
        <img
          className="pokemon-img"
          src={details.sprites.front_default}
          alt={details.name}
        ></img>
        <p>
          <strong>Name: </strong>
          {details.name}
        </p>
        <p>
          <strong>Weight: </strong> {details.weight} lbs
        </p>
        <p>
          <strong>Height: </strong> {details.height} feet
        </p>
        <div className="type-container">
          <p>
            <strong>Type/s: </strong>
          </p>
          <div className="types-seperator">
            <p>{types}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
