import Image from "next/image"

export default function Home() {
  return (
    <div>
    <div className="absolute top-0 left-0 w-full h-full bg-black ">
    <div className="bg-gradient-to-r from-brand2-900 to-brand2-450 h-screen overflow-x-hidden overflow-y-hidden  relative">
      
      <div className="flex justify-center bg-blend-hard-light">

      <div className="z-10 absolute pr-72">
      <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1643651943/massage/AdobeStock_192428780223_opyiwz.png"
      alt="Massage Design"
      layout="fixed"
      quality={100}
      width={800}
      height={680}
      />
      </div>

      <div className="absolute bg-white z-0 h-110 w-110 opacity-50 rounded-full blur-3xl"></div>

      </div>
    </div>
    </div>
    <div className=" bg-brand2-50 h-screen"></div>
    <div className=" bg-brand2-50 h-screen"></div>
    </div>
  )
}