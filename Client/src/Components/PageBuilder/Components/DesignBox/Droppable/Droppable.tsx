import {useDroppable} from '@dnd-kit/core';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../util/types';

type DroppableProps = {
  id: string;
  children: React.ReactNode;
};

const Droppable: React.FC<DroppableProps> = ({id, children}) => {
  const {setNodeRef} = useDroppable({
    id,
  });
  const showDropZone = useSelector((state: storeStateTypes) => state.builder.showDropZone);

  const style = {
    maxHeight: showDropZone ? '120px' : '0',
    // transform: `scale(${showDropZone ? 1 : 0})`,
  };

  return (
    <div ref={setNodeRef} style={style} className="transition-all overflow-hidden">
      {children}
    </div>
  );
};

export default Droppable;
