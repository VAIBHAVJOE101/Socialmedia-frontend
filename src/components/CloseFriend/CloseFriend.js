import './closefriend.css';

const CloseFriend = ({user}) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
   return (  
      <li className="sidebarFriend">
						<img
							src={PF+user.profilePicture}
							className="sidebarFriendImg"
							alt="Friend"
						/>
						<span className="sidebarFriendName">
							{user.username}
						</span>
					</li>
					
   );
}
 
export default CloseFriend;