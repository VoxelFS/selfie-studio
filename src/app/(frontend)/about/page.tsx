import StandardLayout from "@/components/layout/StandardLayout";
import Title from "@/components/Title";
import { getAboutPage } from "@/actions/pages/getAboutPage";
import parseAboutPage from "@/types/parsers/parseAboutPage";
import AboutUs from "@/app/(frontend)/about/_components/AboutUs";
import Image from "next/image";

export default async function Page() {
    const aboutPage = parseAboutPage(await getAboutPage());
    if (!aboutPage) {
        return;
    }

    return (
        <>
            <StandardLayout>
                <div className="mt-12 mb-12 md:mt-24 md:mb-24 flex flex-col gap-6 sm:gap-12">
                    <div className="space-y-6 mb-12">
                        <Title title={"about us"} />
                        <AboutUs aboutPage={aboutPage} />
                    </div>
                    <Title title={"photo layouts"} />
                    <div className="space-y-6 flex justify-center">
                        <Image
                            src="/assets/frames.png"
                            alt="frames"
                            width={550}
                            height={300}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </StandardLayout>
        </>
    );
}
