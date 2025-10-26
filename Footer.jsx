import 'boxicons/css/boxicons.min.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full px-4 md:px-12 py-6 border-t border-[#babaff] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-20"
    >

      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img className="h-10" src="\Images\Image.jpg.png" alt="Pubg-text" />
        <img className="h-14 hidden md:inline" src="\Images\pubg_PNG40-removebg-preview.png" alt="Pubg-logo" />
      </div>

      {/* Center: Social Icons */}
      <div className="flex items-center gap-6 text-2xl md:text-3xl">
        <a href="https://m.facebook.com/rahul.singh.391310/" className="hover:text-violet-500 duration-300"><i className="bx bxl-facebook-circle"></i></a>
        <a href="https://www.youtube.com/@rohitbhandari6687" className="hover:text-violet-500 duration-300"><i className="bx bxl-youtube"></i></a>
        <a href="https://github.com/bhandarirohit4" className="hover:text-violet-500 duration-300"><i className="bx bxl-github"></i></a>
        <a href="https://www.instagram.com/_bhandarirohit_4/" className="hover:text-violet-500 duration-300"><i className="bx bxl-instagram"></i></a>
      </div>

      {/* Right: Copyright */}
      <p className="text-sm md:text-base text-center md:text-right">©️2025,Made By Rohit Singh</p>

    </motion.footer>
  );
};

export default Footer;
