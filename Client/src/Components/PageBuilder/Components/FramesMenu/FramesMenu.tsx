import {useSelector} from 'react-redux';
import {frameButton} from '../../../../util/Constatnts';
import {Button} from '../../../Common';
import DraggableComponent from './DraggableComponent/DraggableComponent';
import {storeStateTypes} from '../../../../util/types';

const FramesMenu: React.FC = () => {
  const asideMenu = useSelector((state: storeStateTypes) => state.builder.pageSetting.asideMenu);

  return (
    <aside
      style={{right: asideMenu ? '-345px' : '0px'}}
      className="bg-white h-full w-[175px] px-[12px] absolute lg:static transition-all z-50 shadow-lg"
    >
      <div className="justify-center items-center w-full my-[8px]">
        <h1 className="py-[8px] px-2 font-bold">قالب‌ها</h1>
      </div>
      <div className="text-sm w-full flex flex-col gap-2 justify-start items-center">
        {frameButton.map((btn) => (
          <DraggableComponent id={btn.id} key={btn.id}>
            <Button style="frame" text={btn.text} />
          </DraggableComponent>
        ))}
      </div>
    </aside>
  );
};

export default FramesMenu;
