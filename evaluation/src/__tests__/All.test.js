import { render, screen } from '@testing-library/react';

test('check for image', () => {
  render(<Image ></Image>);
  const linkElement = screen.getBy("noImgeFound");
  expect(linkElement).toHaveClassName(inputContainer);
});
