import {IconButton} from '../../../../../Common';
import {
  alignLeft,
  alignVertically,
  alignRight,
  alignBottom,
  alignHorizontally,
  align,
} from '../../../../../../assets/asideMenu';

type SettingsAlignmentIconsProps = {
  onClick: (e: any) => void;
};

const SettingsAlignmentIcons: React.FC<SettingsAlignmentIconsProps> = ({onClick}) => {
  return (
    <>
      <div className="grid grid-cols-6 gap-6 justify-center items-center w-full">
        <IconButton onClick={onClick} iconStyle="w-[24px]" src={align} alt="Align" title="Align" />
        <IconButton
          onClick={onClick}
          iconStyle="w-[24px]"
          src={alignHorizontally}
          alt="Align-Horizontally"
          title="Align-Horizontally"
        />
        <IconButton onClick={onClick} iconStyle="w-[24px]" src={alignBottom} alt="Align-Bottom" title="Align-Bottom" />
        <IconButton onClick={onClick} iconStyle="w-[24px]" src={alignRight} alt="Align-Right" title="Align-Right" />
        <IconButton
          onClick={onClick}
          iconStyle="w-[24px]"
          src={alignVertically}
          alt="Align-Vertically"
          title="Align-Vertically"
        />
        <IconButton onClick={onClick} iconStyle="w-[24px]" src={alignLeft} alt="Align-Left" title="Align-Left" />
      </div>
    </>
  );
};

export default SettingsAlignmentIcons;
