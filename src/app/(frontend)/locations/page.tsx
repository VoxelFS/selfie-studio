import StandardLayout from "@/components/layout/StandardLayout";
import { getLocationPage } from "@/actions/pages/getLocationPage";
import ParseLocationPage from "@/types/parsers/parseLocationPage";
import StorePhotos from "@/app/(frontend)/locations/_components/StorePhotos";
import SelectCom from "./_components/SelectCom";

export default async function Page() {
    const raw = await getLocationPage();
    const stores = ParseLocationPage(raw);
    if (!stores) return;

    return (
        <StandardLayout>
            <div className="mt-12 mb-12 md:mt-24 md:mb-24 flex flex-col gap-6 sm:gap-12">
                <SelectCom stores={stores} />

                <StorePhotos stores={stores} />
            </div>
        </StandardLayout>
    );
}
