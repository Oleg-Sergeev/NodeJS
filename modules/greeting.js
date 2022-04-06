let currentDate = new Date();

global.date = currentDate;

export default function() {
  let hour = currentDate.getHours();
  if (hour > 16) return 'Добрый вечер, ' + global.name;
  else if (hour > 10) return 'Добрый день, ' + global.name;
  else return 'Доброе утро, ' + global.name;
}