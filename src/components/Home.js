import React from "react";
import Wallpaper from '../images/wallpaper.jpeg';

const Home = () => {
    return <div className="home" style={{ backgroundImage: `url(${Wallpaper})` }}>
        <div className="title">İletişim Bilgileri Sayfamıza hoşgeldiniz</div>
        <div>Kolayca kişilerinizi kaydedebilirsiniz</div>
    </div>
}

export default Home;