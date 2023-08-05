import {useMemo, useState} from 'react';
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';
import {IconType} from 'react-icons';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../util/types';

type TextInputProps = {
  placeholder?: string;
  labelText?: string;
  type?: 'password' | 'text' | 'number';
  name?: string;
  width?: string;
  height?: string;
  register?: UseFormRegister<FieldValues>;
  formId?: string;
  errors?: FieldErrors;
  required?: boolean;
  pattern?: RegExp;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  smallInput?: boolean;
  target?: string;
  leftIcon?: IconType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  labelText,
  type,
  width,
  height,
  register,
  formId,
  errors,
  required,
  pattern,
  inputStyle,
  labelStyle,
  smallInput,
  leftIcon: LeftIcon,
  target,
  onChange,
}) => {
  const [text, setText] = useState('');

  // get id of active element box
  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const selection =
    target &&
    useSelector(
      (state: storeStateTypes) => state.builder.component.find((comp) => comp.id === editingId)?.setting[target]
    );
  const pageSetting = target && useSelector((state: storeStateTypes) => state.builder.pageSetting[target]);

  const typedText = selection ? selection : text;
  const smallInputPadding =
    typedText.length === 1 ? 15 : typedText.length === 0 || typedText.length === 2 ? 12 : typedText.length > 2 ? 9 : 12;

  // register input
  const registerValidator = useMemo(() => {
    if (register && formId) return register(formId, {required, pattern});
    return {register: 'no Register'};
  }, [register]);

  return (
    <div>
      {labelText && (
        <label style={labelStyle} className="label">
          {labelText}
        </label>
      )}
      <div className="relative">
        <input
          style={{
            width: smallInput ? '40px' : width,
            height: smallInput ? '40px' : height,
            border: errors && formId ? (errors[formId] ? '2px solid red' : '') : '',
            fontSize: '12px',
            paddingLeft: LeftIcon ? 30 : 12,
            padding: smallInput ? smallInputPadding : 12,
            ...inputStyle,
          }}
          {...registerValidator}
          placeholder={placeholder}
          className="input placeholder:text-sm"
          type={type}
          onChange={(e) => {
            setText(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
          value={selection ? selection : pageSetting}
        />
        {LeftIcon && <LeftIcon size={18} className="absolute left-2 bottom-1/2 translate-y-1/2 text-neutral-hover" />}
      </div>
    </div>
  );
};

export default TextInput;
