import Image from "next/image";
import { ContainerGrid } from "../container";

import IconBoost from '@/assets/icon-nftboost.svg';
import SmallNFT01 from '@/assets/nft-small-01.png';
import SmallNFT02 from '@/assets/nft-small-02.png';
import GooglePlay from '@/assets/google.svg';
import AppleStore from '@/assets/apple.svg';
import { CardsHero } from "./cards";

export function SectionHero() {
    return (
        <section className="overflow-hidden pt-36 bg-hero-pattern bg-no-repeat">
            <ContainerGrid className='flex flex-col items-center'>
                <h3 className="flex items-center gap-2 text-sm @tablet:text-base @desktop:text-xl mb-3">
                    <Image
                        src={IconBoost}
                        alt="Icone Boost"
                        className="flex w-8 h-8 p-1 rounded-full  border border-white border-opacity-4 "
                    />
                    <span>Adentre um reino de possibilidades infinitas</span>
                </h3>
                <h1 className="text-5xl/normal text-center font-poppins mb-4 @desktop:text-7xl/normal">
                    Explore um Univer
                    <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32">
                        <Image
                            src={SmallNFT01}
                            alt="Pequno nft img"
                            className="w-11 "
                        />
                    </div>
                    Digital de
                    <Image
                        src={SmallNFT02}
                        alt="Pequno nft img"
                        className="inline-block w-16 mx-2 "
                    />
                    Colecionáveis únicos!
                </h1>
                <p className="w-full @desktop:max-w-content-desc-hero text-center text-sm @tablet:text-base @desktop:text-xl mb-6 @desktop:mb-9">Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.</p>
                <div className="flex flex-col @tablet:flex-row items-center gap-4">
                    <Image
                        src={GooglePlay}
                        alt="Icone Google"
                    />
                    <Image
                        src={AppleStore}
                        alt="Icone Apple Store"
                    />
                </div>
                <CardsHero/>
                <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-33"></div>
            </ContainerGrid>
        </section>
    )
}