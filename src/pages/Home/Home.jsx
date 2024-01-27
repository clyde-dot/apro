import React from "react";

import Banner from "../../components/banner/Banner";
import Steps from "../../components/steps/Steps";
import ProjectList from "../../components/projects/ProjectList";

function Home() {
  return (
    <>
      <Banner />
      <Steps />
      <ProjectList />
    </>
  );
}

export default Home;
