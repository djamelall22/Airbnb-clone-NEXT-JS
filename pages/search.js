import { useRouter } from "next/dist/client/router";
import { Navbar, Footer, InfoCard } from "../components";
import { format } from "date-fns";

const Search = ({ searchResult }) => {
  const { long, lat } = searchResult;

  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  //   date format
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Navbar placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main className="flex-grow pt-14 px-6">
        <section className="">
          <p className="text-xs">
            212 stays in · {range} · {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowarp">
            <p className="button">Free cancellation</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Instant Book</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map((item, index) => {
              return <InfoCard key={index} {...item} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return { props: { searchResult } };
}
