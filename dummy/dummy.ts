import lapak from '../public/Lapak.png'
import airbnb1 from '../public/airbnb1.png'
import airbnb2 from '../public/airbnb3.png'
import movie from '../public/movieapp.png'

export const data = [
    {
        id: 1,
        image: lapak,
        name: 'Lapak-UMKM',
        description: 'LapakUMKM is a platform designed to assist micro, small, and medium-sized enterprises (MSMEs) in Indonesia to market their products online. This platform brings together customers and local products from various regions in Indonesia.',
        url: 'https://lapakumkm.netlify.app/',
        github: 'https://github.com/ALTA-LapakUMKM-Group-2/LapakUMKM-FE',

    },
    {
        id: 2,
        image: {airbnb1, airbnb2},
        name: 'AltaBnB',
        
        url: 'https://escapist-app.netlify.app/',
        github: 'https://github.com/GP3-group1/ALTA-Airbnb-FE',
    },
    {
        id: 3,
        image: movie,
        name: 'My Movie App',
        description: 'My movie app is a simple web platform that retrieves movie data from the TMDB API using the GET method. It was built with React and Axios, and is perfect for movie enthusiasts looking to stay updated on the latest releases.',
        url: 'https://mymovie-app-sable.vercel.app',
        github: 'https://github.com/adamfadrian/mymovie-app',
    }
] 