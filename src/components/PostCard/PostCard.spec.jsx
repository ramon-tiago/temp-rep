import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard>', () => {
  it('Should render PostCard correctly', () => {
    render(<PostCard post={props} />);
    expect(screen.getByRole('img', { name: /Hello/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
