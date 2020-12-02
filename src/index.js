import './index.scss';
import './js/timer';
import CountdownTimer from './js/components-pack';

const timerId = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 25, 2020'),
   });