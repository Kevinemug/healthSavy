import React from "react";
import Footer from "./Footer";
import Hero from "./hero";
import HospitalCards from "./hospitalCards";
import Search from "./search";
const Hospital = () => {
  return (
    <>
      <Hero
        title="Hospitals"
        description="Search For Hospitals Nearby"
        image="https://as1.ftcdn.net/v2/jpg/02/81/21/10/1000_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg"
      />
      <Search
        facility="Hospitals"
        speciality="Specialized In Your medical condition"
        search="search by medical condition"
      />
      <p className="topSearches">Top Seaches</p>

      <div className="hosCardsContainer">
        <HospitalCards
          hospitalName="H hospital"
          hospitalKm={3}
          hospitalImg="https://assets.contenthub.wolterskluwer.com/api/public/content/7f716e7ef5924f299571642e9e163166"
        />
        <HospitalCards
          hospitalName="Hope hospital"
          hospitalKm={2}
          hospitalImg="https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg"
        />
        <HospitalCards
          hospitalName="M hospital"
          hospitalKm={1}
          hospitalImg="https://www.mtxcontracts.co.uk/wp-content/uploads/2022/07/John-Radcliffe-Hospital_External.jpg"
        />
        <HospitalCards
          hospitalName="Rise hospital"
          hospitalKm={4}
          hospitalImg="https://cdn.systematic.com/media/g0sj1tbg/hospital-building-001-global.jpg?mode=crop&width=1200&height=630&center="
        />
        <HospitalCards
          hospitalName="Love hospital"
          hospitalKm={7}
          hospitalImg="https://ccountync.com/wp-content/uploads/2020/02/Carteret-Health-Care-Morehead-1.jpg"
        />
        <HospitalCards
          hospitalName="GHK hospital"
          hospitalKm={6}
          hospitalImg="http://whitearkitekter.com/wp-content/uploads/2017/10/Nya-Karolinska-S-White-Arkitekter-c-16.9.jpg"
        />
      </div>
      <Footer />
    </>
  );
};

export default Hospital;
