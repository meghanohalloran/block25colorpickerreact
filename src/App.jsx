import { ColorButton } from './ColorButton';
import './index.css';

function ColorButton () {
  return (
    <div>
     <h1>Color Picker</h1>
     <PickedColor selectColor={selectColor}/>
     <ColorButton colorName /> 
    </div>
  );
}

export default App
