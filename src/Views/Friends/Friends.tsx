// import leo from '../../../public/assets/friends/leo.jpg';
// import ms from '../../../public/assets/friends/martin-scorsese.jpg';
// import ratan from '../../../public/assets/friends/ratan-tata.jpeg';
// import ng from '../../../public/assets/friends/neighbor.jpg';

import './Friends.css'

export default function Friends(){
    const imgs = [["Ratan Tata", 'assets/friends/ratan-tata.jpeg'],
     ["Martin Scorsese", 'assets/friends/martin-scorsese.jpg'], 
     ["Leonardo DiCaprio", 'assets/friends/leo.jpg'], ["My Neighbour", 'assets/friends/neighbor.jpg']
    ];
    return (
        <div className='main-content'>
            <div className="heading">Friends list</div>
           { 
            imgs.map(img => {
                return (
                <div key={img[0]} className="d-flex align-items-center">
                    <img className='friend-img' src={img[1]} alt="friend image" />
                    <div className='friend-title'>{img[0]}</div>
                </div>
                );
            })
           }
        </div>
    );
}

