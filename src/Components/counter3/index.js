import { useSelector, useDispatch } from "react-redux";

import { increamentcount3, decreamentcount3 } from "../../store/slice/counter3";

function Counter3() {
  const dispatch = useDispatch();

  const count3 = useSelector((state) => state.counter3.value);

  const handleAdd3 = () => {
    dispatch(increamentcount3());
    console.log("count")
  };

  const handleMinus3 = () => {
    dispatch(decreamentcount3());
  };

  return (
    <div className="h-[40vh] w-[100%] flex justify-center items-center text-center">
      <button className="bg-green-400 mr-[40px]" onClick={handleAdd3}>
        add
      </button>
      <h1 className="text-[30px]">{count3}</h1>
      <button onClick={handleMinus3} className="bg-red-400 ml-[40px]">
        minus
      </button>
    </div>
  );
}

export default Counter3;
