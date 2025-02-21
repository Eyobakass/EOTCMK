import { useState } from "react";
import {
  PlusCircleIcon,
  LightBulbIcon,
  WrenchIcon,
  InformationCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import {
  BookOpenIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

function AboutUs() {
  const [count, setCount] = useState(0);
  const timelineData = [
    {
      icon: (
        <PlusCircleIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "መንፈሳዊነት",
      description:
        "ኦርቶዶክሳዊነት ርትዕት ሃይማኖት፣ ጽኑ እምነት፣ መልካም ምግባርና መንፈሳዊ እውቀት በአንድነት የተዋሐዱበት፤ አርአያ እግዚአብሔርን አጽንቶ በሐዋርያዊ የሕይወት ተጋድሎ እግዚአብሔርን በግብር ወደ መምሰል የሚታደግበት ፍጹም ሰማያዊ ሕይወት በመሆኑ፤ አባላት በየትኛውም ቦታ፣ ጊዜና ሁኔታ በማሰብ፣ በመናገር እና በመሥራት/በተግባር በሚገለጽ ክርስቲያናዊ ሥነ ምግባር ታንጸው፣ ፍኖተ አበውን ተከትለው፣ በታማኝነት እና በፈሪሐ እግዚአብሔር ቤተ ክርስቲያንን በቅንነት ያገለግላሉ::",
    },
    {
      icon: (
        <WrenchIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "አገልጋይነት",
      description:
        "የማኅበሩ አባላት አገልግሎትን የክርስቲያናዊ ሕይወታቸው መገለጫ አድርገው በመቀበል በበጎ ፈቃድ ሰማያዊውን ክብርና ጸጋ በመሻት፣ ምድራዊ ክብርና ውዳሴ ከንቱን ሳይፈልጉ፣ በትሕትና እና በክርስቲያናዊ ፍቅር በታማኝነት ያገለግላሉ::",
    },
    {
      icon: (
        <LightBulbIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "የሐሳብ መሪነት",
      description:
        "ማኅበሩ ለቤተ ክርስቲያን ዘላቂ አገልግሎት የሚያስፈልጉ፣ ኦርቶዶክሳዊ እሳቤን የተከተሉና ዘመኑን የዋጁ የመሪነት ሐሳቦችን በማፍለቅ ከሚመለከታቸው የቤተ ክርስቲያን መሪዎች ጋር በመመካከር ይሠራል::",
    },
    {
      icon: (
        <InformationCircleIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "ተባባሪነት",
      description:
        "ማኅበሩ የቤተ ክርስቲያን አገልግሎት የሁሉም የቤተ ክርስትያን አካላት የወል ተግባር ነው ብሎ ያምናል:: በመሆኑም እንደየጉዳዩ አግባብነት ካላቸው ባለ ድርሻ እና አጋር አካላት ጋር በመግባባት፣ በመመካከር እና በቅንነት ለተልእኮ አንድነት ብዝኃ ጸጋን በማክበር አብሮ ይሠራል::",
    },
    {
      icon: (
        <BriefcaseIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "ሙያ አክባሪነት",
      description:
        "የማኅበሩ አባላት ባላቸው ልዩ ልዩ ሙያ /ዕውቀት/ ቤተ ክርስቲያንን ለማገልገል የተሰባሰቡ በመሆናቸው፣ በማኅበሩ አሠራሮች ሁሉ ከኦርቶዶክሳዊው ትምህርተ ሃይማኖት ጋር በማይጋጩ በእውነተኛ መረጃ ለሚደገፉ ሙያዊ ምክረ ሐሳቦች ተገቢውን ክብርና ቅድሚያ ይሰጣል:: በቤተ ክርስቲያንም ለመንፈሳዊ እና ለዘመናዊው (አስኳላ) ሙያ ተገቢው ክብር እንዲሰጥ ይሠራል::",
    },
    {
      icon: (
        <BookOpenIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "ምክንያታዊ ሞጋችነት",
      description:
        "ማኅበሩ በእውነተኛ መረጃ ላይ ተመሥርቶ ቤተ ክርስቲያንን ከውስጥም ሆነ ከውጭ የሚፈትኑ አስተሳሰቦችን፣ አሠራሮችን፣ ልማዶችን እና ትርክቶችን በግልጽና በመንፈሳዊ ጥብዓት እና በእውነት እንዲሞገቱና መፍትሔ ላይ እንዲደረስ ይሠራል::",
    },
    {
      icon: (
        <QuestionMarkCircleIcon className="h-16 w-16 rounded-full bg-white p-3 text-[#015896]" />
      ),
      title: "ተጠያቂነት",
      description:
        "የማኅበሩ አገልግሎት ግብ ሰማያዊ ዋጋ ማግኘት ስለሆነ ኀላፊነትን በአግባቡ አለመወጣት በእግዚአብሔር እና በሰዎች ዘንድ የሚያስጠይቅ በመሆኑ በየትኛውም እርከን ላይ ያለ አባል እና አመራር በማኅበሩ አሠራር መሠረት በተሰጠው ኀላፊነት ተጠያቂ ይሆናል፡፡",
    },
  ];
  return (
    <div className="bg-[#015896] pl-[6%] pr-[6%] pb-[6rem] pt-[2rem] text-white">
      <h1 className="text-[2rem] mt-[1rem] "> ስለ ማኅበረ ቅዱሳን መሰረታዊ መረጃዎች</h1>
      <div className="md:flex">
        <main className="md:w-[55vw]">
          <section className="mb-[3rem]">
            <header className="flex mt-[1rem] mb-[1.5rem] ">
              <h2 className="pr-[1rem] text-[1.3rem] font-bold">ስያሜ</h2>
              <span className="block bg-[#5F95BB] h-[1px] w-full mt-[1.3rem]  "></span>
            </header>
            <p className="text-[0.9rem] text-justify leading-relaxed">
              ማኅበረ ቅዱሳን እግዚአብሔር ያከበራቸው የነቢያት፣ የሐዋርያት፣ የጻድቃንና የሰማዕታት በአጠቃላይ የቅዱሳን
              ገድል፣ ትሩፋትና አማላጅነት የሚዘከርበት በመሆኑ ‹‹ማኅበረ ቅዱሳን›› የሚል ስያሜውን አግኝቷል፡፡
            </p>
          </section>
          <section className="mb-[3rem]">
            <header className="flex mt-[1rem] mb-[1rem] ">
              <h2 className="pr-[1rem] text-[1.3rem] whitespace-nowrap font-bold">
                የማኅበሩ ርእይ
              </h2>
              <span className="block bg-[#5F95BB] h-[1px] w-full mt-[1.3rem]  "></span>
            </header>
            <p className="text-[0.9rem] text-justify leading-relaxed">
              ቤተ ክርስቲያን ሁለንተናዊ የመሪነት ሚናዋን ስትወጣ ማየት
            </p>
          </section>
          <section className="mb-[3rem]">
            <header className="flex mt-[1rem] mb-[1rem] ">
              <h2 className="pr-[1rem] text-[1.3rem] font-bold">ተልእኮ</h2>
              <span className="block bg-[#5F95BB] h-[1px] w-full mt-[1.3rem]  "></span>
            </header>
            <p className="text-[0.9rem] text-justify leading-relaxed">
              ለቤተ ክርስቲያን ተልእኮ መሳካት እና ለሕልውናዋ የሚተጋ፣ የተደራጀ ፣ ምሉዕ ኦርቶዶክሳዊ፤ ርቱዕ
              ዘመናዊ፤ ሁለገብ መሪ ትውልድ ማፍራት እና ማሰማራት
            </p>
          </section>
          <section>
            <header className="flex mt-[1rem] mb-[1rem] ">
              <h2 className="pr-[1rem] text-[1.3rem] font-bold">እሴቶች</h2>
              <span className="block bg-[#5F95BB] h-[1px] w-full mt-[1.3rem]  "></span>
            </header>
            <div className="absolute left-6 top-0 w-1 h-full bg-white border-l-4 border-dashed border-white"></div>

            {/* Timeline Items */}
            <div className="space-y-8 pt-[2rem] ">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Icon Wrapper */}
                  <div
                    className={`flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="  ">
                    <h3 className="text-lg font-bold ">
                      {item.title}
                    </h3>
                    <p className="">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-[3rem]">
            <header className="flex mt-[1rem] mb-[1rem] ">
              <h2 className="pr-[1rem] text-[1.3rem] font-bold">ዓላማዎች</h2>
              <span className="block bg-[#5F95BB] h-[1px] w-full mt-[1.3rem]"></span>
            </header>
            <ul className="list-disc pl-5 text-[0.9rem] text-[#ECF0F2]">
              <li className="mb-1 text-justify leading-relaxed">
                የቤተ ክርስቲያን ተቋማዊ አስተዳደር፣ የአሠራር ሥርዐትና አስተሳሰብ፣ በቴክኖሎጂ እና በልዩ ልዩ
                መንገዶች በመደገፍ ዘመኑን ለዋጀ ጠንካራ አገልግሎት ማብቃት፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                የከፍተኛ ትምህርት ተቋማት ተማሪዎችን ሙሉ ሰብእናን የሚገነባ ሥርዐተ ትምህርት በማስተማር ዘመኑን
                የዋጁ ምሉዕ ኦርቶዶክሳዊ የሆኑ በቤተ ክርስቲያን አስተዳደራዊ መዋቅር የሚያገለግሉ እንዲሁም
                በማኅበራዊ፣ በኢኮኖሚያዊ በፖለቲካዊ እና በሀገር አስተዳደር ጉዳዮች መሪ/ንቁ ተሳታፊ አገልጋዮችን
                ማፍራት እና ማሠማራት፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                የተተኪውን ትውልድ ምንጭ ለማጎልበት የሰ/ት/ቤቶችን አቅም በማጠናከር የሕጻናት እና የወጣቶችን
                የተተኪነት ሚና ማሳደግ፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                ኦርቶዶክሳዊ መንፈሳዊነትን በተግባር የሚገልጽ ቤተሰብ እና አንድነቱን የጠበቀ ኦርቶዶክሳዊ ማኅበረሰብ
                በመገንባት የተደራጀ እና የተናበበ አገልግሎት መስጠት፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                በተደራጀ እና ተደራሹን ማእከል ባደረገ መንገድ ስብከተ ወንጌልንና ሐዋርያዊ ተልእኮን ዘርፈ ብዙ በሆኑ
                መንገዶች በመላው ዓለም ማስፋፋት፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                በቤተ ክርስቲያን ላይ የሚነዙትን የርእዮተ ዓለም፣ የሐሰት ትርክቶች እና የአጽራረ ቤተ ክርስቲያንን
                እንቅስቃሴ ጥናት እና ምርምር ላይ ተመርኩዞ መሞገት እና የተሳሳቱትን በማረም፣ በጠንካራ የዕቅበተ
                እምነት አገልግሎት የቤተ ክርስቲያንን ሕልውና ማስጠበቅ፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                በተመረጡ ገዳማት እና አብነት ትምህርት ቤቶች የልኅቀት ማእከል እና የተለየ ክርስቲያናዊ ተልእኮ
                የሚፈጽሙ እንዲሆኑ የሚያስችል ሁለገብ የአእምሮ ልማት ድጋፍ ማድረግ፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                ማኅበሩ ዘመኑን የዋጀ ተቋማዊ የአሠራር ሥርዓት በመዘርጋት ተልእኮውን ማሳካት የሚችልበት አቅም መፍጥር
                ( በአመራር፣ በሰው ኃይል፣ በመንፈሳዊነት፣ በግንኙነት፣ በዕውቀት፣በልማት፣ በፋይናንስ፣ በቴክኖሎጂ)፤
              </li>
              <li className="mb-1 text-justify leading-relaxed">
                ዓለም አቀፍ ግንኙነትና የትብብር አገልግሎትን መርሕ ያደረገ የኦርቶዶክሳውያን ኢኮኖሚያዊ፣ ማኅበራዊና
                ፖለቲካዊ ተሳትፎ ማሳደግ፣
              </li>
            </ul>
          </section>
        </main>
        <aside className="md:ml-auto">
          <figure className="mt-[3rem] mb-[5rem]">
            <img
              src="abune-gorgorios.jpg"
              className="md:w-[28vw] ml-auto mr-auto"
              alt="አቡነ ጎርጎርዮስ ካልዕ"
            />
            <figcaption className="text-center text-[0.8rem] mt-[1rem]">
              አቡነ ጎርጎርዮስ ካልዕ
              <br /> የሸዋ ሊቀ ጳጳስ ፲፱፻፴፪-፲፱፻፹፪ዓ.ም.
            </figcaption>
          </figure>

          <figure className="">
            <img
              src="mk-building1-450x378.jpg"
              className="md:w-[25vw] w-[50vw] ml-auto mr-auto md:ml-auto md:mr-auto "
              alt="የማኅበሩ ህንጻ"
            />
            <figcaption className="text-center text-[0.8rem] mt-[1rem] ">
              የማኅበሩ ህንጻ
            </figcaption>
          </figure>
        </aside>
      </div>
    </div>
  );
}

export default AboutUs;
