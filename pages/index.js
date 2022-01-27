import Image from "next/image"

export default function Home() {
  return (
    <div>
    <div className=" bg-brand-450 bg-center md:flex justify-center lg:h-screen overflow-x-hidden md:overflow-x-visible relative">
      <div></div>
      <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1643303402/massage/Untitled-21_lgadxz.jpg"
      alt="Massage Design"
      layout="fixed"
      quality={100}
      width={665}
      height={680}
      />
    </div>
    <div className=" bg-brand-50 h-screen"></div>
    </div>
  )
}