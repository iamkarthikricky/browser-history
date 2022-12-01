import { Component } from "react"
import './index.css'

const initialHistoryList = [
    {
      id: 0,
      timeAccessed: '07:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Instagram',
      domainUrl: 'instagram.com',
    },
    {
      id: 1,
      timeAccessed: '05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Twitter. It’s what’s happening / Twitter',
      domainUrl: 'twitter.com',
    },
    {
      id: 2,
      timeAccessed: '04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Facebook – log in or sign up',
      domainUrl: 'facebook.com',
    },
    {
      id: 3,
      timeAccessed: '04:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
      title: 'LinkedIn: Log In or Sign Up',
      domainUrl: 'linkedin.com',
    },
    {
      id: 4,
      timeAccessed: '04:00 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
      title: 'Hashnode: Everything you need to start blogging as a developer!',
      domainUrl: 'hashnode.com',
    },
    {
      id: 5,
      timeAccessed: '03:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
      title: 'GitHub: Where the world builds software · GitHub',
      domainUrl: 'github.com',
    },
  
    {
      id: 6,
      timeAccessed: '02:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
      title: 'React – A JavaScript library for building user interfaces',
      domainUrl: 'reactjs.org',
    },
    {
      id: 7,
      timeAccessed: '01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
      domainUrl: 'stackoverflow.com',
    },
  
    {
      id: 8,
      timeAccessed: '09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Gmail',
      domainUrl: 'mail.google.com',
    },
    {
      id: 9,
      timeAccessed: '09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Google',
      domainUrl: 'google.com',
    },
  ]

  
const SearchHistory = props => {
    const {history, deleteHistory} = props
    const {id, timeAccessed, logoUrl, title, domainUrl} = history
    const onDelete = () => {
      deleteHistory(id)
    }
    return (
      <li className="historyList">
        <p className="time">{timeAccessed}</p>
        <div className="titleContainer">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="historyTitle">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <div className="buttonContainer">
          <button
            type="button"
            className="button"
            onClick={onDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="deleteLogo"
            />
          </button>
        </div>
      </li>
    )
}


  
class BrowserHistory extends Component {

    state = {searchInput: '', historyList:initialHistoryList}
  
    onChangeSearchInput = event => {
      this.setState({
        searchInput: event.target.value,
      })
    }
  
    deleteHistory = id => {
      const {historyList} = this.state
      const filteredHistory = historyList.filter(each => each.id !== id)
      this.setState({historyList: filteredHistory})
    }
  
    render() {
      const {searchInput, historyList} = this.state
      const searchResults = historyList.filter(eachItem =>
        eachItem.title.includes(searchInput),
      )
  
      return (
        <div className="bg">
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
              alt="app logo"
              className="websiteLogo"
            />
            <div>
              <div className="searchBar">
                <div className="searchIcon">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                    alt="search"
                  />
                </div>
                <input
                  type="search"
                  className="searchInput"
                  placeholder="Search History"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
          <div className="historyContainer">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map(eachItem => (
                  <SearchHistory
                    key={eachItem.id}
                    history={eachItem}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            ) : (
              <p className="error">There is no history to show</p>
            )}
          </div>
        </div>
      )
    }
  }
export default BrowserHistory