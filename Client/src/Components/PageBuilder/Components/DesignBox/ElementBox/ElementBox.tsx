import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '../../../../Common/IconButton';
import {ButtonElement} from '.';
import {TextElement} from './TextElement';
import {AsideSlice, BuilderSlice} from '../../../../../redux/slices';
import {storeStateTypes} from '../../../../../util/types';
import {yellowHand} from '../../../../../assets/body';
import yellowPen from '../../../../../assets/body/yellow pen.svg';
import yellowTrash from '../../../../../assets/body/yellow trash.svg';
import {DraggableAttributes} from '@dnd-kit/core';
import {SyntheticListenerMap} from '@dnd-kit/core/dist/hooks/utilities';
import {CSS} from '@dnd-kit/utilities';

type ElementBoxProps = {
  id: string | number;
  type: 'btns' | 'txt';
  dndRef: (node: HTMLElement | null) => void;
  dndAttr: DraggableAttributes;
  dndListeners: SyntheticListenerMap | undefined;
  dndTransform: any;
  dndTransition: string | undefined;
};
const ElementBox: React.FC<ElementBoxProps> = ({
  type,
  id,
  dndRef,
  dndAttr,
  dndListeners,
  dndTransform,
  dndTransition,
}) => {
  const dispatch = useDispatch();
  const component = useSelector((state: storeStateTypes) => state.builder.component.find((comp) => comp.id === id));
  const isActive = component?.active;

  const Element = useMemo(() => {
    if (type === 'btns') {
      return <ButtonElement setting={component?.setting} />;
    }
    if (type === 'txt') {
      return <TextElement setting={component?.setting} />;
    }
  }, [type, component]);

  const onClickHandler = (e: any) => {
    e.stopPropagation();
    dispatch(BuilderSlice.actions.setActive({id}));
    dispatch(AsideSlice.actions.setEditingComponent({id, type}));
  };
  const onDeleteHandler = (e: any) => {
    e.stopPropagation();
    dispatch(BuilderSlice.actions.removeComponent({id}));
    dispatch(AsideSlice.actions.setEditingComponentType({type: 'layout'}));
  };

  const style = {
    border: isActive ? 'rgb(255,209,161) 1px solid' : '',
    transition: dndTransition,
    transform: dndTransform ? CSS.Transform.toString(dndTransform)?.split(')')[0] + ')' : undefined,
  };

  return (
    <div
      ref={dndRef}
      {...dndAttr}
      {...dndListeners}
      onClick={onClickHandler}
      style={style}
      className={`relative border-secondary-border-light flex rounded-l-[8px] rounded-b-[8px] gap-2`}
    >
      <div
        style={{display: isActive ? 'flex' : 'none'}}
        className="absolute w-[88px] h-[32px] flex justify-center items-center gap-2 top-0 -translate-y-full right-[-0.5px] border rounded-t-[12px] rounded-l-[12px] border-solid border-secondary-border-light z-50 bg-white"
      >
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={yellowPen} alt="pen" title="pen" />
        <IconButton
          onClick={onDeleteHandler}
          btnStyle="h-[16px] w-[16px]"
          iconStyle=""
          src={yellowTrash}
          alt="trash"
          title="trash"
        />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={yellowHand} alt="hand" title="hand" />
      </div>
      {Element}
    </div>
  );
};

export default ElementBox;
