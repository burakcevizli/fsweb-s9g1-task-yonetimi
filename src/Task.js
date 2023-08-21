import React from "react";
import { ToastContainer , toast } from "react-toastify";

const Task = ({ taskObj, onComplete }) => {

  const notify = () => toast("Göreviniz Tamamlananlara Eklendi !");

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div >
      {onComplete && <button onClick={() => { onComplete(taskObj.id); notify();}}>Tamamlandı</button>}
      <ToastContainer 
          position="top-right"
          autoClose={1300}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
    </div>
  );
};

export default Task;
