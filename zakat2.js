// 1. Ambil elemen DOM
var inputGram = document.getElementById("emas-gram");      // input jumlah emas
var tombol = document.getElementById("hitung");            // tombol hitung
var hasil = document.getElementById("hasil");              // area output hasil
var historyList = document.getElementById("history");      // daftar riwayat

var riwayat = [];

// 2. Tentukan harga emas per gram (misal harga pasaran)
var hargaEmasRupiah = 1100000; // 1 gram = Rp 1.100.000

// 3. Fungsi menampilkan history dari localStorage
function muatHistory() {
  // Ambil data dari localStorage key 'zakatHistory'
  var data = localStorage.getItem('zakatHistory');
  if (data) {
    riwayat = JSON.parse(data);
  } else {
    riwayat = [];
  }

  // Tampilkan ke daftar
  historyList.innerHTML = "";
  riwayat.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

// 4. Fungsi menyimpan history ke localStorage
function simpanHistory(text) {
  // Ambil daftar lama
  var data = localStorage.getItem('zakatHistory');
  var arr = data ? JSON.parse(data) : [];

  // Tambah item baru di depan
  arr.unshift(text);

  // Batasi max 10 data
  if (arr.length > 10) {
    arr.pop();
  }

  // Simpan ulang ke localStorage
  localStorage.setItem('zakatHistory', JSON.stringify(arr));

  // Tampilkan ulang
  muatHistory();
}

// 5. Event logic tombol Hitung
tombol.addEventListener('click', function() {
  var emas = parseFloat(inputGram.value);
  var nisab = 85;

  // Validasi input
  if (isNaN(emas) || emas <= 0) {
    hasil.textContent = "Masukkan jumlah emas yang benar!";
    return;
  }

  // Belum wajib zakat
  if (emas < nisab) {
    var teks = `Emas ${emas} gram belum wajib zakat (nisab 85 gram).`;
    hasil.textContent = teks;
    simpanHistory(teks);
  } else {
    // Hitung zakat 2.5%
    var zakat = emas * 0.025;
    var rupiah = zakat * hargaEmasRupiah;
    var teks = `Zakat dari ${emas} gram emas = ${zakat.toFixed(2)} gram = Rp ${rupiah.toLocaleString()}`;
    hasil.textContent = teks;
    simpanHistory(teks);
  }

  // Kosongkan input
  inputGram.value = "";
});

// 6. Jalankan fungsi menampilkan riwayat saat halaman dibuka
muatHistory();
