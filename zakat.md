🧩 PENJELASAN KODE SECARA MENYELURUH
🔹 1. Mengambil Elemen DOM
var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");


📘 Penjelasan:
Bagian ini mengambil elemen HTML berdasarkan id:

inputGram → input tempat pengguna mengisi jumlah emas.

tombol → tombol "Hitung" zakat.

hasil → area teks untuk menampilkan hasil perhitungan.

historyList → daftar <ul> atau <ol> untuk menampilkan riwayat perhitungan zakat.

🔹 2. Menentukan Harga Emas per Gram
var hargaEmasRupiah = 1100000;


📘 Penjelasan:
Ini adalah harga emas per gram (contohnya Rp 1.100.000).
Kamu bisa ubah sesuai harga emas terbaru di pasaran.

🔹 3. Fungsi muatHistory()
function muatHistory() {
  var data = localStorage.getItem("zakatHistory");
  if (data) {
    riwayat = JSON.parse(data);
  } else {
    riwayat = [];
  }

  historyList.innerHTML = "";

  riwayat.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}


📘 Penjelasan:

localStorage digunakan untuk menyimpan data di browser agar tidak hilang walau halaman ditutup.

JSON.parse(data) mengubah teks JSON menjadi array.

Lalu, setiap item riwayat ditampilkan dalam bentuk <li> di dalam elemen <ul>.

🧠 Fungsi ini otomatis memunculkan riwayat zakat sebelumnya saat halaman dibuka.

🔹 4. Fungsi simpanHistory(text)
function simpanHistory(text) {
  var data = localStorage.getItem("zakatHistory");
  var array = data ? JSON.parse(data) : [];

  array.unshift(text); // tambahkan ke awal array

  if (array.length > 10) {
    array.pop(); // hapus data paling lama
  }

  localStorage.setItem("zakatHistory", JSON.stringify(array));
  muatHistory();
}


📘 Penjelasan:

Mengambil riwayat lama dari localStorage.

Menambah data baru di urutan atas (unshift).

Membatasi hanya 10 riwayat terakhir.

Menyimpan ulang ke localStorage dan memanggil muatHistory() agar langsung tampil.

🧠 Dengan ini, setiap hasil zakat akan tersimpan otomatis.

🔹 5. Event Listener Tombol “Hitung”
tombol.addEventListener("click", function () {
  var emas = parseFloat(inputGram.value);
  var nisab = 85;

  if (isNaN(emas) || emas <= 0) {
    hasil.textContent = "kasih jumlah emasnya yg bener dong!!";
    return;
  }

  if (emas < nisab) {
    hasil.textContent = "belum wajib zakat";
    simpanHistory("Emas " + emas + " gram belum wajib zakat harap ditabung dulu ya!!!");
  } else {
    var hitungZakat = emas * 0.025;
    var rupiah = hitungZakat * hargaEmasRupiah;
    hasil.textContent = "Zakatmu adalah " + hitungZakat + " gram atau Rp." + rupiah;
    simpanHistory("Zakat Emas " + emas + "gram adalah " + hitungZakat + "gram atau Rp." + rupiah);
  }

  inputGram.value = "";
});


📘 Penjelasan langkah demi langkah:

Ambil nilai dari input (gram emas).

parseFloat() mengubah input string jadi angka.

Cek validasi:

Jika bukan angka / 0 / negatif → tampilkan pesan error.

Tentukan nisab emas = 85 gram (batas minimal wajib zakat).

Jika emas < 85 → belum wajib zakat.

Jika emas ≥ 85 → wajib zakat → hitung zakat 2.5% (emas * 0.025).

Konversi ke rupiah (zakat * hargaEmasRupiah).

Tampilkan hasil dan simpan ke riwayat.

Kosongkan input setelah dihitung.

🔹 6. Panggil Fungsi muatHistory() Saat Halaman Dibuka
muatHistory();


📘 Penjelasan:
Agar riwayat zakat dari localStorage langsung tampil begitu halaman dibuka, tanpa menunggu tombol ditekan.

🧠 RANGKUMAN ALUR KERJA

User isi jumlah gram emas.

Klik “Hitung”.

Program:

Cek apakah angka valid.

Bandingkan dengan nisab 85 gram.

Hitung zakat = 2.5% dari total emas.

Konversi ke rupiah.

Tampilkan hasil.

Hasil disimpan ke localStorage agar tidak hilang.

Riwayat maksimal 10 entri terakhir tampil di bawah.

🧑‍🏫 CARA MEMRESENTASIKANNYA

Kamu bisa jelaskan seperti ini di depan kelas atau saat demo 👇

🎤 Pembukaan:

“Program ini saya buat untuk menghitung zakat emas secara otomatis menggunakan JavaScript dan penyimpanan lokal browser.”

💻 Langkah penjelasan sambil demo:

Tunjukkan form input dan tombol.

“Pengguna mengisi jumlah emas di sini, misalnya 100 gram.”

Klik tombol “Hitung”.

“Program akan memeriksa apakah jumlah emas sudah mencapai nisab 85 gram.”

Jelaskan hasilnya.

“Karena 100 gram sudah lebih dari 85 gram, maka zakatnya wajib 2.5%, yaitu 2.5 gram emas, atau dalam rupiah setara Rp 2.750.000.”

Tunjukkan riwayat.

“Setiap perhitungan otomatis disimpan di localStorage dan ditampilkan di bawah, jadi riwayat tidak hilang walau browser ditutup.”

Buka ulang halaman.

“Nah, riwayat tetap muncul karena tersimpan di penyimpanan lokal browser.”

🧩 Penutup:

“Jadi program ini memanfaatkan DOM untuk berinteraksi dengan elemen HTML, localStorage untuk menyimpan data secara permanen, dan perhitungan sederhana untuk menentukan zakat emas. Dengan cara ini, pengguna bisa menghitung zakat dengan mudah dan cepat.”