import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projetos"
      className="p-10 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="font-bold">Projeto 1</h3>
          <p>Descrição breve do projeto.</p>
          <a href="#" className="text-blue-500 hover:underline">Ver Projeto</a>
        </div>
      </div>
    </motion.section>
  );
}
