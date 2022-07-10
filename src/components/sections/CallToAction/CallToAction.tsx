import ExportedImage from 'next-image-export-optimizer';

import { ButtonLink, Container } from '@/components/elements';

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <ExportedImage
          src={'/assets/images/background-call-to-action.jpg'}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <ButtonLink href="/register" color="white" className="mt-10">
            Get 6 months free
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
