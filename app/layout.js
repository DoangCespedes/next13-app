import { Navigation } from "./components/Navigation";
import '../styles/globals.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>My firs app with nextjs 13</title>
      </head>
      <body>
        
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
