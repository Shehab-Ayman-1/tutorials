const User = ({ name, age, country }) => {
	return (
		<div className="f-20" style={{ paddingLeft: "50px" }}>
			<h3>
				My Name Is: <span className="second-color">{name}</span>
			</h3>
			<h3>
				My Age Is: <span className="second-color">{age}</span>
			</h3>
			<h3>
				My Country Is: <span className="second-color">{country}</span>
			</h3>
		</div>
	);
};

const Hello = ({ name }) => {
	return (
		<div className="f-20" style={{ paddingLeft: "50px" }}>
			<h3>
				Hello <span className="second-color">{name}</span>
			</h3>
		</div>
	);
};

const SendChildren = ({ children }) => {
	return (
		<div className="f-20" style={{ paddingLeft: "50px" }}>
			<span className="second-color">{children}</span>
			We Can Get The Content From The Parent By [{"{"} children {"}"}] In The Child
		</div>
	);
};

export function Props() {
	return (
		<div>
			<h1 className="title main-color">User Information:</h1>
			<User name="Shehab" age="21" country="Egypt" />

			<h1 className="title main-color">Students Say Hello:</h1>
			<Hello name="Hesham" />
			<Hello name="Aya" />
			<Hello name="Farha" />
			<Hello name="Salma" />

			<h1 className="title main-color">Message From Me:</h1>
			<SendChildren>Message: </SendChildren>
		</div>
	);
}
