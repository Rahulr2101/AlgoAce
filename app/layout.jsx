import '@styles/globals.css'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
        <div className='relative z-10 flex justify-center items-center flex-col  mx-auto sm:px-2 px-8'>{children}</div>
        </body>
     
    </html>
  );
};

export default RootLayout;