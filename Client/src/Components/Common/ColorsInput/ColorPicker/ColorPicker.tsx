import React from 'react';
import {useRef} from 'react';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';

type ColorPickerProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  target: 'textColor' | 'bgColor';
  defaultValue: string;
};
const ColorPicker: React.FC<ColorPickerProps> = ({onChange, target, defaultValue}) => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const handleDivClick = () => {
    if (colorInputRef.current != null) {
      colorInputRef.current.click();
    }
  };
  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const bgColor = useSelector(
    (state: storeStateTypes) => state.builder.component.find((comp) => comp.id === editingId)?.setting[target]
  );

  return (
    <div className="relative">
      <div
        style={{backgroundColor: bgColor ? bgColor : defaultValue}}
        className="w-[28px] h-[28px] rounded-lg border border-neutral-300"
        onClick={handleDivClick}
      ></div>
      <input ref={colorInputRef} type="color" className="opacity-0 absolute top-0 left-0 " onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
