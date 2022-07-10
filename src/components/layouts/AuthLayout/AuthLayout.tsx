import ExportedImage from 'next-image-export-optimizer';
import type { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col justify-center bg-white py-12 px-4 shadow-2xl md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </div>
        </div>
        <div className="absolute inset-0 hidden w-full flex-1 sm:block lg:relative lg:w-0">
          <ExportedImage
            src={'/assets/images/background-auth.jpg'}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
