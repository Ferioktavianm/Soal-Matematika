let soal = [
    // Sistem Persamaan Dua Variabel (SPDLV)
    {
        pertanyaan: 'Jika 2x + 3y = 12 dan x - y = 1, maka nilai x adalah:',
        jawab: {
            'A': '3',
            'B': '2',
            'C': '4',
            'D': '1',
        },
        benar: 'A',
    },
    {
        pertanyaan: 'Selesaikan sistem berikut: 3x + 2y = 6 dan 4x - y = 5. Nilai y adalah:',
        jawab: {
            'A': '1',
            'B': '2',
            'C': '3',
            'D': '0',
        },
        benar: 'A',
    },
    {
        pertanyaan: 'Dari persamaan 5x + 2y = 10, jika x = 2, maka y adalah:',
        jawab: {
            'A': '0',
            'B': '5',
            'C': '1',
            'D': '2',
        },
        benar: 'C',
    },
    {
        pertanyaan: 'Berapa nilai x dan y dari sistem: x + 2y = 8 dan 3x - y = 2?',
        jawab: {
            'A': 'x=2, y=3',
            'B': 'x=4, y=2',
            'C': 'x=1, y=4',
            'D': 'x=0, y=8',
        },
        benar: 'B',
    },
    {
        pertanyaan: 'Jika 7x - 3y = 11 dan 2x + 4y = 14, maka nilai y adalah:',
        jawab: {
            'A': '2',
            'B': '3',
            'C': '1',
            'D': '4',
        },
        benar: 'B',
    },

    // Pangkat
    {
        pertanyaan: '5^2 = ?',
        jawab: {
            'A': '10',
            'B': '25',
            'C': '20',
            'D': '30',
        },
        benar: 'B',
    },
    {
        pertanyaan: '3^3 = ?',
        jawab: {
            'A': '6',
            'B': '9',
            'C': '27',
            'D': '30',
        },
        benar: 'C',
    },
    {
        pertanyaan: '2^5 = ?',
        jawab: {
            'A': '32',
            'B': '16',
            'C': '8',
            'D': '4',
        },
        benar: 'A',
    },
    {
        pertanyaan: '4^2 = ?',
        jawab: {
            'A': '12',
            'B': '14',
            'C': '16',
            'D': '18',
        },
        benar: 'C',
    },
    {
        pertanyaan: '10^0 = ?',
        jawab: {
            'A': '0',
            'B': '1',
            'C': '10',
            'D': '100',
        },
        benar: 'B',
    },

    // Bangun Ruang
    {
        pertanyaan: 'Volume kubus dengan sisi 4 cm adalah?',
        jawab: {
            'A': '16 cm³',
            'B': '64 cm³',
            'C': '48 cm³',
            'D': '32 cm³',
        },
        benar: 'B',
    },
    {
        pertanyaan: 'Luas permukaan bola dengan jari-jari 7 cm adalah?',
        jawab: {
            'A': '154 cm²',
            'B': '308 cm²',
            'C': '616 cm²',
            'D': '44 cm²',
        },
        benar: 'B',
    },
    {
        pertanyaan: 'Berapa volume tabung dengan jari-jari 3 cm dan tinggi 5 cm?',
        jawab: {
            'A': '15π cm³',
            'B': '30π cm³',
            'C': '9π cm³',
            'D': '12π cm³',
        },
        benar: 'A',
    },
    {
        pertanyaan: 'Luas alas prisma segitiga dengan alas 6 cm dan tinggi 4 cm adalah?',
        jawab: {
            'A': '12 cm²',
            'B': '24 cm²',
            'C': '48 cm²',
            'D': '36 cm²',
        },
        benar: 'A',
    },
    {
        pertanyaan: 'Keliling lingkaran dengan jari-jari 10 cm adalah?',
        jawab: {
            'A': '20π cm',
            'B': '30π cm',
            'C': '40π cm',
            'D': '50π cm',
        },
        benar: 'A',
    },

    // Perkalian
    {
        pertanyaan: '6 x 8 = ?',
        jawab: {
            'A': '48',
            'B': '54',
            'C': '42',
            'D': '56',
        },
        benar: 'A',
    },
    {
        pertanyaan: '12 x 11 = ?',
        jawab: {
            'A': '120',
            'B': '132',
            'C': '144',
            'D': '156',
        },
        benar: 'B',
    },
    {
        pertanyaan: '7 x 9 = ?',
        jawab: {
            'A': '63',
            'B': '72',
            'C': '81',
            'D': '90',
        },
        benar: 'A',
    },
    {
        pertanyaan: '5 x 6 = ?',
        jawab: {
            'A': '30',
            'B': '32',
            'C': '28',
            'D': '36',
        },
        benar: 'A',
    },
    {
        pertanyaan: '4 x 5 = ?',
        jawab: {
            'A': '15',
            'B': '20',
            'C': '25',
            'D': '30',
        },
        benar: 'B',
    },

    // Pembagian
    {
        pertanyaan: '48 ÷ 6 = ?',
        jawab: {
            'A': '6',
            'B': '7',
            'C': '8',
            'D': '9',
        },
        benar: 'C',
    },
    {
        pertanyaan: '81 ÷ 9 = ?',
        jawab: {
            'A': '7',
            'B': '8',
            'C': '9',
            'D': '10',
        },
        benar: 'C',
    },
    {
        pertanyaan: '100 ÷ 25 = ?',
        jawab: {
            'A': '4',
            'B': '5',
            'C': '6',
            'D': '7',
        },
        benar: 'B',
    },
    {
        pertanyaan: '56 ÷ 8 = ?',
        jawab: {
            'A': '6',
            'B': '7',
            'C': '8',
            'D': '9',
        },
        benar: 'B',
    },
    {
        pertanyaan: '36 ÷ 6 = ?',
        jawab: {
            'A': '5',
            'B': '6',
            'C': '7',
            'D': '8',
        },
        benar: 'B',
    },
];


let index = 0;
let nilai = 0;
const isiNilai = document.getElementById('nilai');
let tombol = document.querySelectorAll('#jawaban button');
let mySoal = document.getElementById ('soal');
let waktu = 60 * 60;
let timerDisplay = document.getElementById('timer');
let salah = document.getElementById('salah');
let benar = document.getElementById('benar');
mySoal.innerText = soal[index].pertanyaan;


let tombolA = document.getElementById('jawabA');
let tombolB = document.getElementById('jawabB');
let tombolC = document.getElementById('jawabC');
let tombolD = document.getElementById('jawabD');
tombol.forEach(function(b) {
	b.disabled = true;
	timer.style.display = 'none';
});

//play
let start = document.getElementById('start');

start.addEventListener('click', function() {
	mySoal.style.display = 'block';
	timer.style.display = 'block';
	tombolA.innerText = soal[index].jawab.A;
	tombolB.innerText = soal[index].jawab.B;
	tombolC.innerText = soal[index].jawab.C;
	tombolD.innerText = soal[index].jawab.D;
	start.style.display = 'none';
	tombol.forEach(function(b) {
	b.disabled = false;
});
	});
//play end

tombol.forEach(function(p) {
	p.addEventListener('click', function() {
		if (p.value === soal[index].benar) {
			index++;
			nilai += 4;
			benar.style.display = 'block';
			if (index >= soal.length) {
				mySoal.innerText = 'Quiz selesai!';
				confirm(`selamat kamu sudah menyelesaikan Quest \n nilai kamu ${nilai}`)
				tombol.forEach(function(b) {
				    b.disabled = true;
					timer.style.display = 'none';
				});
			} else {
				mySoal.innerText = soal[index].pertanyaan;
				tombolA.innerText = soal[index].jawab.A;
				tombolB.innerText = soal[index].jawab.B;
				tombolC.innerText = soal[index].jawab.C;
				tombolD.innerText = soal[index].jawab.D;
				
			}
			

		} else {
			salah.style.display = 'block';
			nilai -= 4;
		}
		setTimeout(function() {
 			salah.style.display ='none';
				}, 1000)
		setTimeout(function() {
 			benar.style.display ='none';
				}, 1000)
	})
})


//timer
let interval = setInterval(function() {
	let menit = Math.floor(waktu / 60);
	let detik = waktu % 60;

	timerDisplay.innerText = `${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
	if (waktu <= 0) {
		clearInterval(interval);
		alert('Waktu habis!');
		document.getElementById('jawaban').style.display = 'none';
	}
	waktu--;
}, 1000); 
			//timer End



















