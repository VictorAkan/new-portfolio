import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
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
          <div className="h-[138px] md:h-[393px] mb-[277px] relative w-[30%] sm:w-full">
            <Text
              className="absolute inset-x-[0] mx-auto md:text-5xl text-8xl text-center text-white-A700 top-[0] w-max"
              size="txtLeagueGothicRegularRegular96"
            >
              MY PROJECTS
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[11.52px] w-max"
              size="txtLeagueSpartanRegular32"
            >
              MADE WITH LOVE
            </Text>
          </div>
        </div>
        <div className="md:gap-5 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1200px] min-h-[auto] mt-20 mx-auto md:px-5 w-full">
          <div className="bg-black-900 md:h-[455px] h-[460px] pt-[5px] relative w-full">
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
          <div className="bg-black-900 md:h-[455px] h-[460px] pt-[5px] relative w-full">
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
          <div className="bg-black-900 md:h-[455px] h-[460px] pt-[5px] relative w-full">
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
          <div className="bg-black-900 md:h-[455px] h-[460px] pt-[5px] relative w-full">
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
          <div className="bg-black-900 md:h-[455px] h-[460px] pt-[5px] relative w-full">
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
          <div className="bg-black-900 md:h-[455px] h-[460px] pt-[5px] relative w-full">
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
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[240px] mt-20"
          leftIcon={
            <Img
              className="h-6 mr-2.5"
              src="images/img_arrowleft.svg"
              alt="arrow_left"
            />
          }
        >
          <div className="leading-[normal] text-base text-left">Contact me</div>
        </Button>
        <Footer className="bg-black-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectsPage;
