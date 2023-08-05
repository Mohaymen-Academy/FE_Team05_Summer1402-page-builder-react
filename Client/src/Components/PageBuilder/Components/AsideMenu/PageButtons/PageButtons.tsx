import {useDispatch, useSelector} from 'react-redux';
import {Switch, useDisclosure} from '@chakra-ui/react';
import {AiOutlineLink} from 'react-icons/ai';

import {SettingsAlignmentIcons} from '../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../Inputs/SettingsSelectionInput';
import {ColorsInput} from '../../../../Common';
import {TextInput} from '../../../../Common';
import {SettingsTextInput} from '../Inputs/SettingsTextInput';
import {storeStateTypes} from '../../../../../util/types';
import {BuilderSlice} from '../../../../../redux/slices';
import {IconModal} from './IconModal';
import {icons} from '../../../../../util/Constatnts';
import {SettingsInput} from '../Inputs/SettingsInput';

const PageButtons = () => {
  //for modal
  const {isOpen, onClose, onOpen} = useDisclosure();
  const dispatch = useDispatch();
  const edittingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const haveIcon = useSelector(
    (state: storeStateTypes) => state.builder.component.find((compo) => compo.id === edittingId)?.setting?.withIcon
  );
  const IconOfEditingBtn =
    icons[
      useSelector(
        (state: storeStateTypes) => state.builder.component.find((compo) => compo.id === edittingId)?.setting?.iconIndex
      ) || 7
    ];

  //button text style, select from redux
  const isBold = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === edittingId)?.setting?.boldTextEditorFunction
  );
  const isUnderline = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === edittingId)?.setting?.underlineTextEditorFunction
  );
  const isItalic = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === edittingId)?.setting?.italicTextEditorFunction
  );

  //**all the handler down here will affect the redux store, button components selected styles all saved in redux */

  //handler for changing button text color
  const textColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {textColor: e.target.value}}));

  //handler for changing button background color
  const bgColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {bgColor: e.target.value}}));
  };

  //handler to change button horizontal or vertical alignment
  const changeBtnAlignment = (e: any) => {
    const title = e.target?.title;
    if (title === 'Align-Right' || title === 'Align-Vertically' || title === 'Align-Left') {
      dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnVerticalDivAlignment: e.target.title}}));
    } else {
      dispatch(
        BuilderSlice.actions.setSettings({id: edittingId, setting: {btnHorizontalDivAlignment: e.target.title}})
      );
    }
  };

  //handler to add href to button
  const btnLinkChangeHandler = (e: any) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnLink: e.target.value}}));

  // handler to change button text
  const btnTextChangeHandler = (e: any) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnText: e.target.value}}));

  // handler to change button text properties such as italic,bold,underline,alignment
  const btnTextEditorChangeHandler = (e: any) => {
    const title = e.target?.title;
    ///
    if (title === 'bold') {
      if (isBold) {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {boldTextEditorFunction: false}}));
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {boldTextEditorFunction: true}}));
      }
    }

    ///
    if (title === 'underline') {
      if (isUnderline) {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {underlineTextEditorFunction: false}}));
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {underlineTextEditorFunction: true}}));
      }
    }

    ///
    if (title === 'italic') {
      if (isItalic) {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {italicTextEditorFunction: false}}));
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {italicTextEditorFunction: true}}));
      }
    }
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {textEditorFunction: title}}));
  };

  //handler to change border radius
  const borderRadiusChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnBorderRadius: e.target?.value}}));

  //handler to change button height
  const btnHeightChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnHeight: e.target?.value}}));

  //handler to change button width
  const onButtonWidthChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {width: e.target.value}}));

  //handler active icon of the button
  const withIconCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {withIcon: e.target.checked}}));

  // handler to change button padding
  const paddingBtnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnPadding: e.target.value}}));

  // handler to change button word space
  const wordSpaceBtnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnWordSpace: e.target.value}}));

  return (
    <div className="w-full flex flex-col justify-start items-center gap-6 mt-3">
      <SettingsAlignmentIcons onClick={changeBtnAlignment} />
      <SettingSelectionInput
        target="btnHeight"
        defaultValue="50%"
        onChange={btnHeightChangeHandler}
        inputHeaderName="اندازه دکمه"
        options={[
          {value: '100%', text: 'بزرگ'},
          {value: '50%', text: 'متوسط'},
          {value: '25%', text: 'کوچک'},
        ]}
      />
      <SettingSelectionInput
        target="width"
        defaultValue="50%"
        inputHeaderName="عرض دکمه"
        onChange={onButtonWidthChangeHandler}
        options={[
          {value: '100%', text: 'بزرگ'},
          {value: '50%', text: 'متوسط'},
          {value: '25%', text: 'کوچک'},
        ]}
      />
      <SettingsInput
        target="btnPadding"
        onChange={paddingBtnChangeHandler}
        inputType="number"
        text="حاشیه"
        placeholder="۱۶"
        smallInput
      />
      <SettingsInput
        target="btnWordSpace"
        onChange={wordSpaceBtnChangeHandler}
        text="فاصله گذاری"
        placeholder="۱۲"
        smallInput
        inputType="number"
      />
      <SettingSelectionInput
        onChange={borderRadiusChangeHandler}
        target="btnBorderRadius"
        inputHeaderName="گوشه‌ها"
        defaultValue="6px"
        options={[
          {value: '1px', text: '۱'},
          {value: '2px', text: '۲'},
          {value: '3px', text: '۳'},
          {value: '4px', text: '۴'},
          {value: '6px', text: '۶'},
          {value: '8px', text: '۸'},
          {value: '10px', text: '۱۰'},
          {value: '12px', text: '۱۲'},
        ]}
        dropMenuStyle={{width: '25%', padding: '0 4px'}}
      />
      <SettingsTextInput
        target="btnText"
        onClick={btnTextEditorChangeHandler}
        onChange={btnTextChangeHandler}
        text="متن"
        inputHeight="50px"
        placeholder="لورم ایپسوم"
      />
      <ColorsInput defaultValue="#9A9DAB" onChange={bgColorChangeHandler} target="bgColor" text="رنگ پس زمینه" />
      <ColorsInput defaultValue="#FFFFFF" onChange={textColorChangeHandler} target="textColor" text="رنگ متن" />
      <div className="w-full flex justify-between">
        <div className="text-[14px] font-semibold">
          <p>آیکون دار</p>
        </div>
        <Switch onChange={withIconCheckHandler} checked={haveIcon} />
      </div>
      {haveIcon && (
        <div className="w-full flex justify-between">
          <div className="text-[14px] font-semibold">
            <p>انتخاب آیکون</p>
          </div>
          <button className="h-10 w-10 rounded-lg flex justify-center items-center bg-primary-light" onClick={onOpen}>
            <IconOfEditingBtn size={24} />
          </button>
        </div>
      )}
      <div className="w-full">
        <TextInput
          target="btnLink"
          onChange={btnLinkChangeHandler}
          labelText="لینک دکمه"
          formId="linkUrl"
          placeholder="لینک مورد نظر خود را وارد کنید"
          labelStyle={{fontWeight: 'bold', margin: '0 0px'}}
          inputStyle={{margin: '12px 0'}}
          leftIcon={AiOutlineLink}
        />
      </div>
      <IconModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default PageButtons;
