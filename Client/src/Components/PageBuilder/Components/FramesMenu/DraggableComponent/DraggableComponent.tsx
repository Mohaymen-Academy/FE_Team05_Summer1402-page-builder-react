import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

type DraggableComponentProps = {
  id: string | number;
  children: React.ReactNode;
};

const DraggableComponent: React.FC<DraggableComponentProps> = ({id, children}) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });
  const style = {
    Outputs: `translate3d(10px, 40px, 0)`,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="w-full">
      {children}
    </div>
  );
};

export default DraggableComponent;
