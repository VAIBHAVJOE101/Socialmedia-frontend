import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {Link } from "react-router-dom"


const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<Link to="/" style={{textDecoration: 'none'}}>
				<span className="logo">Facebook</span>
				</Link>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<SearchIcon className="searchIcon" />
					<input
						type="text"
						placeholder="Search for friends, posts or video"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">
						Homepage
					</span>
					<span className="topbarLink">
						Timeline
					</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<PersonIcon />
						<span className="topbarIconBadge">
							1
						</span>
					</div>
					<div className="topbarIconItem">
						<ChatIcon />
						<span className="topbarIconBadge">
							2
						</span>
					</div>
					<div className="topbarIconItem">
						<NotificationsIcon />
						<span className="topbarIconBadge">
							1
						</span>
					</div>
				</div>
				<img
					src="/assets/person/1.jpeg"
					alt="profile"
					className="topbarImg"
				/>
			</div>
		</div>
	);
};

export default Topbar;
