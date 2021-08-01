import './Feature.css';

export const Feature = (props) => {
  return (
    <div className="feature__content">
      <div className="feature__image">
        <img src={props.image} alt="" />
      </div>
      <div className="feature__text">
        <h2 className="feature__text-title">{props.title}</h2>
        <p className="feature__text-description">{props.description}</p>
        <button className="btn btn-blue btn-features">More Info</button>
      </div>
    </div>
  );
};
