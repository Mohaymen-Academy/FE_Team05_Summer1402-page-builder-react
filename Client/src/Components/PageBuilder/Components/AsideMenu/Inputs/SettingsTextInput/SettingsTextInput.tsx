import {IconButton} from '../../../../../Common';
import {
  textAlignJustifyCenter,
  textAlignCenter,
  textAlignLeft,
  textAlignRight,
  textBold,
  textItalic,
  textUnderline,
} from '../../../../../../assets/textEditor';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../util/types';

type SettingsTextInputProps = {
  text: string;
  placeholder: string;
  inputHeight: string;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
  target: string;
};

const SettingsTextInput: React.FC<SettingsTextInputProps> = ({
  text,
  placeholder,
  inputHeight,
  onChange,
  onClick,
  target,
}) => {
  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const selection = useSelector(
    (state: storeStateTypes) => state.builder.component.find((comp) => comp.id === editingId)?.setting[target]
  );
  return (
    <div className={`flex flex-col justify-start w-full gap-[12px]`}>
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>
      <textarea
        onChange={onChange}
        style={{height: inputHeight}}
        className={`input placeholder:text-[14px] resize-none`}
        placeholder={placeholder}
        value={selection ? selection : ''}
      />
      <div className="grid grid-cols-7 gap-3 justify-center items-center">
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignJustifyCenter}
          alt="justify center"
          title="justify center"
        />
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignRight}
          alt="align right"
          title="align right"
        />
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignCenter}
          alt="align center"
          title="align center"
        />
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignLeft}
          alt="align left"
          title="align left"
        />
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textBold}
          alt="bold"
          title="bold"
        />
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textItalic}
          alt="italic"
          title="italic"
        />
        <IconButton
          onClick={onClick}
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textUnderline}
          alt="underline"
          title="underline"
        />
      </div>
    </div>
  );
};

export default SettingsTextInput;
