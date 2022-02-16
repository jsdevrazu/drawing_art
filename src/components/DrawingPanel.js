import { useRef } from 'react';
import '../styles/drawingPanel.scss';
import Row from './Row';
import { exportComponentAsPNG } from "react-component-export-image";


const DrawingPanel = ({width, height, selectedColor}) => {
    const panelRef= useRef()

    let rows = [];

    // looping and push the array of height value
    for(let i = 0; i< height; i++){
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

  return (
    <>
    <div id="drawingPanel">
        <div id="pixels" ref={panelRef}>
            {rows}
        </div>
        <button className="button" onClick={() => exportComponentAsPNG(panelRef) }>
            Export as PNG
        </button>
    </div>
    </>
  )
}

export default DrawingPanel
