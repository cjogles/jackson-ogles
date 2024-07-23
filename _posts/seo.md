---
title: "Site Audit for StatsTest.com"
excerpt: "I've been asked to perform a site audit for a wordpress site that gets around 10k users per month. Especially in regards to SEO (search engine optimization). The company in question would like me to investigate page loading time, cache setup, fixing 404s, Google Search / organic search performace, metadata tagging to assist sharing site on social websites, google indexing performance and functionality, sitemap and much much more. This blog post will explore some of these topics!"
coverImage: "/assets/blog-assets/seo/seo.jpg"
date: "2024-07-10T05:35:07.322Z"
author:
  name: "Jackson Ogles"
  picture: "/me.jpeg"
ogImage:
  url: "/assets/blog-assets/seo/seo.jpg"
---

Performing an SEO audit for a WordPress site involves a comprehensive review of various elements that impact search engine rankings. Here’s some general reporting for what I’ve found so far, and what we can do further in the future. I 

## Site Speed, Accessibility, Performance, SEO:

https://pagespeed.web.dev/analysis/https-www-statstest-com/a3gdw3nu0x?form_factor=mobile

Some possible improvements in regards to this section include: 

- Add a meta description. You have a social meta description, but wouldn’t hurt to add both. For example, add the following:
`<meta property="description" content="same as og:description content here…">`
- Fix un-crawable links such as: <a aria-expanded="false" class="menu-link">, there is no href
- Consider updating background color contrast ratio for buttons and text. Accessibility flags it as not good enough. Not super crucial to already good accessibility score though.
- Properly size images to save on cellular/load times. Upload images directly through the media library to ensure that the required image sizes are available, and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using Full Size images unless the dimensions are adequate for their usage
- Reduce JS execution time, reduce main thread work, limit redundant third party code, try to load third party code after page loads. 
- Largest contentful pain element has a very long render delay. Try to remove render blocking code to load after page loads and renders to help this element load faster. There are a number of WordPress plugins that can help you inline critical assets or defer less important resources. Beware that optimizations provided by these plugins may break features of your theme or plugins, so you will likely need to make code changes. Learn how to eliminate render-blocking resources.
- Consider using the Performance Lab plugin to automatically convert your uploaded JPEG images into WebP, wherever supported, as this next gen image format means faster downloads and less data consumption.
- Consider reducing, or switching, the number of WordPress plugins loading unused CSS in your page. To identify plugins that are adding extraneous CSS, try running code coverage in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page. You can also identify the theme/plugin responsible from the URL of any scripts. Look out for plugins that have many scripts in the list which have a lot of red in code coverage. A plugin should only enqueue a script if it is actually used on the page.
- The recaptcha script seems like a likely duplicate long thread work taking resource for some reason. It’s worthy of investigation and improvement, if at all possible.
- Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. Learn more about font-display.

## Broken Link Checker

- Use search console or a broken link checker or crawler to assess broken links, then target them and fix them from there.

## Googles Mobile Friendly Test

- I will need to go into search console to try this out. Can also analyze bounce rate, time on site, 404’s, pages per session, and other metrics on google search console.

## On-Page SEO

- Title Tags and Meta Descriptions: Check for unique and optimized title tags and meta descriptions for each page.
- Headings (H1, H2, etc.): Ensure proper use of heading tags to structure content.
- Content Quality: Review content for relevance, keyword usage, and readability. Use tools like Grammarly and Hemingway for content improvement.
- Keyword Optimization: Analyze keyword placement in titles, headers, and body text.
- Image Optimization: Ensure images have alt text, are compressed for faster loading, and use descriptive filenames.
- Internal Linking: Check for a good structure of internal links to distribute link equity and help with navigation.

## User Experience (UX) Audit

- Navigation: Ensure your site is easy to navigate with a clear structure.
- Design and Layout: Make sure your site is visually appealing and easy to use.
- Engagement Metrics: Use Google Analytics to analyze bounce rate, time on site, and pages per session.

## Content Audit

- Content Inventory: Create a list of all your content and assess its performance.
- Update and Improve: Refresh outdated content, improve poorly performing pages, and remove duplicate content.
- Content Gap Analysis: Identify missing topics or keywords you should target.

## Backlink Profile:

- Check with free tool with Ahrefs:
- See https://help.ahrefs.com/en/articles/1409408-what-is-domain-rating-dr to assess what backlink domain rate is and how it's calculated.




