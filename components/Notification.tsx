import {NotificationManager} from 'react-notifications';
 
export function notifySuccess(success){
  return NotificationManager.success(success, 'Success');
}

export function notifyInfo(info){
  return NotificationManager.info(info, 'Info');
}

export function notifyWarning(warning){
  return NotificationManager.warning(warning, 'Warning');
}

export function notifyError(error){
  return NotificationManager.error(error, 'Error');
}