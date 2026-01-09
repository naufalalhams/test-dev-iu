import React, { useState } from "react";
import "./App.css";

function App() {

  // ======================
  // 1. DATA HEWAN ESA
  // ======================
  const [pets, setPets] = useState([
    {
      jenis: "Anjing",
      ras: "Golden Retriever",
      nama: "Otto",
      karakteristik: "Energik dan senang bermain bola"
    },
    {
      jenis: "Kucing",
      ras: "Persia",
      nama: "Luna",
      karakteristik: "Anggun dan manja"
    },
    {
      jenis: "Anjing",
      ras: "Siberian Husky",
      nama: "Max",
      karakteristik: "Berbulu lebat dan bermata biru"
    }
  ]);

  // ======================
  // 2. TAMBAH BADAK
  // ======================
  function tambahBadak() {
    setPets([
      ...pets,
      {
        jenis: "Mamalia",
        ras: "Badak Jawa",
        nama: "Rino",
        karakteristik: "Pekerja keras"
      }
    ]);
  }

  // ======================
  // 3. URUTKAN
  // ======================
  function urutkanAsc() {
    setPets([...pets].sort((a, b) => a.nama.localeCompare(b.nama)));
  }

  function urutkanDesc() {
    setPets([...pets].sort((a, b) => b.nama.localeCompare(a.nama)));
  }

  // ======================
  // 4. JUMLAH PER JENIS
  // ======================
  const jumlahPerJenis = pets.reduce((hasil, pet) => {
    hasil[pet.jenis] = (hasil[pet.jenis] || 0) + 1;
    return hasil;
  }, {});

  // ======================
  // 5. PALINDROME
  // ======================
  const hewanPalindrome = pets.filter((pet) => {
    const nama = pet.nama.toLowerCase();
    return nama === nama.split("").reverse().join("");
  });

  // ======================
  // 6. BILANGAN GENAP
  // ======================
  const angka = [15, 18, 3, 9, 6, 2, 12, 14];
  const bilanganGenap = angka.filter((n) => n % 2 === 0);
  const totalGenap = bilanganGenap.reduce((a, b) => a + b, 0);

  // ======================
  // 7. ANAGRAM
  // ======================
  const [kata1, setKata1] = useState("");
  const [kata2, setKata2] = useState("");
  const [hasilAnagram, setHasilAnagram] = useState("");

  function cekAnagram() {
    const format = (kata) =>
      kata.toLowerCase().split("").sort().join("");

    setHasilAnagram(
      format(kata1) === format(kata2)
        ? "✅ Anagram"
        : "❌ Bukan Anagram"
    );
  }

  // ======================
  // 8. TAMPILAN (UI)
  // ======================
  return (
    <div className="container">
      <h1>Hewan Peliharaan Esa</h1>

      <div className="button-group">
        <button onClick={tambahBadak}>Tambah Badak Rino</button>
        <button onClick={urutkanAsc}>Urutkan A - Z</button>
        <button onClick={urutkanDesc}>Urutkan Z - A</button>
      </div>

      <section>
        <h2>Daftar Hewan</h2>
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>
              {pet.nama} - {pet.jenis} ({pet.ras})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Jumlah Hewan per Jenis</h2>
        <ul>
          {Object.entries(jumlahPerJenis).map(([jenis, jumlah]) => (
            <li key={jenis}>
              {jenis}: {jumlah}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Hewan dengan Nama Palindrome</h2>
        {hewanPalindrome.length === 0 ? (
          <p>Tidak ada nama palindrome</p>
        ) : (
          <ul>
            {hewanPalindrome.map((pet, index) => (
              <li key={index}>
                {pet.nama} (panjang: {pet.nama.length})
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Bilangan Genap</h2>
        <p>Bilangan Genap: {bilanganGenap.join(", ")}</p>
        <p>Total Bilangan Genap: {totalGenap}</p>
      </section>

      <section>
        <h2>Cek Anagram</h2>
        <input
          placeholder="Kata pertama"
          value={kata1}
          onChange={(e) => setKata1(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Kata kedua"
          value={kata2}
          onChange={(e) => setKata2(e.target.value)}
        />
        <br /><br />
        <button onClick={cekAnagram}>Cek Anagram</button>
        <p>{hasilAnagram}</p>
      </section>
    </div>
  );
}

export default App;
