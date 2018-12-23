(function() {
  let tick = 0;
  
  setInterval(function() {
    if(tick == 0) {
      $('h2').text('01:00:00');
    } else if(tick == 1) {
      $('h2').text('00:59:00');
    } else if(tick == 2) {
      $('h2').text('00:58:00');
    } else if(tick == 3) {
      $('h2').text('00:57:00');
    } else if(tick == 4) {
      $('h2').text('00:56:00');
    } else if(tick == 5) {
      $('h2').text('00:55:00');
    }
    
    tick++;
    if(tick == 6) {
      tick = 0; 
    }
  }, 1000);
})();
