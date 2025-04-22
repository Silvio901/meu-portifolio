import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contato"
      className="p-10 text-center bg-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Contato</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Nome" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea placeholder="Mensagem" className="p-2 border rounded" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Enviar</button>
      </form>
    </motion.section>
  );
}
