import 'mocha';
import sinon from 'sinon';
import * as todomodel from '../models/todo.model.js';
//import { getTodos } from '../models/todo.model.js';

describe("Todo Apis Stub", () => {
    let getTodosStub;
    const todosFunc = () => {
        return [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            }
        ];
    }
    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        }
    ];
    it('it should not get Todo Stub', async () => {
        getTodosStub = sinon.stub(todomodel, "getTodos").callsFake(todosFunc);
        let result = await getTodos()
        console.log(result)
        getTodosStub.restore();
    });
})