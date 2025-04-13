import React from "react";
import "../../assets/css/homepage.css"; // Make sure this path is correct

export default function WomanFitness() {
    function ShowPrice (){
        document.getElementById('btnMember').innerHTML = '<b>Цена За Един Месец: <br> 50лв.</b>'
   }
   function ShowPhoneNum(){
       document.getElementById('btnPhoneNum').innerHTML = '<b>Обадете се на телефон: <br> 088 832 4378</b>'
   }

  return (
    <div>
      <div className="girlF">
        <h3 data-aos="fade-right" data-aos-duration="1000">
          ЛИЧЕН ФИТНЕС МЕНТОР <br />
          С ИНСТРУКТОР <br />
          ВИКТОРИЯ ВАСИЛЕВА <br />
          ЗА ЖЕНИ
        </h3>
        <div className="home-btn">
          <button
            id="btnMember"
            onClick={ShowPrice}
            className="btn text-white font-weight-bold"
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
              Какво представлява <br /> фитнес класът?
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Този пакет включва индивидуални тренировки с инструкторка на
              разпокъсан график (когато на вас ви е удобно). Получавате
              хранителен режим, 20% намаление на месечната такса за фитнес карта
              и 20% намаление при пазаруване на наши продукти.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Тази тренировъчна програма за фитнес е предназначена за жени,
              които имат желание да постигат резултати. Както подсказва името,
              програмата е четиридневна – два дни за долна част и два дни за
              горна част на тялото.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Долната част: предни бедра, прасец, дупе / задни бедра, прасец,
              дупе. <br />
              Горната част: избутващи (гърди, рамо, трицепс) и издърпващи (гръб,
              бицепс) упражнения.
            </h6>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?cs=srgb&dl=pexels-mastercowley-1153370.jpg&fm=jpg"
              alt="Фитнес клас"
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
              src="https://www.spri.com/cdn/shop/articles/ladies_who_lunge.png?v=1553206811"
              alt="Тренировки за жени"
              style={{ width: "100%" }}
            />
          </div>
          <div className="text-column col-sm-6">
            <p id="textInCol" data-aos="fade-left" data-aos-duration="1000">
              Разберете всичко за това как трябва да тренират дамите, които
              нямат спортен опит
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Доброто здраве изисква грижа – редовното движение е един от
              най-добрите подаръци за себе си. Резултатите идват бързо – и
              физически, и психически.
            </h6>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Ако искате да започнете, но не знаете откъде – прочетете
              внимателно. Какви упражнения, как да ги изпълнявате, колко често –
              ще разберете всичко тук.
            </h6>
          </div>
        </div>
      </div>

     
      <div className="yoga3-container mg-t mg-b">
        <div className="row">
          <div className="text-column col-sm-6">
            <p id="yoga3-text" data-aos="fade-left" data-aos-duration="1000">
              Какви упражнения се извършват от жените според желаните цели?
            </p>
            <br />
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Независимо дали целта е отслабване или стягане – тренировъчният
              план трябва да включва:
              <br />
              ✅ Кардио тренировки за изгаряне на мазнини и подобряване на
              дишането
              <br />
              ✅ Силови тренировки за мускулен растеж и костна плътност
              <br />
              ✅ Статичен стречинг за поддържане на гъвкавостта
            </h6>
            <br />
            <p id="yoga3-text" data-aos="fade-left" data-aos-duration="1000">
              Кардио тренировка
            </p>
            <h6 data-aos="fade-left" data-aos-duration="1000">
              Фитнес клубовете предлагат разнообразие от кардио възможности –
              идеални за откриване на вашия любим стил.
            </h6>
          </div>
          <div className="image-column col-sm-6">
            <img
              id="image"
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://backinmotionsspt.com/wp-content/uploads/2021/04/womensfitnessmyths.png"
              alt="Женски тренировки"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
