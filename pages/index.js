import Image from "next/image"

export default function Home() {
  return (
    <div>
    <div className=" bg-brand-450 bg-center md:flex justify-center lg:h-screen overflow-x-hidden md:overflow-x-visible">
      <div className="relative right-36">
      <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1643651943/massage/AdobeStock_192428780223_opyiwz.png"
      alt="Massage Design"
      layout="fixed"
      quality={100}
      width={830}
      height={680}
      />
    </div>
    </div>
    <div className=" bg-brand-50 h-screen"></div>
    </div>
  )
}