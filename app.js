// Using moment.js
const moment = require('moment');

// Get the current date and time
const currentDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');

console.log('Current date:', currentDate);
console.log('Current time:', currentTime);

// Using date-fns
// const { format } = require('date-fns');

// // Get the current date and time
// const currentDate = format(new Date(), 'yyyy-MM-dd');
// const currentTime = format(new Date(), 'HH:mm:ss');

// console.log('Current date:', currentDate);
// console.log('Current time:', currentTime);
