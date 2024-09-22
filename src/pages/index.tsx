import SkillsSection from '@/components/organisms/skills/index';
import SocialLinksSection from '@/components/organisms/links/index';
import MainInfo from '@/components/organisms/info';


export default function Home() {
  return (
    <div className="flex flex-row w-full h-screen">
      {/* Left Section: SkillsSection */}
      <div className="w-1/4 h-full">
        <SkillsSection />
      </div>

      {/* Center Section: MainInfo */}
      <div className="flex-grow h-full px-4">
        <MainInfo />
      </div>

      {/* Right Section: SocialLinksSection (fixed) */}
      <div className="w-1/13 h-full right-0 top-0">
        <SocialLinksSection />
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
