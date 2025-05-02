export type AboutPageParsed = {
    storeTitle: string;
    storeAbout: string;
    socials: Socials[];
};

export type Socials = {
    social: string;
    handle: string;
    link: string;
    id: string;
};
