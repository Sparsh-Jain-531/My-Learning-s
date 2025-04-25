import { useGetPostsQuery } from "./redux/api"


const App = () => {
  const {isError,isFetching,isSuccess,data,error}=useGetPostsQuery("")
  console.log(data)
  return (
    <div>
      RTK Typescript
    </div>
  )
}

export default App
