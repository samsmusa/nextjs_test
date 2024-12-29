import Another from "@/app/Another";
import {Hero} from "@/components/home/Hero";
import {Services} from "@/components/home/Services";
import {Portfolio} from "@/components/home/Portfolio";
import {Testimonials} from "@/components/home/Testimonials";
import {Team} from "@/components/home/Team";
import {Newsletter} from "@/components/home/Newsletter";


export default function Home() {
    return (
        <div
            className="bg-secondary">
            <main className="px-48">
                <Hero/>
                <Services/>
                <Portfolio/>
                <Testimonials/>
                <Team/>
                <Newsletter/>
            </main>
        </div>
    );
}
