import React from 'react';

type IconAnchorProps = {
  src: string;
  alt: string;
  imgStyle: string;
  anchorStyle: string;
  onClick?: (e: React.MouseEvent) => void;
};

const IconAnchor: React.FC<IconAnchorProps> = ({src, alt, imgStyle, anchorStyle, onClick}) => {
  return (
    <a onClick={onClick} className={anchorStyle}>
      <img className={imgStyle} src={src} alt={alt} />
    </a>
  );
};

export default IconAnchor;
