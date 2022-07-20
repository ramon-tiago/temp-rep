import { render, screen } from '@testing-library/react';
import { Post } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      body: 'Hello 1',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: 'title 2',
      body: 'Hello 2',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: 'title 3',
      body: 'Hello 3',
      cover: 'img/img3.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Post posts={props.posts} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);

    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);

    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');

    // expect(screen.getAllByAltText(/body/i))
    //   .toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = render(<Post posts={props.posts} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
