import { Field, ErrorMessage, FieldArray } from "formik";

function FirstForm(props) {
	return (
		// hint: handleSubmit => Imported From Formik
		<form className="f-20 form" onSubmit={props.values.handleSubmit}>
			<h4 className="main-color" style={{ textAlign: "center" }}>
				☺ Formik ☺
			</h4>

			<div className="text-input">
				<label htmlFor="text">UserName: </label>
				<Field type="text" id="text" name="username" placeholder="Enter Your UserName" />
				<ErrorMessage name="username" />
			</div>

			<div className="text-input">
				<label htmlFor="Email">Email: </label>
				<Field type="email" id="email" name="email" placeholder="Enter Your Email" />
				<ErrorMessage name="email" />
			</div>

			<div className="text-area">
				<label htmlFor="text-area">Message: </label>
				<Field type="textarea" id="text-area" name="message" placeholder="Enter Your Message" />
				<ErrorMessage name="message" />
			</div>

			<div className="select-box">
				<label htmlFor="select">Skills: </label>
				<Field component="select" id="select" name="selected">
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="js">js</option>
					<option value="react">react</option>
					<option value="scss">scss</option>
					<option value="bootstrap">bootstrap</option>
					<option value="gulp.js">gulp.js</option>
					<option value="pug.js">pug.js</option>
				</Field>
				<ErrorMessage name="selected" />
			</div>

			<div className="check-box">
				<Field type="checkbox" id="checkbox" name="checkbox" />
				<label htmlFor="checkbox">Remember Me</label>
			</div>

			<div className="radio-btns">
				<div className="btn">
					<label htmlFor="JavaScript">JavaScript</label>
					<Field type="radio" id="JavaScript" value="JavaScript.js" name="radio" />
				</div>
				<div className="btn">
					<label htmlFor="Vue">Vue.js</label>
					<Field type="radio" id="Vue" value="Vue.js" name="radio" />
				</div>
				<div className="btn">
					<label htmlFor="React">React.js</label>
					<Field type="radio" id="React" value="React.js" name="radio" />
				</div>
				<div className="btn">
					<label htmlFor="Angular">Angular.js</label>
					<Field type="radio" id="Angular" value="Angular.js" name="radio" />
				</div>
			</div>
			<ErrorMessage name="radio" />
		</form>
	);
}

function SecondForm(props) {
	let btnStyle = { width: "fit-content ", margin: "initial" };

	let addFriend = (helper) => {
		return helper.push("");
	};

	let deleteFriend = (helper, index) => {
		return helper.remove(index);
	};

	return (
		<form className="f-20 form" onSubmit={props.values.handleSubmit}>
			<h4 className="main-color" style={{ textAlign: "center" }}>
				☺ Formik ☺
			</h4>

			<div className="social-contact">
				<div className="facebook">
					<label htmlFor="facebook">Facebook Account: </label>
					<Field type="email" id="facebook" name="social.facebook" placeholder="Enter Your Facebook Email..." />
					<ErrorMessage name="social.facebook" />
				</div>
				<div className="twitter">
					<label htmlFor="twitter">Twitter Account: </label>
					<Field type="email" id="twitter" name="social.twitter" placeholder="Enter Your twitter Email..." />
					<ErrorMessage name="social.twitter" />
				</div>
			</div>

			<div className="add-friend">
				<FieldArray name="friends">
					{(arrayHelper) => (
						<>
							{props.values.values.friends.map((friend, i) => (
								<div className="friend" key={i}>
									<label>Friend {i + 1}: </label>
									<div className="friend-input">
										<Field type="text" name={`friends.${i}`} placeholder="Add New Friend..." value={friend} />
										<button type="button" className="mybtn" style={btnStyle} onClick={() => deleteFriend(arrayHelper, i)}>
											-
										</button>
									</div>
									<ErrorMessage name={`friends.${i}`} />
								</div>
							))}
							<button type="button" className="mybtn" style={btnStyle} onClick={() => addFriend(arrayHelper)}>
								+
							</button>
						</>
					)}
				</FieldArray>
			</div>

			<button type="submit" className="mybtn">
				Submit
			</button>
		</form>
	);
}

export { FirstForm, SecondForm };
