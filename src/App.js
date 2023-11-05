import "./App.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import newHands from "./assets/images/newHands.png";
import bestHands from "./assets/images/og.JPG";
import bestHandsTwo from "./assets/images/og2.JPG";
import bestHandsSeance from "./assets/images/seance.png";
import summoning from "./assets/images/callingTheKing.png";
import portrait from "./assets/images/portrait.png";
import falseAccusations from "./assets/images/definitelyNotKelly.jpeg";
import fightMilk from "./assets/images/fightMilk.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jack Kelly's Site For Very Professional Lawyers</h1>
      </header>
      <body>
        <h2> You're in big capable hands!</h2>
        <img src={newHands} className="professionalNewHands" alt="newHands" />
        <p> Two very fine lawyers after successful case</p>

        <div className="fansAndTestimonials">
          <h2 className="fansAndTestimonialsHeader">Fan submissions</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                src={bestHands}
                className="bestHandsImg"
                alt="bestHandsImg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bestHandsTwo}
                className="bestHandsImg"
                alt="bestHandsTwoImg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bestHandsSeance}
                className="bestHandsImg"
                alt="bestHandsSeanceImg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={summoning}
                className="bestHandsImg"
                alt="summonImage"
              ></img>
            </SwiperSlide>
          </Swiper>
          <p>
            {" "}
            Submission from
            <br />
            <i>
              <b>
                Poppy
                "LoveOfMyLifeWowThisIsTheBestPersonI'veEverMet❤️😍😍😍😍😍"
                Gilgunn
              </b>
            </i>
          </p>
          <br></br>
          <h2 className="testimonialsHeader">Testimonials</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <br />
              <i>"He makes me feel so uncomfortable"</i>
              <br />
              <b>- Poppy G.</b>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <br />
              <i>"I'm going to prison"</i>
              <br />
              <b>- Bill P.</b>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <br />
              <i>
                {" "}
                "Do you have any idea how much money I have in alimony? How are
                you a Lawyer?"
              </i>
              <br />
              <b>- Dennis R.</b>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <br />
              <i> "Stop leaving me voicemails Jack, I don't want to be pals"</i>
              <br />
              <b>- Charlie K. (Bird Lawyer)</b>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <br />
              <i> "What? No I won't leave a review, get out of here, scram" </i>
              <br />
              <b>- Deandra R.</b>
              <br />
            </SwiperSlide>

            <SwiperSlide>
              <br />
              <i>
                {" "}
                [<b>Karate Sounds</b>]{" "}
              </i>
              <br />
              <b>- Ronlad McD.</b>
              <br />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="aboutMe">
          <h2>About Me</h2>
          <img src={portrait} className="portrait" alt="portraitImg"></img>
          <p>
            I'm a great lawyer known by many as a man with great strong hands,
            good for carrying cases and holding people like my nephew (Please
            call me if you're reading this Charlie, your uncle misses you). Call
            me if you need a lawyer or a photographer to take pictures of your
            family.
            <b> Boys to teens only.</b>
          </p>
          <img
            src={falseAccusations}
            className="portrait"
            alt="falseAccusationsimg"
          ></img>
          <p>
            {" "}
            There have also been <b>false accusations</b> about this photo being
            me. As you can see form the red circles this has been edited to make
            my hands look smaller
          </p>
          <h3>END</h3>
        </div>
        <div className="googleJoke">
          <input type="form" className="UselessTextBox" placeholder="Not Google"></input>
          <p>
            Enter Text. Google Search. Enter. Big hands. How to grow hands. Big
            hand surgery. How to law. Delete website word
          </p>
        </div>
      </body>
      <footer>
        <div className="row">
          <div className="column">
            Sponsored by FightMilk.
            <br />
            <b>CAAW.</b>
            <br />
            <i>The official drink of the UFC</i>
          </div>
          <img
            src={fightMilk}
            className="column fightMilk"
            alt="fightMilkimg"
          ></img>
        </div>
      </footer>
    </div>
  );
}

export default App;
