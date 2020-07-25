import React from "react";

const data = [
	{
		title: "Resume SumetPH",
		src: require("../asset/web/resume.png"),
		link: "https://sumetph.github.io",
		fontEnd: "React.js",
		backEnd: "-",
		database: "-",
		css: "Bulma",
		host: "Netlify"
	},
	{
		title: "DDS Rmuti",
		src: require("../asset/web/project.png"),

		link: "https://rmuti-dds.000webhostapp.com",
		fontEnd: "Vue.js",
		backEnd: "Laravel 5.5",
		database: "MySQL",
		css: "Bootstrap 4",
		host: "000webhost"
	},
	{
		title: "ISR Rmuti",
		src: require("../asset/web/isr.png"),
		link: "https://next-isr.herokuapp.com/",
		fontEnd: "Next.js",
		backEnd: "Node.js & Express",
		database: "MongoDB",
		css: "Bulma",
		host: "Heroku"
	},
	{
		title: "CRUD Restaurant",
		src: require("../asset/web/restaurant.png"),
		link: "https://go-restaurant-sumetph.herokuapp.com",
		fontEnd: "Vue.js",
		backEnd: "Golang",
		database: "PostgreSQL",
		css: "Bootstrap 4",
		host: "Heroku"
	}
];

function Website() {
	return (
		<div className="columns is-multiline">
			{data.map((web, index) => (
				<div
					key={index}
					className="column is-6-tablet is-3-desktop"
				>
					<div className="card">
						<div className="card-image">
							<figure className="image is-bordered">
								<a
									href={
										web.link
									}
									target="_black"
								>
									<img
										src={
											web.src
										}
										alt="img"
									/>
								</a>
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
								<a
									href={
										web.link
									}
									target="_black"
								>
									<h4>
										{
											web.title
										}
									</h4>
								</a>
								<hr />
								<small>
									Front-End
									:{" "}
									{
										web.fontEnd
									}
									<br />
									Back-End
									:{" "}
									{
										web.backEnd
									}
									<br />
									Database
									:{" "}
									{
										web.database
									}
									<br />
									CSS
									Framework
									:{" "}
									{
										web.css
									}
									<br />
									Host :{" "}
									{
										web.host
									}
								</small>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Website;
