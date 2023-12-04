import React from 'react';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import '../../components/menu/menu.css';
import '../../components/header/header.css';
import News from '../../components/news/news';

function NewsView(){
    return(
        <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <News className="content-newsView"/>
      </div>
    </div>
    );
}

export default NewsView;