import Title from './title';

import WhoAreWe from './section-1/who-are-we';
import OurStory from './section-1/our-story';
import Demo from './section-1/demo';
import WhatWeDo from './section-1/what-we-do';
import MicroHeroSurveys from './section-1/microhero-surveys';
import Causes from './section-1/causes';
import Audience from './section-1/our-audience';
import Customers from './section-1/our-customers';
import Examples from './section-1/recent-examples';
import QuestionTypes from './section-1/question-types';
import MHStrategy1 from './section-1/microhero-strategy';
import MHStrategy2 from './section-1/microhero-strategy-process';

import TryMH1 from './section-3/try-mh-1';
import TryMH2 from './section-3/try-mh-2';
import TryMH3 from './section-3/try-mh-3';
import TryMH4 from './section-3/try-mh-4';
import TryMH5 from './section-3/try-mh-5';

const section1 = [
  Title,
  WhoAreWe,
  OurStory,
  WhatWeDo,
  MicroHeroSurveys,
  Causes,
  Audience,
  Examples,
  QuestionTypes,
  MHStrategy1,
  MHStrategy2,
];

// const section2 = [
//   Sect2Title,
//   Sitrep,
//   Sitrep2,
//   DevPlanning,
//   WhatIsReact,
//   ReactDesc,
//   WhatIsRN,
//   RNDesc,
//   Longevity,
//   Workload1,
//   XPlatform,
//   XPlatformIOS,
//   XPlatformAndroid,
//   Spandex1,
//   Spandex2,
//   Spandex3,
//   Spandex4,
//   UX1,
//   Cons,
//   Conclusion
// ]

const section3 = [
  TryMH1,
  // TryMH2,
  TryMH3,
  // TryMH4,
  TryMH5,
];

export default [
  ...section1,
  // ...section2,
  ...section3,
];
