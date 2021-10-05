import "./sidebar.css";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EventIcon from "@material-ui/icons/Event";
import CloseFriend from "../CloseFriend/CloseFriend";
import {Users} from '../../dummyData';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeedIcon className="sidebarListIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
					</li>
					<li className="sidebarListItem">
						<ChatIcon className="sidebarListIcon" />
						<span className="sidebarListItemText">
							Chats
						</span>
					</li>
					<li className="sidebarListItem">
						<VideoLibraryIcon className="sidebarListIcon" />
						<span className="sidebarListItemText">
							Videos
						</span>
					</li>
					<li className="sidebarListItem">
						<GroupIcon className="sidebarListIcon" />
						<span className="sidebarListItemText">
							Groups
						</span>
					</li>
					<li className="sidebarListItem">
						<BookmarkIcon className="sidebarListIcon" />
						<span className="sidebarListItemText">
							BookMark
						</span>
					</li>
					<li className="sidebarListItem">
						<EventIcon className="sidebarListIcon" />
						<span className="sidebarListItemText">
							Events
						</span>
					</li>
				</ul>

				<button className="sidebarButton">
					Show More
				</button>
				<hr className="sidebarHR" />

				<ul className="sidebarFriendsList">
					{Users.map(user => (
						
						<CloseFriend key={user.id} user={user} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
