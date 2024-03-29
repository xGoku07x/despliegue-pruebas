import Navbar from '../../../components/GestionUsuarios/NavBar';
import Aside from '../../../components/GestionUsuarios/Aside';
import { useRouter } from 'next/router';


 const Home = () => {
  const router = useRouter();
  const findedUsers = localStorage.getItem("users");
  const loggedInUserId = localStorage.getItem("loggedin")
  const users = findedUsers ? JSON.parse(findedUsers) : [];
  const loggedInUser = users.find((user:any) => user.id === loggedInUserId)

  return (
    <>
    <Navbar />
    <Aside />
    <section className="fixed top-12 pt-20 pb-40 w-full h-screen flex flex-col items-center text-left" >
        <div className='w-auto'>
            <h1 className='font-bold text-2xl mb-10'>Información de la cuenta</h1>
          <div className='basic-info w-full'>
            <h3 className='font-bold text-xl mb-5'>Información básica</h3>
            <div>
              <h4 className='font-bold mb-4'>Identificación</h4>
              <p className='mb-6 w-96'>{loggedInUser.id} </p>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Nombre</h4>
              <div className='flex justify-between items-center relative'>
                <p className='mb-6 w-96'>
                  {loggedInUser.name} {loggedInUser.lastname}
                </p>
                <a  
                  onClick={() => router.push('/GestionUsuarios/Editname')}
                className='inline-block bg-white text-gray-500 w-7 h-7 rounded-full text-center leading-7 no-underline cursor-pointer absolute left-96'><img src="/src/assets/mayor.png" alt="" /></a>
              </div>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Correo</h4>
              <div className='flex justify-between items-center relative'>
                <p className='mb-6 w-96'>
                  {loggedInUser.email}
                </p>
                <a 
                onClick={() => router.push('/GestionUsuarios/EditEmail')}
                className='inline-block bg-white text-gray-500 w-7 h-7 rounded-full text-center leading-7 no-underline cursor-pointer absolute left-96'><img src="/src/assets/mayor.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}


export default Home;
