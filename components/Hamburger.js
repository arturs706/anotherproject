import { useState, useRef, useEffect } from "react";
import gsap from 'https://cdn.skypack.dev/gsap';
import Image from "next/image";

const Hamburger = () => {
    const menuToggle_1Ref = useRef(null)
    const menuToggle_2Ref = useRef(null)
    const menuToggle_3Ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    
    

    useEffect(()=> {     
        if (isOpen) {
        document.getElementById("main-cont").style.overflowY = "hidden";     
        gsap.to(menuToggle_1Ref.current, 0.6,{
            stroke: "#cfb296",
            attr: { d: "M9,2 L3,8" },
            duration: 2,
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
        gsap.to(menuToggle_2Ref.current, 0.6,{
            autoAlpha:0
        }, 'start')
        
        gsap.to(menuToggle_3Ref.current, 0.6,{
            attr:{d: "M9,8 L3,2"},
            stroke: "#cfb296",
            duration: 2,
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
        
        let loader = gsap.timeline({})

    loader.to('.bluee', {
        duration: .8,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z'},
        ease: 'power2.in',
    })
    .to('.bluee', {
        duration: .8,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
        ease: 'power2.out',
    })
    .to(menuRef.current,{
        duration: 1,
        y: 20,
        autoAlpha:1,
        ease: 'power2.out',
        stagger: 1
    })
    
    } 
    },[isOpen])

    useEffect(()=>{
       if (!isOpen){
            document.getElementById("main-cont").style.overflowY = "visible";  
            gsap.to(menuToggle_1Ref.current, 0.5,{
                attr: { d: "M10, 2 L2, 2" },
                x:1,
                stroke: "#cfb296",
                ease: 'power2.easeInOut'
            }, 'start')
            gsap.to(menuToggle_2Ref.current, 0.5,{
                autoAlpha:1,
                x:1
            }, 'start')
            
            gsap.to(menuToggle_3Ref.current, 0.5,{
                attr:{d: "M10,8 L2,8"},
                x:1,
                stroke: "#cfb296",
                ease: 'power2.easeInOut',
            }, 'start')
             
        }
    },[!isOpen])

    return (
        <div className="relative z-50">
            {/*Navigation*/}
        <div className="bg-brand-450 ">
            {/*Image*/}
            <div className="pl-8">
                <Image
                    src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1643298021/massage/niceone2_keukjd.svg"
                    alt="Logo"
                    layout="fixed"
                    quality={100}
                    width={110}
                    height={110}
                />
            </div>
        </div>
        {/*Hamburger button along with the slide on the click*/}
        <div className="fixed top-7 right-20 pointer z-50">
         
        <div className="fixed z-50 bg-black rounded-full p-2">
            <button className="bg-transparent border-none cursor-pointer outline-0 no-underline"
                onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 -1 13 10" className="h-7 w-9">
                    <path className="stroke-brand-450 stroke-[0.04rem]" d="M10, 2 L3, 2" ref={menuToggle_1Ref}></path>
                    <path className="stroke-brand-450 stroke-[0.04rem]" d="M2, 5 L10, 5" ref={menuToggle_2Ref}></path>
                    <path className="stroke-brand-450 stroke-[0.04rem]" d="M10,8 L2,8" ref={menuToggle_3Ref}></path>
                </svg>
            </button>
        </div>
        </div>
        {
            isOpen
            ?
            <section className=" main-section fixed left-0 top-0 w-full h-screen overflow-hidden backdrop-blur-2xl ">
                <div className="flex items-center justify-center h-full px-32 py-42">
                <div className="h-full w-full absolute left-0 top-0 bg-brand-900 "></div>
                <svg className="h-full w-full absolute left-0 top-0 " viewBox="0 10 1000 1000" preserveAspectRatio="none">
                    <path className="h-full w-full bluee fill-brand-450" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                    </svg>
                    <nav className="relative z-50 text-center">
                        <ul className="opacity-0" ref={menuRef}>
                            <li><span className="text-4xl text-brand-50">SĀKUMS</span></li>
                            <li><span className="text-4xl text-orange-50	">PRECES</span></li>
                            <li><span className="text-4xl text-orange-50	">SAZINĀTIES AR MUMS</span></li>
                            <li><span className="text-4xl text-orange-50	">ATRAŠANĀS VIETA</span></li>
                            <li><span className="text-4xl text-orange-50	">IELOGOTIES</span></li>
                        </ul>
                    </nav>
                </div>
            </section>
            : null
        }

        </div>
    )
}

export default Hamburger
