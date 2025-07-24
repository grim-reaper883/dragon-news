import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews/>
        </section>
      </header>

      <nav className="w-11/12 mx-auto py-2">
        <Navbar/>
      </nav>

      <main className="w-11/12 mx-auto mt-5 grid md:grid-cols-12 gap-3 ">
      <aside className="col-span-3"><LeftNavbar/></aside>
      <section className="col-span-6">main content</section>
      <aside className="col-span-3">right navbar</aside>

      </main>

    </div>
  );
};

export default HomeLayout;