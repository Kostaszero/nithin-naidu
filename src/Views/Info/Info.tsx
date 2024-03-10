import './Info.css'
// import cvrLogo from '../../assets/cvr-logo.jpg'
// import sriChLogo from '../../assets/sriCh.png'
// import kv2Logo from '../../assets/kv2.png'

function BasicInfo() {
    let basicInfo =
        <table style={{ width: '75%' }}>
            <tbody>
                {
                    [
                        { "Sex": "Male" }, { "Birthday": "Feb 06, 2002" }, { "Current city": "Hyderabad" }, { "Country": "India" }
                    ]
                        .map((item, id) => {
                            let [key, value] = Object.entries(item)[0];
                            return (
                                <tr key={id * 10}>
                                    <td className='sub-text'>{key}:</td>
                                    <td className='text'>{value}</td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    let bio = <div className='text'>
        Hi, I'm a graduate who is curious about creative and innovative things, and is always eager to learn them.
        {/* <br />To keep how I learn a new tool/technology in short & quirky 👇,
        <br /><br />
        ' Nithin see an interesting thing, nithin excited. starts learning, nithin likes it. something doesn't work as expected, nithin angry but cool. solves it, nithin happy. excels it, nithin happy x2. ' */}
    </div>

    return ([{ "Basic Info": basicInfo }, { "Bio": bio }]
        .map((item, id) => {
            let [key, value] = Object.entries(item)[0];
            return (
                <div key={id * 9} className="table-content row">
                    <div className='info-title col-lg-2'>{key}</div>
                    <div className='col-lg-8'>{value}</div>
                </div>
            )
        })
    )
}

function Education() {
    function getInnerValues(val: Array<string>) {
        let temp = val[0]
        return [temp, val.slice(1)]
    }
    function getLink(href: any) {
        let frags = href.toLowerCase().split(" ");
        return "https://www.google.com/search?q=" + frags.join("+");
    }
    let edu = [
        { "Graduation": ["CVR College of Engineering", "Bachelors of Technology", "Class of 2023", "Electronics and Communication Engineering (ECE)"] },
        { "Senior Secondary Education": ["Sri Chaitanya Junior College", "Class of 2019"] },
        { "High School": ["Kendriya Vidyalaya No. 2 Uppal", "Class of 2017"] }
    ]
    // let logos = [cvrLogo, sriChLogo, kv2Logo]
    let logos = ['assets/cvr-logo.jpg', 'assets/sriCh.png', 'assets/kv2.png']
    return (
        edu.map((item, id) => {
            let [key, value] = Object.entries(item)[0];
            let [temp, val] = getInnerValues(value);
            value = val;
            return (
                <div key={id * 11} className="table-content row">
                    <div className='info-title col-lg-2'>{key}</div>
                    <div className='col-lg-9 d-flex'>
                        <div style={{marginRight: '4rem'}}>
                            <img style={{width: '80px', height: '80px'}} src={logos[id]} alt="cvr-logo" />
                        </div>
                        <div>
                            <a className="hyper-link" href={getLink(temp)}
                                target='_blank'>
                                {temp}
                            </a>
                            <ul className='d-flex flex-wrap' style={{ marginTop: '1rem' }}>
                                {
                                    value.map((edItem: any, id: number) => {
                                        return (
                                            <li key={id * 7} className='sub-text text-muted' style={{ fontWeight: '400', marginRight: '5rem' }}>{edItem}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default function Info() {

    {/* className="col-lg-2 col-md-2 col-sm-3" */
        /* className="col-lg-3 col-md-5 col-sm-4" */
    }
    let myInfo: (string | JSX.Element)[][] = [["About Me", <BasicInfo />], ["Education", <Education />]]
    return (
            myInfo.map((item, id) => {
                return (
                    <div key={id * 4} className='main-content'>
                        <div className="heading">{item[0]}</div>
                        <div>{item[1]}</div>
                    </div>
                )
            })
        )
}