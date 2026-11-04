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
          私にご用の方は、Xの<a href="https://x.com/y_flos09">@y_flos09</a>のDMまでご連絡ください。
        </p>
      </div>
    </Section>
  );
}
