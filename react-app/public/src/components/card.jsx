import "./card.css";
function Card({ name, email, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

export default Card;