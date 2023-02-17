import { useDrag } from 'react-dnd';
import { ItemTypes } from './constants';
const style = {
  display: 'flex',
  margin: '15px',
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  cursor: 'move',
};
const CustomElement = () =>
{
  const [, drag] = useDrag(() => ({ type: ItemTypes.BOX }));
  return (
    <div ref={drag} style={style}>
      Drag me
    </div>
  );
};

export default CustomElement;