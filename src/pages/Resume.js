import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function TitleSection(props) {
    return(
        <Container className="bg-primary p-2 my-5">
            <Row className="mx-3">
                <Col md={3} className="fw-bold text-light">
                    <h1>Shlemon Namrod</h1>
                </Col>
                <Col md={9} className="text-end fw-bold text-light my-2">
                    <h6>shlemon.namrod@yahoo.com</h6>
                    <h6>(+964)123-456-7890</h6>
                    <h6>Duhok, Duhok 42001</h6>
                </Col>
            </Row>
        </Container>
    );
}

function BodySection(props) {
    return (
        <Container>
            <Row className="mx-5 p-5">
                <Col md={2} className="text-end text-primary fs-4">{props.data.name}</Col>
                <Col md={10}>
                    <Stack direction="horizontal" bsPrefix="hstack" gap={3}>
                        <div className="vr"></div>
                        <div className="text-start text-dark fs-6">{props.data.content}</div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

const Resume = () => {
    return(
        <>
            <TitleSection />
            <BodySection data={section1} />
            <BodySection data={section2} />
            <BodySection data={section3} />
            <BodySection data={section4} />
            <BodySection data={section5} />
            <BodySection data={section6} />
            <BodySection data={section7} />
        </>
    );
}

export default Resume;


/* ALL SECTIONS ARE PUT HERE FOR NOW */
const section1 = {
    name: "Summary",
    content: "Hardworking and reliable Programmer with strong ability in AI and Machine Learning. Offering skills in NLP, Computer Vision and other organizational skills. Highly organized, proactive and punctual with team-oriented mentality."
}

const section2 = {
    name: "Skills",
    content: <ul>
        <li>Advanced Experience with Artificial Intelligence Librariesincluding TensorFlow, Keras, Scikit-Learn, and more with Python</li>
        <li>Front-End web development with JavaScript, React, HTML, and CSS</li>
        <li>Advanced Experience with Deep Learning methods including Computer Vision, Natural Language Processing, and more.</li>
        <li>Mobile Application Development (Android) with Java</li>
        <li>Microsoft Office 365</li>
        <li>Graphical User Inferface design with C#</li>
        <li>Software Development best practices with C++ According to Pearson UK</li>
        <li>SQL Server Integration Services (SSIS)</li>
        <li>SPSS Statistics</li>
    </ul>
}

const section3 = {
    name: "Experience",
    content: <Container>
        <Row>
            <Col md={12}>
                <Stack direction="horizontal" gap={3} bsPrefix="hstack">
                    <div className="text-end fw-bold fs-5">Manager</div>
                    <div className="vr"></div>
                    <div className="text-start fs-6 fw-light">08/2021 to 11/2021</div>
                </Stack>
            </Col>
            <Col md={12}>
                <p className='text-start fs-6 fw-bold'>Flex Sport Center - Duhok, Duhok</p>
            </Col>
            <Col md={12}>
                <ul className='text-start fs-6 fw-normal'>
                    <li>Registering Costumers and making cash registers</li>
                    <li>Ensure good warehousing practices.</li>
                    <li>Responsible for the store supplies.</li>
                    <li>Handing over 1000$ cash to the accountant biweekly after auditing it.</li>
                    <li> Designed a POS System from scratch using Microsoft Excel to facilitate sales transactions, and track warehouse supplies and sales history.</li>
                    <li> Designed a simple Business accounts software using Microsoft Excel.</li>
                </ul>
            </Col>
        </Row>
    </Container>
}

const section4 = {
    name: "Education and Training",
    content: <Container>
        <Row className='mb-5'>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-5'>Duhok Polytechnic University - Duhok, Kurdistan, Iraq</div>
            </Col>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-6'>Bachelor of Science</div>
            </Col>
            <Col md={12}>
                <div className='text-start fw-light fs-6'>Information Technology Management, <label className='fw-normal fs-6'>05/2021</label></div>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-5'>Ovanya - Erbil, Kurdistan, Iraq</div>
            </Col>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-6'>Certificate of Completion</div>
            </Col>
            <Col md={12}>
                <div className='text-start fw-light fs-6'>
                    <a href="https://ovanya.com/accomplishments/certificates/94958271" target="_blank" rel="noreferrer">Data Science and AI Traineeship
                    </a>, <label className='fw-normal fs-6'>05/2022</label></div>
            </Col>
        </Row>
        <Row className='mb-5'>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-5'>Udemy - Online</div>
            </Col>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-6'>Certificate of Completion</div>
            </Col>
            <Col md={12}>
                <div className='text-start fw-light fs-6'>
                    <a href="https://drive.google.com/file/d/1IIl6NHPp26rvFwtMDYW6WDXJQ8ODdaIH/view" target="_blank" rel="noreferrer">Computer Vision Bootcamp with Python
                    </a>, <label className='fw-normal fs-6'>12/2021</label></div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-5'>Udemy - Online</div>
            </Col>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-6'>Certificate of Completion</div>
            </Col>
            <Col md={12}>
                <div className='text-start fw-light fs-6'>
                    <a href="https://drive.google.com/file/d/1oMm-h_2fMEJH6HTGgf22FCxaCVvynMVI/view" target="_blank" rel="noreferrer">365 Carrer's Complete Data Science Bootcamp
                    </a>, <label className='fw-normal fs-6'>01/2022</label></div>
            </Col>
        </Row>
    </Container>
}

const section5 = {
    name: "Accomplishments",
    content: <Container>
        <Row className='mb-2'>
            <Col md={12}>
                <div className='text-start text-dark fw-bold fs-5'>Discord Bot from Scratch - With Python and Discord API</div>
            </Col>
            <Col md={12}>
                <a class="text-start fs-6 fw-light" href="#" target="_blank" rel="noreferrer">View Project Code</a>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <ul>
                <li>Used Discord API to integrate chat and voice services</li>
                <li>The bot runs without wait time (running multiple functions at the same time) by 
                  utilizing asynchronous functions (multiple threads running concurrently)
                </li>
                <li>The deployment was carried with Flask, a python module that allows to develop web 
                  applications easily. It was used as a web server to keep the bot alive
                </li>
                <li>The site used to host the bot is called <a href="https://replit.com/~" target="_blank" rel="noreferrer">Replit</a>, which is a collaborative browser-based 
                  IDE. The site keeps the code running even after its tab is closed, but only for 10 
                  minutes. A simple solution to mitigate this problem was to host the code in a Flask 
                  web server, and ping the server with <a href="https://uptimerobot.com/" target="_blank" rel="noreferrer">UptimeRobot</a> which is an uptime monitoring 
                  service that pings the web server every 5 minutes. This way every 5 minutes the 
                  monitor resets Replit’s 10-minute close window.
                </li>
                </ul>
            </Col>
        </Row>
    </Container>
}

const section6 = {
    name: "Languages",
    content: <Container>
        <ul>
            <li>English (Fluent)</li>
            <li>Arabic (Advanced)</li>
            <li>Assyrian (Native)</li>
            <li>Kurdish (Advanced)</li>
            <li>Russian (Intermediate)(Writing, Reading, Speaking)</li>
            <li>Korean (Basic)(Writing, Reading)</li>
        </ul>
    </Container>
}

const section7 = {
    name: "Personal Skills",
    content: <Container>
        <ul>
            <li>Willingness to Learn</li>
            <li>Thinking Skills (Problem Solving and Decision Making)</li>
            <li>Critical Thinking</li>
            <li>Teamwork</li>
            <li>Volunteering</li>
            <li>Focusing</li>
            <li>Active Listening</li>
            <li>Communication</li>
        </ul>
    </Container>
}