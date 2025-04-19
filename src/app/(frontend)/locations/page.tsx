import StandardLayout from '@/components/layout/StandardLayout'
import ParseLocationPage from '@/types/parsers/parseLocationPage'
import { getLocationPage } from '@/actions/pages/getLocationPage'

export default async function Page() {

  const locationPage = ParseLocationPage(await getLocationPage());

  return (
    <StandardLayout>
      <div>

      </div>
    </StandardLayout>
  );
}