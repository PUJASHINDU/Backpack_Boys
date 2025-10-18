import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Andi Pratama",
    comment:
      "Backpacknya keren banget, bahan kuat dan desain modern. Cocok dipakai ke kampus maupun jalan-jalan!",
    rating: 5,
  },
  {
    name: "Sinta Dewi",
    comment:
      "Muatan cukup besar, jahitan rapi. Warna sesuai dengan foto. Recommended seller!",
    rating: 4,
  },
  {
    name: "Budi Santoso",
    comment:
      "Harga terjangkau untuk kualitas sebagus ini. Dipakai kerja juga oke banget.",
    rating: 5,
  },
  {
    name: "Lestari Ayu",
    comment:
      "Nyaman dipakai, talinya empuk, cocok untuk travelling jauh. Mantap 👍",
    rating: 5,
  },
];

// Variants untuk animasi grid
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ReviewCard = ({ name, comment, rating }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    className="rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-xl transition-all p-6"
  >
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={
            i < rating
              ? "text-yellow-400 fill-yellow-400 drop-shadow-sm"
              : "text-gray-300"
          }
        />
      ))}
    </div>
    <p className="text-gray-700 text-lg italic font-poppins mb-4 leading-relaxed">
      “{comment}”
    </p>
    <p className="font-bold font-poppins text-customBlue text-sm tracking-wide">
      – {name}
    </p>
  </motion.div>
);

const ReviewsSection = () => {
  return (
    <section className="w-full px-6 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold text-customBlue tracking-tight font-poppins">
          Apa Kata Pembeli?
        </h2>
        <p className="text-gray-600 mt-3 text-lg font-poppins">
          Ulasan asli dari pelanggan yang sudah membeli{" "}
          <span className="font-semibold text-customBlue font-poppins">Backpacks Boy</span>.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
