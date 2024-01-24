export const Explain = () => {
	return (
		<div className="">
			<h3 className="main-color">UseState</h3>
			<div className="">
				<p>We Have 2 Ways To Use SetState:</p>
				<small style={{ color: "white", fontSize: "18px", marginBottom: "15px" }}>
					1- Use It Directly By Use The Current Value From The Main State
				</small>
				<br />
				<small style={{ color: "white", fontSize: "18px", marginBottom: "15px" }}>
					2- Use It In A Function By Use The Current Value From The Function Parameter
				</small>
			</div>
			<div className="">
				<p>Problem:</p>
				<small>1- Use It Directly From The Main State In Syncrounouse Make A Problem, Try It</small> <br />
				<small>
					2- Use It In A Function From The Parameter Value In Syncrounouse Not Make A Problem, Try It
				</small>
			</div>
			<div className="">
				<p>Reason:</p>
				<small>
					1- In Directly, When Change The State Value Multiple Times In Syncronouse, All The Actions Update
					The Current Value Of The State
				</small>
				<br />
				<small>
					2- In Function, When Change The State Value Multiple Times In Syncronounse, All The Actions Update
					The Last Value Of The State, Because It Get The Value When The Function Start To Work
				</small>
			</div>
		</div>
	);
};
