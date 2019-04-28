import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Pagination.css'

class Pagination extends Component {
  constructor (props) {
    super(props)
    this.calculatePages = this.calculatePages.bind(this)
    this.goToPage = this.goToPage.bind(this)
  }

  goToPage (page) {
    return () => {
      if (this.props.currentPage !== page && !(page < 1) && !(page > this.props.pages.length)) {
        this.props.goToPage(page)
      }
    }
  }

  calculatePages (pages, page) {
    const currentPage = Number(page)

    if (pages.length <= 4) return pages
    const pagesChunk = []

    if (currentPage === pages.length) {
      pagesChunk.push('dot')
      for (let i = currentPage - 2; i <= currentPage; i++) {
        pagesChunk.push(String(i))
      }
      return pagesChunk
    }

    if (currentPage === 1) {
      for (let i = 1; i <= currentPage + 2; i++) {
        pagesChunk.push(String(i))
      }
      pagesChunk.push('dot')
      return pagesChunk
    }

    if (pages.length > 4 && Math.ceil(pages.length / 2) > currentPage) {
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pagesChunk.push(String(i))
      }
      pagesChunk.push('dot')
    }
    if (pages.length > 4 && Math.ceil(pages.length / 2) <= currentPage) {
      pagesChunk.push('dot')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pagesChunk.push(String(i))
      }
    }
    return pagesChunk
  }

  render () {
    let { pages, currentPage } = this.props

    const chunkedPages = this.calculatePages(pages, currentPage)

    return (
      <div className={styles.pagination}>
        <button onClick={this.goToPage('1')} className={`${styles.anchor}`}>&laquo;</button>
        <button onClick={this.goToPage(String(Number(currentPage) - 1))} className={`${styles.anchor}`}>&lsaquo;</button>
        {chunkedPages.map(page => {
          if (page === 'dot') return <span className={`${styles.anchor}`} key={page}>. . .</span>
          return (
            <button
              onClick={this.goToPage(page)}
              key={page}
              className={classnames(styles.anchor, {
                'active': currentPage === page
              })}
            >{page}</button>
          )
        })}
        <button onClick={this.goToPage(String(Number(currentPage) + 1))} className={`${styles.anchor}`}>&rsaquo;</button>
        <button onClick={this.goToPage(String(pages.length))} className={`${styles.anchor}`}>&raquo;</button>
      </div>
    )
  }
}

Pagination.propTypes = {
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired
}

export default Pagination
