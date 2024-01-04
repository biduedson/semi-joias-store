import Image, { ImageProps } from "next/image";

const Promobanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="w-full max-w-[1980px] h-auto border-collapse rounded-[10px] lg:rounded-none"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default Promobanner;
