
import bellaShoulder from './images/bellaShoulder.jpg'
export default function News() {
  return (
    <section className="relative .news min-h-[50vh] lg:bg-gray-100 lg:grid lg:grid-cols-2">
        <div className='z-10 lg:relative'>
            <p className='text-xs pt-5 lg:mt-10 text-gray-600'>THE SATCHI SIX PRESENTS</p>
            <div className='text-3xl lg:text-5xl mx-5 lg:mx-10 text-right lg:text-right'>
                <p className='mt-5 lg:mt-20 tracking-widest'>BELLA LEONETTE</p>
                <p className='tracking-widest'>THE ENDLESS TOUR</p>
            </div>
            <div className='mt-96 pb-10 lg:mr-10 text-right'>
                <a className='block pr-5 transition-all bg-gray-100 hover:text-gray-500 lg:hover:tracking-widest tracking-wide mb-5' target='_blank' rel="noopener noreferrer" href='https://www.malmofestivalen.se/'>MALMÖ, MALMÖFESTIVALEN <span className='font-bold'>12</span> AUG</a>
                <a className='block pr-5 transition-all bg-gray-100 hover:text-gray-500 lg:hover:tracking-widest tracking-wide mb-5' target='_blank' rel="noopener noreferrer" href='https://www.tickster.com/sv/events/fnk9ja2p4r1lpta/2023-09-01/hoopdiggas-presenterar-powerpose-fm-festival'>UMEÅ, POWERPOSE FM FESTIVAL <span className='font-bold'>02</span> SEP</a>
                <a className='block pr-5 transition-all bg-gray-100 hover:text-gray-500 lg:hover:tracking-widest tracking-wide mb-5' target='_blank' rel="noopener noreferrer" href='https://secure.tickster.com/t20ze66h2n4h2yz'>STHLM, STADSGÅRDSTERMINALEN <span className='font-bold'>07</span> SEP</a>
                <a className='block pr-5 transition-all bg-gray-100 hover:text-gray-500 lg:hover:tracking-widest tracking-wide mb-5' target='_blank' rel="noopener noreferrer" href='https://secure.tickster.com/sv/axnymvfy06nj6c7/products'>LUND, MEJERIET <span className='font-bold'>16</span> SEP</a>
            </div>
        </div>
        <img className="-z-10 lg:z-0 absolute top-0 lg:relative h-[100%] w-[100%] object-cover" src={bellaShoulder} alt='Bella Leonette'/>
    </section>
  )
}
