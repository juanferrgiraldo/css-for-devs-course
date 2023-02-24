import "./styles.css";
import AbsolutePositioning from "./modules/positioned-layout/absolutePositioning";
import Tooltip from "./modules/positioned-layout/tooltip";
import Topic from "./ui/topic";
import WidthAndHeight from "./modules/flow-layout/widthAndHeight";

export default function App() {
  return (
    <div className="App">
      <h1>CSS for Devs playground</h1>
      <section>
        <h2>Flow Layout</h2>
        <WidthAndHeight />
      </section>
      <section>
        <h2>Positioned Layout</h2>
        <Topic title="Styled Card">
          <AbsolutePositioning />
        </Topic>
        <Topic title="Informative Tooltip">
          <Tooltip />
        </Topic>
      </section>
    </div>
  );
}
