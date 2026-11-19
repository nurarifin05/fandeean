# Fandeean Solusi Digital

Website company profile Fandeean Solusi Digital, bergaya teknologi premium dengan inspirasi umum dari referensi nurvx.com. Desain, konten, dan identitas merek orisinal. Website responsif berbasis **React + Vite** dengan layanan IT Security, Managed Security, ERP, ERP Solution, Warehouse Management, POS, dan GPS Tracking.

## Fitur
- Tema navy & electric blue, responsif untuk desktop/tablet/mobile.
- Halaman beranda, layanan, solusi bisnis, tentang, sertifikasi tim, proses kerja, FAQ, dan kontak.
- Form konsultasi terintegrasi **Netlify Forms** (tanpa backend terpisah).
- Pengaturan Netlify di `netlify.toml`.
- Tidak menggunakan klaim angka pelanggan atau sertifikasi perusahaan yang belum diverifikasi.

## Jalankan secara lokal

Prasyarat: Node.js versi 20+.

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan di terminal.

## Uji build

```bash
npm run build
npm run preview
```

Folder output production: `dist/`.

## Deploy melalui GitHub → Netlify

1. Buat repository baru di GitHub, misalnya `fandeean-solusi-digital`.
2. Unggah semua **isi folder proyek** ini (bukan zip, bukan folder `node_modules`).
3. Pada Netlify, pilih **Add new project → Import an existing project → GitHub**.
4. Pilih repository proyek.
5. Konfigurasi build otomatis dibaca dari `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Klik **Deploy**. Setiap push baru ke branch yang terhubung akan memicu deployment ulang.
7. Buka **Netlify → Forms** untuk memeriksa pesan yang dikirim setelah deployment.

**Catatan form:** formulir Netlify hanya benar-benar memproses submission pada situs yang di-deploy ke Netlify, bukan saat menggunakan `npm run dev`. Pada deployment pertama, kirim pesan uji dan cek dashboard Netlify Forms. Notifikasi email untuk submission dapat diatur di dashboard Netlify.

## Menyesuaikan konten
- Konten dan daftar layanan: `src/App.jsx` (`securityServices`, `businessServices`, `certificates`, `faqs`).
- Warna dan styling: `src/styles.css`.
- Judul, SEO dasar, dan metadata: `index.html`.
- Logo: komponen `Logo` pada `src/App.jsx`; favicon di `public/favicon.svg`.
- Halaman terima kasih: `public/success.html`.

## Sebelum tayang publik
- Verifikasi semua pernyataan layanan dan sertifikasi tim.
- Ganti logo sementara dengan identitas merek final bila tersedia.
- Tambahkan kebijakan privasi dan rincian perusahaan/kontak yang benar bila diperlukan.
- Bila ingin domain khusus, atur custom domain dan DNS dari pengaturan Netlify.
- Form submission menyimpan data kontak; pastikan pengelolaannya sesuai kebijakan privasi bisnis Anda.
