import React from "react";

const projects = [
  {
    id: 1,
    img: "http://store-images.s-microsoft.com/image/apps.8658.13545484198696892.53b0f68c-4cde-4d75-937c-2296c5434a8b.212502a8-f59e-4287-9824-3b9edb3896eb",
    title: "Calculator",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    language: ["react", "redux", "javascript"],
    links: ["Vercel", "Github"],
    src: [
      "https://fsweb-s10g1-reducer-calculator-one.vercel.app/",
      "https://github.com/taylanacikgoz/fsweb-s10g1-reducer-calculator",
    ],
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/7b/86/1f/7b861f7b7cf756a62ac1423fa9975cf3.jpg",
    title: "Nasa Daily Photo",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    language: ["react", "redux", "javascript"],
    links: ["Vercel", "Github"],
    src: [
      "https://nasa-daily-photo-pearl.vercel.app/",
      "https://github.com/taylanacikgoz/FSWeb-S6G3-Nasa",
    ],
  },
  {
    id: 3,
    img: "https://www.harvardsquare.com/wp-content/uploads/2019/07/Harvard-Book-Store-bicycle-300x300.jpg",
    title: "Shopping Chart",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    language: ["react", "redux", "javascript"],
    links: ["Vercel", "Github"],
    src: [
      "https://shopping-cart-workintech.vercel.app/",
      "https://github.com/taylanacikgoz/fsweb-s11g1-shopping-cart",
    ],
  },
  {
    id: 4,
    img: "https://phantompilots.com/data/xfmg/thumbnail/0/395-dc083e8119d546f29cb3992c5d681968.jpg?1539009598",
    title: "Random Joke API",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    language: ["react", "redux", "javascript"],
    links: ["Vercel", "Github"],
    src: [
      "https://thunk-and-apis-xi.vercel.app/",
      "https://github.com/taylanacikgoz/fsweb-s10g4-thunk-and-apis",
    ],
  },
];

function Project() {
  return (
    <div className="flex flex-col gap-7 mx-auto px-6 md:px-12 lg:px-24 xl:px-60 2xl:px-80 py-20 bg-[#CBF281]">
      <h2 className="text-[#4731D3] font-bold text-5xl">Projects</h2>
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4 shadow-xl bg-white rounded-xl mt-7"
        >
          <div className="box-border flex-none flex-grow-0 order-0 w-full md:w-5/12">
            <img
              src={proj.img}
              alt="calculator app"
              className="w-full h-full md:w-full md:h-full rounded-l-xl"
            ></img>
          </div>

          <div className="px-4 flex flex-col text-xs md:text-left md:text-base items-start py-2 md:py-14 md:gap-5 gap-2 ml-2 order-1 flex-grow md:pl-4 w-full md:w-3/5">
            <h3 className="text-[#4338CA] text-2xl md:text-5xl font-bold">
              {proj.title}
            </h3>
            <p className="text-base">{proj.paragraph}</p>
            <div className="flex flex-wrap gap-1 text-white">
              {proj.language.map((lang) => (
                <h6
                  key={lang}
                  className="flex flex-row items-start border border-solid border-blue-700 rounded-full px-1 md:px-2 md:py-1 bg-[#4731D3]"
                >
                  {lang}
                </h6>
              ))}
            </div>
            <nav className="flex flex-row md:gap-6 underline items-start gap-3 text-base font-medium  text-[#120B39]">
              <a href={proj.src[0]} className="md:hover:text-blue-500 ">
                {proj.links[0]}
              </a>
              <a href={proj.src[1]} className="md:hover:text-green-300">
                {proj.links[1]}
              </a>
            </nav>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Project;
