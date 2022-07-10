import { Meta } from '@/components/elements';
import { Main } from '@/components/layouts';
import {
  CallToAction,
  Faqs,
  Hero,
  Pricing,
  PrimaryFeatures,
  SecondaryFeatures,
  Testimonials,
} from '@/components/sections';

import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <>
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <Main>{page}</Main>
    </>
  );
};

export default Home;
