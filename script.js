document.addEventListener('DOMContentLoaded', () => {
    // --- PENGATURAN ---
    const ROWS = 4; // Ubah jadi 3 untuk puzzle 3x3, 4 untuk 4x4, dst.
    const COLS = 4;
    const IMAGE_SRC = 'https://nadhif10524076.my.id/wp-content/uploads/2025/07/Gambar-WhatsApp-2025-07-19-pukul-13.08.05_1a49b34f-scaled.jpg'; // Ganti dengan nama file gambarmu

    // Ganti dengan jawaban yang benar (wajib huruf kecil semua)
    const CORRECT_ANSWER_1 = 'biru'; 
    const CORRECT_ANSWER_2 = 'taman kota';

    // --- VARIABEL GLOBAL ---
    const piecesContainer = document.getElementById('pieces-container');
    const boardContainer = document.getElementById('board-container');
    
    const pieceWidth = piecesContainer.clientWidth / COLS;
    const pieceHeight = piecesContainer.clientHeight / ROWS;
    
    let correctPieces = 0;
    
    // --- FUNGSI UTAMA ---

    function initializePuzzle() {
        // Atur grid di papan
        boardContainer.style.gridTemplateColumns = repeat(${COLS}, 1fr);
        boardContainer.style.gridTemplateRows = repeat(${ROWS}, 1fr);
        
        // Buat kepingan dan slot papan
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                // Buat kepingan puzzle
                const piece = document.createElement('div');
                piece.classList.add('puzzle-piece');
                piece.style.width = ${pieceWidth}px;
                piece.style.height = ${pieceHeight}px;
                piece.style.backgroundImage = url('${IMAGE_SRC}');
                piece.style.backgroundSize = ${COLS * 100}% ${ROWS * 100}%;
                piece.style.backgroundPosition = -${j * pieceWidth}px -${i * pieceHeight}px;
                
                // Simpan posisi yang benar
                piece.dataset.correctRow = i;
                piece.dataset.correctCol = j;
                
                // Acak posisi awal kepingan
                piece.style.left = ${Math.random() * (piecesContainer.clientWidth - pieceWidth)}px;
                piece.style.top = ${Math.random() * (piecesContainer.clientHeight - pieceHeight)}px;
                
                // Tambahkan event drag
                piece.draggable = true;
                piece.addEventListener('dragstart', handleDragStart);
                piecesContainer.appendChild(piece);

                // Buat slot di papan
                const slot = document.createElement('div');
                slot.classList.add('board-slot');
                slot.dataset.row = i;
                slot.dataset.col = j;
                slot.addEventListener('dragover', handleDragOver);
                slot.addEventListener('drop', handleDrop);
                boardContainer.appendChild(slot);
            }
        }
    }

    // --- FUNGSI EVENT HANDLER ---

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', JSON.stringify({
            correctRow: e.target.dataset.correctRow,
            correctCol: e.target.dataset.correctCol,
        }));
        // Sedikit delay agar class 'dragging' sempat ditambahkan
        setTimeout(() => {
            e.target.classList.add('dragging');
        }, 0);
    }
    
    function handleDragOver(e) {
        e.preventDefault(); // Wajib agar event 'drop' bisa berjalan
    }
    
    function handleDrop(e) {
        e.preventDefault();
        const droppedData = JSON.parse(e.dataTransfer.getData('text/plain'));
        const draggedPiece = document.querySelector(.puzzle-piece[data-correct-row='${droppedData.correctRow}'][data-correct-col='${droppedData.correctCol}']);
        
        const targetSlot = e.target;
        
        // Cek jika kepingan diletakkan di slot yang benar
        if (targetSlot.dataset.row === droppedData.correctRow && targetSlot.dataset.col === droppedData.correctCol) {
            // Pindahkan kepingan ke slot dan non-aktifkan drag
            targetSlot.appendChild(draggedPiece);
            draggedPiece.style.position = 'static';
            draggedPiece.draggable = false;
            draggedPiece.classList.remove('dragging');
            
            correctPieces++;
            // Cek jika puzzle sudah selesai
            if (correctPieces === ROWS * COLS) {
                setTimeout(() => showQuestionModal(), 500);
            }
        } else {
             draggedPiece.classList.remove('dragging');
        }
    }
    
    function showQuestionModal() {
        document.getElementById('question-modal').style.display = 'flex';
    }

    // --- LOGIKA PERTANYAAN DAN QR CODE ---
    const questionForm = document.getElementById('question-form');
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const answer1 = document.getElementById('q1').value.trim().toLowerCase();
        const answer2 = document.getElementById('q2').value.trim().toLowerCase();
        
        if (answer1 === CORRECT_ANSWER_1 && answer2 === CORRECT_ANSWER_2) {
            document.getElementById('question-modal').style.display = 'none';
            document.getElementById('qr-modal').style.display = 'flex';
        } else {
            alert('Jawaban salah, coba lagi!');
        }
    });
    
    document.getElementById('close-qr-btn').addEventListener('click', () => {
         document.getElementById('qr-modal').style.display = 'none';
    });


    // --- MULAI PERMAINAN ---
    initializePuzzle();
});
