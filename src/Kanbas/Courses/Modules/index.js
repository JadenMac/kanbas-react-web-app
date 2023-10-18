import ModuleList from "./ModuleList"


function Modules() {
    return (
        <div class="col">
        <div class="d-flex justify-content-end">
        <button class="btn btn-sm btn-secondary">Collapse All</button>
        <button class="btn btn-sm btn-secondary">View Progress</button>

        <div class="dropdown">
          <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Publish All
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Publish All</a></li>
            <li><a class="dropdown-item" href="#">Publish All modules and items</a></li>
            <li><a class="dropdown-item" href="#">Publish modules onlys</a></li>
            <li><a class="dropdown-item" href="#">Unpublish All</a></li>
          </ul>
        </div>


        <button class="btn btn-sm  btn-danger">Module</button>
        <button class="btn btn-sm btn-secondary"><i class="fa-solid fa-plus"></i></button>
      </div>
      <hr />

        <ModuleList/>
      </div>

    )
}

export default Modules