import { useEffect, useState } from "react";
import "./App.css";
import InputBox from "./InputBox";

function App() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [likes, setLikes] = useState(0);
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  useEffect(() => {
    var objDiv = document.getElementById("scroll");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [messages]);

  const clear = () => {
    setMessages([]);
  };

  const pop = () => {
    var pop = document.getElementById("pop");
    pop.toggleAttribute("hidden");
  };

  return (
    <div className="row">
      <div className="col-3 bg-white">
        <div className="row mt-3">
          <div className="col-3">
            <div className="circle mx-2">
              <div className="circle-text">RR</div>
            </div>
          </div>
          <div className="col-9">
            <h5>Rolande Rainmondi</h5>
            <p>Research Nurse</p>
          </div>
        </div>
      </div>
      <div className="col-9 bg-light">
        <div className="row mt-3">
          <div className="col-8">
            <h5>Introductions</h5>
            <p>This Channel is For Company Wide Chatter</p>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={clear}>
              clear chat
            </button>
          </div>
        </div>
        <div id="scroll" style={{ height: "500px", overflowY: "scroll" }}>
          {messages.map((data, id) => {
            return (
              <table
                key={id}
                style={{ width: "80%", height: "100px" }}
                className="mb-3"
              >
                <tbody>
                  <tr>
                    <td style={{ width: "60px" }}>
                      <div
                        className="circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          padding: "10px",
                        }}
                      >
                        <div className="circle-text">{data.user.charAt(0)}</div>
                      </div>
                    </td>
                    <td>
                      <h5>
                        {data.user}{" "}
                        <span className="fs-6 fw-light mx-2">
                          {" "}
                          {" " +
                            new Date().getHours() +
                            ":" +
                            (new Date().getMinutes() < 10 ? "0" : "") +
                            new Date().getMinutes()}
                        </span>
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p
                                className="card p-2 align-middle"
                                style={{ maxWidth: "max-content" }}
                              >
                                {data.message}
                              </p>
                            </td>
                            <td>
                              <button
                                className="btn"
                                onClick={() => {
                                  setLikes(likes + 1);
                                }}
                              >
                                Like {likes}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
        <div className="row m-2">
          <div id="pop" hidden style={{ zIndex: 2 }}>
            {user_list.map((user, id) => (
              <button
                key={id}
                className="btn btn-link"
                onClick={() => {
                  setText("@" + user);
                }}
              >
                {"@" + user + " "}
              </button>
            ))}
          </div>
          <div className="d-flex">
            <button className="btn btn-light" onClick={pop}>
              @
            </button>
            <InputBox
              messages={messages}
              setMessages={setMessages}
              text={text}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
