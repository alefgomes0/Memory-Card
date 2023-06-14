export function Card( {name, url, alt} ) {
  return (
    <div className="card">
      <img src={url} alt={alt}></img>
      <p>{name}</p>
    </div>
  )
}