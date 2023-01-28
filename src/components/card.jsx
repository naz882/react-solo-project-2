import React from 'react';
import './style.css';
import path from './../assets/path.png'

const Card = (props) => {
	return (
		<div className="card--main">
			<div className="card">
				<img src={props.item.imageUrl} />
				<div className="card--info">
					<div className="card--country">
						<img src={path} />
						<p>{props.item.location}</p>
						<a href={props.item.googleMapsUrl}>View on Goggle Maps</a>
					</div>
					<h1 className="card--title">{props.item.title}</h1>
					<div className="card--dates">
						<span>{props.item.startDate} - {props.item.endDate}</span>
					</div>
					<p className="card--description">{props.item.description}</p>
				</div>


			</div>
			<hr className="card--bottomline"></hr>
		</div>
	)


}

export default Card;

/* 
title: "Mount Fuji",
		location: "Japan",
		googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
		startDate: "12 Jan, 2021",
		endDate: "24 Jan, 2021",
		description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
		imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
*/