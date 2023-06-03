// Cambia la fecha objetivo a la que deseas llegar
const targetDate = new Date('2023-10-09T00:00:00');

function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = targetDate - currentDate;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();