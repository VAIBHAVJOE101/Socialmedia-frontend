import {useState , useEffect} from "react" ;
import Post from "../Post/Post";
import Share from "../Share/Share";
import axios from "axios";
import "./feed.css";

const Feed = () => {
	const [Posts,setPosts]  = useState([]);
	useEffect(()=>{
		const fetchPosts = async () =>{
			const res = await axios.get("posts/timeline/615c031485527872d42336e7");
			setPosts(res.data) ;
		}
		fetchPosts();
	},[])
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{Posts?.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Feed;
