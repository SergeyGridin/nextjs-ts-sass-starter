import clsx from 'clsx';
import React from 'react';

export type ContainerProps = React.ComponentProps<'div'>;

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx('mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
};

export { Container };
