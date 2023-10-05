// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, setActiveTab, activeId} = props
  const {id, language} = eachItem

  const onClickTab = () => {
    setActiveTab(id)
  }

  return (
    <li
      key={id}
      className={id === activeId ? `active menu-item` : `menu-item`}
      onClick={onClickTab}
    >
      {language}
    </li>
  )
}
export default LanguageFilterItem
