/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
// import ArticleMap  from 'data/article'
import AsyncComponent from 'modules/AsyncComponent'
import ArticleRender from 'modules/ArticleRender'
import articles from 'data/article'

import '../styles/article.styl'

export default class Index extends React.Component {
	// <ArticleRender articlePath={path}/>
	
  	render () {
	  	const filePath = this.props.params.path
	  	const path = `/article/${filePath}.md`
	  	const nowComp = articles.find((art,index) => {
			return art.path == `/${filePath}`
		})
	    return (
	      <div>
	      	<div className="article_header"></div>
	      	<div className="article-wrap">
	      		<AsyncComponent comFn={nowComp.component}/>
	      	</div>
	      </div>
	    )
  	}
}