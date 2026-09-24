function Footer() {
  return (
    <>
      <footer className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl md:mx-auto md:rounded-xl bg-surface-dark p-4 md:p-6 lg:p-8 tracking-wider flex flex-col gap-3 md:flex-row md:items-center text-text-dark">
        <div className="contents md:flex md:flex-col md:gap-2">
          <p className="md:text-xl">DK &bull; Daniels Kuzmins</p>
          <p className="order-3 text-strong text-xs md:text-md">
            &copy; 2026 Daniels Kuzmins
          </p>
        </div>
        <span className="flex gap-2 md:ml-auto md:text-xl">
          <a
            href="https://github.com/Dannio258"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:bg-gray-600 bg-gray-700 p-2 md:p-3 rounded-md"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daniels-kuzmins/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:bg-gray-600 bg-gray-700 p-2 md:p-3 rounded-md"
          >
            LinkedIn
          </a>
          <a
            href="mailto:daniels.kuzmins04@gmail.com"
            className="hover:cursor-pointer hover:bg-gray-600 bg-gray-700 p-2 md:p-3 rounded-md"
          >
            Email
          </a>
        </span>
      </footer>
    </>
  );
}
export default Footer;
