// ===== Countdown bis Anmeldeschluss =====
(function () {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const deadline = new Date(countdownEl.dataset.deadline).getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function tick() {
    const now = Date.now();
    const diff = deadline - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  tick();
  const timer = setInterval(tick, 1000);
})();

// ===== Formular per fetch an Web3Forms senden =====
(function () {
  const form = document.getElementById('registration-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const submitBtn = form.querySelector('.form-submit');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const accessKey = form.querySelector('input[name="access_key"]').value;
    if (!accessKey || accessKey.includes('DEIN-')) {
      statusEl.textContent = 'Formular ist noch nicht final eingerichtet (Access Key fehlt).';
      statusEl.className = 'form-status error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet ...';
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        statusEl.textContent = 'Danke! Deine Anmeldung wurde versendet.';
        statusEl.className = 'form-status success';
        form.reset();
      } else {
        statusEl.textContent = 'Senden fehlgeschlagen. Bitte versuch es erneut oder schreib uns direkt per E-Mail.';
        statusEl.className = 'form-status error';
      }
    } catch (err) {
      statusEl.textContent = 'Senden fehlgeschlagen. Bitte versuch es erneut oder schreib uns direkt per E-Mail.';
      statusEl.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Anmeldung senden';
    }
  });
})();
