'use client'

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CardNFT } from "./card-nft";

import 'swiper/css';

import Arrow from '@/assets/arrow-slide.svg'
import Image from 'next/image';

export function CarrouselCards({data}) {
    const swiperRef = useRef();//Fazer com que receba todos os parametros dentro do Swiper
    return(
        <div className='relative w-full '>
            <button className='w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide rounded-full hidden @desktop:flex items-center
             justify-center rotate-180 absolute -left-6 z-10 top-1/2 mt-6 transition-colors ease-linear border
              border-white border-opacity-5' onClick={() => {
                swiperRef.current?.slidePrev()
            }}>
                <Image
                    src={Arrow}
                    alt='Arrow Previous'
                />
            </button>
            <Swiper //Configuração do Carrousel
                slidesPerView={4} //Quantidade de Slide aparecendo
                spaceBetween={32} //Espacamento
                speed={800}       //Velocidade
                loop={true}       //Se quando terminar vai ter Algo
                modules={[Navigation]}
                onBeforeInit={(Swiper) => {
                    swiperRef.current = Swiper;
                }}
            //Responsivo
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 24
                    },
                    640: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.3,
                    },
                    1250: {
                        slidesPerView: 4,
                        spaceBetween: 32
                    }
                }}
                className='!px-3'
            >
                {
                    data.map(({name, thumbnail, value, value_brl}, index) => (
                        <SwiperSlide key={index}>
                            <CardNFT
                                name={name}
                                thumbnail={thumbnail}
                                value={value}
                                value_brl={value_brl}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className='w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide rounded-full hidden @desktop:flex  items-center justify-center absolute -right-6 z-10 top-1/2 mt-6 transition-colors ease-linear border border-white border-opacity-5' onClick={() => {
                swiperRef.current?.slideNext()
            }}>
                <Image
                    src={Arrow}
                    alt='Arrow Previous'
                />
            </button>
        </div>
    )
}