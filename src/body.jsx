import { useState, useEffect } from 'react'
function Body() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="pl-[7%] pr-[7%] bg-[#ECF0F2]" id="top">
      <h1 className="text-center pt-[2rem] pb-[1rem] text-xl text-gray-800">
        ዜናዎች፣ ወቅታዊ ክንውኖች እና ልዩ ልዩ ይዘቶች
        <span className="block w-[60%] bg-gray-400 h-[1px] ml-auto mr-auto mb-[3rem] mt-[3rem]"></span>
      </h1>
      <main className="md:w-[55vw]">
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">አገልግሎቴን አከብራለሁ!</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ሕንጻ ቤተ ክርስቲያንን እንዲሁም መንፈሳዊ ተቋማትን ለመገንባት ከሚቻልባቸው መሠረታዊ ተግባራቶች የምሕንድስና
            ሙያ ቀደምት ተጠቃሽ እንደመሆኑ በሀገራችን እንዲሁም በውጭ ሀገር ለሚገኙት የቤተ ክርስቲያናትና አድባራት
            ግንባትና መልሶ ማቋቋም ሥራ መሐንዲሶች እጅጉን ተፈላጊዎች ናቸው፡፡ በተለይም በሀገራችን ውስጥ ያሉ ቤተ
            ክርስቲያናት በጠላቶች ሥውር ደባና ጥቃት፣ ምዝበራ፣ ቃጠሎ እንዲሁም መራቆት የደረሳበቸው በመሆኑ እነዚህን
            ቤተ ክርስቲያናት መልሶ ለመንባትና አዳዲሶችን ለማነጽ በታቀደው ሥራ መሠረት የማኅበረ ቅዱሳን የምሕንድስና
            ባለሙያዎች ሰፊ አገልግሎት አበርክተዋል፡፡
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            የኢንፎርሜሽን ኮሚዩኒኬሽን ቴክኖሎጂን በማበልጸግም ለቤተ ክርስቲያን አገልግሎት የሚውሉ በርካታ ድረ ገጾችን
            አዘጋጅቶ በማቅረብ ለስብከተ ወንጌል ተደራሽነትና ለመንፈሳዊ አገልግሎት ጥንካሬ ለመጨመር ጉልህ አስተዋጽኦ
            እያደረገ ነው፡፡ በመደበኛና በኢ-መደበኛ ዳታቤዝና ሲስተም ዴቨሎፕመንት ባለሙያ በሆኑ አገልጋዮች በመታገዝ
            ከተካተቱት ዋና ተግባራት በጥቅል ሲገለጽ የኮምፒዩተር ሲስተም እና የመረጃ ቋት ፍሎጎቶች ላይ ተስማሚ
            ቴክኖሎጂ በመጠቆም፣ በማበልጸግ እና ለብልሽቶች እንዲሁም ለጥያቄዎች አፋጣኝ ምላሽ ይሰጣል፡፡
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ማኅበራዊ አገልግሎትን በተመለከተ ለምእመናን በልዩ ልዩ መንገዶች ግንዛቤ በመስጠት የማኅበራዊ አገልግሎት
            ተሳትፏቸውን ያሳድጋል:: ኦርቶዶክሳዊያን በማኅበራዊ አገልግሎት ያላቸው ተሳትፎ እንዲያድግ ስልት ቀይሶ
            ይተገብራል፤ የከፍተኛ ትምህረት ተቋማት ኦርቶዶክሳዊያን ተማሪዎች በማኅበራዊ፣ በሥራ ፈጠራና በኢኮኖሚ ተጽእኖ
            ፈጣሪ የሚሆኑበትን ትምህርት ክፍል እንዲመርጡ የተለያዩ ግንዛቤ እና ሥልጠና ይሰጣል::
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">አገልግሎቴን አከብራለሁ!</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ቤተ ክርስቲያን በክርስቶስ ክርስቲያን ለተባልን ሁሉ መሰብሰቢያችን በመሆኗ ቅድስት ቤታችንን ልናንጽና
            ልንጠብቅ እንደሚገባ ቅዱስ ቃሉ እንዲህ ሲል አስተምሮናል፡ ‹‹ቤቴንም ሥሩ፡፡›› የእግዚአብሔር ቤት ቅድስናው
            ተጠብቆና ሥርዓቱ ሳይፋለስ ለሕዝበ ክርስቲያኑ አገልግሎት እንዲሰጥ ለማድረግም ጌታችን ኢየሱስ ክርስቶስ በደሙ
            ዋጅቶ የመሠረታት ቅድስት ቤቱን በአምሳለ ግብሩ ተምሳሌት ሕንጻ ቤተ ክርስቲያንን እናንጻለን፡፡ የኦርቶዶክስ
            ተዋሕዶ ቤተ ክርስቲያናችንን የመገንባት ወይም የማስገንባት ሥራን የማካነወን ተልእኮ ማኅበረ ቅዱሳን ሥራዬ
            ብሎ የያዘው ተግዳሮት ነው፡፡ ማኅበሩ ለምእመናንና ለአብያተ ክርስቲያናት የሙያ አገልግሎት እንዲሰጥ ዕቅድና
            ስትራቴጂ በማውጣት በተለይም በገጠር ያሉ አብያተ ቤተ ክርስቲያናትንና ሕንጻ ግንባት ያንጻል፤ ያሳንጻል፡፡
            (ሐጌ.፩፥፰)
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">“ስለ ምን ጾምን?” (ኢሳ.፶፰፥፫)</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            የነነዌ ከተማ ሰዎች ኃጢአት በትንቢተ ዮናስ ውስጥ አንድ ሁለት ተብሎ አልተገለጸም፤ በጥቅሉ “ተነሥተህ
            ወደዚያች ወደ ታላቂቱ ከተማ ወደ ነነዌ ሂድ፥ ክፉታቸውም ወደ ፊቴ ወጥቶአልና በእርስዋ ላይ ስበክ” ተብሎ
            በእግዚአብሔር ከመገለጹ በቀር አልተዘረዘረም። (ዮናስ ፩፥፪) ሆኖም ክፉታቸው ወደ ፊቴ ወጥቶአልና የሚለው
            የልዑል አምላክ ቃል የኃጢአታቸውን ታላቅነት ያመለክታል። ኃጢአታቸው በዮናስ መጽሐፍ ውስጥ አልተዘረዘረም
            አልን እንጂ በሌሎቹ መጻሕፍት ውስጥ ግን ተዘርዝሯል። ለምሳሌ ነቢዩ ናሆም የነነዌ ኃጢአት ምን ምን
            እንደነበረ ገልጿል። እነዚህም፡-
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">ወርኃ የካቲት</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን አስተምህሮ ስድስተኛው ወር “የካቲት” ተብሎ ይታወቃል፡፡ አለቃ
            ኪዳነ ወልድ ክፍሌ በመዝገበ ቃላት መጽሐፋቸው ውስጥ የዚህን ወር ቃል “ከተተ” ከሚለው ግስ ከወጣው “ከቲት፣
            ከቲቶት” ከሚል ንኡስ አንቀጽ የተገኘ ሲሆን በቁሙ “የወር ስም፣ ስድስተኛ ወር፣ የመከር ጫፍ (መካተቻ)፣
            የበልግ መባቻ ማለት ነው” ብለው ተርጉመውታል። (ኪዳነ ወልድ ክፍሌ፣ ገጽ ፭፻፲፭)
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ሌሎችም ጸሐፍያን “የካቲት” የሚለው ቃል “ከቲት፣ ከቲቶት” ከሚል የግእዝ ንኡስ አንቀጽ የተገኘ ሲሆን
            “መውቃት፣ ማምረት፣ መሰብሰብ፣ መክተት” የሚል ትርጉም ይኖረዋል ካሉ በኋላ ይህንም ስም ያገኘው የካቲት ወር
            አዝመራ (ምርት) ወደ ጎተራ የሚከተትበት ወራት በመሆኑ ነው ብለዋል። (ኅብረ ኢትዮጵያ፣ ከቴዎድሮስ በየነ፣
            አዲስ አበባ ፲፱፻፺፱ ዓ.ም፡፡ አንድሮ ሜዳ፣ ገጽ ፫፻፺፭፣ አቡሻክር የጊዜ ቀመር፣ በኢንጅነር አብርሃም
            አብደላ ገጽ ፵፱) በቁጥር ትምህርት አንዱ ወር በባተበት የትኛው ወር እንደሚብት በቃል የሚጠና ሲሆን የካቲት
            በባተችበትም ጳጕሜን እንዲሁም የካቲት በባተበት ሳኒታ ሰኔ ይብታል፡፡
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <img
            src="አቡነ-ማትያስ.jpg"
            alt="አቡነ-ማትያስ"
            className="rounded-lg h-[8rem]"
          />
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">
              የብፁዕ ወቅዱስ አቡነ ማትያስ ቀዳማዊ ፓትርያርክ ርእሰ ሊቃነ ጳጳሳት ዘኢትዮጵያ ሊቀ ጳጳስ ዘአክሱም
              ወእጨጌ ዘመንበረ ተክለ ሃይማኖት የ፳፻፲፯ ዓ.ም የጾመ ነነዌ የሰላምና የጸሎት ዐዋጅ መግለጫ
            </a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ‹‹ቀድሱ ጾመ ወስብኩ ምህላ አስተጋብኡ ሕዝበ ሊቃውንተ ሕዝብ፤ ጾምን ቀድሱ፣ ጉባኤውንም ዐውጁ፤
            ሽማግሌዎችንና በምድር የሚኖሩትን ሁሉ ወደ አምላካችሁ ወደ እግዚአብሔር ቤት ሰብስቡ፤ ወደ እግዚአብሔርም
            ጩኹ።›› (ኢዩ.፩÷፲፬)
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">‹‹እግዚአብሔር ፍቅር ነው›› (፩ኛ ዮሐ.፫፥፱)</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ውድ የእግዚአብሔር ልጆች! እንዴት አላችሁ? የዓመቱ አጋማሽ ፈተናስ እንዴት ነበር? መቼም በርትቶ ሲማርና
            ሲያጠና ለነበረ ተማሪ ፈተናው እንደሚቀለው ተስፋ አለን፤ ጎበዝ ተማሪ የሚያጠናው ፈተና ሲደርስ ብቻ
            አይደለምና! መምህራን ሲያስተምሩ ተግቶ በአግባቡ የሚከታተል ያልገባውን የሚጠይቅ፣ መጻሕፍትን የሚያነብ
            የበለጠ ዕውቀት ለማግኘት ተግቶ የሚያጠና ነው!
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ታዲያ እንደዚህ አድርጎ ትምህርቱን የሚከታተል ጥሩ ውጤትን ያመጣል! እንግዲህ በተለያየ ምክንያት በግማሽ
            ዓመቱ ፈተና በደንብ ያልሠራችሁ በቀሪው የትምህርት ዘመን በርትታችሁ በማጥናት ዕውቀትን እንድታገኙና ጥሩ
            ውጤት እንድታመጡ አደራ እንላለን!
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ልጆች! ሌላው ደግሞ በመንፈሳዊ ሕይወታችሁም ጎበዞች መሆን አለባችሁ! ቤተ ክርስቲያን በመሄድ ተማሩ!
            መልካም! ባለፈው ትምህርታችን ‹‹ተስፋ›› በሚል ርእስ ስለ ተስፋ ተምረናል፤ ዛሬ ደግሞ ስለ ፍቅር
            እንማራለን!
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">ጋብቻና ጾታ</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            የክርስቲያናዊ ጋብቻ መነሻውም መድረሻውም እግዚአብሔር ነው፡፡ በቅዱስ ጋብቻ ሁለቱ ወንድና ሴት በቅዱስ
            ቊርባን አንድ ይሆናሉ፡፡ መንግሥቱን ከሚያወርሰን ጋር ኪዳን ሳንገባ ጋብቻን ብንጀምር እንደ ብሉይ ኪዳን
            ዓለማዊ፣ ምድራዊ፣ ሥጋዊ ልጅ ለመውለድ፣ የፍትወት ፈቃድን ለመፈጸም ወይም ለመረዳዳት ብቻ ዓለማውን ያደረገ
            ይሆናል፡፡ በክርስቲያናዊ ጋብቻ ግን እነዚህ ራሱ እግዚአብሔር የሚሰጠን ስጦታዎች ሲሆኑ በእምነታችን ጸንተን
            በበጐ ምግባር ከኖርን ደግሞ ሰማያዊ መንግሥቱን እንወርሳለን፡፡
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">አገልግሎቴን አከብራለሁ!</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ማኅበሩ መንፈሳዊ አገልግሎት ተደራሽ ከማድረጉም በላይ አዳዲሲ አማንያኑ እንዲሁም ምእመኑ በሃይማኖት ጸንተው
            እንዲኖሩ ለማስቻል የተለያዩ መርሐ ግብራትንና ሥልጠና በማዘጋጀትና ተሳትፎአቸውን በመጨመር ያግዛቸዋል፡፡
            በርካታ ኢ-መደበኛ አባላትንም በዚሁ የተነሣ ማፍራት በመቻሉ አገልግሎቱ ከጊዜ ወደ ጊዜ ጨምሯል፡፡
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>
          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <img
            src="አስተርዮ-ማርያም-2.jpg"
            alt="አስተርዮ-ማርያም"
            className="rounded-lg h-[8rem]"
          />
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">‹‹መልአከ ሞት አልነካኝም፤ የጨለማው አበጋዝም አልደረሰብኝም›› (ድርሳነ ማርያም)</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            አብዛኛው ሰው ሲሞት ጻዕረ ሞት አለበት፤ ማቃሰት፣ ማጣጣር፣ የሞትን አስፈሪ ድምፅ መስማትም የተለመደ ነው፡፡
            በእመቤታችን ቅድስት ድንግል ማርያም ግን ይህ ሁሉ የለባትም፡፡ ቅዱስ ቶማስ ስለ አሟሟቷ ጠይቋት ነበር፡፡
            በዚህ አጭር ጽሑፍ ለመግለጽ አዳጋች ሆኖ እንጂ በርካታ ነገሮችን ነግራዋለች፡፡ እናም ‹‹የሞት ጻዕር እንዴት
            አመመሽ›› ይላታል፡፡ እርሷም ‹‹መልአከ ሞት አልነካኝም፤ የጨለማው አበጋዝም አልደረሰብኝም፤ ነፍሴ ያለ
            ድካም /ሕማም/ በደስታ ተለየች….›› በማለት ያለ ሕማም ያለ ድካም፣ ያለ ጭንቅ ያለ ጻዕርና ጋር በደስታ
            ነፍሷን ከሥጋዋ እንደተለየች ነግራዋለች፡፡ (ድርሳነ ማርያም ገጽ ፻፴፩)
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>

          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>
        <section className="pb-[1rem]">
          <h2 className=" font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
            <a href="#">‹‹…እምነት ተስፋ ፍቅር እነዚህ ሦስቱ ጸንተው ይኖራሉ…›› (፩ኛ ቆሮ.፲፫፥፲፫)</a>
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            ውድ የእግዚአብሔር ልጆች! እንዴት አላችሁልን? የጌታችን የመድኃኒታችን የኢየሱስ ክርስቶስ ልደት እንዲሁም
            በዓለ ጥምቀቱን እንዴት አክብራችሁ አሰለፋችሁ? እነዚህ በዓላት ከጌታችን ዐበይት በዓላት መካከል የደስታ
            በዓላችን ናቸው፡፡ ዘመናዊ ትምህርትስ እንዴት ነው? እየበረታችሁ እንደሆነ ተስፋችን ነው!
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
            የግማሽ ዓመት ትምህርት ተጠናቆ ፈተና እየተፈተናችሁ ያላችሁ እንዲሁም ደግሞ ለፈተና ዝግጁ የሆናችሁ ተማሪዎቸ
            አላችሁ፤ ትምህርት ከተጀመረ ጊዜ አንሥቶ መምህራን ሲያስተምሩ በደንብ የተከታተለ፣ የተሰጠውን የቤት ሥራ
            የሠራ እንዲሁም ያልገባውን እየጠየቀ የተረዳ፣ ያጠና ተማሪ ፈተናውን በቀላል ይሠራዋል! እናንተም እንደዚህ
            እንደምትሆኑ ተስፋችን እሙን (የታመነ) ነው፡፡ በርቱና ተማሩ! ፈተናውንም በተረጋጋ ሁኔታ ሆናችሁ ሥሩ፡፡
            መልካም! ለዛሬ “ተስፋ” በሚል ርእስ እንማራለን፡፡
          </p>
          <a
            className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
            href="#"
          >
            Read more<span>&gt;</span>
          </a>

          <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
        </section>

        <nav className="flex justify-between pb-[1rem]">
          <ul className="flex">
            <a
              className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center mr-1"
              href="#"
            >
              1
            </a>
            <a
              className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
              href="#"
            >
              2
            </a>
            <a
              className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
              href="#"
            >
              3
            </a>
            <a
              className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
              href="#"
            >
              <span>&gt;</span>
            </a>
            <a
              className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
              href="#"
            >
              <span>&gt;</span>
              <span>&gt;</span>
            </a>
          </ul>
          <p className="text-[0.7rem] text-gray-500 font-[Georgia]">
            Page 1 of 238
          </p>
        </nav>
      </main>
      <aside></aside>
      
    </div>
  );
}

export default Body