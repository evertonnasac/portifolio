

import Provider from '../styles/Provider'
import GlobalStyles from '../styles/GlobalStyles';


export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Provider>
        <GlobalStyles/>
          {props.children}
        </Provider>
      </body>
    </html>
  )
}