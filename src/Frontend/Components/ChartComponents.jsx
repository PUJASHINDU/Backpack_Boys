import React from "react";
import { Button } from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext.jsx";

const ChartComponents = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-700 flex flex-col items-center justify-center px-6 py-12 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide drop-shadow-lg">
          🛍️ Keranjang Belanja
        </h2>

        {cartItems.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-200 text-lg"
          >
            Keranjang kamu masih kosong 😢
            <br />
            Yuk, tambahkan produk impianmu!
          </motion.p>
        ) : (
          <div className="flex flex-col md:flex-row gap-10">
            {/* Daftar Produk */}
            <div className="flex-1 space-y-5">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-white/20 backdrop-blur-md rounded-2xl p-5 hover:shadow-xl hover:bg-white/30 transition"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-xl object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                      <p className="text-sm text-gray-300">
                        Jumlah: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-400 hover:text-red-600 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={22} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Ringkasan Pesanan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/3 bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                Ringkasan Pesanan
              </h3>

              <div className="space-y-3 text-gray-200 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Layanan</span>
                  <span>Rp 2.000</span>
                </div>
                <div className="border-t border-white/30 my-3"></div>
                <div className="flex justify-between text-lg font-semibold text-white">
                  <span>Total</span>
                  <span>
                    Rp {(totalPrice + 20000).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <Button
                color="blue"
                className="mt-8 w-full rounded-xl text-base py-3 font-semibold shadow-md bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 hover:opacity-90"
              >
                Checkout Sekarang
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ChartComponents;
