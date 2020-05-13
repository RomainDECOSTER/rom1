import { createRoutine } from 'redux-saga-routines';

export const VolunteersListRoutine = createRoutine('VOLUNTEERS_LIST');
export const VolunteersCreateRoutine = createRoutine('VOLUNTEERS_CREATE');
export const VolunteerDeleteRoutine = createRoutine('VOLUNTEER_DELETE');
export const VolunteerViewRoutine = createRoutine('VOLUNTEER_VIEW');
export const VolunteerUpdateRoutine = createRoutine('VOLUNTEER_UPDATE');
export const VolunteerSortRoutine = createRoutine('VOLUNTEER_SORT');
export const VolunteersSearchRoutine = createRoutine('VOLUNTEERS_SEARCH');
