import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll"; // 👈 untuk scroll ke section
import { Link as RouterLink } from "react-router-dom";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";


const NavbarComponents = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-customBlue font-poppins">
      <li>
        <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Beranda
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Tentang
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Layanan
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Kontak
        </ScrollLink>
      </li>
    </ul>
  );


  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-2xl px-4 py-2 mt-2 lg:px-8 lg:py-4 bg-white shadow-md">
      <div className="flex items-center justify-between text-customBlue">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-semibold font-poppins text-lg">
          Backpacks Boy
        </Typography>

        {/* Menu navigasi (desktop) */}
        <div className="mr-4 hidden lg:block">{navList}</div>

        {/* Bagian kanan navbar */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Icon Keranjang */}
          <div className="relative">
            <RouterLink to="/Keranjang">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100
                 text-customBlue hover:bg-customBlue hover:text-white
                 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <MdShoppingCart className="h-6 w-6" />
                <span className="font-poppins text-sm">Keranjang</span>
              </button>
            </RouterLink>

            {/* Badge jumlah item */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold shadow">
              3
            </span>
          </div>

          {/* Tombol Login & Sign Up */}
          <RouterLink to="/Keranjang">
            <Button variant="text" className="font-poppins text-sm text-customBlue">
              Login
            </Button>
          </RouterLink>
          <RouterLink to="/Registrasi">
            <Button variant="text" className="font-poppins text-sm text-white bg-customBlue">
              Sign Up
            </Button>
          </RouterLink>

        </div>

        {/* Hamburger menu (mobile) */}
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Menu collapsible untuk mobile */}
      <Collapse open={openNav}>
        {navList}
        <div className="flex w-full flex-col gap-y-2 lg:hidden mt-4">
          {/* Icon Keranjang */}
          <div className="relative z-50 cursor-pointer">
            <RouterLink to="/Keranjang">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100
                 text-customBlue hover:bg-customBlue hover:text-white
                 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <MdShoppingCart className="h-6 w-6" />
                <span className="font-poppins text-sm">Keranjang</span>
              </button>
            </RouterLink>

            {/* Badge jumlah item */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center
                   rounded-full bg-red-500 text-white text-xs font-bold shadow">
              3
            </span>
          </div>



          {/* Tombol Login & Sign Up */}

          <RouterLink to="/login">
            <Button variant="text" className="font-poppins text-sm text-customBlue">
              Login
            </Button>
          </RouterLink>
          <RouterLink to="/Regis">
            <Button variant="text" className="font-poppins text-sm text-customBlue">
              Registrasi
            </Button>
          </RouterLink>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponents;
