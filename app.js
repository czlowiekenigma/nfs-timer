(function() {
  let tick = 0;
  
  setInterval(function() {
    if(tick == 0) {
      $('h2').text('01:00:00');
    } else if(tick == 1) {
      $('h2').text('00:59:59');
    } else if(tick == 2) {
      $('h2').text('00:59:58');
    } else if(tick == 3) {
      $('h2').text('00:59:57');
    } else if(tick == 4) {
      $('h2').text('00:59:56');
    } else if(tick == 5) {
      $('h2').text('00:59:55');
    }
    
    tick++;
    if(tick == 6) {
      tick = 0; 
    }
  }, 1000);
})();
