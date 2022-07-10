/**
  This file is used to provide mocks for the component to quickly create a test version
  of the component either in the app or in Storybook.

  You can export more versions for different variations:

  const base: BaseTemplateProps = {
    sampleTextProp: 'Hello world',
  };

  const alt: BaseTemplateProps = {
    sampleTextProp: 'Alt hello world',
  };

  export const mockBaseTemplateProps = { base, alt };
*/

import type { BaseTemplateProps } from './BaseComponent';

const base: BaseTemplateProps = {
  sampleTextProp: 'Hello world',
};

export const mockBaseTemplateProps = { base };
