# Premium To-Do List — Panduan Belajar HTML & CSS

Proyek kecil ini membantu pemula memahami cara membangun tampilan aplikasi to-do list hanya dengan HTML dan CSS. Tidak ada JavaScript: fokus pada struktur markup dan styling modern (glassmorphism, custom checkbox, tipografi, dan responsif).

- **Teknologi:** HTML, CSS, Google Fonts, Font Awesome (ikon).
- **Hasil akhir:** Kartu to-do list dengan header, input tugas, daftar item, checkbox custom, tombol hapus, dan footer.

## Cara Menjalankan
- Pastikan punya browser modern (Chrome/Firefox/Edge/Safari) dan editor teks (VS Code/Notepad++/Sublime).
- Buka `index.html` langsung di browser (double-click atau klik kanan > Open With Browser). Tidak perlu server atau instalasi.
- Semua styling ada di `style.css` yang sudah terhubung dari HTML.

## Struktur Proyek
- `index.html` — struktur halaman (container, header, input, daftar tugas, footer).
- `style.css` — styling lengkap (warna, layout flex, efek kartu, checkbox custom, responsif).

## Langkah Belajar: Bangun Dari Nol
Ikuti urutan ini untuk memahami tiap bagian. Salin ke file baru atau bandingkan dengan kode yang sudah ada.

1) **Siapkan folder & file**  
   - Buat folder proyek, tambahkan `index.html` dan `style.css`. Hubungkan CSS dari HTML:  
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2) **Rangka dasar HTML**  
   ```html
   <!DOCTYPE html>
   <html lang="id">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Premium To-Do List</title>
     <link rel="stylesheet" href="style.css">
   </head>
   <body></body>
   </html>
   ```

3) **Container utama**  
   - Tambahkan elemen pembungkus untuk menengahkan konten:  
   ```html
   <div class="container">
     <div class="todo-app">
       <!-- isi berikutnya di sini -->
     </div>
   </div>
   ```

4) **Header (judul + tanggal)**  
   ```html
   <header class="app-header">
     <h1>Tugas Saya</h1>
     <p class="date">Selasa, 2 Desember 2025</p>
   </header>
   ```

5) **Input tugas**  
   ```html
   <div class="input-group">
     <input type="text" placeholder="Apa rencana Anda hari ini?" class="todo-input">
     <button class="add-btn"><i class="fas fa-plus"></i></button>
   </div>
   ```
   - Ikon `fa-plus` berasal dari Font Awesome (sudah di-include di contoh lengkap).

6) **Daftar tugas**  
   ```html
   <ul class="todo-list">
     <li class="todo-item">
       <label class="checkbox-container">
         <input type="checkbox">
         <span class="checkmark"></span>
       </label>
       <span class="task-text">Contoh tugas</span>
       <button class="delete-btn"><i class="fas fa-trash"></i></button>
     </li>
   </ul>
   ```
   - Tambahkan beberapa `<li>` untuk melihat variasi (status selesai: tambahkan class `completed` atau `checked` pada input).

7) **Footer**  
   ```html
   <div class="app-footer">
     <span>3 tugas tersisa</span>
     <button class="clear-btn">Hapus Selesai</button>
   </div>
   ```

8) **Reset dasar & variabel CSS**  
   - Di `style.css`, mulai dengan reset dan variabel warna supaya konsisten:  
   ```css
   :root {
     --primary-color: #6C63FF;
     --primary-hover: #5a52d5;
     --bg-gradient-1: #1a1a2e;
     --bg-gradient-2: #16213e;
     --card-bg: rgba(255, 255, 255, 0.95);
     --text-main: #2d3436;
     --text-secondary: #636e72;
     --danger-color: #ff7675;
     --shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
     --radius: 16px;
   }

   * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Outfit', sans-serif; }
   ```

9) **Latar belakang & layout body**  
   ```css
   body {
     background: linear-gradient(135deg, var(--bg-gradient-1), var(--bg-gradient-2));
     min-height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 20px;
     color: var(--text-main);
   }

   .container { width: 100%; max-width: 480px; }
   ```

10) **Kartu to-do (glassmorphism)**  
    ```css
    .todo-app {
      background: var(--card-bg);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 30px;
      backdrop-filter: blur(10px);
      transition: transform 0.3s ease;
    }
    .todo-app:hover { transform: translateY(-5px); }
    ```

11) **Header, input, dan tombol tambah**  
    ```css
    .app-header h1 { font-size: 28px; font-weight: 700; color: var(--primary-color); margin-bottom: 5px; }
    .app-header .date { color: var(--text-secondary); font-size: 14px; }

    .input-group { display: flex; gap: 10px; margin-bottom: 25px; }
    .todo-input {
      flex: 1; padding: 12px 16px; border: 2px solid #eee; border-radius: 12px; font-size: 16px; outline: none;
      transition: border-color 0.3s ease;
    }
    .todo-input:focus { border-color: var(--primary-color); }
    .add-btn {
      background: var(--primary-color); color: white; border: none; width: 50px; height: 50px;
      border-radius: 12px; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center;
      transition: background-color 0.3s ease, transform 0.2s;
    }
    .add-btn:hover { background: var(--primary-hover); transform: scale(1.05); }
    ```

12) **Daftar tugas & item**  
    ```css
    .todo-list { list-style: none; max-height: 400px; overflow-y: auto; padding-right: 5px; }
    .todo-item {
      display: flex; align-items: center; background: #fff; padding: 12px 15px; margin-bottom: 10px;
      border-radius: 12px; border: 1px solid #f0f0f0; transition: all 0.3s ease;
    }
    .todo-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-color: #e0e0e0; }

    .task-text { flex-grow: 1; margin-left: 10px; font-size: 16px; color: var(--text-main); transition: color 0.3s; }
    .todo-item.completed .task-text,
    .todo-item:has(input:checked) .task-text { text-decoration: line-through; color: #b2bec3; }

    .delete-btn { background: none; border: none; color: #dfe6e9; cursor: pointer; font-size: 16px; padding: 5px; transition: color 0.3s; }
    .todo-item:hover .delete-btn { color: var(--danger-color); }
    ```

13) **Checkbox custom**  
    ```css
    .checkbox-container { display: inline-block; position: relative; padding-left: 30px; cursor: pointer; }
    .checkbox-container input { position: absolute; opacity: 0; cursor: pointer; }
    .checkmark {
      position: absolute; top: -10px; left: 0; height: 22px; width: 22px;
      background: #eee; border-radius: 6px; transition: background-color 0.2s;
    }
    .checkbox-container:hover input ~ .checkmark { background: #ccc; }
    .checkbox-container input:checked ~ .checkmark { background: var(--primary-color); }
    .checkmark:after {
      content: ""; position: absolute; display: none; left: 8px; top: 4px; width: 5px; height: 10px;
      border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg);
    }
    .checkbox-container input:checked ~ .checkmark:after { display: block; }
    ```

14) **Footer & responsif**  
    ```css
    .app-footer { margin-top: 20px; display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: var(--text-secondary); border-top: 1px solid #f0f0f0; padding-top: 15px; }
    .clear-btn { background: none; border: none; color: var(--text-secondary); cursor: pointer; font-weight: 500; transition: color 0.3s; }
    .clear-btn:hover { color: var(--primary-color); }

    @media (max-width: 480px) {
      .container { padding: 0; }
      .todo-app { border-radius: 0; min-height: 100vh; display: flex; flex-direction: column; }
      .todo-list { flex-grow: 1; }
      .app-header h1 { font-size: 24px; }
    }
    ```

15) **Uji & eksplorasi**  
    - Buka `index.html` dan ubah teks/warna untuk melihat efek langsung.
    - Coba ganti `--primary-color` dan `--bg-gradient-*` agar tampilan berbeda.
    - Tambah/kurangi item di `<ul>` untuk melihat scrollbar dan state selesai.

## Ide Pengembangan Lanjut
- Tambahkan JavaScript sederhana untuk menambah/hapus tugas secara dinamis.
- Simpan data di `localStorage` agar tugas tidak hilang saat reload.
- Tambahkan filter (Semua / Selesai / Belum) dan pencarian.
- Buat versi tema terang/gelap dengan toggle yang mengubah variabel CSS.

