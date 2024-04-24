import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbAllowed, setNumbAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*_+:;><?/|=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [charAllowed, length, numbAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full text-center max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-700">
        <h4 className=" text-center text-white">Password Generator</h4>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="curser-pointer"
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbAllowed}
              id="numberInput"
              onChange={() => {
                setNumbAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number?</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character?</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
