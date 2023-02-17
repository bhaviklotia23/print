import React, { useState } from "react";
import Textbox from "./Elements/TextBox";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";


const Canvas = ({ greedy, children }) => {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop (_item, monitor)
      {
        const didDrop = monitor.didDrop();
        if (didDrop && !greedy)
        {
          return;
        }
        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [greedy, setHasDropped, setHasDroppedOnChild],
  )

  const text = greedy ? 'greedy' : 'not greedy';
  let backgroundColor = 'rgba(0, 0, 0, .5)';
  if (isOverCurrent || (isOver && greedy))
  {
    backgroundColor = 'darkgreen';
  }

  return (
    <>
      <div
        ref={drop}
      >
        <h2>This is my Design Canvas</h2>
      </div>
      <div style={{ position: "relative" }}>
        {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}
      </div>
    </>
  );
};

export default Canvas;
