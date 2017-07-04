/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import '../styles/index.styl'

const articleList = MY_ARTICLE_DATA
console.log(articleList)
export default class Index extends Page {
  render () {
    return (
      <div>
        <section id="container" >
		    <aside className="left-wrap">
		    	<div className="overlay"></div>
	          	<div id="sidebar"  className="nav-collapse">
		          	<header className="inner">
		          		<a href="profile.html" className="profilepic">
                  			<img src="../img/ui-sam.jpg" className="img-circle" />
                  		</a>
                  		<h1 className="header-author">
                  			<a href="/" >
                  				Lealm
              				</a>
                  		</h1>
                  		<p>要求不高，开心就好</p>
		          		<ul className="sidebar-menu" id="nav-accordion">
		                  	<li className="mt">
		                      	<a className="active" href="index.html">
		                          	<i className="glyphicon glyphicon-home"></i>
		                          	<span>首页</span>
		                      	</a>
		                  	</li>
		                  	<li className="sub-menu">
		                      	<a href="javascript:;" >
		                          	<i className="glyphicon glyphicon-credit-card">
		                          	</i>
		                          	<span>归档</span>
		                      	</a>
		                  	</li>
		              	</ul>
		          	</header>
	          	</div>
	      	</aside>
	      	<section id="main-content">
	      		{articleList.map((article,index) => {
	      			return(
	      				<section className="wrapper" key={`content${index}`}>
				            <article>
				              	<div className="meta">{article.createTime}</div>
				              	<h1 className="title">{article.title}</h1>
				              	<div className="entry-content">
				                	{article.description}
				              	</div>
				              	<div className="actMore"><a href={`#/article${article.path}`}>more >></a></div>
				            </article>
			          	</section>
      				)
	      		})}
	      	</section>
	      	<footer className="site-footer">
	          	<div className="text-center">
	              	2017 - 呵呵哒
	              	<a href="index.html#" className="go-top">
	                  	<i className="fa fa-angle-up"></i>
	              	</a>
	          	</div>
	      	</footer>
	  	</section>
  	</div>
    )
  }
}