import React from "react";
import { BookFeed } from '../../Components/Book';
import DataSwiper from "./DataSwiper"
import {List, Swiper, SwiperSlide} from "framework7-react"

export default (
  userReview
) => {
  const loading = userReview.userReview.loading;
  const data = userReview.userReview.data;
  const error = userReview.userReview.error;
  if (loading === true){
    return (
      <div></div>
    );
    
  } else if (!loading && data && data.userReview) {

    return (
      <Swiper params={{ speed: 500, slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true }}>
        {
          data.userReview.map((review) => (
           <SwiperSlide key={review.id}>
             <DataSwiper data={review} />
           </SwiperSlide>

          ))
        }
      </Swiper>
    )
  } else {
    return (<div></div>);
  }

}
