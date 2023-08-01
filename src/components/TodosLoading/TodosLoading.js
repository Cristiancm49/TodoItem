import "./TodosLoading.css";

function TodosLoading() {
  return (
    <>
      <div className="ContainerLoading">
        <div className="ContainerCreateLoading">
            <div className="ContainerCreateTaskLoading"></div>
        </div>
        
        <div className="ContainerInfoTaskLoading">
          <div className="InfoTaskLoading">
            <div className="TitleTaskLoading"></div>
              <div className="CounterTaskLoading"></div>
              <div className="SearchBarLoading"></div>
              <div className="ContainerTodosLoading">
                  <li className="ListLoading"></li>
                  <li className="ListLoading"></li>
                  <li className="ListLoading"></li>
                  <li className="ListLoading"></li>
                  <li className="ListLoading"></li>
                  <li className="ListLoading"></li>
            </div>
        </div>
            
        </div>
        
      </div>
    </>
  )
}

export { TodosLoading };
