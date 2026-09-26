"use client";

import { Check, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

import { SORT_OPTIONS } from "@/constants/plan.constants";
import { useClickOutside } from "@/hooks/useClickOutside";
import type { SortOption } from "@/types/workout.types";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedIndex = SORT_OPTIONS.findIndex((option) => option.value === value);
  const selectedLabel = SORT_OPTIONS[selectedIndex]?.label ?? SORT_OPTIONS[0].label;

  const close = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  const closeOnOutsideClick = useCallback(() => close(), [close]);

  useClickOutside(containerRef, closeOnOutsideClick, isOpen);

  useEffect(() => {
    if (isOpen) listRef.current?.focus();
  }, [isOpen]);

  const open = (index = selectedIndex) => {
    setActiveIndex(Math.max(index, 0));
    setIsOpen(true);
  };

  const select = (option: SortOption) => {
    onChange(option);
    close(true);
  };

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      open();
    }
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const lastIndex = SORT_OPTIONS.length - 1;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => (index >= lastIndex ? 0 : index + 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => (index <= 0 ? lastIndex : index - 1));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(lastIndex);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        select(SORT_OPTIONS[activeIndex].value);
        break;
      case "Escape":
        event.preventDefault();
        close(true);
        break;
      case "Tab":
        close();
        break;
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span id={`${id}-label`} className="text-xs text-muted">
        Sort By
      </span>

      <div ref={containerRef} className="relative">
        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={`${id}-listbox`}
          aria-labelledby={`${id}-label ${id}-button`}
          id={`${id}-button`}
          onClick={() => (isOpen ? close() : open())}
          onKeyDown={handleButtonKeyDown}
          className={`inline-flex h-9 min-w-[104px] items-center justify-between gap-2 rounded-lg border bg-surface pl-3 pr-2.5 text-[13px] text-white outline-none transition-colors hover:border-line-strong focus-visible:border-accent ${
            isOpen ? "border-line-strong" : "border-line"
          }`}
        >
          {selectedLabel}
          <ChevronDown
            className={`size-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <ul
            ref={listRef}
            id={`${id}-listbox`}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={`${id}-label`}
            aria-activedescendant={`${id}-option-${activeIndex}`}
            onKeyDown={handleListKeyDown}
            className="absolute left-0 z-20 mt-2 min-w-[168px] origin-top-left sm:left-auto sm:right-0 sm:origin-top-right animate-dropdown rounded-xl border border-line bg-surface p-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] outline-none"
          >
            {SORT_OPTIONS.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;

              return (
                <li
                  key={option.value}
                  id={`${id}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => select(option.value)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                    isActive ? "bg-surface-2" : ""
                  } ${isSelected ? "font-semibold text-accent" : "text-white/85"}`}
                >
                  {option.label}
                  {isSelected && <Check className="size-3.5" aria-hidden="true" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
