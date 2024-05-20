import Image from "next/image";
import { ContainerGrid } from "./container";

//Images
import Logo from "@/assets/logo.svg"

//Criando Map para os components Links do Footer
const footerNav = [
    {
        titleMenu: 'NFT Boost®',
        items: ['Download', 'NFTs', 'Rank', 'FAQ'],
    },
    {
        titleMenu: 'Links Importantes',
        items: ['About us', 'Questions', 'Contact us', 'FAQ', 'Legal'],
    },
]

export function Footer() {
    return(
        <footer className="@laptop:pt-32 @laptop:pb-14">
            <ContainerGrid className='flex flex-col @laptop:flex-row justify-between gap-10 py-10'>
                <div className="text-left max-w-full @laptop:max-w-left-cont-footer">
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                    <p className="mt-4 mb-6 text-lg text-white text-opacity-70 ">
                        loremk pisuim is ismp dummr text of the oprinto and tupesa indgbust
                    </p>
                    <button className="w-full @tablet:w-auto bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-700 transition-all ease-linear">Conectar carteira</button>
                </div>
                <div className="gap-10 @laptop:gap-20 flex flex-col @laptop:flex-row">
                    {
                        footerNav.map(({titleMenu, items}) => (
                            <div key={`Menu-${titleMenu}`}>
                                <strong className="block text-xl mb-4">{titleMenu}</strong>
                                <ul>
                                    {
                                        items.map((item, index) => (
                                            <li key={index}>
                                                <a href="#" className="text-lg text-white text-opacity-70 hover:text-blue-primary hover:underline hover:decoration-solid transition-colors ease-linear">{item}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </ContainerGrid>
        </footer>
    )
}