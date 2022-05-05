import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'Jaga', body: 'Description'},
        {id: 3, title: 'Jgdsgrh', body: 'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={setSelectedSort}
                    onChange={sortPosts}
                    defaultValue="sort by"
                    options={[
                        {value: 'title', name: 'by name'},
                        {value: 'body', name: 'by description'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title="List 1"/>
                : <h1 style={{textAlign: 'center'}}>Posts aren't found</h1>
            }

        </div>
    );
}

export default App;
