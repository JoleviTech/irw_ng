import { WorkWithUsBtn } from "./buttons";

// export const LandingPageHero = () => {
//   return (
//     <div className="container-fluid LandingPageHeroBg d-flex align-items-center">
//       {/* <div className="gradientBg overlayBg"></div> */}
//       <div className="overlayBg"></div>
//       <div className="row justify-content-start">
//         <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5 ms-2">
//           <h1 className="text-white d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite bigFont my-lg-5">
//             We help lift all the heavy limbs of your business so you can focus
//             on accelerating growth
//           </h1>
//           <h3 className="text-white d-xs-block d-sm-block d-md-block d-lg-none textWhite mediumFont">
//             We help lift all the heavy limbs of your business so you can focus
//             on accelerating growth
//           </h3>
//           <p className="mt-2 textWhite smallFont"></p>
//           <div className="">
//             <WorkWithUsBtn />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export const LandingPageHero = () => {
  return (
    <div className="container-fluid LandingPageHeroBg d-flex flex-column justify-content-end">
      <div className="row w-100 mx-auto px-3 pb-5">
        <div className="col-lg-8 col-md-8 col-sm-12">
          {/* For larger screens a larger heading and for mobile a smaller one */}
          <h1 className="text-white d-none d-md-block">
            We help lift all the heavy limbs of your business so you can focus
            on accelerating growth
          </h1>
          <h3 className="text-white d-block d-md-none">
            We help lift all the heavy limbs of your business so you can focus
            on accelerating growth
          </h3>
          <WorkWithUsBtn />
        </div>
      </div>
    </div>
  );
};

export const AboutPageHero = () => {
  return (
    <div className="container-fluid AboutPageHeroBg d-flex align-items-center">
      {/* <div className="container-fluid AboutPageHeroBgg d-flex pt-3 pb-4"> */}
      <div className="gradientBg overlayBg"></div>
      <div className="row justify-content-start">
        <div className="col-lg-7 col-md-8 col-sm-12 px-lg-5 ms-2">
          <h2 className="text-white d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite bigFont">
            We are a happy house that is changing the narrative of many
            businesses
          </h2>
          <h3 className="text-white d-xs-block d-sm-block d-md-block d-lg-none textWhite mediumFont">
            We are a happy house that is changing the narrative of many
            businesses
          </h3>
        </div>
        <div className="ms-lg-5">{/* <WorkWithUsBtnn /> */}</div>
      </div>
      {/* </div> */}
    </div>
  );
};
export const JobsPreviewHero = () => {
  return (
    <div className="container-fluid JobsPrevHeroBg d-flex align-items-center">
      {/* <div className="container-fluid JobsPrevHeroBgg d-flex pt-3 pb-4"> */}
      <div className="gradientBg overlayBg"></div>
      <div className="row justify-content-start">
        <div className="col-lg-7 col-md-8 col-sm-12 px-lg-5 ms-2">
          <h2 className="text-white d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite bigFont">
            We are a happy house that is changing the narrative of many
            businesses
          </h2>
          <h3 className="text-white d-xs-block d-sm-block d-md-block d-lg-none textWhite mediumFont">
            We are a happy house that is changing the narrative of many
            businesses
          </h3>
        </div>
        <div className="ms-lg-5">{/* <WorkWithUsBtnn /> */}</div>
      </div>
      {/* </div> */}
    </div>
  );
};
