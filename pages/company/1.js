import Head from "next/head"
import React,{useState, useEffect} from 'react'
import Nav from "../../component/nav";
import DbData from "../../Db.json"
import StaticDBAR from "../../StaticDBAR.json";
import Footer from "../../component/Footer";
const egy_taxes_0 = ()=>{
  const [hasError, setErrors] = useState(false);
  const [number, setNumber] = useState({});
  const DB = DbData[0];
  const URL = DB.url;
  const myLang = StaticDBAR;
  useEffect(() => {
      async function fetchDate(){
        // const res = await fetch(`https://api.countapi.xyz/get/youtube.com/`)
        const res = await fetch(`https://api.countapi.xyz/get/${URL}`)
        res
          .json()
          .then(res=>setNumber(res))
          .
          catch(res=>setErrors(err))
          // console.log('hjgjhg');
          
      }
      fetchDate();
    }
  )
  return(
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="description" content="خد دورك وإقضي مشاويرك"/>
        <meta name="keywords" content="bldor,بالدور,بلدور,بدور,دورك,دوري,baldor,beldor,bldoor,beldoor,baldoor,"/>
        <meta name="author" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel ='stylesheet' href='./css/main.css'/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="icon" href="../../image/favicon.jpeg" />
        <title>BLdOR | بالدور</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
      <Nav/>
      <section>
        <h2>{DbData[0].branchCompany}</h2>
        {/* <h2> مصلحة الضرائب المصرية</h2> */}
        <h2>{DB.companyName}</h2>
        <p>{StaticDBAR.page.number}</p>
        <h2 id="count">{JSON.stringify(number.value)}</h2>
      </section>
      <Footer/>
      <style jsx>{`
        section{
          display: flex;
          margin: 0;
          flex-direction: column;
  
          align-items: center;
          justify-content: center;
          padding-bottom: 1.4rem;
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
    </>
  )
}

export default egy_taxes_0
