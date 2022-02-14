import { useState } from "react"
import { getProjects } from "../../../../store/project/selectors"
import { addProjectAction, removeProjectAction } from "../../../../store/project/actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



export const Projects = ({projects, addProject, removeProject}) => {
    const [value, setValue] = useState();

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addProject({
            id: Date.now(),
            name: value,
        })
        setValue('');
    }



    



    return <div>
        <h1>Projects</h1>


        <ul>
            {
                projects.map((item) => <ol>
                    <Link to={`/projects/${item.id}`}>
                    [{item.id}] {item.name}
                    <button onClick={() => removeProject(item.id)}>X</button>
                    </Link>
                </ol>)
            }
        </ul>


        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={value}/>
            <button>save</button>
        </form>
    </div>
}




const mapStateToProps = (state) => ({
    projects: getProjects(state)
})



// вариант простой
const mapDispatchToProps = {
    addProject: addProjectAction,
    removeProject: removeProjectAction,
}
// вариант сложнее
// const mapDispatchToProps = (dispatch) => ({
//     addProject: (project) => dispatch(addProjectAction(project)),
//     removeProject: (projectId) => dispatch(removeProjectAction(projectId)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Projects)