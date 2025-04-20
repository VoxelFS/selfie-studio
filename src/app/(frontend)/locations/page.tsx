'use client';

import { useEffect, useState } from 'react';
import StandardLayout from '@/components/layout/StandardLayout';
import Title from '@/components/Title';
import { getLocationPage } from '@/actions/pages/getLocationPage';
import ParseLocationPage from '@/types/parsers/parseLocationPage';
import LocationSelector from '@/app/(frontend)/locations/_components/LocationSelector';
import LocationSection from '@/app/(frontend)/locations/_components/LocationSection';
import { ParsedLocationPage } from '@/types/locationPage';
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from '@/components/Carousel';
import Image from 'next/image';

export default function Page() {
  const [curr, setCurr] = useState(0);
  const [stores, setStores] = useState<ParsedLocationPage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStores = async () => {
      const raw = await getLocationPage();
      const parsed = ParseLocationPage(raw);
      if (!parsed) { return; }
      setStores(parsed);
      setLoading(false);

    }
    fetchStores();
  }, [])

  return (
    <StandardLayout>
      {loading || !stores ? (
        <div className="flex justify-center items-center text-white space-x-2 h-[50%]">
          <CircularProgress color="inherit" />
          <p>Loading location info...</p>
        </div>
      ) : (
        <div className="mt-12 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
            <Title title="our stores" />
            <LocationSelector stores={stores.stores} curr={curr} setCurr={setCurr} />
          </div>

          <LocationSection LocationPage={stores.stores[curr]} />
          <div className="space-y-6 mt-12">
            <Title title={'store photos'} />
            <div className="w-full rounded-2xl">
              <Carousel autoSlide={true}>
                {stores.storePhotos.map((photo, index) => (
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
      )}
    </StandardLayout>
  )
}
