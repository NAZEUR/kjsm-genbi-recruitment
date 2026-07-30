# PROJECT BRIEF
## Website Open Recruitment Staff — KJSM GenBI Sumsel

---

## 1. Ringkasan Proyek

| | |
|---|---|
| **Nama Proyek** | Website Open Recruitment KJSM GenBI Sumsel |
| **Jenis** | Landing page / single-page application (SPA), frontend-only |
| **Tema Visual** | Penerbangan (aviation) — playful & ilustratif, bukan korporat kaku |
| **Gaya Desain** | Clean, Fun, Colorful, Bento Grid, Glassmorphism |
| **Tools Pengembangan** | Antigravity (AI-assisted IDE) |
| **Backend** | Tidak ada — pendaftaran diarahkan (redirect) ke Google Form eksternal |
| **Output** | Website statis (HTML/CSS/JS hasil build), siap deploy ke static hosting |

---

## 2. Latar Belakang

**KJSM (Kemitraan dan Kerjasama)** adalah salah satu divisi wilayah **GenBI Sumsel** yang berperan dalam pengelolaan multimedia digital dan koordinasi hubungan antar organisasi, serta melaksanakan tugas pokok dan fungsi di seluruh tahapan kegiatan GenBI Sumsel. KJSM berfungsi sebagai penghubung komunikasi antara pihak internal dan eksternal untuk memastikan kelancaran informasi, pendokumentasian kegiatan secara sistematis, serta mengimplementasikan strategi media aktif guna meningkatkan visibilitas dan membangun citra positif organisasi di masyarakat.

**Tugas Pokok Divisi KJSM:**
1. **Kemitraan & Kerjasama** — Melakukan dan merencanakan hubungan kerjasama dengan pihak eksternal.
2. **Media Sosial & Publikasi** — Meng-handle sosial media GenBI dan membantu publikasi informasi GenBI.
3. **Desain, Editing & Dokumentasi** — Mengedit, mendesain, dan mengarsipkan seluruh kebutuhan publikasi dan program kerja (proker) GenBI.

Website open recruitment ini dibutuhkan untuk merekrut staff baru KJSM. Website ini menjadi **etalase pertama** calon pendaftar terhadap KJSM — sehingga harus mampu:
- Memperkenalkan identitas & tugas pokok KJSM secara menarik dan mudah dicerna.
- Menjelaskan apa itu KJSM dan lingkup kerjanya (3 tugas pokok di atas).
- Menampilkan dokumentasi & program kerja KJSM tahun sebelumnya sebagai bukti sosial (social proof).
- Mengarahkan pengunjung untuk mendaftar melalui CTA yang jelas dan tidak terlewat ("Bisa Desain, Bisa Memotret, Bisa Edit Video").

Tema **penerbangan** dipilih sebagai metafora perjalanan/keberangkatan — merepresentasikan calon anggota yang akan "take off" bersama KJSM. Tim KJSM bahkan sudah memiliki aset desain **"Recruitment Pass"** bergaya boarding pass pesawat (kode penerbangan **KJSM 26**, tujuan **PMBRTK**, kru berseragam pilot & pramugari) yang menjadi acuan visual utama untuk hero section.

---

## 3. Tujuan Website

1. Menyampaikan informasi rekrutmen secara menarik, ringkas, dan mudah dipahami.
2. Meningkatkan jumlah pendaftar melalui pengalaman visual yang engaging dan CTA yang persuasif.
3. Membangun kredibilitas KJSM melalui showcase dokumentasi kegiatan tahun lalu.
4. Memberikan pengalaman interaktif (scroll animation, micro-interaction) yang meninggalkan kesan positif terhadap brand KJSM.

---

## 4. Target Audiens

- Mahasiswa aktif (kemungkinan besar penerima manfaat/beasiswa GenBI atau mahasiswa umum di Sumatera Selatan) yang tertarik pada jurnalistik, media sosial, konten kreatif, dan kepenulisan.
- Usia 18–23 tahun, familiar dengan media sosial dan visual yang playful/modern.
- Mengakses website mayoritas dari **mobile** (perlu prioritas mobile-first & performa cepat).

---

## 5. Tech Stack Rekomendasi (Terbaik untuk Kebutuhan Ini)

Karena scope-nya frontend-only, statis, animasi berat (GSAP), dan dibangun di Antigravity, stack berikut dipilih untuk keseimbangan **DX (developer experience), performa, dan kemudahan animasi**:

| Kategori | Pilihan | Alasan |
|---|---|---|
| **Framework** | **React 18 + Vite** | Build cepat, HMR instan, ideal untuk AI-assisted coding di Antigravity, ekosistem luas |
| **Bahasa** | **TypeScript** | Type-safety, meminimalisir bug saat AI-generate kode |
| **Styling** | **Tailwind CSS v4** | Utility-first, cepat untuk membangun bento grid & glassmorphism, mudah konsisten |
| **Animasi utama** | **GSAP (GreenSock) + ScrollTrigger + SplitText (opsional)** | Standar industri untuk animasi scroll & timeline yang smooth, ringan, kontrol presisi (pesawat terbang, awan parallax, dsb.) |
| **Smooth scroll** | **Lenis (studio-freight/lenis)** | Smooth-scroll modern yang kompatibel sempurna dengan GSAP ScrollTrigger |
| **Icon** | **Lucide React** | Icon set clean & ringan, gampang dikustom warnanya |
| **Font** | **Google Fonts**: display font playful (mis. *Baloo 2* / *Fredoka*) untuk heading + font clean (mis. *Plus Jakarta Sans* / *Inter*) untuk body | Kombinasi fun + readable |
| **Ilustrasi/Aset** | SVG custom (pesawat, awan, badge, kompas) — dibuat/di-export dari Figma atau AI image gen, dioptimasi dengan **SVGO** | Ringan & scalable, cocok untuk gaya ilustratif |
| **Galeri Dokumentasi** | **Swiper.js** atau **CSS Grid native** dibungkus komponen React (untuk bento-style gallery) | Fleksibel untuk grid asimetris |
| **Optimasi gambar** | **vite-imagetools** / format **WebP/AVIF** | Performa loading, penting karena banyak asset visual |
| **Deployment** | **Vercel** atau **Netlify** (static hosting, gratis, auto-deploy dari Git) | Tidak butuh backend, deploy sangat cepat |
| **Linting/Format** | ESLint + Prettier | Konsistensi kode |
| **Version Control** | Git + GitHub | Standar |

> **Catatan:** Semua bagian interaktif (CTA daftar) hanya melakukan `window.open()` / `<a href>` menuju link Google Form — tidak ada pemrosesan form di sisi website ini.

---

## 6. Konsep Desain

### 6.1 Mood & Gaya Visual
- **Clean** → whitespace cukup, grid rapi, tidak ramai berlebihan meski banyak warna.
- **Fun** → ilustrasi playful (pesawat kertas/pesawat kartun, awan, burung, kompas, tiket boarding pass), tipografi bulat & ramah.
- **Colorful** → palet warna cerah (bisa mengikuti warna brand GenBI/BI: biru, kuning/emas, ditambah aksen warna langit — biru muda, oranye sunset, putih awan).
- **Bento Grid** → section "Tentang KJSM", "Apa itu KJSM", dan "Dokumentasi" disusun dalam grid kotak-kotak asimetris bergaya bento box (populer di desain modern 2024–2026), tiap kotak punya ukuran & konten berbeda (stat, foto, quote, icon).
- **Glassmorphism** → kartu/panel dengan efek kaca buram (`backdrop-filter: blur()`, border tipis semi-transparan, sedikit shadow) diletakkan di atas background bertema langit/gradient agar efek kaca terlihat jelas.

### 6.2 Palet Warna (mengikuti brand asli KJSM/GenBI Sumsel — terlihat dari aset "Recruitment Pass" & "Tugas Pokok Divisi")
- Navy Blue `#1B3A63` — primer (header, panel utama, teks penting)
- Sky Blue `#2E7FD6` — sekunder (aksen panel, gradient background)
- Golden Yellow `#FBC531` — aksen/CTA utama (highlight judul, tombol, badge)
- Cloud White `#FFFFFF` / Off-white `#F4F8FC` — background & glass card base
- Soft Coral Pink `#F9847E` — aksen dekoratif kecil (pin lokasi, detail ilustrasi — diambil dari elemen pin peta pada aset "Recruitment Pass")

> Gradient langit (biru tua → biru muda) dipakai sebagai background utama section, agar efek **glassmorphism** kartu semakin terlihat kontras & elegan, sekaligus tetap selaras dengan warna resmi Bank Indonesia/GenBI (biru & emas).

### 6.3 Motif Ilustrasi Penerbangan
- Pesawat kertas / pesawat kartun sebagai elemen scroll-following (bergerak mengikuti scroll, seolah "terbang" melewati section).
- Awan sebagai layer parallax di background.
- Garis lintasan pesawat (dashed flight path) menghubungkan antar section sebagai penanda alur cerita/scroll.
- Boarding pass / tiket sebagai bentuk card CTA pendaftaran ("Boarding Pass Kamu Menuju KJSM!").
- Kompas, jam bandara, badge "Ready for Takeoff" sebagai micro-detail dekoratif.

---

## 7. Struktur & Konten Halaman (Single Page, Scroll-based)

### A. Hero Section — "Recruitment Pass"
Mengadaptasi langsung aset boarding-pass yang sudah didesain tim KJSM, dibuat interaktif & ber-animasi:
- Layout menyerupai **tiket boarding pass** — dibagi dua panel: kiri (info recruitment), kanan (info penerbangan/flight detail), dipisah garis putus-putus (seperti sobekan tiket asli).
- Header pita biru navy: logo KJSM ("Divisi Kemitraan dan Kerjasama") di kiri, badge **"RECRUITMENT PASS"** di kanan.
- Judul besar: **"OPEN RECRUITMENT"** + judul utama **"KEMITRAAN & KERJASAMA"** (bisa dibuat dinamis sesuai tahun).
- 3 kotak skill highlight sebagai badge kecil: **"Bisa Desain"**, **"Bisa Memotret"**, **"Bisa Edit Video"** — muncul dengan animasi stagger fade-in.
- Copy ajakan: *"Attention Future KJSM Crew — Penerbangan menuju Divisi KJSM GenBI Sumsel siap diberangkatkan..."*
- Foto tim (kru berseragam pilot & pramugari) sebagai center visual, dengan pin lokasi (map marker) beranimasi bounce/pulse di atasnya, serta background peta dunia samar (world map watermark) yang bisa parallax pelan.
- Panel kanan bergaya info penerbangan: **Boarding Time: Coming Soon** (bisa dibuat live-countdown jika ada tanggal pasti), **Flight: KJSM 26**, **Seat: CREW**, rute **"From: KJSM → To: PMBRTK"** dengan ikon pesawat kecil yang animasinya bergerak dari kiri ke kanan (looping) di antara dua kode tersebut.
- Barcode dekoratif di kiri & kanan bawah sebagai detail otentik tiket (elemen statis/SVG).
- Tombol CTA utama "Daftar Sekarang" (scroll ke section pendaftaran atau langsung ke Google Form) — bisa diletakkan sebagai overlay/floating button di atas tiket, atau di section CTA khusus.
- Animasi entrance keseluruhan tiket: slide-in + fade dari bawah, disusul micro-animation berkelanjutan (pin bounce, pesawat looping, awan/peta parallax).

### B. Tentang KJSM (Perkenalan)
- Sapaan singkat + deskripsi resmi: *"KJSM (Kemitraan dan Kerjasama) adalah divisi wilayah GenBI Sumsel yang berperan dalam pengelolaan multimedia digital dan koordinasi hubungan antar organisasi..."* (deskripsi lengkap lihat poin 2).
- Disajikan dalam bento grid: 1 kartu besar (deskripsi utama tentang KJSM) + beberapa kartu kecil pendukung (mis. logo Bank Indonesia/GenBI Sumsel/Dedikasi untuk Negeri sebagai badge afiliasi, statistik jumlah anggota/tahun aktif jika tersedia).
- Efek glass card di atas background gradient langit navy → biru muda.

### C. Apa itu KJSM / Tugas Pokok Divisi (Penjelasan Detail)
Mengadaptasi struktur infografis **"Tugas Pokok Divisi"** yang sudah ada, ditampilkan sebagai **3 bento card sejajar**, masing-masing dengan ikon line-art khas (handshake, gear+megaphone, foto+pensil):

| Card | Icon | Judul | Deskripsi |
|---|---|---|---|
| 1 | Handshake dalam lingkaran tangan | **Kemitraan & Kerjasama** | Melakukan dan merencanakan hubungan kerjasama dengan pihak eksternal |
| 2 | Gear + play/mail/megaphone | **Media Sosial & Publikasi** | Menghandle sosial media GenBI dan membantu dalam hal publikasi informasi GenBI |
| 3 | Foto + pensil | **Desain, Editing & Dokumentasi** | Mengedit, mendesain, dan mengarsipkan seluruh kebutuhan publikasi dan proker GenBI |

- Setiap card menggunakan glass card putih di atas background gradient biru, dengan judul bergaya pill/badge kuning keemasan (seperti pada aset asli) untuk heading section ("Tugas Pokok Divisi").
- Animasi reveal per-kartu saat scroll (stagger via GSAP ScrollTrigger), ikon bisa animasi draw-in (SVG stroke animation) saat kartu muncul.

### D. Dokumentasi Kegiatan Tahun Lalu
- Galeri foto/video kegiatan KJSM tahun sebelumnya
- Bento grid asimetris (beberapa foto besar, beberapa kecil) dengan efek hover zoom & glass overlay caption
- Opsional: highlight quote/testimoni dari anggota lama
- Animasi masuk berbasis scroll (fade + slide + scale)

### E. CTA Pendaftaran
- Section paling mencolok — bertema "boarding pass"
- Informasi singkat: timeline pendaftaran, syarat singkat (jika ada), benefit jadi staff
- Tombol besar "Daftar Sekarang" / "Boarding Sekarang" yang **redirect ke link Google Form** (`target="_blank"`)
- Animasi tombol: pulse/glow, ikon pesawat "take off" saat tombol di-hover atau di-klik

### F. Footer
- Kontak/sosial media KJSM & GenBI Sumsel
- Copyright
- Elemen dekoratif landasan/runway sebagai penutup visual

---

## 8. Animasi & Interaksi (GSAP)

| Elemen | Jenis Animasi |
|---|---|
| Hero | Entrance animation (fade + translate), floating loop pesawat, parallax awan |
| Scroll antar-section | `ScrollTrigger` untuk reveal (fade/slide/scale) tiap bento card, staggered |
| Pesawat pemandu | Path animation mengikuti garis lintasan yang membentang dari hero hingga CTA (menggunakan `MotionPathPlugin` bila tersedia, atau simulasi transform berbasis scroll progress) |
| Hover interaksi | Micro-interaction pada tombol & card (scale, glow, tilt ringan) |
| Galeri dokumentasi | Stagger reveal + hover zoom pada tiap item |
| CTA akhir | Animasi penekanan (pulse/glow) agar CTA benar-benar menonjol, transisi "take-off" (scale-up + fade) saat diklik sebelum redirect |
| Smooth scroll global | Menggunakan Lenis agar semua animasi scroll terasa halus di seluruh device |

> Prinsip: animasi harus **purposeful**, bukan sekadar hiasan — tiap animasi mendukung storytelling "perjalanan menuju KJSM" dan tetap ringan agar tidak mengganggu performa di mobile.

---

## 9. Functional Requirements

- [ ] Website dapat diakses & berfungsi penuh tanpa backend/database.
- [ ] Semua CTA pendaftaran mengarah ke satu link Google Form (dikonfigurasi di satu tempat/constant agar mudah diganti).
- [ ] Navigasi scroll antar section (bisa via navbar sticky dengan anchor link + smooth scroll).
- [ ] Galeri dokumentasi menampilkan foto/video (format gambar dioptimasi, video bisa berupa embed atau file ringan).
- [ ] Semua animasi GSAP berjalan lancar tanpa jank di perangkat mobile menengah ke bawah.

## 10. Non-Functional Requirements

- **Responsive**: mobile-first, tampil optimal di ukuran layar 360px–1920px.
- **Performa**: skor Lighthouse Performance minimal 85+ (mobile), lazy-load gambar/video, kompres aset.
- **Aksesibilitas dasar**: kontras warna cukup meski tema colorful, alt text pada gambar, opsi `prefers-reduced-motion` untuk menonaktifkan/mengurangi animasi bagi pengguna yang membutuhkan.
- **SEO dasar**: meta title/description, Open Graph tags untuk share di media sosial (penting karena akan dibagikan di IG/WA).
- **Cross-browser**: mendukung Chrome, Safari, Firefox, Edge versi terbaru.

---

## 11. Struktur Folder Proyek (usulan untuk Antigravity)

```
kjsm-genbi-recruitment/
├── public/
│   └── assets/
│       ├── illustrations/      # SVG pesawat, awan, badge, dsb.
│       └── documentation/      # foto & video kegiatan tahun lalu
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── AboutKjsm.tsx
│   │   ├── WhatIsKjsm.tsx
│   │   ├── Documentation.tsx
│   │   ├── CtaSection.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                 # BentoCard, GlassCard, Button, dsb.
│   ├── animations/              # setup GSAP, ScrollTrigger, Lenis
│   ├── constants/
│   │   └── config.ts            # GOOGLE_FORM_URL, data konten
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── package.json
└── project-brief.md
```

---

## 12. Aset & Informasi yang Perlu Disiapkan oleh Tim KJSM

Agar pengembangan di Antigravity dapat langsung berjalan, mohon siapkan:

1. **Link Google Form** pendaftaran (final).
2. **Logo** KJSM & GenBI Sumsel (format vektor/PNG transparan).
3. **Copywriting**: tagline, deskripsi "Tentang KJSM", deskripsi tiap divisi, syarat & benefit pendaftaran.
4. **Foto/video dokumentasi** kegiatan tahun lalu (resolusi baik, sudah dikurasi).
5. **Timeline rekrutmen** (tanggal buka–tutup pendaftaran, tahapan seleksi) jika ingin ditampilkan.
6. **Palet warna resmi** brand (jika ada guideline dari GenBI/BI) — jika tidak ada, gunakan usulan palet di poin 6.2.
7. **Akun media sosial** untuk footer.

---

## 13. Deliverables

1. Source code lengkap (React + Vite + TS + Tailwind + GSAP) — siap dijalankan di Antigravity.
2. Website hasil build siap deploy (static output).
3. Dokumentasi singkat cara menjalankan project (`README.md`) & cara mengganti link Google Form/konten.

---

## 14. Catatan Tambahan

- Semua teks konten pada brief ini bersifat **placeholder/struktur** — konten final menyesuaikan input dari tim KJSM (lihat poin 12).
- Nama warna & kombinasi di poin 6.2 dapat disesuaikan bila KJSM/GenBI punya brand guideline resmi.
- Prioritaskan performa animasi tetap smooth walau tema "colorful & ramai" — gunakan `will-change`, batasi jumlah elemen animasi berjalan bersamaan, dan uji di perangkat low-end.