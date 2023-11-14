import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  BackToTop,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
