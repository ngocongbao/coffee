import React from "react";
import { Box, Page,Text} from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/index.scss';
import Logo from "../static/icons/logo.jpg"
import iconsearch from "../static/icons/iconsearch.png";
import iconcafe from "../static/icons/cafe.jpg"
import {Navigation} from "../components/bottom-navigation"

const HomePage = () => {
  return (
    <Page>
      <Box className="header">
        <img className="logo" src={Logo} />
        <p><b>Addy Coffee</b><br/>Welcome,Bảo Ngô !</p>
      </Box>
      <Box className="wrapper">
        <img className="icon" src={iconsearch} />
        <input
          className="input"
          type="text"
          placeholder="Tìm nhanh đồ uống ,món mới"
        />
      </Box>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: false }}
        modules={[Pagination]}
      >
        <SwiperSlide
        >
          <img
            className="slide-img"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg"
            alt="slide-1"
          />
        </SwiperSlide>
        <SwiperSlide
        >
          <img
            className="slide-img"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg"
            alt="slide-2"
          />
        </SwiperSlide>
        <SwiperSlide
        >
          <img
            className="slide-img"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/677fad2e0187ddd984969.jpg"
            alt="slide-5"
          />
        </SwiperSlide>
      </Swiper>
      <Box className="wrapper__grid">
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
          <h4>Cà phê</h4>
        </Box>
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
           <h4>Cà phê</h4>
        </Box>
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
           <h4>Cà phê</h4>
        </Box>
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
           <h4>Cà phê</h4>
        </Box>
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
           <h4>Cà phê</h4>
        </Box>
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
           <h4>Cà phê</h4>
        </Box>
        <Box>
        <img
            className="grid-img"
            src={iconcafe}
            alt=""
          />
           <h4>Cà phê</h4>
        </Box> 
      </Box>
      <h3 className="title">Gợi ý cho bạn</h3>
      <h3 className="title">Danh sách sản phẩm</h3>
      <Box className="product-grid">
        <Box>
          <img
          className="prod-img"
          src="https://starbmag.com/wp-content/uploads/2023/06/How-to-order-caramel-latte-on-the-Starbucks-app.png"
          alt=""
          />
          <h3 className="title-product"> Caramel Latte</h3>
          <p className="price-product">35.000đ</p>
        </Box>
        <Box>
          <img
          className="prod-img"
          src="https://starbmag.com/wp-content/uploads/2023/06/How-to-order-caramel-latte-on-the-Starbucks-app.png"
          alt=""
          />
          <h3 className="title-product"> Caramel Latte</h3>
          <p className="price-product">35.000đ</p>
        </Box>
        <Box>
          <img
          className="prod-img"
          src="https://starbmag.com/wp-content/uploads/2023/06/How-to-order-caramel-latte-on-the-Starbucks-app.png"
          alt=""
          />
          <h3 className="title-product"> Caramel Latte</h3>
          <p className="price-product">35.000đ</p>
        </Box>
        <Box>
          <img
          className="prod-img"
          src="https://starbmag.com/wp-content/uploads/2023/06/How-to-order-caramel-latte-on-the-Starbucks-app.png"
          alt=""
          />
          <h3 className="title-product"> Caramel Latte</h3>
          <p className="price-product">35.000đ</p>
        </Box>
        <Box>
          <img
          className="prod-img"
          src="https://starbmag.com/wp-content/uploads/2023/06/How-to-order-caramel-latte-on-the-Starbucks-app.png"
          alt=""
          />
          <h3 className="title-product"> Caramel Latte</h3>
          <p className="price-product">35.000đ</p>
        </Box>
        <Box>
          <img
          className="prod-img"
          src="https://starbmag.com/wp-content/uploads/2023/06/How-to-order-caramel-latte-on-the-Starbucks-app.png"
          alt=""
          />
          <h3 className="title-product"> Caramel Latte</h3>
          <p className="price-product">35.000đ</p>
        </Box>
      </Box>
  <Navigation />

    </Page>
  );
};

export default HomePage;
