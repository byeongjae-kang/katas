/*In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.*/

const talkingCalendar = function(date) {
  let year = '';
  let month = '';
  let monthInString = '';
  let day = '';
  let ordinalDay = '';
  for (let i = 0; i < date.length; i++) {
    if (i === 0 || i === 1 || i === 2 || i === 3) {
      year += date[i];
    } else if (i === 5 || i === 6) {
      month += date[i];
    } else if ((i === 8 && date[8] !== '0') || i === 9) {
      day += date[i];
    }
  }
  switch (month) {
  case '01':
    monthInString = 'January';
    break;
  case '02':
    monthInString = 'February';
    break;
  case '03':
    monthInString = 'March';
    break;
  case '04':
    monthInString = 'April';
    break;
  case '05':
    monthInString = 'May';
    break;
  case '06':
    monthInString = 'June';
    break;
  case '07':
    monthInString = 'July';
    break;
  case '08':
    monthInString = 'August';
    break;
  case '09':
    monthInString = 'September';
    break;
  case '10':
    monthInString = 'October';
    break;
  case '11':
    monthInString = 'November';
    break;
  case '12':
    monthInString = 'December';
  }
  switch (day) {
  case '1' || '21' || '31':
    ordinalDay += day + 'st';
    break;
  case '2' || '22':
    ordinalDay += day + 'nd';
    break;
  case '3' || '23':
    ordinalDay += day + 'rd';
    break;
  default:
    ordinalDay += day + 'th';

  }
  return `${monthInString} ${ordinalDay}, ${year}`;
};

console.log(talkingCalendar("2017/01/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2021/05/01"));
