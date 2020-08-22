# spark-landing

Landing page for fictional company Spark

### Features

- [ ] Lightweight / minimal JS
- [ ] minify css, html and images
- [ ] Inline everything for better perfomance
- [ ] Animated SVG's
- [ ] Page transitions with Barba.js
- [ ] Animations with GSAP
- [ ] Eleventy for SSG
- [ ] Perfect lighthouse scores
- [ ] Semantic HTML for accesibility
- [ ] Disable animations for sensitive users

### Decisions

I use no SPA frameworks like React or Vue since they make no sense for such a simple site with no state and only a single page.

I use Eleventy for static site generation since it comes with some nice features like splitting content with Nunjucks and easy editing of pages with markdown files.

Sass for styling because sass is always great

I use Gulp for task runner since it is simple to setup minifications and webpack would be overkill since there will be minial javascript on client end.

I use GSAP for animations for improved browser support, perfomance and ease of development.

Ended up aligning the main bike image along the normal content instead of letting it flow to the end of the screen. In larger screen sizes it does not look so nice sitting all the way at the right side since it will be further away from rest of the content

### Ideas

Logo onLoad animation with a bike that reveals the logo with lightning particle effects coming out of the exhaust

Big picture or maybe just red svg's 3D transforms to follow mouse around on page. Needs to be subtle

Drawing red SVG's in on load
