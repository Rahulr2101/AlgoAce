import "@styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className=" relative min-h-screen text-text bg-background">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
