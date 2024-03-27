export default async function POST(){
  try{
    const {email, password} = await request.json()
    //validate email and password
    console.log ({ email, password })
  } catch(e) {
    console.log({ e })
  }
}