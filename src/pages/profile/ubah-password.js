import React, { useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Page from '../../components/Page';
import { Icon } from '@iconify/react';
import { navListSidebarEditProfile } from 'src/components/sidebar/GroupLink';

const UbahPasswordPage = () => {
  const [typePassword, setTypePassword] = useState({
    mainPassword: false,
    confirmPassword: false,
  });
  return (
    <Page sidebar navListSidebar={navListSidebarEditProfile} sidebarWithIcon>
      <div>
        <BreadCrumbs
          links={[
            { path: '/profile', title: 'Edit Profile' },
            { path: '/profile/ubah-password', title: 'Ubah Password' },
          ]}
        />
        <div className="mt-4 text-2xl font-semibold">Ubah Password</div>
        <div className="mt-10 w-[50%]">
          <div className="mb-2">
            <div className="mb-2 text-xs font-semibold">
              Password Baru<span className="text-red-400">*</span>
            </div>
            <div className="flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 ">
              <input
                name="password"
                type={typePassword.mainPassword ? 'text' : 'password'}
                placeholder="Masukan password anda"
                className="flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    mainPassword: !typePassword.mainPassword,
                  })
                }
                icon={
                  typePassword.mainPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
          </div>
          <div className="text-sm text-[#616161]">
            <div>Kata sandi harus berisi berikut ini:</div>
            <div className="mt-2 flex flex-col gap-2 font-light text-[#9E9E9E]">
              <div className="flex items-center gap-1">
                <Icon icon="ci:dot-04-l" />
                <div>Karakter huruf kecil</div>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="ci:dot-04-l" />
                <div>Karakter huruf besar</div>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="ci:dot-04-l" />
                <div>Karakter huruf angka</div>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="ci:dot-04-l" />
                <div>Minimal 8 karakter</div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-2 text-xs font-semibold">
              Konfirmasi Password<span className="text-red-400">*</span>
            </div>
            <div className="flex items-center justify-between rounded border bg-[#F7F7F7] pr-3 ">
              <input
                name="password"
                type={typePassword.confirmPassword ? 'text' : 'password'}
                placeholder="Masukan password anda"
                className="flex-1 rounded bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
              <Icon
                onClick={() =>
                  setTypePassword({
                    ...typePassword,
                    confirmPassword: !typePassword.confirmPassword,
                  })
                }
                icon={
                  typePassword.confirmPassword
                    ? 'ant-design:eye-filled'
                    : 'ant-design:eye-invisible-filled'
                }
                style={{ fontSize: '24px', color: 'rgba(158, 158, 158, 1)' }}
                className="ml-3 cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="w-32 rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] p-2 text-sm text-white">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default UbahPasswordPage;
