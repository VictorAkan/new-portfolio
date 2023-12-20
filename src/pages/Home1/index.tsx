import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-leaguespartan items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex flex-col md:gap-10 gap-[193px] items-center justify-start p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1199px] mx-auto w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Img className="h-20 w-20" src="images/img_grid.svg" alt="grid" />
              <div className="flex flex-col gap-2 items-end justify-start">
                <Line className="bg-white-A700 h-[3px] w-full" />
                <Line className="bg-white-A700 h-[3px] w-4/5" />
                <Line className="bg-white-A700 h-[3px] w-3/5" />
              </div>
            </div>
          </div>
          <div className="h-[138px] md:h-[393px] mb-[277px] relative w-[26%]">
            <Text
              className="absolute inset-x-[0] mx-auto md:text-5xl text-8xl text-center text-white-A700 top-[0] w-max"
              size="txtLeagueGothicRegularRegular96"
            >
              YOUR NAME
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[11.52px] w-max"
              size="txtLeagueSpartanRegular32"
            >
              WEB-DESIGNER
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[17px] items-start justify-start mt-14 md:px-5">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtLeagueSpartanBold32"
          >
            About me
          </Text>
          <Text
            className="text-base text-black-900 w-full"
            size="txtRobotoRomanRegular16"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </Text>
        </div>
        <div className="flex flex-col gap-3.5 items-start justify-start mt-[59px] md:px-5 w-[39%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtLeagueSpartanBold32"
          >
            My Skills
          </Text>
          <div className="flex sm:flex-col flex-row font-roboto sm:gap-10 items-start justify-between w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start sm:mt-0 mt-0.5 w-[12%] sm:w-full">
              <div className="flex flex-row items-center justify-evenly w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_html5.svg"
                  alt="htmlFive"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  HTML
                </Text>
              </div>
              <div className="flex flex-row items-start justify-evenly w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_figma.svg"
                  alt="figma"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Figma
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-3.5 items-start justify-start sm:mt-0 mt-0.5 w-[14%] sm:w-full">
              <div className="flex flex-row items-start justify-start w-[64%] md:w-full">
                <Img
                  className="h-3.5 mt-[3px] w-3.5"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="ml-[5px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  CSS
                </Text>
              </div>
              <div className="flex flex-row items-center justify-evenly w-full">
                <Img
                  className="h-3.5 md:h-auto object-cover w-3.5"
                  src="images/img_googlechrome.png"
                  alt="googlechrome"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Chrome
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start w-[17%] sm:w-full">
              <div className="flex flex-row items-start justify-evenly w-full">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  JavaScript
                </Text>
              </div>
              <CheckBox
                className="leading-[normal] text-base text-black-900 text-left"
                inputClassName="mr-[5px]"
                name="vscode"
                id="vscode"
                label="VSCode"
              ></CheckBox>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-start w-[15%] sm:w-full">
              <div className="flex flex-row items-end justify-evenly w-full">
                <Img
                  className="h-[13px] mt-1.5 w-3.5"
                  src="images/img_react.svg"
                  alt="react"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  ReactJS
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-1/2 md:w-full">
                <Img
                  className="h-3.5 mt-[3px] w-3.5"
                  src="images/img_thumbsup_red_600_01.svg"
                  alt="thumbsup_One"
                />
                <Text
                  className="ml-[5px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Git
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-start w-[14%] sm:w-full">
              <div className="flex flex-row items-start justify-evenly w-full">
                <Img
                  className="h-3.5 mt-[3px] w-3.5"
                  src="images/img_nodejs.svg"
                  alt="nodejs"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    NodeJS
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-[72%] md:w-full">
                <div className="bg-red-800 flex flex-col h-3.5 items-center justify-start my-0.5 p-0.5 w-3.5">
                  <Img
                    className="h-2 w-2"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
                <div className="flex flex-col items-center justify-start ml-[5px] w-[65%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NPM
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto items-center justify-start max-w-[1200px] mt-[97px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-black-900 flex flex-1 flex-col items-center justify-start sm:ml-[0] pt-[5px] w-full">
                <div className="h-[455px] relative w-full">
                  <Img
                    className="h-[455px] m-auto object-cover w-full"
                    src="images/img_projectcardimagesize.png"
                    alt="projectcardimag"
                  />
                  <div className="absolute flex flex-col gap-[15px] inset-x-[0] items-start justify-start mx-auto top-[3%]">
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtRobotoRomanBold20"
                    >
                      Project Title - Here comes the name of the Project
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtRobotoRomanRegular16WhiteA700"
                    >
                      Here are the Tech’s used
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-black-900 md:h-[455px] h-[460px] sm:ml-[0] pt-[5px] relative w-full">
                <div className="flex flex-col gap-[15px] h-full items-start justify-start mt-3.5 mx-auto">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtRobotoRomanBold20"
                  >
                    Project Title - Here comes the name of the Project
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtRobotoRomanRegular16WhiteA700"
                  >
                    Here are the Tech’s used
                  </Text>
                </div>
                <Img
                  className="absolute h-[455px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_projectcardimagesize.png"
                  alt="projectcardimag"
                />
              </div>
              <div className="bg-black-900 md:h-[455px] h-[460px] sm:ml-[0] pt-[5px] relative w-full">
                <div className="flex flex-col gap-[15px] h-full items-start justify-start mt-3.5 mx-auto">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtRobotoRomanBold20"
                  >
                    Project Title - Here comes the name of the Project
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtRobotoRomanRegular16WhiteA700"
                  >
                    Here are the Tech’s used
                  </Text>
                </div>
                <Img
                  className="absolute h-[455px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_projectcardimagesize.png"
                  alt="projectcardimag"
                />
              </div>
            </List>
            <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-[45%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[240px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2.5"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
              >
                <div className="leading-[normal] text-base text-left">
                  All Projects
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[240px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2.5"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
              >
                <div className="leading-[normal] text-base text-left">
                  Contact me
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-black-900 flex font-roboto items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
