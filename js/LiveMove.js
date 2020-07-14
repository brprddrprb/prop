  let template = {
    el: {},
    property: null,
    state: '',
    swipeXplus: 0,
    swipeX: 0,
    swipeStartX: 0,
    swipeYplus: 0,
    swipeY: 0,
    swipeStartY: 0,
    timeStart: 0,
    display: [window.screen.width, window.screen.height]
  }

  let all = {};
  // let name = () => parseInt(Math.random()*1000).toString()
    /* eslint-disable-next-line */
    function go (el, property, state, e) {
      let name = el.getAttribute('name');
      all[name] = {... template};
      all[name].el = el;
      all[name].property = property;

      return (e) => {
        let time = (e.timeStamp - all[name].timeStart) / 1000;        
        if (state == 'start') {          
          all[name].el = el;
          all[name].swipeStartX = e.changedTouches[0].clientX;
          all[name].swipeStartY = e.changedTouches[0].clientY;
          all[name].swipeX = 0;
          all[name].swipeY = 0;
          all[name].swipeXplus = 0;
          all[name].swipeYplus = 0;
          all[name].timeStart = e.timeStamp;
          all[name].state = state;
           all[name].property.value(all[name])
        } else if (state == 'while'){
          all[name].swipeX =  all[name].swipeX + (e.changedTouches[0].clientX -  all[name].swipeStartX);
          all[name].swipeY =  all[name].swipeY + (e.changedTouches[0].clientY -  all[name].swipeStartY);
          all[name].timeStart = time;
          all[name].swipeStartX = e.changedTouches[0].clientX;
          all[name].swipeStartY = e.changedTouches[0].clientY;
          all[name].swipeXplus = all[name].swipeXplus + all[name].swipeX;
          all[name].swipeYplus = all[name].swipeYplus + all[name].swipeY;
          if(all[name].swipeXplus > 150 ) all[name].swipeXplus = 150;
          if(all[name].swipeXplus < -150) all[name].swipeXplus = -150;
          if(all[name].swipeYplus > 150 ) all[name].swipeYplus = 150 ;
          if(all[name].swipeYplus < -150) all[name].swipeYplus = -150;
          if ( all[name].property.arg === 'y') {  all[name].swipeX = 0;}
          if ( all[name].property.arg === 'x') { all[name].swipeY = 0;} 
          if ( all[name].property.arg === 'top') {
            all[name].swipeX = 0;
            if (Math.sign( all[name].swipeY) == 1) { all[name].swipeY = 0}
          }
          if ( all[name].property.arg === 'bottom') {
            all[name].swipeX = 0;
            if (Math.sign( all[name].swipeY) == -1) { all[name].swipeY = 0}
          }   
          if ( all[name].property.arg === 'left') { 
            all[name].swipeY = 0;
            if (Math.sign( all[name].swipeX) == 1) { all[name].swipeX = 0}
          }
          if ( all[name].property.arg === 'right') {
            all[name].swipeY = 0;
            if (Math.sign( all[name].swipeX) == -1) { all[name].swipeX = 0}
          }
          all[name].state = state;      
          all[name].property.value(all[name])
          all[name].swipeX = 0;
          all[name].swipeY = 0;
        } else if (state == 'end') {
          all[name].state = state;
          all[name].property.value(all[name])
          el.removeEventListener('touchstart', null);
          el.removeEventListener('touchmove', null);
          el.addEventListener('touchend', null);
        }
      }
    }