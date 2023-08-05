import {useState} from 'react';
import {ColorsInput} from '../../../../Common/ColorsInput';
import {SettingsAlignmentIcons} from '../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../Inputs/SettingsSelectionInput';
import {SettingsTextInput} from '../Inputs/SettingsTextInput';
import {TextInput} from '../../../../Common';
import {SettingsInput} from '../Inputs/SettingsInput';
import {AiOutlineLink} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../util/types';
import {BuilderSlice} from '../../../../../redux/slices';

const TextPage = () => {
  // state for disable selection inputs
  const [headerDisable, setHeaderDisable] = useState(false);
  const [textDisable, setTextDisable] = useState(true);
  const dispatch = useDispatch();

  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);

  // get button text style property from redux
  const isBold = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === editingId)?.setting?.boldTextEditorFunction
  );
  const isUnderline = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === editingId)?.setting?.underlineTextEditorFunction
  );
  const isItalic = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === editingId)?.setting?.italicTextEditorFunction
  );

  // handler to change text color
  const textColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textColor: e.target?.value}}));

  // handler to change alignment in div tag
  const changeDivAlignment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = e.target?.title;
    if (title === 'Align-Right' || title === 'Align-Vertically' || title === 'Align-Left') {
      dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textVerticalDivAlignment: e.target.title}}));
    } else {
      dispatch(
        BuilderSlice.actions.setSettings({id: editingId, setting: {textHorizontalDivAlignment: e.target.title}})
      );
    }
  };

  // handler to set link for text
  const textLinkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textLink: e.target?.value}}));

  // handler to change text
  const textChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textElementText: e.target?.value}}));

  // handler to change properties of text
  // properties: bold,underline,italic,alignment
  const textEditorChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = e.target?.title;
    if (title === 'bold') {
      if (isBold) {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {boldTextEditorFunction: false}}));
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {boldTextEditorFunction: true}}));
      }
    }
    if (title === 'underline') {
      if (isUnderline) {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {underlineTextEditorFunction: false}}));
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {underlineTextEditorFunction: true}}));
      }
    }
    if (title === 'italic') {
      if (isItalic) {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {italicTextEditorFunction: false}}));
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {italicTextEditorFunction: true}}));
      }
    }
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textEditorFunction: title}}));
  };

  // handler to change text size
  const textSizeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textSize: e.target.value}}));
  };

  // handler to change line height
  const lineHeightChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {lineHeight: e.target.value}}));
  };

  // handler to change text padding
  const paddingChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textPadding: e.target.value}}));
  };

  // handler to change word space
  const wordSpaceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {wordSpace: e.target.value}}));
  };

  // handler to disable or enable selection input
  const textTypeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target?.value;
    if (value === 'text') {
      setHeaderDisable(true);
      setTextDisable(false);
    }
    if (value === 'title') {
      setHeaderDisable(false);
      setTextDisable(true);
    }
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textType: e.target.value}}));
  };

  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 mt-3">
      <SettingsAlignmentIcons onClick={changeDivAlignment} />
      <SettingSelectionInput
        onChange={textTypeChangeHandler}
        inputHeaderName="نوع متن"
        target="textType"
        defaultValue="text"
        options={[
          {value: 'title', text: 'عنوان'},
          {value: 'text', text: 'متن'},
        ]}
      />
      <SettingSelectionInput
        onChange={textSizeChangeHandler}
        inputHeaderName="نوع عنوان"
        target="textSize"
        defaultValue="H5"
        options={[
          {value: 'H1', text: 'H1'},
          {value: 'H2', text: 'H2'},
          {value: 'H3', text: 'H3'},
          {value: 'H4', text: 'H4'},
          {value: 'H5', text: 'H5'},
          {value: 'H6', text: 'H6'},
        ]}
        disable={headerDisable}
      />
      <SettingsTextInput
        onChange={textChangeHandler}
        onClick={textEditorChangeHandler}
        target="textElementText"
        text="متن مورد نظر خود را وارد کنید"
        placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        inputHeight="145px"
      />
      <ColorsInput defaultValue="#6C6E78" target="textColor" onChange={textColorChangeHandler} text="رنگ" />
      <SettingSelectionInput
        onChange={textSizeChangeHandler}
        inputHeaderName="سایز فونت"
        target="textSize"
        defaultValue="۲۶"
        options={[
          {value: '8', text: '۸'},
          {value: '11', text: '۱۱'},
          {value: '12', text: '۱۲'},
          {value: '14', text: '۱۴'},
          {value: '16', text: '۱۶'},
          {value: '18', text: '۱۸'},
        ]}
        dropMenuStyle={{width: '25%', padding: '0 4px'}}
        disable={textDisable}
      />
      <SettingSelectionInput
        onChange={lineHeightChangeHandler}
        inputHeaderName="ارتفاع خطوط"
        target="lineHeight"
        defaultValue="۲۶"
        options={[
          {value: '1', text: '۱'},
          {value: '2', text: '۲'},
          {value: '4', text: '۴'},
          {value: '6', text: '۶'},
          {value: '8', text: '۸'},
        ]}
        dropMenuStyle={{width: '25%', padding: '0 4px'}}
        disable={textDisable}
      />
      <SettingsInput
        target="textPadding"
        onChange={paddingChangeHandler}
        inputType="number"
        text="حاشیه"
        placeholder="۱۶"
        smallInput
      />
      <SettingsInput
        target="wordSpace"
        onChange={wordSpaceChangeHandler}
        text="فاصله گذاری"
        placeholder="۱۲"
        smallInput
        inputType="number"
      />
      <div className="w-full">
        <TextInput
          target="textLink"
          onChange={textLinkChangeHandler}
          labelText="لینک متن"
          placeholder="لینک مورد نظر خود را وارد کنید"
          labelStyle={{fontWeight: 'bold', margin: '0 0px'}}
          inputStyle={{margin: '12px 0'}}
          leftIcon={AiOutlineLink}
        />
      </div>
    </div>
  );
};

export default TextPage;
