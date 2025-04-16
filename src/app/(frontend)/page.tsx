import HomePageLayout from '@/components/layout/HomePageLayout';
import { getHomePage } from '@/actions/pages/getHomePage';
import Image from 'next/image'
import parseHomePage from '@/types/parsers/parseHomePage'

export default async function HomePage() {

  const homePage = parseHomePage(await getHomePage());
  if (!homePage) {
    return
  }
  console.log(homePage);

  return (
    <>
      <HomePageLayout>
        <div className="responsive-fullwidth">
          <img src={homePage.photos[0].src} alt={homePage.photos[0].alt} />
        </div>
      </HomePageLayout>
    </>
  );
}