import {Middleware} from '@reduxjs/toolkit';
import axios from 'axios';
import {storeStateTypes} from '../util/types';

const serverRequestMiddleware: Middleware<{}, storeStateTypes> = (store) => (next) => async (action) => {
  const prevState = store.getState();
  ///add component to DB
  if (action.type === 'builder/addComponent') {
    if (!['btns', 'txt'].includes(action.payload.type)) return;
    axios.post(`/api/components/`, {...action.payload, active: false});
  }

  ///delete component from  DB
  if (action.type === 'builder/removeComponent') {
    axios.delete(`/api/components/${action.payload.id}`);
  }

  //modify component settings
  if (action.type === 'builder/setSettings') {
    const editingId = action.payload.id;
    const editingComponent = prevState.builder.component.find((compo) => compo.id === editingId);

    axios.put(`/api/components/${editingId}`, {
      ...editingComponent,
      setting: {...editingComponent?.setting, ...action.payload.setting},
      active: false,
    });
  }

  //modify page settings
  if (action.type === 'builder/setPageSetting') {
    const pageSetting = prevState.builder.pageSetting;

    axios.put(`/api/pageSetting`, {
      ...pageSetting,
      ...action.payload.setting,
    });
  }

  //change component order
  if (action.type === 'builder/setOrder') {
    const {activeOrder, overOrder, activeId, overId} = action.payload;
    const overComponent = prevState.builder.component.find((compo) => compo.id === overId);
    const activeComponent = prevState.builder.component.find((compo) => compo.id === activeId);

    axios.put(`/api/components/${activeId}`, {
      ...activeComponent,
      order: overOrder,
    });
    axios.put(`/api/components/${overId}`, {
      ...overComponent,
      order: activeOrder,
    });
  }

  // set page header
  if (action.type === 'builder/setPageHeader') {
    const {header} = action.payload;
    axios.post(`/api/pageHeader`, {pageHeader: header});
  }

  ///
  const result = next(action);
  return result;
};

export default serverRequestMiddleware;
