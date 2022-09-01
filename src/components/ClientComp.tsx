import React from "react";
import { ClientReviews } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const ClientComp = () => {
	return (
		<Swiper className="home-section-6 container" 
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
			{ClientReviews.map((item) => {
				return (
					<SwiperSlide className="section6-inner" key={item.id}>
						<h2>Clients Reviews</h2>
						<p className="section6-inner-txt1">{item.text}</p>
						<div className="section6-inner-profile">
							<img src={item.image} alt="" />
							<h3>{item.names}</h3>
							<p className="section6-inner-profile_caption">{item.position}</p>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ClientComp;
