import React from 'react'
import { Card, Col, Container, Row ,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'




function LandingPage() {
  return (
    <div className='mt-5'>
      <Container   >
        <Row>
          <Col lg xs="12" >
            <div>
              <Image src="./log-in-girl.svg" className='w-100 '></Image>
              
            </div>

          </Col>

          <Col lg xs="12" className='mt-5'>
            <div className='mt-5'>
              <h1 className='text-white' ><b><span className='text-info fs-1'>P</span>ixel <span className='text-info fs-1'>P</span>lay </b> </h1>
              <h2 className='text-white'><span className='text-info fs-1'>Y</span>our <span className='text-info fs-1' >U</span >ltimate <span className='text-info fs-1'>V</span>ideo <span className='text-info fs-1'>D</span>estination </h2>
              <p className='fs-5 mt-3 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio nam recusandae natus expedita, harum debitis commodi odio assumenda excepturi enim aliquid quae, eaque omnis amet modi laboriosam. Quasi, voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero perspiciatis assumenda voluptate velit illo repellat totam fuga quidem sapiente, laudantium id rem, in, eligendi architecto aliquam odio neque. Cumque!</p>

             <Link to={'/home'}>
                <button class="cta">
                  <span>Get Started</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
             </Link>
            </div>
          </Col>

        </Row>


        <Row className=" mt-5 mb-5 py-5 ">
          <h1 className="display-1  text-center my-5 text-info" >
            Features
          </h1>
          <Col lg xs="12 ms-5">
            <Card className="mb-3 border border-dark " style={{width:"300px"}} >
              <Card.Img src="https://i.postimg.cc/xT6qygzd/Content-creator-editing-video-footage-in-studio.jpg " height={'215px'} variant="top" />
              <Card.Body className="bg-dark">
                <Card.Title className="text-white fs-4">
                  Managing Video
                </Card.Title>
                <hr />
                <Card.Text className="text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, iusto rem molestias illum, tempore vero sint quod
                  dicta repudiandae et perspiciatis animi minima laudantium.
                  Quae illo autem officia inventore praesentium.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg xs="12 ms-5">
            <Card className="mb-3 border border-dark" style={{width:"300px"}}>
              <Card.Img src="https://i.postimg.cc/8PHQFPY8/Video-Files.jpg" height={'215px'} variant="top" />
              <Card.Body className="bg-dark">
                <Card.Title className="text-white fs-4">
                  Categorise Videos
                </Card.Title>
                <hr />
                <Card.Text className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat inventore dolore nemo, ex laborum reprehenderit. Amet quod, accusamus neque fuga incidunt aspernatur voluptatem deleniti expedita placeat facere molestiae,.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg xs="12 ms-5">
            <Card className="mb-3 border border-dark" style={{width:"300px"}}>
              <Card.Img src="https://i.postimg.cc/SKqpjYSp/20945639.jpg" height={'215px'} variant="top" />
              <Card.Body className="bg-dark">
                <Card.Title className="text-white fs-4">
                  Watch History
                </Card.Title>
                <hr />
                <Card.Text className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, iusto rem molestias illum, tempore vero sint quod
                  dicta repudiandae et perspiciatis animi minima laudantium.
                  Quae illo autem officia inventore praesentium.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default LandingPage