import React from "react";

import { Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mx-auto my-[159px] w-[84%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col gap-[17px] justify-start">
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
            <Img
              className="h-20 w-20"
              src="images/img_grid.svg"
              alt="grid_One"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
