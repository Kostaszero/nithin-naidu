import Info from "./Info/Info"
import Friends from "./Friends/Friends"
import Projects from "./Projects/Projects"
import Timeline from "./Timeline/Timeline"

export default function ViewPage({idx}: any){
    const views = [<Info/>, <Timeline/> , <Friends/>, <Projects/>]
    return views[idx]
}