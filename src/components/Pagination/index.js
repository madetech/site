import React from 'react'
import * as Reactstrap from 'reactstrap'

function buildHref(hrefPrefix, page) {
  if (page === 1) return hrefPrefix
  return `${hrefPrefix}/${page}`
}

function PreviousPage ({ currentPage, hrefPrefix }) {
  return (
    <Reactstrap.PaginationItem disabled={currentPage <= 1}>
      <Reactstrap.PaginationLink previous href={buildHref(hrefPrefix, currentPage - 1)}>
        « Prev
      </Reactstrap.PaginationLink>
    </Reactstrap.PaginationItem>
  )
}

function NextPage ({ currentPage, hrefPrefix, totalPages }) {
  return (
    <Reactstrap.PaginationItem disabled={currentPage >= totalPages}>
      <Reactstrap.PaginationLink next href={buildHref(hrefPrefix, currentPage + 1)}>
        Next »
      </Reactstrap.PaginationLink>
    </Reactstrap.PaginationItem>
  )
}

function PageNumbers ({ currentPage, hrefPrefix, totalPages }) {
  let pages

  switch (currentPage) {
    case 1:
    case 2:
      pages = [1, 2, 3, 4, 5].slice(0, totalPages)
      break;
    case totalPages:
      pages = [currentPage - 4, currentPage -3, currentPage -2, currentPage - 1, currentPage]
      break;
    case totalPages - 1:
      pages = [currentPage -3, currentPage -2, currentPage - 1, currentPage, currentPage + 1]
      break;
    default:
      pages = [currentPage -2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
  }

  return pages.filter(page => page > 0 && page <= totalPages).map((page) => {
    return (
      <Reactstrap.PaginationItem active={currentPage === page}>
        <Reactstrap.PaginationLink href={buildHref(hrefPrefix, page)}>
          {page}
        </Reactstrap.PaginationLink>
      </Reactstrap.PaginationItem>
    )
  })
}

export default function Pagination ({ currentPage, hrefPrefix, totalPages }) {
  return (
    <Reactstrap.Pagination size='md' listClassName='justify-content-center'>
      <PreviousPage currentPage={currentPage} hrefPrefix={hrefPrefix} />
      <PageNumbers currentPage={currentPage} hrefPrefix={hrefPrefix} totalPages={totalPages} />
      <NextPage currentPage={currentPage} hrefPrefix={hrefPrefix} totalPages={totalPages} />
    </Reactstrap.Pagination>
  )
}
