import React from "react";

const Services = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4 xl:p-8">
        <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
          {/* Content */}
          <div className="p-8 xl:p-5 flex flex-col justify-center">
            <h2 className="xl:text-5xl font-bold xl:font-[Bahnschrift] xl:leading-[64px] xl:tracking-[-0.02em]
             md:font-[Abhaya Libre] md:text-[32px] md:leading-[42px] md:tracking-[-0.02em]
             font-[Abhaya Libre] text-[32px] leading-[42px] tracking-[-0.02em]">
              Why Choose Our <br />
              Crypto Solutions?
            </h2>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-7">
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-[Abhaya Libre] font-semibold text-gray-900 mb-2 text-[22px] leading-[30px] tracking-[-0.02em]">
                  DeFi Cost Efficiency
                </h3>
                <p className="text-gray-600 text-sm">
                  Cut overheads by up to 40% through decentralized finance
                  tools—no middlemen, no hidden fees.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-[Abhaya Libre] font-semibold text-gray-900 mb-2 text-[22px] leading-[30px] tracking-[-0.02em]">
                  Web3 Talent Access
                </h3>
                <p className="text-gray-600 text-sm">
                  Leverage top-tier blockchain developers, smart contract
                  auditors, and crypto strategists globally.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm col-span-1 sm:col-span-2">
                <h3 className="text-lg font-[Abhaya Libre] font-semibold text-gray-900 mb-2 text-[22px] leading-[30px] tracking-[-0.02em]">
                  Always-On Blockchain Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Our decentralized teams operate 24/7 across time zones,
                  ensuring your crypto project never sleeps.
                </p>
              </div>
            </div>

            {/* Impact Statement */}
            <p className="text-gray-600 text-sm mt-7">
              Our partners have reported 30% faster token deployments and a 15%
              boost in TVL within 6 months of onboarding.
            </p>
          </div>

          {/* Image */}
          <div className="relative bg-black h-[600px] w-full">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/herovid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
