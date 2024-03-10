import { useState } from 'react';
import './Body.css'
import ViewPage from '../../Views/ViewPage';
const profileImg: string = "https://avatars.githubusercontent.com/u/96734428?v=4";


function Navtab({ onPageChange, btn }: any) {
    const navItems: Array<string> = ['Info', 'Timeline', 'Friends', 'Projects']
    const showPage = (id: number) => {
        onPageChange(id);
    };
    return (
        navItems.map((_, id) =>
        (
            <button onClick={() => showPage(id)} key={id*41}
                className={`tabs ${(btn == id) ? 'active' : ''}`}>
                {navItems[id]}
            </button>
        )
        )
    );
}

export default function Body() {
    
    const [page, setPage] = useState(0);
    const changePage = (id: number) => {
        setPage(id);
    }
    const tech_stack = {
        'Front-end': ['Angular', 'ReactJS', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript'],
        'Back-end': ['Node.js', 'Express.js'],
        'Programming Languages': ['C', 'Java', 'Python'],
        'Database': ['MySQL'],
        'Miscellaneous': ['Git', 'RESTful API', 'Data Structures', 'Algorithms']
    }
    return (
        <main>
            <div className="mainDoc">
                <div className='pfp-holder'>
                    <img id="pfp" src={profileImg} alt="nithin's-photo" />
                </div>
                <div className='nav-tab-content'>
                    <div className='title'>
                        Nithin Naidu
                        <a href="#left" className="hyper-link tech-pfp">
                            <i className="bi bi-person-fill" style={{color: 'var(--blue)',fontSize: '2.8rem'}}></i>
                            &nbsp; See Tech profile
                        </a>
                </div>
                    <div className="d-flex nav-tab">
                        <Navtab onPageChange={changePage} btn={page} />
                    </div>
                </div>
            </div>
            <div className="content-box d-flex">
                <section className="left d-flex flex-column" id='left'>
                    <div className="meta-content">
                        <div className="socials">
                            <div className="heading">Socials</div>
                            <div className='sub-content d-flex justify-content-start align-items-center'>
                                <div className='social-icons'>
                                    <img src="assets/linkedin.png" alt="linkedin logo" />
                                    <a className='hyper-link' href='https://linkedin.com/in/nithin-naidu' target='_blank'>Linkedin</a>
                                </div>
                                <div className='social-icons'>
                                    <img src="assets/github.png" alt="github logo" />
                                    <a className='hyper-link' href='https://github.com/Kostaszero' target='_blank'>Github</a>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="heading">Tech Stack</div>
                            <div className="sub-content">
                                {
                                    (function () {
                                        let temp = [];
                                        for (let [key, value] of Object.entries(tech_stack)) {
                                            temp.push(
                                                <div key={key}>
                                                    <div className="text">{key}</div>
                                                    <div className='d-flex flex-wrap' style={{ paddingBottom: '1.8rem' }}>
                                                        {value.map((item, idx: number) =>
                                                            <div key={37 * idx} className='chip'>{item}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return temp
                                    })()
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="right">
                    <ViewPage idx={page} />
                </section>
            </div>
        </main>
    );
}