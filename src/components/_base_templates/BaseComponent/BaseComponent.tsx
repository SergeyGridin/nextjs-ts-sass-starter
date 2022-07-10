import type { ReactNode } from 'react';

export type BaseTemplateProps = {
  sampleTextProp: string;
  children?: ReactNode;
  className?: string;
};

const BaseTemplate = ({ className, sampleTextProp }: BaseTemplateProps) => {
  return <div className={className}>{sampleTextProp}</div>;
};

export { BaseTemplate };
