import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import CustomLink from '../components/CustomLink';
import Page from '../components/Page';

const links = [
  {
    title: 'Pelaporan',
    title2: 'Perkebunan',
    icon: '/icon/e-dtg-icon.svg',
    bannerImage: 'bg-[url(/images/pexels-teguh-sugi-60621691.png)]',
    path: '/pelaporan-perkebunan/aspek-umum',
  },
  {
    title: 'Penilaian',
    title2: 'Perkebunan',
    icon: '/icon/e-dtg-icon.svg',
    bannerImage: 'bg-[url(/images/pexels-teguh-sugi-60621691.png)]',
    path: '/penilaian-perkebunan/legalitas',
  },
];

const Card = ({ title, title2, icon, bannerImage, href }) => {
  return (
    <div
      className={`relative z-10 h-[440px] w-[50%] cursor-pointer
           rounded-lg ${bannerImage} from-black bg-cover shadow-md
           transition-all before:absolute before:-z-10 before:h-full 
           before:w-full before:rounded-lg before:bg-gradient-to-t before:content-[''] hover:h-[456px] hover:shadow-lg`}
    >
      <div className="flex h-full flex-col items-center justify-center">
        <img src={icon} className="w-15 " />
        <div className="relative mt-3 w-[60%] text-center text-xl font-semibold before:absolute before:left-[30%] before:-bottom-3 before:h-1 before:w-[40%] before:bg-primary-green before:content-['']">
          <CustomLink href={href}>
            <div>{title}</div>
            <div>{title2}</div>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};
const options = {
  position: 'top-left',
  style: {
    backgroundColor: 'midnightblue',
    border: '2px solid lightgreen',
    color: 'lightblue',
    fontSize: '20px',
    textAlign: 'center',
  },
  closeStyle: {
    color: 'lightcoral',
  },
};
export default function Home() {
  return (
    <Page sidebar={false} backdrop>
      <div className="mx-10 lg:mx-10  ">
        <div className="text-white ">
          <div className="text-4xl font-semibold">Selamat Datang</div>
          <div className="mt-[2px] text-md font-light">
            Silahkan pilih jenis pengajuan yang akan anda ajukan
          </div>
          <div className="mt-10 flex gap-[10%] px-20">
            {links.map((link) => {
              return (
                <Card
                  title={link.title}
                  title2={link.title2}
                  icon={link.icon}
                  bannerImage={link.bannerImage}
                  href={link.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
