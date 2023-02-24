import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="config-controller-container">
          <h1 className="config-controller-heading">Layout</h1>
          <div className="checkbox-field-container">
            <input
              type="checkbox"
              id="showContent"
              className="checkbox-input"
              checked={showContent}
              onChange={onToggleShowContent}
            />
            <label className="labels" htmlFor="showContent">
              Content
            </label>
          </div>

          <div className="checkbox-field-container">
            <input
              type="checkbox"
              id="showLeftNav"
              className="checkbox-input"
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            <label className="labels" htmlFor="showLeftNav">
              Left Navbar
            </label>
          </div>

          <div className="checkbox-field-container">
            <input
              type="checkbox"
              id="showRightNav"
              className="checkbox-input"
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            <label className="labels" htmlFor="showRightNav">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
