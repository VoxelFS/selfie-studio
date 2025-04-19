'use client'

import { useEffect, useState } from 'react'
import StandardLayout from '@/components/layout/StandardLayout'
import Title from '@/components/Title'
import { getLocationPage } from '@/actions/pages/getLocationPage'
import ParseLocationPage from '@/types/parsers/parseLocationPage'
import LocationSelector from '@/app/(frontend)/locations/_components/LocationSelector'
import LocationSection from '@/app/(frontend)/locations/_components/LocationSection'
import { Location } from '@/types/locationPage'

export default function Page() {
  const [curr, setCurr] = useState(0);
  const [stores, setStores] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStores = async () => {
      const raw = await getLocationPage();
      const parsed = ParseLocationPage(raw);
      if (!parsed) { return; }
      setStores(parsed.stores);
      setLoading(false);
    }
    fetchStores();
  }, [])

  return (
    <StandardLayout>
      <div className="mt-12 mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
          <Title title="our stores" />
          <LocationSelector stores={stores} curr={curr} setCurr={setCurr} />
        </div>
        {loading ? (
          <div>Loading location info...</div>
        ) : (
          <LocationSection LocationPage={stores[curr]} />
        )}
      </div>
    </StandardLayout>
  )
}
