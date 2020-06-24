import Head from 'next/head'
import  React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Nav from '../component/nav'
import DbData from "../Db.json"
import StaticDBAR from "../StaticDBAR.json"
// import Footer from '../component/Footer'

// https://codesandbox.io/s/react-hooks-search-filter-4gnwc?file=/src/index.js:1460-1473
const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const myLang= StaticDBAR.index;
  useEffect(() => {
        setCompanies(DbData);
  }, []);

  useEffect(() => {
    setFilteredCompanies(
      companies.filter(company =>
        company.companyName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, companies]);

  return (
    <div className="container">
    <Head>
    <meta charset="UTF-8"/>
    <meta name="description" content="سجل شركتك/جهتك معنا مجانا بهدف الحفاظ على صحتك وصحة من حولك (#حافظ_على_المسافة_الامنه #دورك_محفوظ #صحتك_في_بعدك #الدايرة_بتقرب"/>
    <meta name="keywords" content="bldor,بالدور,بلدور,بدور,دورك,دوري,baldor,beldor,bldoor,beldoor,baldoor,الصحة,صحتي,صحتك,تباعد"/>
    <meta name="author" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel ='stylesheet' href='./css/main.css'/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="icon" href="../image/favicon.jpeg"/>
    <title>BLdOR | بالدور</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    </Head>

    <main>
    <Nav/>
    <section>
        <h2>{myLang.title1}</h2>
      <input
        type="text"
        placeholder="Search Companies..."
        onChange={e => setSearch(e.target.value)}
        />
      {filteredCompanies.map((company, idx) => (
        <CountryDetail key={idx} {...company} />
        ))}
    </section>
    </main>
    {/* <Footer/> */}
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ed8f438791ae46a"></script>
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
  );
}

const CountryDetail = (props) => {
  const { companyName,dir } = props;
  return (
    <>
      <Link href={`../company/${dir}`}>
        <a>{companyName}</a>
      </Link>
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
        max-width:70%;
      }
    `}</style>
    </>
  );
};



export default Home
