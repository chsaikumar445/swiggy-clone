const Shimmer = () => {
  return (
    <div className="restaurant-list flex flex-wrap max-w-5xl mx-auto mr-auto">
      {Array(18)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card w-50 bg-gray"></div>
        ))}
    </div>
  );
};

export default Shimmer;
