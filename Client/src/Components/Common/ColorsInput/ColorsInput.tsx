import {ColorPicker} from './ColorPicker';

type SettingsInputProps = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  target: 'textColor' | 'bgColor';
  defaultValue: string;
};

const ColorsInput: React.FC<SettingsInputProps> = ({text, onChange, target, defaultValue}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>

      <ColorPicker defaultValue={defaultValue} target={target} onChange={onChange} />
    </div>
  );
};

export default ColorsInput;
