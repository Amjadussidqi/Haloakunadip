document.addEventListener('DOMContentLoaded', () => {
    const puzzleForm = document.getElementById('puzzle-form');
    const q1Input = document.getElementById('q1');
    const q2Input = document.getElementById('q2');
    const q3Input = document.getElementById('q3');
    const clueDiv = document.getElementById('clue');
    const pesanUtamaDiv = document.getElementById('pesan-utama');
    const puzzleDiv = document.getElementById('puzzle');
    const bukaPesanButton = document.getElementById('buka-pesan');
    const kodeRahasiaInput = document.getElementById('kode-rahasia');

    // --- BAGIAN YANG HARUS KAMU UBAH ---
    const jawabanBenar = {
        q1: 'bandung',   // Jawaban pertanyaan 1 (huruf kecil semua)
        q2: 'kopi',      // Jawaban pertanyaan 2
        q3: 'ayang'      // Jawaban pertanyaan 3
    };
    const kodeFinal = 'BKA'; // Huruf pertama dari 'Bandung', 'Kopi', 'Ayang'
    // ------------------------------------

    puzzleForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form reload halaman

        // Reset style border
        q1Input.classList.remove('salah');
        q2Input.classList.remove('salah');
        q3Input.classList.remove('salah');

        const jawabanUser = {
            q1: q1Input.value.trim().toLowerCase(),
            q2: q2Input.value.trim().toLowerCase(),
            q3: q3Input.value.trim().toLowerCase()
        };

        let semuaBenar = true;

        if (jawabanUser.q1 !== jawabanBenar.q1) {
            q1Input.classList.add('salah');
            semuaBenar = false;
        }
        if (jawabanUser.q2 !== jawabanBenar.q2) {
            q2Input.classList.add('salah');
            semuaBenar = false;
        }
        if (jawabanUser.q3 !== jawabanBenar.q3) {
            q3Input.classList.add('salah');
            semuaBenar = false;
        }

        if (semuaBenar) {
            clueDiv.classList.remove('hidden');
            puzzleForm.querySelector('.tombol-aksi').classList.add('hidden'); // Sembunyikan tombol 'Cek Jawaban'
        } else {
            alert('Ada jawaban yang salah, coba lagi deh!');
        }
    });

    bukaPesanButton.addEventListener('click', () => {
        const kodeUser = kodeRahasiaInput.value.trim().toUpperCase();
        if (kodeUser === kodeFinal) {
            puzzleDiv.classList.add('hidden');
            pesanUtamaDiv.classList.remove('hidden');
        } else {
            alert('Kode Rahasianya salah, coba cek lagi petunjuknya!');
        }
    });
});
