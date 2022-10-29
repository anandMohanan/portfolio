import Navbar from "../components/Navbar";

import Head from "next/head";

const about = () => {
  const year = new Date().getFullYear();
  return (
    <main className="bg-black  w-full h-full font-Source">
      <Navbar />
      <Head>
        <title>About</title>
        <meta name="description" content="Portfolio of Anand Mohanan" />
      </Head>
      {/* <div className="text-center">
        <ul className="list-disc">
          <li className="pb-2">
            Advanced knowledge JavaScript and JavaScript front end frameworks
            like reactjs and nextjs
          </li>
          <li className="pb-2">
            Well familiar with the rust programming language,c ,c++,c#.
          </li>
          <li className="pb-2">Linux system administrator</li>
          <li className="pb-2">Basic knowledge on golang and python.</li>
          <li className="pb-2">Worked with Nodejs and graphql</li>
          <li className="pb-2">
            Have experience working with databases like postregs and mongo db
            and also in ORMS.
          </li>
          <li className="pb-2">Salesforce administrator skills.</li>
        </ul>
      </div> */}
      <section className="text-gray-200">
        <div className="max-w-6xl mx-auto px-5  ">
          <p className="text-lg font-semibold text-center leading-relaxed mx-auto mt-5">
            I am Anand Mohanan currently pursuing my Bachelors degree in
            electronics and communication engineering at saveetha engineering
            college.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-prim inline-flex mb-5"></div>
          </div>
          <div className="text-center mb-20">
            <p className="text-base font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Computing is vast and languages are born almost at any time, I do
              my best to be up to the task in order to meet the needs of my
              customers and to provide help to new developers.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-prim inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap  -mx-4  -mt-4 mb-4 ">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-zinc-800 p-4 transform  -translate-y-6 hover:animate-bounce  ">
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-semibold mb-3 text-prim">
                      Web frontend
                    </h2>
                    <div className="leading-relaxed text-sm text-justify">
                      <ul className="list-disc ml-2 p-2">
                        <li>
                          {" "}
                          Has worked with{" "}
                          <span className="text-prim">javascript</span> and
                          javascript frontend frameworks like{" "}
                          <span className="text-prim">react</span> and{" "}
                          <span className="text-prim">next js</span>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-zinc-800 p-4 transform  -translate-y-6 hover:animate-bounce ">
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-semibold mb-3 text-prim">
                      Web Backend
                    </h2>
                    <div className="leading-relaxed text-sm text-justify">
                      <ul className="list-disc ml-2 p-2">
                        <li>
                          I have worked with{" "}
                          <span className="text-prim">nodejs</span> and{" "}
                          <span className="text-prim">graphql</span>.
                        </li>
                        <li>
                          Have experience working with databases like{" "}
                          <span className="text-prim">postgres</span>
                          and <span className="text-prim">mongo db</span> and
                          also <span className="text-prim">ORMS</span>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-zinc-800 p-4 transform  -translate-y-6 hover:animate-bounce ">
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-semibold mb-3 text-prim ">
                      Coding
                    </h2>
                    <div className="leading-relaxed md:text-base lg:text-base text-sm text-justify">
                      <ul className="list-disc ml-2 p-2 ">
                        <li>
                          Well familiar with the
                          <span className="text-prim">rust</span> programming
                          language,c ,c++,c#.
                        </li>
                        <li>
                          Basic knowledge on{" "}
                          <span className="text-prim">golang</span> and{" "}
                          <span className="text-prim">python</span>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* xl:w-2/4 lg:w-3/4 */}
          <div className="">
            <div className="text-center">
              <h1 className="text-lg leading-relaxed  mx-auto font-semibold mt-4 text-prim">
                Areas of Interest
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-prim inline-flex"></div>
              </div>
              <div className="leading-relaxed text-base font-normal text-center">
                <ul className="p-5 list-none ml-2 text-center">
                  <li>Web development</li>
                  <li>Aws cloud</li>
                  <li>Linux server management</li>
                  <li>Salesforce administrator</li>
                  <li>Api development</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-lg leading-relaxed  mx-auto font-semibold mt-4 text-prim">
                Certifications
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-prim inline-flex"></div>
              </div>
              <div className="sm:text-xs md:text-base ">
                <ul className="md:p-5 p-3">
                  <li>Graph developer associate - Apollo graphql</li>
                  <br />
                  <li>Docker essentials:A developer introduction</li>
                  <br />
                  <li>IBM carbon systems developer essentials - React</li>{" "}
                  <br />
                  <li>NPTEL - An introduction to programming through c++</li>
                  <br />
                  <li>
                    University of michigan Coursera - An introduction to data
                    science in python
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center text-red-200 p-8">
        {" "}
        {year}
        <span className="text-lime-600">©</span> Anand Mohanan
      </footer>
    </main>
  );
};

export default about;
