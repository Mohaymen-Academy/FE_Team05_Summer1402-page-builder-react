import {useEffect, useState} from 'react';
import {icons} from '../../../../../../util/Constatnts';

type ButtonElementProps = {
  setting?: Record<string, any>;
};

const ButtonElement: React.FC<ButtonElementProps> = ({setting}) => {
  // states for saving properties
  const [verticalAlignment, setVerticalAlignment] = useState('center');
  const [horizontalAlignment, setHorizontalAlignment] = useState('center');
  const [textStyle, setTextStyle] = useState<'left' | 'center' | 'right' | 'justify'>('center');
  const [height, setHeight] = useState('متوسط');
  // variables for icon
  const haveIcon = setting?.withIcon;
  const IconOfEditingBtn = icons[setting?.iconIndex || 7];
  // handle text style
  const textStyleDB = setting?.textEditorFunction;
  useEffect(() => {
    if (textStyleDB === 'align left') {
      setTextStyle('left');
    }
    if (textStyleDB === 'align center') {
      setTextStyle('center');
    }
    if (textStyleDB === 'align right') {
      setTextStyle('right');
    }
    if (textStyleDB === 'justify center') {
      setTextStyle('center');
    }
  }, [textStyleDB]);
  // handle vertical alignment in box
  const vAlignMent = setting?.btnVerticalDivAlignment;
  useEffect(() => {
    if (vAlignMent === 'Align-Right') {
      setVerticalAlignment('flex-start');
    }
    if (vAlignMent === 'Align-Vertically') {
      setVerticalAlignment('center');
    }
    if (vAlignMent === 'Align-Left') {
      setVerticalAlignment('flex-end');
    }
  }, [setting?.btnVerticalDivAlignment]);
  // handle horizontal alignment in box
  const hAlignMent = setting?.btnHorizontalDivAlignment;
  useEffect(() => {
    if (hAlignMent === 'Align') {
      setHorizontalAlignment('flex-end');
    }
    if (hAlignMent === 'Align-Horizontally') {
      setHorizontalAlignment('center');
    }
    if (hAlignMent === 'Align-Bottom') {
      setHorizontalAlignment('flex-start');
    }
  }, [setting?.btnHorizontalDivAlignment]);
  // handle button height
  const btnHeight = setting?.btnHeight;
  useEffect(() => {
    if (btnHeight === '100%') {
      setHeight('44px');
    }
    if (btnHeight === '50%') {
      setHeight('36px');
    }
    if (btnHeight === '25%') {
      setHeight('30px');
    }
  }, [setting?.btnHeight]);
  return (
    <div
      style={{alignItems: verticalAlignment, justifyContent: horizontalAlignment}}
      className="rounded-lg flex flex-col h-[48px] w-full"
    >
      <a style={{width: setting?.width ? setting?.width : '25%'}} href={setting?.btnLink}>
        <button
          style={{
            color: setting?.textColor,
            backgroundColor: setting?.bgColor,
            fontWeight: setting?.boldTextEditorFunction ? 'bold' : 'normal',
            fontStyle: setting?.italicTextEditorFunction ? 'italic' : 'normal',
            textDecoration: setting?.underlineTextEditorFunction ? 'underline' : 'none',
            justifyContent: textStyle,
            borderRadius: setting?.btnBorderRadius ? setting?.btnBorderRadius : '6px',
            height: height ? height : '48px',
            padding: setting?.btnPadding + 'px',
            wordSpacing: setting?.btnWordSpace + 'px',
          }}
          className="h-9 w-full bg-neutral-main text-white rounded-[14px] flex flex-row items-center gap-2"
        >
          {haveIcon && <IconOfEditingBtn size={16} />}
          {setting?.btnText ? setting?.btnText : 'دکمه'}
        </button>
      </a>
    </div>
  );
};

export default ButtonElement;
