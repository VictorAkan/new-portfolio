import React from "react";

import { Button, Img, Line, Text } from "components";

const AboutPage: React.FC = () => {
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
          <div className="h-[140px] md:h-[392px] mb-[276px] relative w-[33%] sm:w-full">
            <Text
              className="absolute inset-x-[0] mx-auto md:text-5xl text-8xl text-center text-white-A700 top-[0] w-max"
              size="txtLeagueGothicRegularRegular96"
            >
              ABOUT ME
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[11.52px] w-max"
              size="txtLeagueSpartanRegular32"
            >
              IT’S A-ME, MARIO!
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[79px] md:px-5">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtLeagueSpartanBold32"
          >
            My Background
          </Text>
          <Text
            className="mt-3.5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            <>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br />
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. <br />
              <br />
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </>
          </Text>
          <Text
            className="mt-[79px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtLeagueSpartanBold32"
          >
            My Hobbies and Interests
          </Text>
          <Text
            className="mt-3.5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            <>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
              <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. <br />
              <br />
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </>
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mt-20 md:px-5 w-[17%] md:w-full">
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
        <footer className="bg-black-900 flex items-center justify-center mt-[100px] md:px-5 w-full">
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
              <div
                className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start w-20"
                style={{ backgroundImage: "url('images/img_grid.svg')" }}
              >
                <Img
                  className="h-20 w-20"
                  src="images/img_grid.svg"
                  alt="grid_One"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
