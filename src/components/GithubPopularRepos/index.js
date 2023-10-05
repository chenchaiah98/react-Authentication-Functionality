import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {activeId: 'ALL', apiData: []}

  componentDidMount() {
    this.getApiLanguageData()
  }

  setActiveTab = id => {
    this.setState({activeId: id})
  }

  getApiLanguageData = async () => {
    const url = 'https://apis.ccbp.in/popular-repos'
    const response = await fetch(`${url}`)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data.popular_repos)
      this.setState({apiData: data.popular_repos})
    } else {
      console.log('error')
    }
  }

  render() {
    const {activeId, apiData} = this.state

    return (
      <div className="main-app-container">
        <h1 className="main-heading">Popular</h1>
        <div>
          <ul className="list-menu-item">
            {languageFiltersData.map(eachItem => (
              <LanguageFilterItem
                eachItem={eachItem}
                key={eachItem.id}
                setActiveTab={this.setActiveTab}
                activeId={activeId}
              />
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {apiData.map(each => (
              <li key={each.id}>
                <div>
                  <img src={each.avatar_url} alt={each.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
