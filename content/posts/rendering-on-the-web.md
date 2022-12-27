---
title: 'Rendering On The Web: CSR, SSR, SSG'
date: '2022-12-28'
image: 'rendering-on-the-web.png'
excerpt: 'There are different ways of how the web page can be rendered on the browser. App performance can be improved by selecting the right rendering method. This means, different rendering methods might be more suitable for different purposes. In order to have the best user experience, understanding the main differences between these rendering methods is crucial as a developer.'
isFeatured: true
---

# Rendering On The Web: CSR, SSR, SSG

There are different ways of how the web page can be rendered on the browser. App performance can be improved by selecting the right rendering method. This means, different rendering methods might be more suitable for different purposes. In order to have the best user experience, understanding the main differences between these rendering methods is crucial as a developer.

![Rendering On The Web](rendering-on-the-web.png)

## Client-Side Rendering (CSR)

With client-side rendering, web pages are generated on the browser. So, the **content of the page is prepared on the client**.

When a user visits the web page and makes a request to the server, server provides a fairly empty HTML with JavaScript links included. You can experiment this in your own React app. When you inspect the page which is rendered on the client-side, you will see that it is pretty empty first and it only has the basic HTML skeleton with an entry point, a div with id root typically, into which the app is loaded afterwards.

Then, the browser downloads JavaScript code and executes it. Executed code will be used for rendering the page that the client requested initially.

In this case, React does all that rendering on the client. Page is generated relying on the JavaScript code, which is processed before the content is visible.

**Until all the JavaScript code is fetched** and the browser compiled everything before rendering, **the content will not be ready**. This works well, with a reliable internet connection.

But, when could this be an issue?

Suppose that you are rendering a list with a lot of items. Since fetching the data only begins once the JavaScript code is executed on the client, user might see a loading or flickering page for a while. If you add seconds to the load time of these list items, it would be a poor user experience.

Or consider a public facing app with a lot of content that should be found through search engines. Some JavaScript content might be missed from the search engine crawlers with client-side rendering.

However, you should **use client-side rendering when you need to update data frequently or when you don’t want to pre-render the page**.

### CSR - Performance

Initial load time is increased and **client-side rendered pages can be slow to load**. Because, all of the JavaScript code should be fetched as mentioned above. Often, these JavaScript downloads are heavy.

### CSR - SEO

There is a **risk of partial indexing with client-side rendering**. _Indexing_ is the process of storing web pages in the search engine’s database. _Partial indexing_ is when some of your web pages have not been listed fully on the search engine.

## Server-Side Rendering (SSR)

With server-side rendering, the **content of the page is prepared on the server instead of the client**. So, the JavaScript code is rendered on the server.

When a user visits the web page and makes a request to the server, the server renders HTML with the updated content and the page is fully pieced on the server. Then, this fully rendered HTML page is sent back to the client.

![Server-Side Rendering](server-side-rendering.png)

_Server-Side Rendering: Diagram from [nextjs.org](https://nextjs.org/learn/basics/data-fetching/two-forms)_

Now, think about the cases mentioned above where client-side rendering could be problematic and realize how server-side rendering would be a better solution for these specific cases.

**Server-side rendering solves issues about initial load and it is great for search engine optimization**. SEO determines how high your site ranks in the search engine results and how accessible your content is. _Crawling_ in terms of SEO is the discovery process of pages and links that lead to more pages. Crawled content is eligible to appear in _Google’s index_, which is a large database that stores information on each website that has been scanned. Since JavaScript code is rendered on the server, it is beneficial for both search engine crawlers and for the users who will get a faster page experience, which will enhance the user experience.

Search engine crawlers won’t have to wait until requested resources become available before being able to view the whole page, but they will get a full rendered page from the very beginning instead. As a result, you can always be sure that you get the latest and the most recent content from the server.

But also realize that, the server has to do the work all over again at every request and that requires higher computing power. It can be resource intensive and expensive. When your users have less internet bandwidth, it could impact them more.

### SSR - Performance

It greatly improves performance and the user experience. Initial page load takes less time.

### SSR - SEO

Server-side rendering is more favorable for search engine optimization because rendering is done on the server. When we are talking about SEO, page loading speed is a factor. For Google, _Largest Contentful Paint (LCP)_ is an important metric, which measures the time the web page takes to display the largest ready and interactable content to the user. With SSR, _Largest Contentful Paint_ metric will be optimized, because the content will be already prepared on the server. It can make a significant difference to your web page’s ranking in the search engine results.

### SSR - Cost

There is an extra cost coming with the server-side rendering, because extra rendering is done on the server. That means **extra computing resources**.

## Static Site Generation (SSG)

With static site generation, the **data is pre-fetched once during build time**. It is important in terms of performance. Frameworks like Next.js provide _template engines_, which enables you to use template files in your app to build multiple static pages with one template. Therefore, it saves time.

![Static Site Generation](static-generation.png)

_Static Generation: Diagram from [nextjs.org](https://nextjs.org/learn/basics/data-fetching/two-forms)_

The key point here is that, the page will be rendered and generated during the build time, which is the main difference from CSR and SSR. Since the page is rendered during the build time and the hard work is done beforehand, we can refer static site generation as a **pre-rendering method**.

As it can be understood from the name itself, you might **consider it for the static web pages** where the content never changes or updated once in a while. A _static web page_ is rendered on the browser exactly as stored. So, the content does not change based on authentication or authorization.

As a result, this rendering method also should be preferred for some cases. Because it won’t work for a use case such as when you have dynamic pages. A dynamic page will display different content according to the results of the request coming from the user, due to it coming from an API, while retaining the same layout and design. However, **with SSG, you have to pre-generate every accessible URL for all possibilities**.

### SSG - Performance

Since rendering is not done on the browser and the content is generated at build time, it is relatively fast.

### SSG - SEO

Web pages can be crawled and indexed by search engines easily. Because static site generation will pre-render the content.

## Conclusion

You can stick to **client-side rendering** for the pages that have dynamic data and complex UI, when you expect high number of users. However, client-side rendering is often not enough. Especially for when you depend on SEO.

You can use **server-side rendering** to target SEO ranking and improve the user experience and performance. Initial load is faster and it is favorable for search engine optimization. But remember, HTML will be generated on each request, which requires high processing power on the server.

Consider **static site generation** to generate HTML at build time. Pre-rendered HTML is then reused on each request. It fits well when you have a lot of static content.

You should take the performance, cost and search engine optimization into account when choosing a rendering method for your web pages.

---

## _Read This Article On Medium_

_[Rendering On The Web: CSR, SSR, SSG - Medium post by me](https://medium.com/@ilkyaz.arabaci/rendering-on-the-web-csr-ssr-ssg-6ecfac6e0cd4)_

_Cheers,_

_ilkyaz_
