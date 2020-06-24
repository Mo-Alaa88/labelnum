import Head from 'next/head'
import  React,{useState,Component} from 'react'
import Link from 'next/link'
import Nav from "../component/nav";
import Footer from '../component/Footer';
import StaticDBAR from '../StaticDBAR.json'

const myLang = StaticDBAR.sugstions;
// const RegistrationPage =(lang)=>{
class RegistrationPage extends Component{
  constructor(props){
    super(props)
    this.state={
      fullName:'',
    }
  }
// const myLang = StaticDBAR.RegistrationPage,
// [name,setName]=useState(),

handleSubmit =(event)=>{
  event.preventDefault()
  const data= this.state;
  console.log("final data",data);
  console.log(`ffff  ${data.fullName}`);
  // event.target.value='';

  // console.log(`Submit ${name}`);
  
}
handleInput=(event)=>{
  event.preventDefault()
  // console.log(event);
  // console.log(event.target.name);
  // console.log(event.target.value);
  this.setState({
    [event.target.name]:event.target.value
  })  

}

render(){

  return(
    <div className="container">
    <Head>
      <meta charset="UTF-8"/>
      <meta name="description" content="خد دورك وإقضي مشاويرك"/>
      <meta name="keywords" content="bldor,بالدور,بلدور,بدور,دورك,دوري,baldor,beldor,bldoor,beldoor,baldoor,إحجز,إشترك,شركة,إشتراك شركة,إشتراك جهة,جهه"/>
      <meta name="author" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel ='stylesheet' href='./css/main.css'/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="icon" href="../image/favicon.jpeg" />
      <title>BLdOR | بالدور</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    <main>
      <Nav/>
      <section>
        <h1>{myLang.title}</h1>
        <p>
          {myLang.content}
        </p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2dKtMs04lANA3P8x9ZbgCfC2Sn-ZUrC5BrydzgWFxi9AbDQ/viewform?embedded=true" width="640" height="923" frameborder="0" marginheight="0" marginwidth="0">جارٍ التحميل…</iframe>      </section>
    
    </main>
    <Footer/>
    <style jsx>{`
      section{
        display: flex;
        margin: 0.5rem;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;
        padding-bottom: 1.4rem;
      }
      
      p{
        font-size: xx-large;
        text-align:center;
        font-weight: bold; 
      }

      iframe {
        height: 1042px;
        width: 100%;
      }
    `}</style>

    <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');
      * {
        box-sizing: border-box;
      }

      body {
        background-color: #192a56;
        color: #fff;
        font-family: 'Amiri';
        flex-direction: column;
        display: flex;
        margin: 0;
        
      }
    `}</style>

    </div>
)
}}

export default RegistrationPage