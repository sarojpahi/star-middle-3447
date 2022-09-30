function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: "grey",
        color: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        color: "black",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
};
export const settings2 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6.5,
  slidesToScroll: 1,
  arrows: true,
  display: "flex",
  gap: "20px",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
