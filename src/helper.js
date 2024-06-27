export const get_dates = function (start, end) {
  const dates = [];
  for (
    const date = new Date(start);
    date <= new Date(end);
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }
  // console.log(dates[0], dates[dates.length - 1]);
  return dates;
};
