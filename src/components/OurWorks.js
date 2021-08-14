import React from "react"
import Title from "./Title"
import works from "../constants/works"
import WorkFilter from '../constants/worksfilters'
import { Link } from 'gatsby'
const OurWorks = () => {
	return (
		<section className="section ">
			<Title title="Наши работы" />
			<div className="works-center">
				<WorkFilter styleClass="work-links">
				</WorkFilter>
			</div>
			<div className="section-center services-center">
				{works.map(service => {
					const { id, title, prices, dates } = service

					return (
						<article key={id} className="service">
							<h4>{title}</h4>
							<div className="underline"></div>
							<p>{prices}</p>
							<p>{dates}</p>
						</article>
					)
				})}
			</div>
			<div className="section-title">
				<Link to="/" className="btn-works">
					Все работы
				</Link>
			</div>

		</section>
	)
}

export default OurWorks
