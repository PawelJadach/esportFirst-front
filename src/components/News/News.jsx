import React from 'react'
import styles from './News.module.scss';

class News extends React.Component {
  state = {
    actualNews: 1,
    news: [
      {
        id: 1,
        img: 'news1',
        title: 'News 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
      },
      {
        id: 2,
        img: 'news2',
        title: 'News 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
      },
      {
        id: 3,
        img: 'news3',
        title: 'News 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
      },
      {
        id: 4,
        img: 'news4',
        title: 'News 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
      }
    ]
  }

  changeNews(id){
    this.setState((prevState) => ({
      actualNews: id,
    }));
  }

  render() {
    const actuall = this.state.news[this.state.actualNews - 1];
    return (
      <div className={styles.root}>
        <nav>
          <ul>
            {this.state.news.map(singleNews => 
            <li key={singleNews.id}>
              <button onClick={() => this.changeNews(singleNews.id)}>News {singleNews.id}</button>
            </li>
            )}
          </ul>
        </nav>
        <div className={styles.news}>
        <div className={styles.img} style={{backgroundImage: `url('/assets/${actuall.img}.jpg')`}}></div>
          <div className={styles.content}>
            <h2>{actuall.title}</h2>
            <p>{actuall.content}</p>
            <a href="#" className={styles.btn}>Czytaj więcej</a>
          </div>
        </div>
      </div>
    )
  }
}


export default News;
