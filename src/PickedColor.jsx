const PickedColor = ({ selectColor, setSelectColor }) => {
                    //this is the variable
  
  return (
    <>
      <button className={selectColor} onClick={() => setSelectColor("blue")}> Blue </button>
      <button onClick={() => setSelectColor("red")}>Red</button>
      <button onClick={() => setSelectColor("green ")}>Green</button>

      <button className={selectColor} onClick={() => setSelectColor("blue")}> Blue </button>
      <button className={selectColor} onClick={() => setSelectColor("red")}> Red </button>
      <button onClick={() => setSelectColor("green ")}>Green</button>

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
