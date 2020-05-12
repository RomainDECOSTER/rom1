import { createRoutine } from 'redux-saga-routines';

export const WorkshopsListRoutine = createRoutine('WORKSHOPS_LIST');
export const WorkshopsCreateRoutine = createRoutine('WORKSHOPS_CREATE');
export const WorkshopDeleteRoutine = createRoutine('WORKSHOP_DELETE');
export const WorkshopViewRoutine = createRoutine('WORKSHOP_VIEW');
export const WorkshopUpdateRoutine = createRoutine('WORKSHOP_UPDATE');
export const WorkshopSortRoutine = createRoutine('WORKSHOP_SORT');
