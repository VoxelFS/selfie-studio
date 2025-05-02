import { revalidateAll } from "@/actions/revalidateRoutes";

export default function RevalidatePage() {
    async function handleRevalidate() {
        "use server";
        await revalidateAll();
    }

    return (
        <form action={handleRevalidate}>
            <div className="p-6">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Revalidate All Routes
                </button>
            </div>
        </form>
    );
}
