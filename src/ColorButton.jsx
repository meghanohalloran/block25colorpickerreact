
const ColorButton = ({ selectColor, setSelectColor }) => {
  return (
    <> 
    <button onClick={() => setSelectColor("red")}> color button red </button>
    <button onClick={() => setSelectColor("blue")}> color button Blue </button>
    <button onClick={() => setSelectColor("green")}> color button Green </button>

    {/* return <button style ={{ backgroundColor: red }}> change color </button> */}
    </>
  )

  // const ColorButton (props) { ... }
}
  
// function ColorButton (props) { ... }
//   return <button style ={{ backgroundColor: red }}> change color </button>
// } style
// };

export default ColorButton;