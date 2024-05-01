import type { ReactElement } from 'react';
import { render as renderComponent } from '@testing-library/react';
import userEventDefault from '@testing-library/user-event';

type RenderOptions = Parameters<typeof renderComponent>[1];

const userEvent = userEventDefault as unknown as typeof userEventDefault;

export * from '@testing-library/react';

export const render = (ui: ReactElement, options?: RenderOptions) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};
