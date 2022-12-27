import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

//api
import {
  useGetTeamsSeasonQuery,
  useGetTodosQuery,
  useGetUsersQuery,
  useAddPostsMutation,
  useEditPostsMutation,
  useDeletePostsMutation,
} from "../../store/api/restApis";

import {
  increamentCount,
  dreceamentCount,
  displayName,
} from "../../store/slice/counter";

function Counter() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [tittle, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [index, setIndex] = useState("");

  const count = useSelector((state) => state.counter.count);
  const display = useSelector((state) => state.counter.display);

  //api
  const { data: postData } = useGetTeamsSeasonQuery();
  const { data: todos } = useGetTodosQuery();
  const { data: users } = useGetUsersQuery(count.toString());
  const [sendData] = useAddPostsMutation();
  const [editingData] = useEditPostsMutation();
  const [deletingData] = useDeletePostsMutation();

  const handleAdd = () => {
    dispatch(increamentCount());
  };
  // console.log("data", data);
  const handleMins = () => {
    dispatch(dreceamentCount());
  };
  console.log(postData);
  const handleName = () => {
    // dispatch(displayName(`hello world`));
    dispatch(displayName(name));
    setName("");
  };

  const handleData = (e) => {
    e.preventDefault();
    const finalData = { title: tittle, body: body };
    // console.log(finalData);
    // sendData(finalData);
    editingData({ id: index, title: tittle, body: body });
  };

  //edit tittle
  const editTittle = (i) => {
    console.log(i);
    setTitle(i.title);
    setBody(i.body);
    setIndex(i.id);
  };
  const editDeleteHandle = (i) => {
    console.log(i.id);
    deletingData(i.id);
  };

  const displayType = count % 2 === 0 ? "even" : "odd";
  const displayColorType = count % 2 === 0 ? "text-[green]" : "text-[red]";

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-300">
        <h1 className={`mt-[40px] text-[40px] ${displayColorType}`}>
          {displayType}
        </h1>
        <form onSubmit={handleData}>
          title:
          <input
            name="title"
            value={tittle}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-[10px]"
            placeholder="enter title"
          />
          <br />
          body:
          <input
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="enter body"
          />
          <br />
          <button className="bg-lime-600" type="submit">
            submit
          </button>
        </form>
        <div>
          <ul className="grid grid-cols-3 gap-2">
            {postData?.map((i) => (
              <li
                className="border-solid border-2 border-sky-500 m-[10px] bg-white p-[10px] rounded-lg"
                key={i?.id}
              >
                <div className="m-3">
                  <p className="mb-[5px]">
                    <span className="text-[red] font-[700]">tittle : </span>
                    {`${i?.title}`}
                  </p>
                  <hr className="bg-black" />
                  <p>
                    <span className="text-[red] font-[700]">body : </span>
                    {`${i?.body}`}
                  </p>
                </div>
                <button
                  onClick={() => editTittle(i)}
                  className="bg-emerald-300 ml-[20px] mr-[20px] p-[10px]"
                >
                  edit
                </button>
                <button
                  onClick={() => editDeleteHandle(i)}
                  className="bg-red-500 p-[10px]"
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="className={`mt-[40px] text-[40px] ">{display}</h1>
        <div className="h-[40vh] w-[100%] flex justify-center items-center text-center">
          {/* <button className="bg-green-400 mr-[40px]" onClick={handleAdd}>
            add
          </button>
          <h1 className={`text-[30px] `}>{count}</h1>
          <button className="bg-red-400 ml-[40px]" onClick={handleMins}>
            minus
          </button> */}

          <br />
          {/* <h1>{name}</h1> */}
          <input value={name} className="ml-9" placeholder="enter name" />
          <button className="ml-[10px] bg-orange-400 " onClick={handleName}>
            display input
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
