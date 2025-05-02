import { AboutPageParsed } from "@/types/aboutPage";
import Image from "next/image";

interface AboutUsProps {
    aboutPage: AboutPageParsed;
}

export default function AboutUs({ aboutPage }: AboutUsProps) {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="md:flex w-full">
                <div className="relative w-full md:w-1/2 order-first md:order-last flex items-center justify-center bg-white rounded-t-2xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none">
                    <Image
                        src="/assets/LogoText.png"
                        alt="LogoText"
                        height={300}
                        width={300}
                    />
                </div>

                <div className="bg-white w-full md:w-1/2 py-8 px-8 md:py-12 md:px-10 rounded-b-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-br-none">
                    <p className="font-semibold text-2xl md:text-3xl">
                        {aboutPage.storeTitle}
                    </p>
                    <p className="mt-6 text-lg text-gray-700">
                        {aboutPage.storeAbout}
                    </p>
                    {aboutPage.socials.map((social, index) => (
                        <div
                            key={index}
                            className="flex flex-row mt-6 text-lg gap-2"
                        >
                            <p>{social.social}:</p>
                            <a
                                href={social.link}
                                target="_blank"
                                className="text-blue-500 hover:underline"
                            >
                                {social.handle}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
