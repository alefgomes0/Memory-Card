export const Card = ({ name, url, alt, id, cardClick }) => {
  return (
    <div
      className="card"
      onClick={() => {
        cardClick(id);
      }}
    >
      <img src={url} alt={alt} />
      <p>{name}</p>
    </div>
  );
};
