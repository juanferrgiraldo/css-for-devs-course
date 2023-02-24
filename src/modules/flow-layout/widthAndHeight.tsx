import classes from "./widthAndHeight.module.css";

const WidthAndHeight: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        <li>
          <p>Use CSS properties to center a card:</p>
          <div className={classes.maxWidthWrapper}>
            <div className={classes.card}>
              <p>
                Otters have long, slim bodies and relatively short limbs, their
                most striking anatomical features are the powerful webbed feet
                used to swim, and their seal-like abilities holding breath
                underwater.
              </p>
            </div>
          </div>
        </li>
        <li>
          <p>Put a frame around a figure tag:</p>
          <figure>
            <img
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
              alt="A beautiful cat looking at you with his big eyes"
            />
            <figcaption>Photo of a cat with withe background</figcaption>
          </figure>
        </li>
      </ul>

      <footer>
        <p>I'm from down under</p>
      </footer>
    </div>
  );
};

export default WidthAndHeight;
