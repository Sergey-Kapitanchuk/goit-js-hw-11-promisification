class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    const timer = document.querySelector(this.selector);
    this.days = timer.querySelector('[data-value ="days"]');
    this.hours = timer.querySelector('[data-value ="hours"]');
    this.mins = timer.querySelector('[data-value ="mins"]');
    this.secs = timer.querySelector('[data-value ="secs"]');
      
    this.days2 = timer.querySelector('.timer__days');
    this.hours2 = timer.querySelector('.timer__hours');
    this.mins2 = timer.querySelector('.timer__minutes');
    this.secs2 = timer.querySelector('.timer__seconds'); 
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.updateTimerFace(this.getTimeComponents(time));
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  updateTimerFace({ days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
    }
    updateTimerFace({ days, hours, mins, secs }) {
    this.days2.textContent = `${days}`;
    this.hours2.textContent = `${hours}`;
    this.mins2.textContent = `${mins}`;
    this.secs2.textContent = `${secs}`;
  }
}

    
    const timer = new CountdownTimer({
    selector: '#timer',
    targetDate: new Date('Jan 01, 2022'),
    });

    const timer2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Jan 01, 2022'),
    });