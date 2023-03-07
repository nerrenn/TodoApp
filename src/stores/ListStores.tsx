import { action, map } from "nanostores"
import Home from "../components/Home"

export type Home ={
    label:string
}

export type HomeState = {
    TodoList: Home[]
}

export const HomeStore = map<HomeState>({
    TodoList: [],
})

export const AddList = action(
    HomeStore,
    'Add a list',
    (store) => {
        const {TodoList} = store.get()
        const ListName:string = `Liste ${TodoList.length}`
        const home:Home = {label:ListName}
        const newList = [home, ...TodoList]

        store.setKey('TodoList', newList)
    }
)
