import clsx from 'clsx';
import * as React from 'react';

import styles from './Typography.module.scss';

type TitleProps = {
  variant?: keyof typeof variants;
  as?: React.ElementType;
  className?: string;
  id?: string;
} & { children: React.ReactNode };

const fontSize = {
  h1: styles.heading1,
  h2: styles.heading2,
  h3: styles.heading3,
  h4: styles.heading4,
  h5: styles.heading5,
  h6: styles.heading6,
  p: styles.paragraph,
};

const variants = {
  ...fontSize,
  title: styles.title,
  smallParagraph: styles.paragrpahSmall,
  largeParagraph: styles.paragraphLarge,
};

function Title({
  variant = 'p',
  size,
  as,
  className,
  ...rest
}: TitleProps & { size: keyof typeof fontSize }) {
  const Tag = as ?? size;
  return (
    <Tag
      className={clsx(variant ? variants[variant] : fontSize[size], className)}
      {...rest}
    />
  );
}

function H1(props: TitleProps) {
  return <Title {...props} size="h1" />;
}

function H2(props: TitleProps) {
  return <Title {...props} size="h2" />;
}

function H3(props: TitleProps) {
  return <Title {...props} size="h3" />;
}

function H4(props: TitleProps) {
  return <Title {...props} size="h4" />;
}

function H5(props: TitleProps) {
  return <Title {...props} size="h5" />;
}

function H6(props: TitleProps) {
  return <Title {...props} size="h6" />;
}

type ParagraphProps = {
  className?: string;
  prose?: boolean;
  textColorClassName?: string;
  as?: React.ElementType;
} & { children: React.ReactNode };

function Paragraph({
  className,
  prose = true,
  as = 'p',
  textColorClassName = 'text-secondary',
  ...rest
}: ParagraphProps) {
  return React.createElement(as, {
    className: clsx('max-w-full text-lg', textColorClassName, className, {
      'prose prose-light dark:prose-dark': prose,
    }),
    ...rest,
  });
}

export { H1, H2, H3, H4, H5, H6, Paragraph };
