import './Projects.css'

export default function Projects() {
    const projects = [
        {
            title: 'Ecommerce website',
            src: 'assets/projects/breezy.png',
            description: 'Created using HTML, CSS and Angular framework',
            link: 'https://github.com/Kostaszero/e-commerce-site',
            siteLink: 'https://Kostaszero.github.io/e-commerce-site'
        },
        
        {
            title: 'Youtube clone',
            src: 'assets/projects/yt-clone.png',
            description: 'Created using HTML, CSS and Angular framework',
            link: 'https://github.com/Kostaszero/youtube-clone',
            siteLink: 'https://Kostaszero.github.io/youtube-clone'
        }
        //, ['Pong Game', 'https://github.com/Kostaszero/Pong-Game']
    ]
    return (
                projects.map((item) => {
                    return (
                        <div className='d-flex justify-content-start project-container' key={item.title}>
                            <div className='d-flex align-items-center'>
                                <span className='circle'></span>
                                <hr style={{ width: '10%' }} />
                                <div className='card-box'>
                                    <div className='project-content'>
                                        <div className='d-flex align-items-end' style={{fontSize: '2rem'}}>
                                            <span>{item.title}
                                            <a href={item.siteLink} target='_blank' className="hyper-link mb-0">
                                            <span title='visit site'><svg className='visit' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
<path d="M 35.484375 5.984375 A 1.50015 1.50015 0 0 0 34.439453 8.5605469 L 36.878906 11 L 35.5 11 C 23.64339 11 14 20.64339 14 32.5 A 1.50015 1.50015 0 1 0 17 32.5 C 17 22.26461 25.26461 14 35.5 14 L 36.878906 14 L 34.439453 16.439453 A 1.50015 1.50015 0 1 0 36.560547 18.560547 L 41.431641 13.689453 A 1.50015 1.50015 0 0 0 41.423828 11.302734 L 36.560547 6.4394531 A 1.50015 1.50015 0 0 0 35.484375 5.984375 z M 12.5 6 C 8.9280619 6 6 8.9280619 6 12.5 L 6 35.5 C 6 39.071938 8.9280619 42 12.5 42 L 35.5 42 C 39.071938 42 42 39.071938 42 35.5 L 42 27.5 A 1.50015 1.50015 0 1 0 39 27.5 L 39 35.5 C 39 37.450062 37.450062 39 35.5 39 L 12.5 39 C 10.549938 39 9 37.450062 9 35.5 L 9 12.5 C 9 10.549938 10.549938 9 12.5 9 L 20.5 9 A 1.50015 1.50015 0 1 0 20.5 6 L 12.5 6 z"></path>
</svg></span>
                                            </a>
                                            </span>
                                        </div>
                                        <div style={{fontSize: '1.5rem'}}>
                                            <a href={item.link} target='_blank' className='hyper-link'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                                </svg>
                                                Project Link
                                            </a>
                                        </div>
                                        <div className='text-muted' style={{fontSize: '1.75rem'}}>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`project-image`}>
                                <img className='laptop' src={item.src} alt="laptop" 
                                />
                            </div>
                        </div>
                    )
                })
    )
}