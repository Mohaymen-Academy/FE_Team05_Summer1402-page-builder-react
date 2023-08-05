import {useDispatch} from 'react-redux';
import {trash, down, lock, pen, up} from '../../../../../assets/body';

import {IconButton} from '../../../../Common/';
import {AsideSlice} from '../../../../../redux/slices';

const DesignBoxSettings = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-9 flex flex-col gap-2 absolute -left-4 -translate-x-full">
      <IconButton
        onClick={() => dispatch(AsideSlice.actions.setEditingComponentType({type: 'layout'}))}
        iconStyle="w-full"
        btnStyle="btn-edit"
        src={pen}
        alt="وبرایش"
        title="وبرایش"
      />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={up} alt="صفحه قبل" title="صفحه قبل" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={down} alt="صفحه بعد" title="صفحه بعد" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={lock} alt="قفل صفحه" title="قفل صفحه" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={trash} alt="حذف" title="حذف" />
    </div>
  );
};

export default DesignBoxSettings;
