import Image, { ImageProps } from "next/image";

const Promobanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="w-full rounded-[10px] lg:rounded-none"
      objectFit="contain"
      sizes="100vw"
      layout="responsive
      "
      alt={alt}
      {...props}
    />
  );
};

export default Promobanner;
