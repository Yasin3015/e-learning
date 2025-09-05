import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";

export function useNavbar(sections, activeId) {
  const listRef = useRef(null);
  const itemRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    transform: "translateX(0px)",
    width: 0,
  });
  const [scrolled, setScrolled] = useState(false);

  const idSet = useMemo(() => new Set(sections.map((s) => s.id)), [sections]);

  const measure = () => {
    if (!activeId || !idSet.has(activeId)) return;
    const el = itemRefs.current[activeId];
    const list = listRef.current;
    if (!el || !list) return;
    const listRect = list.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const left = elRect.left - listRect.left;
    const width = elRect.width;
    setIndicatorStyle({
      transform: `translateX(${left}px)`,
      width,
    });
  };

  useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId, sections]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { listRef, itemRefs, indicatorStyle, scrolled };
}
