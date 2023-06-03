import facebook from "./assets/facebook.svg"
import linkin from "./assets/linkin.svg"
import photo from "./assets/photo.svg"
import phone from "./assets/ph.svg"
import mail from "./assets/mail.svg"
export default function App(){
    return(
        <div className="h-screen bg-sky-100">
            <nav className=" h-1/6 flex justify-between items-center sm:justify-start sm:ml-20 lg:ml-24 ">
                <h6 className=" text-2xl">Portfolio</h6>
            </nav>
            <div className="h-4/6 md:flex">
                <div className=" h-1/3 flex justify-center sm:h-1/2 md:h-full md:w-1/3 md:items-center">
                    <img src={photo} alt="my photo" className=" avatar rounded h-full w-fit md:h-2/3"/>
                </div>
                <div className=" h-2/3  flex flex-col sm:1/2 md:h-full md:w-2/3 md:justify-center" >         
                        <p className=" text-xs ml-3 md:ml-0 md:text-xl sm:text-sm">Hi,My name is Ye Htet Aung.I am 18 years old enthusiastic web developer.I've been studying web developement for certain amount of time and I have strong knowledge of html,css,tailwind,javascript and python.Now,I am trying to extend my tech stack by learning react and daisy ui.I am open to junior or intern opportunities.I've mentioned the ways to be in touch with me in the footer sections if your are interested.Thank you.
                        </p>
                        <p className=" text-sm ml-3 mt-3 md:text-xl sm:text-md md:ml-0">My tech stack: html, css, javascript , python, tailwind, daisyui, react.</p>
                        
                </div>
            </div>
            <footer className="h-1/6">
                <div className="text-center h-1/5">Contact</div>
                <div className="flex justify-center h-1/5">
                    <p>via:</p>
                    <a href="" className=" ml-2" onClick={()=> window.open("https://www.facebook.com/profile.php?id=100068586881627", "_blank")}> 
                        <img src={facebook} alt="telegram" width="23px" height="23px"/>
                    </a>
                    <a href="" className="ml-2">
                    <img src={linkin} alt="telegram" width="23px" height="23px" onClick={()=>window.open("https://www.linkedin.com/in/ye-aung-52a053266/", "_blank")}/>
                    </a>
                </div>
                <p className="text-center h-1/5">or</p>
                <div className=" flex h-1/5 justify-center items-center">
                <img src={phone} alt="phone" height="13px" width="13px"/>
                <div className="">:+95947900982</div>
                </div>
                <div className="flex justify-center items-center h-1/5">
                <img src={mail} alt="mail" width="13px" height="13px" />
                <div className="">:yehtet804p@gmail.com</div>
                </div>
            </footer>
        </div>
    )
}
