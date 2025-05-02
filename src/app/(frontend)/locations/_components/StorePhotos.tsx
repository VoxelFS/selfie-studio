import { ParsedLocationPage } from "@/types/locationPage";
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";
import Image from "next/image";

interface StorePhotosProps {
    stores: ParsedLocationPage;
}

export default function StorePhotos({ stores }: StorePhotosProps) {
    return (
        <div className="space-y-6 mt-12">
            <Title title={"store photos"} />
            <div className="w-full rounded-2xl">
                <Carousel autoSlide={true}>
                    {stores.storePhotos.map((photo, index) => (
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            height={photo.height}
                            width={photo.width}
                            key={index}
                            className="rounded-2xl"
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
