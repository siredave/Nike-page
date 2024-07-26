import { Nav } from "./components/Nav";
import { CustomersReview, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections";

export default function App() {
  return (
    <main className="relative">
        <Nav/>
          <section className="xl:padding-1 wide:padding-r padding-b"> <Hero/> </section>
          <section className="padding"> <PopularProducts/> </section>
          <section className="padding"> <SuperQuality/> </section>
          <section className="padding paddng-x py-10"> <Services/> </section>
          <section className="padding"> <SpecialOffers/> </section>
          <section className="bg-pale-blue padding"> <CustomersReview/> </section>
          <section className="padding-x sm:py-32 py-16 w-full"> <Subscribe/> </section>
          <section className="bg-black padding-x padding-t pb-8 text-white"> <Footer/> </section>

    </main>
  )
}