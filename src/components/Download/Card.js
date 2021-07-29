import './Card.css';

export const Card = (props) => {
  let alignCard = 'flex-start';
  if (props.id === '2') alignCard = 'center';
  else if (props.id === '3') alignCard = 'flex-end';
  return (
    <div className="card" style={{ alignSelf: alignCard }}>
      <div className="card__image">
        <img src={props.image} alt="" />
      </div>

      <div className="card__text">
        <h3 className="card__title">Add to {props.browser}</h3>
        <p className="">Minimum version {props.version}</p>
      </div>
      <hr className="card-dots" />
      <div className="card__actions">
        <button className="btn-blue">Add & Install Extension</button>
      </div>
    </div>
  );
};
