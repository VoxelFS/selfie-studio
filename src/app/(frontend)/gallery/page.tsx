import StandardLayout from '@/components/layout/StandardLayout';
import Title from '@/components/Title';
import ParseGalleryPage from '@/types/parsers/parseGalleryPage';
import { getGalleryPage } from '@/actions/pages/getGalleryPage';
import ImageGallery from '@/app/(frontend)/gallery/_components/ImageGallery';

export default async function Page() {

  const galleryPage = ParseGalleryPage(await getGalleryPage());
  if (!galleryPage) {
    return;
  }

  return (
    <StandardLayout>
      <div className="mt-12 space-y-6 mb-12">
        <Title title={"gallery"} />
        <ImageGallery galleryPage={galleryPage} />
      </div>
    </StandardLayout>
  );
}