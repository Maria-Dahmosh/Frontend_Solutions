//1
const currentDate = new Date();
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
console.log(
  currentDate.toLocaleDateString(undefined, options) +
    " (Eastern European Standard Time)"
);
