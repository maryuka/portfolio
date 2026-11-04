import { siCss, siFigma, siGo, siHtml5, siReact, siRubyonrails, siTypescript, type SimpleIcon } from "simple-icons";
import styles from "./SkillGrid.module.css";

// icon: Simple Icons のアイコン。ないもの (Adobe や Microsoft 製品など) は mark の文字で表示する
type Skill = { name: string; icon?: SimpleIcon; mark?: string };

const SKILLS: Skill[] = [
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Ruby on Rails", icon: siRubyonrails },
  { name: "Go", icon: siGo },
  { name: "HTML5", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "Figma", icon: siFigma },
  { name: "Photoshop", mark: "Ps" },
  { name: "Illustrator", mark: "Ai" },
  { name: "Slack", mark: "Sl" },
  { name: "PowerPoint", mark: "P" },
];

export default function SkillGrid() {
  return (
    <ul className={styles.grid}>
      {SKILLS.map((skill) => (
        <li key={skill.name} className={styles.card}>
          <span className={styles.icon} aria-hidden="true">
            {skill.icon ? (
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path d={skill.icon.path} fill="currentColor" />
              </svg>
            ) : (
              <span className={styles.mark}>{skill.mark}</span>
            )}
          </span>
          <span className={styles.name}>{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}
