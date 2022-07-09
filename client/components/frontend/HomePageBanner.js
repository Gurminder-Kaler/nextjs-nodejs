import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function HomePageBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/cone.jpg"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/cone.jpg"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/cone.jpg"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/cone.jpg"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/cone.jpg"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/cone.jpg"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </Slider>
  );
}
