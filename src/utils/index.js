import { NotificationManager } from 'react-notifications';
export function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function validateInput (value) {
  if (!value) {
    NotificationManager.error('Input invalid')
    return false
  }
  return true
}