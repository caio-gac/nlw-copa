import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import logoImg from '../assets/logo.svg';
import iconCheckImg from '../assets/icon-check.svg';

export default function Home(props) {
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center'>
      <main>
        <Image src={logoImg} alt="NLW Copa"/>

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div className='mt-10 flex items-center gap-2 '>
          <Image src={usersAvatarExampleImg} alt='' />

          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className='mt-10 flex gap-2'>
          <input
            className='flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-small'
            type="text"
            required
            placeholder="Qual o nome do seu bolão?"/>
          <button 
          className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-small uppercase hover:bg-yellow-700'
          type="submit"
          >Criar meu bolão</button>
        </form>

        <p>Após criar o seu bolão, você recebera um código único que poderá usar para convidar outras pessoas </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt=""/>
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
          <Image src={iconCheckImg} alt=""/>
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>
      <Image src={appPreviewImg} alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
      />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()
  
//   return {
//     props: { 
//       count: data.count,
//     } 
//   }
// }
