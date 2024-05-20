import { SectionHero } from '@/components/section-hero';
import { SectionCarrousel } from '@/components/section-carrousel';
import { SectionBanner } from '@/components/section-banner';

import Thumb01 from '@/assets/nfts/01.jpg';
import Thumb02 from '@/assets/nfts/02.jpg';
import Thumb03 from '@/assets/nfts/03.jpg';
import Thumb04 from '@/assets/nfts/04.jpg';
import Thumb05 from '@/assets/nfts/05.jpg';
import Thumb06 from '@/assets/nfts/06.jpg';
import Thumb07 from '@/assets/nfts/07.jpg';
import Thumb08 from '@/assets/nfts/08.jpg';
import Thumb09 from '@/assets/nfts/09.jpg';
import Thumb10 from '@/assets/nfts/10.jpg';
import Thumb11 from '@/assets/nfts/11.jpg';
import Thumb12 from '@/assets/nfts/12.jpg';
import { SectionCollectors } from '@/components/section-collectors';
import { SectionQuestions } from '@/components/section-questions';


const featuredCollections = [
  {
    name: 'nome1',
    thumbnail: Thumb01, //Obs {}Não use chaves para emglobar, pois não vai puxar a imagem
    value: '0.0621',
    value_brl:'102,02',
  },
  {
    name: 'nom2',
    thumbnail: Thumb02,
    value: '0.062',
    value_brl:'202,02',
  },
  {
    name: 'nome3',
    thumbnail: Thumb03,
    value: '0.0621',
    value_brl:'302,02',
  },
  {
    name: 'nome4',
    thumbnail: Thumb04,
    value: '0.0621',
    value_brl:'402,02',
  },
  {
    name: 'nome5',
    thumbnail: Thumb05,
    value: '0.0621',
    value_brl:'502,02',
  },
]
const featuredMonth = [
  {
    name: 'nome1',
    thumbnail: Thumb05, //Obs {}Não use chaves para emglobar, pois não vai puxar a imagem
    value: '0.0621',
    value_brl:'102,02',
  },
  {
    name: 'nom2',
    thumbnail: Thumb06,
    value: '0.062',
    value_brl:'202,02',
  },
  {
    name: 'nome3',
    thumbnail: Thumb07,
    value: '0.0621',
    value_brl:'302,02',
  },
  {
    name: 'nome4',
    thumbnail: Thumb08,
    value: '0.0621',
    value_brl:'402,02',
  },
  {
    name: 'nome5',
    thumbnail: Thumb09,
    value: '0.0621',
    value_brl:'502,02',
  },
]
const featuredTendency = [
  {
    name: 'nome1',
    thumbnail: Thumb09, //Obs {}Não use chaves para emglobar, pois não vai puxar a imagem
    value: '0.0621',
    value_brl:'102,02',
  },
  {
    name: 'nom2',
    thumbnail: Thumb10,
    value: '0.062',
    value_brl:'202,02',
  },
  {
    name: 'nome3',
    thumbnail: Thumb11,
    value: '0.0621',
    value_brl:'302,02',
  },
  {
    name: 'nome4',
    thumbnail: Thumb12,
    value: '0.0621',
    value_brl:'402,02',
  },
  {
    name: 'nome5',
    thumbnail: Thumb01,
    value: '0.0621',
    value_brl:'502,02',
  },
]


export default function Home() {
  return (
    <>
      <SectionHero/>
      <SectionCarrousel
        subtitle='Destaque em Coleções'
        title='Coleções notáveis'
        data={featuredCollections}
      />

      <hr className='border-t border-white border-opacity-5 max-w-grid mx-auto'/>

      <SectionCarrousel
        subtitle='Seleção Mensal'
        title='Destaque do Mês'
        data={featuredMonth}
      />

      <hr className='border-t border-white border-opacity-5 max-w-grid mx-auto'/> 

      <SectionCollectors/>

      <hr className='border-t border-white border-opacity-5 max-w-grid mx-auto'/>

      <SectionCarrousel
        subtitle='Em Tendência'
        title='Tendências'
        data={featuredTendency}
      />

      <SectionBanner/>

      <SectionQuestions/>
    </>
  );
}
