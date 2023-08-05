import {createSlice} from '@reduxjs/toolkit';

export type componentType = {
  type: 'btns' | 'txt';
  id: string | number;
  setting: Record<string, any>;
  active: boolean;
  order: number;
};

export type BuilderSliceTypes = {
  component: componentType[];
  pageSetting: Record<string, any>;
  pageHeader: string;
  showDropZone: boolean;
};

export const BuilderSlice = createSlice({
  name: 'builder',
  initialState: {
    component: [],
    pageSetting: {gap: '0.75rem', paddingY: '25px'},
    pageHeader: '',
    showDropZone: false,
  },
  reducers: {
    //set components and page setting on app start
    setAppData: (
      state: BuilderSliceTypes,
      action: {payload: {components: componentType[]; pageSetting: Record<string, any>; pageHeader: string}}
    ) => {
      const {components, pageSetting, pageHeader} = action.payload;
      state.component = components;
      state.pageSetting = pageSetting;
      state.pageHeader = pageHeader;
    },
    // set page header
    setPageHeader: (state: BuilderSliceTypes, action: {payload: {header: string}}) => {
      const {header} = action.payload;
      state.pageHeader = header;
    },

    // add component to design box
    addComponent: (
      state: BuilderSliceTypes,
      action: {
        payload: componentType;
      }
    ) => {
      if (['btns', 'txt'].includes(action.payload.type)) {
        state.component.push(action.payload);
      }
    },

    // remove component from design box
    removeComponent: (
      state: BuilderSliceTypes,
      action: {
        payload: {id: string | number};
      }
    ) => {
      state.component = state.component.filter((compo) => compo.id !== action.payload.id);
    },

    //set active component
    setActive: (state: BuilderSliceTypes, action: {payload: {id: string | number}}) => {
      const {id} = action.payload;
      state.component = state.component.map((compo) => ({
        ...compo,
        active: compo.id === id ? true : false,
      }));
    },

    //set settings of the selected component
    setSettings: (state: BuilderSliceTypes, action: {payload: {id: string | number; setting: Record<string, any>}}) => {
      const {id, setting} = action.payload;

      state.component = state.component.map((compo) => ({
        ...compo,
        setting: compo.id === id ? {...compo.setting, ...setting} : compo.setting,
      }));
    },

    //set page setting
    setPageSetting: (state: BuilderSliceTypes, action: {payload: {setting: Record<string, any>}}) => {
      const {setting} = action.payload;

      state.pageSetting = {...state.pageSetting, ...setting};
    },
    setShowDropZone: (state: BuilderSliceTypes, action: {payload: {show: boolean}}) => {
      state.showDropZone = action.payload.show;
    },
    setOrder: (
      state: BuilderSliceTypes,
      action: {
        payload: {
          overOrder: number;
          activeOrder: number;
          activeId: string;
          overId: string;
        };
      }
    ) => {
      const {activeOrder, overOrder, activeId, overId} = action.payload;
      state.component = state.component.map((compo) => ({
        ...compo,
        order: compo.id === activeId ? overOrder : compo.id === overId ? activeOrder : compo.order,
      }));
    },
    setDeActiveElementBoxes: (state: BuilderSliceTypes, _) => {
      state.component = state.component.map((compo) => ({
        ...compo,
        active: false,
      }));
    },
  },
});

export default BuilderSlice;
