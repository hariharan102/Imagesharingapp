import React from 'react';
import { Carousel, Card, Button, Image, Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import './FluidExample.css';
import He from '../navbar';
import Footer from '../Footer';


const ExampleCarouselImage = ({ text, imageUrl }) => (
  <img
  className="d-block w-100"
  src={imageUrl}
  alt={text}
  style={{ height: '800px' }} 
/>
);


function GridExample() {
  const imageUrls = [
    
    "https://static.toiimg.com/thumb/msid-87365715,width-1280,height-720,resizemode-4/87365715.jpg",
    "https://swarajya.gumlet.io/swarajya/2019-06/a825f6c5-14c9-4596-8a0d-19a2a38b0007/Rajasthan_Police_IgpKota_twitter.jpg?w=640&q=75&auto=format,compress&format=webp",
    "https://jodhpurpolice.rajasthan.gov.in/storage/app/public/achievement_image/605d9e0f-8283-41ef-b6b2-bc3a7189c270_1696744384.jpg",
    "https://www.kreedon.com/wp-content/uploads/2018/01/rajasthan-police-image-1-485x360.jpg",
    "https://www.pinkcitypost.com/wp-content/uploads/2017/07/DGP-ajit-singh.jpg",
    "https://c.ndtvimg.com/2021-08/kg3bl6j8_nina-singh-ips_625x300_02_August_21.jpg",
    "https://www.livehindustan.com/lh-img/uploadimage/library/2023/11/06/16_9/16_9_6/phq_jaipur_news_1699267093.jpeg",
    "https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2021/07/16/img20210716191223_1626442976.jpg"
  ];

  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < imageUrls.length; i += chunkSize) {
    chunks.push(imageUrls.slice(i, i + chunkSize));
  }

  const additionalContentNinaSingh = `
    Nina Singh, a 1989-batch IPS officer of Rajasthan cadre, has become the first woman to rise to the Director General rank.
    She is the Director General of Civil Rights and Anti-Human Trafficking Cell. There are six senior police officers with Director General rank.
    Nina Singh, who holds a Master's degree in Public Administration.
  `;

  
const additionalContentKaluPoliceStation = `
The Kalu police station in Rajasthan’s Bikaner district came first in the country in a survey based on the ‘SMART’ policing concept.
The Kalu station ranked the country’s best police station based on its performance in crime prevention, crime detection, community policing, and maintenance of law and order.
`;

const additionalContentMiniAbhayCommandCenter = `
Mini Abhay Command Center was launched and formally inaugurated by Shri Ravi Dutt Gaur, Police Commissioner, at Sojati Gate Police Post.There was a total of 32 CCTV cameras have been dedicated for public use. Smt. Amrita Doohan, former DCP, officials, and businessmen observed the inauguration.
`;

const additionalContentPoliceAchievements = `
The players from Rajasthan Police Department have won 90 medals across various sports meets. (Source) DGP Rajasthan Police OP Galhotra regularly looks after the sports policies drafted for players. (Source) Athletes are benefiting from positive sports policies set by the Rajasthan Police force.
`;


const additionalContentCentreRatesRajasthan = `
The Centre has ranked Jaipur-based Rajasthan Police Academy (RPA) as the best institution for training gazetted officers in the country for the year 2019-20, the state police chief said on Thursday.
Similarly, the state's Police Training Centre in Kishangarh has been rated as the best in th country for training constables, DGP M L Lathar said in a statement.

`;

const additionalContentSixthCard = `
Rajasthan Police is headed by the Director General of Police (DGP). The DGP is assisted by the staff officers of the rank of ADGP, IGP, DIG, AIG, SP. Rajasthan Police is governed by the Department of Home, Government of Rajasthan. The State Police is divided into several divisions, units, zones, ranges for better administration.
`;

const additionalContentSeventhCard = `
DGP disc to 7 police officers and personnel of Rajasthan Police
Rajasthan Police's Additional Director General of Police Smita Srivastava honored the police officers and soldiers. Rajasthan Police's Additional Director General of Police. Congratulated and called upon them to continue doing excellent work in the future also.
`;
const additionalContentEighthCard = `
Dainik Bhaskar honored the passion and spirit of Khaki. 18 police officers and soldiers who provided better service in Corona were honored with the Bhaskar Police Pride Award 2021.In the Police Pride Award organized on the 26th anniversary of Dainik Bhaskar, the policemen doing better work were honored with the Police Pride Award.
`;

  return (
    <>
    <Navbar/>
    <Carousel interval={1000}>
      {chunks.map((chunk, idx) => (
        <Carousel.Item key={idx}>
          <Row className="g-4">
            {chunk.map((imageUrl, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img variant="top" src={imageUrl} />
                  <Card.Body>
                    {idx === 1 && index === 1 && (
                      <>
                        <Card.Title>Nina Singh - Director General of Civil Rights and Anti-Human Trafficking Cell</Card.Title>
                        <Card.Text>
                        {additionalContentNinaSingh}
                        </Card.Text>
                      </>
                    )}
                    {idx === 0 && index === 1 && (
                      <>
                        <Card.Title>Kalu Police Station - Best Police Station</Card.Title>
                        <Card.Text>
                          {additionalContentKaluPoliceStation}
                        </Card.Text>
                      </>
                    )}
                    {idx === 0 && index === 2 && (
                      <>
                        <Card.Title>Launch of Mini Abhay Command Center</Card.Title>
                        <Card.Text>
                          {additionalContentMiniAbhayCommandCenter}
                        </Card.Text>
                      </>
                    )}
                    {idx === 0 && index === 3 && (
                      <>
                        <Card.Title>Rajasthan Police Achievements in Sports</Card.Title>
                        <Card.Text>
                          {additionalContentPoliceAchievements}
                        </Card.Text>
                      </>
                    )}
                    {idx === 1 && index === 0 && (
                      <>
                        <Card.Title>Centre Rates Rajasthan Police Academy As Best In Country</Card.Title>
                        <Card.Text>
                         {additionalContentCentreRatesRajasthan}
                        </Card.Text>
                      </>
                    )}
                    {idx === 0 && index === 0 && (
                    <>
                      <Card.Title>Rajasthan Police Organization and Administration</Card.Title>
                      <Card.Text>
                        {additionalContentSixthCard}
                      </Card.Text>
                    </>
                  )}
                  {idx === 1 && index === 2 && (
                    <>
                      <Card.Title>DGP Disc to 7 Police Officers and Personnel</Card.Title>
                      <Card.Text>
                        {additionalContentSeventhCard}
                      </Card.Text>
                    </>
                  )}
                  {idx === 1 && index === 3 && (
                    <>
                      <Card.Title>Dainik Bhaskar Police Pride Award 2021</Card.Title>
                      <Card.Text>
                        {additionalContentEighthCard}
                      </Card.Text>
                    </>
                  )}
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
</>
  );
}


function Home() {
  return (
    <>
    <He/>
    <div>
      <Carousel interval={1000}>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" imageUrl="https://cdn.create.vista.com/api/media/medium/575765058/stock-photo-indian-police-hat-table?token" />
          <Carousel.Caption style={{ fontSize: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '%' }}>
            <p>COPR</p>
            <h3>POLICE FEEDBACK SYSTEM</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" imageUrl="https://terryberry.com/wp-content/uploads/2023/05/AdobeStock_508286628.jpeg" />
          <Carousel.Caption style={{ fontSize: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '%' }}>
            <p>COPR</p>
            <h3>POLICE FEEDBACK SYSTEM</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>

      <GridExample />
<br></br>
      <br></br>
      <div className="container mt-4 text-center">
        <h1>Join Us in Making a Difference</h1>
        <br />
        <h4>When You Need Better!!</h4>
        <p className="mt-3" style={{ fontSize: '18px' }}>
          At COPR, we believe in the power of peace and justice. Together, we can make the world a better place--equality to anyone at any time. Whether it's supporting a local
          cause or contributing to a global initiative, your act of trust matters.
        </p>
        <br />

        <div className="row">
          <div className="col-md-4">
  <Card style={{ width: '22rem', height: '18rem', backgroundColor: '#f0ffff' }}>
    <Card.Body>
      <br />
      <Card.Title style={{ fontSize: '40px' }}>RACAAM</Card.Title>
      <Card.Text style={{ fontSize: '20px' }}>
        Rajasthan Police Cyber Crime Awareness Mission
      </Card.Text>
      <br />
      <Link to="section-mt-41" smooth={true} offset={-70} duration={50}>
      <Button variant="primary">Learn More</Button>
      </Link>
      
    </Card.Body>
  </Card>
</div>

          <div className="col-md-4">
          <Card style={{ width: '22rem', height: '18rem', backgroundColor: '#f0ffff' }}>
    <Card.Body>
      <br />
      <Card.Title style={{ fontSize: '40px' }}>MISSION</Card.Title>
      <Card.Text style={{ fontSize: '20px' }}>
      Establishing a Digital and Secure Feedback System       </Card.Text>
      <br />
      <Link to="section-mt-42" smooth={true} offset={-70} duration={50}>
      <Button variant="primary">Learn More</Button>
      </Link>
    </Card.Body>
  </Card>
</div>

          <div className="col-md-4">
          <Card style={{ width: '22rem', height: '18rem', backgroundColor: '#f0ffff' }}>
    <Card.Body>
      <br />
      <Card.Title style={{ fontSize: '40px' }}>FEATURE</Card.Title>
      <Card.Text style={{ fontSize: '20px' }}>
     Secure to Enhance Efficiency and Transparency      </Card.Text>
      <br />
      <Link to="section-mt-43" smooth={true} offset={-90} duration={50}>
      <Button variant="primary">Learn More</Button>
      </Link>
    </Card.Body>
  </Card>
</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      
      <div className="container mt-41 text-center" id="section-mt-41">
        <h1>RACCAM</h1>
        <br />
        <p className="mt-32" style={{ fontSize: '25px' }}>
          Rajasthan Police to join hands and partner with all the stakeholders to deal with
          Digital Threats and Cyber Crime. By creating a Joint ‘Morcha’ of Police, People
          and Professionals across sectors viz IT Companies, Academia, Banks, Ethical
          Hackers, etc, RACCAM aims at providing a secure Cyber Space. The motive of RACCAM
          is to deal effectively with digital threats and cyber crime. As a part of this goal,
          feedback system has brought into account.
        </p>
        <br></br>
      </div>

      <Card className="bg-dark text-white text-center" >
        <Card.Img src="https://police.rajasthan.gov.in/Old/hackathon/assetsNew/Hero_Logo%20.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <br />

      <div className="container mt-42 text-center" id="section-mt-42">
        <h1>Mission</h1>
        <br />
        <p className="mt-32" style={{ fontSize: '25px' }}>
        The mission of the feedback system is to revolutionize the way community members engage with and provide feedback on police operations, fostering a transparent and inclusive environment. This innovative system aims to bridge the gap between law enforcement and the community by leveraging modern, digital platforms to collect feedback efficiently, ensuring anonymity and privacy.  By implementing a uniform tracking system and automated follow-up processes, the system seeks to overcome manpower limitations and address the diverse needs of the community. Facilitate timely and effective responses to policing issues, fostering a safer and collaborative society.
        </p>

        <br></br>
    
      </div>

      <Card className="bg-dark text-white text-center">
        <Card.Img
          src="https://erpinnews.com/wp-content/uploads/2018/02/M_Cyber_security_banner_template_01.jpg"
          alt="Card image"
          style={{ width: '100%', height: '500px' }}  // Adjust the width as needed
        />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br></br>
      <br></br>
      <div className="container mt-43 text-center" id="section-mt-43">
        <h1>Feature</h1>
        <br />
        <p className="mt-32" style={{ fontSize: '25px' }}>
        This offers advanced features ensuring a user-centric experience.Dynamic auto chatbot employs natural language processing.Social media integration provides real-time sentiment monitoring, community reporting, and robust privacy controls. Seamless analytics tracking keeps tabs on platform performance.
        </p>
        <br></br>
      </div>
      <br></br>

      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <Image
              src="https://www.ncsc.gov.uk/images/AR23-COVER-2.jpg?mpwidth=545&mlwidth=737&twidth=912&dwidth=635&dpr=2.625&width=412"
              thumbnail
              style={{ height: '300px', width: '100%' }}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/11/Cybersecurity.jpeg.jpg"
              thumbnail
              style={{ height: '300px', width: '100%' }}
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image
              src="https://i0.wp.com/modernretail.co.uk/wp-content/uploads/2018/09/shutterstock_1067702951.png?fit=740%2C545&ssl=1"
              thumbnail
              style={{ height: '300px', width: '100%' }}
              className="img-fluid"
              />
          </Col>
        </Row>
      </Container>
    
    <br></br>

    {/* Added Text */}
    <div className="container mt-4 text-center">
      <p style={{ fontSize: '20px' }}>
        We welcome your feedback because it helps us improve our services, and gives us the opportunity to address things that need putting right.It’s important to let us know when we haven’t done a good job. If you’re unhappy with the service Police have provided you can either.Provide feedback to Police expressing your dissatisfaction
        You should provide us with feedback if:

You felt our service was too slow or otherwise not up to standard
You felt that our staff displayed a poor attitude, were impolite or lacked empathy
You were given wrong or inaccurate information
You felt that you were treated unfairly
You feel that crime is not being policed well in your area.
      </p>
    </div>
  </div>
  <br></br>
  <br></br>
  <Footer/>
              </>
  
  );
}

export default Home;