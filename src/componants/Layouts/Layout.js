import Menu from '../Menu'

const Layout = ({content}) => {

  return (
    <>
      <Menu />

      <div className="container">
      <div className="row">
        {content}
      </div>
    </div>
    </>
  )
}

export default Layout