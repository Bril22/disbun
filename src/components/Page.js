import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './sidebar/Sidebar';
import Head from 'next/head';

const Page = ({
  children,
  sidebar = true,
  backdrop,
  navListSidebar,
  sidebarWithIcon,
  sidebarOnePage,
  onChangeSidebar,
  isActiveSidebar,
  isActiveConfirmPage,
  onChangeSidebarConfirm,
  backdropHeight = 'h-[50%]',
  isInfografis,
}) => {
  return (
    <div className="relative h-screen overflow-x-hidden  bg-gray-100 ">
      <Head>
        <title>Dinas Pekebunan</title>
        <meta name="description" content="ini test dashboard" />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <Navbar backdrop={isInfografis ? false : true} />
      <div className="relative flex bg-gray-100  ">
        <div
          className={`${
            backdrop ? 'block' : 'hidden'
          } fixed z-0   ${backdropHeight}`}
        >
          <img
            src="/images/background-page.png"
            className="h-full w-full object-cover"
          />
        </div>
        {sidebar ? (
          <div className="container mx-20 mt-[100px] mb-5 flex min-h-[85vh] text-sm">
            <Sidebar
              navList={navListSidebar}
              icon={sidebarWithIcon}
              onePage={sidebarOnePage}
              handleChangePath={onChangeSidebar}
              isActive={isActiveSidebar}
              isActiveConfirm={isActiveConfirmPage}
              handleChangePathConfirm={onChangeSidebarConfirm}
            />
            <div className=" ml-64 min-h-full flex-1 bg-white px-16 py-6">
              {children}
            </div>
          </div>
        ) : (
          <div
            className={`container mx-auto ${
              backdrop ? 'z-[1] my-[90px]' : 'pt-[90px]'
            } flex-1 text-sm`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
