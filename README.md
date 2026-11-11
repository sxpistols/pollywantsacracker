# Polly — Catatan Belajar (source)

Source code situs https://sxpistols.github.io/pollywantsacracker/
(repo: sxpistols/pollywantsacracker, branch `main` berisi hasil build).

4 jalur belajar: cybersecurity (Senin–Jumat 07.00), Prancis (setiap hari
07.30), Inggris (setiap hari 08.10), AI Engineer (Senin–Jumat 10.30).

## Perintah

```bash
npm install     # sekali saja
npm run dev     # pengembangan lokal
npm run build   # hasil di dist/
```

## Menambah pelajaran baru

1. Tambah satu file `.md` di `lessons/` (lihat `public/README.md` untuk format).
2. `npm run build`
3. Push isi `dist/` ke `main` (lihat catatan sync di samping folder ini).

## Desain

Editorial minimalis (skill: design-taste-frontend, anti-slop): kertas
hangat `#faf7f2`, tinta `#1e1c19`, aksen muted per jalur — cybersecurity
`#3a5a44`, Prancis `#2e4e6b`, Inggris `#a85b38`, AI Engineer `#8a6d2b`.
Font Newsreader + Inter. Tanpa gradien, tanpa animasi scroll, tanpa
dekorasi.
