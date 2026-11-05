# Music Education Bites

The pages of www.musiceducationbites.lu, rebuilt in [Astro](https://astro.build) from the Wix site.

```bash
npm install
npm run dev
```

- `src/pages/` – one file per page
- `src/layouts/Base.astro` – title image, buttons and logo
- `src/data/topic.js` – the current topic; change it here each month
- `src/styles/site.css` – layout, fonts and colours
- `public/` – images and the intro video
- `_source/` – original Wix data, not published

The recorder (mebrecord.mutechlab.education) and the wordcloud (mebcloud.mutechlab.education) are separate sites.
This site only links to them. The recorder must open in its own tab: inside a frame the browser blocks the microphone.
