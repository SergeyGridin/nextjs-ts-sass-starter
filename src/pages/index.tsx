import { H1 } from '@/components/elements/Typography';

import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <H1 variant="h1">YOOO</H1>
    </div>
  );
};

Home.getLayout = (page) => {
  return <>{page}</>;
};

export default Home;
