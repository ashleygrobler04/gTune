import {playNote} from "../audio";

const String = (props) => {
  const handleClick = () => {
    //console.log("Hi there");
    playNote(props.freq);
  };
  return <button onClick={handleClick}>{props.name}</button>;
};
export default String;
