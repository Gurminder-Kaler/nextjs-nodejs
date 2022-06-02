import Nav from "@/components/Nav";
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>ABC</title>
            </Head>
            <Nav/>
            {children} 
        </>
    )
}

export default Layout;
