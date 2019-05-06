# Made Tech Site

Welcome! This repository is responsible for powering www.madetech.com. We use a combination of Gatsby.js for building a static site from WordPress and Contentful content.

<details>
  <summary>Table of Contents</summary>

  - [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Preview Application](#preview-application)
  - [Get Help from Maintainers](#maintainers)
  - [License](#license)
</details>

## Overview

By combining the static site builder Gatsby.js with WordPress and Contentful we have created a platform to enable non-technical users to be able to change the contents of www.madetech.com.

There are four main technical concepts to understand how www.madetech.com works:

- Gatsby.js site
- [Preview application](#preview-application)
- CircleCI pipeline
- Heroku deployments

There is a presentation that provides a [technical overview](https://docs.google.com/presentation/d/1gvLGlfNV3dPTr7EXeXm_Jy1wPhTjLAQfMFGNR2qtSnM/edit#slide=id.g59303a9326_0_296) of the Made Tech Site content pipeline, architecture and deployment process.

## Getting Started

This short guide will help you get started with setting this project up on your development machine. The only prerequisite is that you have Node.js installed.

**Important:** You will need to make sure you have Node v11 installed on your development machine. There is currently an issue with the sharp package when installing on Node.js v12. Hopefully sharp will fix this soon and this message can be removed.

### Installing for the first time

Use git to clone down this repository and then install the projects dependencies with NPM:

```
git clone https://github.com/madetech/made-blog
cd made-blog
npm install
```

Now you will need to create a `.env` file with the appropriate variables and values. See the [Environment Variables](#environment-variables) section for the full list. You will need to get the values from a colleague.

### Starting the development server

Boot up the Gatsby.js development server:

```
npm run dev
```

You can now go to http://localhost:8000. You should see the Gatsby.js application.

You can now edit the templates and components in [`src/`](src/) and see your changes update live in the browser.

## Environment Variables

The following environment variables must be present when developing and building this application.

```
WORDPRESS_BASE_URL
WORDPRESS_CLIENT_SECRET
WORDPRESS_CLIENT_ID
WORDPRESS_USERNAME
WORDPRESS_PASSWORD
CONTENTFUL_SPACE_ID
CONTENTFUL_HOST
CONTENTFUL_ACCESS_TOKEN
```

In your development environment you can create a file called `.env` that contains the necessary variables and values.

In the CI environment these variables have been setup manually so that the build process has access to them.

## Preview Application

In order to provide live previews of content from Contentful there is a Next.js application within [`preview/`](preview/). This application reuses components from the Gatsby.js application to create a full mock up of a page in order for it to be previewed.

## Maintainers

This project was setup by [Luke Morton](luke@madetech.com) and has since been contributed to by other Made Tech engineers.

If you need help working with this project, speak to one of it's contributors.

## License

While this application is public for all to view, it is unlicensed and is for the use of Made Tech Limited only.
