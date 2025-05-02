export type HomePageParsed = {
    photos: Photo[];
};

export type Photo = {
    alt: string;
    src: string;
    width: number;
    height: number;
};
