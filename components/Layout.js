import Hamburger from './Hamburger'

const Layout = ({children}) => {
    return (
        <div id="main-cont">
            <Hamburger/>
            <main>
                {children}
            </main>

        </div>
    )
}

export default Layout
