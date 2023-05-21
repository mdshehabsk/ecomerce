import { Roboto } from 'next/font/google';
import './globals.css'
import Header from './components/Header';
import Banner from './components/Banner/Banner';
const roboto = Roboto({
  weight: ['400','500', '700'],
  subsets: ['latin'],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}` }>
        <Header/>
        <Banner/>
        {children}
        <h1 className='text-5xl' > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores voluptate similique voluptatem optio! Culpa facere quos qui error animi sequi libero deserunt eius maiores veritatis. Explicabo porro inventore quos repellendus debitis unde magni totam quas. Quod aliquam reprehenderit in eligendi optio. Ab exercitationem, voluptatum reprehenderit dolorum debitis delectus provident eum eos natus nobis dignissimos distinctio fuga ea molestiae.</h1>
        </body>
    </html>
  )
}
