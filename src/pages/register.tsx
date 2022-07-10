import Link from 'next/link';

import { InputGroup, Meta } from '@/components/elements';
import { Logo } from '@/components/icons';
import { AuthLayout } from '@/components/layouts';

import type { NextPageWithLayout } from './_app';

const Login: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <Link href="/">
          <a>
            <Logo className="mb-2 h-10 w-auto" />
          </a>
        </Link>
        <h2 className="mt-16 text-lg font-semibold text-gray-900">
          Get started for free.
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus arcu
          odio pretium, semper adipiscing vitae nulla.
        </p>
      </div>
      <div className="mt-10">
        <div className="mt-6">
          <form action="#" method="" className="space-y-7">
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
              <InputGroup
                label="First name"
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
              />
              <InputGroup
                label="Last name"
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                required
              />
            </div>
            <InputGroup
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <InputGroup
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
            <div className="pt-1">
              <button
                type="submit"
                className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign up <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Login.getLayout = (page) => {
  return (
    <>
      <Meta
        title="Login - Nextjs Starter"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <AuthLayout>{page}</AuthLayout>
    </>
  );
};

export default Login;
