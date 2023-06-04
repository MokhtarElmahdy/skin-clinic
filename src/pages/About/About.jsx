// import {Helmet} from "react-helmet";
import { Container } from "react-bootstrap";
import AboutComp from "../../components/About/AboutComp";
const About= () => {
  return (<>
              {/* <Helmet> */}
                {/* <meta charSet="utf-8" /> */}
                {/* <title>About Page</title> */}
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            {/* </Helmet> */}
  
    <Container>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
    <AboutComp/>
      </div>
    </Container>
    </>
  );
};

export default About;
