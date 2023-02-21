import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Head className="Head">
				<title>Home Page</title>
			</Head>

			<main>
				<div className="container py-4">
					<header className="pb-3 mb-4 border-bottom">
						<Link href="/" className="d-flex align-items-center text-dark text-decoration-none">
							<Image src="/bootstrap.png" alt="bootstrap" width={32} height={32} />
							<span className="fs-4 text-white ms-2">Jumbotron example</span>
						</Link>
					</header>

					<div className="p-5 mb-4 bg-light rounded-3 bg-dark">
						<div className="container-fluid py-5">
							<h1 className="display-5 fw-bold">Custom jumbotron</h1>
							<p className="col-md-8 fs-4">
								Using a series of utilities, you can create this jumbotron, just like the one in previous versions of
								Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
							</p>
							<button className="btn btn-primary btn-lg" type="button">
								Example button
							</button>
						</div>
					</div>

					<div className="row align-items-md-stretch">
						<div className="col-md-6">
							<div className="h-100 p-5 text-bg-dark border rounded-3">
								<h2>Change the background</h2>
								<p>
									Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then,
									mix and match with additional component themes and more.
								</p>
								<button className="btn btn-outline-light" type="button">
									Example button
								</button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="h-100 p-5 border rounded-3 bg-dark">
								<h2>Add borders</h2>
								<p>
									Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure
									to look under the hood at the source HTML here as we have adjusted the alignment and sizing of both
									column is content for equal-height.
								</p>
								<button className="btn btn-outline-secondary" type="button">
									Example button
								</button>
							</div>
						</div>
					</div>

					<footer className="pt-3 mt-4 text-muted border-top">&copy; 2022</footer>
				</div>
			</main>
		</div>
	);
}
