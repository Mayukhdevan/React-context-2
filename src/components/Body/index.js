import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const leftNavBar = () => (
    <div className="left-navbar-container">
      <h1 className="body-headings">Left Navbar Menu</h1>
      <ul className="items-list">
        <li className="left-items">
          <p className="item-text">Item 1</p>
        </li>
        <li className="left-items">
          <p className="item-text">Item 2</p>
        </li>
        <li className="left-items">
          <p className="item-text">Item 3</p>
        </li>
        <li className="left-items">
          <p className="item-text">Item 4</p>
        </li>
      </ul>
    </div>
  )
  const content = () => (
    <div className="content-container">
      <h1 className="body-headings">Content</h1>
      <p className="lorem-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        maximus vulputate diam eget lacinia. Nulla sagittis lorem quam.
        Suspendisse sit amet arcu arcu. Suspendisse.
      </p>
    </div>
  )
  const rightNavBar = () => (
    <div className="left-navbar-container">
      <h1 className="body-headings">Right Navbar</h1>
      <div className="ad-container">
        <div>Ad 1</div>
        <div>Ad 2</div>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body">
            {showLeftNavbar && leftNavBar()}
            {showContent && content()}
            {showRightNavbar && rightNavBar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
