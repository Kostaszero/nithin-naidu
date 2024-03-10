import { MouseEvent } from 'react';
import './Home.css'
import Body from './Body/Body';

const toggleOverlay = (event: MouseEvent) => {
    let name = event!.target! as HTMLElement;
    
    let ol = document.querySelector('.overlay');
    if(name.className === 'navItem'){
        ol?.classList.add('show');
    }
    else if(name.classList[0] === 'overlay'){
        ol?.classList.remove('show');
    }
}
function Masthead() {
    function toggleNav(){
        const nav = document.querySelector('.NavItems') as HTMLElement;
        nav.classList.toggle('d-flex');
    }
    return (
        <header>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className='logo'>nf</span>
                <span className='sideTag'>
                    not facebook <br />
                    but its <br />
                    <big><b>n</b></big>ithin's port<big><b>f</b></big>olio <br />
                    yeah, I know its lame
                </span>
                <div className="welcomeText">Welcome to Nithin's Portfolio</div>
            </div>
            <div>
                <div className="menu" onClick={toggleNav}>Menu <small>&#x25BC;</small></div>
                <div className='NavItems'>
                    <div className="tri"></div>
                    <div style={{backgroundColor: 'var(--blue)'}}>
                        <a className="navItem" target='_blank' href='https://drive.google.com/file/d/11rsWiQKwWpwglcBPduXB3W-ADODA9AZI/view?usp=sharing'>
                            Resume
                        </a>
                        <span className="navItem" onClick={toggleOverlay}>Contact</span>
                    </div>
                </div>
                
            </div>
        </header>
    );
}

function Home() {
    return (
        <section>
            <Masthead />
            <Body />
            <div className="overlay" onClick={toggleOverlay}>
                <div className="contact-info d-flex flex-column justify-content-center align-items-center">
                    <h2 className='display-6'>Reach out to me</h2>
                    <div className="card-box text-center">
                        <h1>
                            &#9993;&nbsp; 
                            <a href="mailto:b.nitin.naidu@gmail.com" className='hyper-link' style={{fontSize: '2.5rem'}}>
                                b.nitin.naidu@gmail.com
                            </a>
                            &nbsp; 
                            <span className='pointer ms-4' title='copy' onClick={()=>{
                                navigator.clipboard.writeText('b.nitin.naidu@gmail.com');
                                const cp: Array<HTMLElement|null> = [document.querySelector('#copy'), document.querySelector('.copied')]
                                cp[0]!.style.display = 'none';
                                cp[1]!.style.display = 'inline-block';
                                cp[1]!.classList.remove('ms-4');
                                }}>
                                    <span id='copy'>&#x1F5CD;</span>
                                    <span title='copied' className='copied ms-4'>&#x2713; &nbsp;copied</span>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Home;