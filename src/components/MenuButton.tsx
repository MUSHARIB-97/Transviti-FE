import { useState, useCallback, memo, useRef, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "../assets/images";
import { MenuButtonProps, MenuItemProps } from "../types/dataTypes";

const DESKTOP_BREAKPOINT = 768;

const MenuButton = memo(function MenuButton({ title, list, selected, setSelected, style }: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback((item: MenuItemProps) => {
    setSelected?.(item.title);
    setIsOpen(false);
  }, [setSelected]);

  const handleToggle = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const buttonClass = `h-8 w-full flex items-center justify-between outline-none bg-background-secondary px-1 py-5 rounded-md md:bg-transparent md:px-0 md:py-0 ${style}`;
  const arrowClass = `w-4 h-4 object-contain transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`;

  return (
    <div
      ref={containerRef}
      className="relative text-left w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={buttonClass}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-text-secondary px-2 text-base">{selected || title}</span>
        <img src={IMAGES.arrowdown} alt="" className={arrowClass} width={16} height={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0.9, y: -5 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.9, y: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute mt-2 w-full bg-white shadow-lg rounded-md z-10 overflow-hidden origin-top"
            role="listbox"
          >
            <li className="flex md:hidden px-4 py-2 text-sm text-text-card font-semibold">{title}</li>
            {list.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-text-secondary"
                onClick={() => handleSelect(item)}
                role="option"
                aria-selected={selected === item.title}
              >
                {item.title}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
});

export default MenuButton;
