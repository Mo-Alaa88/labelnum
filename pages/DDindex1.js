import Head from 'next/head'
import  React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Nav from '../component/nav'
import DbData from "../public/Db.json"
import Contacts from '../component/Contacts'

// https://codesandbox.io/s/react-hooks-search-filter-4gnwc?file=/src/index.js:1460-1473
const Home = () => {
  const [people, setCountries] = useState(DbData)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  
  useEffect(() => {
    const results = people.map((item)=>item.companyName);
    const resFilter= results.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(resFilter);
  }, [searchTerm]);

  return(
  <div className="container">
    <Head>
      <meta charset="UTF-8"/>
      <meta name="description" content="خد دورك وإقضي مشاويرك"/>
      <meta name="keywords" content="bldor,بالدور,بلدور,بدور,دورك,دوري,baldor,beldor,bldoor,beldoor,baldoor,"/>
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
      {/* <h1 class="right">BLdOR</h1> */}
      <section>
      <h2>خد دورك وإقضي مشاويرك</h2>
        <h2><span>BLdOR</span> وفر وقتك مع</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchResults.map((item ,index)=> (
        <>
          <Link href={`./AR/${item}`}>
            <a>{item}</a>
          </Link>
        </>
      ))}

        <Link href="./EN/egy_taxes_0">
          <a>مصلحة الضرائب المصرية دمياط 2 </a>
        </Link>
        {/* <Link href="./egy_taxes_0_admin">
          <a>الادمين</a>
        </Link> */}
      </section>
    </main>

    <footer>
        <Contacts/>
    </footer>

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
        font-size: xx-large;

      }

      a{
        text-decoration: none;
        color: black;
        background: #fff;
        text-align: center;
        font-size: x-large;
        font-weight: bold;
        border-radius: 5px;
        padding: 8px;
        margin-top:1.25rem;
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
)}

export default Home
