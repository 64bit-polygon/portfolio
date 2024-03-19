# [natedelacruz.com](https://natedelacruz.com/)

This is my calling card portfolio site, showcasing some of the work I've done over the past decade. This code is live at [https://natedelacruz.com/](https://natedelacruz.com/). I am a full-stack developer based in NYC.

## Frontend frameworks

The app is built using [React](https://react.dev/) with [Vite](https://vitejs.dev/) as a build tool.

## Structure

**`src/pages`**: Holds specific views (Contact, etc.) and view-specific components.

**`src/components`**: Holds components shared across views.

**`src/state`**: Holds global state files related to `recoil` state (`atoms` and `selector` definitions).

**`src/styles`**: Defines all universal styles, `CSS` resets, and style variables.

**`src/App.jsx`**: Controls the `GET` call to the `firestore database` to get the posts and then adds them to the global state.

**`src/main.jsx`**: The main entry point into the app, holds the `<BrowserRouter />`.

## Global state management

The only data held in the global state is the response data holding info for the posts (in the code, they're referred to as `pieces`). I'm using [`recoil`](https://recoiljs.org/) as it's comparatively succinct and simple react global state management solution. All non-global state management is controlled by individual components.

## Static assets

**`/public/images`**: images
**`/public/fonts`**: fonts

To reference them in a component or `.scss` file, `Vite` assumes all relative URLs from the `/public` directory as a base:

`<img src="/images/my-img.png">`

```css
.elem {
  background-image: url(/images/my-img.png);
}
```

## Hosting and backend

The app was using google's [Firebase](https://firebase.google.com/) platform:

Hosting is via [Firebase Hosting](https://firebase.google.com/docs/hosting)

The database built via [Firebase's Firestore](https://firebase.google.com/docs/firestore) `NoSQL` cloud database.

Images and videos are hosted using [Firebase Cloud Storage](https://firebase.google.com/docs/storage).

## Adding posts

Given the small amount of posts, and this app is not for general use, it makes sense to add posts manually to the `Firestore Database`. Here is the schema for a post:

```json
{
  "description": "String",
  "desktopCarouselCaptions": ["String"],
  "desktopCarouselUrls": ["String"],
  "desktopVideoCaptions": {
    "TimeStamp:Integer": "String"
  },
  "desktopVideoPoster": "String",
  "desktopVideoUrl": "String",
  "externalLink": "String",
  "hasDesktop": "Boolean",
  "hasMobile": "Boolean",
  "hasTablet": "Boolean",
  "isDesigner": "Boolean",
  "isDeveloper": "Boolean",
  "mobileCarouselUrls": ["String"],
  "mobileVideoPoster": "String",
  "mobileVideoUrl": "String",
  "piecesOrder": "Integer",
  "route": "String",
  "subTitle": "String",
  "svgFile": "String",
  "title": "String"
}
```

## A note on the animated `.svg` thumbs

All animated thumbnails are self-contained -- all the logic controlling a given `.svg` is present in that `.svg`. This reduces friction when making new posts. I opted for using a combination of embedded `JS` and `CSS` animations that loop instead of `SMIL` animations which are more clunky to implement. When making a new thumbnail I'd make the basic thumb, with all its pieces in one illustrator file exported as an `.svg`, then edit that file using a text editor.

## Local development

`$ npm run dev`: runs the app in development mode, view it at [http://localhost:5173/](http://localhost:5173/). Hot reloading is enabled.

`$ npm run build`: builds the app for production in the `/dist` directory. View it by running `$ npm run preview`.

`$ npm run preview`: runs the built production app from the `/dist` directory. View it at [http://localhost:4173/](http://localhost:4173/).

## Publishing

Build the app to the `/dist` directory:
```$ npm run build```

Ensure the `firebase.json` is pointing to the `/dist` directory:
```json
{
  "hosting": {
    "public": "dist"
  }
}
```

Using the [`firebase` CLI](https://firebaseopensource.com/projects/firebase/firebase-tools/) run:
```$ firebase deploy --only hosting```

This will push the site to production.

## Secrets 

Secrets are placed in a `.env` file and have keys prefixed with `VITE_`, as recommended by the [docs](https://vitejs.dev/guide/env-and-mode).