import React from "react";

const sizeClasses = {
  txtLeagueSpartanMedium24: "font-leaguespartan font-medium",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtLeagueSpartanSemiBold24: "font-leaguespartan font-semibold",
  txtLeagueSpartanBold32: "font-bold font-leaguespartan",
  txtRobotoRomanRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoRomanBold20: "font-bold font-roboto",
  txtLeagueGothicRegularRegular96: "font-leaguegothic font-normal",
  txtLeagueSpartanBold16: "font-bold font-leaguespartan",
  txtLeagueSpartanRegular32: "font-leaguespartan font-normal",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtLeagueSpartanBold64: "font-bold font-leaguespartan",
  txtRobotoRomanRegular16Gray600: "font-normal font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
