import moment from "moment";

const holidays = [
  '2023-01-02', // New Year’s Day (observed)
  '2023-01-16', // Birthday of Martin Luther King, Jr.
  '2023-02-20', // Washington’s Birthday (Presidents' Day)
  '2023-05-29', // Memorial Day
  '2023-06-19', // Juneteenth National Independence Day
  '2023-07-04', // Independence Day
  '2023-09-04', // Labor Day
  '2023-10-09', // Columbus Day
  '2023-11-10', // Veterans Day (observed)
  '2023-11-23', // Thanksgiving Day
  '2023-12-25'  // Christmas Day
];

const d = [
  {
      "created_at": "2023-11-27T00:00:03Z",
      "effective_date": "2023-11-28"
  },
  {
      "created_at": "2023-11-27T00:00:02Z",
      "effective_date": "2023-11-28"
  },
  {
      "created_at": "2023-11-27T00:00:02Z",
      "effective_date": "2023-11-28"
  },
  {
      "created_at": "2023-11-27T00:00:01Z",
      "effective_date": "2023-11-28"
  },
  {
      "created_at": "2023-11-27T00:00:01Z",
      "effective_date": "2023-11-28"
  },
  {
      "created_at": "2023-11-27T00:00:00Z",
      "effective_date": "2023-11-28"
  },
  {
      "created_at": "2023-11-24T17:00:00Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:04Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:04Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:03Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:03Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:02Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:02Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:01Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-24T00:00:00Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-22T23:00:01Z",
      "effective_date": "2023-11-27"
  },
  {
      "created_at": "2023-11-22T16:00:01Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-22T16:00:00Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-22T13:00:00Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-22T04:30:00Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-22T00:00:02Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-22T00:00:01Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-21T23:30:00Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-21T23:00:00Z",
      "effective_date": "2023-11-24"
  },
  {
      "created_at": "2023-11-21T00:00:02Z",
      "effective_date": "2023-11-22"
  },
  {
      "created_at": "2023-11-21T00:00:01Z",
      "effective_date": "2023-11-22"
  },
  {
      "created_at": "2023-11-21T00:00:01Z",
      "effective_date": "2023-11-22"
  },
  {
      "created_at": "2023-11-21T00:00:00Z",
      "effective_date": "2023-11-22"
  },
  {
      "created_at": "2023-11-20T00:00:02Z",
      "effective_date": "2023-11-21"
  },
  {
      "created_at": "2023-11-20T00:00:02Z",
      "effective_date": "2023-11-21"
  },
  {
      "created_at": "2023-11-20T00:00:01Z",
      "effective_date": "2023-11-21"
  },
  {
      "created_at": "2023-11-17T00:30:02Z",
      "effective_date": "2023-11-20"
  },
  {
      "created_at": "2023-11-17T00:30:02Z",
      "effective_date": "2023-11-20"
  },
  {
      "created_at": "2023-11-17T00:30:01Z",
      "effective_date": "2023-11-20"
  },
  {
      "created_at": "2023-11-16T22:41:28Z",
      "effective_date": "2023-11-20"
  },
  {
      "created_at": "2023-11-15T00:00:01Z",
      "effective_date": "2023-11-16"
  },
  {
      "created_at": "2023-11-11T15:21:14Z",
      "effective_date": "2023-11-14"
  },
  {
      "created_at": "2023-11-07T20:52:57Z",
      "effective_date": "2023-11-08"
  },
  {
      "created_at": "2023-10-24T17:53:46Z",
      "effective_date": "2023-10-25"
  },
  {
      "created_at": "2023-10-11T16:17:53Z",
      "effective_date": "2023-10-12"
  },
  {
      "created_at": "2023-10-11T16:05:35Z",
      "effective_date": "2023-10-12"
  },
  {
      "created_at": "2023-09-13T20:17:55Z",
      "effective_date": "2023-09-14"
  },
  {
      "created_at": "2023-09-13T20:15:47Z",
      "effective_date": "2023-09-14"
  },
  {
      "created_at": "2023-08-10T22:14:22Z",
      "effective_date": "2023-08-14"
  },
  {
      "created_at": "2023-08-10T22:13:37Z",
      "effective_date": "2023-08-14"
  },
  {
      "created_at": "2023-08-10T20:45:55Z",
      "effective_date": "2023-08-11"
  },
  {
      "created_at": "2023-05-06T18:49:06Z",
      "effective_date": "2023-05-09"
  },
  {
      "created_at": "2023-05-01T19:02:32Z",
      "effective_date": "2023-05-02"
  }
]

function isWeekend(date) {
  const dayOfWeek = date.getDay();
  // console.log('isW', { dayOfWeek })
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function isHoliday(date) {
  const monthDayYear = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;
  const monthWeekDay = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${Math.ceil(date.getDate() / 7)}-${date.getDay()}`;
  return holidays.includes(monthDayYear) || holidays.includes(monthWeekDay);
}

function isNonBusinessDay(date) {
  console.log({ isW: isWeekend(date), isH: isHoliday(date), date })
  return isWeekend(date) || isHoliday(date);
}

function addBusinessDays(date, days) {
  const currentDate = new Date(date);
  while (days > 0) {
    // console.log(currentDate)
    currentDate.setDate(currentDate.getDate() + 1);
    console.log({ isNBD: !isNonBusinessDay(currentDate), currentDate, days })
    if (!isNonBusinessDay(currentDate)) {
      days--;
    }
  }
  return currentDate;
}

function estimateACHArrival(startDateTime, effective_date) {
  let estimatedDate = new Date(startDateTime);
  console.log(estimatedDate.toUTCString())
  const offsetHours = isDaylightSavingTime(estimatedDate) ? 4 : 5
  const hours = 17 + offsetHours;
  console.log({hoursToCompare: hours, hoursOfDate: estimatedDate.getHours(), estimatedDate, effective_date, })
  // console.log(estimatedDate.getHours())
  if (
    estimatedDate.getHours() > hours ||
    (estimatedDate.getHours() === hours && estimatedDate.getMinutes() > 30) ||
    isNonBusinessDay(estimatedDate)
  ) {
    console.log('add business day')
    estimatedDate = addBusinessDays(estimatedDate, 1);
  }

  

  estimatedDate = addBusinessDays(estimatedDate, 1);

  estimatedDate.setHours(0);
  estimatedDate.setMinutes(0);
  estimatedDate.setSeconds(0);
  console.log(estimatedDate.toLocaleString())
  return estimatedDate;
}

const processingResult = estimateACHArrival('2023-08-10T20:45:55.000Z', '2023-08-11');
console.log({ processingResult })
console.log(new Date('2023-08-10T20:45:55.000Z').getDay())

// const startDateTime = new Date("December 22, 2023 11:00:00");
// console.log(estimateACHArrival(startDateTime).toLocaleDateString());

// let count = 0;

// const errors = []

// d.forEach(({ effective_date, created_at }) => {
//   const processingResult = estimateACHArrival(created_at, effective_date);
//   processingResult.setHours(processingResult.getHours() + 8)

//   const realEffectiveDate = new Date(effective_date).toLocaleDateString();

//   if (processingResult.toLocaleDateString() !== realEffectiveDate) {
//     count+= 1;
//     errors.push({ processingResult, realEffectiveDate, effective_date, created_at, createAt: new Date(created_at) })
//   }
// })



function isDaylightSavingTime(date) {
  let jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) != date.getTimezoneOffset();
}

// console.log({ date })
// isDaylightSavingTime(new Date)



// console.log({ errors, count, length: d.length })?