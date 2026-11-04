import { ja } from "@/lib/messages";
import Section from "./parts/Section";
import Title from "./parts/Title";
import FadeIn from "./parts/FadeIn";
import SkillGrid from "./SkillGrid";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <Section id="Skills" boxClassName={styles.box}>
      <FadeIn>
        <Title title={ja.Skills.title} />
        <SkillGrid />
      </FadeIn>
    </Section>
  );
}
