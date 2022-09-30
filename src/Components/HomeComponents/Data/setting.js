const NextButton = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};
const PrevButton = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};
export const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  autoplay: true,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  dotsClass: "slick-dots customIndicator",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 821,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
};
export const settings2 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7.5,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
export const settings3 = {
  dots: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  responsive: [
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
