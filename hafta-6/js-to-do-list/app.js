// Toast gösterme fonksiyonu
function showToast(type) {
  let toastElement;
  if (type === 'success') {
    toastElement = document.querySelector('#liveToast');
  } else if (type === 'error') {
    toastElement = document.querySelector('.toast.error');
  }

  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

app.js

// Listeye yeni element ekleme
function newElement() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    showToast('error');  // Boş karakter eklenemediğinde hata göster
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;
  
  // Silme butonu ekle
  const span = document.createElement("span");
  span.textContent = "\u00D7";
  span.className = "close";
  span.onclick = function() {
    this.parentElement.remove();
  };
  
  li.appendChild(span);
  document.getElementById("list").appendChild(li);
  taskInput.value = "";  // Input alanını temizle

  showToast('success');  // Başarıyla eklendiğinde toast bildirimi göster
}

// Listeye tıklanıldığında "yapıldı" işaretlenmesi
document.querySelector('ul').addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
