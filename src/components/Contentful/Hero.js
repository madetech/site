import React, { Fragment } from 'react'
import threeSpaceToLineBreak from '../../helpers/threeSpaceToLineBreak'
import threeHyphenToSoftHyphen from '../../helpers/threeHyphenToSoftHyphen'

export default function ContentfulHero({
  id,
  pageBreadcrumb,
  pageTitle,
  headerText,
  headerImage,
  textColour,
  textSize,
  backgroundColour,
  headerLinks,
}) {
  let pageBreadcrumbComponent
  let textColourStyle
  let textSizeStyle
  let headerTextComponent
  let headerLinksComponent
  let links

  let backgroundColourStyle

  if (pageBreadcrumb && pageBreadcrumb.links) {
    pageBreadcrumbComponent = renderBreadcrumb(pageBreadcrumb.links)
  }

  if (headerText) {
    headerTextComponent = (
      <div className="contentful-hero__text">{headerText}</div>
    )
  }

  // if (headerLinks) {
  //   links = list()
  // }
  //
  // function list() {
  //   return (
  //     <div className="contentful-hero__header-links">
  //       <ul className="contentful-hero__header-links__ul">
  //         {headerLinks.map((link, index) => (
  //           <li id={link.id}>
  //             <a className="contentful-hero__links__a" href={`#${link.id}`}>
  //               {link.name}
  //             </a>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }

  // if (headerLinks) {
  //   headerLinksComponent = (
  //     <div className="contentful-hero__header-links">{headerLinks[0].name}</div>
  //   )
  // }

  textColourStyle = textColour || ''
  textSizeStyle = textSize || ''
  backgroundColourStyle = backgroundColour || ''

  let parsedTitle = threeSpaceToLineBreak(pageTitle)
  parsedTitle = threeHyphenToSoftHyphen(parsedTitle)

  return (
    <div className={`contentful-hero ${backgroundColourStyle}`} id={id}>
      <div className="container">
        <div className="contentful-hero__row">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
              <div className="contentful-hero__text-box">
                {pageBreadcrumbComponent}
                <h1
                  className={`contentful-hero__page-title ${textSizeStyle} ${textColourStyle}`}
                >
                  {parsedTitle}
                </h1>
                {headerTextComponent}
              </div>
            </div>
            <div
              className={`col-xl-6 col-lg-6 col-md-6 d-none d-md-block contentful-hero__image hero_${textColourStyle}`}
              style={{
                backgroundImage:
                  'url(' +
                  headerImage.fixed.src +
                  '), url(' +
                  headerImage.resize.src +
                  ')',
              }}
            >
              {/*{links}*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderBreadcrumb(links) {
  const finalLink = links.length - 1

  return (
    <div className="contentful-hero__breadcrumb">
      {links.map((link, index) => {
        return (
          <Fragment key={index}>
            <a href={link.url}>{link.title}</a>
            {index < finalLink && ' / '}
          </Fragment>
        )
      })}
    </div>
  )
}
