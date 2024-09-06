// Kullanıcıdan ismini al
let userName = prompt("Lütfen isminizi girin:");

// İsmi HTML'deki ilgili alana yerleştir
document.getElementById("myName").textContent = userName;

// Saati ve tarihi göstermek için bir fonksiyon
function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  // Saat, dakika ve saniyeyi iki haneli gösterim
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = `${hours}:${minutes}:${seconds}`;
  
  // Gün bilgisini almak
  let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let dayName = days[now.getDay()];
  
  // Tarih formatı (DD/MM/YYYY)
  let day = now.getDate();
  let month = now.getMonth() + 1; // Aylar 0-11 arası olduğu için +1
  let year = now.getFullYear();
  let dateString = `${day}/${month}/${year}`;

  // Saat ve gün bilgisini HTML'e yerleştir
  document.getElementById("myClock").textContent = `${timeString} - ${dayName}, ${dateString}`;
  
  // Fonksiyonu her saniye çalıştır (saati güncellemek için)
  setTimeout(showTime, 1000);
}

// Fonksiyonu ilk defa çalıştır
showTime();
