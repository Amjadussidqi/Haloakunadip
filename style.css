body {
    font-family: sans-serif;
    background-color: #f0f8ff;
    color: #333;
    text-align: center;
    margin: 0;
    padding: 20px;
}

#game-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    margin-top: 20px;
}

#pieces-container {
    width: 400px;
    height: 400px;
    position: relative;
    border: 2px dashed #999;
    background-color: #e0e0e0;
}

#board-container {
    width: 400px;
    height: 400px;
    border: 2px solid #555;
    display: grid;
    /* Grid akan diatur oleh JavaScript */
}

/* Style untuk kepingan puzzle */
.puzzle-piece {
    width: 100px; /* Akan diatur oleh JS */
    height: 100px; /* Akan diatur oleh JS */
    background-image: url('puzzle-image.jpg');
    background-size: 400px 400px; /* Sama dengan ukuran board */
    position: absolute;
    border: 1px solid #fff;
    cursor: grab;
    transition: transform 0.2s;
}

.puzzle-piece.dragging {
    cursor: grabbing;
    opacity: 0.7;
    transform: scale(1.1);
    z-index: 1000;
}

/* Style untuk slot di papan */
.board-slot {
    border: 1px dotted #ccc;
    background-color: rgba(255, 255, 255, 0.5);
}

/* Style untuk Jendela Modal (Pertanyaan & QR) */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.modal-content h2 {
    margin-top: 0;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.modal-content input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.modal-content button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
