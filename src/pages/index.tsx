import SkillsSection from '@/components/organisms/skills/index';
import SocialLinksSection from '@/components/organisms/links/index';
import MainInfo from '@/components/organisms/info';


export default function Home() {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <SkillsSection />

      <div className='px-4'>
        <MainInfo />
      </div>
      
      <SocialLinksSection />
    </div>

  );
}