import StandardLayout from "@/components/layout/StandardLayout";
import Link from "next/link";

export default function NotFound() {
    return (
        <StandardLayout>
            <div className="w-full h-full grid place-items-center text-center">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold opacity-50">
                            page not found (404)
                        </p>
                        <h1 className="text-4xl md:text-5xl font-semibold">
                            that page is not around today :(
                        </h1>
                    </div>
                    <Link
                        href="/"
                        className="px-6 py-1 rounded-full border-2 border-gray-800/20 transition hover:bg-gray-800/5"
                    >
                        back to home
                    </Link>
                </div>
            </div>
        </StandardLayout>
    );
}
