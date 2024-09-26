import SkillsSection from '@/components/organisms/skills/index';
import SocialLinksSection from '@/components/organisms/links/index';
import MainInfo from '@/components/organisms/info';


export default function Home() {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <div className="h-screen overflow-y-auto w-[50%]" > {/* Contenedor con scroll independiente */}
        <SkillsSection />
      </div>

      <div className='px-4 overflow-y-auto h-screen'>
        <MainInfo />
      </div>
      
      <SocialLinksSection />
    </div>

  );
}