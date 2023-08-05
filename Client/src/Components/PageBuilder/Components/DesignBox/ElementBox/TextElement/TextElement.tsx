import {useState, useEffect} from 'react';

type TextElementProps = {
  setting?: Record<string, any>;
};

const TextElement: React.FC<TextElementProps> = ({setting}) => {
  const [text, setText] = useState('');
  const [vAlignment, setVAlignment] = useState('center');
  const [hAlignment, setHAlignment] = useState('center');
  const [textStyle, setTextStyle] = useState<'left' | 'center' | 'right' | 'justify'>();
  const [txtSize, setTextSize] = useState('12px');
  const defaultText = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
  هدف بهبود ابزارهای کاربردی می باشد.`;

  // set text of element
  useEffect(() => {
    setText(setting?.textElementText);
  }, [setting?.textElementText]);

  // handle text align
  const func = setting?.textEditorFunction;
  useEffect(() => {
    if (func === 'align left') {
      setTextStyle('left');
    }
    if (func === 'align center') {
      setTextStyle('center');
    }
    if (func === 'align right') {
      setTextStyle('right');
    }
    if (func === 'justify center') {
      setTextStyle('justify');
    }
  }, [func]);

  // handle vertical alignment in box
  const vAlign = setting?.textVerticalDivAlignment;
  useEffect(() => {
    if (vAlign === 'Align-Right') {
      setVAlignment('flex-start');
    }
    if (vAlign === 'Align-Vertically') {
      setVAlignment('center');
    }
    if (vAlign === 'Align-Left') {
      setVAlignment('flex-end');
    }
  }, [setting?.textVerticalDivAlignment]);

  // handle horizontal alignment in box
  const hAlign = setting?.textHorizontalDivAlignment;
  useEffect(() => {
    if (hAlign === 'Align') {
      setHAlignment('flex-end');
    }
    if (hAlign === 'Align-Horizontally') {
      setHAlignment('center');
    }
    if (hAlign === 'Align-Bottom') {
      setHAlignment('flex-start');
    }
  }, [setting?.textHorizontalDivAlignment]);

  // handle header size
  const textSize = setting?.textSize;
  useEffect(() => {
    if (textSize === 'H1') {
      setTextSize('32px');
    } else if (textSize === 'H2') {
      setTextSize('24px');
    } else if (textSize === 'H3') {
      setTextSize('18.72px');
    } else if (textSize === 'H4') {
      setTextSize('16px');
    } else if (textSize === 'H5') {
      setTextSize('13.3px');
    } else if (textSize === 'H6') {
      setTextSize('10.7px');
    } else {
      setTextSize(textSize + 'px');
    }
  }, [setting?.textSize]);

  return (
    <div
      style={{
        color: setting?.textColor,
        alignItems: vAlignment,
        justifyContent: hAlignment,
        fontWeight: setting?.boldTextEditorFunction ? 'bold' : 'normal',
        fontStyle: setting?.italicTextEditorFunction ? 'italic' : 'normal',
        textDecoration: setting?.underlineTextEditorFunction ? 'underline' : 'none',
        textAlign: textStyle,
        fontSize: txtSize,
        lineHeight: setting?.lineHeight,
        padding: setting?.textPadding + 'px',
        wordSpacing: setting?.wordSpace + 'px',
      }}
      className="flex text-neutral-main text-[12px]"
    >
      <a href={setting?.textLink}>
        <p>{text ? text : defaultText}</p>
      </a>
    </div>
  );
};

export default TextElement;
