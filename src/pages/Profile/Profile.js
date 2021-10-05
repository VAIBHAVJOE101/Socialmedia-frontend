import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./profile.css";

const Profile = () => {

	const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
                     <img
                        src={`${PF}post/3.jpeg`}
                        alt="ProfileCover"
                        className="profileCoverImg"
                     />
							<img
								src={`${PF}person/7.jpeg`}
								alt="ProfileCover"
								className="profileUserImg"
							/>
						</div>
                  <div className="profileInfo">
                     <h4 className="profileInfoName">Name</h4>
                     <p className="profileInfoDesc">hello my friend</p>

                  </div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar profile/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
