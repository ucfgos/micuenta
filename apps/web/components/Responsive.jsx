function Responsive({ children }) {
  return (
    <div className="xs:w-10/12 $ mx-auto mt-5 w-11/12 sm:w-9/12 md:ml-5 md:mr-auto md:mt-0 md:w-8/12 lg:w-7/12 xl:w-5/12">
      {children}
    </div>
  );
}

export default Responsive;
