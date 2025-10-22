import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
  Dialog,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  ShoppingCartIcon,
  StarIcon as StarSolid,
} from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import PursuitRetroblack from "../assets/Product/PursuitRetroBlack.jpg";
import PursuitRetroblue from "../assets/Product/PursuitRetroBlue.jpg";
import PursuitRetrogray from "../assets/Product/PursuitRetroGray.jpg";
import Gantblack from "../assets/Product/Gantblack.jpg"
import Gantmaroon from "../assets/Product/Gantmaroon.jpg"
import Tarion from "../assets/Product/Tarion.jpg"
import Revendo from "../assets/Product/Revendo.jpg"
import Tenba from "../assets/Product/Tenba.jpg"
import { useCart } from "../../context/CartContext.jsx";


const products = [
  {
    id: 1,
    title: "PursuitRetro",
    price: 129000,
    rating: 4.8,
    category: "Nature & Casual Backpack",
    description:
      "Minimalist design for daily urban life. Light, durable and stylish.",
    variants: [
      { name: "Black", color: "#111827", image: PursuitRetroblack },
      { name: "Blue", color: "#0A2640", image: PursuitRetroblue },
      { name: "Gray", color: "#6B7280", image: PursuitRetrogray },
    ],
  },
  {
    id: 2,
    title: "Gant",
    price: 245000,
    rating: 4.8,
    category: "Stylis & Casual Backpack",
    description:
      "Minimalist design for daily urban life. Light, durable and stylish.",
    variants: [
      { name: "Black", color: "#111827", image: [Gantblack] },
      { name: "Blue", color: "#8B0000", image: [Gantmaroon] },
    ],
  },
  {
    id: 3,
    title: "Tenba",
    price: 129000,
    rating: 4.8,
    category: "Casual Backpack",
    description:
      "Minimalist design for daily urban life. Light, durable and stylish.",
    variants: [
      { name: "Black", color: "#111827", image: [Tenba] },
    ],
  },
  {
    id: 4,
    title: "Revendo",
    price: 129000,
    rating: 4.8,
    category: "Nature & Casual Backpack",
    description:
      "Minimalist design for daily urban life. Light, durable and stylish.",
    variants: [
      { name: "Black", color: "#111827", image: [Revendo] }
    ],
  },
  {
    id: 5,
    title: "Tarion",
    price: 129000,
    rating: 4.8,
    category: "Nature & Casual Backpack",
    description:
      "Minimalist design for daily urban life. Light, durable and stylish.",
    variants: [
      { name: "Black", color: "#111827", image: [Tarion] },
    ],
  },
  // ... produk lain
];

// ⭐ Komponen rating bintang
const StarRating = ({ value }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full)
      stars.push(<StarSolid key={i} className="h-4 w-4 text-yellow-400" />);
    else if (i === full && half)
      stars.push(<StarOutline key={i} className="h-4 w-4 text-yellow-400" />);
    else stars.push(<StarOutline key={i} className="h-4 w-4 text-gray-300" />);
  }
  return <div className="flex items-center">{stars}</div>;
};

export default function ProductComponents() {
  const [selectedVariant, setSelectedVariant] = useState(
    Object.fromEntries(products.map((p) => [p.id, 0]))
  );

  const [open, setOpen] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  const handleColorSelect = (productId, index) =>
    setSelectedVariant((prev) => ({ ...prev, [productId]: index }));

  const handleAddToCart = (product) => {
    const variant = product.variants[selectedVariant[product.id]]; // ambil varian yang sedang dipilih
    addToCart({
      id: `${product.id}-${variant.name}`, // unik tiap varian
      title: product.title,
      price: product.price,
      image: Array.isArray(variant.image) ? variant.image[0] : variant.image, // support kalau image berupa array
      quantity: 1,
    });

    alert(`${product.title} (${variant.name}) ditambahkan ke keranjang!`);
  };



  const handleOpenPopup = (p, variant) => {
    setPopupProduct({ ...p, image: variant.image });
    setOpen(true);
  };

  const { addToCart } = useCart();

  return (
    <div className="py-12 px-4 bg-blue-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10 font-poppins">
          Backpack Collection
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {products.map((product, idx) => {
            const variant = product.variants[selectedVariant[product.id]];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex justify-center"
              >
                <Card className="w-full max-w-4xl md:flex-row overflow-hidden rounded-2xl shadow-md bg-white">
                  {/* Gambar */}
                  <div
                    className="md:w-1/2 aspect-[4/3] cursor-pointer"
                    onClick={() => handleOpenPopup(product, variant)}
                  >
                    <img
                      src={variant.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Teks */}
                  <CardBody className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <Typography
                        variant="small"
                        color="gray"
                        className="uppercase tracking-wide font-poppins"
                      >
                        {product.category}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-semibold mt-1 font-poppins"
                      >
                        {product.title}
                      </Typography>

                      {/* Harga & rating */}
                      <div className="flex items-center justify-between mt-2 mb-3">
                        <Typography className="text-lg font-bold text-blue-600 font-poppins">
                          {product.price.toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                          })}
                        </Typography>

                        <StarRating value={product.rating} />
                      </div>

                      <Typography
                        color="gray"
                        className="text-sm mb-4 font-poppins"
                      >
                        {product.description}
                      </Typography>

                      {/* Palet warna */}
                      <div className="flex items-center gap-3 mb-4">
                        {product.variants.map((v, i) => (
                          <button
                            key={v.name}
                            onClick={() => handleColorSelect(product.id, i)}
                            className={`w-7 h-7 rounded-full border-2 transition-transform ${selectedVariant[product.id] === i
                              ? "border-blue-600 scale-110"
                              : "border-gray-300"
                              }`}
                            style={{ backgroundColor: v.color }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Tombol aksi */}
                    <div className="flex items-center justify-between mt-2">
                      <Button
                        size="sm"
                        className="rounded-lg bg-customBlue text-white font-poppins"
                        onClick={() => handleOpenPopup(product, variant)}
                      >
                        Beli Sekarang
                      </Button>
                      <IconButton
                        size="sm"
                        className="rounded-full bg-customBlue hover:bg-customBlue/80 text-white"
                        onClick={() => handleAddToCart(product)}
                        aria-label="Add to Cart"
                      >
                        <ShoppingCartIcon className="h-5 w-5" />
                      </IconButton>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal */}
      <Dialog open={open} handler={() => setOpen(false)} size="lg">
        {popupProduct && (
          <div className="p-4">
            <img
              src={popupProduct.image}
              alt={popupProduct.title}
              className="w-full h-[400px] object-cover rounded-xl mb-4"
            />
            <Typography variant="h4" className="mb-2 font-poppins">
              {popupProduct.title}
            </Typography>
            <Typography color="gray" className="mb-2 font-poppins">
              {popupProduct.category}
            </Typography>
            <Typography className="text-blue-600 font-bold text-lg font-poppins">
              ${popupProduct.price}
            </Typography>
            <Typography className="mt-3 font-poppins">
              {popupProduct.description}
            </Typography>
          </div>
        )}
      </Dialog>
    </div>
  );
}
