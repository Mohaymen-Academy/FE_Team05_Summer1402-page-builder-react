import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import AsideMenu from './Components/AsideMenu/AsideMenu';
import {DndContext, DragEndEvent, DragStartEvent, MouseSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import {BuilderSlice} from '../../redux/slices';
import axios from 'axios';
import {storeStateTypes} from '../../util/types';

const PageBuilder = () => {
  // const [loading, setLoading] = useState(true);
  // const [activeDrag, setActiveDrag] = useState<string>();
  const dispatch = useDispatch();

  const components = useSelector((state: storeStateTypes) => state.builder.component);
  // getting data from json server
  useEffect(() => {
    const setPrevData = async () => {
      const {data: components} = await axios.get('/api/components');
      const {data: pageSetting} = await axios.get('/api/pageSetting');
      const {
        data: {pageHeader},
      } = await axios.get('/api/pageHeader');
      dispatch(BuilderSlice.actions.setAppData({components, pageSetting, pageHeader}));
      // setLoading(false);
    };
    setPrevData();
  }, []);
  const slider = useSelector((state: storeStateTypes) => state.builder.pageSetting.slider);
  const asideMenu = useSelector((state: storeStateTypes) => state.builder.pageSetting.asideMenu);
  // handler for hide and show aside menues
  const showAsides = (e: React.MouseEvent) => {
    // @ts-ignore
    const title = e.target.alt;
    if (title === 'slider') {
      if (slider) dispatch(BuilderSlice.actions.setPageSetting({setting: {slider: false}}));
      if (!slider) dispatch(BuilderSlice.actions.setPageSetting({setting: {slider: true}}));
    }
    if (title === 'asideMenu') {
      if (asideMenu) dispatch(BuilderSlice.actions.setPageSetting({setting: {asideMenu: false}}));
      if (!asideMenu) dispatch(BuilderSlice.actions.setPageSetting({setting: {asideMenu: true}}));
    }
  };

  // handle for starting drag & drop frame buttons
  function handleDragStart(event: DragStartEvent) {
    if (['btns', 'txt'].includes(event.active.id as string)) {
      dispatch(BuilderSlice.actions.setShowDropZone({show: true}));
    }
    // setActiveDrag(event.active.id as string);
  }

  // handle for ending drag & drop frame buttons
  function handleDragEnd(event: DragEndEvent) {
    // setActiveDrag(undefined);
    const type = ['btns', 'txt'].includes(event.active.id as string) && (event.active.id as 'btns' | 'txt');
    if (event.over) {
      if (type) {
        dispatch(
          BuilderSlice.actions.addComponent({id: v4(), setting: {}, type, active: false, order: components.length + 1})
        );
      } else {
        const activeId = event.active.id as string;
        const overId = event.over.id as string;
        const activeOrder = components.find((compo) => compo.id === activeId)?.order as number;
        const overOrder = components.find((compo) => compo.id === overId)?.order as number;

        dispatch(BuilderSlice.actions.setOrder({activeId, activeOrder, overOrder, overId}));
      }
    }
    dispatch(BuilderSlice.actions.setShowDropZone({show: false}));
  }

  //activate touch and mouse sensors and restriction on drag behavior
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="bg-neutral-light h-screen flex flex-col w-full">
        <Header onClick={showAsides} />
        <div className="flex w-screen h-[calc(100vh-56px)]">
          <FramesMenu />
          <DesignBox />
          <AsideMenu />
        </div>
      </div>
    </DndContext>
  );
};

export default PageBuilder;
