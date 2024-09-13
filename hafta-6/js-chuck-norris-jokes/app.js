// API'den şaka çekme fonksiyonu
function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random') // API'den rastgele bir şaka çeker
      .then(response => response.json()) // Gelen cevabı JSON formatına çevirir
      .then(data => {
          document.getElementById('joke').textContent = data.value; // Şakayı ekranda gösterir
      })
      .catch(error => {
          console.error('Şaka alınırken bir hata oluştu:', error);
          document.getElementById('joke').textContent = "Şaka yüklenemedi, lütfen tekrar deneyin.";
      });
}

// Sayfa yüklendiğinde ilk şakayı al
document.addEventListener('DOMContentLoaded', getJoke);

// Düğmeye tıklandığında yeni şaka al
document.getElementById('newJokeBtn').addEventListener('click', getJoke);
