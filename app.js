(function() {
  let seconds = 3600;
  
  setInterval(function() {
    seconds--;
    if(seconds == 3594) {
      seconds = 3600;
    }
    
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    
    if(h < 10) {
      h = `0${h}`; 
    }
    if(m < 10) {
      m = `0${m}`; 
    }
    if(s < 10) {
      s = `0${s}`; 
    }
    
    $('h2').text(`${h}:${m}:${s}`);
  }, 1000);
})();
