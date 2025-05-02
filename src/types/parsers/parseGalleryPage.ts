import { GalleryPage, Media } from "@/payload-types";
import { GalleryPageParsed } from "@/types/galleryPage";
import { Photo } from "@/types/homePage";

export default function ParseGalleryPage(
    data: GalleryPage
): GalleryPageParsed | undefined {
    if (!data) {
        return undefined;
    }

    const galleryPhotos: Photo[] = data.galleryPhotos
        .filter(
            (photo): photo is Media =>
                typeof photo === "object" && photo !== null
        )
        .map((photo) => ({
            alt: photo.alt,
            src: photo.url as string,
            width: photo.width as number,
            height: photo.height as number,
        }));

    return {
        galleryPhotos: galleryPhotos,
    };
}
