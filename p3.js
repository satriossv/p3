// kelas sederhana: mahasiswa
class mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.nilai = [];
  }

tambahNilai(nilai) {
  this.nilai.push(nilai);
}

rataNilai() {
  if (this.nilai.length === 0) return 0;
  const total = this.nilai.reduce((a, b) => a + b, 0);
  return total / this.nilai.length;
}

info() {
  return `${this.nama} (${this.nim}) - ${this.jurusan}`;
}

const mhsl = new mahasiswa('Andi', '2023001', 'Informatika');
mhsl.tambahNilai(85);
mhsl.tambahNilai(90);
console.log(mhsl.info);
console.log('Rata-rata: ', mhsl.rataNilai().toFixed(2));
