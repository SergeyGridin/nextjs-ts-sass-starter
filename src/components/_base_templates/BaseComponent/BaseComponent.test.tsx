import { render, screen } from '@testing-library/react';

import { BaseTemplate } from './BaseComponent';
import { mockBaseTemplateProps } from './BaseComponent.mocks';

describe('Index page', () => {
  describe('Render method', () => {
    it('should render text', () => {
      render(<BaseTemplate {...mockBaseTemplateProps.base} />);
      const heading = screen.getByText(
        mockBaseTemplateProps.base.sampleTextProp
      );

      expect(heading).toBeInTheDocument();
    });
  });
});
