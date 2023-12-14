import './style.css';
import initTriggerButton from './dropDown';
import initTabTriggers from './tab';

initTriggerButton(
  '[data-target-drop-content]',
  'clicked',
  '.click-drop-down-content'
);

initTabTriggers('active', '.tab-link');
