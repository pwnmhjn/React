import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/theoctfirst")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        return data;
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl">
      Github followers :{data.followers}
    </div>
  );
}

export default Github;
