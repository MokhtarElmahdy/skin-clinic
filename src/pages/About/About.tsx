// import {Helmet} from "react-helmet";
import { Container } from "react-bootstrap";
import type {FC} from 'react'
const About: FC = (): JSX.Element => {
  return (<>
              {/* <Helmet> */}
                {/* <meta charSet="utf-8" /> */}
                {/* <title>About Page</title> */}
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            {/* </Helmet> */}
  
    <Container>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <p className="lead lh-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolor
          repellendus magnam, totam quos ratione eligendi repellat quibusdam
          impedit adipisci unde doloremque. Quo blanditiis recusandae nesciunt,
          expedita error soluta, asperiores, fugit numquam reprehenderit
          architecto ratione quos magnam saepe odit est alias. Mollitia quis eos
          eveniet cupiditate quisquam, dolorem suscipit sunt! Hic vitae
          quibusdam porro saepe, iusto dolores culpa incidunt mollitia,
          dignissimos quae minus id suscipit dolorum nemo tempore enim vel odit
          exercitationem dolore tenetur a! Delectus non quia enim molestiae
          nihil sit ratione, necessitatibus natus cupiditate iure beatae
          expedita neque quae nemo, dolorum laboriosam labore, nostrum
          doloremque ea vitae eum libero. Possimus debitis dicta dolor placeat
          tempora vitae adipisci incidunt. Accusamus molestias nisi nobis sequi
          velit sit odio at, voluptatibus fugit sapiente, ipsam expedita ab vero
          consectetur nam aut cum quidem vel aliquam ex! Dignissimos aut,
          doloribus inventore soluta non ex corrupti nesciunt a numquam commodi
          expedita! Dignissimos, inventore dolorum?
        </p>
      </div>
    </Container>
    </>
  );
};

export default About;
