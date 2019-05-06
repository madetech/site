# Preview Application

This is a Next.js application that enables live previews of pages created in Contentful. It directly queries the Contentful API on each page load.

## Getting Started

This short guide will help you get started with setting this project up on your development machine.

You need to have already followed the [Getting Started](../#getting-started) instructions in the Made Tech Site README.

### Installing for the first time

Make sure you are in this directory (`preview/`) on the command line and then run:

```
npm install
```

**Important:** As per the Getting Started instructions from the Made Tech Site you must make sure the `.env` file exists in the top level directory of this project.

### Starting the development server

Boot up the Next.js development server:

```
npm run dev
```

You can now go to https://localhost:3000/preview?id=1K8trnjPmwK2MOUMcsC8mI. You should see the Next.js application previewing the Careers page of www.madetech.com.

Happy developing!
