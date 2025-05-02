import StandardLayout from "@/components/layout/StandardLayout";
import Title from "@/components/Title";
import ContactForm from "@/app/(frontend)/contact/_componenets/ContactForm";

export default function Page() {
    return (
        <>
            <StandardLayout>
                <div className="mt-12 mb-12 space-y-6">
                    <Title title={"contact us"} />
                    <ContactForm />
                </div>
            </StandardLayout>
        </>
    );
}
