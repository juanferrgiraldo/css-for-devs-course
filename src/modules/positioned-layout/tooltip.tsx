import classes from "./tooltip.module.css";

const Tooltip: React.FC = () => {
  return (
    <>
      <p>
        The tradicional japanese tea ceremony centers on the preparation,
        serving, and drinking of{" "}
        <a href="/" className={classes.tooltipTrigger}>
          matcha
          <span className={classes.tooltip}>
            A concentrated powedered form of green tea
          </span>
        </a>{" "}
        as hot tea.
      </p>
    </>
  );
};

export default Tooltip;
