import React,{ useEffect,useState } from "react";
import Head from 'next/head'
import Nav from "../../../component/nav";
import DbData from "../../../Db.json"
import Footer from "../../../component/Footer";
import StaticDBAR from "../../../StaticDBAR.json";

const egy_taxes_0_admin = ()=>{
    const [newNumber ,setNewNumber]= useState('');
    //  [number, setNumber] = useState({}),
    // myURL = `asqdsf`;
    const URL =DbData[0].url;


    const  incrementVisitCount= async()=> {

        const addNum = await fetch(`https://api.countapi.xyz/update/${URL}/?amount=1`,);
    };

    const resetVisitCount= async ()=>{
        const decNum = await fetch(`https://api.countapi.xyz/set/${URL}/?value=0`,);
    }

    const notes = ()=>{
        alert('Are you sure?')

    }

    // useEffect(()=>{
    //     incrementVisitCount()
    // },[])
    
     
    return(
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" href="../../../image/favicon.jpeg" />
                <title>BLdOR | بالدور</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <Nav/>
            <section>
                {/* <h2> مصلحة الضرائب المصرية</h2> */}
                <h2>{`${DbData[0].admin} ${DbData[0].companyName}`}</h2>
                {/* <button onClick={()=>setNewNumber(`https://api.countapi.xyz/update/youtube.com/?amount=1`)}>Pluse</button> */}
                <button onClick={incrementVisitCount}>{StaticDBAR.adminPage.increment}</button>
                <button onClick={resetVisitCount}>{StaticDBAR.adminPage.reset}</button>
                <button onClick={notes}>{StaticDBAR.adminPage.rese}</button>

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
                h2{
                    max-width:90%;
                }
            `}</style>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    background-color: #192a56;
                    color: #fff;
                    font-family: 'Muli', sans-serif;
                    flex-direction: column;
                    display: flex;
                    margin: 0;
                }
            `}</style>

        </>
    )
}
export default egy_taxes_0_admin