import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const indexResponse = await fetch('/../sitemap.json');
  if (!indexResponse.ok) {
    console.error('Failed to fetch sitemap.json:', indexResponse.statusText);
    return;
  }

  const index = await indexResponse.json();

  const container = document.createElement('ul');

  index.data
    .forEach((post) => {

      const eager = false;
      const title = '';
      const li = document.createElement('li');
      const picture = createOptimizedPicture(post.image, post.title || title, eager, [{ width: '750' }]);
      const pictureTag = picture.outerHTML;

      li.innerHTML = `
      <a href="${post.path}">
        ${pictureTag}
        <h4>${post.title}</h4>
      </a>
    `;
      container.append(li);
    });

  block.append(container);
}