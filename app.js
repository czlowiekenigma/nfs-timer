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
    
//     if(tick == 0) {
//       $('h2').text('01:00:00');
//     } else if(tick == 1) {
//       $('h2').text('00:59:59');
//     } else if(tick == 2) {
//       $('h2').text('00:59:58');
//     } else if(tick == 3) {
//       $('h2').text('00:59:57');
//     } else if(tick == 4) {
//       $('h2').text('00:59:56');
//     } else if(tick == 5) {
//       $('h2').text('00:59:55');
//     }
    
//     tick++;
//     if(tick == 6) {
//       tick = 0; 
//     }
  }, 1000);
})();
