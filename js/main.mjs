import { blogPosts } from "./blogs.mjs";

// 2️⃣ Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.querySelector(".grid");

  blogPosts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.id = post.id;

    article.innerHTML = `
      <img
        class="card__image"
        src="${post.image}"
        alt="${post.alt}"
      />
      <div class="card-info">
        <p class="card__date">${post.date}</p>
        <h2 class="card__title">${post.title}</h2>
      </div>
      <p class="card__extract">${post.excerpt}</p>
      </article>
    `;

    blogList.appendChild(article);
  });
});
