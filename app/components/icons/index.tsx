import { type SVGProps } from "react";
// import spriteHref from "./sprite.svg";

// console.log({ spriteHref });

const Icon = ({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: string;
}) => {
  return (
    <svg {...props}>
      <use href={`sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
