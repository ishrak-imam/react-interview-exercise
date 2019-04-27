import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './pagination.css'

class Pagination extends Component {
  constructor (props) {
    super(props)
    this.goToPage = this.goToPage.bind(this)
  }

  goToPage (page) {
    return () => {
      if (this.props.currentPage !== page) {
        this.props.goToPage(page)
      }
    }
  }

  render () {
    const { pages, currentPage } = this.props
    return (
      <div className={styles.pagination}>
        <button onClick={this.goToPage(pages[0])} className={`${styles.anchor}`}>&laquo;</button>
        {pages.map(page => (
          <button
            onClick={this.goToPage(page)}
            key={page}
            className={classnames(styles.anchor, {
              'active': currentPage === page
            })}
          >{page}</button>
        ))}
        <button onClick={this.goToPage(pages[pages.length - 1])} className={`${styles.anchor}`}>&raquo;</button>
      </div>
    )
  }
}

Pagination.propTypes = {
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired
}

export default Pagination
