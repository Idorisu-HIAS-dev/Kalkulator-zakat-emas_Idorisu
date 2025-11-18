// // 1. Ambil elemen DOM
// var inputGram = document.getElementById("emas-gram");      // input jumlah emas
// var tombol = document.getElementById("hitung");            // tombol hitung
// var hasil = document.getElementById("hasil");              // area output hasil
// var historyList = document.getElementById("history");      // daftar riwayat

// var riwayat = [];

// // 2. Tentukan harga emas per gram (misal harga pasaran)
// var hargaEmasRupiah = 1100000; // 1 gram = Rp 1.100.000

// // 3. Fungsi menampilkan history dari localStorage
// function muatHistory() {
//   // Ambil data dari localStorage key 'zakatHistory'
//   var data = localStorage.getItem('zakatHistory');
//   if (data) {
//     riwayat = JSON.parse(data);
//   } else {
//     riwayat = [];
//   }

//   // Tampilkan ke daftar
//   historyList.innerHTML = "";
//   // riwayat.forEach(function(item) {
//   //   var li = document.createElement('li');
//   //   li.textContent = item;
//   //   historyList.appendChild(li);
//   // });
//   for(var i=0; i<riwayat.length;i++){
//     var li=document.createElement("li")
//     li.className='zakatHistory'
//     li.innerHTML=riwayat
//     riwayat.appendChild(li)
//   }
//   riwayat.push(item)
//   localStorage.setItem("riwayat",JSON.stringify(riwayat))
//   inputGram.value=""
// }

// // 4. Fungsi menyimpan history ke localStorage
// function simpanHistory(text) {
//   // Ambil daftar lama
//   var data = localStorage.getItem('zakatHistory');
//   var arr = data ? JSON.parse(data) : [];

//   // Tambah item baru di depan
//   arr.unshift(text);

//   // Batasi max 10 data
//   if (arr.length > 10) {
//     arr.pop();
//   }

//   // Simpan ulang ke localStorage
//   localStorage.setItem('zakatHistory', JSON.stringify(arr));

//   // Tampilkan ulang
//   muatHistory();
// }

// // 5. Event logic tombol Hitung
// tombol.addEventListener('click', function() {
//   var emas = parseFloat(inputGram.value);
//   var nisab = 85;

//   // Validasi input
//   if (isNaN(emas) || emas <= 0) {
//     hasil.textContent = "Masukkan jumlah emas yang benar!";
//     return;
//   }

//   // Belum wajib zakat
//   if (emas < nisab) {
//     var teks = `Emas ${emas} gram belum wajib zakat (nisab 85 gram).`;
//     hasil.textContent = teks;
//     simpanHistory(teks);
//   } else {
//     // Hitung zakat 2.5%
//     var zakat = emas * 0.025;
//     var rupiah = zakat * hargaEmasRupiah;
//     var teks = `Zakat dari ${emas} gram emas = ${zakat.toFixed(2)} gram = Rp ${rupiah.toLocaleString()}`;
//     hasil.textContent = teks;
//     simpanHistory(teks);
//   }

//   // Kosongkan input
//   inputGram.value = "";
// });

// // 6. Jalankan fungsi menampilkan riwayat saat halaman dibuka
// muatHistory();

// // 1.Ambil elemen DOM

// // 3.Fungsi menampilkan history dari localStorage
// // 4.Fungsi menyimpan history ke localStorage

// // 6.Jalankan fungsi menampilkan riwayat saat halaman
// // dibuka

// // 1. Ambil elemen DOM
// var inputGram = document.getElementById("emas-gram"); // input jumlah emas
// var tombol = document.getElementById("hitung"); // tombol hitung
// var hasil = document.getElementById("hasil"); // area output hasil
// var historyList = document.getElementById("history"); // daftar riwayat

// var riwayat = [];

// // 2. Tentukan harga emas per gram (misal harga pasaran)
// var hargaEmasRupiah = 1100000; // 1 gram = Rp 1.100.000

// //fungsi tampilkan tugas
// function muatHistory() {
//   riwayat.innerHTML = ""; //kosongkan dulu
//   for (var i = 0; i < riwayat.length; i++) {
//     var li = document.createElement("li");
//     li.className = "zakatHistory";
//     li.innerHTML =
//       "<span>" +
//       // tugas[i] +
//       // '</span><button class="tombol-hapus" onclick="hapus(' +  i +')">Hapus</button>';
//       historyList.appendChild(li);
//   }
// }
// //fungsi:tambah tugas
// function tambah() {
//   //validasi data
//   var teks = inputGram.value.trim();
//   //jika teks sama dengan kosong
//   if (teks === "") {
//     //maka kasih peringatan
//     alert("tugas kosong!");
//     //dan stop prosesnya
//     return;
//   }

//   //[array]==>["satu"]
//   //["satu","dua"]
//   riwayat.push(teks);
//   localStorage.setItem("riwayat", JSON.stringify(tugas)); //simpan ke localStorage
//   inputGram.value = ""; //kosongkan input
//   muatHistory(); //tampilkan ulang
// }
// //fungsi:hapus
// // function hapus(index){
// //     tugas.splice(index,1);
// //     localStorage.setItem("tugas",JSON.stringify(tugas));//simpn perubahan
// //     tampilkan()//tampilkan ulang
// //     // hapus.style.backgroundColor = "red";
// // }
// //fungsi:muat data dari localStorage
// function muatHistory() {
//   var data = localStorage.getItem("riwayat");
//   if (data !== null) {
//     riwayat = JSON.parse(data);
//   }
//   muatHistory();
// }

// //event tombol
// hasil.addEventListener("click", tambah);

// //jalankan saat halaman dimuat
// muatHistory();

// // 5. Event logic tombol Hitung
// hasil.addEventListener("click", function () {
//   var emas = parseFloat(inputGram.value);
//   var nisab = 85;

//   // Validasi input
//   if (isNaN(emas) || emas <= 0) {
//     hasil.textContent = "Masukkan jumlah emas yang benar!";
//     return;
//   }

//   // Belum wajib zakat
//   if (emas < nisab) {
//     var teks = `Emas ${emas} gram belum wajib zakat (nisab 85 gram).`;
//     hasil.textContent = teks;
//     simpanHistory(teks);
//   } else {
//     // Hitung zakat 2.5%
//     var zakat = emas * 0.025;
//     var rupiah = zakat * hargaEmasRupiah;
//     var teks = `Zakat dari ${emas} gram emas = ${zakat.toFixed(
//       2
//     )} gram = Rp ${rupiah.toLocaleString()}`;
//     hasil.textContent = teks;
//     simpanHistory(teks);
//   }

//   // Kosongkan input
//   inputGram.value = "";
// });



// 1. Ambil elemen DOM
var inputGram = document.getElementById("emas-gram"); // input jumlah emas
var tombol = document.getElementById("hitung"); // tombol hitung
var hasil = document.getElementById("hasil"); // area output hasil
var historyList = document.getElementById("history"); // daftar riwayat

var riwayat = [];
//2.tentukan harga emas/gram
// TODO Isi dengan nilai harga emas/gram rumahan (misal: 1100000
var hargaEmasRupiah = 1100000;

//3. Fungsi menampilkan history dari localStorage
function muatHistory() {
  var data = localStorage.getItem("zakatHistory");// Ambil data dari localStorage key 'zakatHistory'
  if (data) {
    riwayat = JSON.parse(data);// Parsing ke array,
  } else {
    riwayat = [];
  }

  historyList.innerHTML = "";
  riwayat.forEach(function (item) {
    var li = document.createElement("li");// tampilkan list ke historyList.innerHTML
    li.textContent = item;
    historyList.appendChild(li);
  });
}

//4. Fungsi menyimpan history ke localStorage
function simpanHistory(text) {
  var data = localStorage.getItem("zakatHistory");
  var array = data ? JSON.parse(data) : [];

  array.unshift(text);

  if (array.length > 10) {
    array.pop();// hapus data paling lama
  }

  localStorage.setItem("zakatHistory", JSON.stringify(array));// Ambil daftar lama dari localStorage,

  muatHistory();// simpan ulang, lalu tampilkan ulang riwayat!

}

// 5. Event logic tombol Hitung
tombol.addEventListener("click", function () {
  // TODO ambil nilai input emas, parsing ke number, nisab  85
  var emas = parseFloat(inputGram.value);
  var nisab = 85;
  // TODO Jika input tidak valid, tampilkan pesan error dan return
  //validasi input
  if (isNaN(emas) || emas <= 0) {  //isNan:is not number yg artinya bukan angka
    hasil.textContent = "kasih jumlah emasnya yg bener dong!!";
    return;
  }

  // TODO Jika emas < nisab, tampilkan "Belum wajib zakat" dan simpan ke riwayat
  if (emas < nisab) {
    hasil.textContent = "belum wajib zakat";
    simpanHistory(
      "Emas " + emas + " gram belum wajib zakat harap ditabung dulu ya!!!"
    );
  } else {
    var hitungZakat = emas * 0.025;
    var rupiah = hitungZakat * hargaEmasRupiah;
    hasil.textContent =
      "Zakatmu adalah" + hitungZakat + "gram atau Rp." + rupiah;
    simpanHistory(
      "Zakat Emas " +
        emas +
        "gram adalah" +
        hitungZakat +
        "gram atau Rp." +
        rupiah
    );
  }
  // TODO Hitung zakat = emas * 0.025, rupiah = zakat * hargaEmasRupiah

  // TODO Kosongkan inputGram setelah proses
  inputGram.value = "";
});

//6. Jalankan fungsi menampilkan riwayat saat halaman dibuka
muatHistory();// TODO Panggil muatHistory() agar riwayat langsung tampil