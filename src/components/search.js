import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'


const Search = () => {

  const [searchInput, setSearchInput] = useState("");
  const post = useSelector(state => state.post.post.posts)


const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
}

if (searchInput.length > 0) {
    post.filter((index) => {
        return index.title.match(searchInput);
    });
}


  return (
    <div>
    <input type="text" onChange={handleChange} value={searchInput} placeholder="Search..."></input><button type="submit" class="btn btn-dark" >Search</button>

    </div>
  )
}

export default Search;