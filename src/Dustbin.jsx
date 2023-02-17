import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Textbox from './Elements/TextBox.jsx';
import { ItemTypes } from './ItemTypes.jsx';
function getStyle (backgroundColor)
{
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    
    width: "100%",
    height: "100%",
    color: 'black',
    // backgroundColor,
    paddingTop: '1rem',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
  };
}
export const Dustbin = ({ greedy, children }) =>
{
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
  );
  const text = greedy ? 'greedy' : 'not greedy';
  let backgroundColor = 'rgba(0, 0, 0, .5)';
  if (isOverCurrent || (isOver && greedy))
  {
    backgroundColor = 'darkgreen';
  }
  return (
    <div ref={drop} style={getStyle(backgroundColor)}>
      {/* {text} */}
      <br />
      {hasDropped && <span><input type="text" /> {hasDroppedOnChild && ' on child'}</span>}

      {/* <div>{children}</div> */}
    </div>
  );
};
