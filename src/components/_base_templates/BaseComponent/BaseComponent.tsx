import styles from 'BaseComponent.module.scss';
import clsx from 'clsx';
import type { ReactNode } from 'react';

export type BaseTemplateProps = {
  sampleTextProp: string;
  children?: ReactNode;
  className?: string;
};

const BaseTemplate = ({ className, sampleTextProp }: BaseTemplateProps) => {
  return (
    <div className={clsx(styles.container, className)}>{sampleTextProp}</div>
  );
};

export default BaseTemplate;
