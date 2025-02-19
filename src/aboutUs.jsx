import { useState } from "react";

function AboutUs() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#015896] pl-[6%] pr-[6%] pb-[2rem] pt-[2rem] text-white">
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
        <aside className="">
          <figure className="center">
            <img
              src="abune-gorgorios.jpg"
              className="md:w-[25vw] ml-auto mr-auto "
              alt="አቡነ ጎርጎርዮስ ካልዕ"
            />
            <figcaption className="">
              አቡነ ጎርጎርዮስ ካልዕ
              <br /> የሸዋ ሊቀ ጳጳስ ፲፱፻፴፪-፲፱፻፹፪ዓ.ም.
            </figcaption>
          </figure>

          <figure className="">
            <img
              src="mk-building1-450x378.jpg"
              className="md:w-[25vw]"
              alt="የማኅበሩ ህንጻ"
            />
            <figcaption className="">የማኅበሩ ህንጻ</figcaption>
          </figure>
        </aside>
      </div>
    </div>
  );
}

export default AboutUs;
