import React, { Component } from 'react'
// import classnames from 'classnames'
import styles from './pagination.css'

class Pagination extends Component {
  constructor (props) {
    super(props)

    this.goToPage = this.goToPage.bind(this)
  }

  goToPage (page) {
    return () => {
      this.props.goToPage(page)
    }
  }

  render () {
    const { pagination: { currentPage, numberOfPages } } = this.props

    return (
      <div className={styles.pagination}>

        {
          currentPage > 1 &&
          <button className={`btn btn-default ${styles.prev}`}
            onClick={this.goToPage(currentPage - 1)}>
            <i className='fa fa-chevron-left' />
          </button>
        }

        {
          !!(currentPage - 1) &&
          <button className={`btn btn-default`}
            onClick={this.goToPage(currentPage - 1)}>
            <span>{currentPage - 1}</span>
          </button>
        }

        <button className={`btn btn-default ${styles.btnActive}`}
          onClick={() => {}}>
          <span>{currentPage}</span>
        </button>

        {
          (currentPage + 1) <= numberOfPages &&
          <button className={`btn btn-default`}
            onClick={this.goToPage(currentPage + 1)}>
            <span>{currentPage + 1}</span>
          </button>
        }

        {/* <div className={`${styles.dot}`}>
          <span>. . .</span>
        </div> */}

        {
          currentPage < numberOfPages &&
          <button className={`btn btn-default ${styles.next}`}
            onClick={this.goToPage(currentPage + 1)}>
            <i className='fa fa-chevron-right' />
          </button>
        }
      </div>
    )
  }
}

export default Pagination
