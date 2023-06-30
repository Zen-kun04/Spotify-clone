import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import style from '@/styles/body.module.scss'
import { getAPIKey } from './utils/SpotifyAPI'
import { use } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baguettify',
  description: 'New music generation made by communists',
}

async function tokenGetter() {
  return await getAPIKey().then(k => k);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const key = use(tokenGetter());
  
  return (
    <html lang="en">
      
      <body className={`${inter.className} ${style.body}`}>
      {key && (
        <Header token={key}/>
      )}
      
      {children}
          
      
        
        
      </body>
    </html>
  )
}
