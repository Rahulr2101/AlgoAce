import "@styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className=" relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
