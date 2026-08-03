(function renderProjects() {
  const container = document.getElementById("projects");
  if (!container || typeof PROJECTS === "undefined") return;

  container.innerHTML = PROJECTS.map((p) => {
    if (p.status === "soon") {
      return `
        <article class="project project--soon">
          <div class="project__body">
            <p class="project__tag">${p.tag}</p>
            <h3>${p.name}</h3>
            <p>${p.description}</p>
          </div>
        </article>
      `;
    }

    return `
      <article class="project">
        <div class="project__media">
          <img src="${p.image}" alt="${p.name} screenshot" loading="lazy">
        </div>
        <div class="project__body">
          <p class="project__tag">${p.tag}</p>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <ul class="project__features">
            ${p.features.map((f) => `<li>${f}</li>`).join("")}
          </ul>
        </div>
      </article>
    `;
  }).join("");
})();

document.getElementById("year").textContent = new Date().getFullYear();
