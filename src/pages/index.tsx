import SkillsSection from '@/components/organisms/skills/index';
import SocialLinksSection from '@/components/organisms/links/index';
import MainInfo from '@/components/organisms/info';


export default function Home() {
  return (
    <div className="flex flex-row w-full h-screen">
      {/* Left Section: SkillsSection */}
      <div className="w-[650px]">
        <SkillsSection />
      </div>

      {/* Center Section: MainInfo */}
      <div className="flex-grow h-full px-4">
        <MainInfo />
      </div>

      {/* Right Section: SocialLinksSection */}
      <div className="w-[14%] h-full relative">
        <div className="fixed h-full">
          <SocialLinksSection />
        </div>
      </div>
    </div>
  );
}



// export default function Home() {
//   return (
//     <div className="flex flex-row w-full h-screen">
//       {/* Left Section: SkillsSection */}
//       <div className="w-1/4 h-full">
//         <SkillsSection />
//       </div>

//       {/* Center Section: MainInfo */}
//       <div className="flex-grow h-full">
//         <MainInfo />
//       </div>

//       {/* Right Section: SocialLinksSection */}
//       <div className="w-1/12 h-full">
//         <SocialLinksSection />
//       </div>
//     </div>
//   );
// }
