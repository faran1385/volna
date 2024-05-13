import "./Slider.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react"
import { SliderItem } from "./SliderItem/SliderItem";
export const Slider = () => {
    return <div className="w-full py-6 px-8">
        <div>
            <Swiper loop={true} spaceBetween={30}
                className="slider slider--mobile">
                <SwiperSlide>
                    <SliderItem buttons={[{ background: "black", animation: "text", text: "learn more" }]} title="New Artist of Our Label" imageSrc="https://volna.volkovdesign.com/img/home/slide3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem buttons={[{text:"buy now",background:"green",animation:"toBlack"},{ background: "black", animation: "text", text: "learn more" }]} title="Record Label & Music streaming" imageSrc="https://volna.volkovdesign.com/img/home/slide1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem buttons={[{ background: "green", animation: "toBlack", text: "learn more" },{ background: "black", animation: "toGreen", text: "watch video",hasIcon:true }]} title="New Artist of Our Label" imageSrc="https://volna.volkovdesign.com/img/home/slide2.jpg">
                        <svg className={"item__button__icon me-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                        </svg>
                    </SliderItem>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
}