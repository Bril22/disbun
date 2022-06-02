import React, { useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormAspekUmum from 'src/components/pages/aspek/FormAspekUmum';
import { navList } from 'src/components/sidebar/GroupLink';
import FormAspekSosial from 'src/components/pages/aspek/FormAspekSosial';

const SosialPage = () => {
  const [daySelected, setDaySelected] = useState(new Date());
  const validDate = moment(daySelected).format('YYYY-MM-DD');
  return (
    <>
      <Page
        isInfografis={true}
        backdropHeight="h-[280px]"
        navListSidebar={navList}
      >
        <div className="relative mt-5">
          <BreadCrumbs
            links={[
              { path: '/infografis', title: 'Infografis' },
              { path: '/infografis/buat-laporan', title: 'Buat Laporan' },
              {
                path: '/pelaporan-perkebunan/aspek-sosial',
                title: 'Aspek Sosial',
              },
            ]}
          />
          <div className="mt-6 flex items-center justify-between ">
            <div className=" text-3xl font-semibold text-black">
              Aspek Sosial Ekonomi dan Lingkungan
            </div>
            <div className="flex items-center rounded-md bg-white py-2 px-3 text-primary-black">
              <DatePicker
                closeOnScroll={true}
                selected={daySelected}
                onChange={(date) => setDaySelected(date)}
                dateFormat="dd MMMM yyyy"
                className="w-28 text-xs focus:outline-none"
              />
              <img src="/icon/menu-board.svg" />
            </div>
          </div>
          <div className="w-[70%]">
            <FormAspekSosial />
          </div>
        </div>
      </Page>
    </>
  );
};

export default SosialPage;
