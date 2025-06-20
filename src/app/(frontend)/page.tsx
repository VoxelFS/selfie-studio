import HomePageLayout from "@/components/layout/HomePageLayout";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

export default async function HomePage() {

    const images = [
        { src: "/assets/homepage/photo1.png", alt: "Home Photo" },
    ];

    return (
        <>
            <HomePageLayout>
                <div className="responsive-fullwidth">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-4">
                        <h1 className="text-white text-5xl md:text-6xl font-bold">
                            Selfie Studio
                        </h1>
                        <h1 className="text-white text-xl md:text-xl font-bold opacity-75">
                            Cherish the moment. Relive it later.
                        </h1>
                        <Link
                          href="/locations"
                          className="group inline-flex items-center gap-2 py-2 px-4 md:px-6 md:text-base rounded-2xl font-medium bg-[#bbfcff] text-sm md:text-2xl transition-transform transform hover:scale-105"
                        >
                            Visit Our Locations
                            <ArrowForwardIcon className="w-6 h-6" />
                        </Link>
                    </div>
                    <Carousel
                        autoSlide={true}
                        showArrow={false}
                        autoSlideInterval={5000}
                    >
                        <div
                            className="flex-shrink-0 w-screen h-screen relative"
                        >
                            {images.map((photo, index) => (
                              <div key={index} className="flex-shrink-0 w-screen h-screen relative">
                                  <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover"
                                    priority
                                  />
                                  <div className="absolute inset-0 bg-black opacity-75 z-10" />
                              </div>
                            ))}
                        </div>
                    </Carousel>
                </div>
            </HomePageLayout>
        </>
    );
}
