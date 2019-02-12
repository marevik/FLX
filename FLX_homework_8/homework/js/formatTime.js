function formatTime(x) {
    let number = Math.abs(parseInt(x));
    let day = Math.floor(number / 1440);
    let hour = Math.floor((number - day * 1400) / 60);
    let minute = number - (hour * 60 + day * 1400);
  
    return `${day} day(s) ${hour} hour(s)  ${minute} minute(s)`;
  }
  formatTime(120);