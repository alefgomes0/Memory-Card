export const Card = ( {name, url, alt} ) => {
  return (
    <div className="card">
      <img src={url} alt={alt} />
      <p>{name}</p>
    </div>
  )
}