import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Pots';
import { Button } from '../../components/Bottun';
import { TextInput } from '../../components/TextInput';
export class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'Ramon Tiago',
  //     counter: 0
  //   };
  // }

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: '',
  };

  timeoutUpdate = null;

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      allPosts, posts, page, postsPerPage
    } = this.state;
    const nextPage = (page + postsPerPage)
    const nextPosts = allPosts.slice(nextPage, (nextPage + postsPerPage))
    posts.push(...nextPosts)

    this.setState({
      posts: posts,
      page: nextPage
    });


  }
  handlechange = (e) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    this.setState({ searchValue });

  };
  // componentDidUpdate() {
  // }
  // componentWillUnmount() {
  //   clearTimeout(this.timeoutUpdate);
  // }

  render() {
    const { allPosts, posts, page, postsPerPage, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts;
    return (
      <section className="container">
        <div className='search-container'>
          {!!searchValue && (
            <>
              <h1>Serach value: ${searchValue}</h1> <br />
            </>
          )
          }
          <TextInput
            handlechange={this.handlechange}
            searchValue={searchValue}
          />
        </div>
        {filteredPosts.length > 0 && (
          <Post posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <h1>Não existe post para sua Busca</h1>
        )}
        {!searchValue && (
          <div className='button-container'>
            <Button
              disabled={noMorePosts}
              text="Load more posts"
              onClick={this.loadMorePosts}
            />
          </div>
        )}
      </section >

    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


