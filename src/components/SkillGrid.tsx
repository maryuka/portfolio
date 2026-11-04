import { img } from "@/lib/asset";
import { useState } from "react";
import styles from "./SkillGrid.module.css";

type Skill = { name: string; image: string; progress: number };

const SKILLS: Skill[] = [
  { name: "Photoshop", image: img("photoshop.png"), progress: 75 },
  { name: "Illustrator", image: img("illustrator.png"), progress: 65 },
  { name: "HTML5", image: img("html5.png"), progress: 90 },
  { name: "CSS", image: img("css.png"), progress: 85 },
  { name: "Canva", image: img("canva.png"), progress: 70 },
  { name: "Word", image: img("word.png"), progress: 80 },
  { name: "Figma", image: img("figma.png"), progress: 60 },
  { name: "Slack", image: img("slack.png"), progress: 50 },
  { name: "Excel", image: img("excel.png"), progress: 90 },
  { name: "PowerPoint", image: img("powerpoint.png"), progress: 85 },
];

const SIZE = 100;
const STROKE = 8;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ProgressCircle({ value }: { value: number }) {
  return (
    <svg className={styles.circle} width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={`${value}%`}>
      <circle className={styles.track} cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} strokeWidth={STROKE} />
      <circle
        className={styles.bar}
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        strokeWidth={STROKE}
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={CIRCUMFERENCE * (1 - value / 100)}
      />
    </svg>
  );
}

function SkillIcon({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={name}
      width={40}
      height={40}
      className={styles.icon}
      onError={() => setFailed(true)}
    />
  );
}

export default function SkillGrid() {
  return (
    <div className={styles.grid}>
      {SKILLS.map((skill) => (
        <div key={skill.name} className={styles.col}>
          <div className={styles.card}>
            <div className={styles.name}>{skill.name}</div>
            <hr className={styles.divider} />
            <div className={styles.progress}>
              <div className={styles.iconWrap}>
                <SkillIcon src={skill.image} name={skill.name} />
              </div>
              <ProgressCircle value={skill.progress} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
