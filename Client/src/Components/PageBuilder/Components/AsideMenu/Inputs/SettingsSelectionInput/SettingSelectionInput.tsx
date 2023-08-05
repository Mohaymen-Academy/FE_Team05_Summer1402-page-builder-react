import React from 'react';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../util/types';

type SettingSelectionInputProps = {
  inputHeaderName: string;
  target: string;
  defaultValue: string;
  options: Array<{value: string | number; text: string | number}>;
  dropMenuStyle?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disable?: boolean;
};

const SettingSelectionInput: React.FC<SettingSelectionInputProps> = ({
  inputHeaderName,
  options,
  dropMenuStyle,
  target,
  onChange,
  disable,
}) => {
  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const selection = useSelector(
    (state: storeStateTypes) => state.builder.component.find((comp) => comp.id === editingId)?.setting[target]
  );
  const pageSetting = useSelector((state: storeStateTypes) => state.builder.pageSetting[target]);

  return (
    <div className="flex w-full items-center justify-between">
      <div className={`w-full text-[14px] gap-12 font-semibold`}>
        <p>{inputHeaderName}</p>
      </div>
      <select
        onChange={onChange}
        defaultValue={selection ? selection : pageSetting ? pageSetting : '50%'}
        style={dropMenuStyle}
        className="input-drop"
        disabled={disable}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SettingSelectionInput;
