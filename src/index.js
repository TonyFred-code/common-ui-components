import './style.css';
import initTriggerButton from './dropDown';

initTriggerButton(
  '[data-target-drop-content]',
  'clicked',
  '.click-drop-down-content'
);
