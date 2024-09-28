import React from 'react';
import IconCard from '@/components/atoms/iconCard';
import CentralText from '@/components/atoms/centralSection';

const KnowledgeSection = () => {
  return (
    <div className="w-full pt-7 rounded-md" style={{ backgroundColor: '#F0F0F6' }}>
      <CentralText 
      title="My Knowledge" 
      content="Throughout my career, I've developed a strong expertise in Python, cloud technologies, database management, and modern software architecture. I am always eager to learn, collaborate in teams, and apply my skills to solve real-world challenges with innovative solutions." 
      />
      <div className="grid grid-cols-3 gap-6">
        {/* Cuadros con íconos */}
        <IconCard icon="mdi:lightbulb-on-outline" title="Curiosity" description="Eager to Learn, Continuous Improvement" />
        <IconCard icon="mdi:account-group" title="Teamwork" description="Collaboration, Communication, Leadership" />
        <IconCard icon="mdi:language-python" title="Python" description="Backend, Scripting, Automation" />
        <IconCard icon="mdi:database" title="Postgres" description="Relational Database, SQL" />
        <IconCard icon="mdi:web" title="REST API" description="Web Services, HTTP Protocol" />
        <IconCard icon="mdi:cube-outline" title="Microservices" description="Distributed Systems, Scalable Architecture" />
        <IconCard icon="mdi:kubernetes" title="Kubernetes" description="Container Orchestration, Cloud" />
        <IconCard icon="mdi:brain" title="Programming Skills" description="Problem Solving, Algorithms, Data Structures" />
        <IconCard icon="mdi:cloud" title="Cloud" description="Serverless programming, GCP" />
        <IconCard icon="mdi:chart-line" title="Data Analysis" description="SQL, Pandas, NumPy" />
        <IconCard icon="mdi:vector-square" title="Architecture" description="System Design, Scalable Infrastructure, Patterns" />
      </div>
    </div>
  );
};

export default KnowledgeSection;
