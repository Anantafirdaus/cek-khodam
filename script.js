const khodamlist = [
  "macan putih",
  "macan lapar",
  "macan tidur",
  "kuda putih",
  "kuda laut",
  "tuyul mulet",
  "kulkas",
  "titid terbang",
  "genderuwo",
  "pocong salto",
  "kuyang",
  "plastik",
  "gajah terbang",
  "kuda pony",
  "le mineral",
  "topi koki",
  "wortel",
  "daging kurban",
  "kuntilanak",
  "sundel bolong",
  "banaspati",
  "kwetiaw",
  "ayam kampung",
  "ayam potong",
  "ayam kampus",
  "kompor gas",
  "kucing",
  "firaun",
  "ular",
  "dinosaurus",
  "platipus",
  "bebek nungging",
  "lebah ganteng",
  "pein akatsuki",
  "tidak ada",
];

function pilihkhodam(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  if (nama) {
    const randomIndex = Math.floor(Math.random() * khodamlist.length);
    const khodamTerpilih = khodamlist[randomIndex];
    resultDiv.textContent = `khodam ${nama} adalah ${khodamTerpilih}.`;

    setTimeout(() => {
      resultDiv.textContent = "";
    }, 5000);
  } else {
    resultDiv.textContent = "nama tidak boleh kosong.";
  }
}
document.getElementById("khodamForm").addEventListener("submit", pilihkhodam);
