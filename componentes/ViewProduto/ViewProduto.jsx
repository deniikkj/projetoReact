

import { register } from "swiper/element/bundle"
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import {Swiper, SwiperSlide } from 'swiper/react'
register();

import foto22 from "../../assets/sapatos/22.jpeg"
import foto23 from "../../assets/sapatos/23.jpeg"
import foto24 from "../../assets/sapatos/24.jpeg"

import React, { useState } from 'react';

import "./viewproduto.css";


function ViewProduto(){

        const [Numero, setNumero] = useState(36);
      
        const RangeNumeroProduto = (event) => {
          setNumero(event.target.value);
        }; 

    return(
        <div className="container-view-produto">
            <div className="view-produto">
                <div className="item-Produto">
                    <Swiper
                    className="swiper-viw"
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={{ clickable: true }}
                    >
                        <SwiperSlide className="slide-viw">
                            <img src={foto22} />
                        </SwiperSlide>
                        <SwiperSlide className="slide-viw">
                            <img src={foto23} />
                        </SwiperSlide>
                        <SwiperSlide className="slide-viw">
                            <img src={foto24} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="texts-produtos">
                    <div className="header-produto-viw">
                        <h1>Slake ayes undecut Flow DEGRTE 223</h1>
                        <p>
                            <span>Casual</span>|
                            <span>Nike</span>|
                            <span>REF : 00732115</span>
                        </p>
                    </div>
                        <div className="avaliações">
                            4.5 de 5 | 27 avaliações
                        </div>
                        <div className="preço-descrição">
                            <p>R$ <span>219,90</span> <s>490,00</s></p>
                            <h4>Descrição do produto</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse minus aperiam, voluptates accusantium facilis natus, aliquid maxime neque laborum, illum voluptatum quaerat. Consequatur, doloribus eligendi! Impedit illum veniam cupiditate!</p>
                        </div>
                        <div className="box-tamanho">
                            <p>Tamanho</p>
                            <div className="tamanhos">
                                <input 
                                className="input-tamanho-sapato"
                                type="range"
                                name="" 
                                id="" min={36}
                                max={46} 
                                value={Numero} 
                                onChange={RangeNumeroProduto} />
                                <p>Tam: {Numero}</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn-compra">Comprar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduto;