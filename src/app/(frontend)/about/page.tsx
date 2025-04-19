import StandardLayout from '@/components/layout/StandardLayout';
import Title from '@/components/Title';
import { getAboutPage } from '@/actions/pages/getAboutPage'
import parseAboutPage from '@/types/parsers/parseAboutPage'

export default async function Page() {
  const aboutPage = parseAboutPage(await getAboutPage());
  if (!aboutPage) {
    return
  }

  return (
    <>
      <StandardLayout>
        <div className="mt-12">
          <Title title={"about us"} />
        </div>
      </StandardLayout>
    </>
  );
}