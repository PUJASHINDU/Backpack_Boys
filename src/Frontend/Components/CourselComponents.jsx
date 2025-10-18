import React from "react";
import { motion } from "framer-motion";
import modelone from "../assets/Modeltre.png"; // gambar tas kamu

const CourselComponents = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background dengan Gambar */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${modelone})`,
        }}
      ></div>

      {/* Overlay gradasi agar teks tetap jelas */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-customBlue/70 to-black/70"></div>

      {/* Ornamen Blur Elegan */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-400/20 rounded-full blur-[120px]"></div>

      {/* Konten Teks */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white space-y-10">
        {/* Judul */}
        <motion.h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-snug drop-shadow-xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Perjalanan{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-400 bg-clip-text text-transparent font-extrabold">
            Stylish & Elegan
          </span>
          <br />
          Bersama Backpaks Boy
        </motion.h1>


        {/* Deskripsi */}
        <motion.p
          className="text-lg sm:text-xl font-light text-white/90 max-w-2xl mx-auto font-poppins drop-shadow-md"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Bukan sekadar backpack. Setiap detail kami rancang untuk gaya hidup modern —
          menyatu dengan keseharian, menonjol dalam petualangan.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 bg-white/20 backdrop-blur-md border border-white/30
                       text-white text-lg font-semibold font-poppins rounded-full
                       shadow-lg hover:bg-white/30 transition-all duration-300"
          >
            Mulai Belanja Sekarang
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CourselComponents;
