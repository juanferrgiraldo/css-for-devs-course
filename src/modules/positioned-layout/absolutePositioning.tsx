import classes from "./absolutePositioning.module.css";

const AbsolutePositioning: React.FC = () => {
  return (
    <>
      <div className={classes.box}>
        <div className={`${classes.big} ${classes.circle}`}></div>
        <div className={`${classes.medium} ${classes.circle}`}></div>
        <div className={`${classes.small} ${classes.circle}`}></div>
      </div>
    </>
  );
};

export default AbsolutePositioning;
