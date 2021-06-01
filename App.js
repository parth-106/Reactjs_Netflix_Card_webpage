import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

// const ncard = (data) => {
//   return (
//     <Card
//       id={data.id}
//       imgsrc={data.imgsrc}
//       sname={data.sname}
//       title={data.title}
//       link={data.link}
//     />
//   );
// };
// console.log(Sdata[0]);

const App = () => {
  return (
    <>
      <h1 className="Heading_style">
        😃 Netflix Series in 2021 Best Series Ever 😃
      </h1>

      {Sdata.map((data) => {
        return (
          <Card
            key={data.id}
            imgsrc={data.imgsrc}
            sname={data.sname}
            title={data.title}
            link={data.link}
          />
        );
      })}
    </>
  );
};

export default App;
