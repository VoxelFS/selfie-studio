import StandardLayout from '@/components/layout/StandardLayout';
import Title from '@/components/Title';
import { getAboutPage } from '@/actions/pages/getAboutPage'
import parseAboutPage from '@/types/parsers/parseAboutPage'
import AboutUs from '@/app/(frontend)/about/_components/AboutUs'
import Image from 'next/image'
import Carousel from '@/components/Carousel'

export default async function Page() {
  const aboutPage = parseAboutPage(await getAboutPage());
  if (!aboutPage) {
    return
  }

  return (
    <>
      <StandardLayout>
        <div className="mt-12 w-fit mb-12">
          <div className="space-y-6 mb-12">
            <Title title={'about us'} />
            <AboutUs aboutPage={aboutPage} />
          </div>

          <div className="space-y-6">
            <Title title={'store photos'} />
            <div className="w-full rounded-2xl">
              <Carousel autoSlide={true}>
                {aboutPage.storePhotos.map((photo, index) => (
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
        </div>
      </StandardLayout>
    </>
  );
}