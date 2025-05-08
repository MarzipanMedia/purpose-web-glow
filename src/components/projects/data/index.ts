
import { sydneyJewishMuseum } from './sydneyJewishMuseum';
import { jarli } from './jarli';
import { royalBotanicGarden } from './royalBotanicGarden';
import { willow } from './willow';
import { popology } from './popology';
import { toasty } from './toasty';
import { museumsOfHistoryNSW } from './museumsOfHistoryNSW';
import { ProcessStep } from '../projectsData';

export * from './types';
export { ProjectData, VideoData } from '../projectsData';

// Export the combined projects array
export const projects = [
  sydneyJewishMuseum,
  jarli,
  royalBotanicGarden,
  willow,
  popology,
  toasty,
  museumsOfHistoryNSW
];

// Re-export the process steps
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Sustainability Audit",
    description: "We assess your current digital footprint and identify opportunities for sustainable improvements."
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "We create a roadmap for your digital presence that balances business goals with environmental responsibility."
  },
  {
    step: "03",
    title: "Eco-Friendly Design",
    description: "Our designs minimize resource usage while creating beautiful, effective user experiences."
  },
  {
    step: "04",
    title: "Efficient Development",
    description: "Clean, optimised code ensures your website runs as efficiently as possible."
  },
  {
    step: "05",
    title: "Green Hosting Setup",
    description: "We configure your site on renewable-powered hosting providers with optimal caching."
  },
  {
    step: "06",
    title: "Continuous Optimisation",
    description: "Regular audits and improvements to maintain and enhance sustainability over time."
  }
];
