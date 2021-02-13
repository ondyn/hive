import React from "react";
import logo from "./logo.svg";
import "./App.css";

const channels = [
  1153527,
  1154159,
  1154198,
  1154205,
  1154208,
  1154214,
  1154216,
  1154220,
  // 1154222,
  // 1154223,
];

// <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1153527/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
const Ul = (channelId: number) => {
  const graphs = [
    { id: 1, color: "1fd364" },
    { id: 2, color: "d3521f" },
    { id: 3, color: "d62020" },
    { id: 4, color: "0008ff" },
  ];

  return (
    <>
      {graphs.map((item) => {
        return (
          <iframe
          // width="50vw"
            width="350"
            height="260"
            style={{ border: "1px solid #cccccc", margin: '5px' }}
            src={`https://thingspeak.com/channels/${channelId}/charts/${item.id}?bgcolor=%23ffffff&color=%23${item.color}&dynamic=true&width=auto&height=auto&xaxis=%C4%8Das&results=60&type=spline&update=30`}
          ></iframe>
        );
      })}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      {channels.map((channel) => {
        return (
          <div style={{ margin:'5px', padding:'5px', border: "2px solid darkgrey" }}>{Ul(channel)}</div>
        );
      })}
    </div>
  );
};

export default App;
