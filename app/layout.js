// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import SessionWraper from "@/components/SessionWraper";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "REGISTRATION FOR EVENT",
//   description: "This Web Page Is For Event Registration",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

//         <SessionWraper>
        
//         <Navbar/>
//                 <div className="min-h-[89vh] [background-image:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%),repeating-linear-gradient(to_right,#321975_0px,#321975_0.1px,transparent_1px,transparent_50px),repeating-linear-gradient(to_bottom,#2E1D61_0px,#2E1D61_0.1px,transparent_1px,transparent_70px)] 
//   [background-blend-mode:screen] text-white">
                

//           {children}
//           {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
          
//           {/* <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}
//          {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
          
        
//         </div>
//         <Footer/>
//         </SessionWraper>
//       </body>
//     </html>
//   );
// }


// app/layout.js or layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWraper from "@/components/SessionWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "REGISTRATION FOR EVENT",
  description: "This Web Page Is For Event Registration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <SessionWraper>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow [background-image:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%),repeating-linear-gradient(to_right,#321975_0px,#321975_0.1px,transparent_1px,transparent_50px),repeating-linear-gradient(to_bottom,#2E1D61_0px,#2E1D61_0.1px,transparent_1px,transparent_70px)] [background-blend-mode:screen]">
              {children}
            </main>

            <Footer />
          </div>
        </SessionWraper>
      </body>
    </html>
  );
}
