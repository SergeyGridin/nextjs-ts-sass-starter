import type { ReactNode } from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export { Main };
