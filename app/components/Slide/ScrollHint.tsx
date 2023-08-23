const ScrollHint: React.FC = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-primary-opacity-20 p-2 rounded-lg shadow-lg">
      <div className="animate-bounce">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
      <p className="text-center text-white text-sm">Scroll</p>
    </div>
  );
};

export default ScrollHint;
