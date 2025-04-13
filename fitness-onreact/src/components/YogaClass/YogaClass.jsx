import React from "react";
import "../../assets/css/homepage.css"; 

export default function YogaClass() {
    function ShowPrice (){
        document.getElementById('btnMember').innerHTML = '<b>Цена За Един Месец: <br> 50лв.</b>'
   }
   function ShowPhoneNum(){
       document.getElementById('btnPhoneNum').innerHTML = '<b>Обадете се на телефон: <br> 088 832 4378</b>'
   }

  return (
    <div>
      <div className="yogaa">
        <h3 data-aos="fade-right" data-aos-duration="1000">
          ЙОГА КЛАС <br />
          С ИНСТРУКТОР <br />
          МАРИЕЛА ДИМИТРОВА
        </h3>
        <div className="home-btn">
          <button
            id="btnMember"
            onClick={ShowPrice}
            className="btn text-white font-weight-bold "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            СТАНЕТЕ ЧЛЕН
          </button>
          <button
            id="btnPhoneNum"
            onClick={ShowPhoneNum}
            className="btnl bt"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            ЗАПИШЕТЕ ЧАС
          </button>
        </div>
      </div>

      
      <div className="yoga-container mg-t mg-b">
        <div className="row">
          <div className="text-column col-sm-6">
            <p id="textInCol" data-aos="fade-left" data-aos-duration="1000">
              Какво представлява <br /> йога класът?
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Когато става дума за поддържане на добра физическа форма, фитнес
              тренировките и груповите занимания със сигурност са сред
              най-предпочитаните начини за това.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Мнозина вярват, че един вид активност е достатъчен — било то
              <b> фитнес, танци, йога или пилатес</b>. Но комбинирането с йога
              подобрява стабилността, издръжливостта и формата на мускулите.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Целта е да постигнем промяна, здраве и баланс чрез достъпен и
              ефективен начин на трениране — без излишно напрежение и със
              собствено темпо.
            </h6>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://images.squarespace-cdn.com/content/v1/5d2a3a862abdee0001dcf6f4/1606070915286-742K2JCL2UNRHHED2L1P/Down-Dog-Yoga-In-Studio.jpeg"
              alt="Йога в студио"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      
      <div className="yoga2-container mg-t mg-b">
        <div className="row">
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://c4.wallpaperflare.com/wallpaper/82/384/903/pose-elongation-yoga-exercises-wallpaper-preview.jpg"
              alt="Йога пози"
              style={{ width: "100%" }}
            />
          </div>
          <div className="text-column col-sm-6">
            <p id="textInCol" data-aos="fade-left" data-aos-duration="1000">
              Основна Цел
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Основните цели при фитнеса са подобряване на физическото здраве,
              изгаряне на мазнини и оформяне на атлетично тяло.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Йогата също подобрява физическото състояние, но нейната дълбока
              цел е вътрешна хармония между тялото и ума. Това се постига чрез:
            </h6>
            <br />
            <ul data-aos="fade-left" data-aos-duration="1000">
              <li>изпълнение на йога пози (асани)</li>
              <li>правилно дишане (пранаяма)</li>
              <li>жестове с ръце (мудра)</li>
              <li>освобождаване на блокажи в чакрите</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="yoga3-container mg-t mg-b">
        <div className="row">
          <div className="text-column col-sm-6">
            <p id="yoga3-text" data-aos="fade-left" data-aos-duration="1000">
              Естество на движенията
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Йогата включва бавни, контролирани движения с фокус върху
              дишането. За разлика от това, фитнес упражненията са бързи и
              динамични, често без синхрон с дишането.
            </h6>
            <br />
            <p id="yoga3-text" data-aos="fade-left" data-aos-duration="1000">
              Стимулирани части на нервната система
            </p>
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Фитнесът стимулира симпатиковата нервна система – отговаряща за
              ускорено дишане и сърдечна дейност. Това води до физическа
              умора, но и емоционален стрес.
            </h6>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://c4.wallpaperflare.com/wallpaper/287/254/505/group-fitness-class-wallpaper-preview.jpg"
              alt="Йога групова практика"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}