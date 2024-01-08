import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const SwiperBlock: FC = () => {
  return (
    <SwiperStyle>
      <button className="button-prev">
        <img src="./images/slider/arrow.svg" alt="arrow" />
      </button>
      <div className="block">
        <div className="block-info">
          <p>Период</p>
          <p>Всего</p>
          <p>Риски</p>
        </div>
        <Swiper
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Navigation]}
          breakpoints={breakpoints}
        >
          {primer.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <p>{el.date}</p>
                <p>{el.num}</p>
                <p>{el.ber}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button className="button-next">
        <img src="./images/slider/arrow.svg" alt="arrow" />
      </button>
    </SwiperStyle>
  );
};

const primer = [
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
  { date: "10.09.2021", num: "1", ber: "2" },
];

const breakpoints = {
  450: {
    slidesPerView: 2,
  },
  650: {
    slidesPerView: 4,
  },
  900: {
    slidesPerView: 5,
  },
  1000: {
    slidesPerView: 6,
  },
  1330: {
    slidesPerView: 8,
  },
};

const SwiperStyle = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 107px;
  position: relative;

  .block {
    display: flex;
    max-width: 100%;
    padding: 0 39px;
  }

  .swiper {
    border-radius: 0 10px 10px 0;
    border: 2px solid ${(props) => props.theme.colors.main1};
    border-left: 0px;
    display: flex;
    padding-right: 18px;

    &-slide {
      font-size: 18px;
      letter-spacing: 0.36px;
      width: 137px;
      margin: 17px 0;
      display: flex;
      flex-direction: column;
      gap: 26px;
      border-right: 2px #949494 solid;
      height: auto;
      text-align: center;
    }
  }

  .block-info {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.4px;
    gap: 26px;
    padding: 17px 27px;
    color: ${(props) => props.theme.colors.main3};
    background-color: ${(props) => props.theme.colors.main1};
    border-radius: 10px 0 0 10px;
  }

  .button-next,
  .button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 39px;
    transition: all 200ms linear;

    &:disabled {
      opacity: 0.2;
    }
  }

  .button-prev {
    transform: rotate(180deg) translateY(50%);
  }

  .button-next {
    right: 0;
  }

  @media (max-width: 1150px) {
    .swiper {
      padding-right: 10px;
    }
  }

  @media (max-width: 750px) {
    margin-bottom: 57px;

    .block-info {
      font-size: 18px;
      letter-spacing: 0.18px;
    }
    .swiper-slide {
      font-size: 16px;
      letter-spacing: 0.16px;
    }
  }

  @media (max-width: 450px) {
    justify-content: center;

    .block {
      display: block;
      padding: 0;
    }

    .swiper {
      border-radius: 0 0 10px 10px;
      padding: 0;
      border: none;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      width: 298px;

      &-slide {
        justify-content: space-between;
        margin: 0;
        padding: 21px 17px 21px 17px;
        flex-direction: row;
        border: none;

        p {
          width: calc(100% / 3);
        }
      }
    }

    .block-info {
      justify-content: space-between;
      flex-direction: row;
      padding: 23px 17px;
      border-radius: 10px 10px 0 0;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

      p {
        width: calc(100% / 3);
        text-align: center;
      }
    }

    .button-next,
    .button-prev {
      top: 40%;
      transform: translateY(50%);
    }

    .button-prev {
      transform: rotate(180deg) translateY(-50%);
      left: -13px;
    }

    .button-next {
      right: -13px;
    }
  }
`;

export default SwiperBlock;
