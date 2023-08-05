import React from 'react';

type IconButtonProps = {
  src: string;
  alt: string;
  title: string;
  btnStyle?: 'btn-edit' | 'h-[16px] w-[16px]' | 'flex justify-center' | string;
  iconStyle: string;
  onClick?: (e: any) => void;
};

const IconButton: React.FC<IconButtonProps> = ({src, alt, title, btnStyle, iconStyle, onClick}) => {
  return (
    <button className={btnStyle} onClick={onClick}>
      <img className={iconStyle} src={src} alt={alt} title={title} />
    </button>
  );
};

export default IconButton;
