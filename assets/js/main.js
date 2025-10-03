// Basic interactivity: sidebar active link highlight
document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(
    document.querySelectorAll(".sidebar a[data-target]")
  );
  const sections = links
    .map((a) => document.getElementById(a.dataset.target))
    .filter(Boolean);

  const byId = new Map(links.map((a) => [a.dataset.target, a]));

  const setActive = (id) => {
    links.forEach((l) => l.classList.toggle("active", l.dataset.target === id));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the most visible section near top
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) {
        const id = visible[0].target.id;
        if (byId.has(id)) setActive(id);
      }
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: [0.2, 0.6, 1] }
  );

  sections.forEach((sec) => observer.observe(sec));
});
