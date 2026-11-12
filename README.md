# Polly — Catatan Belajar

Catatan pelajaran harian: cybersecurity, bahasa Prancis, bahasa Inggris,
dan AI Engineer. Situs ini: https://sxpistols.github.io/pollywantsacracker/

## Isi

- **Cybersecurity** — Senin–Jumat 07.00 WIB
- **Français** — setiap hari 05.00 WIB
- **English** — setiap hari 06.00 WIB
- **AI Engineer** — Senin–Jumat 10.30 WIB

Setiap pelajaran punya halamannya sendiri: daftar bisa dicari lewat kolom
pencarian, dan pelajaran baru muncul sebagai kartu/baris baru.

## Cara menambah pelajaran baru

1. Tambah satu file Markdown di folder `lessons/`, contoh nama:
   `en-04-to-be.md` atau `cyber-08-keamanan-hp.md`.
2. Isi frontmatter di atas file:
   ```yaml
   ---
   lang: en
   number: 4
   date: 2026-11-11
   title: Kata Ganti & To Be
   subtitle: I am, you are, he/she/it is
   keywords: kata ganti to be pronoun am are is
   ---
   ```
   Nilai `lang` yang tersedia: `cyber`, `fr`, `en`, `ai`.
3. Tulis isi pelajaran di bawah frontmatter, format Markdown biasa
   (heading `##`, daftar, tabel, kutipan `>`, kode ```python).
4. Kalau ini topik berikutnya, perbarui juga `next` di
   `src/lib/lessons.js` ke topik sesudahnya.
5. Build: `npm run build` — hasilnya di `dist/`.
6. Push isi `dist/` ke branch `main` repo ini (GitHub Pages mengambil dari
   `main`, root). Pelajaran baru langsung tampil.

## Teknologi

- Svelte 5 + Vite (static build, hash routing — tidak butuh server)
- Font: Newsreader (judul) + Inter (isi), via Google Fonts
- Desain: editorial minimalis — kertas hangat, tinta gelap, satu aksen
  muted per jalur (cybersecurity hijau, Prancis biru, Inggris terakota,
  AI Engineer kuning gelap)
