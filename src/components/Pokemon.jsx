const Pokemon = ({ details }) => {
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
            {details.types.map((typeI, i) => {
              return <p key={i}>{typeI.type.name}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
