import './styles.css';
import { useCallback, useEffect, useState } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Posts';
import { Button } from '../../components/Botton';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };
  const handlechange = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  useEffect(() => {
    console.log('handleChange');
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && (
          <>
            <h1>Serach value: ${searchValue}</h1> <br />
          </>
        )}
        <TextInput handlechange={handlechange} searchValue={searchValue} />
      </div>
      {filteredPosts.length > 0 && <Post posts={filteredPosts} />}

      {filteredPosts.length === 0 && <h1>Não existe post para sua Busca</h1>}
      {!searchValue && (
        <div className="button-container">
          <Button disabled={noMorePosts} text="Load more posts" onClick={loadMorePosts} />
        </div>
      )}
    </section>
  );
};

// export class Home2 extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     name: 'Ramon Tiago',
//   //     counter: 0
//   //   };
//   // }

//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 4,
//     searchValue: '',
//   };

//   timeoutUpdate = null;

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPosts()
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   }

//   loadMorePosts = () => {
//     const {
//       allPosts, posts, page, postsPerPage
//     } = this.state;
//     const nextPage = (page + postsPerPage)
//     const nextPosts = allPosts.slice(nextPage, (nextPage + postsPerPage))
//     posts.push(...nextPosts)

//     this.setState({
//       posts: posts,
//       page: nextPage
//     });

//   }
//   handlechange = (e) => {
//     console.log(e.target.value);
//     const searchValue = e.target.value;
//     this.setState({ searchValue });

//   };
//   // componentDidUpdate() {
//   // }
//   // componentWillUnmount() {
//   //   clearTimeout(this.timeoutUpdate);
//   // }

//   render() {
//     const { allPosts, posts, page, postsPerPage, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;
//     const filteredPosts = !!searchValue
//       ? allPosts.filter(post => {
//         return post.title.toLowerCase().includes(
//           searchValue.toLowerCase()
//         );
//       })
//       : posts;
//     return (
//       <section className="container">
//         <div className='search-container'>
//           {!!searchValue && (
//             <>
//               <h1>Serach value: ${searchValue}</h1> <br />
//             </>
//           )
//           }
//           <TextInput
//             handlechange={this.handlechange}
//             searchValue={searchValue}
//           />
//         </div>
//         {filteredPosts.length > 0 && (
//           <Post posts={filteredPosts} />
//         )}

//         {filteredPosts.length === 0 && (
//           <h1>Não existe post para sua Busca</h1>
//         )}
//         {!searchValue && (
//           <div className='button-container'>
//             <Button
//               disabled={noMorePosts}
//               text="Load more posts"
//               onClick={this.loadMorePosts}
//             />
//           </div>
//         )}
//       </section >

//     )
//   }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export class Home extends Component {
//   state = {
//     counter: 0
//   };

//   handleClick = () => {
//     const { counter } = this.state;
//     this.setState((prevState, prevProps) => {
//       return { counter: prevState.counter + 1 };
//     }, () => {
//       console.log(this.state.counter);
//     });
//   };

//   render() {
//     return (
//       <div className="home-container">
//         <h1 className="title">{this.state.counter}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     )
//   }

// }
