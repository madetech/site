# Preview Application

This is a Create React App application that enables live previews of pages created in Contentful. It directly queries the Contentful API on each page load.

## Getting Started

This short guide will help you get started with setting this project up on your development machine.

You need to have already followed the [Getting Started](../#getting-started) instructions in the Made Tech Site README.

### Installing for the first time

Make sure you are in this directory (`preview/`) on the command line and then run:

```
yarn
```

**Important:** As per the Getting Started instructions from the Made Tech Site you must make sure the `.env` file exists in the top level directory of this project.

### Starting the development server

Copy over Gatsby components into the preview application:

```
yarn gatsby
```

Boot up the development server:

```
yarn start
```

You can now go to http://localhost:3000/?id=1K8trnjPmwK2MOUMcsC8mI. You should see the CRA application previewing the Careers page of www.madetech.com.

Happy developing!

## Environment Variables

```
SKIP_PREFLIGHT_CHECK
REACT_APP_WORDPRESS_ENDPOINT_URL
REACT_APP_CONTENTFUL_SPACE_ID
REACT_APP_CONTENTFUL_HOST
REACT_APP_CONTENTFUL_ACCESS_TOKEN
```
