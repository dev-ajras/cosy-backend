const GET = async() => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const parsedData = await response.json();
    return Response.json(parsedData);
}

const POST = () => {
    return Response.json({"message": "POST data"})
}

export {GET, POST};