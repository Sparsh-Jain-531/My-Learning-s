const fun=()=>{
    try {
        console.log("Program runs Successfully!!!")
        return;
        // console.log(a)
    } catch (error) {
        console.log(error)
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    } finally {
        console.log("Program has ended")
    }
    console.log("Not run due to return")
}
fun()