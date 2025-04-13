import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/homepage.css" 
export default function SpaCenter() {
  return (
    <div>
      
      <div className="spacenters text-center">
        <h3 className="text-white" data-aos="fade-right" data-aos-duration="1000">
          СПА ЦЕНТЪР <br />
          WIZZTECH PROGRAMS
        </h3>
        <p className="text-white" style={{ fontSize: "30px", fontWeight: "bold" }}>
          Включва Масаж, Басейн(детски включително) <br /> Джакузи, Сауна, Парна Баня
        </p>
      </div>

      
      <div className="row mt-5">
        {/* Left  */}
        <div className="col-lg-4  mb-4 mb-lg-0">
          <img
            src="https://www.wellton.com/storage/files/oasis.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="kami"
            data-aos="zoom-out-down"
            data-aos-delay="360"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/231/111/776/relax-girl-massage-wallpaper-preview.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="geri"
            data-aos="zoom-out-up"
            data-aos-delay="400"
          />
          <img
            src="https://www.kempinski.com/var/site/storage/images/9/0/7/0/390709-1-eng-GB/16d135c952b4-74460612_4K.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-out-down"
            data-aos-delay="380"
          />
          <img
            src="https://assets-global.website-files.com/62aff561b8be5a2e0d2fcf76/63f5977f207f7c1827a8e644_how%20many%20calories%20burned%20in%20sauna%202.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boo"
            data-aos="zoom-in-right"
            data-aos-delay="470"
          />
          <img
            src="https://media.edinburgh.org/wp-content/uploads/2023/03/30151747/one-spa-hydropool-night-1920x1080.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-out-down"
            data-aos-delay="500"
          />
        </div>

        {/* Middle  */}
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/young-black-woman-enjoying-in-sauna-royalty-free-image-1707761078.jpg?crop=0.88931xw:1xh;center,top&resize=1200:*"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="coolaf"
            data-aos="zoom-out-right"
            data-aos-delay="390"
          />
          <img
            src="https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="whoknew"
            data-aos="zoom-out-down"
            data-aos-delay="430"
          />
          <img
            src="https://glory-relaxation.com/assets/img/1920-1080/Glory-spa-ajman-slider-1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-in-left"
            data-aos-delay="450"
          />
          <img
            src="https://eu-assets.simpleview-europe.com/causewaycoast/imageresizer/?image=%2Fdbimgs%2FCCG%20Blog%20Post%20-%20Relaxing%20Spa%20Experiences%20-%20Roe%20Park%20Spa%20COVER.jpg&action=FeaturedItemsScroll20193x2"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-out-left"
            data-aos-delay="490"
          />
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/188599855.jpg?k=eba1e1bad0ee85d7ef6056e4f6b5ce3c865f664485128638d2b98f333ea044c2&o=&hp=1"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-in-up"
            data-aos-delay="530"
          />
        </div>

        {/* Right */}
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/188599850.jpg?k=fef0f92c586ed17bc0bb795a6f2a101a6036af98a9ede725217a48f99345971f&o=&hp=1"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
            data-aos="zoom-out-up"
            data-aos-delay="410"
          />
          <img
            src="https://artdesign.bg/wp-content/uploads/2020/07/spa-hotel-perelik6.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Kimo"
            data-aos="zoom-out-left"
            data-aos-delay="460"
          />
          <img
            src="https://www.velvesa.ro/user_data/ponuka-masazi-1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="crowddealer"
            data-aos="zoom-in-down"
            data-aos-delay="320"
          />
          <img
            src="https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/g_auto/Imagery/Imagery/NoBrand/P/PPTHIHH/DoubleTreatmentCabin2_HiltonHotelTahiti.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-out-right"
            data-aos-delay="550"
          />
          <img
            src="https://www.onfire.bg/data/uploads/originals/hotels/276/adda90fa461fb7782000cd1e8daa8dfc.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boomboom"
            data-aos="zoom-in-left"
            data-aos-delay="570"
          />
        </div>
      </div>
    </div>
  );
}
