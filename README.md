# Polly — Catatan Belajar Bahasa

Catatan pelajaran bahasa Prancis dan Inggris, satu pelajaran setiap hari.
Situs ini: https://sxpistols.github.io/pollywantsacracker/

## Isi

- **Français** — setiap hari 07.30 WIB
- **English** — setiap hari 08.10 WIB

Setiap pelajaran punya halamannya sendiri: daftar bisa dicari lewat kolom
pencarian, dan pelajaran baru muncul sebagai kartu/baris baru.

## Cara menambah pelajaran baru

1. Tambah satu file Markdown di folder `lessons/`, contoh nama:
   `en-04-to-be.md` atau `fr-02-greetings.md`.
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
3. Tulis isi pelajaran di bawah frontmatter, format Markdown biasa
   (heading `##`, daftar, tabel, kutipan `>`).
4. Build: `npm run build` — hasilnya di `dist/`.
5. Push isi `dist/` ke branch `main` repo ini (GitHub Pages mengambil dari
   `main`, root). Pelajaran baru langsung tampil.

## Teknologi

- Svelte 5 + Vite (static build, hash routing — tidak butuh server)
- Font: Newsreader (judul) + Inter (isi), via Google Fonts
- Desain: editorial minimalis — kertas hangat, tinta gelap, satu aksen
  muted per bahasa (biru untuk Prancis, terakota untuk Inggris)
