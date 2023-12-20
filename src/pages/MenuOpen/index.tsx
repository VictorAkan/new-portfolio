import React from "react";

import { Img, Text } from "components";

const MenuOpenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-leaguespartan sm:gap-10 md:gap-10 gap-[164px] justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-end ml-52 md:ml-[0] mr-[60px] md:pl-10 sm:pl-5 pl-[1028px] w-4/5 md:w-full">
          <Img className="h-6 w-6" src="images/img_close.svg" alt="close" />
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[251px] items-end justify-start mb-[193px] ml-52 md:ml-[0] w-[63%] md:w-full">
          <div className="flex flex-row gap-8 items-start justify-between w-[43%] md:w-full">
            <Text
              className="mt-[5px] rotate-[90deg] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
              size="txtLeagueSpartanMedium24"
            >
              MENU
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start">
              <Text
                className="md:text-5xl text-[64px] text-black-900"
                size="txtLeagueSpartanBold64"
              >
                HOME
              </Text>
              <Text
                className="md:text-5xl text-[64px] text-black-900"
                size="txtLeagueSpartanBold64"
              >
                PROJECTS
              </Text>
              <Text
                className="md:text-5xl text-[64px] text-black-900"
                size="txtLeagueSpartanBold64"
              >
                ABOUT
              </Text>
              <Text
                className="md:text-5xl text-[64px] text-black-900"
                size="txtLeagueSpartanBold64"
              >
                CONTACT
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:mt-0 mt-[189px] w-[28%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtLeagueSpartanSemiBold24"
              >
                your_mail@email.com
              </Text>
              <Text
                className="mt-4 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtLeagueSpartanSemiBold24"
              >
                +123 456 7890
              </Text>
              <div className="flex flex-row gap-5 items-center justify-start mt-[31px] w-[31%] md:w-full">
                <Img className="h-6 w-6" src="images/img_info.svg" alt="info" />
                <Img
                  className="h-6 w-6"
                  src="images/img_trash.svg"
                  alt="trash"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuOpenPage;
