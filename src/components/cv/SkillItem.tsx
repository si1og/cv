import { forwardRef } from "react";
import type { Skill } from "~/types";

type Props = Skill;

const base = `inline-flex items-center px-3 py-1.5 rounded-lg text-sm
  bg-[#ffffff0d] border border-[#2c2c2c] text-[#d5d5d5]
  transition-colors duration-200`;

export const SkillItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, Props>(
  ({ name, link, icon }, ref) => {
    const content = (
      <>
        {icon && (
          <span className="mr-1.5 text-base" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="font-medium">{name}</span>
        {link && (
          <svg
            className="ml-1 w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </>
    );

    if (link) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${base} hover:bg-[#ffffff1a] hover:text-[#ffffff] hover:border-[#444444]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5e98f0]`}
        >
          {content}
        </a>
      );
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={`${base} cursor-default`}
      >
        {content}
      </span>
    );
  },
);

SkillItem.displayName = "SkillItem";
