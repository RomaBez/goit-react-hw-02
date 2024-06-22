import css from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Description;
