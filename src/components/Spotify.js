import bellaVideo from './images/bellaVideo.mp4'

export default function Spotify() {
  return (
    <section className="h-[50vh] lg:h-[40vw] lg:grid lg:grid-cols-2 lg:items-center overflow-hidden">
        <div className='relative w-[100%] h-[100%] grid items-center'>
            <video loop autoPlay muted className='absolute grayscale -z-10 h-[100%] w-[100%] object-cover'>
                <source src={bellaVideo} type="video/mp4"/>
            </video>
            <iframe className="m-auto w-[90%] h-[90%]" src="https://open.spotify.com/embed/artist/0Qzh6QfLR7zubyDl581ZOt" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className='bg-gray-100 h-[100%] w-[100%]'></div>
    </section>
  )
}
