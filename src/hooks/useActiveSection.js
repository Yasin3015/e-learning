import { useEffect, useState } from "react";
export default function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? null);

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return;
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
      ...options,
    };
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setActiveId(id);
        }
      }, observerOptions);
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeId;
}
