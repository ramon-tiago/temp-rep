import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('<Button>', () => {
  it('should render the button with the text', () => {
    render(<Button text="load more" />);
    expect.assertions(2);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'button');
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<Button text="load more" onClick={fn} />);
    expect.assertions(2);

    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="load more" disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enebled when disabled is false', () => {
    render(<Button text="load more" disabled={false} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="load more" disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
