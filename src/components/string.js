import AudioWrapper from "../aud";
const aw = new AudioWrapper();

const String = (props) => {
  const handleClick = () => {
    aw.loadSound(`strings/${props.stringName}.mp3`).then(() =>
      aw.playSound(`strings/${props.stringName}.mp3`)
    );
    console.log(`props:${props}`);
  };
  return <button onClick={handleClick}>{props.name}</button>;
};
export default String;
