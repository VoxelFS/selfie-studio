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
import StorePhotos from '@/app/(frontend)/locations/_components/StorePhotos';

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
        <div className="flex justify-center items-center text-white font-medium space-x-2 h-[50%]">
          <CircularProgress color="inherit" />
          <p>Loading location info...</p>
        </div>
      ) : (
        <div className="mt-12 mb-12 md:mt-24 md:mb-24 flex flex-col gap-6 sm:gap-12">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
              <Title title="our stores" />
              <LocationSelector stores={stores.stores} curr={curr} setCurr={setCurr} />
            </div>

            <LocationSection LocationPage={stores.stores[curr]} />
          </div>

          <StorePhotos stores={stores} />
        </div>
      )}
    </StandardLayout>
  )
}
