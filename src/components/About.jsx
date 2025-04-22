import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="sobre"
      className="p-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
      <p className="max-w-xl mx-auto">
        Sou desenvolvedor apaixonado por criar experiências digitais com HTML, CSS, JavaScript, React, Vue e Tailwind.
      </p>
    </motion.section>
  );
}
