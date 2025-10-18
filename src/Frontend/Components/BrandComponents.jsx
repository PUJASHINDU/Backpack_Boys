import React from 'react'
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import deuter from "../assets/Brand/deuter.png";
import eiger from "../assets/Brand/eiger.png";
import fjallraven from "../assets/Brand/fjallraven.png";
import patagona from "../assets/Brand/patagonia.png";
import thenorth from "../assets/Brand/thenorth.png";

const BrandComponents = () => {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container !mx-auto text-center place-content-center grid">
        <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base font-poppins"
        >
        Dipercaya Lebih dari 50+ Brand
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl font-poppins"
        >
        Pilihan Brand Keren
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-5xl !text-gray-500 lg:px-8 mb-10 font-poppins"
        >
          Dari startup kreatif sampai perusahaan besar, Backpaks Boys udah jadi pilihan banyak brand dari berbagai bidang, dengan tantangan yang berbeda-beda dan semua berhasil kita lewati bareng.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className=" bg-white/80 backdrop-blur-md shadow-2xl px-10">
              <CardBody>
                <img
                  src={fjallraven}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500 mt-1 font-poppins">
                  Fjallraven
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="px-10 bg-white/80 backdrop-blur-md shadow-2xl">
              <CardBody>
                <img
                  src={deuter}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500 mt-1 font-poppins">
                  Deuter
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-white/80 backdrop-blur-md shadow-2xl lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <img
                src={eiger}
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4 font-poppins">
              Eiger
              </Typography>
               <Typography variant="small" color="blue-gray" className="font-normal font-poppins lg:max-w-[16rem]">
              &quot;It have broadened our horizons and helped me advance my career. The community is incredibly supportive &quot;
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className="bg-white/80 backdrop-blur-md shadow-2xl px-10">
              <CardBody>
                <img
                  src={patagona}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal font-poppins text-gray-500">
                Patagonia
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-white/80 backdrop-blur-md shadow-2xl px-10">
              <CardBody>
                <img
                  src={thenorth}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  The North Face
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Button className="mt-6 mx-auto flex bg-white/80 backdrop-blur-md shadow-2xl border-none font-poppins font-semibold" variant="outlined">see all product</Button>
    </section>
  );
}

export default BrandComponents
