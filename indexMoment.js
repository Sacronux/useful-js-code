import moment from "moment-timezone";

const holidays = [
  "2023-01-02", // New Year’s Day (observed)
  "2023-01-16", // Birthday of Martin Luther King, Jr.
  "2023-02-20", // Washington’s Birthday (Presidents' Day)
  "2023-05-29", // Memorial Day
  "2023-06-19", // Juneteenth National Independence Day
  "2023-07-04", // Independence Day
  "2023-09-04", // Labor Day
  "2023-10-09", // Columbus Day
  "2023-11-10", // Veterans Day (observed)
  "2023-11-23", // Thanksgiving Day
  "2023-12-25", // Christmas Day
];

const d = [
  {
    created_at: "2023-11-27T00:00:03Z",
    effective_date: "2023-11-28",
  },
  {
    created_at: "2023-11-27T00:00:02Z",
    effective_date: "2023-11-28",
  },
  {
    created_at: "2023-11-27T00:00:02Z",
    effective_date: "2023-11-28",
  },
  {
    created_at: "2023-11-27T00:00:01Z",
    effective_date: "2023-11-28",
  },
  {
    created_at: "2023-11-27T00:00:01Z",
    effective_date: "2023-11-28",
  },
  {
    created_at: "2023-11-27T00:00:00Z",
    effective_date: "2023-11-28",
  },
  {
    created_at: "2023-11-24T17:00:00Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:04Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:04Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:03Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:03Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:02Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:02Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:01Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-24T00:00:00Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-22T23:00:01Z",
    effective_date: "2023-11-27",
  },
  {
    created_at: "2023-11-22T16:00:01Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-22T16:00:00Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-22T13:00:00Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-22T04:30:00Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-22T00:00:02Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-22T00:00:01Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-21T23:30:00Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-21T23:00:00Z",
    effective_date: "2023-11-24",
  },
  {
    created_at: "2023-11-21T00:00:02Z",
    effective_date: "2023-11-22",
  },
  {
    created_at: "2023-11-21T00:00:01Z",
    effective_date: "2023-11-22",
  },
  {
    created_at: "2023-11-21T00:00:01Z",
    effective_date: "2023-11-22",
  },
  {
    created_at: "2023-11-21T00:00:00Z",
    effective_date: "2023-11-22",
  },
  {
    created_at: "2023-11-20T00:00:02Z",
    effective_date: "2023-11-21",
  },
  {
    created_at: "2023-11-20T00:00:02Z",
    effective_date: "2023-11-21",
  },
  {
    created_at: "2023-11-20T00:00:01Z",
    effective_date: "2023-11-21",
  },
  {
    created_at: "2023-11-17T00:30:02Z",
    effective_date: "2023-11-20",
  },
  {
    created_at: "2023-11-17T00:30:02Z",
    effective_date: "2023-11-20",
  },
  {
    created_at: "2023-11-17T00:30:01Z",
    effective_date: "2023-11-20",
  },
  {
    created_at: "2023-11-16T22:41:28Z",
    effective_date: "2023-11-20",
  },
  {
    created_at: "2023-11-15T00:00:01Z",
    effective_date: "2023-11-16",
  },
  {
    created_at: "2023-11-11T15:21:14Z",
    effective_date: "2023-11-14",
  },
  {
    created_at: "2023-11-07T20:52:57Z",
    effective_date: "2023-11-08",
  },
  {
    created_at: "2023-10-24T17:53:46Z",
    effective_date: "2023-10-25",
  },
  {
    created_at: "2023-10-11T16:17:53Z",
    effective_date: "2023-10-12",
  },
  {
    created_at: "2023-10-11T16:05:35Z",
    effective_date: "2023-10-12",
  },
  {
    created_at: "2023-09-13T20:17:55Z",
    effective_date: "2023-09-14",
  },
  {
    created_at: "2023-09-13T20:15:47Z",
    effective_date: "2023-09-14",
  },
  {
    created_at: "2023-08-10T22:14:22Z",
    effective_date: "2023-08-14",
  },
  {
    created_at: "2023-08-10T22:13:37Z",
    effective_date: "2023-08-14",
  },
  {
    created_at: "2023-08-10T20:45:55Z",
    effective_date: "2023-08-11",
  },
  {
    created_at: "2023-05-06T18:49:06Z",
    effective_date: "2023-05-09",
  },
  {
    created_at: "2023-05-01T19:02:32Z",
    effective_date: "2023-05-02",
  },
];

function isWeekend(date) {
  const dayOfWeek = date.days();
  // console.log('isW', { dayOfWeek })
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function isHoliday(date) {
  for (let i = 0; i < holidays.length; i++) {
    const holiday = holidays[i];

    if (date.format('YYYY-MM-DD') === holiday) {
      return true;
    }
  }
  return false;
}

function isNonBusinessDay(date) {
  //   console.log({ isW: isWeekend(date), isH: isHoliday(date), date })
  return isWeekend(date) || isHoliday(date);
}

function addBusinessDays(date, days) {
  // console.log({ days })
  while (days > 0) {
    date.add(1, "days");
    // console.log({ isNBD: !isNonBusinessDay(date), date, days })
    if (!isNonBusinessDay(date)) {
      days--;
    }
  }
  return date;
}

function estimateACHArrival(startDateTime, effective_date) {
  const estimatedDate = moment(startDateTime).tz("Greenwich");
  let dateInEt = moment(startDateTime).tz("America/New_York");

  const hoursToCheck = dateInEt.hours();
  const minutesToCheck = dateInEt.minutes();
  const cutOffHours = 17;
  const cutOffMinutes = 30;

  //   const offsetHours = isDaylightSavingTime(estimatedDate) ? 4 : 5
  //   const hours = 17 + offsetHours;
  //   console.log({hoursToCompare: hours, hoursOfDate: estimatedDate.getHours(), estimatedDate, effective_date, })
  //   // console.log(estimatedDate.getHours())
  if (
    hoursToCheck > cutOffHours ||
    (hoursToCheck === cutOffHours && minutesToCheck > cutOffMinutes) ||
    isNonBusinessDay(dateInEt)
  ) {
    dateInEt = addBusinessDays(dateInEt, 1);
  }

  dateInEt = addBusinessDays(dateInEt, 1);
  return dateInEt;
}

// const processingResult = estimateACHArrival('2023-08-10T20:45:55.000Z', '2023-08-11');
// console.log({ processingResult })
// console.log(new Date('2023-08-10T20:45:55.000Z').getDay())

// const startDateTime = new Date("December 22, 2023 11:00:00");
// console.log(estimateACHArrival(startDateTime).toLocaleDateString());

let count = 0;

const errors = [];

d.forEach(({ effective_date, created_at }) => {
  const processingResult = estimateACHArrival(created_at, effective_date);

  if (processingResult.format("YYYY-MM-DD") !== effective_date) {
    console.log(processingResult.format("YYYY-MM-DD") === effective_date);
    console.log({
      processingResult: processingResult,
      effective_date,
      created_at: moment.utc(created_at),
    });
    count += 1;
  }
});

console.log(moment('2022-09-14').tz('Europe/Oslo').isDST())

console.log({ errors, count, length: d.length });
