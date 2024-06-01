import { Song } from "./Song/Song"
import "./Songs.css"

export const Songs = () => {
    return <>
        <section className="my-5 px-8">
            <div className="grid gap-6 md:grid-cols-2 gird-cols-1 xl:grid-cols-3">
                <div>
                    <div className="flex items-center">
                        <svg fill="var(--green-color)" className="me-2" style={{ width: "30px", height: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path>
                        </svg>
                        <a href="#" className="song__header__title">Top Singles</a>
                    </div>
                    <div>
                        <Song isLive={155} href="https://dl.tiarin.ir/FRE/2022/1/Persian%20Pop%202%20(Tiarin%20Playlist)//01%20Rose%20Wine.mp3" img="https://volna.volkovdesign.com/img/covers/cover1.jpg" singer="AudioPizza" name="Cinematic" rank={{ number: 1, icon: "success", iconNumber: 1 }} />
                        <Song isLive={155} href="https://dl.tiarin.ir/FRE/2022/1/Persian%20Pop%202%20(Tiarin%20Playlist)//02%20Behtar%20Az%20Mane.mp3" img="https://volna.volkovdesign.com/img/covers/cover2.jpg" singer="AudioPizza" name="Adventure" rank={{ number: 2, icon: "fail", iconNumber: 1 }} />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover3.jpg" singer="AudioPizza" name="Epic Motivational" rank={{ number: 3, icon: "success", iconNumber: 15 }} />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover4.jpg" singer="AudioPizza" name="Upbeat Rock" rank={{ number: 4, icon: "success", iconNumber: 11 }} />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover5.jpg" singer="AudioPizza" name="Ambient Pop" rank={{ number: 5, icon: "success", iconNumber: 2 }} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <svg fill="var(--green-color)" className="me-2" style={{ width: "30px", height: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path>
                        </svg>
                        <a href="#" className="song__header__title">New Singles</a>
                    </div>
                    <div>
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover.svg" singer="AudioPizza" name="Cinematic" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover7.jpg" singer="AudioPizza" name="Adventure" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover8.jpg" singer="AudioPizza" name="Epic Motivational" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover9.jpg" singer="AudioPizza" name="Upbeat Rock" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover10.jpg" singer="AudioPizza" name="Ambient Pop" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <svg fill="var(--green-color)" className="me-2" style={{ width: "30px", height: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path>
                        </svg>
                        <a href="#" className="song__header__title">Podcasts</a>
                    </div>
                    <div>
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover6.jpg" singer="AudioPizza" name="Cinematic" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover9.jpg" singer="AudioPizza" name="Adventure" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover.svg" singer="AudioPizza" name="Epic Motivational" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover11.jpg" singer="AudioPizza" name="Upbeat Rock" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover12.jpg" singer="AudioPizza" name="Ambient Pop" />
                    </div>
                </div>
            </div>
        </section>
    </>
}