// -----
// MODEL
// -----

const create_task =
(id, title) => {
    return {
        id,
        title,
        completed: false
    };
};

export default create_task;