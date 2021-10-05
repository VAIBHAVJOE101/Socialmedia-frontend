import "./share.css";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import LabelIcon from "@material-ui/icons/Label";
import RoomIcon from "@material-ui/icons/Room";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const Share = () => {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						src="/assets/person/1.jpeg"
						alt=""
						className="shareProfileImg"
					/>
					<input
						placeholder="Whats in your mind??"
						className="shareInput"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMediaIcon
								htmlColor="tomato"
								className="shareIcon"
							/>
							<span className="shareOptionText">
								Photo or Video
							</span>
						</div>
						<div className="shareOption">
							<LabelIcon
								htmlColor="blue"
								className="shareIcon"
							/>
							<span className="shareOptionText">
								Tag
							</span>
						</div>
						<div className="shareOption">
							<RoomIcon
								htmlColor="green"
								className="shareIcon"
							/>
							<span className="shareOptionText">
								Location
							</span>
						</div>
						<div className="shareOption">
							<EmojiEmotionsIcon
								htmlColor="gold"
								className="shareIcon"
							/>
							<span className="shareOptionText">
								Feelings
							</span>
						</div>
					</div>
					<button className="shareButton">
						Share
					</button>
				</div>
			</div>
		</div>
	);
};

export default Share;
