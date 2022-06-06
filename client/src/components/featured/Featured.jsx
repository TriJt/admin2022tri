import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/ship/countByStatus?statuses=Active,Repair,Parking"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/62/ea/22/62ea2273f7760bfe384fd01eb2bc9683.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Active</h1>
              <h2>{data[0]} ship</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/3c/30/82/3c3082aed3db05f83033e8156daefe22.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Repair</h1>
              <h2>{data[1]} ship</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/ea/12/ab/ea12ab21619d2977d0d53f703046813f.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Parking</h1>
              <h2>{data[2]} ship</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
