import BookSlider from "../../Components/Book-Slider/BookSlider"
import HeadingTitle from "../../Components/Heading-title/HeadingTitle"
import Services from "../../Components/Services/Services"
import Slider from "../../Components/Slider/Slider"
import {books} from "../../Components/Data/Books"
function HomePages (){
    return(<div className="home">
           <Slider/>
    <Services/>
    <HeadingTitle title="Most gifted"/>
    <BookSlider data={books}  />
    <HeadingTitle title="Most seller"/>
    <BookSlider data={books}  />
    <HeadingTitle title="Most wished for"/>
    <BookSlider data={books}  />
    </div>)
}export default HomePages