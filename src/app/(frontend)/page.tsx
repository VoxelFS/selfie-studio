import HomePageLayout from "@/components/layout/HomePageLayout";
import { getHomePage } from "@/actions/pages/getHomePage";
import Image from "next/image";
import parseHomePage from "@/types/parsers/parseHomePage";
import Carousel from "@/components/Carousel";

export default async function HomePage() {
    const homePage = parseHomePage(await getHomePage());
    if (!homePage) {
        return;
    }

    return (
        <>
            <HomePageLayout>
                <div className="responsive-fullwidth">
                    <Carousel autoSlide={true}>
                        {homePage.photos.map((photo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-screen h-screen relative"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </HomePageLayout>
        </>
    );
}
