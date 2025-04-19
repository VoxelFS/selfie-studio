import StandardLayout from '@/components/layout/StandardLayout';
import Title from '@/components/Title';
import { getAboutPage } from '@/actions/pages/getAboutPage'
import parseAboutPage from '@/types/parsers/parseAboutPage'
import AboutUs from '@/app/(frontend)/about/_components/AboutUs'

export default async function Page() {
  const aboutPage = parseAboutPage(await getAboutPage());
  if (!aboutPage) {
    return
  }

  return (
    <>
      <StandardLayout>
        <div className="mt-12 w-fit h-full">
          <Title title={"about us"} />
          <AboutUs aboutPage={aboutPage} />
        </div>
      </StandardLayout>
    </>
  );
}