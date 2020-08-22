# spark-landing

Landing page for fictional company Spark

[See the site here](https://nostalgic-lewin-bc81d3.netlify.app/)

### Features

- [x] Lightweight / minimal JS
- [x] minify css, html and images on build
- [x] (did not have time for inline JS) Inline everything for better perfomance
- [x] Animated SVG's
- [x] Animations with GSAP
- [x] Eleventy for SSG
- [x] Semantic HTML for accesibility
- [x] Disable animations for sensitive users
- [x] Responsive for all screen sizes

![Lighthouse scores](/lighthouse.png)
SEO score is lower because Netlify sites without a domain will block site crawlers.

### My thoughts and decisions

#### Tech

I use no SPA frameworks like React or Vue since they make no sense for such a simple site with no state and only a single page. Would only make site slower for the user

I use Eleventy for static site generation since it comes with some nice features like splitting content with Nunjucks and easy editing of pages with markdown files.

Sass for styling because sass is always great. All styling is injected into the html so there is one less request for the user to load.

I use Gulp for task runner since it is simple to setup minifications and webpack would be overkill since there will be minial amount of javascript on client end.

I use GSAP for animations for improved browser support, perfomance and ease of development.

#### Design

Ended up aligning the main bike image along the normal content instead of letting it flow to the end of the screen. In very large screen sizes it does not look so nice sitting all the way at the right side since it will be further away from rest of the content, so I think is better to let it align with rest of the content.

I replaced the doodle svg's with simpler versions that used stroke instead of fill so that i could animate the stroke on pageLoad. Could be optimised so they look more similar to the originals but would take more work.

Some text that was supposed to be regular weight is light instead since i only had light and bold fonts.

Mobile view looks somewhat weird because I had some issues with text visibility since the main image has both light and dark elements

All of the main-content fades in on load, including SVG's which has animated strokes. Might be a bit too busy. I have tried to make it more smooth with staggering animations.

### Build

Run `npm install`

Run `npm start` to run dev build with watch
Run `npm run production` for production build
