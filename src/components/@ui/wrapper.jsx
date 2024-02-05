const Wrapper = ({ children, className }) => {
  return (
    <section
      className={`backdrop-blur-3xl backdrop-filter bg-[#38383b] bg-opacity-50 text-white rounded-3xl w-[70%] mx-auto p-6 overflow-hidden mb-12 ${className}`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
