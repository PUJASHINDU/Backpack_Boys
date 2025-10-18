import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import helloAnim from "../assets/Animation/Welcome.json";
import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegistrasiComponents = () => {
  const [greeting, setGreeting] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      setGreeting("Halo, Selamat Pagi ☀️");
    } else if (hour >= 11 && hour < 15) {
      setGreeting("Halo, Selamat Siang 🌤️");
    } else if (hour >= 15 && hour < 18) {
      setGreeting("Halo, Selamat Sore 🌇");
    } else {
      setGreeting("Halo, Selamat Malam 🌙");
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
      {/* Efek background blur dan cahaya lembut */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e40af_0%,_transparent_40%),_radial-gradient(circle_at_bottom_right,_#0ea5e9_0%,_transparent_40%)] opacity-60"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>

      {/* Card utama */}
      <div className="relative flex w-full max-w-5xl overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] bg-white/10 backdrop-blur-xl border border-white/20">
        {/* Bagian kiri */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-gradient-to-br from-blue-800/40 to-sky-700/30 p-10 text-white">
          <div className="w-96 h-96">
            <Lottie animationData={helloAnim} loop={true} />
          </div>
        </div>

        {/* Bagian kanan (form registrasi) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white/80 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-customBlue mb-2 tracking-tight font-poppins">
            {greeting}
          </h2>
          <p className="text-gray-600 mb-8 font-poppins">
            Silakan buat akun baru untuk melanjutkan.
          </p>

          <form className="space-y-5">
            {/* Baris 1: Username dan Nomor HP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-customBlue mb-1 font-poppins">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Masukkan username"
                  className="w-full rounded-xl border border-gray-300 bg-white/80 px-4  text-md font-poppins py-2.5
                  focus:border-customBlue focus:ring-2 focus:ring-blue-300 outline-none transition duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customBlue mb-1 font-poppins">
                  Nomor Handphone
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nomor HP"
                  className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 text-sm  font-poppins py-2.5
                  focus:border-customBlue focus:ring-2 focus:ring-blue-300 outline-none transition duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-customBlue mb-1 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 text-sm  font-poppins py-2.5
                  focus:border-customBlue focus:ring-2 focus:ring-blue-300 outline-none transition duration-200"
                />
              </div>

              {/* Input Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-customBlue mb-1 font-poppins">
                  Password
                </label>
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 mt-6 cursor-pointer hover:text-blue-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className="w-full rounded-xl border border-gray-300 bg-white/80  px-4 text-sm  font-poppins py-2.5 focus:border-blue-700 focus:ring-2 focus:ring-blue-300 outline-none transition duration-200"
                />
              </div>
            </div>

            {/* Baris 2: Email */}


            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[70%] bg-gradient-to-r from-customBlue via-blue-700 to-sky-600
                hover:opacity-90 text-white font-semibold rounded-xl py-2.5
                mt-4 shadow-lg transition duration-200 font-poppins"
              >
                Daftar Sekarang
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="flex items-center justify-center w-[70%] text-md font-poppins
                        bg-white border border-gray-300 shadow-md text-gray-700 py-2 px-4
                        rounded-lg hover:bg-gray-100 transition"
              >
                <FcGoogle className="text-2xl mr-2 ml-3" />
                <span className="flex-1 text-center">Daftar dengan Google</span>
              </button>
            </div>

            <p className="flex justify-center items-center text-sm mt-5 text-gray-700 font-poppins">
              Sudah punya akun?{" "}
              <RouterLink to="/login" className="ml-1">
                <span className="text-customBlue hover:text-blue-800 font-semibold transition">
                  Login di sini
                </span>
              </RouterLink>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrasiComponents;
