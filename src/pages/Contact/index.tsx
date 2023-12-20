import React from "react";

import { Button, Img, Line, Text } from "components";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-leaguespartan sm:gap-10 md:gap-10 gap-[76px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-black-900 flex flex-col md:gap-10 gap-[193px] items-center justify-start p-[60px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1199px] mx-auto w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-20 w-20"
                  src="images/img_grid.svg"
                  alt="grid"
                />
                <div className="flex flex-col gap-2 items-end justify-start">
                  <Line className="bg-white-A700 h-[3px] w-full" />
                  <Line className="bg-white-A700 h-[3px] w-4/5" />
                  <Line className="bg-white-A700 h-[3px] w-3/5" />
                </div>
              </div>
            </div>
            <div className="h-[138px] md:h-[393px] mb-[277px] relative w-[31%] sm:w-full">
              <Text
                className="absolute inset-x-[0] mx-auto md:text-5xl text-8xl text-center text-white-A700 top-[0] w-max"
                size="txtLeagueGothicRegularRegular96"
              >
                CONTACT ME
              </Text>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[11.52px] w-max"
                size="txtLeagueSpartanRegular32"
              >
                SAY HELLO TO ME
              </Text>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[120px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
          size="txtLeagueSpartanBold32"
        >
          Contact me
        </Text>
        <div className="flex flex-col font-roboto md:gap-10 gap-[100px] items-center w-full">
          <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtLeagueSpartanBold16"
                  >
                    Name
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[25px] text-base text-gray-600"
                    size="txtRobotoRomanRegular16Gray600"
                  >
                    Your Name
                  </Text>
                  <Line className="bg-black-900 h-0.5 mt-1 w-full" />
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtLeagueSpartanBold16"
                  >
                    Email
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-7 text-base text-gray-600"
                    size="txtRobotoRomanRegular16Gray600"
                  >
                    email@example.com
                  </Text>
                  <Line className="bg-black-900 h-0.5 mt-0.5 w-full" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-14 w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtLeagueSpartanBold16"
                >
                  Nachricht
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-[27px] text-base text-gray-600"
                  size="txtRobotoRomanRegular16Gray600"
                >
                  Hello, my name is . . .
                </Text>
                <Line className="bg-black-900 h-0.5 mt-0.5 w-full" />
              </div>
              <div className="flex flex-col items-center justify-start mt-[78px] w-1/5 md:w-full">
                <Button className="cursor-pointer leading-[normal] min-w-[240px] text-base text-center">
                  Send message
                </Button>
              </div>
            </div>
          </div>
          <footer className="bg-black-900 flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mx-auto my-[159px] w-[84%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[17px] justify-start w-[55%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-[79px]"
                        size="txtRobotoRomanBold16"
                      >
                        PROJECTS
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-[53px]"
                        size="txtRobotoRomanBold16"
                      >
                        ABOUT
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-[73px]"
                        size="txtRobotoRomanBold16"
                      >
                        CONTACT
                      </Text>
                    </div>
                    <Text
                      className="text-base text-white-A700"
                      size="txtRobotoRomanBold16"
                    >
                      your_mail@email.com
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[491px] text-base text-white-A700"
                    size="txtRobotoRomanBold16"
                  >
                    +123 456 7890
                  </Text>
                </div>
                <div className="h-20 relative w-[7%] md:w-full">
                  <Img
                    className="absolute h-20 inset-[0] justify-center m-auto w-20"
                    src="images/img_grid.svg"
                    alt="grid_One"
                  />
                  <Img
                    className="absolute h-20 inset-[0] justify-center m-auto w-20"
                    src="images/img_grid.svg"
                    alt="grid_Two"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
