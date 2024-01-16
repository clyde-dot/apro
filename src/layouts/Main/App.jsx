import React from "react";
import Routers from "../../routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default App;
