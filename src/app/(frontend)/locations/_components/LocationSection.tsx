import { Location } from '@/types/locationPage';
import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface LocationSectionProps {
  LocationPage: Location;
}

export default function LocationSection({ LocationPage }: LocationSectionProps) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Image at the top on mobile, right on desktop */}
      <div className="relative w-full h-[300px] md:h-auto order-first md:order-last">
        <Image
          src={LocationPage.storePhoto.src}
          alt={LocationPage.storePhoto.alt}
          fill
          className="rounded-t-2xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full py-6 md:py-12 px-6 md:px-10 rounded-b-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-br-none">
        <div className="flex flex-col gap-3">
          <p className="font-medium text-xl md:text-3xl color-dark-red">{LocationPage.location}</p>
          <p className="font-base md:text-lg flex items-center flex gap-2 leading-tight">
            <PlaceIcon />
            {LocationPage.address}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-medium text-lg md:text-xl mt-6 flex items-center gap-2">
            <ScheduleIcon />
            opening hours:
          </p>
          <div>
            <p className="font-light text-sm lg:text-lg">Monday: {LocationPage.openingHours.monday}</p>
            <p className="font-light text-sm lg:text-lg">Tuesday: {LocationPage.openingHours.tuesday}</p>
            <p className="font-light text-sm lg:text-lg">Wednesday: {LocationPage.openingHours.wednesday}</p>
            <p className="font-light text-sm lg:text-lg">Thursday: {LocationPage.openingHours.thursday}</p>
            <p className="font-light text-sm lg:text-lg">Friday: {LocationPage.openingHours.friday}</p>
            <p className="font-light text-sm lg:text-lg">Saturday: {LocationPage.openingHours.saturday}</p>
            <p className="font-light text-sm lg:text-lg">Sunday: {LocationPage.openingHours.sunday}</p>
          </div>
        </div>

      </div>
    </div>
  );
}