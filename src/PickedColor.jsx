const PickedColor = ({ selectColor, setSelectColor }) => {
  return (
    <>
      <button onClick={() => setSelectColor("Blue")}> Blue </button>
      <button onClick={() => setSelectColor("Red")}>Red</button>
      <button onClick={() => setSelectColor("Green ")}>Green</button>
    </>
  );
};
export default PickedColor;

// const ChangeColor = ({ selectButton, setSelectButton }) => {
//   return (
//     <>
//     <button onClick={() => setSelectButton("Red")}
//     </>
//   )
// }
