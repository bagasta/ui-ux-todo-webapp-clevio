// ==========================================
// 1. VARIABEL (& SELEKSI ELEMEN)
// ==========================================
// Kita membuat "kotak penyimpanan" untuk elemen-elemen dari HTML
// supaya bisa kita atur lewat kode ini.

const inputBox = document.querySelector('.todo-input');  // Kotak ketik
const addBtn = document.querySelector('.add-btn');       // Tombol tambah (+)
const todoList = document.querySelector('.todo-list');   // Daftar list (ul)
const clearBtn = document.querySelector('.clear-btn');   // Tombol hapus selesai

// ==========================================
// 2. FUNCTION (LOGIKA PROGRAM)
// ==========================================
// Function adalah kumpulan perintah yang bisa dijalankan berulang kali.

// Fungsi untuk menambah tugas baru
function addTask() {
    // Ambil teks yang diketik pengguna
    const taskText = inputBox.value;

    // Cek apakah tidak kosong?
    if (taskText === '') {
        alert("Silakan tulis tugas dulu!"); // Tampilkan pesan pop-up
        return; // Berhenti di sini, jangan lanjut
    }

    // Membuat elemen list baru (HTML) menggunakan JavaScript
    // Kita gunakan `backticks` (tombol sebelah angka 1) untuk template HTML
    const li = document.createElement('li');
    li.className = 'todo-item'; // Tambahkan class untuk styling CSS

    li.innerHTML = `
        <label class="checkbox-container">
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
        <span class="task-text">${taskText}</span>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
    `;

    // Masukkan list baru ini ke dalam <ul> di HTML
    todoList.appendChild(li);

    // Kosongkan kotak input setelah menambah
    inputBox.value = '';

    // Tambahkan event untuk tombol hapus di item baru ini
    // (Kita bahas ini di bagian Event di bawah)
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        li.remove(); // Hapus elemen <li> ini
        updateTaskCount(); // Update hitungan
    });

    // Tambahkan event untuk checkbox (coret teks)
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        li.classList.toggle('completed'); // Pasang/lepas class 'completed'
        updateTaskCount();
    });

    updateTaskCount(); // Update jumlah tugas
}

// Fungsi untuk menghitung sisa tugas (Opsional: Bonus fitur)
function updateTaskCount() {
    const totalTasks = document.querySelectorAll('.todo-item:not(.completed)').length;
    const footerText = document.querySelector('.app-footer span');
    footerText.innerText = `${totalTasks} tugas tersisa`;
}

// Fungsi untuk menghapus yang sudah selesai
function clearCompleted() {
    const completedItems = document.querySelectorAll('.todo-item.completed');
    completedItems.forEach(function (item) {
        item.remove();
    });
    updateTaskCount();
}

// ==========================================
// 3. EVENT (INTERAKSI)
// ==========================================
// "Kalau tombol ini DI-KLIK, jalankan fungsi itu"

// Event 1: Klik tombol hijau untuk tambah
addBtn.addEventListener('click', addTask);

// Event 2: Tekan tombol ENTER di keyboard untuk tambah
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Event 3: Tombol "Hapus Selesai" di bawah
clearBtn.addEventListener('click', clearCompleted);

// ==========================================
// INISIALISASI AWAL
// ==========================================
// Agar tombol delete di data dummy (bawaan HTML) bisa jalan juga:

const existingDeleteBtns = document.querySelectorAll('.delete-btn');
existingDeleteBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Cari elemen orang tua terdekat (yaitu <li>) dan hapus
        this.closest('.todo-item').remove();
        updateTaskCount();
    });
});

const existingCheckboxes = document.querySelectorAll('.checkbox-container input');
existingCheckboxes.forEach(function (box) {
    box.addEventListener('change', function () {
        this.closest('.todo-item').classList.toggle('completed');
        updateTaskCount();
    });
});
