import type { SkillBlockData, SkillColor } from "~/types";
import { SkillItem } from "./SkillItem";

type Props = SkillBlockData;

const accentColor: Record<SkillColor, string> = {
  blue: "#3b82f6",
  emerald: "#10b981",
  purple: "#b47ff8",
  amber: "#f59e0b",
  slate: "#94a3b8",
};

export const SkillBlock = ({ title, skills, color = "slate" }: Props) => {
  return (
    <section className="bg-[#1b1b1b] border border-[#2c2c2c] rounded-2xl p-5">
      <h3 className="text-base font-semibold text-[#d5d5d5] mb-3 flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: accentColor[color] }}
          aria-hidden="true"
        />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <SkillItem key={`${skill.name}-${idx}`} {...skill} />
        ))}
      </div>
    </section>
  );
};
