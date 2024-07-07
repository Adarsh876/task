import { Col, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="mt-5">
      <div className='mt-5'>
        <Row>
          <Col lg={2}></Col>
          <Col>
          <p className='header text-center'>Epic Games : An American Video Game And Software Developer <br/>
          And Publisher Based In Cary, North Carolina.</p>

          <div className='mt-4 w-100'>
            <img className='image' src='https://imgs.search.brave.com/LmHX4X92vOzAWaDw3gjzzgGnNRtPBsyMbz0EfP7c0d8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZm9ydG5pdGUt/cGljdHVyZXMtYjVr/ZmNjaHdhendpejNj/cy5qcGc' />
          </div>
          <div className='mt-3'>
            <p className='desc1 text-center'>
              Create, play and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event or discover over a million creator made games, including racing, parkour, zombie survival and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. find it all in Fortnite...Drop in.
            </p>
            <div className='d-flex justify-content-center align-items-center mt-5'>
            <button className='btn btn-light w-25'>Visit Website</button>
          </div>
          </div>
          
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>

      <div className='mt-5'>
        <Row>
        <Col lg={3}></Col>
        <Col>
         <Row>
          <Col className='text-center'>
            <img width={'220px'} height={'225px'} src='https://imgs.search.brave.com/J9xf8v2jZxD02s_Mcz2kGcyGs2xgcwBgcA8jbdy9utY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZHJpZnQtZm9y/dG5pdGUtcGljdHVy/ZXMtcmFxZ2g5NHhx/dWRvNDk0dS5qcGc' />
            <p className='desc2 text-center mt-2'>Explore Large, Destructible<br/> Environments, Where No Two Games<br/> Are Ever The Same.</p>
          </Col>
          <Col className='text-center'>
          <img width={'220px'} height={'225px'} src='https://imgs.search.brave.com/YS5mwOhaANPQcmDEu6GwKqCKcVO_bIJIfwh3iKTCISw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZjL2Uy/L2ZhL2ZjZTJmYTM5/N2FkZmY1YzJkMTM1/ZTAyMWYwN2M2OTIw/LmpwZw' />
          <p className='desc2 text-center mt-2'>Team Up With The Friends By Sprinting,<br/> Climbing And Smashing Your Way To<br/> Earn Your Victory Royale</p>
          </Col>
          <Col className='text-center'>
          <img width={'220px'} height={'225px'} src='https://imgs.search.brave.com/2WeIIaMhJgWf1rom5OlM6vwsLlxZcQY1y4HUVA2x21k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZm9ydG5pdGUt/Y29vbC1waWN0dXJl/cy1hd3N3dmhmZ240/bmV6bXV0LmpwZw' />
          <p className='desc2 text-center mt-2'>Discover Even More Ways To Play<br/> Across Thousands Of Creator-Made<br/> Game Genres.</p>
          </Col>
         </Row>
        </Col>
        <Col lg={3}></Col>
        </Row>
      </div>

      <div className='mt-5'>
        <Row>
        <Col lg={3}></Col>
        <Col>
        <p className='header1 d-flex justify-content-center align-items-center mt-2'>Our Contribution</p>
        <p className='desc3 text-center mt-2'>Our core offering extends beeyond mere profit generations; we emphazize the growth and active involvement of our user community. Collaborating with us represents on investments, rather than a mere expenditure. Our dedication to providing distinctive digital interaction guarantees unparalleled benefits for our clientele.</p>
        </Col>
        <Col lg={3}></Col>
        </Row>
      </div>

      <div className='mt-5'>
        <Row>
        <Col lg={3}></Col>
        <Col className='text-center'>
           <Row>
           <Col lg={4}>
           <h1>5M</h1>
           <p>Daily User <br/>Engagements</p>
           </Col>
           <Col lg={4}>
           <h1>$500K</h1>
           <p>Revenue Surge for an<br/>Platform</p>
           </Col>
           <Col lg={4}>
           <h1>10X</h1>
           <p>RAOS for all our<br/> marketing campaigns</p>
           </Col>
           </Row>
        </Col>
        <Col lg={3}></Col>
        </Row>
      </div>

      <div>
        <Row>
        <Col lg={3}></Col>
        <Col>
          <div className='contact_us'>
            <h3 className='text-center'>Interested In Developing Deeper Into The Project?</h3>
            <p className='text-center mt-4'>
              If you'd like to explorefurther details about our initiatives or any of our affliated brands, don't hesistate to connect. You can reach to us via email at <span className='fw-bolder'>hello@abc.com</span> or give us a call at <span className='fw-bolder'>+91 480 20802730</span>
            </p>
          </div>

          <div className='contact d-flex justify-content-center align-items-center gap-4'>
            <button className='btn btn-dark border-white w-25'>Ring us on Skype</button>
            <button className='btn btn-light w-25'>Contact us</button>
          </div>

          <div className='footer'>
            <p className='text-center'>© 2019-2023 abcTechnologies Solutions.Pvt.Ltd. All Rights Reserved</p>

          </div>
        </Col>
        <Col lg={3}></Col>
        </Row>
      </div>
    
    </div>
  );
}

export default App;
