const today = new Date();
const formatted = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(today);

console.log(formatted);