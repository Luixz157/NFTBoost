import IconVerify from '@/assets/icon-verify.svg'
import Image from 'next/image'
import ImgNFT from '@/assets/nfts/01.jpg'
import IconETH from '@/assets/icon-eth.svg'

export function CardCollectors({position, image, name, valu_btc, pertecent}) {
    return (
        <div className='bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border
         border-white border-opacity-5 w-full max-w-card-collector'>
            <div className='flex items-center gap-4 @desktop:gap-6'>
            <strong className='font-semibold'>{position}</strong>
            <div className=' flex items-center gap-4'>
                <div className='relative w-10 h-10'>
                    <div className='w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2
                     border-white border-opacity-5'>
                        <Image
                            src={image}
                            alt='Image NFT'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <Image
                        src={IconVerify}
                        alt='Icone Verificado'
                        className='absolute -bottom-1 -right-1'
                    />
                </div>
                <div className='space-y-1'>
                    <h4>{name}</h4>
                    <p className='flex flex-col @desktop:flex-row items-start @desktop:items-center gap-1 text-sm text-white text-opacity-70'>
                        Preço mínimo
                        <span className='flex items-center gap-1 font-semibold text-sm'>
                            <Image
                                src={IconETH}
                                alt='Icone ETH'
                            />
                           {valu_btc} BTC
                        </span>
                    </p>
                </div>
            </div>
            <div className=' space-y-1 text-right'>
                <strong className='text-green-primary font-bold'>+{pertecent}%</strong>
                <span className='flex items-center gap-1 font-semibold text-sm'>
                    <Image
                        src={IconETH}
                        alt='Icone ETH'
                    />
                    {valu_btc} BTC
                </span>
            </div>
            </div>
        </div>
    )
}