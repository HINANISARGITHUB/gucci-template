// pages/_app.js
import {Header} from './component/header'
import Heading from './component/heading'
import Hero from './component/hero'


export default function Home() {
    return (
        <div>
           <Header />
           <Heading />
           <Hero />
        </div>
    )
   
}
