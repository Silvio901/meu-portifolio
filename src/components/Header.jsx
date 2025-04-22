import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="p-6 bg-blue-600 text-white text-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold">Olá, eu sou o Sílvio</h1>
      <p className="text-xl mt-2">Desenvolvedor Front-end</p>
      <nav className="mt-4 flex justify-center gap-6">
        <a href="#sobre" className="hover:underline">Sobre</a>
        <a href="#projetos" className="hover:underline">Projetos</a>
        <a href="#contato" className="hover:underline">Contato</a>
      </nav>
    </motion.header>
  );
}
