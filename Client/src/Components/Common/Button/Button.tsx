import React from 'react';

type LoginButtonProps = {
  width?: string;
  height?: string;
  style: 'primary' | 'secondary' | 'frame' | 'edit';
  text: string;
  onClick?: () => void;
  type?: 'submit';
};

const Button: React.FC<LoginButtonProps> = ({width, height, text, type, style, onClick}) => {
  return (
    <button type={type} onClick={onClick} style={{width, height}} className={`btn-${style}`}>
      {text}
    </button>
  );
};

export default Button;
