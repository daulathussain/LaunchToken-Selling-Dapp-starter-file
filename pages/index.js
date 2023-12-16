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
    TokenSale
} from "../Components/index";
const index = () => {
  return <div className="v_dark">
    
    <Header
    /*address = {address}
    setAddress={setAddress}
    connectWallet={connectWallet}*/
    />
    <Banner />
    <Service/>
    <About/>
    <TokenSale/>
    <Distribution/>
    <MobileApp/>
    <Team/>
    <Faq/>
    <Contact/>
    <Footer/>
  </div>;

};
export default index;