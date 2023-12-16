import React from "react";

//INTERNAL IMPORT
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  Timeline,
  TokenSale,
} from "../Components/index";
const index = () => {
  return (
    <div className="v_dark">
      <Header />
      <Service />
      <About />
      <TokenSale />
      {/* buyToken={buyToken} tokenSale={tokenSale} */}
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};
export default index;
