import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('Should have a value of serachValue', () => {
    const fn = jest.fn();
    const searchValue = 'testando';
    render(<TextInput handlechange={fn} searchValue={searchValue} />);

    const input = screen.getByPlaceholderText(/Type your serach/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toEqual('testando');
  });

  it('Should call handleChange function TextInput on each key pressed', () => {
    const fn = jest.fn();
    const searchValue = 'testando';
    render(<TextInput handlechange={fn} searchValue={searchValue} />);

    const input = screen.getByPlaceholderText(/Type your serach/i);

    const value = 'o valor';

    userEvent.type(input, value);
  });

  // it('should match snapshot', () => {
  //   const { container } = render(<TextInput posts={props.posts} />)
  //   expect(container.firstChild).toMatchSnapshot();

  // })
});
