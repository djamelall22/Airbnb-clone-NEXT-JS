import Head from "next/head";
import {
  Navbar,
  Hero,
  SmallCard,
  MediumCard,
  LargeCard,
  Footer,
} from "../components";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* explore nearby section */}
        <section className="pt-6">
          <h2 className="capitalize text-4xl font-semibold pb-5">
            explore nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => {
              return <SmallCard key={index} {...item} />;
            })}
          </div>
        </section>

        {/* leave anywhere section */}
        <section>
          <h2 className="capitalize text-4xl font-semibold py-8">
            leave anywhere
          </h2>

          <div className="flex space-x-4 p-3  overflow-scroll scrollbar-hide ">
            {cardsData?.map((card, index) => {
              return <MediumCard {...card} key={index} />;
            })}
          </div>
        </section>

        {/* large Card section */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest outdoors"
          description="Wishlists curated by airbnb"
          textButton="Get inspired"
        />

        {/* footer section */}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
