import {SettingsHeader} from './Inputs/SettingsHeader';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';
import {useMemo} from 'react';
import {PageButtons, PageSetting, TextPage} from '.';

const AsideMenu = () => {
  const settingType = useSelector((state: storeStateTypes) => state.aside.editingComponentType);
  const slider = useSelector((state: storeStateTypes) => state.builder.pageSetting.slider);
  // data of aside menu that changes by frames
  const setting = useMemo(() => {
    if (settingType === 'btns') return <PageButtons />;
    if (settingType === 'txt') return <TextPage />;
    if (settingType === 'layout') return <PageSetting />;
    return <PageSetting />;
  }, [settingType]);
  // header of aside menu that changes by frames
  const headerText: any = useMemo(() => {
    if (settingType === 'btns') return 'دکمه';
    if (settingType === 'txt') return 'متن';
    if (settingType === 'layout') return 'تنظیمات صفحه';
  }, [settingType]);
  return (
    <section
      style={{left: slider ? '' : '0px', right: slider ? '-345px' : ''}}
      className="bg-white h-full w-[300px] lg:w-[345px] p-[24px] absolute  lg:static transition-all z-50 shadow-lg overflow-auto"
    >
      <SettingsHeader title={headerText} />
      {setting}
    </section>
  );
};

export default AsideMenu;
