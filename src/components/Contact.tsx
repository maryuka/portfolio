import { ja } from "@/lib/messages";
import Section from "./parts/Section";
import Title from "./parts/Title";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section id="Contact" className={styles.sheet}>
      <Title title={ja.Contact.title} />
      <div className={styles.form}>
        <p>
          私にご用の方は、Xの<a href="http://x.com/maryuka_y">@maryuka_y</a>のDMまでご連絡ください。
        </p>
      </div>
    </Section>
  );
}
