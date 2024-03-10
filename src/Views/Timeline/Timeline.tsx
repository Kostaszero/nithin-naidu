import './Timeline.css'

export default function Timeline() {
    const WE = [{ title: 'Software Engineer Intern', company: 'Conduira', start: 'Sep 2022', end: 'Apr 2023', location: 'Hyderabad' }]
    return (
        WE.map((item, idx) =>
            <div className='main-content' key={idx*41}>
                <div className="heading">Work Experience</div>
                <div className="work-content d-flex">
                    <div className="d-flex flex-column align-items-center text-muted me-3">
                        <h4 className="text-muted">{item.end}</h4>
                        <div className='d-flex flex-column'>
                            <div className="st-line"></div>
                            <span className="dots"></span><span className="dots"></span><span className="dots"></span>
                        </div>
                        <h4 className="text-muted">{item.start}</h4>
                    </div>
                    
                    <div className="experience">
                            <div className="text">
                            <svg style={{margin: '-0.3rem 0.6rem 0 0'}} height="1.7rem" fill='gray' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
                                {item.title}&nbsp; @{item.company}
                            </div>
                            <div className="text">
                                <svg style={{margin: '-0.3rem 0.6rem 0 0'}} height="1.8rem" fill='#2e2929' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                {item.location}
                            </div>
                            <div className="sub-text">More details in my Resume &#8599;</div>
                    </div> 
                </div>
            </div>
        )
    );
}