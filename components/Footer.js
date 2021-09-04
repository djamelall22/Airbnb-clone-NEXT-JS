const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 py-14 mx-auto  text-gray-600 max-w-7xl px-8 sm:px-16">
        <div className="space-y-4 text-xs text-gray-800 ">
          <h5 className="font-bold uppercase">About</h5>
          <p>How Airbnb works</p>
          <p>Newsroom {new Date().getFullYear()}</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
          <p>HotelTonight</p>
          <p>Airbnb for Work</p>
          <p>Made possible by Hosts</p>
          <p>Careers</p>
          <p>Founders' Letter</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="uppercase font-bold ">Community</h5>
          <p>Diversity & Belonging</p>
          <p>Accessibility</p>
          <p>Airbnb Associates</p>
          <p>Host refugees</p>
          <p>Guest Referrals</p>
          <p>Airbnb.org</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold uppercase">Host</h5>
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
          <p>Community Centre</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold uppercase">Support</h5>
          <p> Our COVID-19 Response</p>
          <p>Help Centre</p>
          <p>Cancellation</p>
          <p>options</p>
          <p>Neighbourhood</p>
          <p>Support</p>
          <p>Trust & Safety</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
