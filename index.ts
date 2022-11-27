interface TaskData {
    name: string,
    priority: string,
    tdate: Date,
}

let tasks: TaskData[] = []

const btn = document.getElementById("addbtn")!;
const tname = document.getElementById("tname")!;
const priority = document.getElementById("priority")
const tdate = document.getElementById("tdate")
const singleTask = document.querySelector(".single-task")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    tasks.unshift({
        name: tname.value,
        priority: priority.value,
        tdate: Date(tdate.value)
    })

    const taskl = document.getElementById("task-list"
    if (taskl) {
        taskl.remove();
    }

    const task = document.createElement("div");
    task.setAttribute("id", "task-list")
    singleTask?.appendChild(task)

    tasks.map((tsk) => {
        const heading = document.createElement("h4")
        const prior = document.createElement("p")
        const para = document.createElement("p");
        heading.innerText = tsk.name;
        task.appendChild(heading)
        prior.innerText = tsk.priority;
        task.appendChild(prior)
        para.innerText = tsk.tdate;
        task.appendChild(para)

    })

    console.log(tasks)
    tname.value = ""
    priority.value = ""
    tdate.value = ""
}
)
