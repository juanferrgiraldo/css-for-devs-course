import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}
const Topic: React.FC<Props> = (props: Props) => {
  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay((display) => !display);
  };
  return (
    <>
      <button onClick={displayHandler}>{props.title}</button>
      {display && props.children}
    </>
  );
};

export default Topic;
